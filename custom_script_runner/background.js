// Custom UserScript Runner - Background Service Worker (Manifest V3)

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
  }
});
