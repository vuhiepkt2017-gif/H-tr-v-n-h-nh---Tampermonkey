// Custom UserScript Manager - UI & Sync Logic (Manifest V3)

document.addEventListener("DOMContentLoaded", () => {
    let scripts = [];
    let activeScriptId = null;
    let isEditingSettings = false;

    // Elements
    const scriptListContainer = document.getElementById("script-list-container");
    const editorWorkspace = document.getElementById("editor-workspace");
    const settingsWorkspace = document.getElementById("settings-workspace");
    
    const scriptTitleInput = document.getElementById("script-title-input");
    const scriptMatchInput = document.getElementById("script-match-input");
    const scriptCodeEditor = document.getElementById("script-code-editor");
    
    const btnNewScript = document.getElementById("btn-new-script");
    const btnSaveScript = document.getElementById("btn-save-script");
    const btnDeleteScript = document.getElementById("btn-delete-script");
    const btnShowSettings = document.getElementById("btn-show-settings");
    
    const settingApiUrl = document.getElementById("setting-api-url");
    const settingPcName = document.getElementById("setting-pc-name");
    const btnSaveSettings = document.getElementById("btn-save-settings");
    const settingsStatus = document.getElementById("settings-status");
    
    const btnCloudBackup = document.getElementById("btn-cloud-backup");
    const btnCloudRestore = document.getElementById("btn-cloud-restore");
    const btnExportJson = document.getElementById("btn-export-json");
    const btnTriggerImport = document.getElementById("btn-trigger-import");
    const importFileInput = document.getElementById("import-file-input");
    const btnResetDefault = document.getElementById("btn-reset-default");

    // Password Lock Elements
    const editorWorkspaceBody = document.getElementById("editor-workspace-body");
    const editorLockOverlay = document.getElementById("editor-lock-overlay");
    const btnLockScript = document.getElementById("btn-lock-script");
    const unlockPasswordInput = document.getElementById("editor-unlock-password");
    const btnSubmitUnlock = document.getElementById("btn-submit-unlock");
    const unlockError = document.getElementById("unlock-error");

    // 1. Tải cấu hình và khởi động
    init();

    async function init() {
        // Tải cài đặt kết nối
        chrome.storage.local.get(["google_apps_script_url", "shopee_pc_name", "user_scripts"], async (result) => {
            settingApiUrl.value = result.google_apps_script_url || "";
            settingPcName.value = result.shopee_pc_name || "PC_01";
            
            scripts = result.user_scripts || [];
            
            // Nếu chưa có script nào, tự động import script mặc định
            if (scripts.length === 0) {
                showStatus("Đang khởi tạo script mặc định...", "info");
                try {
                    const res = await fetch("default_shopee_script.js");
                    const defaultCode = await res.text();
                    scripts.push({
                        id: Date.now().toString(),
                        name: "Hỗ trợ vận hành SPX Shopee",
                        matchUrl: "https://spx.shopee.vn/*",
                        code: defaultCode,
                        enabled: true
                    });
                    chrome.storage.local.set({ user_scripts: scripts });
                } catch (err) {
                    console.error("Không thể load script mặc định:", err);
                }
            } else {
                // Tự động nâng cấp script nếu là phiên bản cũ chưa hỗ trợ lưu logs
                let needsUpdate = false;
                for (let s of scripts) {
                    if (s.name === "Hỗ trợ vận hành SPX Shopee" && !s.code.includes("shopee_automation_logs") && !s.isLocked) {
                        try {
                            const res = await fetch("default_shopee_script.js");
                            const defaultCode = await res.text();
                            s.code = defaultCode;
                            needsUpdate = true;
                        } catch (e) {
                            console.error("Lỗi cập nhật tự động script SPX:", e);
                        }
                    }
                }
                if (needsUpdate) {
                    chrome.storage.local.set({ user_scripts: scripts });
                }
            }
            
            renderScriptList();
            if (scripts.length > 0) {
                selectScript(scripts[0].id);
            } else {
                showSettings();
            }
        });
    }

    // 2. Render Danh sách Script ở Sidebar
    function renderScriptList() {
        scriptListContainer.innerHTML = "";
        scripts.forEach(script => {
            const item = document.createElement("div");
            item.className = `script-item ${script.id === activeScriptId && !isEditingSettings ? "active" : ""}`;
            item.dataset.id = script.id;

            item.innerHTML = `
                <div class="script-item-info">
                    <span class="script-name">${script.name || "Chưa đặt tên"}</span>
                    <span class="script-pattern">${script.matchUrl || "*"}</span>
                </div>
                <div class="script-actions">
                    <label class="switch">
                        <input type="checkbox" class="toggle-enabled" ${script.enabled ? "checked" : ""}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;

            // Click chọn script
            item.addEventListener("click", (e) => {
                if (e.target.classList.contains("toggle-enabled") || e.target.closest(".switch")) {
                    return; // Bỏ qua nếu click nút switch
                }
                selectScript(script.id);
            });

            // Thay đổi trạng thái kích hoạt bật/tắt nhanh
            item.querySelector(".toggle-enabled").addEventListener("change", (e) => {
                script.enabled = e.target.checked;
                saveAllScriptsToStorage();
            });

            scriptListContainer.appendChild(item);
        });
    }

    // Helper to encrypt/decrypt with custom password
    function encryptWithPassword(plainText, password) {
        let result = "";
        for (let i = 0; i < plainText.length; i++) {
            const charCode = plainText.charCodeAt(i) ^ password.charCodeAt(i % password.length);
            result += String.fromCharCode(charCode);
        }
        return btoa(unescape(encodeURIComponent(result)));
    }

    function decryptWithPassword(encryptedText, password) {
        try {
            const decoded = decodeURIComponent(escape(atob(encryptedText.trim())));
            let result = "";
            for (let i = 0; i < decoded.length; i++) {
                const charCode = decoded.charCodeAt(i) ^ password.charCodeAt(i % password.length);
                result += String.fromCharCode(charCode);
            }
            return result;
        } catch (e) {
            return null;
        }
    }

    function verifyPassword(script, password) {
        if (!script.verification) return false;
        const decrypted = decryptWithPassword(script.verification, password);
        return decrypted === "VERIFIED";
    }

    function showEditorWorkspace(unlocked) {
        if (unlocked) {
            editorWorkspaceBody.style.display = "block";
            editorLockOverlay.style.display = "none";
            const script = scripts.find(s => s.id === activeScriptId);
            if (script && script.isLocked) {
                btnLockScript.innerText = "🔓 Hủy Khóa";
                btnLockScript.style.backgroundColor = "var(--danger)";
            } else {
                btnLockScript.innerText = "🔒 Khóa mật khẩu";
                btnLockScript.style.backgroundColor = "var(--active-bg)";
            }
        } else {
            editorWorkspaceBody.style.display = "none";
            editorLockOverlay.style.display = "flex";
            unlockPasswordInput.value = "";
            unlockError.innerText = "";
        }
    }

    // 3. Chọn xem/sửa Script
    function selectScript(id) {
        isEditingSettings = false;
        activeScriptId = id;
        renderScriptList();

        const script = scripts.find(s => s.id === id);
        if (script) {
            scriptTitleInput.value = script.name;
            scriptMatchInput.value = script.matchUrl;
            
            if (script.isLocked) {
                // Luôn bắt buộc nhập mật khẩu khi xem trong giao diện Quản Trị Script, kể cả trên máy hiện tại
                showEditorWorkspace(false);
            } else {
                scriptCodeEditor.value = script.code;
                showEditorWorkspace(true);
            }
            
            editorWorkspace.style.display = "flex";
            settingsWorkspace.style.display = "none";
        }
    }

    // 4. Tạo mới Script
    btnNewScript.addEventListener("click", () => {
        const newScript = {
            id: Date.now().toString(),
            name: "Script mới chưa đặt tên",
            matchUrl: "https://*",
            code: "// Viết code của bạn vào đây...\n",
            enabled: true
        };
        scripts.push(newScript);
        saveAllScriptsToStorage();
        renderScriptList();
        selectScript(newScript.id);
    });

    // 5. Lưu script hiện tại
    btnSaveScript.addEventListener("click", () => {
        if (!activeScriptId) return;
        const script = scripts.find(s => s.id === activeScriptId);
        if (script) {
            script.name = scriptTitleInput.value.trim() || "Chưa đặt tên";
            script.matchUrl = scriptMatchInput.value.trim() || "https://*";
            
            if (script.isLocked) {
                chrome.storage.local.get("local_passwords", (result) => {
                    const localPasswords = result.local_passwords || {};
                    const savedPassword = localPasswords[activeScriptId];
                    if (savedPassword) {
                        script.code = encryptWithPassword(scriptCodeEditor.value, savedPassword);
                        saveAllScriptsToStorage();
                        renderScriptList();
                        showStatus("Đã lưu Script (Đã mã hóa) thành công!", "success");
                    } else {
                        showStatus("Lỗi: Không tìm thấy mật khẩu cục bộ để mã hóa!", "danger");
                    }
                });
            } else {
                script.code = scriptCodeEditor.value;
                saveAllScriptsToStorage();
                renderScriptList();
                showStatus("Đã lưu Script thành công!", "success");
            }
        }
    });

    // Click Lock/Unlock script button
    btnLockScript.addEventListener("click", () => {
        if (!activeScriptId) return;
        const script = scripts.find(s => s.id === activeScriptId);
        if (!script) return;

        if (script.isLocked) {
            const pass = prompt("Nhập mật khẩu hiện tại để hủy khóa mật khẩu cho script này:");
            if (pass === null) return;
            if (verifyPassword(script, pass)) {
                const decryptedCode = decryptWithPassword(script.code, pass);
                script.code = decryptedCode;
                script.isLocked = false;
                delete script.verification;
                
                chrome.storage.local.get("local_passwords", (result) => {
                    const localPasswords = result.local_passwords || {};
                    delete localPasswords[activeScriptId];
                    chrome.storage.local.set({ local_passwords: localPasswords }, () => {
                        saveAllScriptsToStorage();
                        selectScript(activeScriptId);
                        showStatus("Đã hủy khóa mật khẩu thành công!", "success");
                    });
                });
            } else {
                alert("Mật khẩu không chính xác!");
            }
        } else {
            const pass = prompt("Nhập mật khẩu mới để khóa script này (Lưu ý ghi nhớ để dùng trên thiết bị khác):");
            if (!pass) return;
            
            const plainCode = scriptCodeEditor.value;
            const encryptedCode = encryptWithPassword(plainCode, pass);
            const verification = encryptWithPassword("VERIFIED", pass);
            
            script.code = encryptedCode;
            script.verification = verification;
            script.isLocked = true;
            
            chrome.storage.local.get("local_passwords", (result) => {
                const localPasswords = result.local_passwords || {};
                localPasswords[activeScriptId] = pass;
                chrome.storage.local.set({ local_passwords: localPasswords }, () => {
                    saveAllScriptsToStorage();
                    selectScript(activeScriptId);
                    showStatus("Đã khóa script bằng mật khẩu thành công!", "success");
                });
            });
        }
    });

    // Submit unlock password on overlay
    btnSubmitUnlock.addEventListener("click", () => {
        const pass = unlockPasswordInput.value;
        const script = scripts.find(s => s.id === activeScriptId);
        if (!script) return;

        if (verifyPassword(script, pass)) {
            const decryptedCode = decryptWithPassword(script.code, pass);
            scriptCodeEditor.value = decryptedCode;
            
            chrome.storage.local.get("local_passwords", (result) => {
                const localPasswords = result.local_passwords || {};
                localPasswords[activeScriptId] = pass;
                chrome.storage.local.set({ local_passwords: localPasswords }, () => {
                    showEditorWorkspace(true);
                    showStatus("Mở khóa script thành công!", "success");
                });
            });
        } else {
            unlockError.innerText = "Mật khẩu không chính xác!";
        }
    });

    unlockPasswordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            btnSubmitUnlock.click();
        }
    });

    // 6. Xóa script hiện tại
    btnDeleteScript.addEventListener("click", () => {
        if (!activeScriptId) return;
        if (confirm("Bạn có chắc chắn muốn xóa script này?")) {
            scripts = scripts.filter(s => s.id !== activeScriptId);
            saveAllScriptsToStorage();
            renderScriptList();
            if (scripts.length > 0) {
                selectScript(scripts[0].id);
            } else {
                showSettings();
            }
        }
    });

    // 7. Hiển thị trang cấu hình
    btnShowSettings.addEventListener("click", showSettings);

    function showSettings() {
        isEditingSettings = true;
        renderScriptList();
        editorWorkspace.style.display = "none";
        settingsWorkspace.style.display = "flex";
        clearStatus();
    }

    // 8. Lưu cài đặt kết nối
    btnSaveSettings.addEventListener("click", () => {
        const url = settingApiUrl.value.trim();
        const pc = settingPcName.value.trim();

        chrome.storage.local.set({
            google_apps_script_url: url,
            shopee_pc_name: pc
        }, () => {
            showStatus("Đã lưu cấu hình kết nối!", "success");
        });
    });

    // 9. Lưu tất cả script vào Chrome Storage
    function saveAllScriptsToStorage() {
        chrome.storage.local.set({ user_scripts: scripts });
    }

    // ==========================================
    // TÍNH NĂNG SAO LƯU & ĐỒNG BỘ ĐÁM MÂY (CLOUD SYNC)
    // ==========================================

    // A. Sao lưu lên Google Sheets (Backup)
    btnCloudBackup.addEventListener("click", async () => {
        const url = settingApiUrl.value.trim();
        const pc = settingPcName.value.trim();
        if (!url) {
            showStatus("Vui lòng cấu hình URL Google Web App trước khi sao lưu!", "danger");
            return;
        }

        showStatus("Đang nén và gửi dữ liệu lên Google Sheets...", "info");
        
        // Gửi qua background.js để bypass CORS
        chrome.runtime.sendMessage({
            action: "call_gas",
            method: "POST",
            apiUrl: url,
            actionName: "backup_scripts",
            pcName: pc,
            data: {
                scripts: JSON.stringify(scripts)
            }
        }, (response) => {
            if (response && response.success) {
                if (response.data && response.data.status === "success") {
                    showStatus("Đã sao lưu lên Google Sheets thành công!", "success");
                } else {
                    const msg = response.data ? response.data.message : "Yêu cầu bị từ chối từ Apps Script";
                    showStatus("Lỗi sao lưu: " + msg, "danger");
                }
            } else {
                showStatus("Lỗi sao lưu: " + (response ? response.error : "Không có kết nối mạng"), "danger");
            }
        });
    });

    // B. Khôi phục từ Google Sheets (Restore)
    btnCloudRestore.addEventListener("click", async () => {
        const url = settingApiUrl.value.trim();
        const pc = settingPcName.value.trim();
        if (!url) {
            showStatus("Vui lòng cấu hình URL Google Web App trước khi khôi phục!", "danger");
            return;
        }

        if (!confirm("Hành động này sẽ tải dữ liệu từ Google Sheets về và ghi đè lên toàn bộ các script hiện tại. Bạn có tiếp tục không?")) {
            return;
        }

        showStatus("Đang kết nối lấy dữ liệu sao lưu từ Sheets...", "info");

        chrome.runtime.sendMessage({
            action: "call_gas",
            method: "GET",
            apiUrl: url,
            actionName: "restore_scripts",
            pcName: pc
        }, (response) => {
            if (response && response.success) {
                if (response.data && response.data.status === "success") {
                    try {
                        const restoredScripts = JSON.parse(response.data.scripts);
                        if (Array.isArray(restoredScripts)) {
                            scripts = restoredScripts;
                            saveAllScriptsToStorage();
                            renderScriptList();
                            if (scripts.length > 0) {
                                selectScript(scripts[0].id);
                            }
                            showStatus("Đã khôi phục toàn bộ Script từ đám mây thành công!", "success");
                        } else {
                            showStatus("Dữ liệu sao lưu trên Sheet trống hoặc không hợp lệ!", "danger");
                        }
                    } catch (e) {
                        showStatus("Lỗi xử lý định dạng dữ liệu khôi phục!", "danger");
                    }
                } else {
                    const msg = response.data ? response.data.message : "Yêu cầu bị từ chối từ Apps Script";
                    showStatus("Lỗi khôi phục: " + msg, "danger");
                }
            } else {
                showStatus("Lỗi khôi phục: " + (response ? response.error : "Không có kết nối mạng"), "danger");
            }
        });
    });

    // ==========================================
    // SAO LƯU THỦ CÔNG (MÃ HÓA BẢO MẬT PHÒNG ĐỌC TRỘM)
    // ==========================================

    const SECRET_KEY = "SpxAutomationHelperKey_2026";

    // Hàm mã hóa XOR + Base64 bảo vệ mã nguồn
    function encryptData(dataStr) {
        let result = "";
        for (let i = 0; i < dataStr.length; i++) {
            const charCode = dataStr.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
            result += String.fromCharCode(charCode);
        }
        return btoa(unescape(encodeURIComponent(result)));
    }

    // Hàm giải mã XOR + Base64
    function decryptData(base64Str) {
        try {
            const decoded = decodeURIComponent(escape(atob(base64Str.trim())));
            let result = "";
            for (let i = 0; i < decoded.length; i++) {
                const charCode = decoded.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
                result += String.fromCharCode(charCode);
            }
            return result;
        } catch (e) {
            return null;
        }
    }

    // A. Xuất File JSON đã mã hóa bảo mật
    btnExportJson.addEventListener("click", () => {
        const plainJson = JSON.stringify(scripts);
        const encryptedData = encryptData(plainJson);
        const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(encryptedData);
        
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `UserScripts_SecureBackup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showStatus("Đã tải xuống file sao lưu bảo mật (Đã mã hóa)!", "success");
    });

    // B. Kích hoạt nút chọn file ẩn
    btnTriggerImport.addEventListener("click", () => {
        importFileInput.click();
    });

    // C. Nhập File và giải mã khôi phục
    importFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const fileContent = event.target.result;
                const decryptedStr = decryptData(fileContent);
                
                if (!decryptedStr) {
                    showStatus("File sao lưu bị hỏng hoặc không đúng định dạng mã hóa!", "danger");
                    return;
                }

                const importedData = JSON.parse(decryptedStr);
                if (Array.isArray(importedData)) {
                    if (confirm("Bạn có chắc muốn ghi đè danh sách script hiện tại bằng file sao lưu này không?")) {
                        scripts = importedData;
                        saveAllScriptsToStorage();
                        renderScriptList();
                        if (scripts.length > 0) {
                            selectScript(scripts[0].id);
                        }
                        showStatus("Đã giải mã và khôi phục script thành công!", "success");
                    }
                } else {
                    showStatus("Dữ liệu sau giải mã không hợp lệ!", "danger");
                }
            } catch (err) {
                showStatus("Lỗi giải mã file sao lưu!", "danger");
            }
        };
        reader.readAsText(file);
    });

    // D. Cài đặt lại script mặc định
    btnResetDefault.addEventListener("click", async () => {
        if (confirm("Hành động này sẽ cài đặt lại hoặc khôi phục script mặc định 'Hỗ trợ vận hành SPX Shopee'. Bạn có tiếp tục không?")) {
            showStatus("Đang tải lại script mặc định...", "info");
            try {
                const res = await fetch("default_shopee_script.js");
                const defaultCode = await res.text();
                
                let shopeeScript = scripts.find(s => s.name === "Hỗ trợ vận hành SPX Shopee");
                if (shopeeScript) {
                    shopeeScript.code = defaultCode;
                    shopeeScript.isLocked = false;
                    delete shopeeScript.verification;
                } else {
                    scripts.push({
                        id: Date.now().toString(),
                        name: "Hỗ trợ vận hành SPX Shopee",
                        matchUrl: "https://spx.shopee.vn/*",
                        code: defaultCode,
                        enabled: true
                    });
                }
                saveAllScriptsToStorage();
                renderScriptList();
                if (scripts.length > 0) {
                    selectScript(scripts[0].id);
                }
                showStatus("Đã khôi phục script mặc định thành công!", "success");
            } catch (err) {
                showStatus("Lỗi khi tải lại script mặc định!", "danger");
            }
        }
    });

    // ==========================================
    // UTILITIES (THÔNG BÁO TOAST NỔI TOÀN CỤC)
    // ==========================================
    const globalToast = document.getElementById("global-toast");
    let toastTimeout = null;

    function showStatus(text, type) {
        if (toastTimeout) clearTimeout(toastTimeout);
        
        globalToast.innerText = text;
        
        // Cấu hình màu nền tùy theo loại trạng thái (success: xanh, danger: đỏ, info: xanh dương)
        if (type === "success") {
            globalToast.style.backgroundColor = "#4caf50";
        } else if (type === "danger") {
            globalToast.style.backgroundColor = "#f44336";
        } else {
            globalToast.style.backgroundColor = "#2196f3";
        }
        
        globalToast.classList.add("show");
        
        if (type !== "info") {
            toastTimeout = setTimeout(() => {
                globalToast.classList.remove("show");
            }, 3000);
        }
    }

    function clearStatus() {
        globalToast.classList.remove("show");
    }
});
