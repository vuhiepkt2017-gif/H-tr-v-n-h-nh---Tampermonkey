/**
 * Google Apps Script - Backend gộp chung 3 tính năng:
 * 1. Quét & In (Lưu vào trang tính "Mã")
 * 2. Chuyển Pick (Lưu vào trang tính "Chuyển Pick")
 * 3. Tự động in TO SPX Shopee (Lưu vào trang tính "InTO")
 */

function doGet(e) {
  var action = e.parameter.action;
  var pcName = e.parameter.pc || "PC ẩn danh";
  
  if (action === "get_pending") {
    return getPendingCode(pcName);
  }
  
  if (action === "get_pending_chuyen_pick") {
    return getPendingChuyenPick(pcName);
  }
  
  if (action === "get_pending_to") {
    return getPendingTO(pcName);
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    status: "error",
    message: "Hành động (action) không hợp lệ"
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    var action = data.action;
    if (action === "getTOList" || action === "addTO" || action === "markPrinted") {
      return handleSpxRequest(data);
    }

    var username = data.username || "";
    var email = data.email || "";
    var riderCode = data.riderCode || "";
    var now = new Date();
    
    var riderName = "";
    if (email || username) {
      var displayName = username || email;
      var lookupName = getRiderNameFromCode(riderCode);
      var displayRider = lookupName || displayName;
      riderName = riderCode ? displayRider + " ( " + riderCode + " - " + displayName + " )" : displayName;
    } else if (data.password) {
      riderName = authenticateRider(username, data.password);
      if (!riderName) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          message: "Tài khoản hoặc mật khẩu không chính xác!"
        })).setMimeType(ContentService.MimeType.JSON);
      }
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Thiếu thông tin người gửi (Email hoặc Rider Code)"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var isChuyenPick = data.type === "chuyen_pick" || data.pupCode || data.recipientDriver;

    if (isChuyenPick) {
      var pupCode = (data.pupCode || "").toString().trim().toUpperCase();
      var recipientDriver = (data.recipientDriver || "").toString().trim();
      
      if (!pupCode) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          message: "Thiếu mã PUP để chuyển pick"
        })).setMimeType(ContentService.MimeType.JSON);
      }

      var sheetCP = getOrCreateSheetChuyenPick();
      sheetCP.appendRow([pupCode, now, riderName, recipientDriver, "Chờ chuyển", ""]);

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        message: "Ghi nhận yêu cầu Chuyển Pick thành công",
        pupCode: pupCode,
        recipient: recipientDriver
      })).setMimeType(ContentService.MimeType.JSON);

    } else {
      var combinedCodes = "";
      if (data.codes && Array.isArray(data.codes)) {
        var cleanList = data.codes.map(function(c) { return c.toString().trim().toUpperCase(); }).filter(function(c) { return c.length > 0; });
        combinedCodes = cleanList.join('\n');
      } else if (data.code) {
        combinedCodes = data.code.toString().trim().toUpperCase();
      }
      
      if (!combinedCodes) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          message: "Không có mã hợp lệ nào được gửi lên"
        })).setMimeType(ContentService.MimeType.JSON);
      }
      
      var sheetMã = getOrCreateSheetMa();
      sheetMã.appendRow([combinedCodes, now, riderName, "Chờ in", ""]);
      
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        message: "Ghi nhận lô mã vào ô Excel thành công",
        rider: riderName
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Lỗi hệ thống Apps Script: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Xử lý yêu cầu In TO SPX Shopee
 */
function handleSpxRequest(data) {
  var action = data.action;
  var sheet = getOrCreateSheetInTO();
  
  if (action === "getTOList") {
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return ContentService.createTextOutput(JSON.stringify({ status: "success", data: [] }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    var endRow = Math.min(lastRow, 1000);
    var range = sheet.getRange(2, 1, endRow - 1, 1);
    var values = range.getValues();
    var toList = [];
    for (var i = 0; i < values.length; i++) {
      if (values[i][0]) {
        toList.push(values[i][0].toString().trim());
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: toList }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === "addTO") {
    var toNum = data.toNum;
    if (!toNum) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Missing toNum" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    var lastRow = sheet.getLastRow();
    var targetRow = lastRow + 1;
    if (targetRow > 1000) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Sheet InTO đầy" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    sheet.getRange("A" + targetRow).setValue(toNum.trim().toUpperCase());
    sheet.getRange("B" + targetRow).setValue("Chờ in"); // Thêm trạng thái Chờ in mặc định
    SpreadsheetApp.flush();
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã thêm " + toNum }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === "markPrinted") {
    var toNum = data.toNum;
    if (!toNum) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Missing toNum" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    var lastRow = sheet.getLastRow();
    if (lastRow >= 2) {
      var endRow = Math.min(lastRow, 1000);
      var range = sheet.getRange(2, 1, endRow - 1, 1);
      var values = range.getValues();
      var foundRow = -1;
      
      for (var i = 0; i < values.length; i++) {
        if (values[i][0] && values[i][0].toString().trim().toUpperCase() === toNum.trim().toUpperCase()) {
          foundRow = i + 2;
          break;
        }
      }
      
      if (foundRow !== -1) {
        sheet.getRange("B" + foundRow).setValue("Đã In");
        SpreadsheetApp.flush();
        return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã đánh dấu Đã In cho " + toNum }))
                             .setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Không tìm thấy mã TO" }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Hành động không được hỗ trợ" }))
                       .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Lấy ra mã TO chờ in đầu tiên từ sheet "InTO"
 */
function getPendingTO(pcName) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(10000); } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "busy" })).setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var sheet = getOrCreateSheetInTO();
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return ContentService.createTextOutput(JSON.stringify({ status: "no_data" })).setMimeType(ContentService.MimeType.JSON);
    
    var range = sheet.getRange(2, 1, lastRow - 1, 2);
    var values = range.getValues();
    for (var i = 0; i < values.length; i++) {
      var status = values[i][1].toString().trim();
      if (status === "Chờ in" || status === "") {
        var rowNum = i + 2;
        sheet.getRange(rowNum, 2).setValue("Đã In"); // Đánh dấu đã in trên Sheet
        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          toNum: values[i][0].toString().trim()
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "no_data" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}

/**
 * Tra cứu tên Rider từ mã Code
 */
function getRiderNameFromCode(riderCode) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Rider Codes") || ss.getSheetByName("Tài khoản");
    if (!sheet) return null;
    
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return null;
    
    var values = sheet.getRange(2, 1, lastRow - 1, 3).getValues();
    for (var i = 0; i < values.length; i++) {
      var codeVal = values[i][0].toString().trim().toUpperCase();
      var nameVal = values[i][1].toString().trim();
      if (codeVal === riderCode.trim().toUpperCase()) {
        return nameVal;
      }
    }
  } catch (e) {}
  return null;
}

/**
 * Lấy hoặc khởi tạo sheet "InTO"
 */
function getOrCreateSheetInTO() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("InTO");
  if (!sheet) {
    sheet = ss.insertSheet("InTO");
    sheet.appendRow(["TO Number", "Trạng thái"]);
    sheet.getRange("A1:B1").setFontWeight("bold").setBackground("#FFE599");
  }
  return sheet;
}

/**
 * Kiểm tra tài khoản
 */
function authenticateRider(username, password) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Tài khoản");
  if (!sheet) return null;
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;
  var values = sheet.getRange(2, 1, lastRow - 1, 3).getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0].toString().trim() === username.trim() && values[i][1].toString().trim() === password.toString().trim()) {
      return values[i][2].toString().trim();
    }
  }
  return null;
}

/**
 * Lấy ra dòng "Chờ in" đầu tiên từ sheet "Mã"
 */
function getPendingCode(pcName) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(10000); } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "busy" })).setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var sheet = getOrCreateSheetMa();
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return ContentService.createTextOutput(JSON.stringify({ status: "no_data" })).setMimeType(ContentService.MimeType.JSON);
    
    var range = sheet.getRange(2, 1, lastRow - 1, 5);
    var values = range.getValues();
    for (var i = 0; i < values.length; i++) {
      if (values[i][3] === "Chờ in" || values[i][3] === "") {
        var rowNum = i + 2;
        sheet.getRange(rowNum, 4).setValue("Đã in");
        sheet.getRange(rowNum, 5).setValue(pcName);
        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          code: values[i][0].toString().trim(),
          rider: values[i][2],
          timestamp: values[i][1]
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "no_data" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}

/**
 * Lấy ra dòng "Chờ chuyển" đầu tiên từ sheet "Chuyển Pick"
 */
function getPendingChuyenPick(pcName) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(10000); } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "busy" })).setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var sheet = getOrCreateSheetChuyenPick();
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return ContentService.createTextOutput(JSON.stringify({ status: "no_data" })).setMimeType(ContentService.MimeType.JSON);
    
    var range = sheet.getRange(2, 1, lastRow - 1, 6);
    var values = range.getValues();
    for (var i = 0; i < values.length; i++) {
      if (values[i][4] === "Chờ chuyển" || values[i][4] === "") {
        var rowNum = i + 2;
        sheet.getRange(rowNum, 5).setValue("Đã chuyển");
        sheet.getRange(rowNum, 6).setValue(pcName);
        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          pupCode: values[i][0].toString().trim(),
          recipientDriver: values[i][3].toString().trim(),
          timestamp: values[i][1]
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "no_data" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}

function getOrCreateSheetMa() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Mã");
  if (!sheet) {
    sheet = ss.insertSheet("Mã");
    sheet.appendRow(["Mã vận đơn", "Thời gian gửi", "Tài khoản gửi", "Trạng thái in", "Thiết bị in (PC)"]);
    sheet.getRange("A1:E1").setFontWeight("bold").setBackground("#D9EAD3");
  }
  return sheet;
}

function getOrCreateSheetChuyenPick() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Chuyển Pick");
  if (!sheet) {
    sheet = ss.insertSheet("Chuyển Pick");
    sheet.appendRow(["Mã PUP", "Thời gian chuyển", "Tài khoản gửi", "Tài khoản nhận", "Trạng thái", "Thiết bị PC"]);
    sheet.getRange("A1:F1").setFontWeight("bold").setBackground("#C9DAF8");
  }
  return sheet;
}