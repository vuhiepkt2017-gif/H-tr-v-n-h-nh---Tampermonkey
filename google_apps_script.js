/**
 * Google Apps Script - Backend gộp chung 4 tính năng chính:
 * 1. Quét & In (Lưu vào trang tính "Mã")
 * 2. Chuyển Pick (Lưu vào trang tính "Chuyển Pick")
 * 3. Tự động in TO SPX Shopee (Lưu vào trang tính "InTO")
 * 4. Hệ thống Quản lý Hỗ Trợ Đẩy Pick (Lưu vào trang tính "Hỗ Trợ")
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

  if (action === "restore_scripts") {
    return restoreScripts();
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
    var pcName = data.pc || "PC ẩn danh";

    if (action === "get_pending") {
      return getPendingCode(pcName);
    }
    if (action === "get_pending_chuyen_pick") {
      return getPendingChuyenPick(pcName);
    }
    if (action === "get_pending_to") {
      return getPendingTO(pcName);
    }
    if (action === "backup_scripts") {
      return backupScripts(data.scripts);
    }

    if (action === "update_code_status") {
      return updateCodeStatus(data);
    }

    if (action === "update_handover_status") {
      return updateHandoverStatus(data);
    }

    if (action === "getTOList" || action === "addTO" || action === "markPrinted" || action === "mark_to_printed") {
      if (action === "mark_to_printed") data.action = "markPrinted"; // Đồng nhất tên action
      return handleSpxRequest(data);
    }

    // -----------------------------------------------------------------
    // XỬ LÝ CÁC ACTION PHỤC VỤ HỖ TRỢ ĐẨY PICK MỚI
    // -----------------------------------------------------------------
    if (action === "check_transfer") {
      return handleCheckTransfer(data);
    }
    if (action === "gui_yeu_cau_ho_tro") {
      return handleGuiYeuCauHoTro(data);
    }
    if (action === "admin_chuyen_ho_tro") {
      return handleAdminChuyenHoTro(data);
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
 * Xử lý kiểm tra tố cáo đẩy pick sai
 */
function handleCheckTransfer(data) {
  var JSON_MIME = ContentService.MimeType.JSON;
  var sheetCP = getOrCreateSheetChuyenPick();
  var pupCode = (data.pupCode || "").toString().trim().toUpperCase();
  
  var sheetData = sheetCP.getDataRange().getValues();
  var found = false;
  var senderName = "";
  var senderEmail = "";

  // Quét từ dưới lên trên để lấy bản ghi Chuyển Pick mới nhất
  for (var i = sheetData.length - 1; i >= 1; i--) {
    var rowPup = (sheetData[i][0] || "").toString().trim().toUpperCase();
    if (rowPup === pupCode) {
      found = true;
      senderName = sheetData[i][2] || ""; // Cột Tài khoản gửi
      break;
    }
  }

  if (found) {
    // Trích xuất Email từ chuỗi tên người gửi: "Tên ( Code - Email )"
    if (senderName.includes("@")) {
      var parts = senderName.split(/[\(\)]/);
      for (var k = 0; k < parts.length; k++) {
        var p = parts[k].trim();
        if (p.includes("@")) {
          // Lọc ra email chuẩn
          var emailMatch = p.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/);
          if (emailMatch) {
            senderEmail = emailMatch[1];
            break;
          }
        }
      }
    }
    
    if (senderEmail === "") {
      // Tìm Email tương ứng qua Sheet "Tài khoản"
      var accountsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tài khoản");
      if (accountsSheet) {
        var accData = accountsSheet.getDataRange().getValues();
        for (var j = 1; j < accData.length; j++) {
          var accName = (accData[j][2] || "").toString().trim(); // Tên hiển thị
          var accEmail = (accData[j][0] || "").toString().trim(); // Email
          if (senderName.includes(accName) || accName.includes(senderName)) {
            senderEmail = accEmail;
            break;
          }
        }
      }
    }

    if (senderEmail === "") {
      senderEmail = senderName; // Fallback
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      senderName: senderName,
      senderEmail: senderEmail
    })).setMimeType(JSON_MIME);
  } else {
    return ContentService.createTextOutput(JSON.stringify({
      status: "false",
      message: "Không tìm thấy mã PUP này trong lịch sử chuyển pick"
    })).setMimeType(JSON_MIME);
  }
}

/**
 * Xử lý Rider gửi yêu cầu hỗ trợ (Nhập tay / Chọn ảnh quét)
 */
function handleGuiYeuCauHoTro(data) {
  var sheetHT = getOrCreateSheetHoTro();
  var pupCode = (data.pupCode || "").toString().trim().toUpperCase();
  var timestamp = data.timestamp || "";
  var riderName = data.riderName || "";
  var status = data.status || "Đang chờ";
  var device = data.device || "";

  sheetHT.appendRow([pupCode, timestamp, riderName, "", status, device]);

  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: "Gửi yêu cầu hỗ trợ thành công"
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Xử lý Admin duyệt chuyển hỗ trợ sang Out of Hub Rider
 */
function handleAdminChuyenHoTro(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetHT = getOrCreateSheetHoTro();
  var pupCode = (data.pupCode || "").toString().trim().toUpperCase();
  var riderName = data.riderName || "";
  var receiverRider = data.receiverRider || "";
  var timestamp = data.timestamp || "";
  var device = data.device || "";

  // 1. Cập nhật trạng thái trong sheet "Hỗ Trợ"
  var htData = sheetHT.getDataRange().getValues();
  for (var i = 1; i < htData.length; i++) {
    var rowPup = (htData[i][0] || "").toString().trim().toUpperCase();
    var rowRider = (htData[i][2] || "").toString().trim();
    var rowStatus = (htData[i][4] || "").toString().trim();

    if (rowPup === pupCode && rowRider === riderName && (rowStatus === "Đang chờ" || rowStatus === "Pending" || rowStatus === "")) {
      sheetHT.getRange(i + 1, 4).setValue(receiverRider); // Cột D: Rider nhận
      sheetHT.getRange(i + 1, 5).setValue("Đã chuyển");  // Cột E: Trạng thái
      sheetHT.getRange(i + 1, 2).setValue(timestamp);     // Cột B: Thời gian chuyển
      break;
    }
  }

  // 2. Tự động thêm bản ghi vào sheet "Chuyển Pick" để PC client nhận diện và in
  var sheetCP = getOrCreateSheetChuyenPick();
  var now = new Date();
  sheetCP.appendRow([pupCode, now, riderName + " (Hỗ trợ)", receiverRider, "Chờ chuyển", ""]);

  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: "Admin đã xử lý chuyển hỗ trợ thành công"
  })).setMimeType(ContentService.MimeType.JSON);
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
    
    var toNumClean = toNum.trim().toUpperCase();
    var lastRow = sheet.getLastRow();
    
    // KIỂM TRA TRÙNG LẶP trước khi thêm
    if (lastRow >= 2) {
      var endRow = Math.min(lastRow, 1000);
      var existingValues = sheet.getRange(2, 1, endRow - 1, 1).getValues();
      for (var i = 0; i < existingValues.length; i++) {
        if (existingValues[i][0] && existingValues[i][0].toString().trim().toUpperCase() === toNumClean) {
          return ContentService.createTextOutput(JSON.stringify({ status: "duplicate", message: "TO " + toNumClean + " đã tồn tại" }))
                               .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    
    var targetRow = lastRow + 1;
    if (targetRow > 1000) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Sheet InTO đầy" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    sheet.getRange("A" + targetRow).setValue(toNumClean);
    sheet.getRange("B" + targetRow).setValue("Chờ in");
    SpreadsheetApp.flush();
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã thêm " + toNumClean }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === "markPrinted") {
    var toNum = data.toNum;
    if (!toNum) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Missing toNum" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    var toNumClean = toNum.trim().toUpperCase();
    var lastRow = sheet.getLastRow();
    var markedCount = 0;
    
    if (lastRow >= 2) {
      var endRow = Math.min(lastRow, 1000);
      var range = sheet.getRange(2, 1, endRow - 1, 2);
      var values = range.getValues();
      
      // Đánh dấu TẤT CẢ các dòng trùng để xử lý trường hợp đã có dữ liệu trùng
      for (var i = 0; i < values.length; i++) {
        if (values[i][0] && values[i][0].toString().trim().toUpperCase() === toNumClean) {
          var status = values[i][1].toString().trim().toLowerCase();
          if (status !== "đã in") {
            sheet.getRange(i + 2, 2).setValue("Đã In");
            markedCount++;
          }
        }
      }
      
      if (markedCount > 0) {
        SpreadsheetApp.flush();
        return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã đánh dấu Đã In cho " + toNumClean + " (" + markedCount + " dòng)" }))
                             .setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Không tìm thấy mã TO hoặc đã được đánh dấu" }))
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
      var status = values[i][1].toString().trim().toLowerCase();
      if (status === "chờ in" || status === "") {
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
      var status = values[i][3].toString().trim().toLowerCase();
      if (status === "chờ in" || status === "") {
        var rowNum = i + 2;
        sheet.getRange(rowNum, 4).setValue("Đã in");
        sheet.getRange(rowNum, 5).setValue(pcName);
        SpreadsheetApp.flush();
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
 * Lấy ra dòng "Chờ chuyển" đầu tiên từ sheet "Hỗ Trợ" hoặc "Chuyển Pick"
 * Ưu tiên xử lý từ sheet "Hỗ Trợ" trước, sau đó mới đến "Chuyển Pick"
 */
function getPendingChuyenPick(pcName) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(10000); } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "busy" })).setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var now = new Date();

    // 1. Kiểm tra ưu tiên sheet "Hỗ Trợ"
    var sheetHT = getOrCreateSheetHoTro();
    var lastRowHT = sheetHT.getLastRow();
    if (lastRowHT >= 2) {
      var rangeHT = sheetHT.getRange(2, 1, lastRowHT - 1, 6);
      var valuesHT = rangeHT.getValues();
      for (var i = 0; i < valuesHT.length; i++) {
        var status = valuesHT[i][4].toString().trim().toLowerCase(); // Cột E: Trạng thái
        if (status === "chờ chuyển") {
          var rowNum = i + 2;
          sheetHT.getRange(rowNum, 5).setValue("Đang chuyển"); // Cột E: Đặt trạng thái trung gian
          sheetHT.getRange(rowNum, 6).setValue(pcName); // Cột F: Máy
          SpreadsheetApp.flush();
          return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            pupCode: valuesHT[i][0].toString().trim(), // Cột A: Mã PUP
            recipientDriver: valuesHT[i][3].toString().trim(), // Cột D: Tên Rider nhận (chứa mã số)
            timestamp: valuesHT[i][1], // Cột B: Thời gian chuyển
            sourceSheet: "Hỗ Trợ"
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    // 2. Nếu sheet "Hỗ Trợ" không có, kiểm tra sheet "Chuyển Pick"
    var sheetCP = getOrCreateSheetChuyenPick();
    var lastRowCP = sheetCP.getLastRow();
    if (lastRowCP >= 2) {
      var rangeCP = sheetCP.getRange(2, 1, lastRowCP - 1, 6);
      var valuesCP = rangeCP.getValues();
      for (var i = 0; i < valuesCP.length; i++) {
        var status = valuesCP[i][4].toString().trim().toLowerCase(); // Cột E: Trạng thái
        if (status === "chờ chuyển" || status === "") {
          var rowNum = i + 2;
          sheetCP.getRange(rowNum, 5).setValue("Đang chuyển"); // Cột E: Đặt trạng thái trung gian
          sheetCP.getRange(rowNum, 6).setValue(pcName); // Cột F: Thiết bị PC
          SpreadsheetApp.flush();
          return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            pupCode: valuesCP[i][0].toString().trim(),
            recipientDriver: valuesCP[i][3].toString().trim(),
            timestamp: valuesCP[i][1],
            sourceSheet: "Chuyển Pick"
          })).setMimeType(ContentService.MimeType.JSON);
        }
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

function getOrCreateSheetHoTro() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Hỗ Trợ");
  if (!sheet) {
    sheet = ss.insertSheet("Hỗ Trợ");
    sheet.appendRow(["Mã PUP", "Thời gian chuyển", "Tên Rider nhờ hỗ trợ", "Tên Rider nhận", "Trạng thái", "Máy"]);
    sheet.getRange("A1:F1").setFontWeight("bold").setBackground("#F4CCCC");
  }
  return sheet;
}

function getOrCreateSheetBackup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Extension_Backup");
  if (!sheet) {
    sheet = ss.insertSheet("Extension_Backup");
    sheet.appendRow(["Backup Data"]);
    sheet.getRange("A1").setFontWeight("bold").setBackground("#F4CCCC");
  }
  return sheet;
}

function backupScripts(scriptsStr) {
  var sheet = getOrCreateSheetBackup();
  sheet.getRange("A2").setValue(scriptsStr);
  SpreadsheetApp.flush();
  return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã sao lưu script thành công" }))
                       .setMimeType(ContentService.MimeType.JSON);
}

function restoreScripts() {
  var sheet = getOrCreateSheetBackup();
  var val = sheet.getRange("A2").getValue();
  return ContentService.createTextOutput(JSON.stringify({ status: "success", scripts: val }))
                       .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Cập nhật trạng thái cụ thể cho mã vận đơn trong sheet "Mã" (ví dụ: "Mã lỗi")
 */
function updateCodeStatus(data) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(10000); } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "busy" })).setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var code = data.code;
    var status = data.status;
    var pcName = data.pc || "PC ẩn danh";
    if (!code || !status) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Thiếu code hoặc status" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var sheet = getOrCreateSheetMa();
    var lastRow = sheet.getLastRow();
    var updatedCount = 0;
    
    if (lastRow >= 2) {
      var range = sheet.getRange(2, 1, lastRow - 1, 4);
      var values = range.getValues();
      
      for (var i = 0; i < values.length; i++) {
        var rowCode = values[i][0].toString().trim().toUpperCase();
        if (rowCode === code.trim().toUpperCase() || rowCode.indexOf(code.trim().toUpperCase()) !== -1) {
          sheet.getRange(i + 2, 4).setValue(status); // Cột D (4) là Trạng thái in
          updatedCount++;
        }
      }
    }
    
    // NẾU KHÔNG TÌM THẤY dòng có sẵn của mã này (hoặc đã bị xóa/đè): 
    // Ghi một dòng mới ở dưới cùng để ghi nhận lịch sử lỗi mà không đè vào ô của người dùng khác
    if (updatedCount === 0) {
      var now = new Date();
      sheet.appendRow([code.trim().toUpperCase(), now, "Hệ thống tự động", status, pcName]);
      SpreadsheetApp.flush();
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Không có dòng sẵn, đã chèn dòng mới cho " + code }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    SpreadsheetApp.flush();
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã cập nhật trạng thái " + status + " cho " + updatedCount + " dòng." }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}

/**
 * Cập nhật trạng thái chuyển pick trong sheet "Chuyển Pick" và sheet "Hỗ Trợ"
 */
function updateHandoverStatus(data) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(10000); } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "busy" })).setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var pupCode = data.pupCode;
    var status = data.status;
    var pcName = data.pc || "PC ẩn danh";
    if (!pupCode || !status) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Thiếu pupCode hoặc status" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var pupClean = pupCode.trim().toUpperCase();
    var updatedCount = 0;
    
    // 1. Cập nhật sheet "Chuyển Pick"
    var sheetCP = getOrCreateSheetChuyenPick();
    var lastRowCP = sheetCP.getLastRow();
    if (lastRowCP >= 2) {
      var rangeCP = sheetCP.getRange(2, 1, lastRowCP - 1, 6);
      var valuesCP = rangeCP.getValues();
      for (var i = valuesCP.length - 1; i >= 0; i--) {
        var rowPup = valuesCP[i][0].toString().trim().toUpperCase();
        var rowStatus = valuesCP[i][4].toString().trim();
        // Chỉ cập nhật những dòng đang trạng thái "Đang chuyển" hoặc khớp mã PUP mới nhất
        if (rowPup === pupClean && (rowStatus === "Đang chuyển" || rowStatus === "Chờ chuyển" || rowStatus === "")) {
          sheetCP.getRange(i + 2, 5).setValue(status); // Cột E (5)
          sheetCP.getRange(i + 2, 6).setValue(pcName); // Cột F (6)
          updatedCount++;
          break; // Chỉ cập nhật dòng mới nhất tìm thấy từ dưới lên
        }
      }
    }
    
    // 2. Cập nhật sheet "Hỗ Trợ" (nếu có)
    var sheetHT = getOrCreateSheetHoTro();
    var lastRowHT = sheetHT.getLastRow();
    if (lastRowHT >= 2) {
      var rangeHT = sheetHT.getRange(2, 1, lastRowHT - 1, 6);
      var valuesHT = rangeHT.getValues();
      for (var i = valuesHT.length - 1; i >= 0; i--) {
        var rowPup = valuesHT[i][0].toString().trim().toUpperCase();
        var rowStatus = valuesHT[i][4].toString().trim();
        if (rowPup === pupClean && (rowStatus === "Đang chuyển" || rowStatus === "Chờ chuyển" || rowStatus === "Đã chuyển" || rowStatus === "")) {
          sheetHT.getRange(i + 2, 5).setValue(status); // Cột E (5)
          sheetHT.getRange(i + 2, 6).setValue(pcName); // Cột F (6)
          break;
        }
      }
    }
    
    SpreadsheetApp.flush();
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Đã cập nhật trạng thái chuyển pick thành: " + status }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}
