// ==UserScript==
// @name         SPX Shopee Assign Driver Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tự động quét danh sách PUP gửi lên Google Sheet và tự động gán Driver dựa trên dữ liệu Google Sheet. Hoạt động độc lập.
// @author       Antigravity
// @match        https://spx.shopee.vn/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // CẤU HÌNH & KHỞI TẠO BẢNG ĐIỀU KHIỂN
    const DEFAULT_WEB_APP_URL = "DIEN_URL_WEB_APP_GOOGLE_CUA_BAN_TAI_DAY";
    let apiUrl = GM_getValue("spx_assign_driver_webapp_url", DEFAULT_WEB_APP_URL);
    let isRunning = GM_getValue("spx_assign_driver_enabled", false);
    let isProcessing = false;

    // Đăng ký menu cấu hình nhanh trong Tampermonkey
    GM_registerMenuCommand("Cấu hình URL Web App (Assign Driver)", function() {
        let newUrl = prompt("Nhập URL Google Web App mới để kết nối Sheet:", apiUrl);
        if (newUrl) {
            apiUrl = newUrl.trim();
            GM_setValue("spx_assign_driver_webapp_url", apiUrl);
            alert("Đã lưu URL thành công!");
            window.location.reload();
        }
    });

    // Tạo panel giao diện nổi góc dưới màn hình
    const panel = document.createElement('div');
    panel.id = 'spx-assign-driver-panel';
    panel.style = 'position:fixed; bottom:80px; left:20px; z-index:99999; background-color:#2c3e50; color:white; padding:15px; border-radius:8px; box-shadow:0 4px 15px rgba(0,0,0,0.3); font-family:sans-serif; width:280px; font-size:12px; border:1px solid #34495e;';
    panel.innerHTML = `
        <div style="font-weight:bold; font-size:13px; color:#e67e22; border-bottom:1px solid #7f8c8d; padding-bottom:5px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
            <span>🤖 Assign Driver Auto Helper</span>
            <span id="ad-status-badge" style="background-color:#7f8c8d; font-size:10px; padding:2px 6px; border-radius:4px;">TẮT</span>
        </div>
        <div style="margin-bottom:8px;">
            <label style="color:#bdc3c7; display:block; margin-bottom:2px;">URL Web App GAS:</label>
            <input type="text" id="ad-url-input" style="width:92%; padding:4px; font-size:10px; background-color:#34495e; border:1px solid #7f8c8d; color:white; border-radius:3px;" value="${apiUrl}">
        </div>
        <div style="display:flex; gap:5px; margin-bottom:10px;">
            <button id="ad-save-btn" style="background-color:#27ae60; border:none; color:white; padding:5px 8px; border-radius:3px; cursor:pointer; font-weight:bold;">Lưu</button>
            <button id="ad-toggle-btn" style="flex-grow:1; background-color:#2980b9; border:none; color:white; padding:5px 8px; border-radius:3px; cursor:pointer; font-weight:bold;">Bắt đầu chạy</button>
        </div>
        <div id="ad-log-box" style="background-color:#1a252f; border:1px solid #34495e; border-radius:3px; padding:6px; font-family:monospace; font-size:10px; height:80px; overflow-y:auto; color:#2ecc71;">
            [Hệ thống] Sẵn sàng hoạt động độc lập...
        </div>
    `;
    document.body.appendChild(panel);

    const logBox = document.getElementById('ad-log-box');
    const statusBadge = document.getElementById('ad-status-badge');
    const toggleBtn = document.getElementById('ad-toggle-btn');
    const urlInput = document.getElementById('ad-url-input');
    const saveBtn = document.getElementById('ad-save-btn');

    function log(msg) {
        const time = new Date().toLocaleTimeString();
        logBox.innerHTML = `[${time}] ${msg}<br>` + logBox.innerHTML;
        const lines = logBox.innerHTML.split('<br>');
        if (lines.length > 20) logBox.innerHTML = lines.slice(0, 20).join('<br>');
    }

    function updateUI() {
        if (isRunning) {
            statusBadge.innerText = "ĐANG CHẠY";
            statusBadge.style.backgroundColor = "#2ecc71";
            toggleBtn.innerText = "Tạm dừng";
            toggleBtn.style.backgroundColor = "#e74c3c";
        } else {
            statusBadge.innerText = "TẮT";
            statusBadge.style.backgroundColor = "#7f8c8d";
            toggleBtn.innerText = "Bắt đầu chạy";
            toggleBtn.style.backgroundColor = "#2980b9";
        }
    }
    updateUI();

    saveBtn.addEventListener('click', () => {
        const val = urlInput.value.trim();
        if (val && !val.includes("DIEN_URL_WEB_APP")) {
            apiUrl = val;
            GM_setValue("spx_assign_driver_webapp_url", apiUrl);
            log("Đã lưu URL thành công.");
            alert("Lưu URL thành công!");
        } else {
            alert("Vui lòng nhập URL Web App hợp lệ!");
        }
    });

    toggleBtn.addEventListener('click', () => {
        if (!apiUrl || apiUrl.includes("DIEN_URL_WEB_APP")) {
            alert("Vui lòng nhập và lưu URL Google Web App trước khi chạy!");
            return;
        }
        isRunning = !isRunning;
        GM_setValue("spx_assign_driver_enabled", isRunning);
        updateUI();
        if (isRunning) {
            log("Bắt đầu tiến trình tự động hóa...");
            runWorkflow();
        } else {
            log("Đã tạm dừng.");
        }
    });

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Helper gọi API POST đến Google Apps Script
    function callGAS(action, payload, callback) {
        if (!apiUrl || apiUrl.includes("DIEN_URL_WEB_APP")) return;
        const data = Object.assign({ action: action }, payload);
        GM_xmlhttpRequest({
            method: "POST",
            url: apiUrl,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data),
            onload: function(response) {
                try {
                    const res = JSON.parse(response.responseText);
                    if (callback) callback(res);
                } catch (e) {
                    console.error("[Assign Driver API Error]", e);
                    log("Lỗi phản hồi từ Google Script.");
                }
            },
            onerror: function(err) {
                console.error("[GAS Error]", err);
                log("Không kết nối được tới Google Web App.");
            }
        });
    }

    // Luồng xử lý chính
    async function runWorkflow() {
        if (!isRunning || isProcessing) return;
        
        const hash = window.location.hash || "";
        if (!hash.includes("/pickupOrder/createNew")) {
            return; // Chỉ hoạt động trên trang tạo mới Pickup Order
        }

        isProcessing = true;
        log("Đang đồng bộ dữ liệu với Google Sheet...");

        // Bước 1: Gọi API kiểm tra trạng thái bảng tính
        callGAS("check_and_get_tasks", {}, async function(res) {
            try {
                if (res.status === "stop") {
                    log("Cột Rider E2:E rỗng hoàn toàn. Tạm dừng quy trình.");
                    isProcessing = false;
                    return;
                }

                if (res.status === "empty") {
                    log("Google Sheet trống. Tiến hành cào dữ liệu từ SPX...");
                    await scrapeSPXAndUpload();
                } else if (res.status === "run") {
                    // Google Sheet có danh sách cần xử lý
                    const tasks = res.tasks;
                    await processTasks(tasks);
                }
            } catch (err) {
                console.error(err);
                log("Lỗi khi xử lý Workflow: " + err.message);
            } finally {
                isProcessing = false;
            }
        });
    }

    // Cào dữ liệu từ bảng SPX Shopee và tải lên Sheet (vùng A2:D)
    async function scrapeSPXAndUpload() {
        const rows = document.querySelectorAll('table tbody tr');
        if (rows.length === 0) {
            log("Không tìm thấy dòng nào trong danh sách SPX.");
            return;
        }

        const list = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 12) {
                // Phân tích lấy PUP ID
                const pupCell = cells[1]; // Pickup Point ID thường ở cột thứ 2
                const shopCell = cells[3]; // Shop/SP Names (Cột thứ 4)
                const addressCell = cells[4]; // Shop/SP Address (Cột thứ 5)
                const pupgCell = cells[11]; // Mapped PUPG (Cột thứ 12)

                if (pupCell && shopCell && addressCell && pupgCell) {
                    const pupId = pupCell.innerText.trim();
                    const shopName = shopCell.innerText.trim();
                    const shopAddress = addressCell.innerText.trim();
                    const mappedPupg = pupgCell.innerText.trim();

                    if (pupId.startsWith("PUP")) {
                        list.push({
                            pupId: pupId,
                            shopName: shopName,
                            shopAddress: shopAddress,
                            mappedPupg: mappedPupg
                        });
                    }
                }
            }
        });

        if (list.length === 0) {
            log("Không cào được mã PUP nào hợp lệ.");
            return;
        }

        log(`Đã cào ${list.length} mã PUP. Đang gửi lên Sheet...`);
        callGAS("copy_pup_list", { list: list }, function(res) {
            if (res.status === "success") {
                log("Đã tải danh sách PUP thành công lên Google Sheet A2:D.");
            }
        });
    }

    // Xử lý tuần tự danh sách nhiệm vụ lấy từ Google Sheet
    async function processTasks(tasks) {
        log(`Bắt đầu xử lý ${tasks.length} nhiệm vụ từ Sheet...`);
        
        for (let i = 0; i < tasks.length; i++) {
            if (!isRunning) break;
            const task = tasks[i];
            
            log(`Đang xử lý PUP: ${task.pupId}`);
            
            // Tìm dòng PUP trên bảng hiển thị SPX Shopee
            const targetRow = findRowByPupId(task.pupId);
            
            // Trường hợp 1: Không thấy mã PUP trên trang, HOẶC Rider trống ở vùng E
            if (!targetRow || !task.riderId) {
                if (!targetRow) {
                    log(`⚠️ Không tìm thấy PUP ${task.pupId} trên trang Shopee.`);
                } else {
                    log(`⚠️ Thiếu mã Rider cho PUP ${task.pupId} trên Sheet.`);
                }
                
                // Copy dữ liệu sang I:L và xóa khỏi A:D
                await syncUnmatchedTask(task.pupId);
                continue;
            }

            // Trường hợp 2: Tìm thấy PUP và có Rider -> Thực hiện gán
            const success = await executeAssignDriver(targetRow, task.pupId, task.riderId);
            if (success) {
                // Đồng bộ cập nhật xóa dòng trên Sheet
                await syncCompletedTask(task.pupId);
                await delay(1000); // Chờ 1 giây để load ổn định
            } else {
                log(`❌ Gán Driver thất bại cho PUP: ${task.pupId}`);
            }
        }

        // Sau khi làm xong toàn bộ, kiểm tra xem có còn mã PUP nào nữa không
        await verifyAndReloadList();
    }

    // Tìm dòng tr trong table chứa Pickup Point ID
    function findRowByPupId(pupId) {
        const rows = document.querySelectorAll('table tbody tr');
        for (let row of rows) {
            const cells = row.querySelectorAll('td');
            for (let cell of cells) {
                if (cell.innerText.trim() === pupId) {
                    return row;
                }
            }
        }
        return null;
    }

    // Đồng bộ báo đã hoàn thành lên GAS
    function syncCompletedTask(pupId) {
        return new Promise(resolve => {
            callGAS("complete_pup", { pupId: pupId }, function(res) {
                if (res.status === "success") {
                    log(`Đã cập nhật xóa dòng PUP ${pupId} trên Google Sheet.`);
                }
                resolve();
            });
        });
    }

    // Đồng bộ báo unmatched (thiếu Rider/không tìm thấy PUP) lên GAS
    function syncUnmatchedTask(pupId) {
        return new Promise(resolve => {
            callGAS("log_unmatched_pup", { pupId: pupId }, function(res) {
                if (res.status === "success") {
                    log(`Đã di chuyển PUP ${pupId} sang vùng I2:L và xóa khỏi hàng chờ.`);
                }
                resolve();
            });
        });
    }

    // Thực thi gán tài xế trên giao diện Shopee
    async function executeAssignDriver(rowElement, pupId, riderId) {
        try {
            // 1. Tích vào ô vuông checkbox của dòng chứa PUP
            const checkbox = rowElement.querySelector('input[type="checkbox"], .el-checkbox__original');
            if (checkbox) {
                if (!checkbox.checked) {
                    checkbox.click();
                    await delay(300);
                }
            } else {
                // Thử click vào thẻ bọc el-checkbox__inner nếu không tìm thấy input
                const checkboxInner = rowElement.querySelector('.el-checkbox__inner');
                if (checkboxInner) {
                    checkboxInner.click();
                    await delay(300);
                } else {
                    log("Không tìm thấy Checkbox để chọn!");
                    return false;
                }
            }

            // 2. Bấm nút Assign màu cam
            let assignBtn = null;
            const buttons = document.querySelectorAll('button');
            for (let btn of buttons) {
                if (btn.innerText.trim() === "Assign" || btn.innerText.trim() === "Phân bổ") {
                    assignBtn = btn;
                    break;
                }
            }
            if (!assignBtn) {
                // Thử class css hoặc selector khác nếu nút không trùng chữ trực tiếp
                assignBtn = document.querySelector('button.el-button--danger, .assign-btn');
            }

            if (!assignBtn) {
                log("Không tìm thấy nút Assign màu cam!");
                return false;
            }

            assignBtn.click();
            log("Đã nhấn nút Assign. Đang chờ Popup...");
            await delay(1000); // Chờ popup xuất hiện

            // 3. Tìm ô input Driver trong popup
            let driverInput = null;
            const popup = document.querySelector('.el-dialog, .modal-content, [class*="dialog"]');
            if (!popup) {
                log("Không tìm thấy Dialog Popup gán tài xế!");
                return false;
            }

            const inputs = popup.querySelectorAll('input');
            for (let input of inputs) {
                const placeholder = input.placeholder || "";
                if (placeholder.toLowerCase().includes("driver") || placeholder.toLowerCase().includes("tài xế") || placeholder.toLowerCase().includes("select")) {
                    driverInput = input;
                    break;
                }
            }
            if (!driverInput) driverInput = inputs[0];

            if (!driverInput) {
                log("Không tìm thấy ô nhập Driver!");
                return false;
            }

            // Click vào ô Driver để mở danh sách & chờ 0.8 giây load dữ liệu tài xế
            driverInput.click();
            driverInput.focus();
            await delay(800);

            // Gõ mã Rider tương ứng
            driverInput.value = riderId;
            driverInput.dispatchEvent(new Event('input', { bubbles: true }));
            driverInput.dispatchEvent(new Event('change', { bubbles: true }));
            await delay(800); // Chờ 0.8 giây để danh sách lọc ra tên Rider

            // Chọn tên Rider khớp hiển thị bên dưới ô input
            // Giao diện thường là dropdown chứa .el-select-dropdown__item
            let selectOption = null;
            const options = document.querySelectorAll('.el-select-dropdown__item, [class*="select-dropdown"] li');
            
            for (let opt of options) {
                const text = opt.innerText.trim();
                // Check xem item dropdown chứa mã Rider hoặc tên tương ứng không
                if (text.includes(riderId)) {
                    selectOption = opt;
                    break;
                }
            }

            if (selectOption) {
                selectOption.click();
                log(`Đã chọn Rider: ${selectOption.innerText.trim()}`);
                await delay(500);
            } else {
                // Cố gắng bấm vào phần tử đầu tiên trong danh sách lọc nếu không so khớp hoàn toàn được mã
                if (options.length > 0) {
                    options[0].click();
                    log(`Chọn Rider đầu tiên gợi ý: ${options[0].innerText.trim()}`);
                    await delay(500);
                } else {
                    log("Không thấy danh sách Rider khớp hiển thị!");
                    // Nhấn cancel để đóng và bỏ qua
                    const cancelBtn = popup.querySelector('button.el-button--default');
                    if (cancelBtn) cancelBtn.click();
                    return false;
                }
            }

            // 4. Nhấn Confirm màu cam để xác nhận
            let confirmBtn = null;
            const popupBtns = popup.querySelectorAll('button');
            for (let btn of popupBtns) {
                const text = btn.innerText.trim();
                if (text === "Confirm" || text === "Xác nhận") {
                    confirmBtn = btn;
                    break;
                }
            }
            if (!confirmBtn) {
                confirmBtn = popup.querySelector('button.el-button--primary');
            }

            if (confirmBtn) {
                confirmBtn.click();
                log("Đã nhấn nút Confirm gán Rider thành công.");
                await delay(1500); // Đợi lưu hoàn tất trên server Shopee
                return true;
            }

            return false;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    // Hoàn tất danh sách: Click Search trên SPX xem còn PUP không
    async function verifyAndReloadList() {
        log("Đã duyệt qua toàn bộ mã PUP chờ. Tiến hành click nút Search trên SPX...");
        
        let searchBtn = null;
        const buttons = document.querySelectorAll('button');
        for (let btn of buttons) {
            const text = btn.innerText.trim();
            if (text === "Search" || text === "Tìm kiếm") {
                searchBtn = btn;
                break;
            }
        }
        if (!searchBtn) {
            searchBtn = document.querySelector('button.el-button--primary');
        }

        if (searchBtn) {
            searchBtn.click();
            log("Đã kích hoạt tìm kiếm danh sách mới. Chờ tải trang...");
            await delay(3000); // Chờ 3 giây để danh sách reload

            const rows = document.querySelectorAll('table tbody tr');
            if (rows.length > 0) {
                log("Tìm thấy danh sách PUP mới trên SPX. Tiếp tục luồng xử lý...");
                // Gọi đệ quy lại để tiếp tục cào lên sheet
                isProcessing = false;
                await runWorkflow();
            } else {
                log("Không còn mã PUP nào khác trên SPX. Hoàn thành!");
            }
        } else {
            log("Không tìm thấy nút Search trên giao diện để tải lại.");
        }
    }

    // Thiết lập giám sát chu kỳ chạy tự động sau mỗi 5 giây
    setInterval(runWorkflow, 5000);

})();
