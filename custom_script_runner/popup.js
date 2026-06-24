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

    const SECRET_KEY = "VTDAuto@2026";
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
                if (!popupSavePassword.checked) {
                    // We don't save or we reset on close? If checked, we keep it unlocked.
                    // If not checked, we keep it unlocked for current session or we can let them close.
                    // Storage extension_unlocked is persistent, if user unchecks "remember", we should clear it on browser suspend or we can just let it expire or simple logic: if unchecked, we only unlock this time (which means we might reset it on browser startup or just simple setting).
                    // To keep it simple: if checked we save extension_unlocked: true. If NOT checked, we save extension_unlocked: true, but we could set an option to clear it later. Let's just store a session flag or cookie if needed, but storage.local is persistent. Let's make extension_unlocked a persistent flag only if save is checked!
                }
                
                // If they checked "Ghi nhớ mật khẩu", keep extension_unlocked as true persistently.
                // If they UNCHECKED "Ghi nhớ mật khẩu", we can store it in session storage or background memory so that it locks again next time they restart Chrome.
                if (!popupSavePassword.checked) {
                    // Let background service worker know to lock it again on browser close / startup
                    chrome.storage.local.set({ extension_unlocked_session_only: true });
                } else {
                    chrome.storage.local.remove("extension_unlocked_session_only");
                }

                popupUnlockPassword.value = "";
                popupUnlockError.innerText = "";
                
                // Reload current Shopee page to apply settings
                if (activeTabId) {
                    chrome.tabs.reload(activeTabId);
                }
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
            chrome.storage.local.set({ google_apps_script_url: urlVal }, () => {
                alert("Đã lưu URL Web App thành công!");
                
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
