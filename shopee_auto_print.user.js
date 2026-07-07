// ==UserScript==
// @name         Hỗ trợ VTDStadio
// @namespace    http://VTDStadio.net/
// @version      6.2
// @description  Hỗ Trợ Công Việc
// @author       VTDStadio
// @match        https://spx.shopee.vn/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @run-at       document-start
// ==/UserScript==

(function() {
    // Chỉ chạy tập lệnh trên tên miền Shopee Express để tránh ảnh hưởng/hiển thị UI trên Google Sheets
    const isShopee = window.location.host.includes("spx.shopee.vn") || window.location.host.includes("spxexpress.com");
    if (!isShopee) {
        return;
    }

    // Standard background communication messaging bridge / fallback GM APIs in Main/Page world
    if (typeof GM_getValue === 'undefined') {
        globalThis.GM_getValue = (key, def) => {
            const val = localStorage.getItem(key);
            return val !== null ? val : def;
        };
    }
    if (typeof GM_setValue === 'undefined') {
        globalThis.GM_setValue = (key, val) => {
            localStorage.setItem(key, val);
        };
    }
    if (typeof GM_registerMenuCommand === 'undefined') {
        globalThis.GM_registerMenuCommand = (name, fn) => {
            console.log("[VTDAuto] Menu Command registered:", name);
        };
    }
    if (typeof GM_openInTab === 'undefined') {
        globalThis.GM_openInTab = (url, options) => {
            const active = options && options.active !== undefined ? options.active : true;
            window.postMessage({ type: "SHOPEE_OPEN_TAB_REQUEST", url, active }, "*");
        };
    }
    if (typeof GM_xmlhttpRequest === 'undefined') {
        globalThis.GM_xmlhttpRequest = (options) => {
            const reqId = "req_" + Math.random().toString(36).substring(2, 9);
            window.addEventListener("message", function handler(e) {
                if (e.data && e.data.type === "SHOPEE_XMLHTTP_RESPONSE" && e.data.reqId === reqId) {
                    window.removeEventListener("message", handler);
                    if (e.data.success) {
                        if (options.onload) {
                            options.onload({
                                text: e.data.responseText,
                                responseText: e.data.responseText,
                                status: 200
                            });
                        }
                    } else {
                        if (options.onerror) {
                            options.onerror(new Error(e.data.error || "Lỗi kết nối"));
                        }
                    }
                }
            });
            window.postMessage({ type: "SHOPEE_XMLHTTP_REQUEST", reqId, options: {
                url: options.url,
                method: options.method,
                data: options.data
            }}, "*");
        };
    }
    if (typeof unsafeWindow === 'undefined') {
        globalThis.unsafeWindow = window;
    }

    // Định nghĩa các URL và nhãn tab
    const TABS_CONFIG = {
        awbPrint: {
            name: "In Bill",
            url: "https://spx.shopee.vn/#/awbPrint/index",
            hashKey: "awbPrint"
        },
        generalPackTOList: {
            name: "Quét TO",
            url: "https://spx.shopee.vn/#/general-to-management",
            hashKey: "general-to-management"
        },
        startPackNoLabel: {
            name: "In TO",
            url: "https://spx.shopee.vn/#/packManagement/startPackNoLabel?operatorInvalid=true&id=TO20260613Q0NRJ&module=generalPackTOList",
            hashKey: "startPackNoLabel"
        },
        pickupTask: {
            name: "Chuyển Pick",
            url: "https://spx.shopee.vn/#/pickupTask/list",
            hashKey: "pickupTask/list"
        }
    };

    // Xác định tab hiện tại thuộc loại nào dựa vào URL hash
    function getCurrentTabType() {
        const hash = window.location.hash || "";
        const path = hash.split('?')[0]; 
        for (const [type, cfg] of Object.entries(TABS_CONFIG)) {
            if (path.includes(cfg.hashKey)) {
                return type;
            }
        }
        return null;
    }

    // Sử dụng sessionStorage để cấp 1 mã duy nhất cho tab hiện tại.
    // sessionStorage chỉ tồn tại cho đến khi tab đó bị đóng hoàn toàn (F5 không mất, nhưng nhân bản/mở tab mới sẽ có session mới).
    let tabInstanceId = sessionStorage.getItem("tab_instance_id");
    if (!tabInstanceId) {
        tabInstanceId = "inst_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now();
        sessionStorage.setItem("tab_instance_id", tabInstanceId);
    }

    const initialTabType = getCurrentTabType();
    if (initialTabType) {
        localStorage.setItem("last_pulse_" + initialTabType, Date.now().toString());
        localStorage.setItem("tab_instance_id_" + initialTabType, tabInstanceId);
    }

    // XỬ LÝ SỰ KIỆN ĐÓNG TAB: Đánh dấu tắt và xoá instance ID
    function handleTabClose() {
        const currentType = getCurrentTabType();
        if (currentType) {
            const registeredId = localStorage.getItem("tab_instance_id_" + currentType);
            if (registeredId === tabInstanceId) {
                localStorage.setItem("last_pulse_" + currentType, "0");
                localStorage.removeItem("tab_instance_id_" + currentType);
            }
        }
    }

    window.addEventListener("beforeunload", handleTabClose);
    window.addEventListener("unload", handleTabClose);

    // Đợi DOM load xong mới tạo Giao diện điều khiển
    function init() {
        // Loại bỏ trên các popup xem trước (preview), iframe để không làm vướng khi in
        const isPopupOrPreview = window.self !== window.top || window.location.href.includes('preview') || window.location.href.includes('print');
        if (isPopupOrPreview) {
            return; // Thoát ngay, không tạo bảng điều khiển
        }

        // ==========================================
        // 1. CẤU HÌNH & KHỞI TẠO BẢNG ĐIỀU KHIỂN
        // ==========================================
        const DEFAULT_WEB_APP_URL = "HAY_DIEN_URL_WEB_APP_CUA_BAN_VAO_DAY";
        
        let apiUrl = localStorage.getItem("google_apps_script_url") || GM_getValue("google_apps_script_url", DEFAULT_WEB_APP_URL);
        let pcName = localStorage.getItem("shopee_pc_name") || GM_getValue("shopee_pc_name", "PC_01");
        let pcPriority = localStorage.getItem("shopee_pc_priority") || GM_getValue("shopee_pc_priority", "1");
        let isRunning = localStorage.getItem("auto_print_enabled") === "true";
        
        let isPrintingNow = false;
        let isProcessingList = false;
        let isProcessingPrint = false;
        let isProcessingHandover = false;
        let lastHandoverPup = "";
        let lastHandoverTime = 0;
        let lastUrl = "";
        let lastSearchTime = 0;
        let localExistingTOs = new Set();
        let lastTOFetchTime = 0;

        // Bộ đếm thời gian để phát hiện treo (stuck detection)
        let lastPrintStartTime = 0;
        let lastListStartTime = 0;
        let lastPrintPageStartTime = 0;
        let lastHandoverStartTime = 0;
        const STUCK_TIMEOUT = 30000; // 30 giây - nếu quá thời gian này thì coi là treo và tự giải phóng
        let lastSuccessfulAction = Date.now(); // Lần cuối cùng thực hiện thành công bất kỳ hành động nào
        const PAGE_RELOAD_INTERVAL = 1800000; // 30 phút - tự động đóng và mở lại các tab để refresh session tránh ngủ đông

        let lastReleaseTime = 0;
        let lastAwbPollTime = 0;
        let lastToPollTime = 0;
        let lastCpPollTime = 0;

        // Cơ chế khóa dùng chung duy nhất (Single Global Lock) cho toàn bộ hệ thống
        // Đảm bảo tại một thời điểm chỉ có DUY NHẤT một tab thực hiện nhiệm vụ, tránh chạy chồng lấn các sheet khác nhau.
        function isHigherPriorityTaskPending(myType) {
            const now = Date.now();
            const priorities = ['awbPrint', 'startPackNoLabel', 'pickupTask'];
            const myIndex = priorities.indexOf(myType);
            if (myIndex === -1) return false;
            
            const TAB_ACTIVE_TIMEOUT = 12000; // 12 giây

            for (let i = 0; i < myIndex; i++) {
                const type = priorities[i];
                const lastPulse = parseInt(localStorage.getItem('last_pulse_' + type) || '0');
                const isTabActive = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;
                const isPending = localStorage.getItem('pending_' + type) === 'true';
                
                if (isTabActive && isPending) {
                    return true;
                }
            }
            return false;
        }

        function acquireGlobalLock(tabType) {
            const now = Date.now();
            
            // Nếu tab này vừa giải phóng khóa cách đây chưa quá 2 giây, không cho phép tranh khóa ngay để nhường tab khác
            if (now - lastReleaseTime < 2000) {
                return false;
            }

            // KIỂM TRA ĐỘ ƯU TIÊN (Priority Lock Policy): In Bill > In TO > Chuyển Pick
            if (isHigherPriorityTaskPending(tabType)) {
                return false; // Nhường khóa cho tab có độ ưu tiên cao hơn đang hoạt động và có task
            }

            const lockKey = "global_automation_single_lock";
            const typeKey = "global_automation_lock_type";
            const timeKey = "global_automation_lock_time";
            const currentLockType = localStorage.getItem(typeKey);
            const lockTime = parseInt(localStorage.getItem(timeKey) || "0");
            
            const priorities = ['awbPrint', 'startPackNoLabel', 'pickupTask'];
            const myIndex = priorities.indexOf(tabType);
            const holderIndex = currentLockType ? priorities.indexOf(currentLockType) : 99;

            // Nếu chưa có khóa, hoặc khóa đã quá 5 giây (để các tab rảnh rỗi nhường khóa nhanh hơn), hoặc chính tab này đang giữ khóa
            // HOẶC tab này có độ ưu tiên cao hơn hẳn tab đang giữ khóa (myIndex < holderIndex)
            if (!currentLockType || (now - lockTime) > 5000 || currentLockType === tabType || (myIndex !== -1 && myIndex < holderIndex)) {
                localStorage.setItem(lockKey, "locked");
                localStorage.setItem(typeKey, tabType);
                localStorage.setItem(timeKey, now.toString());
                return true;
            }
            return false;
        }
        
        function releaseGlobalLock(tabType) {
            const lockKey = "global_automation_single_lock";
            const typeKey = "global_automation_lock_type";
            const timeKey = "global_automation_lock_time";
            const currentLockType = localStorage.getItem(typeKey);
            if (currentLockType === tabType) {
                localStorage.removeItem(lockKey);
                localStorage.removeItem(typeKey);
                localStorage.removeItem(timeKey);
                lastReleaseTime = Date.now(); // Ghi nhận thời điểm giải phóng khóa của tab này
            }
        }
        
        function updateGlobalLockHeartbeat(tabType) {
            const typeKey = "global_automation_lock_type";
            const timeKey = "global_automation_lock_time";
            const currentLockType = localStorage.getItem(typeKey);
            if (currentLockType === tabType) {
                localStorage.setItem(timeKey, Date.now().toString());
            }
        }

        // Đăng ký menu cài đặt nhanh
        GM_registerMenuCommand("Cài đặt URL Google Web App", function() {
            let newUrl = prompt("Nhập URL Web App của bạn:", apiUrl);
            if (newUrl) {
                apiUrl = newUrl.trim();
                localStorage.setItem("google_apps_script_url", apiUrl);
                GM_setValue("google_apps_script_url", apiUrl);
                alert("Đã lưu URL Web App mới!");
                window.location.reload();
            }
        });

        // Tạo launcher hình nửa tròn màu cam có mũi tên nằm ở rìa phải màn hình khi đóng (Mặc định hiển thị khi tải trang)
        const launcher = document.createElement('div');
        launcher.id = 'shopee-auto-print-launcher';
        launcher.innerText = '◀';
        launcher.style = 'position:fixed; top:50%; right:0; transform:translateY(-50%); z-index:99999; background-color:#ff5722; color:white; width:22px; height:45px; border-radius:22px 0 0 22px; box-shadow:-2px 0 8px rgba(0,0,0,0.2); display:flex; justify-content:center; align-items:center; cursor:pointer; font-size:11px; font-weight:bold; user-select:none; padding-right:2px;';
        document.body.appendChild(launcher);

        // Bảng điều khiển nổi (Mặc định ẩn khi tải trang)
        const panel = document.createElement('div');
        panel.id = 'shopee-auto-print-panel';
        panel.style = 'position:fixed; bottom:20px; right:20px; z-index:99999; background-color:#1e1e24; color:white; padding:15px; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.3); font-family:system-ui, sans-serif; width:310px; font-size:13px; border:1px solid #333; display:none;';
        
        // Cấu hình tính năng Tự động thu nhỏ (Auto-Collapse) sau 20 giây
        let autoCollapseTimeout = null;

        function startAutoCollapseTimer() {
            stopAutoCollapseTimer();
            autoCollapseTimeout = setTimeout(() => {
                collapsePanel();
            }, 20000); // 20 giây
        }

        function stopAutoCollapseTimer() {
            if (autoCollapseTimeout) {
                clearTimeout(autoCollapseTimeout);
                autoCollapseTimeout = null;
            }
        }

        function collapsePanel() {
            panel.style.display = 'none';
            launcher.style.display = 'flex';
            stopAutoCollapseTimer();
        }

        function expandPanel() {
            panel.style.display = 'block';
            launcher.style.display = 'none';
            startAutoCollapseTimer();
        }

        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-bottom: 1px solid #444; padding-bottom: 8px;">
                <strong style="color: #ff5722; font-size: 14px;">Hỗ trợ</strong>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span id="ap-badge" style="background-color: #777777; color: white; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; text-transform: uppercase; cursor: pointer;">Tắt</span>
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
                <div style="margin-bottom: 10px;">
                    <label style="display: block; margin-bottom: 4px; color: #aaa;">Độ ưu tiên thiết bị:</label>
                    <select id="ap-priority-select" style="width: 99%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;">
                        <option value="1" ${pcPriority === "1" ? "selected" : ""}>1 (Mặc định - Thấp)</option>
                        <option value="2" ${pcPriority === "2" ? "selected" : ""}>2 (Trung bình)</option>
                        <option value="3" ${pcPriority === "3" ? "selected" : ""}>3 (Cao nhất - Ưu tiên)</option>
                    </select>
                </div>
                <div style="display: flex; gap: 8px; margin-bottom: 10px;">
                    <button id="ap-save-url" style="flex: 1; padding: 6px; border-radius: 6px; border: none; background-color: #4caf50; color: white; cursor: pointer; font-weight: bold;">Lưu</button>
                    <button id="ap-toggle-btn" style="flex: 1.5; padding: 6px; border-radius: 6px; border: none; background-color: #2196f3; color: white; cursor: pointer; font-weight: bold;">Bắt đầu chạy</button>
                </div>
                <div style="margin-bottom: 10px; border-top: 1px solid #444; padding-top: 8px;">
                    <label style="display: block; margin-bottom: 6px; color: #ff9800; font-weight: bold;">Trạng thái các Tab (Auto-Open):</label>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;" id="ap-tabs-status-container">
                        <!-- Tab status items will be rendered here dynamically -->
                    </div>
                    <button id="ap-open-all-tabs-btn" style="width: 100%; margin-top: 8px; padding: 6px; border-radius: 6px; border: 1px dashed #ff9800; background-color: rgba(255, 152, 0, 0.1); color: #ff9800; cursor: pointer; font-weight: bold; font-size: 11px;">
                        🚀 Mở tất cả các Tab hoạt động
                    </button>
                </div>
                <div style="background-color: #121216; padding: 8px; border-radius: 6px; font-family: monospace; font-size: 11px; max-height: 80px; overflow-y: auto; border: 1px solid #222;" id="ap-log-box">
                    [Hệ thống] Đang tải...
                </div>
            </div>
        `;
        document.body.appendChild(panel);

        // Nút bấm thu nhỏ và panel sẽ mượt mà hơn nhờ transition
        const transitionStyle = document.createElement('style');
        transitionStyle.innerHTML = `
            #shopee-auto-print-panel, #shopee-auto-print-launcher {
                transition: opacity 0.25s ease-in-out;
            }
        `;
        document.head.appendChild(transitionStyle);

        // Hàm kiểm tra xem có hộp thoại/modal/xem trước nào đang HIỂN THỊ thực sự trên màn hình không
        function checkDialogVisibility() {
            // Chỉ ẩn bảng hỗ trợ khi có màn hình xem trước (preview) hoặc khi in nhãn
            let hasVisibleDialog = false;

            const dialogs = document.querySelectorAll('.preview-container, .print-preview, iframe[src*="print"]');
            for (let i = 0; i < dialogs.length; i++) {
                const el = dialogs[i];
                if (el.id === 'shopee-auto-print-panel' || el.id === 'shopee-auto-print-launcher') continue;
                
                const style = window.getComputedStyle(el);
                if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0' && el.offsetHeight > 0) {
                    hasVisibleDialog = true;
                    break;
                }
            }

            if (hasVisibleDialog) {
                panel.style.opacity = '0';
                panel.style.pointerEvents = 'none';
            } else {
                // Phục hồi lại độ hiển thị của bảng điều khiển nếu không bị che
                if (panel.style.display !== 'none') {
                    panel.style.opacity = '1';
                    panel.style.pointerEvents = 'auto';
                }
            }

            // Launcher (nút mở bảng màu cam ở rìa màn hình) luôn luôn hiển thị để người dùng có thể mở bất cứ lúc nào
            if (launcher.style.display !== 'none') {
                launcher.style.opacity = '1';
                launcher.style.pointerEvents = 'auto';
            }
        }

        // Kiểm tra mỗi 300ms để ẩn/hiện bảng nhanh chóng khi mở xem trước
        setInterval(checkDialogVisibility, 300);

        const logBox = document.getElementById('ap-log-box');
        const badge = document.getElementById('ap-badge');
        const toggleBtn = document.getElementById('ap-toggle-btn');
        const urlInput = document.getElementById('ap-url-input');
        const pcInput = document.getElementById('ap-pc-input');
        const saveUrlBtn = document.getElementById('ap-save-url');
        const closeBtn = document.getElementById('ap-close-btn');
        const contentWrapper = document.getElementById('ap-content-wrapper');
        const urlSavedView = document.getElementById('ap-url-saved-view');
        const urlEditView = document.getElementById('ap-url-edit-view');
        const editUrlBtn = document.getElementById('ap-edit-url-btn');
        const urlStatus = document.getElementById('ap-url-status');
        const tabsStatusContainer = document.getElementById('ap-tabs-status-container');
        const openAllTabsBtn = document.getElementById('ap-open-all-tabs-btn');

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

        // Cập nhật trạng thái sống của tab hiện tại lên localStorage
        function updateSelfPulse() {
            const currentType = getCurrentTabType();
            if (currentType) {
                localStorage.setItem("last_pulse_" + currentType, Date.now().toString());
                localStorage.setItem("tab_instance_id_" + currentType, tabInstanceId);
                
                // Tránh tình trạng cờ pending bị kẹt trong localStorage khi tab đã chạy lại hoặc không thực sự xử lý tác vụ
                const isExecuting = isPrintingNow || isProcessingList || isProcessingPrint || isProcessingHandover;
                if (!isExecuting) {
                    localStorage.removeItem('pending_' + currentType);
                }
            }
        }

        // Đọc trạng thái các tab khác từ localStorage và cập nhật giao diện
        const TAB_ACTIVE_TIMEOUT = 15000; // 15 giây (vì mỗi tab cập nhật pulse mỗi 400ms)
        const REOPEN_COOLDOWN_CLOSED = 10000; // 10 giây nếu tab bị đóng chủ động (unload phát hỏa)
        const REOPEN_COOLDOWN_CRASHED = 20000; // 20 giây nếu tab bị treo/crash đột ngột không kịp gửi unload

        // Đọc trạng thái các tab khác từ localStorage và cập nhật giao diện
        function updateTabsStatusUI() {
            tabsStatusContainer.innerHTML = "";
            const now = Date.now();
            
            for (const [type, cfg] of Object.entries(TABS_CONFIG)) {
                const lastPulse = parseInt(localStorage.getItem("last_pulse_" + type) || "0");
                const isTabActive = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;
                
                const item = document.createElement('div');
                item.style = `display: flex; align-items: center; justify-content: space-between; padding: 4px 6px; border-radius: 4px; background-color: ${isTabActive ? 'rgba(76, 175, 80, 0.15)' : 'rgba(244, 67, 54, 0.15)'}; border: 1px solid ${isTabActive ? '#4caf50' : '#f44336'}; font-size: 11px;`;
                
                item.innerHTML = `
                    <span style="font-weight: bold; color: ${isTabActive ? '#81c784' : '#e57373'};">${cfg.name}</span>
                    <span style="font-size: 9px; padding: 1px 4px; border-radius: 3px; background-color: ${isTabActive ? '#4caf50' : '#f44336'}; color: white;">
                        ${isTabActive ? 'Mở' : 'Tắt'}
                    </span>
                `;
                item.style.cursor = "pointer";
                item.title = `Bấm để mở tab ${cfg.name}`;
                item.addEventListener('click', () => {
                    if (typeof GM_openInTab !== 'undefined') {
                        GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
                    } else {
                        window.open(cfg.url, '_blank');
                    }
                });
                
                tabsStatusContainer.appendChild(item);
            }
        }

        // Thứ tự ưu tiên mở/reload tab: Chuyển Pick, In bill, Quét TO, In TO
        const RELOAD_ORDER = ['pickupTask', 'awbPrint', 'generalPackTOList', 'startPackNoLabel'];

        // ==========================================
        // MỞ TAB TUẦN TỰ (SEQUENTIAL TAB OPEN)
        // Mở từng tab một ở foreground, đợi load xong mới mở tab tiếp
        // ==========================================
        const SEQ_OPEN_TAB_TIMEOUT = 45000; // 45 giây chờ mỗi tab load xong

        function openMissingTabs() {
            initiateSequentialTabOpen('manual');
        }

        // Khởi tạo chuỗi mở tab tuần tự
        function initiateSequentialTabOpen(trigger) {
            const now = Date.now();

            // Kiểm tra không đang có chuỗi mở tab nào đang chạy
            const existing = localStorage.getItem('seq_open_queue');
            if (existing) {
                if (trigger === 'manual') {
                    // Bấm thủ công: luôn xóa sạch queue cũ và bắt đầu lại
                    log('[Mở Tab] Xóa queue cũ, bắt đầu mở tab mới...');
                    clearSeqOpenState();
                } else {
                    const started = parseInt(localStorage.getItem('seq_open_chain_start') || '0');
                    if ((now - started) < 300000) {
                        return; // Tự động: đợi queue hiện tại hoàn thành
                    }
                    log('[Mở Tab] Chuỗi mở tab cũ bị treo quá 5 phút. Tạo mới...');
                    clearSeqOpenState();
                }
            }

            // Thu thập danh sách tab cần mở
            const tabsToOpen = [];
            for (const type of RELOAD_ORDER) {
                if (trigger === 'manual') {
                    // Khi người dùng bấm thủ công: xóa pulse cũ và mở TẤT CẢ các tab
                    localStorage.setItem('last_pulse_' + type, '0');
                    tabsToOpen.push(type);
                } else {
                    // Tự động: chỉ mở tab chưa hoạt động
                    const lastPulse = parseInt(localStorage.getItem('last_pulse_' + type) || '0');
                    const isActive = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;
                    if (!isActive) {
                        tabsToOpen.push(type);
                    }
                }
            }

            if (tabsToOpen.length === 0) {
                if (trigger === 'manual') log('[Mở Tab] Tất cả các tab đều đang hoạt động rồi!');
                return;
            }

            // Xóa trạng thái smart reload để tránh xung đột
            localStorage.removeItem('smart_reload_queue');

            log(`[Mở Tab] ▶ Bắt đầu mở tuần tự ${tabsToOpen.length} tab: ${tabsToOpen.map(t => TABS_CONFIG[t]?.name || t).join(' → ')}`);

            localStorage.setItem('seq_open_queue', JSON.stringify(tabsToOpen));
            localStorage.setItem('seq_open_current', tabsToOpen[0]);
            localStorage.setItem('seq_open_phase', 'opening');
            localStorage.setItem('seq_open_tab_start', now.toString());
            localStorage.setItem('seq_open_chain_start', now.toString());

            const firstType = tabsToOpen[0];
            const cfg = TABS_CONFIG[firstType];
            localStorage.setItem('last_open_attempt_' + firstType, now.toString());

            const myTabType = getCurrentTabType();
            if (myTabType === firstType) {
                log(`[Mở Tab] 🔄 Đang ở tab đầu tiên (${cfg.name}) - tiến hành reload...`);
                window.location.reload();
            } else {
                log(`[Mở Tab] 🔄 Đang mở tab: ${cfg.name}...`);
                if (typeof GM_openInTab !== 'undefined') {
                    GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
                } else {
                    window.open(cfg.url, '_blank');
                }
            }
        }

        // Dọn dẹp trạng thái mở tab tuần tự
        function clearSeqOpenState() {
            localStorage.removeItem('seq_open_queue');
            localStorage.removeItem('seq_open_current');
            localStorage.removeItem('seq_open_phase');
            localStorage.removeItem('seq_open_tab_start');
            localStorage.removeItem('seq_open_chain_start');
            localStorage.removeItem('seq_open_retry');
        }

        // Mở tab tiếp theo trong chuỗi
        function openNextTabInQueue() {
            let queue;
            try {
                queue = JSON.parse(localStorage.getItem('seq_open_queue') || '[]');
            } catch(e) {
                clearSeqOpenState();
                return;
            }

            queue.shift(); // Bỏ tab vừa hoàn thành

            if (queue.length > 0) {
                const nextType = queue[0];
                const cfg = TABS_CONFIG[nextType];
                const now = Date.now();

                localStorage.setItem('seq_open_queue', JSON.stringify(queue));
                localStorage.setItem('seq_open_current', nextType);
                localStorage.setItem('seq_open_phase', 'opening');
                localStorage.setItem('seq_open_tab_start', now.toString());
                localStorage.setItem('last_open_attempt_' + nextType, now.toString());
                localStorage.removeItem('seq_open_retry');

                const myTabType = getCurrentTabType();
                if (myTabType === nextType) {
                    log(`[Mở Tab] 🔄 Đang ở tab tiếp theo (${cfg.name}) - tiến hành reload...`);
                    window.location.reload();
                } else {
                    log(`[Mở Tab] ➡ Mở tab tiếp: ${cfg.name}...`);
                    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
                        chrome.runtime.sendMessage({ action: "open_tab", url: cfg.url, active: true }, () => {
                            const err = chrome.runtime.lastError;
                        });
                    } else if (typeof GM_openInTab !== 'undefined') {
                        GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
                    } else {
                        window.open(cfg.url, '_blank');
                    }
                }
            } else {
                clearSeqOpenState();
                log('[Mở Tab] ✅ Tất cả các tab đã được mở và sẵn sàng hoạt động!');
            }
        }

        // Hàm chính: mỗi tab kiểm tra xem mình có đang trong chuỗi mở tab không
        function handleSequentialTabOpen() {
            const queueStr = localStorage.getItem('seq_open_queue');
            if (!queueStr) return;

            let queue;
            try {
                queue = JSON.parse(queueStr);
            } catch(e) {
                clearSeqOpenState();
                return;
            }

            if (!Array.isArray(queue) || queue.length === 0) {
                clearSeqOpenState();
                return;
            }

            const currentTarget = localStorage.getItem('seq_open_current');
            const myTabType = getCurrentTabType();

            // Tab này không phải tab đang cần load → bỏ qua
            if (!myTabType || myTabType !== currentTarget) return;

            const phase = localStorage.getItem('seq_open_phase');
            if (phase !== 'opening') return;

            const tabStart = parseInt(localStorage.getItem('seq_open_tab_start') || '0');
            const now = Date.now();

            // Kiểm tra nội dung trang đã load đầy đủ chưa
            if (isPageContentFullyLoaded()) {
                log(`[Mở Tab] ✓ Tab ${TABS_CONFIG[myTabType]?.name || myTabType} đã load đầy đủ và sẵn sàng!`);
                lastSuccessfulAction = Date.now();
                openNextTabInQueue();
                return;
            }

            // Kiểm tra timeout
            if ((now - tabStart) > SEQ_OPEN_TAB_TIMEOUT) {
                const retryCount = parseInt(localStorage.getItem('seq_open_retry') || '0');
                if (retryCount < 1) {
                    log(`[Mở Tab] ⚠ Tab ${TABS_CONFIG[myTabType]?.name || myTabType} load quá 45s. Thử reload lại...`);
                    localStorage.setItem('seq_open_retry', '1');
                    localStorage.setItem('seq_open_tab_start', now.toString());
                    window.location.reload();
                } else {
                    log(`[Mở Tab] ✗ Tab ${TABS_CONFIG[myTabType]?.name || myTabType} không thể load. Bỏ qua...`);
                    localStorage.removeItem('seq_open_retry');
                    openNextTabInQueue();
                }
            }
            // Chưa timeout → tiếp tục đợi (kiểm tra lại ở cycle tiếp theo ~1.5s)
        }

        // Tự động kiểm tra và khôi phục các tab bị đóng (dùng mở tuần tự)
        const REOPEN_COOLDOWN_CRASHED_NEW = 20000; // 20 giây nếu tab bị treo/crash đột ngột không kịp gửi unload

        function autoReopenClosedTabs() {
            if (!isRunning) return;

            // Nếu đang có chuỗi mở tab đang chạy hoặc chuỗi smart reload đang chạy → không can thiệp để tránh xung đột
            if (localStorage.getItem('seq_open_queue') || localStorage.getItem('smart_reload_queue')) return;

            const now = Date.now();
            let hasDeadTab = false;
            let hasFrozenTab = false;
            let frozenTabType = "";

            for (const [type, cfg] of Object.entries(TABS_CONFIG)) {
                const lastPulse = parseInt(localStorage.getItem('last_pulse_' + type) || '0');
                const registeredInstanceId = localStorage.getItem("tab_instance_id_" + type);
                
                // Nếu tab hoạt động trong vòng 5 phút → bình thường
                const isTabActive = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;

                if (!isTabActive) {
                    const lastOpenAttempt = parseInt(localStorage.getItem('last_open_attempt_' + type) || '0');
                    const lastOpenDiff = now - lastOpenAttempt;

                    // Nếu tab_instance_id vẫn tồn tại -> Tab vẫn đang mở nhưng bị Chrome cho đóng băng (Sleep)
                    if (registeredInstanceId && lastOpenDiff > 60000) {
                        hasFrozenTab = true;
                        frozenTabType = type;
                        break;
                    }

                    // Nếu không có tab_instance_id hoặc bị xoá -> Tab đã bị đóng thực sự (Dead)
                    if (!registeredInstanceId) {
                        if (lastPulse === 0 && lastOpenDiff > REOPEN_COOLDOWN_CLOSED) {
                            hasDeadTab = true;
                            break;
                        }
                        if (lastPulse > 0 && (now - lastPulse) > REOPEN_COOLDOWN_CRASHED_NEW && lastOpenDiff > REOPEN_COOLDOWN_CRASHED_NEW) {
                            hasDeadTab = true;
                            break;
                        }
                    }
                }
            }

            if (hasFrozenTab && frozenTabType) {
                const cfg = TABS_CONFIG[frozenTabType];
                log(`[Hệ thống] Phát hiện tab ${cfg.name} bị đóng băng. Đang kích hoạt (Unfreeze) lại tab...`);
                localStorage.setItem('last_open_attempt_' + frozenTabType, now.toString());
                if (typeof GM_openInTab !== 'undefined') {
                    GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
                } else {
                    window.open(cfg.url, '_blank');
                }
                return;
            }

            if (hasDeadTab) {
                log('[Hệ thống] Phát hiện thiếu tab thực sự. Khởi tạo mở tab tuần tự...');
                initiateSequentialTabOpen('auto');
            }
        }

        // -------------------------------------------------------------
        // HỆ THỐNG CHỐNG NGỦ & CHỐNG HANG TAB (WAKE LOCK & SILENT AUDIO)
        // -------------------------------------------------------------
        let wakeLock = null;
        let audioCtx = null;

        async function requestWakeLock() {
            if (!('wakeLock' in navigator)) {
                log("[Chống ngủ] Trình duyệt không hỗ trợ Wake Lock API.");
                return;
            }
            try {
                wakeLock = await navigator.wakeLock.request('screen');
                log("[Chống ngủ] Đã kích hoạt Screen Wake Lock.");
            } catch (err) {
                console.log("[Chống ngủ] Wake Lock error:", err.message);
            }
        }

        function releaseWakeLock() {
            if (wakeLock) {
                wakeLock.release().then(() => {
                    wakeLock = null;
                    log("[Chống ngủ] Đã tắt Screen Wake Lock.");
                });
            }
        }

        let hasUserGesture = false;

        function startSilentAudio() {
            // Đã có hệ thống Service Worker gửi tín hiệu đánh thức định kỳ mỗi 15s nên không cần phát AudioContext nữa để tránh cảnh báo của Chrome
        }

        // Lắng nghe các tương tác để kích hoạt âm thanh chống ngủ
        const gestureEvents = ['click', 'keydown', 'mousedown', 'pointerdown', 'touchstart'];
        const handleGesture = () => {
            hasUserGesture = true;
            gestureEvents.forEach(e => window.removeEventListener(e, handleGesture, true));
            if (isRunning) {
                startSilentAudio();
                checkAndResumeAudio();
            }
        };
        gestureEvents.forEach(e => window.addEventListener(e, handleGesture, { once: true, capture: true, passive: true }));

        function checkAndResumeAudio() {
            // Không sử dụng AudioContext nữa
        }

        function stopSilentAudio() {
            // Không sử dụng AudioContext nữa
        }

        function enableAntiSleep() {
            requestWakeLock();
            startSilentAudio();
        }

        function disableAntiSleep() {
            releaseWakeLock();
            stopSilentAudio();
        }

        // Đăng ký sự kiện visibilitychange
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && isRunning) {
                requestWakeLock();
            }
        });

        openAllTabsBtn.addEventListener('click', openMissingTabs);

        updateUIState();
        updateUrlView();

        if (isRunning) {
            enableAntiSleep();
        }

        editUrlBtn.addEventListener('click', () => {
            urlEditView.style.display = 'block';
            urlSavedView.style.display = 'none';
            urlInput.focus();
        });

        saveUrlBtn.addEventListener('click', async () => {
            const inputVal = urlInput.value.trim();
            const pcInputVal = pcInput.value.trim() || "PC_01";
            const prioritySelect = document.getElementById('ap-priority-select');
            const priorityVal = prioritySelect ? prioritySelect.value : "1";
            
            const oldUrl = localStorage.getItem("google_apps_script_url") || "";

            if (inputVal && !inputVal.includes("HAY_DIEN_URL")) {
                // Nếu thay đổi URL Webapp, yêu cầu nhập mật khẩu bảo mật
                if (inputVal !== oldUrl && oldUrl !== "") {
                    const pass = prompt("Nhập mật khẩu xác thực để thay đổi Web App URL:");
                    if (pass !== "SPXVN0228$") {
                        alert("Mật khẩu không chính xác! Không thể thay đổi Web App URL.");
                        return;
                    }
                }

                apiUrl = inputVal;
                pcName = pcInputVal;
                pcPriority = priorityVal;
                
                localStorage.setItem("google_apps_script_url", apiUrl);
                localStorage.setItem("shopee_pc_name", pcName);
                localStorage.setItem("shopee_pc_priority", pcPriority);
                
                GM_setValue("google_apps_script_url", apiUrl);
                GM_setValue("shopee_pc_name", pcName);
                GM_setValue("shopee_pc_priority", pcPriority);
                
                log(`Đã lưu cấu hình. PC: ${pcName}, Độ ưu tiên: ${pcPriority}`);
                updateUrlView();

                // Nếu đổi URL Webapp, thực hiện đồng bộ lên Google Sheet
                if (inputVal !== oldUrl && oldUrl !== "") {
                    log("Đang đồng bộ Web App URL mới lên Google Sheet...");
                    try {
                        await callGASPromise("POST", "update_webapp_url", { newUrl: apiUrl });
                        log("Đồng bộ Web App URL mới lên Google Sheet thành công!");
                    } catch (e) {
                        log(`Lỗi đồng bộ Web App URL lên Sheet: ${e.message}`);
                    }
                }

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
            localStorage.setItem("auto_print_enabled", isRunning ? "true" : "false");
            updateUIState();
            log(isRunning ? "Khởi động hệ thống đa tab song song..." : "Đã tạm dừng hệ thống.");
            
            if (isRunning) {
                enableAntiSleep();
                openMissingTabs();
            } else {
                disableAntiSleep();
            }
        }

        toggleBtn.addEventListener('click', toggleRunningState);
        badge.addEventListener('click', toggleRunningState);



        closeBtn.addEventListener('click', collapsePanel);
        launcher.addEventListener('click', expandPanel);

        // Đăng ký tương tác với panel để tránh tự động thu lại khi người dùng đang thao tác
        panel.addEventListener('mouseenter', stopAutoCollapseTimer);
        panel.addEventListener('mousemove', stopAutoCollapseTimer);
        panel.addEventListener('click', stopAutoCollapseTimer);
        panel.addEventListener('input', stopAutoCollapseTimer);
        
        // Bắt đầu lại bộ đếm khi chuột rời khỏi bảng điều khiển
        panel.addEventListener('mouseleave', startAutoCollapseTimer);

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function delayRandom(min, max) {
            return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
        }

        // Giả lập nhập ô Input
        async function simulateInput(inputEl, value) {
            try {
                inputEl.focus();
            } catch (e) {}
            
            // Kích hoạt setter gốc của React/Vue/Angular để đảm bảo thay đổi được phản ánh vào state của framework
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
            if (nativeInputValueSetter) {
                nativeInputValueSetter.call(inputEl, value);
            } else {
                inputEl.value = value;
            }
            
            inputEl.dispatchEvent(new Event('input', { bubbles: true }));
            inputEl.dispatchEvent(new Event('change', { bubbles: true }));

            // Chờ 300ms để vượt qua bất kỳ bộ giảm chấn (debounce) nào của khung hiển thị (Vue/React)
            await delay(300);

            // Gửi sự kiện Enter đồng bộ ngay lập tức (tránh bị delay/bóp nghẹt trong tab chạy ngầm)
            ['keydown', 'keypress', 'keyup'].forEach(name => {
                const ev = new KeyboardEvent(name, {
                    bubbles: true, cancelable: true, key: 'Enter', code: 'Enter', keyCode: 13, which: 13
                });
                Object.defineProperty(ev, 'keyCode', { value: 13 });
                Object.defineProperty(ev, 'which', { value: 13 });
                inputEl.dispatchEvent(ev);
            });
        }

        // Bọc GM_xmlhttpRequest thành Promise + TIMEOUT + RETRY giúp xử lý lỗi kết nối mạng/quota/treo mà không làm kẹt luồng lặp
        function callGASPromise(method, urlOrAction, data = null, timeoutMs = 60000) {
            let attempts = 0;
            const maxAttempts = 2;

            function makeRequest() {
                attempts++;
                return new Promise((resolve, reject) => {
                    let cleanApiUrl = (apiUrl || "").trim();
                    if (!cleanApiUrl || cleanApiUrl.includes("HAY_DIEN_URL")) {
                        reject(new Error("Chưa cấu hình API URL"));
                        return;
                    }
                    
                    let targetUrl = "";
                    if (method === "GET") {
                        targetUrl = `${cleanApiUrl}?action=${urlOrAction}&pc=${encodeURIComponent((pcName || "").trim())}&priority=${encodeURIComponent((pcPriority || "1").trim())}`;
                    } else {
                        targetUrl = cleanApiUrl;
                    }

                    let isSettled = false;
                    // Timeout để chống treo vĩnh viễn khi mạng chậm hoặc GAS không phản hồi
                    const timer = setTimeout(() => {
                        if (!isSettled) {
                            isSettled = true;
                            reject(new Error(`Hết thời gian chờ (${timeoutMs/1000}s) khi gọi ${urlOrAction} (Lần ${attempts})`));
                        }
                    }, timeoutMs);

                    let options = {
                        method: method,
                        url: targetUrl,
                        timeout: timeoutMs,
                        onload: function(response) {
                            if (isSettled) return;
                            isSettled = true;
                            clearTimeout(timer);
                            try {
                                const res = JSON.parse(response.responseText);
                                
                                // TỰ ĐỘNG ĐỒNG BỘ WEBAPP URL TỪ SHEET
                                if (res.activeWebappUrl && res.activeWebappUrl.trim() !== "" && res.activeWebappUrl !== apiUrl) {
                                    apiUrl = res.activeWebappUrl;
                                    localStorage.setItem("google_apps_script_url", apiUrl);
                                    GM_setValue("google_apps_script_url", apiUrl);
                                    log(`[Cấu hình] Tự động đồng bộ Webapp URL mới: ${apiUrl}`);
                                    
                                    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
                                        chrome.runtime.sendMessage({
                                            action: "sync_active_webapp_url",
                                            apiUrl: apiUrl
                                        }, () => {
                                            const err = chrome.runtime.lastError;
                                        });
                                    }
                                }

                                resolve(res);
                            } catch (e) {
                                reject(new Error(`Lỗi parse JSON: ${e.message}. Nội dung phản hồi: ${response.responseText.substring(0, 120)}`));
                            }
                        },
                        onerror: function(err) {
                            if (isSettled) return;
                            isSettled = true;
                            clearTimeout(timer);
                            reject(new Error(`Lỗi kết nối mạng đến ${targetUrl}`));
                        },
                        ontimeout: function() {
                            if (isSettled) return;
                            isSettled = true;
                            clearTimeout(timer);
                            reject(new Error(`GM_xmlhttpRequest timeout khi gọi ${urlOrAction}`));
                        }
                    };

                    if (method !== "GET") {
                        options.headers = { "Content-Type": "text/plain" };
                        options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (pcName || "").trim(), priority: (pcPriority || "1").trim() }, data));
                    }

                    GM_xmlhttpRequest(options);
                });
            }

            return new Promise((resolve, reject) => {
                function tryCall() {
                    makeRequest()
                        .then(resolve)
                        .catch(err => {
                            if (attempts < maxAttempts) {
                                console.log(`API call ${urlOrAction} failed: ${err.message}. Retrying in 2s...`);
                                setTimeout(tryCall, 2000);
                            } else {
                                reject(err);
                            }
                        });
                }
                tryCall();
            });
        }

        // Trích xuất mã số tài xế liên tục từ chuỗi (ví dụ: "Thực - 100446" -> "100446")
        function extractDriverCode(driverStr) {
            if (!driverStr) return "";
            const match = driverStr.match(/\d+/);
            return match ? match[0] : driverStr;
        }

        // Đảm bảo tab được kích hoạt lên foreground trước khi in để tránh bị Chrome chặn window.print()
        async function ensureTabActive() {
            if (document.hidden || !document.hasFocus()) {
                log("Phát hiện tab hoặc cửa sổ Chrome đang chạy ẩn/mất focus. Đang kích hoạt tab...");
                window.postMessage({ type: "SHOPEE_ACTIVATE_TAB_REQUEST", tabInstanceId: tabInstanceId }, "*");
                for (let i = 0; i < 40; i++) {
                    await delay(100);
                    if (!document.hidden && document.hasFocus()) {
                        await delay(500); // Đợi 500ms cho trang ổn định
                        return true;
                    }
                }
                return false;
            }
            return true;
        }

        // ==========================================
        // 2. TÍNH NĂNG 1: IN BILL THƯỜNG (awbPrint)
        // ==========================================
        async function startPollingLoop() {
            if (!isRunning || isPrintingNow) return;

            const hash = window.location.hash || "";
            if (!hash.includes('awbPrint')) return;

            if (!acquireGlobalLock('awbPrint')) {
                return;
            }

            try {
                isPrintingNow = true;
                lastPrintStartTime = Date.now();
                localStorage.setItem('pending_awbPrint', 'true');
                updateGlobalLockHeartbeat('awbPrint');

                const data = await callGASPromise("POST", "get_pending");
                lastSuccessfulAction = Date.now();
                let codesToPrint = [];
                if (data.status === "success") {
                    if (data.code) {
                        const rawUpper = data.code.toUpperCase();
                        const matches = rawUpper.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
                        codesToPrint = matches ? matches.filter(c => c.trim().length > 0) : [];
                    } else if (data.codes && Array.isArray(data.codes)) {
                        codesToPrint = data.codes.map(c => c.trim().toUpperCase());
                    }
                }

                if (codesToPrint.length > 0) {
                    log(`Tìm thấy lô gồm ${codesToPrint.length} mã để in.`);
                    const result = await executePrintJob(codesToPrint);
                    if (result && result.success) {
                        lastSuccessfulAction = Date.now();
                        const failed = result.invalidCodes || [];
                        const succeeded = codesToPrint.filter(c => !failed.some(f => c === f || c.includes(f)));
                        
                        log(`Đã in lô thành công. Thành công: ${succeeded.length}, Thất bại: ${failed.length}`);
                        
                        for (const code of succeeded) {
                            callGASPromise("POST", "update_code_status", { code: code, status: "Đã in" })
                                .then(() => log(`[In Bill] Đã cập nhật 'Đã in' cho: ${code}`))
                                .catch(e => log(`[In Bill] Lỗi cập nhật 'Đã in' cho ${code}: ${e.message}`));
                        }
                        for (const code of failed) {
                            callGASPromise("POST", "update_code_status", { code: code, status: "Mã lỗi" })
                                .then(() => log(`[In Bill] Đã cập nhật 'Mã lỗi' cho: ${code}`))
                                .catch(e => log(`[In Bill] Lỗi cập nhật 'Mã lỗi' cho ${code}: ${e.message}`));
                        }
                    } else {
                        log(`Thất bại khi in lô. Cập nhật trạng thái 'Mã lỗi' cho cả lô...`);
                        const failedCodes = (result && result.invalidCodes) ? result.invalidCodes : codesToPrint;
                        for (const code of failedCodes) {
                            callGASPromise("POST", "update_code_status", { code: code, status: "Mã lỗi" })
                                .then(() => log(`[In Bill] Đã cập nhật 'Mã lỗi' cho: ${code}`))
                                .catch(e => log(`[In Bill] Lỗi cập nhật lỗi cho ${code}: ${e.message}`));
                        }
                    }
                }
            } catch (error) {
                log(`Lỗi in thường: ${error.message}`);
            } finally {
                isPrintingNow = false;
                localStorage.removeItem('pending_awbPrint');
                releaseGlobalLock('awbPrint');
            }
        }

        async function executePrintJob(codes) {
            await ensureTabActive();
            let textarea = null;
            for (let i = 0; i < 20; i++) {
                textarea = document.querySelector('textarea') || document.querySelector('input[type="text"]');
                if (textarea) break;
                await delay(100);
            }
            if (!textarea) {
                log("Không tìm thấy ô nhập mã vận đơn!");
                return { success: false, invalidCodes: codes };
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
            
            await delayRandom(300, 500); 

            const confirmBtn = Array.from(document.querySelectorAll('button')).find(btn => {
                const txt = btn.innerText || btn.textContent || "";
                return txt.trim().toLowerCase() === "confirm";
            });
            if (!confirmBtn) return { success: false, invalidCodes: codes };

            confirmBtn.click();
            
            // Theo dõi phản hồi: Hoặc là bảng dữ liệu xuất hiện thành công, hoặc xuất hiện Dialog lỗi (ví dụ: "can not find in system")
            let isLoaded = false;
            let hasError = false;
            const invalidCodes = [];

            // Lấy danh sách các mã hợp lệ thực sự trong lô gửi lên để đối chiếu (bỏ qua các ký tự rác)
            const validCodesInList = codes.filter(c => c.startsWith("SPX") || c.startsWith("VN") || c.startsWith("TETS") || /^[A-Z0-9]{8,25}$/.test(c));

            // Rút ngắn thời gian kiểm tra vòng lặp xuống, check nhanh mỗi 50ms để đóng popup lập tức
            for (let i = 0; i < 40; i++) { 
                await delay(50);
                
                // 1. Kiểm tra nếu có bất kỳ mã hợp lệ nào được tải thành công lên bảng hiển thị giao diện
                const allCells = Array.from(document.querySelectorAll('td, span, div'));
                const foundValidCode = allCells.find(el => {
                    const txt = el.textContent.trim().toUpperCase();
                    return validCodesInList.some(vc => txt === vc || txt.includes(vc));
                });
                
                if (foundValidCode) {
                    isLoaded = true;
                }
                
                // 2. Kiểm tra Hộp thoại lỗi (kể cả el-message-box của Element UI)
                const dialogs = document.querySelectorAll('.el-dialog, .modal-content, .el-message-box, [class*="dialog"], [class*="modal"], [class*="message-box"]');
                for (const dialog of dialogs) {
                    if (dialog.offsetWidth > 0 || dialog.offsetHeight > 0) {
                        const dialogText = (dialog.innerText || dialog.textContent || "");
                        if (dialogText.toLowerCase().includes("can not find") || 
                            dialogText.toLowerCase().includes("không tìm thấy") || 
                            dialogText.toLowerCase().includes("alert") || 
                            dialogText.toLowerCase().includes("system") ||
                            dialogText.toLowerCase().includes("không tồn tại") ||
                            dialogText.toLowerCase().includes("onhold") ||
                            dialogText.toLowerCase().includes("status") ||
                            dialogText.toLowerCase().includes("allow") ||
                            dialogText.toLowerCase().includes("không cho phép") ||
                            dialogText.toLowerCase().includes("not allowed") ||
                            dialogText.toLowerCase().includes("không thể")) {
                            
                            hasError = true;
                            
                            // Tìm nút Ok/Confirm/Xác nhận trong dialog
                            const okBtn = Array.from(dialog.querySelectorAll('button')).find(btn => {
                                const txt = (btn.innerText || btn.textContent || "").trim().toLowerCase();
                                return txt === "ok" || txt === "xác nhận" || txt === "confirm" || txt === "close" || txt === "đóng" || txt.includes("ok");
                            });
                            
                            if (okBtn) {
                                // Tăng trễ lên 800-1000ms giả lập người thật trước khi bấm OK
                                const okDelay = 800 + Math.random() * 200;
                                log(`[In Bill] Phát hiện dialog lỗi. Đợi ${(okDelay/1000).toFixed(2)} giây để tự động đóng...`);
                                await delay(okDelay);
                                okBtn.click();
                                log(`[In Bill] Đã click nút OK đóng cảnh báo.`);
                                await delay(500); // Đợi thêm 500ms cho dialog đóng hẳn khỏi màn hình
                            }

                            // Trích xuất các mã lỗi cụ thể từ văn bản trong dialog (ví dụ: dòng chứa mã SPX...)
                            const lines = dialogText.split('\n').map(l => l.trim().toUpperCase());
                            for (const line of lines) {
                                const matches = line.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
                                if (matches) {
                                    for (const match of matches) {
                                        if (!match.includes("SYSTEM") && !match.includes("MESSAGE") && !match.includes("FIND")) {
                                            if (!invalidCodes.includes(match)) {
                                                invalidCodes.push(match);
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                        }
                    }
                }
                // Nếu đã tải thành công dữ liệu hợp lệ và không có lỗi nào phát sinh
                if (isLoaded && !hasError) {
                    break;
                }

                if (hasError) break;
            }

            if (hasError && !isLoaded) {
                // Thất bại hoàn toàn khi có lỗi xảy ra và không tải được bất cứ mã hợp lệ nào
                return { success: false, invalidCodes: codes }; 
            }

            if (!isLoaded) {
                log("[In Bill] Quá thời gian chờ nạp mã vận đơn lên giao diện.");
                return { success: false, invalidCodes: codes };
            }

            const printBtn = Array.from(document.querySelectorAll('button, span, a')).find(el => {
                const txt = el.innerText || el.textContent || "";
                return txt.trim().toLowerCase() === "print";
            });
            if (!printBtn) return { success: false, invalidCodes: codes };

            await delayRandom(400, 500);
            printBtn.click();
            
            let dialogPrintBtn = null;
            for (let i = 0; i < 40; i++) {
                await delay(50);
                const allButtons = Array.from(document.querySelectorAll('button')).filter(btn => {
                    const txt = btn.innerText || btn.textContent || "";
                    return txt.trim().toLowerCase() === "print";
                });
                
                dialogPrintBtn = allButtons.find(btn => {
                    let parent = btn.parentElement;
                    let depth = 0;
                    while (parent && depth < 4) {
                        const textContent = (parent.innerText || parent.textContent || "").toLowerCase();
                        if (textContent.includes("cancel") || textContent.includes("đóng") || textContent.includes("close")) {
                            return true;
                        }
                        parent = parent.parentElement;
                        depth++;
                    }
                    return false;
                });
                if (dialogPrintBtn) break;
            }

            if (dialogPrintBtn) {
                await delay(300); // Chờ 300ms cho popup hiển thị hoàn tất và sẵn sàng nhận click
                dialogPrintBtn.click();
                log("[In Bill] Đã click nút in xác nhận trên popup.");
                await delay(1000);
            } else {
                log("[In Bill] Không phát hiện popup xác nhận, bỏ qua bước click xác nhận.");
                await delay(500); // Fallback nếu không có modal xác nhận in
            }
            return { success: true, invalidCodes: invalidCodes };
        }

        // ==========================================
        // 3. TÍNH NĂNG 2: TỰ ĐỘNG QUÉT ĐỒNG BỘ MÃ TO (generalPackTOList)
        // ==========================================
        async function processTOListPage() {
            if (!isRunning || isProcessingList) return;
            isProcessingList = true;
            lastListStartTime = Date.now();
            lastSuccessfulAction = Date.now();
            log("[TO Quét] Đang quét danh sách TO từ trang Quản lý TO...");

            try {
                const now = Date.now();
                // Chỉ click "Tìm kiếm" nếu đã quá 2s chưa click để cập nhật nhanh nhất
                if (now - lastSearchTime > 2000) {
                    let searchBtn = Array.from(document.querySelectorAll('button')).find(btn => {
                        const text = btn.innerText.trim();
                        return text === "Tìm kiếm" || text === "Search";
                    });
                    if (searchBtn) {
                        searchBtn.click();
                        lastSearchTime = now;
                        await delay(300); // Đợi 300ms ngắn cho dữ liệu cập nhật
                    }
                }

                // Tải danh sách TO đã có từ GAS nếu chưa có hoặc quá 1 phút để phát hiện TO mới nhanh hơn
                if (localExistingTOs.size === 0 || (now - lastTOFetchTime) > 60000) {
                    try {
                        const res = await callGASPromise("POST", "getTOList");
                        if (res.status === "success" && Array.isArray(res.data)) {
                            localExistingTOs = new Set(res.data.map(to => to.toLowerCase()));
                            lastTOFetchTime = now;
                            log(`[TO Quét] Đã đồng bộ ${localExistingTOs.size} mã TO đã tồn tại từ Excel.`);
                        }
                    } catch (e) {
                        log(`[TO Quét] Lỗi đồng bộ danh sách TO hiện có: ${e.message}`);
                    }
                }

                // Xác định cột bằng tiêu đề bảng
                const headers = Array.from(document.querySelectorAll('th'));
                let toColIndex = -1;
                let opColIndex = -1;
                let qtyColIndex = -1;
                
                headers.forEach((th, index) => {
                    const text = th.innerText.trim().toLowerCase();
                    if (text.includes("to number") || text.includes("mã to") || text.includes("transfer order") || text.includes("to id")) {
                        toColIndex = index;
                    } else if (text.includes("operator") || text.includes("người tạo") || text.includes("người vận hành") || text.includes("created by")) {
                        opColIndex = index;
                    } else if (text.includes("quantity") || text.includes("số lượng") || text.includes("qty") || text.includes("sku quantity")) {
                        qtyColIndex = index;
                    }
                });

                const rows = document.querySelectorAll('tr');
                for (let row of rows) {
                    const cells = row.querySelectorAll('td');
                    if (cells.length > 0) {
                        let toNum = "";
                        let operatorText = "";
                        let quantity = -1;

                        if (toColIndex !== -1 && cells[toColIndex]) toNum = cells[toColIndex].innerText.trim();
                        if (opColIndex !== -1 && cells[opColIndex]) operatorText = cells[opColIndex].innerText.trim();
                        if (qtyColIndex !== -1 && cells[qtyColIndex]) {
                            const qVal = parseInt(cells[qtyColIndex].innerText.trim(), 10);
                            if (!isNaN(qVal)) quantity = qVal;
                        }

                        // Trình phân tích dự phòng nếu thiếu tiêu đề cột
                        if (!toNum) {
                            cells.forEach(c => {
                                const txt = c.innerText.trim();
                                if (/^TO\d+[A-Z0-9]+$/i.test(txt)) toNum = txt;
                            });
                        }
                        if (!operatorText) {
                            cells.forEach(c => {
                                const txt = c.innerText.trim();
                                if (txt.includes('@')) operatorText = txt;
                            });
                        }
                        if (quantity === -1) {
                            cells.forEach((c, idx) => {
                                const txt = c.innerText.trim();
                                if (/^\d+$/.test(txt) && idx > 0 && idx !== toColIndex) {
                                    const qVal = parseInt(txt, 10);
                                    if (qVal > 0) quantity = qVal;
                                }
                            });
                        }

                        if (toNum && operatorText && quantity > 0) {
                            const isSpxShopee = operatorText.toLowerCase() === "spx@shopee.com";
                            if (!isSpxShopee && !localExistingTOs.has(toNum.toLowerCase())) {
                                // THÊM VÀO SET NGAY LẬP TỨC TRƯỚC KHI GỌI API để chống trùng lặp (race condition)
                                localExistingTOs.add(toNum.toLowerCase());
                                try {
                                    const addRes = await callGASPromise("POST", "addTO", { toNum: toNum });
                                    if (addRes.status === "success") {
                                        log(`[TO Quét] Đã copy TO mới: ${toNum} (Operator: ${operatorText}, Qty: ${quantity})`);
                                        lastSuccessfulAction = Date.now();
                                    } else if (addRes.status === "duplicate") {
                                        log(`[TO Quét] TO ${toNum} đã tồn tại trên Sheet, bỏ qua.`);
                                    } else {
                                        log(`[TO Quét] API trả về không thành công cho ${toNum}: ${JSON.stringify(addRes)}`);
                                    }
                                } catch (err) {
                                    // Nếu API lỗi, XÓA khỏi set để lần quét sau thử lại
                                    localExistingTOs.delete(toNum.toLowerCase());
                                    log(`[TO Quét] Lỗi đồng bộ TO ${toNum}: ${err.message}. Sẽ thử lại.`);
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                log(`[TO Quét] Lỗi quét danh sách: ${error.message}`);
            } finally {
                isProcessingList = false;
            }
        }

        // ==========================================
        // 4. TÍNH NĂNG 3: IN TO TỪ SHEET (startPackNoLabel)
        // ==========================================
        async function processPrintPage() {
            if (!isRunning || isProcessingPrint) return;

            const hash = window.location.hash;
            if (!hash.includes("startPackNoLabel")) return;

            if (!acquireGlobalLock('startPackNoLabel')) {
                return;
            }

            try {
                isProcessingPrint = true;
                lastPrintPageStartTime = Date.now();
                localStorage.setItem('pending_startPackNoLabel', 'true');
                updateGlobalLockHeartbeat('startPackNoLabel');

                const res = await callGASPromise("POST", "get_pending_to");
                if (res.status === "success" && res.toNum) {
                    const currentTO = res.toNum;
                    log(`[TO In] Lấy mã TO cần in từ Sheet: ${currentTO}`);
                    await ensureTabActive();

                    // Tìm ô nhập TO Number bằng cách định vị nhãn chứa text và tìm input trong cùng container
                    let toInput = null;
                    const labelElements = document.querySelectorAll('span, label, div, p');
                    let targetLabel = null;
                    for (let el of labelElements) {
                        const text = el.innerText.trim().toLowerCase();
                        if (text === "to number:" || text === "to number" || text === "mã to:" || text === "mã to") {
                            targetLabel = el;
                            break;
                        }
                    }
                    
                    if (targetLabel) {
                        // Đi ngược lên tối đa 3 cấp cha để tìm thẻ input thuộc cụm này
                        let parent = targetLabel.parentElement;
                        for (let i = 0; i < 3 && parent; i++) {
                            toInput = parent.querySelector('input');
                            if (toInput) break;
                            parent = parent.parentElement;
                        }
                    }

                    if (!toInput) {
                        const allInputs = document.querySelectorAll('input');
                        for (let input of allInputs) {
                            const placeholder = (input.placeholder || "").toLowerCase();
                            if (placeholder.includes("to number") || placeholder.includes("mã to") || placeholder.includes("please") || placeholder.includes("vui lòng")) {
                                toInput = input;
                                break;
                            }
                        }
                    }

                    // Fallback cuối cùng: Chọn ô nhập text đầu tiên trên trang (vì trang startPackNoLabel chỉ có duy nhất 1 ô nhập chính)
                    if (!toInput) {
                        const allInputs = Array.from(document.querySelectorAll('input'));
                        toInput = allInputs.find(input => {
                            const type = (input.type || "text").toLowerCase();
                            const isText = type === "text" || type === "search" || type === "";
                            const isVisible = input.style.display !== "none" && input.style.visibility !== "hidden";
                            return isText && isVisible;
                        });
                    }

                    if (toInput) {
                        log(`[TO In] Đang nhập mã TO: ${currentTO} và nhấn Enter...`);
                        await simulateInput(toInput, currentTO);
                        
                        // Chờ rất ngắn 100ms trước khi bắt đầu polling nút in nhãn
                        await delay(100);
                        updateGlobalLockHeartbeat('startPackNoLabel');
                        
                        // Click nút Print Label
                        const printSuccess = await triggerPrintLabel(currentTO);
                        if (printSuccess) {
                            log(`[TO In] Đã in nhãn thành công cho ${currentTO}`);
                            lastSuccessfulAction = Date.now();

                            // Đánh dấu "Đã In" ngay trên Sheet để không in trùng
                            try {
                                await callGASPromise("POST", "mark_to_printed", { toNum: currentTO });
                                log(`[TO In] Đã đánh dấu '${currentTO}' = Đã In trên Sheet.`);
                            } catch (markErr) {
                                log(`[TO In] Cảnh báo: Không đánh dấu được Đã In cho ${currentTO}: ${markErr.message}`);
                            }
                        } else {
                            log(`[TO In] Không bấm được nút in nhãn cho ${currentTO}. Cập nhật trạng thái 'Mã lỗi' lên Sheet...`);
                            try {
                                await callGASPromise("POST", "mark_to_printed", { toNum: currentTO, status: "Mã lỗi" });
                            } catch (e) {
                                log(`[TO In] Lỗi cập nhật trạng thái lỗi cho ${currentTO}: ${e.message}`);
                            }
                        }
                    } else {
                        log(`[TO In] Không tìm thấy ô nhập TO Number trên màn hình! Cập nhật trạng thái 'Mã lỗi' lên Sheet...`);
                        try {
                            await callGASPromise("POST", "mark_to_printed", { toNum: currentTO, status: "Mã lỗi" });
                            log(`[TO In] Lỗi cập nhật trạng thái lỗi cho ${currentTO}`);
                        } catch (e) {
                            log(`[TO In] Lỗi cập nhật trạng thái lỗi cho ${currentTO}: ${e.message}`);
                        }
                    }
                }
            } catch (error) {
                log(`Lỗi In TO: ${error.message}`);
            } finally {
                isProcessingPrint = false;
                localStorage.removeItem('pending_startPackNoLabel');
                releaseGlobalLock('startPackNoLabel');
            }
        }

        function triggerPrintLabel(currentTO) {
            return new Promise((resolve) => {
                let checkCount = 0;
                let checkPrintInterval = setInterval(() => {
                    checkCount++;
                    let printBtn = null;
                    
                    // 1. Tìm thẻ button trực tiếp để click chuẩn nhất
                    const buttons = document.querySelectorAll('button');
                    for (let btn of buttons) {
                        const text = btn.innerText.trim();
                        if (text === "Print Label" || text === "In nhãn" || text === "In nhãn phụ" || text.includes("Print")) {
                            printBtn = btn;
                            break;
                        }
                    }

                    // 2. Dự phòng tìm các thẻ khác và lấy button bọc ngoài gần nhất
                    if (!printBtn) {
                        const elements = document.querySelectorAll('span, div, a');
                        for (let el of elements) {
                            const text = el.innerText.trim();
                            if (text === "Print Label" || text === "In nhãn" || text === "In nhãn phụ" || text.includes("Print")) {
                                printBtn = el.closest('button') || el;
                                break;
                            }
                        }
                    }

                    // Kiểm tra nút in hợp lệ, không bị disabled (bỏ qua offsetWidth vì tab chạy ngầm có thể trả về 0)
                    if (printBtn && !printBtn.disabled && !printBtn.classList.contains('is-disabled')) {
                        clearInterval(checkPrintInterval);
                        log("[TO In] Phát hiện nút in nhãn khả dụng. Click ngay!");
                        printBtn.click();

                        setTimeout(() => {
                            log(`[TO In] Đánh dấu 'Đã in' thành công cho ${currentTO}`);
                            resolve(true);
                        }, 800); // Giảm độ trễ sau khi in xuống 800ms để tối ưu tốc độ
                    } else if (checkCount > 20) { // Tối đa 20 lần kiểm tra (tổng cộng ~3 giây)
                        clearInterval(checkPrintInterval);
                        resolve(false);
                    }
                }, 150); // Polling nhanh mỗi 150ms để bắt trọn khoảnh khắc nút khả dụng
            });
        }

        // ==========================================
        // 5. TÍNH NĂNG 4: TỰ ĐỘNG CHUYỂN PICK (pickupTask/list)
        // ==========================================
        async function startHandoverLoop() {
            if (!isRunning || isProcessingHandover) return;

            const hash = window.location.hash || "";
            if (!hash.includes('pickupTask/list')) return;

            if (!acquireGlobalLock('pickupTask')) {
                return;
            }

            try {
                isProcessingHandover = true;
                lastHandoverStartTime = Date.now();
                localStorage.setItem('pending_pickupTask', 'true');
                updateGlobalLockHeartbeat('pickupTask');

                const data = await callGASPromise("POST", "get_pending_chuyen_pick");
                if (data.status === "success" && data.pupCode) {
                    const pupCode = data.pupCode;
                    const rawDriver = data.recipientDriver;
                    const recipientDriver = extractDriverCode(rawDriver);
                    
                    const now = Date.now();
                    if (pupCode === lastHandoverPup && (now - lastHandoverTime) < 30000) {
                        log(`PUP ${pupCode} đã được xử lý gần đây (dưới 30s). Bỏ qua thao tác trùng lặp.`);
                        return;
                    }
                    
                    log(`Tìm thấy nhiệm vụ Chuyển Pick: PUP=${pupCode}, Nhận=${recipientDriver} (Gốc: ${rawDriver})`);
                    
                    // KIỂM TRA CACHE TRÙNG TÀI XẾ
                    const cachedDriver = localStorage.getItem('assigned_driver_' + pupCode);
                    const cachedTime = parseInt(localStorage.getItem('assigned_driver_time_' + pupCode) || '0');
                    if (cachedDriver && cachedDriver === recipientDriver && (Date.now() - cachedTime) < 1200000) {
                        log(`PUP ${pupCode} đã được gán cho ${recipientDriver} trước đó (dưới 20 phút). Ghi nhận thành công trực tiếp.`);
                        try {
                            await callGASPromise("POST", "update_handover_status", { pupCode: pupCode, status: "Đã chuyển" });
                            log(`[Chuyển Pick] Đã ghi nhận thành công từ cache cho ${pupCode}.`);
                        } catch (err) {
                            log(`[Chuyển Pick] Lỗi đồng bộ thành công cho ${pupCode}: ${err.message}`);
                        }
                        return;
                    }

                    const success = await executeHandoverJob(pupCode, recipientDriver);
                    lastHandoverPup = pupCode;
                    lastHandoverTime = Date.now();
                    if (success === true || success === "already_belongs") {
                        // Lưu cache thành công
                        localStorage.setItem('assigned_driver_' + pupCode, recipientDriver);
                        localStorage.setItem('assigned_driver_time_' + pupCode, Date.now().toString());
                        
                        const statusMsg = success === "already_belongs" ? "Tài xế đã thuộc nhiệm vụ (110901002)" : `cho tài xế ${recipientDriver}`;
                        log(`Đã chuyển giao thành công PUP: ${pupCode} (${statusMsg})`);
                        try {
                            await callGASPromise("POST", "update_handover_status", { pupCode: pupCode, status: "Đã chuyển" });
                            log(`[Chuyển Pick] Đã ghi nhận trạng thái 'Đã chuyển' cho ${pupCode} vào Sheet.`);
                        } catch (err) {
                            log(`[Chuyển Pick] Lỗi đồng bộ trạng thái thành công cho ${pupCode}: ${err.message}`);
                        }
                    } else {
                        log(`Chuyển giao thất bại trên giao diện Shopee.`);
                        try {
                            await callGASPromise("POST", "update_handover_status", { pupCode: pupCode, status: "Thất bại" });
                            log(`[Chuyển Pick] Đã cập nhật trạng thái 'Thất bại' cho ${pupCode} vào Sheet.`);
                        } catch (err) {
                            log(`[Chuyển Pick] Lỗi đồng bộ trạng thái thất bại cho ${pupCode}: ${err.message}`);
                        }
                    }
                } else {
                    localStorage.removeItem('pending_pickupTask');
                }
            } catch (error) {
                log(`Lỗi Chuyển Pick: ${error.message}`);
            } finally {
                isProcessingHandover = false;
                releaseGlobalLock('pickupTask');
            }
        }

        async function executeHandoverJob(pupCode, recipientDriver) {
            await ensureTabActive();
            let filterInput = null;
            
            // 1. Tìm thông qua label của form item (Element UI)
            const formItems = document.querySelectorAll('.el-form-item, [class*="form-item"]');
            for (let item of formItems) {
                const label = item.querySelector('.el-form-item__label, label');
                if (label) {
                    const labelText = (label.innerText || label.textContent || "").trim().toLowerCase();
                    if (labelText.includes("pickup point id") || labelText.includes("point id") || labelText === "mã pup") {
                        filterInput = item.querySelector('input');
                        if (filterInput) break;
                    }
                }
            }

            // 2. Fallback tìm theo placeholder nếu không tìm thấy qua label
            if (!filterInput) {
                const allInputs = document.querySelectorAll('input');
                for (let input of allInputs) {
                    const placeholder = input.placeholder || "";
                    if (placeholder.toLowerCase().includes("pickup point id") || placeholder.toLowerCase().includes("point id")) {
                        filterInput = input;
                        break;
                    }
                }
            }

            if (!filterInput) {
                log("Không tìm thấy ô nhập bộ lọc Pickup Point ID!");
                return false;
            }

            await simulateInput(filterInput, pupCode);
            await delay(300);

            let searchBtn = Array.from(document.querySelectorAll('button')).find(btn => {
                const txt = btn.innerText || btn.textContent || "";
                return txt.trim() === "Search" || txt.trim() === "Tìm kiếm";
            });
            
            if (searchBtn) {
                searchBtn.click();
                log("Đang lọc danh sách theo PUP: " + pupCode);
            } else {
                filterInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
            }

            await delay(2000);
            updateGlobalLockHeartbeat('pickupTask');

            // 1. Kiểm tra xem có hiển thị "No Data" không
            const noDataEl = Array.from(document.querySelectorAll('div, span, p')).find(el => {
                const txt = (el.innerText || el.textContent || "").trim().toLowerCase();
                return txt === "no data" || txt === "không có dữ liệu";
            });
            if (noDataEl && (noDataEl.offsetWidth > 0 || noDataEl.offsetHeight > 0)) {
                log(`[Chuyển Pick] Không tìm thấy dữ liệu cho PUP: ${pupCode} (Hiển thị No Data).`);
                return false;
            }

            // 2. Kiểm tra xem có dòng dữ liệu nào có nút Reassign không
            const rows = Array.from(document.querySelectorAll('tr'));
            const dataRows = rows.filter(row => row.querySelector('td'));
            if (dataRows.length > 0) {
                let foundReassign = false;
                for (let row of dataRows) {
                    const reassignBtn = Array.from(row.querySelectorAll('button, span, a')).find(el => {
                        const txt = el.innerText || el.textContent || "";
                        return txt.trim() === "Reassign" || txt.trim() === "Phân bổ lại" || txt.trim() === "Chuyển giao";
                    });
                    if (reassignBtn) {
                        foundReassign = true;
                        break;
                    }
                }
                if (!foundReassign) {
                    log(`[Chuyển Pick] Có dòng dữ liệu của PUP ${pupCode} nhưng không có nút Reassign (chỉ có View/Disable).`);
                    return false;
                }
            }

            let reassignedAny = false;

            for (let row of rows) {
                const reassignBtn = Array.from(row.querySelectorAll('button, span, a')).find(el => {
                    const txt = el.innerText || el.textContent || "";
                    return txt.trim() === "Reassign" || txt.trim() === "Phân bổ lại" || txt.trim() === "Chuyển giao";
                });

                if (reassignBtn) {
                    log("Phát hiện hàng chờ chuyển giao. Đang click Reassign...");
                    reassignBtn.click();
                    
                    await delay(2500);
                    updateGlobalLockHeartbeat('pickupTask');

                    const dialogs = document.querySelectorAll('.el-dialog, .modal-content, [class*="dialog"], [class*="modal"]');
                    let targetDialog = null;
                    for (const dialog of dialogs) {
                        if (dialog.offsetWidth > 0 || dialog.offsetHeight > 0) {
                            const text = (dialog.innerText || dialog.textContent || "");
                            if (text.includes("Reassign Driver") || text.includes("Driver") || text.includes("Phân bổ lại") || text.includes("Chuyển giao")) {
                                targetDialog = dialog;
                                break;
                            }
                        }
                    }

                    if (targetDialog) {
                        let driverSelectInput = null;
                        
                        // Tìm input thông qua nhãn label "Driver" hoặc "Tài xế" trong form item
                        const formItems = targetDialog.querySelectorAll('.el-form-item, [class*="form-item"]');
                        for (let item of formItems) {
                            const label = item.querySelector('.el-form-item__label, label');
                            if (label) {
                                const labelText = (label.innerText || label.textContent || "").trim().toLowerCase();
                                if (labelText.includes("driver") || labelText.includes("tài xế")) {
                                    driverSelectInput = item.querySelector('input');
                                    if (driverSelectInput) break;
                                }
                            }
                        }

                        // Fallback nếu không tìm thấy theo label
                        if (!driverSelectInput) {
                            const dialogInputs = targetDialog.querySelectorAll('input');
                            for (let inp of dialogInputs) {
                                const ph = inp.placeholder || "";
                                if (ph.toLowerCase().includes("select") || ph.toLowerCase().includes("driver") || ph.toLowerCase().includes("tài xế")) {
                                    driverSelectInput = inp;
                                    break;
                                }
                            }
                        }

                        if (driverSelectInput) {
                            // Click vào thẻ bọc ngoài el-select để mở dropdown và tự động focus vào ô tìm kiếm thực tế của Element UI
                            const selectWrapper = driverSelectInput.closest('.el-select') || driverSelectInput.parentElement;
                            if (selectWrapper) {
                                selectWrapper.click();
                            } else {
                                driverSelectInput.removeAttribute('readonly');
                                driverSelectInput.click();
                            }
                            
                            log("Đã click mở ô chọn Driver, đợi 2.2s để load danh sách...");
                            await delay(2200);
                            updateGlobalLockHeartbeat('pickupTask');
                            
                            // Lấy ô input đang active thực tế sau khi click mở dropdown
                            let activeInput = document.activeElement;
                            // Kiểm tra nếu activeInput nằm ngoài Dialog (ví dụ vẫn bị kẹt ở trang chính), bắt buộc lấy driverSelectInput
                            if (!activeInput || activeInput.tagName !== "INPUT" || !targetDialog.contains(activeInput)) {
                                activeInput = driverSelectInput;
                            }
                            
                            activeInput.removeAttribute('readonly');
                            activeInput.focus();
                            if (typeof activeInput.select === 'function') activeInput.select();
                            
                            activeInput.value = "";
                            activeInput.dispatchEvent(new Event('input', { bubbles: true }));
                            
                            // Gia lap nhap lieu thuc te tung ky tu hoac dán bang insertText
                            try {
                                document.execCommand('insertText', false, recipientDriver);
                            } catch (e) {}
                            
                            if (activeInput.value !== recipientDriver) {
                                activeInput.value = recipientDriver;
                            }
                            
                            // Element UI can chuoi event nay de kich hoat loc tu dong tren he thong
                            activeInput.dispatchEvent(new Event('input', { bubbles: true }));
                            activeInput.dispatchEvent(new Event('change', { bubbles: true }));
                            activeInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
                            activeInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
                            
                            log("Đã dán mã tài xế: " + recipientDriver + ", đợi dropdown tai danh sach...");
                            // Doi 2.5 giay de chac chan danh sach phia duoi duoc render xong
                            await delay(2500);

                            const allElements = Array.from(document.querySelectorAll('li, span, div, p, option'));
                            let matchedOption = allElements.find(el => {
                                const text = (el.innerText || el.textContent || "").trim();
                                return text.includes(recipientDriver) && 
                                       (el.offsetWidth > 0 || el.offsetHeight > 0) &&
                                       (el.classList.contains('el-select-dropdown__item') || 
                                        el.closest('.el-select-dropdown') || 
                                        el.closest('[class*="dropdown"]') ||
                                        el.tagName === 'LI');
                            });

                            if (!matchedOption) {
                                matchedOption = allElements.find(el => {
                                    const text = (el.innerText || el.textContent || "").trim();
                                    return text.includes(recipientDriver) && 
                                           (el.closest('.el-select-dropdown') || el.closest('[class*="dropdown"]') || el.tagName === 'LI');
                                });
                            }

                            if (!matchedOption) {
                                matchedOption = allElements.find(el => {
                                    const text = (el.innerText || el.textContent || "").trim();
                                    return text.includes(recipientDriver);
                                });
                            }

                            if (matchedOption) {
                                matchedOption.click();
                                log("Đã chọn tài xế từ dropdown: " + (matchedOption.innerText || matchedOption.textContent).trim());
                                // Đợi 1.2s để Vue/Element UI đồng bộ dữ liệu vào form model trước khi nhấn Confirm
                                await delay(1200);

                                const dialogConfirmBtn = Array.from(targetDialog.querySelectorAll('button')).find(btn => {
                                    const txt = btn.innerText || btn.textContent || "";
                                    return txt.trim() === "Confirm" || txt.trim() === "Xác nhận" || txt.trim() === "OK";
                                });

                                if (dialogConfirmBtn) {
                                    dialogConfirmBtn.click();
                                    log("Đã nhấn Xác nhận chuyển giao tài xế. Đang kiểm tra kết quả phản hồi...");
                                    
                                    // Đợi tối đa 3 giây để kiểm tra xem có thông báo lỗi "already belongs" không
                                    let hasDriverError = false;
                                    for (let check = 0; check < 30; check++) {
                                        await delay(100);
                                        const allMessages = Array.from(document.querySelectorAll('.el-message, .el-notification, .el-dialog, .modal-content, div, p, span'));
                                        const errorMsg = allMessages.find(el => {
                                            const txt = (el.innerText || el.textContent || "");
                                            return txt.includes("110901002") || txt.includes("already belongs to this driver");
                                        });
                                        if (errorMsg && (errorMsg.offsetWidth > 0 || errorMsg.offsetHeight > 0)) {
                                            log(`[Chuyển Pick] Lỗi: ${errorMsg.textContent.trim()}`);
                                            hasDriverError = true;
                                            break;
                                        }
                                    }

                                    if (hasDriverError) {
                                        // Tìm nút Cancel hoặc Hủy để đóng hộp thoại
                                        let cancelBtn = Array.from(targetDialog.querySelectorAll('button')).find(btn => {
                                            const txt = (btn.innerText || btn.textContent || "").trim().toLowerCase();
                                            return txt === "cancel" || txt === "hủy" || txt === "close" || txt === "đóng" || txt.includes("cancel") || txt.includes("hủy");
                                        });
                                        if (!cancelBtn) {
                                            // Quét toàn cục tất cả button hiển thị trên màn hình
                                            cancelBtn = Array.from(document.querySelectorAll('button')).find(btn => {
                                                const txt = (btn.innerText || btn.textContent || "").trim().toLowerCase();
                                                return (txt === "cancel" || txt === "hủy" || txt === "close" || txt === "đóng" || txt.includes("cancel") || txt.includes("hủy")) && 
                                                       (btn.offsetWidth > 0 || btn.offsetHeight > 0);
                                            });
                                        }
                                        if (cancelBtn) {
                                            cancelBtn.click();
                                            log("[Chuyển Pick] Đã click nút Hủy/Cancel để đóng hộp thoại Reassign.");
                                        } else {
                                            log("[Chuyển Pick] Cảnh báo: Không tìm thấy nút Cancel/Hủy trên giao diện để đóng hộp thoại!");
                                        }
                                        await delay(500);
                                        return "already_belongs"; // Trả về mã thành công đặc biệt
                                    }

                                    reassignedAny = true;
                                    await delay(1500);
                                    break;
                                } else {
                                    log("Cảnh báo: Không tìm thấy nút Confirm trong dialog!");
                                }
                            } else {
                                log("Không tìm thấy tùy chọn tài xế trong danh sách: " + recipientDriver);
                            }
                        } else {
                            log("Không tìm thấy ô chọn tài xế trong dialog!");
                        }
                    } else {
                        log("Không tìm thấy Dialog chuyển giao!");
                    }
                }
            }

            return reassignedAny;
        }

        // ==========================================
        // 6. GIÁM SÁT HỆ THỐNG & ĐIỀU PHỐI ĐA TAB
        // ==========================================

        // Phát hiện và giải phóng các cờ xử lý bị treo (stuck flags)
        function checkAndRecoverStuckFlags() {
            const now = Date.now();
            if (isPrintingNow && lastPrintStartTime > 0 && (now - lastPrintStartTime) > STUCK_TIMEOUT) {
                log("[Khôi phục] Phát hiện In Bill bị treo quá 30 giây. Tự động giải phóng...");
                isPrintingNow = false;
                releaseGlobalLock('awbPrint');
                lastPrintStartTime = 0;
            }
            if (isProcessingList && lastListStartTime > 0 && (now - lastListStartTime) > STUCK_TIMEOUT) {
                log("[Khôi phục] Phát hiện Quét TO bị treo quá 30 giây. Tự động giải phóng...");
                isProcessingList = false;
                releaseGlobalLock('generalPackTOList');
                lastListStartTime = 0;
            }
            if (isProcessingPrint && lastPrintPageStartTime > 0 && (now - lastPrintPageStartTime) > STUCK_TIMEOUT) {
                log("[Khôi phục] Phát hiện In TO bị treo quá 30 giây. Tự động giải phóng...");
                isProcessingPrint = false;
                releaseGlobalLock('startPackNoLabel');
                lastPrintPageStartTime = 0;
            }
            if (isProcessingHandover && lastHandoverStartTime > 0 && (now - lastHandoverStartTime) > STUCK_TIMEOUT) {
                log("[Khôi phục] Phát hiện Chuyển Pick bị treo quá 30 giây. Tự động giải phóng...");
                isProcessingHandover = false;
                releaseGlobalLock('pickupTask');
                lastHandoverStartTime = 0;
            }
        }

        // Kiểm tra session Shopee có bị hết hạn không (dấu hiệu: trang chuyển hướng đến login)
        function checkSessionHealth() {
            const href = window.location.href;
            if (href.includes('login') || href.includes('sso.shopee')) {
                log("[Hệ thống] Phát hiện phiên đăng nhập đã hết hạn! Đang tải lại trang...");
                window.location.reload();
                return false;
            }
            return true;
        }

        // ==========================================
        // SMART SEQUENTIAL RELOAD SYSTEM
        // Reload tuần tự từng tab, đợi load đầy đủ rồi mới reload tab kế tiếp
        // ==========================================
        const SMART_RELOAD_TAB_TIMEOUT = 60000; // 60 giây chờ tab load xong
        const SMART_RELOAD_CHAIN_TIMEOUT = 300000; // 5 phút timeout toàn chuỗi

        // Kiểm tra nội dung trang đã load đầy đủ chưa (dựa vào DOM elements đặc trưng của từng trang)
        function isPageContentFullyLoaded() {
            const hash = window.location.hash || "";
            const href = window.location.href;

            if (href.includes('login') || href.includes('sso.shopee')) return false;

            // Chỉ block nếu có lớp loading mask thực sự của Element UI đang phủ màn hình (kích thước lớn)
            const masks = document.querySelectorAll('.el-loading-mask');
            for (const mask of masks) {
                if (mask.offsetWidth > 100 && mask.offsetHeight > 100) {
                    const style = window.getComputedStyle(mask);
                    if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
                        return false;
                    }
                }
            }

            // 2. Kiểm tra phần tử tương tác thực tế của từng trang
            if (hash.includes('awbPrint')) {
                // Trang In Bill: Cần có ô textarea nhập mã vận đơn và có kích thước thực tế hiển thị
                const textarea = document.querySelector('textarea') || document.querySelector('.el-textarea__inner');
                if (!textarea) return false;
                const style = window.getComputedStyle(textarea);
                return textarea.offsetWidth > 0 && style.display !== 'none' && style.visibility !== 'hidden';
            }

            if (hash.includes('general-to-management')) {
                // Trang Quét TO: Cần có nút "Tìm kiếm" / "Search" và có table headers hoặc dòng dữ liệu hiển thị
                const buttons = Array.from(document.querySelectorAll('button'));
                const hasSearchBtn = buttons.some(btn => {
                    const text = (btn.innerText || btn.textContent || '').trim().toLowerCase();
                    const style = window.getComputedStyle(btn);
                    const isVisible = btn.offsetWidth > 0 && style.display !== 'none' && style.visibility !== 'hidden';
                    return isVisible && (text.includes('tìm kiếm') || text.includes('search'));
                });
                
                // Cần có bảng dữ liệu (thẻ table hoặc các ô th)
                const hasTable = document.querySelectorAll('th').length > 0;
                return hasSearchBtn && hasTable;
            }

            if (hash.includes('startPackNoLabel')) {
                // Trang In TO: Cần có ô nhập (input) TO number có kích thước thực tế hiển thị
                const inputs = Array.from(document.querySelectorAll('input'));
                const hasVisibleInput = inputs.some(input => {
                    const type = (input.type || 'text').toLowerCase();
                    const style = window.getComputedStyle(input);
                    const isText = type === 'text' || type === 'search' || type === '';
                    return isText && input.offsetWidth > 0 && style.display !== 'none' && style.visibility !== 'hidden';
                });
                return hasVisibleInput;
            }

            if (hash.includes('pickupTask')) {
                // Trang Chuyển Pick: Cần có ô lọc và nút tìm kiếm khả dụng
                const inputs = Array.from(document.querySelectorAll('input'));
                const hasInput = inputs.some(input => {
                    const style = window.getComputedStyle(input);
                    return input.offsetWidth > 0 && style.display !== 'none' && style.visibility !== 'hidden';
                });
                const buttons = Array.from(document.querySelectorAll('button'));
                const hasButton = buttons.some(btn => {
                    const style = window.getComputedStyle(btn);
                    return btn.offsetWidth > 0 && style.display !== 'none' && style.visibility !== 'hidden';
                });
                return hasInput && hasButton;
            }

            // Mặc định: Nếu không khớp bất kỳ hash của trang nghiệp vụ nào, coi như chưa load xong nội dung chính
            return false;
        }

        function closeCurrentTab(tabType) {
            log(`[Smart Reload] Đang tiến hành đóng tab loại: ${tabType}`);
            localStorage.setItem("last_pulse_" + tabType, "0");
            localStorage.removeItem("tab_instance_id_" + tabType);
            window.postMessage({ type: "SHOPEE_CLOSE_TAB_REQUEST" }, "*");
            setTimeout(() => {
                window.close();
            }, 1000);
        }

        function initiateSmartReload() {
            const now = Date.now();
            const myTabType = getCurrentTabType();

            log('[Smart Reload] Phát lệnh đóng tất cả các tab khác để làm mới...');
            for (const type of RELOAD_ORDER) {
                if (type !== myTabType) {
                    localStorage.setItem('close_tab_trigger_time_' + type, now.toString());
                }
            }

            // Đợi 2.5 giây để các tab khác kịp đóng, sau đó tab điều phối hiện tại sẽ tự kích hoạt chuỗi mở tab tuần tự
            setTimeout(() => {
                log('[Smart Reload] Bắt đầu mở lại tuần tự các tab...');
                
                // Thiết lập trạng thái hàng đợi tuần tự
                localStorage.setItem('seq_open_queue', JSON.stringify(RELOAD_ORDER));
                const firstType = RELOAD_ORDER[0];
                localStorage.setItem('seq_open_current', firstType);
                localStorage.setItem('seq_open_phase', 'opening');
                localStorage.setItem('seq_open_tab_start', Date.now().toString());
                localStorage.removeItem('seq_open_retry');
 
                if (myTabType === firstType) {
                    log(`[Mở Tab] 🔄 Tab hiện tại chính là tab đầu tiên (${firstType}) - F5 để bắt đầu chuỗi...`);
                    window.location.reload();
                } else {
                    const cfg = TABS_CONFIG[firstType];
                    log(`[Mở Tab] ➡ Mở tab đầu tiên của chuỗi: ${cfg.name}...`);
                    
                    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
                        chrome.runtime.sendMessage({ action: "open_tab", url: cfg.url, active: true }, () => {
                            // Tự đóng tab điều phối hiện tại sau khi đã khởi chạy tab đầu tiên thành công
                            setTimeout(() => {
                                log(`[Smart Reload] Tab điều phối đã khởi chạy chuỗi thành công, tự đóng...`);
                                closeCurrentTab(myTabType);
                            }, 500);
                        });
                    } else {
                        if (typeof GM_openInTab !== 'undefined') {
                            GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
                        } else {
                            window.open(cfg.url, '_blank');
                        }
                        setTimeout(() => {
                            closeCurrentTab(myTabType);
                        }, 1000);
                    }
                }
            }, 2500);

            lastSuccessfulAction = now;
        }

        // Lắng nghe tín hiệu đóng tab từ localStorage
        function checkCloseTabTrigger() {
            const myTabType = getCurrentTabType();
            if (myTabType) {
                const triggerTimeStr = localStorage.getItem('close_tab_trigger_time_' + myTabType);
                if (triggerTimeStr) {
                    const triggerTime = parseInt(triggerTimeStr, 10);
                    const now = Date.now();
                    
                    // Nếu thời gian phát lệnh đóng cách đây chưa quá 8 giây (đủ để toàn bộ các tab trùng lặp đóng, tránh bị sót)
                    if (now - triggerTime < 8000) {
                        // Nếu tab đang bận xử lý task, hoãn lại cho tới khi hoàn thành
                        const isBusy = isPrintingNow || isProcessingList || isProcessingPrint || isProcessingHandover;
                        if (isBusy) {
                            log(`[Hệ thống] Nhận lệnh làm mới tuần tự nhưng tab đang bận xử lý task. Hoãn việc đóng tab...`);
                            return;
                        }
                        
                        log(`[Hệ thống] Nhận lệnh làm mới tuần tự. Đang đóng tab này...`);
                        closeCurrentTab(myTabType);
                    }
                }
            }
        }

        // Thay thế checkPeriodicReload cũ: kiểm tra xem có cần khởi tạo chuỗi reload không
        function checkPeriodicReload() {
            const now = Date.now();

            // Nếu đang có chuỗi reload hoặc mở tab đang chạy → không tạo mới
            if (localStorage.getItem('seq_open_queue') || localStorage.getItem('smart_reload_queue')) return;

            // Chỉ khởi tạo reload khi KHÔNG đang xử lý tác vụ nào và đã quá 1 giờ
            const isIdle = !isPrintingNow && !isProcessingList && !isProcessingPrint && !isProcessingHandover;
            if (isIdle && (now - lastSuccessfulAction) > PAGE_RELOAD_INTERVAL) {
                initiateSmartReload();
            }
        }

        let monitorCounter = 0;

        function monitorApp() {
            updateSelfPulse();
            updateTabsStatusUI();
            checkCloseTabTrigger(); // Liên tục kiểm tra xem có lệnh đóng tab để reload không

            // Đồng bộ lại trạng thái chạy và cấu hình từ localStorage theo thời gian thực
            apiUrl = localStorage.getItem("google_apps_script_url") || GM_getValue("google_apps_script_url", DEFAULT_WEB_APP_URL);
            pcName = localStorage.getItem("shopee_pc_name") || GM_getValue("shopee_pc_name", "PC_01");
            pcPriority = localStorage.getItem("shopee_pc_priority") || GM_getValue("shopee_pc_priority", "1");
            isRunning = localStorage.getItem("auto_print_enabled") === "true";
            updateUIState();

            const currentUrl = window.location.href;
            const hash = window.location.hash || "";

            if (currentUrl !== lastUrl) {
                lastUrl = currentUrl;
                isProcessingList = false;
                isProcessingPrint = false;
                isPrintingNow = false;
                isProcessingHandover = false;
            }

            // Sequential Tab Open: kiểm tra mỗi cycle (~1.5s) xem tab mới mở đã load xong chưa
            handleSequentialTabOpen();

            if (!isRunning) return;

            // Mỗi 75 lần monitor (~30 giây ở chu kỳ 400ms) kiểm tra sức khỏe hệ thống
            monitorCounter++;
            if (monitorCounter % 75 === 0) {
                checkAndRecoverStuckFlags();
                checkAndResumeAudio();
                checkSessionHealth();
                checkPeriodicReload();
                autoReopenClosedTabs();
            }

            const now = Date.now();
            if (hash.includes("awbPrint")) {
                // Tăng giãn cách gọi API lên 4.5 giây để chống quá tải/nghẽn mạng cho GAS và điện thoại
                if (now - lastAwbPollTime > 4500) {
                    lastAwbPollTime = now;
                    startPollingLoop();
                }
            }

            if (hash.includes("general-to-management")) {
                processTOListPage();
            }

            if (hash.includes("startPackNoLabel")) {
                // Tăng giãn cách gọi API lên 4.5 giây đối với luồng in nhãn TO
                if (now - lastToPollTime > 4500) {
                    lastToPollTime = now;
                    processPrintPage();
                }
            }

            if (hash.includes("pickupTask/list")) {
                // Tăng giãn cách gọi API lên 5 giây đối với luồng chuyển Pick
                if (now - lastCpPollTime > 5000) {
                    lastCpPollTime = now;
                    startHandoverLoop();
                }
            }
        }
        // Nhận tin nhắn đánh thức hoặc kích hoạt mở tab từ extension
        window.addEventListener("message", (e) => {
            if (e.data) {
                if (e.data.type === "SHOPEE_WAKE_UP_PING") {
                    updateSelfPulse();
                    if (isRunning) {
                        checkAndResumeAudio();
                        const hash = window.location.hash || "";
                        if (hash.includes("awbPrint")) {
                            startPollingLoop();
                        } else if (hash.includes("general-to-management")) {
                            processTOListPage();
                        } else if (hash.includes("startPackNoLabel")) {
                            processPrintPage();
                        } else if (hash.includes("pickupTask/list")) {
                            startHandoverLoop();
                        }
                    }
                } else if (e.data.type === "SHOPEE_TRIGGER_OPEN_ALL_TABS") {
                    log("[Hệ thống] Nhận yêu cầu tự động mở tất cả các tab.");
                    initiateSequentialTabOpen('manual');
                }
            }
        });

        updateSelfPulse();
        
        // Tạo Web Worker để chạy setTimeout đệ quy liên tục ở background (tránh bị Chrome bóp băng thông/ngủ đông)
        let worker = null;
        try {
            const blob = new Blob([`
                function tick() {
                    postMessage("pulse");
                    setTimeout(tick, 400);
                }
                tick();
            `], { type: "text/javascript" });
            const workerUrl = URL.createObjectURL(blob);
            worker = new Worker(workerUrl);
            worker.onmessage = function(e) {
                if (e.data === "pulse") {
                    monitorApp();
                }
            };
            log("[Hệ thống] v6.2 - Multi-Tab Parallel Helper (Fixed Polling 400ms).");
        } catch (err) {
            log("[Hệ thống] Không thể tạo Web Worker, dùng setTimeout đệ quy dự phòng.");
            function fallbackTick() {
                monitorApp();
                setTimeout(fallbackTick, 400);
            }
            fallbackTick();
        }
    }

    // Đợi DOM hoặc body sẵn sàng để chạy init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
