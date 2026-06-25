// Custom script runner loader


// Standard background communication messaging bridge in Isolated world
globalThis.GM_getValue = (key, def) => {
    const val = localStorage.getItem(key);
    return val !== null ? val : def;
};

globalThis.GM_setValue = (key, val) => {
    localStorage.setItem(key, val);
};

globalThis.GM_registerMenuCommand = (name, fn) => {
    console.log("[VTDAuto] Menu Command registered in Isolated:", name);
};

globalThis.GM_xmlhttpRequest = (options) => {
    const url = options.url;
    const method = options.method || "POST";
    
    let data = null;
    try {
        data = options.data ? JSON.parse(options.data) : null;
    } catch (e) {
        data = options.data;
    }
    
    let actionName = "";
    let requestData = {};
    
    if (data && typeof data === "object") {
        actionName = data.action;
        requestData = data;
    } else {
        try {
            const urlObj = new URL(url);
            actionName = urlObj.searchParams.get("action");
        } catch(e) {}
    }
    
    try {
        chrome.runtime.sendMessage({
            action: "call_gas",
            method,
            apiUrl: url.split('?')[0],
            actionName,
            data: requestData,
            pcName: localStorage.getItem("shopee_pc_name") || "PC_01"
        }, (response) => {
            if (chrome.runtime.lastError) {
                if (options.onerror) {
                    options.onerror(new Error("Extension context invalidated. Vui lòng F5 lại trang."));
                }
                return;
            }
            if (response && response.success) {
                if (options.onload) {
                    options.onload({
                        text: JSON.stringify(response.data),
                        responseText: JSON.stringify(response.data),
                        status: 200
                    });
                }
            } else {
                if (options.onerror) {
                    options.onerror(new Error(response ? response.error : "Lỗi kết nối"));
                }
            }
        });
    } catch (e) {
        if (options.onerror) {
            options.onerror(new Error("Extension context invalidated. Vui lòng F5 lại trang."));
        }
    }
};

globalThis.GM_openInTab = (url, options) => {
    const active = options && options.active !== undefined ? options.active : true;
    try {
        chrome.runtime.sendMessage({
            action: "open_tab",
            url,
            active
        });
    } catch (e) {
        console.warn("[VTDAuto] Không thể mở tab do Extension đã bị reload/cập nhật. Vui lòng nhấn F5 lại trang này.", e.message);
    }
};

(function() {
    'use strict';

    // Lang nghe thong tin tu Extension Popup gui xuong tab hien tai
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "get_shopee_status") {
            const status = {
                apiUrl: localStorage.getItem("google_apps_script_url") || "",
                pcName: localStorage.getItem("shopee_pc_name") || "",
                isRunning: localStorage.getItem("auto_print_enabled") === "true",
                pulses: {
                    awbPrint: localStorage.getItem("last_pulse_awbPrint") || "0",
                    generalPackTOList: localStorage.getItem("last_pulse_generalPackTOList") || "0",
                    startPackNoLabel: localStorage.getItem("last_pulse_startPackNoLabel") || "0",
                    pickupTask: localStorage.getItem("last_pulse_pickupTask") || "0",
                },
                logs: localStorage.getItem("shopee_automation_logs") || ""
            };
            sendResponse(status);
        } else if (request.action === "set_shopee_status") {
            localStorage.setItem("google_apps_script_url", request.apiUrl);
            localStorage.setItem("shopee_pc_name", request.pcName);
            localStorage.setItem("auto_print_enabled", request.isRunning ? "true" : "false");
            
            // Dong bo thong tin sang Page Context thong qua postMessage
            window.postMessage({ type: "SHOPEE_SETTINGS_UPDATED" }, "*");
            sendResponse({ success: true });
        } else if (request.action === "trigger_open_all_tabs") {
            window.postMessage({ type: "SHOPEE_TRIGGER_OPEN_ALL_TABS" }, "*");
            sendResponse({ success: true });
        }
        return true;
    });

    // Tu dong dong bo URL Web App va PC Name vao localStorage
    chrome.storage.local.get(["extension_enabled", "google_apps_script_url", "shopee_pc_name", "extension_unlocked"], (result) => {
        // Neu chua unlock qua popup, tat luon auto print
        if (result.extension_unlocked !== true) {
            localStorage.setItem("auto_print_enabled", "false");
            console.log("[VTDAuto] Extension dang bi khoa. Vui long unlock qua popup.");
            return;
        }

        const isEnabled = result.extension_enabled !== false;
        localStorage.setItem("auto_print_enabled", isEnabled ? "true" : "false");

        if (result.google_apps_script_url) {
            localStorage.setItem("google_apps_script_url", result.google_apps_script_url);
        }
        if (result.shopee_pc_name) {
            localStorage.setItem("shopee_pc_name", result.shopee_pc_name);
        }
    });

    // Lang nghe postMessage tu MAIN world de lam cau noi goi API tu background
    window.addEventListener("message", (e) => {
        if (!e.data || typeof e.data !== "object") return;
        
        if (e.data.type === "SHOPEE_XMLHTTP_REQUEST") {
            const { reqId, options } = e.data;
            globalThis.GM_xmlhttpRequest({
                url: options.url,
                method: options.method,
                data: options.data,
                onload: (res) => {
                    window.postMessage({
                        type: "SHOPEE_XMLHTTP_RESPONSE",
                        reqId,
                        success: true,
                        responseText: res.responseText
                    }, "*");
                },
                onerror: (err) => {
                    window.postMessage({
                        type: "SHOPEE_XMLHTTP_RESPONSE",
                        reqId,
                        success: false,
                        error: err.message
                    }, "*");
                }
            });
        } else if (e.data.type === "SHOPEE_OPEN_TAB_REQUEST") {
            const { url, active } = e.data;
            globalThis.GM_openInTab(url, { active });
        } else if (e.data.type === "SHOPEE_ACTIVATE_TAB_REQUEST") {
            try {
                chrome.runtime.sendMessage({ action: "activate_tab" });
            } catch (err) {}
        }
    });
    // Keep alive connection to background script to prevent tab freezing and service worker suspension
    function connectKeepAlive() {
        try {
            const port = chrome.runtime.connect({ name: "keepAlive" });
            const interval = setInterval(() => {
                try {
                    port.postMessage({ type: "ping" });
                } catch (e) {
                    clearInterval(interval);
                }
            }, 10000); // ping every 10s
            port.onDisconnect.addListener(() => {
                clearInterval(interval);
                setTimeout(connectKeepAlive, 5000); // reconnect after 5s
            });
        } catch (e) {
            setTimeout(connectKeepAlive, 5000);
        }
    }
    connectKeepAlive();

})();
