// Custom UserScript Runner - Popup UI Script (Manifest V3)

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const toggleRunner = document.getElementById("toggle-runner");
    const statusText = document.getElementById("status-text");
    const btnOpenDashboard = document.getElementById("btn-open-dashboard");
    const scriptListContainer = document.getElementById("script-list-container");
    const activeScriptsList = document.getElementById("active-scripts-list");
    const webappConfigSection = document.getElementById("webapp-config-section");
    const popupWebappUrl = document.getElementById("popup-webapp-url");
    const popupWebappSave = document.getElementById("popup-webapp-save");

    // Lock Screen Elements
    const popupLockOverlay = document.getElementById("popup-lock-overlay");
    const popupContentMain = document.getElementById("popup-content-main");
    const popupUnlockPassword = document.getElementById("popup-unlock-password");
    const popupSavePassword = document.getElementById("popup-save-password");
    const popupSubmitUnlock = document.getElementById("popup-submit-unlock");
    const popupUnlockError = document.getElementById("popup-unlock-error");

    const SECRET_KEY = "SPXVN0228$";
    let activeTabId = null;
    let allScripts = [];

    // Verify Activation State first
    chrome.storage.local.get(["extension_unlocked"], (res) => {
        if (res.extension_unlocked === true) {
            popupLockOverlay.style.display = "none";
            popupContentMain.style.display = "block";
        } else {
            popupLockOverlay.style.display = "flex";
            popupContentMain.style.display = "none";
            popupUnlockPassword.focus();
        }
    });

    // Handle Unlock
    const handlePopupUnlock = () => {
        const val = popupUnlockPassword.value.trim();
        if (val === SECRET_KEY) {
            chrome.storage.local.set({ extension_unlocked: true }, () => {
                popupLockOverlay.style.display = "none";
                popupContentMain.style.display = "block";
                
                // Clear password input if not saved
                // If they checked "Ghi nhớ mật khẩu", keep extension_unlocked as true persistently.
                // If they UNCHECKED "Ghi nhớ mật khẩu", we can store it in session storage or background memory so that it locks again next time they restart Chrome.
                if (!popupSavePassword.checked) {
                    // Let background service worker know to lock it again on browser close / startup
                    chrome.storage.local.set({ extension_unlocked_session_only: true });
                } else {
                    chrome.storage.local.remove("extension_unlocked_session_only");
                }

                chrome.storage.local.set({ extension_enabled: true }, () => {
                    // Enable running in current active tab automatically on unlock
                    if (activeTabId) {
                        chrome.tabs.sendMessage(activeTabId, { action: "get_shopee_status" }, (currentStatus) => {
                            const currentApiUrl = (currentStatus && currentStatus.apiUrl) || "";
                            const currentPcName = (currentStatus && currentStatus.pcName) || "PC_01";
                            chrome.tabs.sendMessage(activeTabId, {
                                action: "set_shopee_status",
                                apiUrl: currentApiUrl,
                                pcName: currentPcName,
                                isRunning: true
                            }, () => {
                                // Reload after setting so it runs instantly
                                chrome.tabs.reload(activeTabId);
                            });
                        });
                    }
                });

                popupUnlockPassword.value = "";
                popupUnlockError.innerText = "";
            });
        } else {
            popupUnlockError.innerText = "Mật khẩu không chính xác!";
            popupUnlockPassword.style.borderColor = "#f44336";
            popupUnlockPassword.value = "";
            popupUnlockPassword.focus();
        }
    };

    popupSubmitUnlock.addEventListener("click", handlePopupUnlock);
    popupUnlockPassword.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handlePopupUnlock();
    });

    // Helper: Wildcard matching
    function urlMatchesPattern(url, pattern) {
        try {
            const regexPattern = '^' + pattern
                .replace(/[.+^${}()|[\]\\]/g, '\\$&')
                .replace(/\*/g, '.*')
                + '$';
            const regex = new RegExp(regexPattern, 'i');
            return regex.test(url);
        } catch (e) {
            return false;
        }
    }

    // 1. Read global runner status
    chrome.storage.local.get("extension_enabled", (result) => {
        const isEnabled = result.extension_enabled !== false;
        toggleRunner.checked = isEnabled;
        updateStatusText(isEnabled);
    });

    // 2. Global switch change
    toggleRunner.addEventListener("change", (e) => {
        const isEnabled = e.target.checked;
        chrome.storage.local.set({ extension_enabled: isEnabled }, () => {
            updateStatusText(isEnabled);
            
            // Sync with current Shopee tab if active
            if (activeTabId) {
                chrome.tabs.sendMessage(activeTabId, { action: "get_shopee_status" }, (currentStatus) => {
                    if (!chrome.runtime.lastError && currentStatus) {
                        chrome.tabs.sendMessage(activeTabId, {
                            action: "set_shopee_status",
                            apiUrl: currentStatus.apiUrl,
                            pcName: currentStatus.pcName,
                            isRunning: isEnabled
                        });
                    }
                });
            }
        });
    });

    // 3. Open Options Page
    btnOpenDashboard.addEventListener("click", () => {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('options.html'));
        }
    });

    function updateStatusText(isEnabled) {
        statusText.innerText = isEnabled ? "Hệ thống: ĐANG BẬT" : "Hệ thống: ĐÃ TẮT";
        statusText.style.color = isEnabled ? "#4caf50" : "#f44336";
    }

    // 4. Detect current tab and list running scripts
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (!activeTab) return;
        activeTabId = activeTab.id;
        const currentUrl = activeTab.url || "";

        chrome.storage.local.get(["user_scripts", "google_apps_script_url"], (result) => {
            allScripts = result.user_scripts || [];
            const matchedScripts = allScripts.filter(s => urlMatchesPattern(currentUrl, s.matchUrl));

            if (matchedScripts.length > 0) {
                scriptListContainer.style.display = "block";
                activeScriptsList.innerHTML = "";

                matchedScripts.forEach(script => {
                    const item = document.createElement("div");
                    item.className = "script-item";
                    item.innerHTML = `
                        <div class="script-name-wrapper">
                            <label class="switch">
                                <input type="checkbox" class="script-toggle" data-id="${script.id}" ${script.enabled ? "checked" : ""}>
                                <span class="slider"></span>
                            </label>
                            <span class="script-name" title="${script.name}">${script.name}</span>
                        </div>
                        <span class="script-status-badge ${script.enabled ? 'active' : 'disabled'}">
                            ${script.enabled ? 'Đang chạy' : 'Đã tắt'}
                        </span>
                    `;
                    activeScriptsList.appendChild(item);

                    // Attach toggle click handler
                    const toggleInput = item.querySelector(".script-toggle");
                    const statusBadge = item.querySelector(".script-status-badge");

                    toggleInput.addEventListener("change", (e) => {
                        const isChecked = e.target.checked;
                        
                        // Update in local memory array
                        const targetScript = allScripts.find(s => s.id === script.id);
                        if (targetScript) {
                            targetScript.enabled = isChecked;
                        }

                        // Save updated array back to storage
                        chrome.storage.local.set({ user_scripts: allScripts }, () => {
                            // Update badge look in real-time
                            statusBadge.innerText = isChecked ? 'Đang chạy' : 'Đã tắt';
                            statusBadge.className = `script-status-badge ${isChecked ? 'active' : 'disabled'}`;
                            
                            // Re-evaluate webapp panel visibility
                            updateWebappPanelVisibility(matchedScripts, result.google_apps_script_url);
                        });
                    });
                });

                updateWebappPanelVisibility(matchedScripts, result.google_apps_script_url);
            } else {
                scriptListContainer.style.display = "none";
                webappConfigSection.style.display = "none";
            }
        });
    });

    function updateWebappPanelVisibility(matchedScripts, savedUrl) {
        // Only show Google Web App configuration if any Shopee script is currently enabled
        const hasEnabledShopeeScript = matchedScripts.some(s => s.enabled && (s.name.includes("Shopee") || s.matchUrl.includes("shopee")));
        if (hasEnabledShopeeScript) {
            webappConfigSection.style.display = "block";
            popupWebappUrl.value = savedUrl || "";
        } else {
            webappConfigSection.style.display = "none";
        }
    }

    // 5. Save Web App URL from popup
    popupWebappSave.addEventListener("click", () => {
        const urlVal = popupWebappUrl.value.trim();
        if (urlVal) {
            const pass = prompt("Nhập mật khẩu xác thực để thay đổi Web App URL:");
            if (pass !== SECRET_KEY) {
                alert("Mật khẩu không chính xác! Không thể thay đổi Web App URL.");
                return;
            }

            chrome.storage.local.set({ google_apps_script_url: urlVal }, () => {
                alert("Đã lưu URL Web App thành công! Hệ thống đang đồng bộ lên Google Sheet...");
                
                // Đồng bộ lên Google Sheet thông qua API update_webapp_url
                fetch(urlVal, {
                    method: "POST",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify({ action: "update_webapp_url", newUrl: urlVal, pc: "PC_Master" })
                })
                .then(r => r.json())
                .then(res => {
                    console.log("[VTDAuto] Đồng bộ Webapp URL lên Sheet thành công:", res);
                })
                .catch(err => {
                    console.error("[VTDAuto] Lỗi đồng bộ Webapp URL lên Sheet:", err);
                });

                // Sync settings with Shopee webpage in real-time
                if (activeTabId) {
                    chrome.tabs.sendMessage(activeTabId, { action: "get_shopee_status" }, (currentStatus) => {
                        if (!chrome.runtime.lastError && currentStatus) {
                            chrome.tabs.sendMessage(activeTabId, {
                                action: "set_shopee_status",
                                apiUrl: urlVal,
                                pcName: currentStatus.pcName,
                                isRunning: currentStatus.isRunning
                            });
                        }
                    });
                }
            });
        }
    });
});
