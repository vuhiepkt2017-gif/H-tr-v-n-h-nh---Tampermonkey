// ==UserScript==
// @name         Shopee SPX Multi-Tab Parallel Automation Helper
// @namespace    http://tampermonkey.net/
// @version      2.5
// @description  Hỗ trợ in tự động đa tab độc lập: In Bill (awbPrint) | Quét TO (generalPackTOList) | In TO từ Sheet (startPackNoLabel) | Chuyển Pick (pickupTask/list)
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

    // ==========================================
    // 1. CẤU HÌNH & KHỞI TẠO BẢNG ĐIỀU KHIỂN
    // ==========================================
    const DEFAULT_WEB_APP_URL = "HAY_DIEN_URL_WEB_APP_CUA_BAN_VAO_DAY";
    let apiUrl = GM_getValue("google_apps_script_url", DEFAULT_WEB_APP_URL);
    let pcName = GM_getValue("shopee_pc_name", "PC_01");
    let isRunning = GM_getValue("auto_print_enabled", false);
    
    // Các khóa trạng thái hoạt động độc lập
    let isPrintingNow = false;
    let isProcessingList = false;
    let isProcessingPrint = false;
    let isProcessingHandover = false;
    let redirecting = false;
    let lastUrl = "";

    // Đăng ký menu cài đặt nhanh
    GM_registerMenuCommand("Cài đặt URL Google Web App", function() {
        let newUrl = prompt("Nhập URL Web App của bạn:", apiUrl);
        if (newUrl) {
            apiUrl = newUrl.trim();
            GM_setValue("google_apps_script_url", apiUrl);
            alert("Đã lưu URL Web App mới!");
            window.location.reload();
        }
    });

    // Tạo launcher icon khi thu nhỏ
    const launcher = document.createElement('div');
    launcher.id = 'shopee-auto-print-launcher';
    launcher.innerText = '🖨️';
    launcher.style = 'position:fixed; bottom:20px; right:20px; z-index:99999; background-color:#ff5722; color:white; width:45px; height:45px; border-radius:50%; box-shadow:0 4px 12px rgba(0,0,0,0.3); display:none; justify-content:center; align-items:center; cursor:pointer; fontSize:22px;';
    document.body.appendChild(launcher);

    // Bảng điều khiển nổi
    const panel = document.createElement('div');
    panel.id = 'shopee-auto-print-panel';
    panel.style = 'position:fixed; bottom:20px; right:20px; z-index:99999; background-color:#1e1e24; color:white; padding:15px; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.3); font-family:system-ui, sans-serif; width:300px; font-size:13px; border:1px solid #333;';
    panel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-bottom: 1px solid #444; padding-bottom: 8px;">
            <strong style="color: #ff5722; font-size: 14px;">Hỗ trợ In Tự Động (Đa Tab)</strong>
            <div style="display: flex; align-items: center; gap: 6px;">
                <span id="ap-badge" style="background-color: #777777; color: white; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; text-transform: uppercase; cursor: pointer;">Tắt</span>
                <span id="ap-minimize-btn" style="color: #aaa; cursor: pointer; font-size: 18px; font-weight: bold; padding: 0 4px;">-</span>
                <span id="ap-close-btn" style="color: #aaa; cursor: pointer; font-size: 18px; font-weight: bold; padding: 0 4px;">×</span>
            </div>
        </div>
        <div id="ap-content-wrapper">
            <div style="margin-bottom: 8px; margin-top: 10px;">
                <label style="display: block; margin-bottom: 4px; color: #aaa;">Link Google Web App:</label>
                <div id="ap-url-saved-view" style="display: none; align-items: center; justify-content: space-between; background-color: #2a2a35; padding: 6px 10px; border-radius: 4px; border: 1px solid #444;">
                    <span id="ap-url-status" style="color: #4caf50; font-weight: bold; letter-spacing: 3px;">***</span>
                    <span id="ap-edit-url-btn" style="cursor: pointer; font-size: 12px;">✏️</span>
                </div>
                <div id="ap-url-edit-view" style="display: block;">
                    <input type="text" id="ap-url-input" placeholder="https://script.google.com/macros/s/.../exec" style="width: 93%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;" value="${apiUrl}">
                </div>
            </div>
            <div style="margin-bottom: 10px;">
                <label style="display: block; margin-bottom: 4px; color: #aaa;">Tên Máy Tính (PC Name):</label>
                <input type="text" id="ap-pc-input" style="width: 93%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;" value="${pcName}">
            </div>
            <div style="display: flex; gap: 8px; margin-bottom: 10px;">
                <button id="ap-save-url" style="flex: 1; padding: 6px; border-radius: 6px; border: none; background-color: #4caf50; color: white; cursor: pointer; font-weight: bold;">Lưu</button>
                <button id="ap-toggle-btn" style="flex: 1.5; padding: 6px; border-radius: 6px; border: none; background-color: #2196f3; color: white; cursor: pointer; font-weight: bold;">Bắt đầu chạy</button>
            </div>
            <div style="background-color: #121216; padding: 8px; border-radius: 6px; font-family: monospace; font-size: 11px; max-height: 80px; overflow-y: auto; border: 1px solid #222;" id="ap-log-box">
                [Hệ thống] Đang tải...
            </div>
        </div>
    `;
    document.body.appendChild(panel);

    // Dom Elements
    const logBox = document.getElementById('ap-log-box');
    const badge = document.getElementById('ap-badge');
    const toggleBtn = document.getElementById('ap-toggle-btn');
    const urlInput = document.getElementById('ap-url-input');
    const pcInput = document.getElementById('ap-pc-input');
    const saveUrlBtn = document.getElementById('ap-save-url');
    const minimizeBtn = document.getElementById('ap-minimize-btn');
    const closeBtn = document.getElementById('ap-close-btn');
    const contentWrapper = document.getElementById('ap-content-wrapper');
    const urlSavedView = document.getElementById('ap-url-saved-view');
    const urlEditView = document.getElementById('ap-url-edit-view');
    const editUrlBtn = document.getElementById('ap-edit-url-btn');
    const urlStatus = document.getElementById('ap-url-status');

    function log(message) {
        const time = new Date().toLocaleTimeString();
        logBox.innerHTML = `[${time}] ${message}<br>` + logBox.innerHTML;
        const lines = logBox.innerHTML.split('<br>');
        if (lines.length > 20) logBox.innerHTML = lines.slice(0, 20).join('<br>');
    }

    function updateUIState() {
        if (isRunning) {
            badge.innerText = "ĐANG CHẠY";
            badge.style.backgroundColor = "#4caf50";
            toggleBtn.innerText = "Tạm dừng";
            toggleBtn.style.backgroundColor = "#f44336";
        } else {
            badge.innerText = "TẮT";
            badge.style.backgroundColor = "#777777";
            toggleBtn.innerText = "Bắt đầu chạy";
            toggleBtn.style.backgroundColor = "#2196f3";
        }
    }

    function updateUrlView() {
        if (apiUrl && apiUrl !== DEFAULT_WEB_APP_URL) {
            urlEditView.style.display = 'none';
            urlSavedView.style.display = 'flex';
            urlStatus.innerText = "***";
        } else {
            urlEditView.style.display = 'block';
            urlSavedView.style.display = 'none';
        }
    }

    updateUIState();
    updateUrlView();

    editUrlBtn.addEventListener('click', () => {
        urlEditView.style.display = 'block';
        urlSavedView.style.display = 'none';
        urlInput.focus();
    });

    saveUrlBtn.addEventListener('click', () => {
        const inputVal = urlInput.value.trim();
        const pcInputVal = pcInput.value.trim() || "PC_01";
        if (inputVal && !inputVal.includes("HAY_DIEN_URL")) {
            apiUrl = inputVal;
            pcName = pcInputVal;
            GM_setValue("google_apps_script_url", apiUrl);
            GM_setValue("shopee_pc_name", pcName);
            log(`Đã lưu cấu hình. PC: ${pcName}`);
            updateUrlView();
            alert("Đã lưu cấu hình thành công!");
        } else {
            alert("Vui lòng điền URL hợp lệ!");
        }
    });

    function toggleRunningState() {
        if (!apiUrl || apiUrl.includes("HAY_DIEN_URL")) {
            alert("Vui lòng cấu hình URL Google Apps Script Web App trước!");
            return;
        }
        isRunning = !isRunning;
        GM_setValue("auto_print_enabled", isRunning);
        updateUIState();
        log(isRunning ? "Khởi động hệ thống đa tab song song..." : "Đã tạm dừng hệ thống.");
    }

    toggleBtn.addEventListener('click', toggleRunningState);
    badge.addEventListener('click', toggleRunningState);

    let isMinimized = GM_getValue("panel_minimized", false);
    function applyMinimizeState() {
        if (isMinimized) {
            contentWrapper.style.display = 'none';
            panel.style.width = '200px';
            minimizeBtn.innerText = '+';
        } else {
            contentWrapper.style.display = 'block';
            panel.style.width = '300px';
            minimizeBtn.innerText = '-';
        }
    }
    applyMinimizeState();

    minimizeBtn.addEventListener('click', () => {
        isMinimized = !isMinimized;
        GM_setValue("panel_minimized", isMinimized);
        applyMinimizeState();
    });

    closeBtn.addEventListener('click', () => {
        if (isRunning) toggleRunningState();
        panel.style.display = 'none';
        launcher.style.display = 'flex';
    });

    launcher.addEventListener('click', () => {
        panel.style.display = 'block';
        launcher.style.display = 'none';
    });

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Helper gọi API đến GAS
    function callGAS(action, extraData, callback) {
        if (!apiUrl || apiUrl.includes("HAY_DIEN_URL")) return;
        const data = Object.assign({ action: action }, extraData);
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
                    console.error("[All-in-One] Lỗi parse JSON:", e);
                }
            }
        });
    }

    // Giả lập nhập ô Input
    function simulateInput(inputEl, value) {
        inputEl.focus();
        inputEl.value = value;
        inputEl.dispatchEvent(new Event('input', { bubbles: true }));
        inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        setTimeout(() => {
            ['keydown', 'keypress', 'keyup'].forEach(name => {
                inputEl.dispatchEvent(new KeyboardEvent(name, {
                    bubbles: true, cancelable: true, key: 'Enter', code: 'Enter', keyCode: 13, which: 13
                }));
            });
        }, 500);
    }

    // ==========================================
    // 2. TÍNH NĂNG 1: IN BILL THƯỜNG (awbPrint)
    // ==========================================
    async function startPollingLoop() {
        if (!isRunning || isPrintingNow) return;

        const hash = window.location.hash || "";
        if (!hash.includes('awbPrint')) return;

        try {
            isPrintingNow = true;
            const response = await fetch(`${apiUrl}?action=get_pending&pc=${encodeURIComponent(pcName)}`);
            const data = await response.json();

            if (data.status === "success") {
                let codesToPrint = [];
                if (data.code) {
                    codesToPrint = data.code.split('\n').map(c => c.trim().toUpperCase()).filter(c => c.length > 0);
                } else if (data.codes && Array.isArray(data.codes)) {
                    codesToPrint = data.codes.map(c => c.trim().toUpperCase());
                }

                if (codesToPrint.length > 0) {
                    log(`Tìm thấy lô gồm ${codesToPrint.length} mã để in.`);
                    const success = await executePrintJob(codesToPrint);
                    if (success) {
                        log(`Đã in lô thành công: ${codesToPrint.join(', ')}`);
                    } else {
                        log(`Thất bại khi in lô.`);
                    }
                }
            }
        } catch (error) {
            log(`Lỗi in thường: ${error.message}`);
        } finally {
            isPrintingNow = false;
        }
    }

    async function executePrintJob(codes) {
        const textarea = document.querySelector('textarea') || document.querySelector('input[type="text"]');
        if (!textarea) {
            log("Không tìm thấy ô nhập mã vận đơn!");
            return false;
        }

        const combinedText = codes.join('\n');
        textarea.value = combinedText;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
        
        try {
            textarea.focus();
            textarea.select();
            document.execCommand('insertText', false, combinedText);
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        } catch (e) {}
        
        await delay(300); 

        const confirmBtn = Array.from(document.querySelectorAll('button')).find(btn => {
            const txt = btn.innerText || btn.textContent || "";
            return txt.trim().toLowerCase() === "confirm";
        });
        if (!confirmBtn) return false;

        confirmBtn.click();
        
        let isLoaded = false;
        const testCode = codes[0];
        for (let i = 0; i < 25; i++) {
            await delay(100);
            const rowElement = Array.from(document.querySelectorAll('td, span, div')).find(el => {
                return el.textContent.trim().toUpperCase() === testCode;
            });
            if (rowElement) {
                isLoaded = true;
                break;
            }
        }

        const printBtn = Array.from(document.querySelectorAll('button, span, a')).find(el => {
            const txt = el.innerText || el.textContent || "";
            return txt.trim() === "Print";
        });
        if (!printBtn) return false;

        printBtn.click();
        
        let isModalOpened = false;
        let dialogPrintBtn = null;
        for (let i = 0; i < 20; i++) {
            await delay(50);
            const dialogs = document.querySelectorAll('.el-dialog, .modal-content, [class*="dialog"], [class*="modal"]');
            for (const dialog of dialogs) {
                if (dialog.offsetWidth > 0 || dialog.offsetHeight > 0) {
                    dialogPrintBtn = Array.from(dialog.querySelectorAll('button')).find(btn => {
                        const txt = btn.innerText || btn.textContent || "";
                        return txt.trim() === "Print";
                    });
                    if (dialogPrintBtn) {
                        isModalOpened = true;
                        break;
                    }
                }
            }
            if (isModalOpened) break;
        }

        if (dialogPrintBtn) {
            dialogPrintBtn.click();
            await delay(500);
            return true;
        }
        return false;
    }

    // ==========================================
    // 3. TÍNH NĂNG 2: TỰ ĐỘNG QUÉT ĐỒNG BỘ MÃ TO (generalPackTOList)
    // ==========================================
    function processTOListPage() {
        if (!isRunning || isProcessingList || redirecting) return;
        isProcessingList = true;
        log("[TO Quét] Đang quét danh sách TO Packed...");

        let searchBtn = null;
        const buttons = document.querySelectorAll('button');
        for (let btn of buttons) {
            const text = btn.innerText.trim();
            if (text === "Tìm kiếm" || text === "Search") {
                searchBtn = btn;
                break;
            }
        }
        if (searchBtn) searchBtn.click();

        setTimeout(() => {
            callGAS("getTOList", {}, function(res) {
                if (res.status !== "success") {
                    isProcessingList = false;
                    return;
                }

                const existingTOs = new Set(res.data.map(to => to.toLowerCase()));
                const rows = document.querySelectorAll('tr');
                let newTOsToProcess = 0;

                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length > 0) {
                        let toNum = "";
                        let statusText = "";
                        cells.forEach(cell => {
                            const txt = cell.innerText.trim();
                            if (/^TO\d+[A-Z0-9]+$/i.test(txt)) toNum = txt;
                            if (txt === "Packed" || txt === "Đã đóng gói") statusText = txt;
                        });

                        if (toNum && statusText && !existingTOs.has(toNum.toLowerCase())) {
                            newTOsToProcess++;
                            callGAS("addTO", { toNum: toNum }, function(addRes) {
                                if (addRes.status === "success") {
                                    log(`[TO Quét] Đã đồng bộ mã TO mới: ${toNum}`);
                                }
                            });
                        }
                    }
                });
                
                isProcessingList = false;
            });
        }, 3000);
    }

    // ==========================================
    // 4. TÍNH NĂNG 3: IN TO TỪ SHEET (startPackNoLabel)
    // ==========================================
    function processPrintPage() {
        if (!isRunning || isProcessingPrint) return;

        const hash = window.location.hash;
        if (!hash.includes("startPackNoLabel")) return;

        isProcessingPrint = true;

        // Gọi API lấy mã TO chờ in tiếp theo từ Google Sheet
        callGAS("get_pending_to", {}, function(res) {
            if (res.status === "success" && res.toNum) {
                const currentTO = res.toNum;
                log(`[TO In] Lấy mã TO cần in từ Sheet: ${currentTO}`);

                setTimeout(() => {
                    let toInput = document.querySelector('input[placeholder*="TO"]') ||
                                  document.querySelector('input[placeholder*="nhập"]') ||
                                  document.querySelector('input[placeholder*="Enter"]') ||
                                  document.querySelector('input');

                    if (toInput) {
                        simulateInput(toInput, currentTO);
                    } else {
                        isProcessingPrint = false;
                        return;
                    }

                    let checkCount = 0;
                    let checkPrintInterval = setInterval(() => {
                        checkCount++;
                        let printBtn = null;
                        const elements = document.querySelectorAll('button, span, div, a');
                        for (let el of elements) {
                            const text = el.innerText.trim();
                            if (text === "Print Label" || text === "In nhãn" || text === "In nhãn phụ" || text.includes("Print")) {
                                printBtn = el;
                                break;
                            }
                        }

                        if (printBtn) {
                            clearInterval(checkPrintInterval);
                            log("[TO In] Click nút in nhãn!");
                            printBtn.click();

                            setTimeout(() => {
                                log(`[TO In] Đánh dấu 'Đã in' thành công cho ${currentTO}`);
                                isProcessingPrint = false;
                            }, 2000);
                        } else if (checkCount > 15) {
                            clearInterval(checkPrintInterval);
                            isProcessingPrint = false;
                        }
                    }, 1000);
                }, 2000);
            } else {
                // Không có mã TO nào chờ in, nghỉ 2.5s rồi quét lại
                setTimeout(() => {
                    isProcessingPrint = false;
                }, 2500);
            }
        });
    }

    // ==========================================
    // 5. TÍNH NĂNG 4: TỰ ĐỘNG CHUYỂN PICK (pickupTask/list)
    // ==========================================
    async function startHandoverLoop() {
        if (!isRunning || isProcessingHandover) return;

        const hash = window.location.hash || "";
        if (!hash.includes('pickupTask/list')) return;

        try {
            isProcessingHandover = true;
            const response = await fetch(`${apiUrl}?action=get_pending_chuyen_pick&pc=${encodeURIComponent(pcName)}`);
            const data = await response.json();

            if (data.status === "success") {
                const pupCode = data.pupCode;
                const recipientDriver = data.recipientDriver;
                
                log(`Tìm thấy nhiệm vụ Chuyển Pick: PUP=${pupCode}, Nhận=${recipientDriver}`);
                const success = await executeHandoverJob(pupCode, recipientDriver);
                if (success) {
                    log(`Đã chuyển giao thành công PUP: ${pupCode} cho tài xế ${recipientDriver}`);
                } else {
                    log(`Chuyển giao thất bại trên giao diện Shopee.`);
                }
            }
        } catch (error) {
            log(`Lỗi Chuyển Pick: ${error.message}`);
        } finally {
            isProcessingHandover = false;
        }
    }

    async function executeHandoverJob(pupCode, recipientDriver) {
        const inputs = document.querySelectorAll('input');
        let pupInput = null;
        for (let input of inputs) {
            const placeholder = input.placeholder || "";
            if (placeholder.toLowerCase().includes("pup") || placeholder.toLowerCase().includes("mã") || placeholder.toLowerCase().includes("enter") || placeholder.toLowerCase().includes("nhập")) {
                pupInput = input;
                break;
            }
        }
        if (!pupInput) pupInput = inputs[0];

        if (!pupInput) {
            log("Không tìm thấy ô nhập mã PUP!");
            return false;
        }

        simulateInput(pupInput, pupCode);
        await delay(1200);

        let driverInput = null;
        const freshInputs = document.querySelectorAll('input');
        for (let input of freshInputs) {
            if (input !== pupInput && (input.placeholder.toLowerCase().includes("driver") || input.placeholder.toLowerCase().includes("tài xế") || input.placeholder.toLowerCase().includes("nhận"))) {
                driverInput = input;
                break;
            }
        }

        if (driverInput && recipientDriver) {
            simulateInput(driverInput, recipientDriver);
            await delay(1000);
        }

        let handoverBtn = null;
        const elements = document.querySelectorAll('button, span');
        for (let el of elements) {
            const txt = el.innerText.trim();
            if (txt === "Xác nhận" || txt === "Bàn giao" || txt === "Handover" || txt === "Transfer" || txt === "Assign" || txt === "Chuyển giao") {
                handoverBtn = el;
                break;
            }
        }

        if (!handoverBtn) {
            handoverBtn = document.querySelector('button.el-button--primary');
        }

        if (handoverBtn) {
            handoverBtn.click();
            log("Đã nhấn Xác nhận bàn giao.");
            await delay(2000);
            return true;
        }
        return false;
    }

    // ==========================================
    // 6. GIÁM SÁT HỆ THỐNG
    // ==========================================
    function monitorApp() {
        const currentUrl = window.location.href;
        const hash = window.location.hash || "";

        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            isProcessingList = false;
            isProcessingPrint = false;
            isPrintingNow = false;
            isProcessingHandover = false;
            redirecting = false;
        }

        if (!isRunning) return;

        if (hash.includes("generalPackTOList")) {
            processTOListPage();
        } else if (hash.includes("startPackNoLabel")) {
            processPrintPage();
        } else if (hash.includes("awbPrint")) {
            startPollingLoop();
        } else if (hash.includes("pickupTask/list")) {
            startHandoverLoop();
        }
    }

    setInterval(monitorApp, 3500);
    log("[Hệ thống] Multi-Tab Parallel Helper đã hoạt động.");

})();