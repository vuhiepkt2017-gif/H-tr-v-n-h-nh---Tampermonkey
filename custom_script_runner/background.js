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
      targetUrl += `?action=${actionName}&pc=${encodeURIComponent(pcName || "")}`;
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
        sendResponse({ success: true, data: res });
      })
      .catch(error => {
        sendResponse({ success: false, error: error.message });
      });

    return true; // Giu ket noi de phan hoi bat dong bo
  } else if (message.action === "open_tab") {
    chrome.tabs.create({
      url: message.url,
      active: message.active !== false
    }, () => {
      sendResponse({ success: true });
    });
    return true;
  } else if (message.action === "activate_tab") {
    if (sender.tab && sender.tab.id) {
      // Chỉ kích hoạt tab hoạt động bên trong cửa sổ của nó, KHÔNG đưa cửa sổ lên trên đầu (tránh làm phiền người dùng)
      chrome.tabs.update(sender.tab.id, { active: true }, () => {
        sendResponse({ success: true });
      });
    } else {
      sendResponse({ success: false, error: "No tab found" });
    }
    return true;
  }
});
