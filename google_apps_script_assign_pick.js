/**
 * GOOGLE APPS SCRIPT BACKEND CHO TÍNH NĂNG GÁN TÀI XẾ ĐỘC LẬP (ASSIGN PICK)
 * ID Bảng tính: 1cwA6hIJHzlkekW2tH_r-MvjZ9bWeVsfgqkvwxTcG6tI
 * Tên trang tính: Assign Pick
 */

function doPost(e) {
  var responseData = { status: "error", message: "Yêu cầu không hợp lệ" };
  try {
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    var action = data.action;
    var spreadsheetId = "1cwA6hIJHzlkekW2tH_r-MvjZ9bWeVsfgqkvwxTcG6tI";
    var sheetName = "Assign Pick";
    
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      // Nếu sheet không tồn tại, tự động tạo mới
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(["Pickup Point ID", "Shop/SP Names", "Shop/SP Address", "Mapped PUPG", "ID Rider", "", "", "", "Pickup Point ID (No Rider)", "Shop/SP Names (No Rider)", "Shop/SP Address (No Rider)", "Mapped PUPG (No Rider)"]);
    }
    
    var lock = LockService.getScriptLock();
    // Chờ tối đa 15 giây để lấy khóa ghi dữ liệu nhằm tránh xung đột đa tab
    try {
      lock.waitLock(15000);
    } catch (lockError) {
      return ContentService.createTextOutput(JSON.stringify({ status: "busy", message: "Hệ thống đang bận xử lý dòng khác, vui lòng thử lại" })).setMimeType(ContentService.MimeType.JSON);
    }

    if (action === "copy_pup_list") {
      // 1. Lưu danh sách PUP từ SPX vào vùng A2:D
      var list = data.list; // Mảng các object: { pupId, shopName, shopAddress, mappedPupg }
      
      // Xóa sạch vùng dữ liệu cũ từ hàng 2 đến hết cột D
      var lastRow = sheet.getLastRow();
      if (lastRow >= 2) {
        sheet.getRange(2, 1, lastRow - 1, 4).clearContent();
      }
      
      if (list && list.length > 0) {
        var values = [];
        for (var i = 0; i < list.length; i++) {
          values.push([
            list[i].pupId || "",
            list[i].shopName || "",
            list[i].shopAddress || "",
            list[i].mappedPupg || ""
          ]);
        }
        sheet.getRange(2, 1, values.length, 4).setValues(values);
      }
      
      responseData = { status: "success", message: "Đã lưu danh sách PUP vào vùng A2:D" };
      
    } else if (action === "check_and_get_tasks") {
      // 2. Kiểm tra E2:E xem có rỗng hết không và trả về dữ liệu xử lý
      var lastRow = sheet.getLastRow();
      if (lastRow < 2) {
        responseData = { status: "empty", message: "Không có dữ liệu trong bảng" };
      } else {
        var ridersRange = sheet.getRange(2, 5, lastRow - 1, 1); // Cột E (ID Rider)
        var ridersValues = ridersRange.getValues();
        
        var hasRider = false;
        for (var i = 0; i < ridersValues.length; i++) {
          if (ridersValues[i][0].toString().trim() !== "") {
            hasRider = true;
            break;
          }
        }
        
        if (!hasRider) {
          // E2:E rỗng hết -> Trả về dừng lại
          responseData = { status: "stop", message: "Cột Rider E2:E rỗng hoàn toàn, dừng lại" };
        } else {
          // E2:E có giá trị -> Lấy toàn bộ danh sách hàng trong vùng A2:E để xử lý
          var dataRange = sheet.getRange(2, 1, lastRow - 1, 5); // Cột A đến E
          var dataValues = dataRange.getValues();
          var tasks = [];
          
          for (var i = 0; i < dataValues.length; i++) {
            var pupId = dataValues[i][0].toString().trim();
            if (pupId) {
              tasks.push({
                rowIndex: i + 2, // Chỉ số dòng thực tế trong sheet
                pupId: pupId,
                shopName: dataValues[i][1].toString().trim(),
                shopAddress: dataValues[i][2].toString().trim(),
                mappedPupg: dataValues[i][3].toString().trim(),
                riderId: dataValues[i][4].toString().trim()
              });
            }
          }
          responseData = { status: "run", tasks: tasks };
        }
      }
      
    } else if (action === "complete_pup") {
      // 3. Khi làm xong mã PUP nào thì XÓA vùng dữ liệu tương ứng của vùng A2:D (Hàng tương ứng)
      var targetPupId = data.pupId;
      var lastRow = sheet.getLastRow();
      var found = false;
      
      if (lastRow >= 2) {
        var pupRange = sheet.getRange(2, 1, lastRow - 1, 1);
        var pupValues = pupRange.getValues();
        
        for (var i = 0; i < pupValues.length; i++) {
          if (pupValues[i][0].toString().trim() === targetPupId) {
            var rowNum = i + 2;
            // Xóa dữ liệu của hàng đó trong vùng A2:D (tức là cột A, B, C, D)
            sheet.getRange(rowNum, 1, 1, 4).clearContent();
            found = true;
            break;
          }
        }
      }
      
      if (found) {
        responseData = { status: "success", message: "Đã xóa dữ liệu A2:D cho mã PUP: " + targetPupId };
      } else {
        responseData = { status: "not_found", message: "Không tìm thấy mã PUP cần xóa: " + targetPupId };
      }
      
    } else if (action === "log_unmatched_pup") {
      // 4. Nếu không thấy mã Rider tương ứng ở vùng E2:E (hoặc Rider rỗng),
      // copy dữ liệu của vùng chứa PUP đó trong A2:D tương ứng paste vào bên dưới vùng chứa dữ liệu của I2:L trong sheet.
      // Sau đó xóa dòng tương ứng của vùng A2:D.
      var targetPupId = data.pupId;
      var lastRow = sheet.getLastRow();
      var found = false;
      
      if (lastRow >= 2) {
        var dataRange = sheet.getRange(2, 1, lastRow - 1, 4); // Cột A đến D
        var dataValues = dataRange.getValues();
        
        for (var i = 0; i < dataValues.length; i++) {
          if (dataValues[i][0].toString().trim() === targetPupId) {
            var rowNum = i + 2;
            
            // Tìm dòng trống tiếp theo bên dưới cột I2:L
            var nextEmptyRowI = findNextEmptyRowInColumns(sheet, 9, 12); // Cột I (9) tới L (12)
            
            // Paste dữ liệu A2:D vào I:L dòng trống tìm được
            sheet.getRange(nextEmptyRowI, 9, 1, 4).setValues([[
              dataValues[i][0], // PUP ID
              dataValues[i][1], // Shop/SP Names
              dataValues[i][2], // Shop/SP Address
              dataValues[i][3]  // Mapped PUPG
            ]]);
            
            // Xóa vùng dữ liệu tương ứng của vùng A2:D
            sheet.getRange(rowNum, 1, 1, 4).clearContent();
            found = true;
            break;
          }
        }
      }
      
      if (found) {
        responseData = { status: "success", message: "Đã lưu PUP không có Rider " + targetPupId + " xuống vùng I2:L và xóa ở A2:D" };
      } else {
        responseData = { status: "not_found", message: "Không tìm thấy PUP để xử lý log_unmatched_pup: " + targetPupId };
      }
    }
    
    lock.releaseLock();
  } catch (error) {
    responseData = { status: "error", message: error.toString() };
  }
  
  return ContentService.createTextOutput(JSON.stringify(responseData)).setMimeType(ContentService.MimeType.JSON);
}

// Hàm phụ trợ tìm dòng trống tiếp theo dưới vùng dữ liệu cụ thể (Cột startCol đến endCol)
function findNextEmptyRowInColumns(sheet, startCol, endCol) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 2;
  
  var rangeValues = sheet.getRange(2, startCol, lastRow - 1, endCol - startCol + 1).getValues();
  for (var i = 0; i < rangeValues.length; i++) {
    var isRowEmpty = true;
    for (var j = 0; j < rangeValues[i].length; j++) {
      if (rangeValues[i][j].toString().trim() !== "") {
        isRowEmpty = false;
        break;
      }
    }
    if (isRowEmpty) {
      return i + 2; // Tìm thấy dòng trống xen kẽ trong bảng
    }
  }
  return lastRow + 1; // Nếu không có dòng trống xen kẽ, trả về dòng cuối cùng + 1
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "API gán Rider hoạt động bình thường!" })).setMimeType(ContentService.MimeType.JSON);
}
