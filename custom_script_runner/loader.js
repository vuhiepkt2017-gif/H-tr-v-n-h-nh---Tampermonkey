// Injection Script to inject GM APIs directly to page window context from Isolated context securely
const injectionScript = document.createElement("script");
injectionScript.textContent = `
    (function() {
        window.GM_getValue = (key, def) => {
            const val = localStorage.getItem(key);
            return val !== null ? val : def;
        };
        window.GM_setValue = (key, val) => {
            localStorage.setItem(key, val);
        };
        window.GM_registerMenuCommand = (name, fn) => {
            console.log("[VTDAuto] Menu Command registered:", name);
        };
        window.GM_openInTab = (url, options) => {
            const active = options && options.active !== undefined ? options.active : true;
            window.postMessage({ type: "SHOPEE_OPEN_TAB_REQUEST", url, active }, "*");
        };
        window.GM_xmlhttpRequest = (options) => {
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
        window.unsafeWindow = window;
    })();
`;
(document.head || document.documentElement).appendChild(injectionScript);
injectionScript.remove();

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
    
    chrome.runtime.sendMessage({
        action: "call_gas",
        method,
        apiUrl: url.split('?')[0],
        actionName,
        data: requestData,
        pcName: localStorage.getItem("shopee_pc_name") || "PC_01"
    }, (response) => {
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
};

globalThis.GM_openInTab = (url, options) => {
    const active = options && options.active !== undefined ? options.active : true;
    chrome.runtime.sendMessage({
        action: "open_tab",
        url,
        active
    });
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

        if (result.extension_enabled === false) {
            localStorage.setItem("auto_print_enabled", "false");
            return;
        }

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
            chrome.runtime.sendMessage({ action: "activate_tab" });
        }
    });

})();
