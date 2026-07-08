// Tu dong khoa lai extension khi khoi dong trinh duyet neu khong tich chon "Ghi nho mat khau"
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(["extension_unlocked_session_only"], (result) => {
    if (result.extension_unlocked_session_only === true) {
      chrome.storage.local.set({ extension_unlocked: false });
      chrome.storage.local.remove("extension_unlocked_session_only");
    }
  });
});

chrome.runtime.onInstalled.addListener((details) => {
  // Chi khoa neu day la lan dau tien cai dat extension moi tinh (khong khoa khi cap nhat/reload dev)
  if (details.reason === "install") {
    chrome.storage.local.set({ extension_unlocked: false });
  }
});

// Lang nghe tin nhan tu content script (loader.js) hoac options page (options.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "call_gas") {
    const { method, apiUrl, actionName, data, pcName } = message;
    let targetUrl = apiUrl;
    
    if (method === "GET") {
      const priority = (data && data.priority) || "1";
      targetUrl += `?action=${actionName}&pc=${encodeURIComponent(pcName || "")}&priority=${encodeURIComponent(priority)}`;
    }

    const options = {
      method: method,
      headers: {}
    };

    if (method !== "GET") {
      options.headers["Content-Type"] = "text/plain";
      options.body = JSON.stringify(Object.assign({ action: actionName, pc: pcName || "" }, data));
    }

    fetch(targetUrl, options)
      .then(response => response.json())
      .then(res => {
        // TỰ ĐỘNG ĐỒNG BỘ WEBAPP URL TỪ SHEET NẾU CÓ THAY ĐỔI
        if (res.activeWebappUrl && res.activeWebappUrl.trim() !== "") {
          chrome.storage.local.get("google_apps_script_url", (result) => {
            if (result.google_apps_script_url !== res.activeWebappUrl) {
              const newUrl = res.activeWebappUrl;
              chrome.storage.local.set({ google_apps_script_url: newUrl }, () => {
                console.log("[VTDAuto] Tu dong dong bo Webapp URL moi tu Google Sheet:", newUrl);
                chrome.tabs.query({ url: ["https://spx.shopee.vn/*", "https://*.spxexpress.com/*"] }, (tabs) => {
                  if (tabs) {
                    tabs.forEach((tab) => {
                      if (tab.id) {
                        chrome.tabs.sendMessage(tab.id, {
                          action: "set_shopee_status",
                          apiUrl: newUrl
                        }, () => {
                          const err = chrome.runtime.lastError;
                        });
                      }
                    });
                  }
                });
              });
            }
          });
        }
        sendResponse({ success: true, data: res });
      })
      .catch(error => {
        sendResponse({ success: false, error: error.message });
      });

    return true; // Giu ket noi de phan hoi bat dong bo
  } else if (message.action === "open_tab") {
    const createTabWithRetry = (attempt = 1) => {
      chrome.tabs.create({
        url: message.url,
        active: message.active !== false
      }, (tab) => {
        if (chrome.runtime.lastError) {
          const errMsg = chrome.runtime.lastError.message;
          console.warn(`[VTDAuto] Lỗi tạo tab (Lần thử ${attempt}):`, errMsg);
          
          // Thử lại nếu lỗi liên quan tới việc kéo thả tab hoặc trình duyệt đang bận
          if ((errMsg.includes("dragging") || errMsg.includes("edited") || errMsg.includes("busy") || errMsg.includes("drag")) && attempt < 5) {
            console.log(`[VTDAuto] Đang thử lại tạo tab sau 1 giây...`);
            setTimeout(() => createTabWithRetry(attempt + 1), 1000);
          } else {
            sendResponse({ success: false, error: errMsg });
          }
        } else {
          console.log("[VTDAuto] Đã tạo tab thành công:", tab.id);
          sendResponse({ success: true });
        }
      });
    };

    try {
      createTabWithRetry();
    } catch (err) {
      console.error("[VTDAuto] Exception khi tạo tab:", err.message);
      sendResponse({ success: false, error: err.message });
    }
    return true;
  } else if (message.action === "activate_tab") {
    if (sender.tab && sender.tab.id && sender.tab.windowId) {
      chrome.windows.get(sender.tab.windowId, (win) => {
        // Lưu lại trạng thái ban đầu để khôi phục chính xác (mặc định là normal nếu trước đó bị minimized)
        const originalState = win.state === "minimized" ? "normal" : win.state;
        const updateInfo = { focused: true, drawAttention: true };
        
        // Mẹo ép Windows đưa Chrome lên Foreground: Thu nhỏ (minimize) -> Khôi phục lại trạng thái cũ (restore)
        chrome.windows.update(sender.tab.windowId, { state: "minimized" }, () => {
          setTimeout(() => {
            chrome.windows.update(sender.tab.windowId, { state: originalState, focused: true }, () => {
              chrome.tabs.update(sender.tab.id, { active: true }, () => {
                sendResponse({ success: true });
              });
            });
          }, 150); // Chờ 150ms để Windows thực hiện xong hiệu ứng thu nhỏ trước khi mở lại
        });
      });
    } else {
      sendResponse({ success: false, error: "No tab found" });
    }
  } else if (message.action === "close_tab") {
    if (sender.tab && sender.tab.id) {
      chrome.tabs.remove(sender.tab.id, () => {
        if (chrome.runtime.lastError) {
          console.warn("[VTDAuto] Cảnh báo lỗi đóng tab:", chrome.runtime.lastError.message);
        }
        sendResponse({ success: true });
      });
    } else {
      sendResponse({ success: false, error: "No tab to close" });
    }
    return true;
  }
});

// Keep alive port listener to prevent service worker suspension
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "keepAlive") {
    port.onMessage.addListener((msg) => {
      // Respond to ping to keep the channel active
      if (msg && msg.type === "ping") {
        try {
          port.postMessage({ type: "pong" });
        } catch (e) {}
      }
    });
  }
});

// Định kỳ quét các tab Shopee cứ mỗi 15 giây để chống ngủ đông/giải phóng tab của Chrome
setInterval(() => {
  chrome.tabs.query({ url: ["https://spx.shopee.vn/*", "https://*.spxexpress.com/*"] }, (tabs) => {
    if (!tabs) return;
    tabs.forEach((tab) => {
      if (tab.id) {
        if (tab.discarded) {
          console.log(`[VTDAuto] Phat hien tab ${tab.url} bi discarded. Tien hanh reload...`);
          chrome.tabs.reload(tab.id);
        } else {
          // Gui tin nhan danh thuc tab
          chrome.tabs.sendMessage(tab.id, { action: "wake_up" }, () => {
            // Bo qua loi neu tab chua san sang nhan tin nhan
            const err = chrome.runtime.lastError;
          });
        }
      }
    });
  });
}, 15000);
