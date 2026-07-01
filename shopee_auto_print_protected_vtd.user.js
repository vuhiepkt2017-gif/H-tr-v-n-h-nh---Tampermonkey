// ==UserScript==
// @name         Hỗ trợ VTDStadio
// @namespace    http://tampermonkey.net/
// @version      6.1
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


    const _0xarr = [
        'dXNlIHN0cmljdA==',
        'dW5kZWZpbmVk',
        'dW5kZWZpbmVk',
        'dW5kZWZpbmVk',
        'W1ZUREF1dG9dIE1lbnUgQ29tbWFuZCByZWdpc3RlcmVkOg==',
        'dW5kZWZpbmVk',
        'U0hPUEVFX09QRU5fVEFCX1JFUVVFU1Q=',
        'Kg==',
        'dW5kZWZpbmVk',
        'cmVxXw==',
        'bWVzc2FnZQ==',
        'U0hPUEVFX1hNTEhUVFBfUkVTUE9OU0U=',
        'bWVzc2FnZQ==',
        'TOG7l2kga+G6v3QgbuG7kWk=',
        'U0hPUEVFX1hNTEhUVFBfUkVRVUVTVA==',
        'Kg==',
        'dW5kZWZpbmVk',
        'SW4gQmlsbA==',
        'aHR0cHM6Ly9zcHguc2hvcGVlLnZuLyMvYXdiUHJpbnQvaW5kZXg=',
        'YXdiUHJpbnQ=',
        'UXXDqXQgVE8=',
        'aHR0cHM6Ly9zcHguc2hvcGVlLnZuLyMvZ2VuZXJhbC10by1tYW5hZ2VtZW50',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'SW4gVE8=',
        'aHR0cHM6Ly9zcHguc2hvcGVlLnZuLyMvcGFja01hbmFnZW1lbnQvc3RhcnRQYWNrTm9MYWJlbD9vcGVyYXRvckludmFsaWQ9dHJ1ZSZpZD1UTzIwMjYwNjEzUTBOUkombW9kdWxlPWdlbmVyYWxQYWNrVE9MaXN0',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'Q2h1eeG7g24gUGljaw==',
        'aHR0cHM6Ly9zcHguc2hvcGVlLnZuLyMvcGlja3VwVGFzay9saXN0',
        'cGlja3VwVGFzay9saXN0',
        '',
        'Pw==',
        'dGFiX2luc3RhbmNlX2lk',
        'aW5zdF8=',
        'Xw==',
        'dGFiX2luc3RhbmNlX2lk',
        'bGFzdF9wdWxzZV8=',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'YmVmb3JldW5sb2Fk',
        'dW5sb2Fk',
        'cHJldmlldw==',
        'cHJpbnQ=',
        'SEFZX0RJRU5fVVJMX1dFQl9BUFBfQ1VBX0JBTl9WQU9fREFZ',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'c2hvcGVlX3BjX25hbWU=',
        'UENfMDE=',
        'YXV0b19wcmludF9lbmFibGVk',
        'dHJ1ZQ==',
        '',
        '',
        'YXdiUHJpbnQ=',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzaw==',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'cGVuZGluZ18=',
        'dHJ1ZQ==',
        'Z2xvYmFsX2F1dG9tYXRpb25fc2luZ2xlX2xvY2s=',
        'Z2xvYmFsX2F1dG9tYXRpb25fbG9ja190eXBl',
        'Z2xvYmFsX2F1dG9tYXRpb25fbG9ja190aW1l',
        'MA==',
        'bG9ja2Vk',
        'Z2xvYmFsX2F1dG9tYXRpb25fc2luZ2xlX2xvY2s=',
        'Z2xvYmFsX2F1dG9tYXRpb25fbG9ja190eXBl',
        'Z2xvYmFsX2F1dG9tYXRpb25fbG9ja190aW1l',
        'Z2xvYmFsX2F1dG9tYXRpb25fbG9ja190eXBl',
        'Z2xvYmFsX2F1dG9tYXRpb25fbG9ja190aW1l',
        'Q8OgaSDEkeG6t3QgVVJMIEdvb2dsZSBXZWIgQXBw',
        'Tmjhuq1wIFVSTCBXZWIgQXBwIGPhu6dhIGLhuqFuOg==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'xJDDoyBsxrB1IFVSTCBXZWIgQXBwIG3hu5tpIQ==',
        'ZGl2',
        'c2hvcGVlLWF1dG8tcHJpbnQtbGF1bmNoZXI=',
        '4peA',
        'cG9zaXRpb246Zml4ZWQ7IHRvcDo1MCU7IHJpZ2h0OjA7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOyB6LWluZGV4Ojk5OTk5OyBiYWNrZ3JvdW5kLWNvbG9yOiNmZjU3MjI7IGNvbG9yOndoaXRlOyB3aWR0aDoyMnB4OyBoZWlnaHQ6NDVweDsgYm9yZGVyLXJhZGl1czoyMnB4IDAgMCAyMnB4OyBib3gtc2hhZG93Oi0ycHggMCA4cHggcmdiYSgwLDAsMCwwLjIpOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGFsaWduLWl0ZW1zOmNlbnRlcjsgY3Vyc29yOnBvaW50ZXI7IGZvbnQtc2l6ZToxMXB4OyBmb250LXdlaWdodDpib2xkOyB1c2VyLXNlbGVjdDpub25lOyBwYWRkaW5nLXJpZ2h0OjJweDs=',
        'ZGl2',
        'c2hvcGVlLWF1dG8tcHJpbnQtcGFuZWw=',
        'cG9zaXRpb246Zml4ZWQ7IGJvdHRvbToyMHB4OyByaWdodDoyMHB4OyB6LWluZGV4Ojk5OTk5OyBiYWNrZ3JvdW5kLWNvbG9yOiMxZTFlMjQ7IGNvbG9yOndoaXRlOyBwYWRkaW5nOjE1cHg7IGJvcmRlci1yYWRpdXM6MTJweDsgYm94LXNoYWRvdzowIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4zKTsgZm9udC1mYW1pbHk6c3lzdGVtLXVpLCBzYW5zLXNlcmlmOyB3aWR0aDozMTBweDsgZm9udC1zaXplOjEzcHg7IGJvcmRlcjoxcHggc29saWQgIzMzMzsgZGlzcGxheTpub25lOw==',
        'bm9uZQ==',
        'ZmxleA==',
        'YmxvY2s=',
        'bm9uZQ==',
        'CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogNXB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDsgcGFkZGluZy1ib3R0b206IDhweDsiPgogICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT0iY29sb3I6ICNmZjU3MjI7IGZvbnQtc2l6ZTogMTRweDsiPkjhu5cgdHLhu6M8L3N0cm9uZz4KICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyI+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9ImFwLWJhZGdlIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NzsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAycHggNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGZvbnQtc2l6ZTogOXB4OyBmb250LXdlaWdodDogYm9sZDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgY3Vyc29yOiBwb2ludGVyOyI+VOG6r3Q8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9ImFwLWNsb3NlLWJ0biIgc3R5bGU9ImNvbG9yOiAjYWFhOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDAgNHB4OyI+w5c8L3NwYW4+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgaWQ9ImFwLWNvbnRlbnQtd3JhcHBlciI+CiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tYm90dG9tOiA4cHg7IG1hcmdpbi10b3A6IDEwcHg7Ij4KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA0cHg7IGNvbG9yOiAjYWFhOyI+TGluayBHb29nbGUgV2ViIEFwcDo8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9ImFwLXVybC1zYXZlZC12aWV3IiBzdHlsZT0iZGlzcGxheTogbm9uZTsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTM1OyBwYWRkaW5nOiA2cHggMTBweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjNDQ0OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJhcC11cmwtc3RhdHVzIiBzdHlsZT0iY29sb3I6ICM0Y2FmNTA7IGZvbnQtd2VpZ2h0OiBib2xkOyBsZXR0ZXItc3BhY2luZzogM3B4OyI+KioqPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0iYXAtZWRpdC11cmwtYnRuIiBzdHlsZT0iY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEycHg7Ij7inI/vuI88L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0iYXAtdXJsLWVkaXQtdmlldyIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iYXAtdXJsLWlucHV0IiBwbGFjZWhvbGRlcj0iaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy8uLi4vZXhlYyIgc3R5bGU9IndpZHRoOiA5MyU7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjNTU1OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTM1OyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMTFweDsiIHZhbHVlPSI=',
        'Ij4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMTBweDsiPgogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT0iZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDRweDsgY29sb3I6ICNhYWE7Ij5Uw6puIE3DoXkgVMOtbmggKFBDIE5hbWUpOjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJhcC1wYy1pbnB1dCIgc3R5bGU9IndpZHRoOiA5MyU7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjNTU1OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTM1OyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMTFweDsiIHZhbHVlPSI=',
        'Ij4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7Ij4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJhcC1zYXZlLXVybCIgc3R5bGU9ImZsZXg6IDE7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IGNvbG9yOiB3aGl0ZTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogYm9sZDsiPkzGsHU8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJhcC10b2dnbGUtYnRuIiBzdHlsZT0iZmxleDogMS41OyBwYWRkaW5nOiA2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyBjb2xvcjogd2hpdGU7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7Ij5C4bqvdCDEkeG6p3UgY2jhuqF5PC9idXR0b24+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9Im1hcmdpbi1ib3R0b206IDEwcHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0OyBwYWRkaW5nLXRvcDogOHB4OyI+CiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNnB4OyBjb2xvcjogI2ZmOTgwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Ij5UcuG6oW5nIHRow6FpIGPDoWMgVGFiIChBdXRvLU9wZW4pOjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgZ2FwOiA2cHg7IiBpZD0iYXAtdGFicy1zdGF0dXMtY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUYWIgc3RhdHVzIGl0ZW1zIHdpbGwgYmUgcmVuZGVyZWQgaGVyZSBkeW5hbWljYWxseSAtLT4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJhcC1vcGVuLWFsbC10YWJzLWJ0biIgc3R5bGU9IndpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA4cHg7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBib3JkZXI6IDFweCBkYXNoZWQgI2ZmOTgwMDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC4xKTsgY29sb3I6ICNmZjk4MDA7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTFweDsiPgogICAgICAgICAgICAgICAgICAgICAgICDwn5qAIE3hu58gdOG6pXQgY+G6oyBjw6FjIFRhYiBob+G6oXQgxJHhu5luZwogICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjE2OyBwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMXB4OyBtYXgtaGVpZ2h0OiA4MHB4OyBvdmVyZmxvdy15OiBhdXRvOyBib3JkZXI6IDFweCBzb2xpZCAjMjIyOyIgaWQ9ImFwLWxvZy1ib3giPgogICAgICAgICAgICAgICAgICAgIFtI4buHIHRo4buRbmddIMSQYW5nIHThuqNpLi4uCiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAg',
        'c3R5bGU=',
        'CiAgICAgICAgICAgICNzaG9wZWUtYXV0by1wcmludC1wYW5lbCwgI3Nob3BlZS1hdXRvLXByaW50LWxhdW5jaGVyIHsKICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7CiAgICAgICAgICAgIH0KICAgICAgICA=',
        'LnByZXZpZXctY29udGFpbmVyLCAucHJpbnQtcHJldmlldywgaWZyYW1lW3NyYyo9InByaW50Il0=',
        'c2hvcGVlLWF1dG8tcHJpbnQtcGFuZWw=',
        'c2hvcGVlLWF1dG8tcHJpbnQtbGF1bmNoZXI=',
        'bm9uZQ==',
        'aGlkZGVu',
        'MA==',
        'MA==',
        'bm9uZQ==',
        'bm9uZQ==',
        'MQ==',
        'YXV0bw==',
        'bm9uZQ==',
        'MQ==',
        'YXV0bw==',
        'YXAtbG9nLWJveA==',
        'YXAtYmFkZ2U=',
        'YXAtdG9nZ2xlLWJ0bg==',
        'YXAtdXJsLWlucHV0',
        'YXAtcGMtaW5wdXQ=',
        'YXAtc2F2ZS11cmw=',
        'YXAtY2xvc2UtYnRu',
        'YXAtY29udGVudC13cmFwcGVy',
        'YXAtdXJsLXNhdmVkLXZpZXc=',
        'YXAtdXJsLWVkaXQtdmlldw==',
        'YXAtZWRpdC11cmwtYnRu',
        'YXAtdXJsLXN0YXR1cw==',
        'YXAtdGFicy1zdGF0dXMtY29udGFpbmVy',
        'YXAtb3Blbi1hbGwtdGFicy1idG4=',
        'Ww==',
        'XSA=',
        'PGJyPg==',
        'PGJyPg==',
        'PGJyPg==',
        'xJBBTkcgQ0jhuqBZ',
        'IzRjYWY1MA==',
        'VOG6oW0gZOG7q25n',
        'I2Y0NDMzNg==',
        'VOG6rlQ=',
        'Izc3Nzc3Nw==',
        'QuG6r3QgxJHhuqd1IGNo4bqheQ==',
        'IzIxOTZmMw==',
        'bm9uZQ==',
        'ZmxleA==',
        'Kioq',
        'YmxvY2s=',
        'bm9uZQ==',
        'bGFzdF9wdWxzZV8=',
        'dGFiX2luc3RhbmNlX2lkXw==',
        '',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'ZGl2',
        'ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiA0cHggNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJhY2tncm91bmQtY29sb3I6IA==',
        'cmdiYSg3NiwgMTc1LCA4MCwgMC4xNSk=',
        'cmdiYSgyNDQsIDY3LCA1NCwgMC4xNSk=',
        'OyBib3JkZXI6IDFweCBzb2xpZCA=',
        'IzRjYWY1MA==',
        'I2Y0NDMzNg==',
        'OyBmb250LXNpemU6IDExcHg7',
        'CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9ImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjog',
        'IzgxYzc4NA==',
        'I2U1NzM3Mw==',
        'OyI+',
        'PC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPSJmb250LXNpemU6IDlweDsgcGFkZGluZzogMXB4IDRweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiA=',
        'IzRjYWY1MA==',
        'I2Y0NDMzNg==',
        'OyBjb2xvcjogd2hpdGU7Ij4KICAgICAgICAgICAgICAgICAgICAgICAg',
        'TeG7nw==',
        'VOG6r3Q=',
        'CiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAg',
        'cG9pbnRlcg==',
        'QuG6pW0gxJHhu4MgbeG7nyB0YWIg',
        '',
        'Y2xpY2s=',
        'dW5kZWZpbmVk',
        'X2JsYW5r',
        'cGlja3VwVGFzaw==',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbFBhY2tUT0xpc3Q=',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'bWFudWFs',
        'c2VxX29wZW5fcXVldWU=',
        'bWFudWFs',
        'W03hu58gVGFiXSBYw7NhIHF1ZXVlIGPFqSwgYuG6r3QgxJHhuqd1IG3hu58gdGFiIG3hu5tpLi4u',
        'c2VxX29wZW5fY2hhaW5fc3RhcnQ=',
        'MA==',
        'W03hu58gVGFiXSBDaHXhu5dpIG3hu58gdGFiIGPFqSBi4buLIHRyZW8gcXXDoSA1IHBow7p0LiBU4bqhbyBt4bubaS4uLg==',
        'bWFudWFs',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'bWFudWFs',
        'W03hu58gVGFiXSBU4bqldCBj4bqjIGPDoWMgdGFiIMSR4buBdSDEkWFuZyBob+G6oXQgxJHhu5luZyBy4buTaSE=',
        'c21hcnRfcmVsb2FkX3F1ZXVl',
        'W03hu58gVGFiXSDilrYgQuG6r3QgxJHhuqd1IG3hu58gdHXhuqduIHThu7Eg',
        'IHRhYjog',
        'IOKGkiA=',
        '',
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'b3BlbmluZw==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'c2VxX29wZW5fY2hhaW5fc3RhcnQ=',
        'bGFzdF9vcGVuX2F0dGVtcHRf',
        'W03hu58gVGFiXSDwn5SEIMSQYW5nIOG7nyB0YWIgxJHhuqd1IHRpw6puICg=',
        'KSAtIHRp4bq/biBow6BuaCByZWxvYWQuLi4=',
        'W03hu58gVGFiXSDwn5SEIMSQYW5nIG3hu58gdGFiOiA=',
        'Li4u',
        'dW5kZWZpbmVk',
        'X2JsYW5r',
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'c2VxX29wZW5fY2hhaW5fc3RhcnQ=',
        'c2VxX29wZW5fcmV0cnk=',
        'c2VxX29wZW5fcXVldWU=',
        'W10=',
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'b3BlbmluZw==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'bGFzdF9vcGVuX2F0dGVtcHRf',
        'c2VxX29wZW5fcmV0cnk=',
        'W03hu58gVGFiXSDwn5SEIMSQYW5nIOG7nyB0YWIgdGnhur9wIHRoZW8gKA==',
        'KSAtIHRp4bq/biBow6BuaCByZWxvYWQuLi4=',
        'W03hu58gVGFiXSDinqEgTeG7nyB0YWIgdGnhur9wOiA=',
        'Li4u',
        'dW5kZWZpbmVk',
        'X2JsYW5r',
        'W03hu58gVGFiXSDinIUgVOG6pXQgY+G6oyBjw6FjIHRhYiDEkcOjIMSRxrDhu6NjIG3hu58gdsOgIHPhurVuIHPDoG5nIGhv4bqhdCDEkeG7mW5nIQ==',
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'b3BlbmluZw==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'MA==',
        'W03hu58gVGFiXSDinJMgVGFiIA==',
        'IMSRw6MgbG9hZCDEkeG6p3kgxJHhu6cgdsOgIHPhurVuIHPDoG5nIQ==',
        'c2VxX29wZW5fcmV0cnk=',
        'MA==',
        'W03hu58gVGFiXSDimqAgVGFiIA==',
        'IGxvYWQgcXXDoSA0NXMuIFRo4butIHJlbG9hZCBs4bqhaS4uLg==',
        'c2VxX29wZW5fcmV0cnk=',
        'MQ==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'W03hu58gVGFiXSDinJcgVGFiIA==',
        'IGtow7RuZyB0aOG7gyBsb2FkLiBC4buPIHF1YS4uLg==',
        'c2VxX29wZW5fcmV0cnk=',
        'c2VxX29wZW5fcXVldWU=',
        'c21hcnRfcmVsb2FkX3F1ZXVl',
        '',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'bGFzdF9vcGVuX2F0dGVtcHRf',
        'MA==',
        'W0jhu4cgdGjhu5FuZ10gUGjDoXQgaGnhu4duIHRhYiA=',
        'IGLhu4sgxJHDs25nIGLEg25nLiDEkGFuZyBrw61jaCBob+G6oXQgKFVuZnJlZXplKSBs4bqhaSB0YWIuLi4=',
        'bGFzdF9vcGVuX2F0dGVtcHRf',
        'dW5kZWZpbmVk',
        'X2JsYW5r',
        'W0jhu4cgdGjhu5FuZ10gUGjDoXQgaGnhu4duIHRoaeG6v3UgdGFiIHRo4buxYyBz4buxLiBLaOG7n2kgdOG6oW8gbeG7nyB0YWIgdHXhuqduIHThu7EuLi4=',
        'YXV0bw==',
        'd2FrZUxvY2s=',
        'W0No4buRbmcgbmfhu6ddIFRyw6xuaCBkdXnhu4d0IGtow7RuZyBo4buXIHRy4bujIFdha2UgTG9jayBBUEku',
        'c2NyZWVu',
        'W0No4buRbmcgbmfhu6ddIMSQw6Mga8OtY2ggaG/huqF0IFNjcmVlbiBXYWtlIExvY2su',
        'W0No4buRbmcgbmfhu6ddIFdha2UgTG9jayBlcnJvcjo=',
        'W0No4buRbmcgbmfhu6ddIMSQw6MgdOG6r3QgU2NyZWVuIFdha2UgTG9jay4=',
        'Y2xpY2s=',
        'a2V5ZG93bg==',
        'bW91c2Vkb3du',
        'cG9pbnRlcmRvd24=',
        'dG91Y2hzdGFydA==',
        'dmlzaWJpbGl0eWNoYW5nZQ==',
        'dmlzaWJsZQ==',
        'Y2xpY2s=',
        'Y2xpY2s=',
        'YmxvY2s=',
        'bm9uZQ==',
        'Y2xpY2s=',
        'UENfMDE=',
        'SEFZX0RJRU5fVVJM',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'xJDDoyBsxrB1IGPhuqV1IGjDrG5oLiBQQzog',
        '',
        'xJDDoyBsxrB1IGPhuqV1IGjDrG5oIHRow6BuaCBjw7RuZyE=',
        'VnVpIGzDsm5nIMSRaeG7gW4gVVJMIGjhu6NwIGzhu4ch',
        'SEFZX0RJRU5fVVJM',
        'VnVpIGzDsm5nIGPhuqV1IGjDrG5oIFVSTCBHb29nbGUgQXBwcyBTY3JpcHQgV2ViIEFwcCB0csaw4bubYyE=',
        'YXV0b19wcmludF9lbmFibGVk',
        'dHJ1ZQ==',
        'ZmFsc2U=',
        'S2jhu59pIMSR4buZbmcgaOG7hyB0aOG7kW5nIMSRYSB0YWIgc29uZyBzb25nLi4u',
        'xJDDoyB04bqhbSBk4burbmcgaOG7hyB0aOG7kW5nLg==',
        'Y2xpY2s=',
        'Y2xpY2s=',
        'Y2xpY2s=',
        'Y2xpY2s=',
        'bW91c2VlbnRlcg==',
        'bW91c2Vtb3Zl',
        'Y2xpY2s=',
        'aW5wdXQ=',
        'bW91c2VsZWF2ZQ==',
        'dmFsdWU=',
        'aW5wdXQ=',
        'Y2hhbmdl',
        'a2V5ZG93bg==',
        'a2V5cHJlc3M=',
        'a2V5dXA=',
        'RW50ZXI=',
        'RW50ZXI=',
        'a2V5Q29kZQ==',
        'd2hpY2g=',
        '',
        'SEFZX0RJRU5fVVJM',
        'Q2jGsGEgY+G6pXUgaMOsbmggQVBJIFVSTA==',
        '',
        'R0VU',
        '',
        'P2FjdGlvbj0=',
        'JnBjPQ==',
        '',
        '',
        'SOG6v3QgdGjhu51pIGdpYW4gY2jhu50gKA==',
        'cykga2hpIGfhu41pIA==',
        'IChM4bqnbiA=',
        'KQ==',
        'TOG7l2kgcGFyc2UgSlNPTjog',
        'LiBO4buZaSBkdW5nIHBo4bqjbiBo4buTaTog',
        '',
        'TOG7l2kga+G6v3QgbuG7kWkgbeG6oW5nIMSR4bq/biA=',
        '',
        'R01feG1saHR0cFJlcXVlc3QgdGltZW91dCBraGkgZ+G7jWkg',
        '',
        'R0VU',
        'Q29udGVudC1UeXBl',
        'dGV4dC9wbGFpbg==',
        '',
        'QVBJIGNhbGwg',
        'IGZhaWxlZDog',
        'LiBSZXRyeWluZyBpbiAycy4uLg==',
        '',
        'UGjDoXQgaGnhu4duIHRhYiDEkWFuZyBjaOG6oXkg4bqpbi4gxJBhbmcga8OtY2ggaG/huqF0IHRhYiBsw6puIHRyxrDhu5tjIGtoaSB0aOG7sWMgaGnhu4duIGluLi4u',
        'U0hPUEVFX0FDVElWQVRFX1RBQl9SRVFVRVNU',
        'Kg==',
        '',
        'YXdiUHJpbnQ=',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmc=',
        'c3VjY2Vzcw==',
        'Cg==',
        'cGVuZGluZ19hd2JQcmludA==',
        'dHJ1ZQ==',
        'YXdiUHJpbnQ=',
        'YXdiUHJpbnQ=',
        'VMOsbSB0aOG6pXkgbMO0IGfhu5NtIA==',
        'IG3DoyDEkeG7gyBpbi4=',
        'xJDDoyBpbiBsw7QgdGjDoG5oIGPDtG5nOiA=',
        'LCA=',
        '',
        'UE9TVA==',
        'dXBkYXRlX2NvZGVfc3RhdHVz',
        'xJDDoyBpbg==',
        'W0luIEJpbGxdIMSQw6MgY+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkgJ8SQw6MgaW4nIGNobyBtw6M6IA==',
        '',
        'W0luIEJpbGxdIEzhu5dpIGPhuq1wIG5o4bqtdCB0cuG6oW5nIHRow6FpIGNobyBtw6Mg',
        'OiA=',
        '',
        'VGjhuqV0IGLhuqFpIGtoaSBpbiBsw7Qu',
        'cGVuZGluZ19hd2JQcmludA==',
        'TOG7l2kgaW4gdGjGsOG7nW5nOiA=',
        '',
        'YXdiUHJpbnQ=',
        'dGV4dGFyZWE=',
        'aW5wdXRbdHlwZT0idGV4dCJd',
        'S2jDtG5nIHTDrG0gdGjhuqV5IMO0IG5o4bqtcCBtw6MgduG6rW4gxJHGoW4h',
        'Cg==',
        'aW5wdXQ=',
        'Y2hhbmdl',
        'aW5zZXJ0VGV4dA==',
        'aW5wdXQ=',
        'YnV0dG9u',
        '',
        'Y29uZmlybQ==',
        '',
        'U1BY',
        'Vk4=',
        'VEVUUw==',
        'dGQsIHNwYW4sIGRpdg==',
        'LmVsLWRpYWxvZywgLm1vZGFsLWNvbnRlbnQsIC5lbC1tZXNzYWdlLWJveCwgW2NsYXNzKj0iZGlhbG9nIl0sIFtjbGFzcyo9Im1vZGFsIl0sIFtjbGFzcyo9Im1lc3NhZ2UtYm94Il0=',
        '',
        'Y2FuIG5vdCBmaW5k',
        'a2jDtG5nIHTDrG0gdGjhuqV5',
        'YWxlcnQ=',
        'c3lzdGVt',
        'a2jDtG5nIHThu5NuIHThuqFp',
        'IA==',
        'YnV0dG9u',
        '',
        'b2s=',
        'eMOhYyBuaOG6rW4=',
        'Y29uZmlybQ==',
        'Y2xvc2U=',
        'xJHDs25n',
        'b2s=',
        'W0luIEJpbGxdIFBow6F0IGhp4buHbiBkaWFsb2cgbOG7l2kuIMSQ4bujaSA=',
        'IGdpw6J5IMSR4buDIHThu7EgxJHhu5luZyDEkcOzbmcuLi4=',
        'W0luIEJpbGxdIMSQw6MgY2xpY2sgbsO6dCBPSyDEkcOzbmcgY+G6o25oIGLDoW8u',
        'Cg==',
        'U1lTVEVN',
        'TUVTU0FHRQ==',
        'RklORA==',
        'UE9TVA==',
        'dXBkYXRlX2NvZGVfc3RhdHVz',
        'TcOjIGzhu5dp',
        'W0luIEJpbGxdIMSQw6MgYsOhbyBjw6FvIHRow6BuaCBjw7RuZyBtw6MgbOG7l2k6ICc=',
        'JyA9ICdNw6MgbOG7l2knLg==',
        'W0luIEJpbGxdIEfhurdwIGzhu5dpIGtoaSBn4butaSBiw6FvIGPDoW8gY2hvIA==',
        'OiA=',
        '',
        'W0luIEJpbGxdIFF1w6EgdGjhu51pIGdpYW4gY2jhu50gbuG6oXAgbcOjIHbhuq1uIMSRxqFuIGzDqm4gZ2lhbyBkaeG7h24u',
        'YnV0dG9uLCBzcGFuLCBh',
        '',
        'UHJpbnQ=',
        'LmVsLWRpYWxvZywgLm1vZGFsLWNvbnRlbnQsIFtjbGFzcyo9ImRpYWxvZyJdLCBbY2xhc3MqPSJtb2RhbCJd',
        'YnV0dG9u',
        '',
        'UHJpbnQ=',
        'W1RPIFF1w6l0XSDEkGFuZyBxdcOpdCBkYW5oIHPDoWNoIFRPIHThu6sgdHJhbmcgUXXhuqNuIGzDvSBUTy4uLg==',
        'YnV0dG9u',
        'VMOsbSBraeG6v20=',
        'U2VhcmNo',
        'UE9TVA==',
        'Z2V0VE9MaXN0',
        'c3VjY2Vzcw==',
        'W1RPIFF1w6l0XSDEkMOjIMSR4buTbmcgYuG7mSA=',
        'IG3DoyBUTyDEkcOjIHThu5NuIHThuqFpIHThu6sgRXhjZWwu',
        'W1RPIFF1w6l0XSBM4buXaSDEkeG7k25nIGLhu5kgZGFuaCBzw6FjaCBUTyBoaeG7h24gY8OzOiA=',
        '',
        'dGg=',
        'dG8gbnVtYmVy',
        'bcOjIHRv',
        'dHJhbnNmZXIgb3JkZXI=',
        'dG8gaWQ=',
        'b3BlcmF0b3I=',
        'bmfGsOG7nWkgdOG6oW8=',
        'bmfGsOG7nWkgduG6rW4gaMOgbmg=',
        'Y3JlYXRlZCBieQ==',
        'cXVhbnRpdHk=',
        'c+G7kSBsxrDhu6NuZw==',
        'cXR5',
        'c2t1IHF1YW50aXR5',
        'dHI=',
        'dGQ=',
        '',
        '',
        'QA==',
        'c3B4QHNob3BlZS5jb20=',
        'UE9TVA==',
        'YWRkVE8=',
        'c3VjY2Vzcw==',
        'W1RPIFF1w6l0XSDEkMOjIGNvcHkgVE8gbeG7m2k6IA==',
        'IChPcGVyYXRvcjog',
        'LCBRdHk6IA==',
        'KQ==',
        'ZHVwbGljYXRl',
        'W1RPIFF1w6l0XSBUTyA=',
        'IMSRw6MgdOG7k24gdOG6oWkgdHLDqm4gU2hlZXQsIGLhu48gcXVhLg==',
        'W1RPIFF1w6l0XSBBUEkgdHLhuqMgduG7gSBraMO0bmcgdGjDoG5oIGPDtG5nIGNobyA=',
        'OiA=',
        '',
        'W1RPIFF1w6l0XSBM4buXaSDEkeG7k25nIGLhu5kgVE8g',
        'OiA=',
        'LiBT4bq9IHRo4butIGzhuqFpLg==',
        'W1RPIFF1w6l0XSBM4buXaSBxdcOpdCBkYW5oIHPDoWNoOiA=',
        '',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfdG8=',
        'c3VjY2Vzcw==',
        'cGVuZGluZ19zdGFydFBhY2tOb0xhYmVs',
        'dHJ1ZQ==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'W1RPIEluXSBM4bqleSBtw6MgVE8gY+G6p24gaW4gdOG7qyBTaGVldDog',
        '',
        'c3BhbiwgbGFiZWwsIGRpdiwgcA==',
        'dG8gbnVtYmVyOg==',
        'dG8gbnVtYmVy',
        'bcOjIHRvOg==',
        'bcOjIHRv',
        'aW5wdXQ=',
        'aW5wdXQ=',
        '',
        'dG8gbnVtYmVy',
        'bcOjIHRv',
        'cGxlYXNl',
        'dnVpIGzDsm5n',
        'aW5wdXQ=',
        'dGV4dA==',
        'dGV4dA==',
        'c2VhcmNo',
        '',
        'bm9uZQ==',
        'aGlkZGVu',
        'W1RPIEluXSDEkGFuZyBuaOG6rXAgbcOjIFRPOiA=',
        'IHbDoCBuaOG6pW4gRW50ZXIuLi4=',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'W1RPIEluXSDEkMOjIGluIG5ow6NuIHRow6BuaCBjw7RuZyBjaG8g',
        '',
        'UE9TVA==',
        'bWFya190b19wcmludGVk',
        'W1RPIEluXSDEkMOjIMSRw6FuaCBk4bqldSAn',
        'JyA9IMSQw6MgSW4gdHLDqm4gU2hlZXQu',
        'W1RPIEluXSBD4bqjbmggYsOhbzogS2jDtG5nIMSRw6FuaCBk4bqldSDEkcaw4bujYyDEkMOjIEluIGNobyA=',
        'OiA=',
        '',
        'W1RPIEluXSBLaMO0bmcgYuG6pW0gxJHGsOG7o2MgbsO6dCBpbiBuaMOjbiBjaG8g',
        '',
        'W1RPIEluXSBLaMO0bmcgdMOsbSB0aOG6pXkgw7Qgbmjhuq1wIFRPIE51bWJlciB0csOqbiBtw6BuIGjDrG5oIQ==',
        'cGVuZGluZ19zdGFydFBhY2tOb0xhYmVs',
        'TOG7l2kgSW4gVE86IA==',
        '',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'YnV0dG9u',
        'UHJpbnQgTGFiZWw=',
        'SW4gbmjDo24=',
        'SW4gbmjDo24gcGjhu6U=',
        'UHJpbnQ=',
        'c3BhbiwgZGl2LCBh',
        'UHJpbnQgTGFiZWw=',
        'SW4gbmjDo24=',
        'SW4gbmjDo24gcGjhu6U=',
        'UHJpbnQ=',
        'YnV0dG9u',
        'aXMtZGlzYWJsZWQ=',
        'W1RPIEluXSBQaMOhdCBoaeG7h24gbsO6dCBpbiBuaMOjbiBraOG6oyBk4bulbmcuIENsaWNrIG5nYXkh',
        'W1RPIEluXSDEkMOhbmggZOG6pXUgJ8SQw6MgaW4nIHRow6BuaCBjw7RuZyBjaG8g',
        '',
        '',
        'cGlja3VwVGFzay9saXN0',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfY2h1eWVuX3BpY2s=',
        'c3VjY2Vzcw==',
        'cGVuZGluZ19waWNrdXBUYXNr',
        'dHJ1ZQ==',
        'cGlja3VwVGFzaw==',
        'cGlja3VwVGFzaw==',
        'UFVQIA==',
        'IMSRw6MgxJHGsOG7o2MgeOG7rSBsw70gZ+G6p24gxJHDonkgKGTGsOG7m2kgMzBzKS4gQuG7jyBxdWEgdGhhbyB0w6FjIHRyw7luZyBs4bq3cC4=',
        'cGlja3VwVGFzaw==',
        'VMOsbSB0aOG6pXkgbmhp4buHbSB24bulIENodXnhu4NuIFBpY2s6IFBVUD0=',
        'LCBOaOG6rW49',
        'IChH4buRYzog',
        'KQ==',
        'YWxyZWFkeV9iZWxvbmdz',
        'YWxyZWFkeV9iZWxvbmdz',
        'VMOgaSB44bq/IMSRw6MgdGh14buZYyBuaGnhu4dtIHbhu6UgKDExMDkwMTAwMik=',
        'Y2hvIHTDoGkgeOG6vyA=',
        '',
        'xJDDoyBjaHV54buDbiBnaWFvIHRow6BuaCBjw7RuZyBQVVA6IA==',
        'ICg=',
        'KQ==',
        'UE9TVA==',
        'dXBkYXRlX2hhbmRvdmVyX3N0YXR1cw==',
        'xJDDoyBjaHV54buDbg==',
        'W0NodXnhu4NuIFBpY2tdIMSQw6MgZ2hpIG5o4bqtbiB0cuG6oW5nIHRow6FpICfEkMOjIGNodXnhu4NuJyBjaG8g',
        'IHbDoG8gU2hlZXQu',
        'W0NodXnhu4NuIFBpY2tdIEzhu5dpIMSR4buTbmcgYuG7mSB0cuG6oW5nIHRow6FpIHRow6BuaCBjw7RuZyBjaG8g',
        'OiA=',
        '',
        'Q2h1eeG7g24gZ2lhbyB0aOG6pXQgYuG6oWkgdHLDqm4gZ2lhbyBkaeG7h24gU2hvcGVlLg==',
        'UE9TVA==',
        'dXBkYXRlX2hhbmRvdmVyX3N0YXR1cw==',
        'VGjhuqV0IGLhuqFp',
        'W0NodXnhu4NuIFBpY2tdIMSQw6MgY+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkgJ1Ro4bqldCBi4bqhaScgY2hvIA==',
        'IHbDoG8gU2hlZXQu',
        'W0NodXnhu4NuIFBpY2tdIEzhu5dpIMSR4buTbmcgYuG7mSB0cuG6oW5nIHRow6FpIHRo4bqldCBi4bqhaSBjaG8g',
        'OiA=',
        '',
        'cGVuZGluZ19waWNrdXBUYXNr',
        'TOG7l2kgQ2h1eeG7g24gUGljazog',
        '',
        'cGlja3VwVGFzaw==',
        'LmVsLWZvcm0taXRlbSwgW2NsYXNzKj0iZm9ybS1pdGVtIl0=',
        'LmVsLWZvcm0taXRlbV9fbGFiZWwsIGxhYmVs',
        '',
        'cGlja3VwIHBvaW50IGlk',
        'cG9pbnQgaWQ=',
        'bcOjIHB1cA==',
        'aW5wdXQ=',
        'aW5wdXQ=',
        '',
        'cGlja3VwIHBvaW50IGlk',
        'cG9pbnQgaWQ=',
        'S2jDtG5nIHTDrG0gdGjhuqV5IMO0IG5o4bqtcCBi4buZIGzhu41jIFBpY2t1cCBQb2ludCBJRCE=',
        'YnV0dG9u',
        '',
        'U2VhcmNo',
        'VMOsbSBraeG6v20=',
        'xJBhbmcgbOG7jWMgZGFuaCBzw6FjaCB0aGVvIFBVUDog',
        'a2V5ZG93bg==',
        'RW50ZXI=',
        'RW50ZXI=',
        'cGlja3VwVGFzaw==',
        'ZGl2LCBzcGFuLCBw',
        '',
        'bm8gZGF0YQ==',
        'a2jDtG5nIGPDsyBk4buvIGxp4buHdQ==',
        'W0NodXnhu4NuIFBpY2tdIEtow7RuZyB0w6xtIHRo4bqleSBk4buvIGxp4buHdSBjaG8gUFVQOiA=',
        'IChIaeG7g24gdGjhu4sgTm8gRGF0YSku',
        'dHI=',
        'dGQ=',
        'YnV0dG9uLCBzcGFuLCBh',
        '',
        'UmVhc3NpZ24=',
        'UGjDom4gYuG7lSBs4bqhaQ==',
        'Q2h1eeG7g24gZ2lhbw==',
        'W0NodXnhu4NuIFBpY2tdIEPDsyBkw7JuZyBk4buvIGxp4buHdSBj4bunYSBQVVAg',
        'IG5oxrBuZyBraMO0bmcgY8OzIG7DunQgUmVhc3NpZ24gKGNo4buJIGPDsyBWaWV3L0Rpc2FibGUpLg==',
        'YnV0dG9uLCBzcGFuLCBh',
        '',
        'UmVhc3NpZ24=',
        'UGjDom4gYuG7lSBs4bqhaQ==',
        'Q2h1eeG7g24gZ2lhbw==',
        'UGjDoXQgaGnhu4duIGjDoG5nIGNo4budIGNodXnhu4NuIGdpYW8uIMSQYW5nIGNsaWNrIFJlYXNzaWduLi4u',
        'cGlja3VwVGFzaw==',
        'LmVsLWRpYWxvZywgLm1vZGFsLWNvbnRlbnQsIFtjbGFzcyo9ImRpYWxvZyJdLCBbY2xhc3MqPSJtb2RhbCJd',
        '',
        'UmVhc3NpZ24gRHJpdmVy',
        'RHJpdmVy',
        'UGjDom4gYuG7lSBs4bqhaQ==',
        'Q2h1eeG7g24gZ2lhbw==',
        'LmVsLWZvcm0taXRlbSwgW2NsYXNzKj0iZm9ybS1pdGVtIl0=',
        'LmVsLWZvcm0taXRlbV9fbGFiZWwsIGxhYmVs',
        '',
        'ZHJpdmVy',
        'dMOgaSB44bq/',
        'aW5wdXQ=',
        'aW5wdXQ=',
        '',
        'c2VsZWN0',
        'ZHJpdmVy',
        'dMOgaSB44bq/',
        'LmVsLXNlbGVjdA==',
        'cmVhZG9ubHk=',
        'xJDDoyBjbGljayBt4bufIMO0IGNo4buNbiBEcml2ZXIsIMSR4bujaSAyLjJzIMSR4buDIGxvYWQgZGFuaCBzw6FjaC4uLg==',
        'cGlja3VwVGFzaw==',
        'SU5QVVQ=',
        'cmVhZG9ubHk=',
        'ZnVuY3Rpb24=',
        '',
        'aW5wdXQ=',
        'aW5zZXJ0VGV4dA==',
        'aW5wdXQ=',
        'Y2hhbmdl',
        'a2V5ZG93bg==',
        'RW50ZXI=',
        'a2V5dXA=',
        'RW50ZXI=',
        'xJDDoyBkw6FuIG3DoyB0w6BpIHjhur86IA==',
        'LCDEkeG7o2kgZHJvcGRvd24gdGFpIGRhbmggc2FjaC4uLg==',
        'bGksIHNwYW4sIGRpdiwgcCwgb3B0aW9u',
        '',
        'ZWwtc2VsZWN0LWRyb3Bkb3duX19pdGVt',
        'LmVsLXNlbGVjdC1kcm9wZG93bg==',
        'W2NsYXNzKj0iZHJvcGRvd24iXQ==',
        'TEk=',
        '',
        'LmVsLXNlbGVjdC1kcm9wZG93bg==',
        'W2NsYXNzKj0iZHJvcGRvd24iXQ==',
        'TEk=',
        '',
        'xJDDoyBjaOG7jW4gdMOgaSB44bq/IHThu6sgZHJvcGRvd246IA==',
        'YnV0dG9u',
        '',
        'Q29uZmlybQ==',
        'WMOhYyBuaOG6rW4=',
        'T0s=',
        'xJDDoyBuaOG6pW4gWMOhYyBuaOG6rW4gY2h1eeG7g24gZ2lhbyB0w6BpIHjhur8uIMSQYW5nIGtp4buDbSB0cmEga+G6v3QgcXXhuqMgcGjhuqNuIGjhu5NpLi4u',
        'LmVsLW1lc3NhZ2UsIC5lbC1ub3RpZmljYXRpb24sIC5lbC1kaWFsb2csIC5tb2RhbC1jb250ZW50LCBkaXYsIHAsIHNwYW4=',
        '',
        'MTEwOTAxMDAy',
        'YWxyZWFkeSBiZWxvbmdzIHRvIHRoaXMgZHJpdmVy',
        'W0NodXnhu4NuIFBpY2tdIEzhu5dpOiA=',
        '',
        'YnV0dG9u',
        '',
        'Y2FuY2Vs',
        'aOG7p3k=',
        'Y2xvc2U=',
        'xJHDs25n',
        'Y2FuY2Vs',
        'aOG7p3k=',
        'YnV0dG9u',
        '',
        'Y2FuY2Vs',
        'aOG7p3k=',
        'Y2xvc2U=',
        'xJHDs25n',
        'Y2FuY2Vs',
        'aOG7p3k=',
        'W0NodXnhu4NuIFBpY2tdIMSQw6MgY2xpY2sgbsO6dCBI4buneS9DYW5jZWwgxJHhu4MgxJHDs25nIGjhu5lwIHRob+G6oWkgUmVhc3NpZ24u',
        'W0NodXnhu4NuIFBpY2tdIEPhuqNuaCBiw6FvOiBLaMO0bmcgdMOsbSB0aOG6pXkgbsO6dCBDYW5jZWwvSOG7p3kgdHLDqm4gZ2lhbyBkaeG7h24gxJHhu4MgxJHDs25nIGjhu5lwIHRob+G6oWkh',
        'YWxyZWFkeV9iZWxvbmdz',
        'Q+G6o25oIGLDoW86IEtow7RuZyB0w6xtIHRo4bqleSBuw7p0IENvbmZpcm0gdHJvbmcgZGlhbG9nIQ==',
        'S2jDtG5nIHTDrG0gdGjhuqV5IHTDuXkgY2jhu41uIHTDoGkgeOG6vyB0cm9uZyBkYW5oIHPDoWNoOiA=',
        'S2jDtG5nIHTDrG0gdGjhuqV5IMO0IGNo4buNbiB0w6BpIHjhur8gdHJvbmcgZGlhbG9nIQ==',
        'S2jDtG5nIHTDrG0gdGjhuqV5IERpYWxvZyBjaHV54buDbiBnaWFvIQ==',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIEluIEJpbGwgYuG7iyB0cmVvIHF1w6EgMzAgZ2nDonkuIFThu7EgxJHhu5luZyBnaeG6o2kgcGjDs25nLi4u',
        'YXdiUHJpbnQ=',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIFF1w6l0IFRPIGLhu4sgdHJlbyBxdcOhIDMwIGdpw6J5LiBU4buxIMSR4buZbmcgZ2nhuqNpIHBow7NuZy4uLg==',
        'Z2VuZXJhbFBhY2tUT0xpc3Q=',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIEluIFRPIGLhu4sgdHJlbyBxdcOhIDMwIGdpw6J5LiBU4buxIMSR4buZbmcgZ2nhuqNpIHBow7NuZy4uLg==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIENodXnhu4NuIFBpY2sgYuG7iyB0cmVvIHF1w6EgMzAgZ2nDonkuIFThu7EgxJHhu5luZyBnaeG6o2kgcGjDs25nLi4u',
        'cGlja3VwVGFzaw==',
        'bG9naW4=',
        'c3NvLnNob3BlZQ==',
        'W0jhu4cgdGjhu5FuZ10gUGjDoXQgaGnhu4duIHBoacOqbiDEkcSDbmcgbmjhuq1wIMSRw6MgaOG6v3QgaOG6oW4hIMSQYW5nIHThuqNpIGzhuqFpIHRyYW5nLi4u',
        '',
        'bG9naW4=',
        'c3NvLnNob3BlZQ==',
        'LmVsLWxvYWRpbmctbWFzaw==',
        'bm9uZQ==',
        'aGlkZGVu',
        'MA==',
        'YXdiUHJpbnQ=',
        'dGV4dGFyZWE=',
        'LmVsLXRleHRhcmVhX19pbm5lcg==',
        'bm9uZQ==',
        'aGlkZGVu',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'YnV0dG9u',
        '',
        'bm9uZQ==',
        'aGlkZGVu',
        'dMOsbSBraeG6v20=',
        'c2VhcmNo',
        'dGg=',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'aW5wdXQ=',
        'dGV4dA==',
        'dGV4dA==',
        'c2VhcmNo',
        '',
        'bm9uZQ==',
        'aGlkZGVu',
        'cGlja3VwVGFzaw==',
        'aW5wdXQ=',
        'bm9uZQ==',
        'aGlkZGVu',
        'YnV0dG9u',
        'bm9uZQ==',
        'aGlkZGVu',
        'W1NtYXJ0IFJlbG9hZF0gUGjDoXQgbOG7h25oIMSRw7NuZyB04bqldCBj4bqjIGPDoWMgdGFiIMSR4buDIGzDoG0gbeG7m2kuLi4=',
        'Y2xvc2VfdGFiX3RyaWdnZXJf',
        'dHJ1ZQ==',
        'W1NtYXJ0IFJlbG9hZF0gQuG6r3QgxJHhuqd1IG3hu58gbOG6oWkgdHXhuqduIHThu7EgY8OhYyB0YWIuLi4=',
        'bWFudWFs',
        'Y2xvc2VfdGFiX3RyaWdnZXJf',
        'dHJ1ZQ==',
        'Y2xvc2VfdGFiX3RyaWdnZXJf',
        'W0jhu4cgdGjhu5FuZ10gTmjhuq1uIGzhu4duaCBsw6BtIG3hu5tpIHR14bqnbiB04buxLiDEkGFuZyDEkcOzbmcgdGFiIG7DoHkuLi4=',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'c2VxX29wZW5fcXVldWU=',
        'c21hcnRfcmVsb2FkX3F1ZXVl',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'c2hvcGVlX3BjX25hbWU=',
        'UENfMDE=',
        'YXV0b19wcmludF9lbmFibGVk',
        'dHJ1ZQ==',
        '',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzay9saXN0',
        'bWVzc2FnZQ==',
        'U0hPUEVFX1dBS0VfVVBfUElORw==',
        '',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzay9saXN0',
        'CiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aWNrKCkgewogICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKCJwdWxzZSIpOwogICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGljaywgNDAwKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHRpY2soKTsKICAgICAgICAgICAg',
        'dGV4dC9qYXZhc2NyaXB0',
        'cHVsc2U=',
        'W0jhu4cgdGjhu5FuZ10gdjYuMiAtIE11bHRpLVRhYiBQYXJhbGxlbCBIZWxwZXIgKEZpeGVkIFBvbGxpbmcgNDAwbXMpLg==',
        'W0jhu4cgdGjhu5FuZ10gS2jDtG5nIHRo4buDIHThuqFvIFdlYiBXb3JrZXIsIGTDuW5nIHNldFRpbWVvdXQgxJHhu4cgcXV5IGThu7EgcGjDsm5nLg==',
        'bG9hZGluZw==',
        'RE9NQ29udGVudExvYWRlZA=='
    ];
    function _0xstr(idx) {
        try {
            const b64 = _0xarr[idx];
            const binString = atob(b64);
            const bytes = new Uint8Array(binString.length);
            for (let i = 0; i < binString.length; i++) {
                bytes[i] = binString.charCodeAt(i);
            }
            return new TextDecoder('utf-8').decode(bytes);
        } catch (e) {
            return '';
        }
    }


try {
    (function() {
_0xstr(0);
if (typeof GM_getValue === _0xstr(1)) {
globalThis.GM_getValue = (key, def) => {
const _0x00e5 = localStorage.getItem(key);
return _0x00e5 !== null ? _0x00e5 : def;
};
}
if (typeof GM_setValue === _0xstr(2)) {
globalThis.GM_setValue = (key, _0x00e5) => {
localStorage.setItem(key, _0x00e5);
};
}
if (typeof GM_registerMenuCommand === _0xstr(3)) {
globalThis.GM_registerMenuCommand = (name, fn) => {
console.log(_0xstr(4), name);
};
}
if (typeof GM_openInTab === _0xstr(5)) {
globalThis.GM_openInTab = (url, options) => {
const active = options && options.active !== undefined ? options.active : true;
window.postMessage({ type: _0xstr(6), url, active }, _0xstr(7));
};
}
if (typeof GM_xmlhttpRequest === _0xstr(8)) {
globalThis.GM_xmlhttpRequest = (options) => {
const reqId = _0xstr(9) + Math.random().toString(36).substring(2, 9);
window.addEventListener(_0xstr(10), function _0x0055(e) {
if (e.data && e.data.type === _0xstr(11) && e.data.reqId === reqId) {
window.removeEventListener(_0xstr(12), _0x0055);
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
options.onerror(new Error(e.data.error || _0xstr(13)));
}
}
}
});
window.postMessage({ type: _0xstr(14), reqId, options: {
url: options.url,
method: options.method,
data: options.data
}}, _0xstr(15));
};
}
if (typeof unsafeWindow === _0xstr(16)) {
globalThis.unsafeWindow = window;
}
const _0x000a = {
awbPrint: {
name: _0xstr(17),
url: _0xstr(18),
hashKey: _0xstr(19)
},
generalPackTOList: {
name: _0xstr(20),
url: _0xstr(21),
hashKey: _0xstr(22)
},
startPackNoLabel: {
name: _0xstr(23),
url: _0xstr(24),
hashKey: _0xstr(25)
},
pickupTask: {
name: _0xstr(26),
url: _0xstr(27),
hashKey: _0xstr(28)
}
};
function _0x0051() {
const hash = window.location.hash || _0xstr(29);
const _0x00a4 = hash.split(_0xstr(30))[0];
for (const [type, _0x001b] of Object.entries(_0x000a)) {
if (_0x00a4.includes(_0x001b.hashKey)) {
return type;
}
}
return null;
}
let _0x00ca = sessionStorage.getItem(_0xstr(31));
if (!_0x00ca) {
_0x00ca = _0xstr(32) + Math.random().toString(36).substring(2, 10) + _0xstr(33) + Date.now();
sessionStorage.setItem(_0xstr(34), _0x00ca);
}
const _0x0061 = _0x0051();
if (_0x0061) {
localStorage.setItem(_0xstr(35) + _0x0061, Date.now().toString());
localStorage.setItem(_0xstr(36) + _0x0061, _0x00ca);
}
function _0x0054() {
const _0x0031 = _0x0051();
if (_0x0031) {
const _0x00b6 = localStorage.getItem(_0xstr(37) + _0x0031);
if (_0x00b6 === _0x00ca) {
localStorage.setItem(_0xstr(38) + _0x0031, _0xstr(39));
localStorage.removeItem(_0xstr(40) + _0x0031);
}
}
}
window.addEventListener(_0xstr(41), _0x0054);
window.addEventListener(_0xstr(42), _0x0054);
function init() {
const _0x006f = window.self !== window.top || window.location.href.includes(_0xstr(43)) || window.location.href.includes(_0xstr(44));
if (_0x006f) {
return;
}
const _0x0000 = _0xstr(45);
let _0x0013 = localStorage.getItem(_0xstr(46)) || GM_getValue(_0xstr(47), _0x0000);
let _0x00a7 = localStorage.getItem(_0xstr(48)) || GM_getValue(_0xstr(49), _0xstr(50));
let _0x0074 = localStorage.getItem(_0xstr(51)) === _0xstr(52);
let _0x0070 = false;
let _0x0072 = false;
let _0x0073 = false;
let _0x0071 = false;
let _0x007d = _0xstr(53);
let _0x007f = 0;
let _0x008a = _0xstr(54);
let _0x0087 = 0;
let _0x008d = new Set();
let _0x0089 = 0;
let _0x0084 = 0;
let _0x0080 = 0;
let _0x0083 = 0;
let _0x007e = 0;
const _0x0009 = 30000;
let _0x0088 = Date.now();
const _0x0001 = 3600000;
let _0x0086 = 0;
function _0x0069(myType) {
const now = Date.now();
const _0x00ab = [_0xstr(55), _0xstr(56), _0xstr(57)];
const _0x0097 = _0x00ab.indexOf(myType);
if (_0x0097 === -1) return false;
const _0x000b = 12000;
for (let i = 0; i < _0x0097; i++) {
const type = _0x00ab[i];
const _0x0085 = parseInt(localStorage.getItem(_0xstr(58) + type) || _0xstr(59));
const _0x0076 = _0x0085 > 0 && (now - _0x0085) < _0x000b;
const _0x006e = localStorage.getItem(_0xstr(60) + type) === _0xstr(61);
if (_0x0076 && _0x006e) {
return true;
}
}
return false;
}
function _0x000c(tabType) {
const now = Date.now();
if (now - _0x0086 < 2000) {
return false;
}
if (_0x0069(tabType)) {
return false;
}
const _0x008e = _0xstr(62);
const _0x00db = _0xstr(63);
const _0x00d2 = _0xstr(64);
const _0x002e = localStorage.getItem(_0x00db);
const _0x008f = parseInt(localStorage.getItem(_0x00d2) || _0xstr(65));
if (!_0x002e || (now - _0x008f) > 5000 || _0x002e === tabType) {
localStorage.setItem(_0x008e, _0xstr(66));
localStorage.setItem(_0x00db, tabType);
localStorage.setItem(_0x00d2, now.toString());
return true;
}
return false;
}
function _0x00b8(tabType) {
const _0x008e = _0xstr(67);
const _0x00db = _0xstr(68);
const _0x00d2 = _0xstr(69);
const _0x002e = localStorage.getItem(_0x00db);
if (_0x002e === tabType) {
localStorage.removeItem(_0x008e);
localStorage.removeItem(_0x00db);
localStorage.removeItem(_0x00d2);
_0x0086 = Date.now();
}
}
function _0x00dc(tabType) {
const _0x00db = _0xstr(70);
const _0x00d2 = _0xstr(71);
const _0x002e = localStorage.getItem(_0x00db);
if (_0x002e === tabType) {
localStorage.setItem(_0x00d2, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(72), function() {
let _0x009a = prompt(_0xstr(73), _0x0013);
if (_0x009a) {
_0x0013 = _0x009a.trim();
localStorage.setItem(_0xstr(74), _0x0013);
GM_setValue(_0xstr(75), _0x0013);
alert(_0xstr(76));
window.location.reload();
}
});
const launcher = document.createElement(_0xstr(77));
launcher.id = _0xstr(78);
launcher.innerText = _0xstr(79);
launcher.style = _0xstr(80);
document.body.appendChild(launcher);
const panel = document.createElement(_0xstr(81));
panel.id = _0xstr(82);
panel.style = _0xstr(83);
let _0x0014 = null;
function _0x00c2() {
_0x00c8();
_0x0014 = setTimeout(() => {
_0x002a();
}, 20000);
}
function _0x00c8() {
if (_0x0014) {
clearTimeout(_0x0014);
_0x0014 = null;
}
}
function _0x002a() {
panel.style.display = _0xstr(84);
launcher.style.display = _0xstr(85);
_0x00c8();
}
function _0x0047() {
panel.style.display = _0xstr(86);
launcher.style.display = _0xstr(87);
_0x00c2();
}
panel.innerHTML = _0xstr(88) + (_0x0013) + _0xstr(89) + (_0x00a7) + _0xstr(90);
document.body.appendChild(panel);
const _0x00d7 = document.createElement(_0xstr(91));
_0x00d7.innerHTML = _0xstr(92);
document.head.appendChild(_0x00d7);
function _0x0021() {
let _0x005f = false;
const _0x003b = document.querySelectorAll(_0xstr(93));
for (let i = 0; i < _0x003b.length; i++) {
const el = _0x003b[i];
if (el.id === _0xstr(94) || el.id === _0xstr(95)) continue;
const style = window.getComputedStyle(el);
if (style.display !== _0xstr(96) && style.visibility !== _0xstr(97) && style.opacity !== _0xstr(98) && el.offsetHeight > 0) {
_0x005f = true;
break;
}
}
if (_0x005f) {
panel.style.opacity = _0xstr(99);
panel.style.pointerEvents = _0xstr(100);
} else {
if (panel.style.display !== _0xstr(101)) {
panel.style.opacity = _0xstr(102);
panel.style.pointerEvents = _0xstr(103);
}
}
if (launcher.style.display !== _0xstr(104)) {
launcher.style.opacity = _0xstr(105);
launcher.style.pointerEvents = _0xstr(106);
}
}
setInterval(_0x0021, 300);
const _0x0090 = document.getElementById(_0xstr(107));
const badge = document.getElementById(_0xstr(108));
const _0x00d5 = document.getElementById(_0xstr(109));
const _0x00e2 = document.getElementById(_0xstr(110));
const _0x00a5 = document.getElementById(_0xstr(111));
const _0x00be = document.getElementById(_0xstr(112));
const _0x0027 = document.getElementById(_0xstr(113));
const _0x002d = document.getElementById(_0xstr(114));
const _0x00e3 = document.getElementById(_0xstr(115));
const _0x00e1 = document.getElementById(_0xstr(116));
const _0x003e = document.getElementById(_0xstr(117));
const _0x00e4 = document.getElementById(_0xstr(118));
const _0x00cc = document.getElementById(_0xstr(119));
const _0x00a0 = document.getElementById(_0xstr(120));
function log(message) {
const _0x00d1 = new Date().toLocaleTimeString();
_0x0090.innerHTML = _0xstr(121) + (_0x00d1) + _0xstr(122) + (message) + _0xstr(123) + _0x0090.innerHTML;
const _0x008c = _0x0090.innerHTML.split(_0xstr(124));
if (_0x008c.length > 20) _0x0090.innerHTML = _0x008c.slice(0, 20).join(_0xstr(125));
}
function _0x00df() {
if (_0x0074) {
badge.innerText = _0xstr(126);
badge.style.backgroundColor = _0xstr(127);
_0x00d5.innerText = _0xstr(128);
_0x00d5.style.backgroundColor = _0xstr(129);
} else {
badge.innerText = _0xstr(130);
badge.style.backgroundColor = _0xstr(131);
_0x00d5.innerText = _0xstr(132);
_0x00d5.style.backgroundColor = _0xstr(133);
}
}
function _0x00e0() {
if (_0x0013 && _0x0013 !== _0x0000) {
_0x00e1.style.display = _0xstr(134);
_0x00e3.style.display = _0xstr(135);
_0x00e4.innerText = _0xstr(136);
} else {
_0x00e1.style.display = _0xstr(137);
_0x00e3.style.display = _0xstr(138);
}
}
function _0x00dd() {
const _0x0031 = _0x0051();
if (_0x0031) {
localStorage.setItem(_0xstr(139) + _0x0031, Date.now().toString());
localStorage.setItem(_0xstr(140) + _0x0031, _0x00ca);
}
}
const _0x000b = 15000;
const _0x0003 = 10000;
const _0x0004 = 20000;
function _0x00de() {
_0x00cc.innerHTML = _0xstr(141);
const now = Date.now();
for (const [type, _0x001b] of Object.entries(_0x000a)) {
const _0x0085 = parseInt(localStorage.getItem(_0xstr(142) + type) || _0xstr(143));
const _0x0076 = _0x0085 > 0 && (now - _0x0085) < _0x000b;
const _0x0079 = document.createElement(_0xstr(144));
_0x0079.style = _0xstr(145) + (_0x0076 ? _0xstr(146) : _0xstr(147)) + _0xstr(148) + (_0x0076 ? _0xstr(149) : _0xstr(150)) + _0xstr(151);
_0x0079.innerHTML = _0xstr(152) + (_0x0076 ? _0xstr(153) : _0xstr(154)) + _0xstr(155) + (_0x001b.name) + _0xstr(156) + (_0x0076 ? _0xstr(157) : _0xstr(158)) + _0xstr(159) + (_0x0076 ? _0xstr(160) : _0xstr(161)) + _0xstr(162);
_0x0079.style.cursor = _0xstr(163);
_0x0079.title = _0xstr(164) + (_0x001b.name) + _0xstr(165);
_0x0079.addEventListener(_0xstr(166), () => {
if (typeof GM_openInTab !== _0xstr(167)) {
GM_openInTab(_0x001b.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001b.url, _0xstr(168));
}
});
_0x00cc.appendChild(_0x0079);
}
}
const _0x0002 = [_0xstr(169), _0xstr(170), _0xstr(171), _0xstr(172)];
const _0x0006 = 45000;
function _0x00a1() {
_0x0062(_0xstr(173));
}
function _0x0062(_0x00d8) {
const now = Date.now();
const _0x0046 = localStorage.getItem(_0xstr(174));
if (_0x0046) {
if (_0x00d8 === _0xstr(175)) {
log(_0xstr(176));
_0x0026();
} else {
const _0x00c6 = parseInt(localStorage.getItem(_0xstr(177)) || _0xstr(178));
if ((now - _0x00c6) < 300000) {
return;
}
log(_0xstr(179));
_0x0026();
}
}
const _0x00cd = [];
for (const type of _0x0002) {
if (_0x00d8 === _0xstr(180)) {
localStorage.setItem(_0xstr(181) + type, _0xstr(182));
_0x00cd.push(type);
} else {
const _0x0085 = parseInt(localStorage.getItem(_0xstr(183) + type) || _0xstr(184));
const _0x0068 = _0x0085 > 0 && (now - _0x0085) < _0x000b;
if (!_0x0068) {
_0x00cd.push(type);
}
}
}
if (_0x00cd.length === 0) {
if (_0x00d8 === _0xstr(185)) log(_0xstr(186));
return;
}
localStorage.removeItem(_0xstr(187));
log(_0xstr(188) + (_0x00cd.length) + _0xstr(189) + (_0x00cd.map(t => _0x000a[t]?.name || t).join(_0xstr(190))) + _0xstr(191));
localStorage.setItem(_0xstr(192), JSON.stringify(_0x00cd));
localStorage.setItem(_0xstr(193), _0x00cd[0]);
localStorage.setItem(_0xstr(194), _0xstr(195));
localStorage.setItem(_0xstr(196), now.toString());
localStorage.setItem(_0xstr(197), now.toString());
const _0x004b = _0x00cd[0];
const _0x001b = _0x000a[_0x004b];
localStorage.setItem(_0xstr(198) + _0x004b, now.toString());
const _0x0098 = _0x0051();
if (_0x0098 === _0x004b) {
log(_0xstr(199) + (_0x001b.name) + _0xstr(200));
window.location.reload();
} else {
log(_0xstr(201) + (_0x001b.name) + _0xstr(202));
if (typeof GM_openInTab !== _0xstr(203)) {
GM_openInTab(_0x001b.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001b.url, _0xstr(204));
}
}
}
function _0x0026() {
localStorage.removeItem(_0xstr(205));
localStorage.removeItem(_0xstr(206));
localStorage.removeItem(_0xstr(207));
localStorage.removeItem(_0xstr(208));
localStorage.removeItem(_0xstr(209));
localStorage.removeItem(_0xstr(210));
}
function _0x00a2() {
let _0x00b1;
try {
_0x00b1 = JSON.parse(localStorage.getItem(_0xstr(211)) || _0xstr(212));
} catch(e) {
_0x0026();
return;
}
_0x00b1.shift();
if (_0x00b1.length > 0) {
const _0x009b = _0x00b1[0];
const _0x001b = _0x000a[_0x009b];
const now = Date.now();
localStorage.setItem(_0xstr(213), JSON.stringify(_0x00b1));
localStorage.setItem(_0xstr(214), _0x009b);
localStorage.setItem(_0xstr(215), _0xstr(216));
localStorage.setItem(_0xstr(217), now.toString());
localStorage.setItem(_0xstr(218) + _0x009b, now.toString());
localStorage.removeItem(_0xstr(219));
const _0x0098 = _0x0051();
if (_0x0098 === _0x009b) {
log(_0xstr(220) + (_0x001b.name) + _0xstr(221));
window.location.reload();
} else {
log(_0xstr(222) + (_0x001b.name) + _0xstr(223));
if (typeof GM_openInTab !== _0xstr(224)) {
GM_openInTab(_0x001b.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001b.url, _0xstr(225));
}
}
} else {
_0x0026();
log(_0xstr(226));
}
}
function _0x0053() {
const _0x00b2 = localStorage.getItem(_0xstr(227));
if (!_0x00b2) return;
let _0x00b1;
try {
_0x00b1 = JSON.parse(_0x00b2);
} catch(e) {
_0x0026();
return;
}
if (!Array.isArray(_0x00b1) || _0x00b1.length === 0) {
_0x0026();
return;
}
const _0x0030 = localStorage.getItem(_0xstr(228));
const _0x0098 = _0x0051();
if (!_0x0098 || _0x0098 !== _0x0030) return;
const _0x00a8 = localStorage.getItem(_0xstr(229));
if (_0x00a8 !== _0xstr(230)) return;
const _0x00cb = parseInt(localStorage.getItem(_0xstr(231)) || _0xstr(232));
const now = Date.now();
if (_0x006d()) {
log(_0xstr(233) + (_0x000a[_0x0098]?.name || _0x0098) + _0xstr(234));
_0x0088 = Date.now();
_0x00a2();
return;
}
if ((now - _0x00cb) > _0x0006) {
const _0x00bb = parseInt(localStorage.getItem(_0xstr(235)) || _0xstr(236));
if (_0x00bb < 1) {
log(_0xstr(237) + (_0x000a[_0x0098]?.name || _0x0098) + _0xstr(238));
localStorage.setItem(_0xstr(239), _0xstr(240));
localStorage.setItem(_0xstr(241), now.toString());
window.location.reload();
} else {
log(_0xstr(242) + (_0x000a[_0x0098]?.name || _0x0098) + _0xstr(243));
localStorage.removeItem(_0xstr(244));
_0x00a2();
}
}
}
const _0x0005 = 20000;
function _0x0015() {
if (!_0x0074) return;
if (localStorage.getItem(_0xstr(245)) || localStorage.getItem(_0xstr(246))) return;
const now = Date.now();
let _0x0057 = false;
let _0x005a = false;
let _0x004f = _0xstr(247);
for (const [type, _0x001b] of Object.entries(_0x000a)) {
const _0x0085 = parseInt(localStorage.getItem(_0xstr(248) + type) || _0xstr(249));
const _0x00b7 = localStorage.getItem(_0xstr(250) + type);
const _0x0076 = _0x0085 > 0 && (now - _0x0085) < _0x000b;
if (!_0x0076) {
const _0x0081 = parseInt(localStorage.getItem(_0xstr(251) + type) || _0xstr(252));
const _0x0082 = now - _0x0081;
if (_0x00b7 && _0x0082 > 60000) {
_0x005a = true;
_0x004f = type;
break;
}
if (!_0x00b7) {
if (_0x0085 === 0 && _0x0082 > _0x0003) {
_0x0057 = true;
break;
}
if (_0x0085 > 0 && (now - _0x0085) > _0x0005 && _0x0082 > _0x0005) {
_0x0057 = true;
break;
}
}
}
}
if (_0x005a && _0x004f) {
const _0x001b = _0x000a[_0x004f];
log(_0xstr(253) + (_0x001b.name) + _0xstr(254));
localStorage.setItem(_0xstr(255) + _0x004f, now.toString());
if (typeof GM_openInTab !== _0xstr(256)) {
GM_openInTab(_0x001b.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001b.url, _0xstr(257));
}
return;
}
if (_0x0057) {
log(_0xstr(258));
_0x0062(_0xstr(259));
}
}
let wakeLock = null;
let audioCtx = null;
async function _0x00ba() {
if (!(_0xstr(260) in navigator)) {
log(_0xstr(261));
return;
}
try {
wakeLock = await navigator.wakeLock.request(_0xstr(262));
log(_0xstr(263));
} catch (err) {
console.log(_0xstr(264), err.message);
}
}
function _0x00b9() {
if (wakeLock) {
wakeLock.release().then(() => {
wakeLock = null;
log(_0xstr(265));
});
}
}
let _0x005e = false;
function _0x00c5() {
}
const _0x0050 = [_0xstr(266), _0xstr(267), _0xstr(268), _0xstr(269), _0xstr(270)];
const _0x0052 = () => {
_0x005e = true;
_0x0050.forEach(e => window.removeEventListener(e, _0x0052, true));
if (_0x0074) {
_0x00c5();
_0x001e();
}
};
_0x0050.forEach(e => window.addEventListener(e, _0x0052, { once: true, capture: true, passive: true }));
function _0x001e() {
}
function _0x00c9() {
}
function _0x0040() {
_0x00ba();
_0x00c5();
}
function _0x003c() {
_0x00b9();
_0x00c9();
}
document.addEventListener(_0xstr(271), () => {
if (document.visibilityState === _0xstr(272) && _0x0074) {
_0x00ba();
}
});
_0x00a0.addEventListener(_0xstr(273), _0x00a1);
_0x00df();
_0x00e0();
if (_0x0074) {
_0x0040();
}
_0x003e.addEventListener(_0xstr(274), () => {
_0x00e1.style.display = _0xstr(275);
_0x00e3.style.display = _0xstr(276);
_0x00e2.focus();
});
_0x00be.addEventListener(_0xstr(277), () => {
const _0x0065 = _0x00e2.value.trim();
const _0x00a6 = _0x00a5.value.trim() || _0xstr(278);
if (_0x0065 && !_0x0065.includes(_0xstr(279))) {
_0x0013 = _0x0065;
_0x00a7 = _0x00a6;
localStorage.setItem(_0xstr(280), _0x0013);
localStorage.setItem(_0xstr(281), _0x00a7);
GM_setValue(_0xstr(282), _0x0013);
GM_setValue(_0xstr(283), _0x00a7);
log(_0xstr(284) + (_0x00a7) + _0xstr(285));
_0x00e0();
alert(_0xstr(286));
} else {
alert(_0xstr(287));
}
});
function _0x00d6() {
if (!_0x0013 || _0x0013.includes(_0xstr(288))) {
alert(_0xstr(289));
return;
}
_0x0074 = !_0x0074;
localStorage.setItem(_0xstr(290), _0x0074 ? _0xstr(291) : _0xstr(292));
_0x00df();
log(_0x0074 ? _0xstr(293) : _0xstr(294));
if (_0x0074) {
_0x0040();
_0x00a1();
} else {
_0x003c();
}
}
_0x00d5.addEventListener(_0xstr(295), _0x00d6);
badge.addEventListener(_0xstr(296), _0x00d6);
_0x0027.addEventListener(_0xstr(297), _0x002a);
launcher.addEventListener(_0xstr(298), _0x0047);
panel.addEventListener(_0xstr(299), _0x00c8);
panel.addEventListener(_0xstr(300), _0x00c8);
panel.addEventListener(_0xstr(301), _0x00c8);
panel.addEventListener(_0xstr(302), _0x00c8);
panel.addEventListener(_0xstr(303), _0x00c2);
function _0x0034(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function _0x0035(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function _0x00c1(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const _0x0099 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(304))?.set;
if (_0x0099) {
_0x0099.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(305), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(306), { bubbles: true }));
await _0x0034(300);
[_0xstr(307), _0xstr(308), _0xstr(309)].forEach(name => {
const ev = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(310), code: _0xstr(311), keyCode: 13, which: 13
});
Object.defineProperty(ev, _0xstr(312), { value: 13 });
Object.defineProperty(ev, _0xstr(313), { value: 13 });
inputEl.dispatchEvent(ev);
});
}
function _0x0018(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let _0x0025 = (_0x0013 || _0xstr(314)).trim();
if (!_0x0025 || _0x0025.includes(_0xstr(315))) {
reject(new Error(_0xstr(316)));
return;
}
let _0x00d0 = _0xstr(317);
if (method === _0xstr(318)) {
_0x00d0 = _0xstr(319) + (_0x0025) + _0xstr(320) + (urlOrAction) + _0xstr(321) + (encodeURIComponent((_0x00a7 || _0xstr(322)).trim())) + _0xstr(323);
} else {
_0x00d0 = _0x0025;
}
let isSettled = false;
const timer = setTimeout(() => {
if (!isSettled) {
isSettled = true;
reject(new Error(_0xstr(324) + (timeoutMs/1000) + _0xstr(325) + (urlOrAction) + _0xstr(326) + (attempts) + _0xstr(327)));
}
}, timeoutMs);
let options = {
method: method,
url: _0x00d0,
timeout: timeoutMs,
onload: function(response) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
try {
const res = JSON.parse(response.responseText);
resolve(res);
} catch (e) {
reject(new Error(_0xstr(328) + (e.message) + _0xstr(329) + (response.responseText.substring(0, 120)) + _0xstr(330)));
}
},
onerror: function(err) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(331) + (_0x00d0) + _0xstr(332)));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(333) + (urlOrAction) + _0xstr(334)));
}
};
if (method !== _0xstr(335)) {
options.headers = { [_0xstr(336)]: _0xstr(337) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (_0x00a7 || _0xstr(338)).trim() }, data));
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
console.log(_0xstr(339) + (urlOrAction) + _0xstr(340) + (err.message) + _0xstr(341));
setTimeout(tryCall, 2000);
} else {
reject(err);
}
});
}
tryCall();
});
}
function _0x0048(driverStr) {
if (!driverStr) return _0xstr(342);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function _0x0041() {
if (document.hidden) {
log(_0xstr(343));
window.postMessage({ type: _0xstr(344), tabInstanceId: _0x00ca }, _0xstr(345));
for (let i = 0; i < 40; i++) {
await _0x0034(100);
if (!document.hidden) {
await _0x0034(500);
return true;
}
}
return false;
}
return true;
}
async function _0x00c4() {
if (!_0x0074 || _0x0070) return;
const hash = window.location.hash || _0xstr(346);
if (!hash.includes(_0xstr(347))) return;
try {
_0x0070 = true;
_0x0084 = Date.now();
const data = await _0x0018(_0xstr(348), _0xstr(349));
_0x0088 = Date.now();
let _0x0029 = [];
if (data.status === _0xstr(350)) {
if (data.code) {
_0x0029 = data.code.split(_0xstr(351)).map(c => c.trim().toUpperCase()).filter(c => c.length > 0);
} else if (data.codes && Array.isArray(data.codes)) {
_0x0029 = data.codes.map(c => c.trim().toUpperCase());
}
}
if (_0x0029.length > 0) {
localStorage.setItem(_0xstr(352), _0xstr(353));
if (!_0x000c(_0xstr(354))) {
_0x0070 = false;
return;
}
_0x00dc(_0xstr(355));
log(_0xstr(356) + (_0x0029.length) + _0xstr(357));
const success = await _0x0045(_0x0029);
if (success) {
_0x0088 = Date.now();
log(_0xstr(358) + (_0x0029.join(_0xstr(359))) + _0xstr(360));
for (const code of _0x0029) {
_0x0018(_0xstr(361), _0xstr(362), { code: code, status: _0xstr(363) })
.then(() => {
log(_0xstr(364) + (code) + _0xstr(365));
})
.catch(e => {
log(_0xstr(366) + (code) + _0xstr(367) + (e.message) + _0xstr(368));
});
}
} else {
log(_0xstr(369));
}
} else {
localStorage.removeItem(_0xstr(370));
}
} catch (error) {
log(_0xstr(371) + (error.message) + _0xstr(372));
} finally {
_0x0070 = false;
_0x00b8(_0xstr(373));
}
}
async function _0x0045(codes) {
await _0x0041();
const textarea = document.querySelector(_0xstr(374)) || document.querySelector(_0xstr(375));
if (!textarea) {
log(_0xstr(376));
return false;
}
const _0x002b = codes.join(_0xstr(377));
textarea.value = _0x002b;
textarea.dispatchEvent(new Event(_0xstr(378), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(379), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(380), false, _0x002b);
textarea.dispatchEvent(new Event(_0xstr(381), { bubbles: true }));
} catch (e) {}
await _0x0035(300, 500);
const _0x002c = Array.from(document.querySelectorAll(_0xstr(382))).find(btn => {
const _0x00da = btn.innerText || btn.textContent || _0xstr(383);
return _0x00da.trim().toLowerCase() === _0xstr(384);
});
if (!_0x002c) return false;
_0x002c.click();
let _0x006b = false;
let _0x0059 = false;
let _0x0043 = _0xstr(385);
const _0x00e6 = codes.filter(c => c.startsWith(_0xstr(386)) || c.startsWith(_0xstr(387)) || c.startsWith(_0xstr(388)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let i = 0; i < 40; i++) {
await _0x0034(50);
const _0x000f = Array.from(document.querySelectorAll(_0xstr(389)));
const _0x004e = _0x000f.find(el => {
const _0x00da = el.textContent.trim().toUpperCase();
return _0x00e6.some(vc => _0x00da === vc || _0x00da.includes(vc));
});
if (_0x004e) {
_0x006b = true;
}
const _0x003b = document.querySelectorAll(_0xstr(390));
for (const _0x0036 of _0x003b) {
if (_0x0036.offsetWidth > 0 || _0x0036.offsetHeight > 0) {
const _0x003a = (_0x0036.innerText || _0x0036.textContent || _0xstr(391));
if (_0x003a.toLowerCase().includes(_0xstr(392)) ||
_0x003a.toLowerCase().includes(_0xstr(393)) ||
_0x003a.toLowerCase().includes(_0xstr(394)) ||
_0x003a.toLowerCase().includes(_0xstr(395)) ||
_0x003a.toLowerCase().includes(_0xstr(396))) {
_0x0059 = true;
_0x0043 = _0x003a.trim().replace(/\n/g, _0xstr(397));
const _0x009d = Array.from(_0x0036.querySelectorAll(_0xstr(398))).find(btn => {
const _0x00da = (btn.innerText || btn.textContent || _0xstr(399)).trim().toLowerCase();
return _0x00da === _0xstr(400) || _0x00da === _0xstr(401) || _0x00da === _0xstr(402) || _0x00da === _0xstr(403) || _0x00da === _0xstr(404) || _0x00da.includes(_0xstr(405));
});
if (_0x009d) {
const _0x009e = 800 + Math.random() * 200;
log(_0xstr(406) + ((_0x009e/1000).toFixed(2)) + _0xstr(407));
await _0x0034(_0x009e);
_0x009d.click();
log(_0xstr(408));
await _0x0034(500);
}
const _0x008c = _0x003a.split(_0xstr(409)).map(l => l.trim().toUpperCase());
const _0x0067 = [];
for (const _0x008b of _0x008c) {
const _0x0094 = _0x008b.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (_0x0094) {
for (const match of _0x0094) {
if (!match.includes(_0xstr(410)) && !match.includes(_0xstr(411)) && !match.includes(_0xstr(412))) {
_0x0067.push(match);
}
}
}
}
const _0x0028 = _0x0067.length > 0 ? _0x0067 : codes;
for (const _0x0042 of _0x0028) {
_0x0018(_0xstr(413), _0xstr(414), { code: _0x0042, status: _0xstr(415) })
.then(() => {
log(_0xstr(416) + (_0x0042) + _0xstr(417));
})
.catch(e => {
log(_0xstr(418) + (_0x0042) + _0xstr(419) + (e.message) + _0xstr(420));
});
}
break;
}
}
}
if (_0x006b && !_0x0059) {
break;
}
if (_0x0059) break;
}
if (_0x0059 && !_0x006b) {
return false;
}
if (!_0x006b) {
log(_0xstr(421));
return false;
}
const _0x00a9 = Array.from(document.querySelectorAll(_0xstr(422))).find(el => {
const _0x00da = el.innerText || el.textContent || _0xstr(423);
return _0x00da.trim() === _0xstr(424);
});
if (!_0x00a9) return false;
await _0x0035(400, 500);
_0x00a9.click();
let _0x006c = false;
let _0x0039 = null;
for (let i = 0; i < 20; i++) {
await _0x0034(50);
const _0x003b = document.querySelectorAll(_0xstr(425));
for (const _0x0036 of _0x003b) {
if (_0x0036.offsetWidth > 0 || _0x0036.offsetHeight > 0) {
_0x0039 = Array.from(_0x0036.querySelectorAll(_0xstr(426))).find(btn => {
const _0x00da = btn.innerText || btn.textContent || _0xstr(427);
return _0x00da.trim() === _0xstr(428);
});
if (_0x0039) {
_0x006c = true;
break;
}
}
}
if (_0x006c) break;
}
if (_0x0039) {
await _0x0035(100, 200);
_0x0039.click();
await _0x0034(500);
return true;
}
return false;
}
async function _0x00ad() {
if (!_0x0074 || _0x0072) return;
_0x0072 = true;
_0x0080 = Date.now();
_0x0088 = Date.now();
log(_0xstr(429));
try {
const now = Date.now();
if (now - _0x0087 > 2000) {
let _0x00bf = Array.from(document.querySelectorAll(_0xstr(430))).find(btn => {
const text = btn.innerText.trim();
return text === _0xstr(431) || text === _0xstr(432);
});
if (_0x00bf) {
_0x00bf.click();
_0x0087 = now;
await _0x0034(300);
}
}
if (_0x008d.size === 0 || (now - _0x0089) > 60000) {
try {
const res = await _0x0018(_0xstr(433), _0xstr(434));
if (res.status === _0xstr(435) && Array.isArray(res.data)) {
_0x008d = new Set(res.data.map(to => to.toLowerCase()));
_0x0089 = now;
log(_0xstr(436) + (_0x008d.size) + _0xstr(437));
}
} catch (e) {
log(_0xstr(438) + (e.message) + _0xstr(439));
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(440)));
let _0x00d3 = -1;
let _0x009f = -1;
let _0x00af = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(441)) || text.includes(_0xstr(442)) || text.includes(_0xstr(443)) || text.includes(_0xstr(444))) {
_0x00d3 = index;
} else if (text.includes(_0xstr(445)) || text.includes(_0xstr(446)) || text.includes(_0xstr(447)) || text.includes(_0xstr(448))) {
_0x009f = index;
} else if (text.includes(_0xstr(449)) || text.includes(_0xstr(450)) || text.includes(_0xstr(451)) || text.includes(_0xstr(452))) {
_0x00af = index;
}
});
const _0x00bd = document.querySelectorAll(_0xstr(453));
for (let _0x00bc of _0x00bd) {
const _0x001a = _0x00bc.querySelectorAll(_0xstr(454));
if (_0x001a.length > 0) {
let toNum = _0xstr(455);
let _0x00a3 = _0xstr(456);
let _0x00b0 = -1;
if (_0x00d3 !== -1 && _0x001a[_0x00d3]) toNum = _0x001a[_0x00d3].innerText.trim();
if (_0x009f !== -1 && _0x001a[_0x009f]) _0x00a3 = _0x001a[_0x009f].innerText.trim();
if (_0x00af !== -1 && _0x001a[_0x00af]) {
const _0x00ae = parseInt(_0x001a[_0x00af].innerText.trim(), 10);
if (!isNaN(_0x00ae)) _0x00b0 = _0x00ae;
}
if (!toNum) {
_0x001a.forEach(c => {
const _0x00da = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/i.test(_0x00da)) toNum = _0x00da;
});
}
if (!_0x00a3) {
_0x001a.forEach(c => {
const _0x00da = c.innerText.trim();
if (_0x00da.includes(_0xstr(457))) _0x00a3 = _0x00da;
});
}
if (_0x00b0 === -1) {
_0x001a.forEach((c, idx) => {
const _0x00da = c.innerText.trim();
if (/^\d+$/.test(_0x00da) && idx > 0 && idx !== _0x00d3) {
const _0x00ae = parseInt(_0x00da, 10);
if (_0x00ae > 0) _0x00b0 = _0x00ae;
}
});
}
if (toNum && _0x00a3 && _0x00b0 > 0) {
const _0x0075 = _0x00a3.toLowerCase() === _0xstr(458);
if (!_0x0075 && !_0x008d.has(toNum.toLowerCase())) {
_0x008d.add(toNum.toLowerCase());
try {
const _0x000e = await _0x0018(_0xstr(459), _0xstr(460), { toNum: toNum });
if (_0x000e.status === _0xstr(461)) {
log(_0xstr(462) + (toNum) + _0xstr(463) + (_0x00a3) + _0xstr(464) + (_0x00b0) + _0xstr(465));
_0x0088 = Date.now();
} else if (_0x000e.status === _0xstr(466)) {
log(_0xstr(467) + (toNum) + _0xstr(468));
} else {
log(_0xstr(469) + (toNum) + _0xstr(470) + (JSON.stringify(_0x000e)) + _0xstr(471));
}
} catch (err) {
_0x008d.delete(toNum.toLowerCase());
log(_0xstr(472) + (toNum) + _0xstr(473) + (err.message) + _0xstr(474));
}
}
}
}
}
} catch (error) {
log(_0xstr(475) + (error.message) + _0xstr(476));
} finally {
_0x0072 = false;
}
}
async function _0x00ac() {
if (!_0x0074 || _0x0073) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(477))) return;
try {
_0x0073 = true;
_0x0083 = Date.now();
const res = await _0x0018(_0xstr(478), _0xstr(479));
if (res.status === _0xstr(480) && res.toNum) {
const _0x002f = res.toNum;
localStorage.setItem(_0xstr(481), _0xstr(482));
if (!_0x000c(_0xstr(483))) {
_0x0073 = false;
return;
}
_0x00dc(_0xstr(484));
log(_0xstr(485) + (_0x002f) + _0xstr(486));
await _0x0041();
let _0x00d4 = null;
const _0x007b = document.querySelectorAll(_0xstr(487));
let _0x00cf = null;
for (let el of _0x007b) {
const text = el.innerText.trim().toLowerCase();
if (text === _0xstr(488) || text === _0xstr(489) || text === _0xstr(490) || text === _0xstr(491)) {
_0x00cf = el;
break;
}
}
if (_0x00cf) {
let parent = _0x00cf.parentElement;
for (let i = 0; i < 3 && parent; i++) {
_0x00d4 = parent.querySelector(_0xstr(492));
if (_0x00d4) break;
parent = parent.parentElement;
}
}
if (!_0x00d4) {
const _0x0011 = document.querySelectorAll(_0xstr(493));
for (let input of _0x0011) {
const placeholder = (input.placeholder || _0xstr(494)).toLowerCase();
if (placeholder.includes(_0xstr(495)) || placeholder.includes(_0xstr(496)) || placeholder.includes(_0xstr(497)) || placeholder.includes(_0xstr(498))) {
_0x00d4 = input;
break;
}
}
}
if (!_0x00d4) {
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(499)));
_0x00d4 = _0x0011.find(input => {
const type = (input.type || _0xstr(500)).toLowerCase();
const _0x0077 = type === _0xstr(501) || type === _0xstr(502) || type === _0xstr(503);
const _0x0078 = input.style.display !== _0xstr(504) && input.style.visibility !== _0xstr(505);
return _0x0077 && _0x0078;
});
}
if (_0x00d4) {
log(_0xstr(506) + (_0x002f) + _0xstr(507));
await _0x00c1(_0x00d4, _0x002f);
await _0x0034(100);
_0x00dc(_0xstr(508));
const _0x00aa = await _0x00d9(_0x002f);
if (_0x00aa) {
log(_0xstr(509) + (_0x002f) + _0xstr(510));
_0x0088 = Date.now();
try {
await _0x0018(_0xstr(511), _0xstr(512), { toNum: _0x002f });
log(_0xstr(513) + (_0x002f) + _0xstr(514));
} catch (markErr) {
log(_0xstr(515) + (_0x002f) + _0xstr(516) + (markErr.message) + _0xstr(517));
}
} else {
log(_0xstr(518) + (_0x002f) + _0xstr(519));
}
} else {
log(_0xstr(520));
}
} else {
localStorage.removeItem(_0xstr(521));
}
} catch (error) {
log(_0xstr(522) + (error.message) + _0xstr(523));
} finally {
_0x0073 = false;
_0x00b8(_0xstr(524));
}
}
function _0x00d9(_0x002f) {
return new Promise((resolve) => {
let _0x0020 = 0;
let _0x0023 = setInterval(() => {
_0x0020++;
let _0x00a9 = null;
const _0x0017 = document.querySelectorAll(_0xstr(525));
for (let btn of _0x0017) {
const text = btn.innerText.trim();
if (text === _0xstr(526) || text === _0xstr(527) || text === _0xstr(528) || text.includes(_0xstr(529))) {
_0x00a9 = btn;
break;
}
}
if (!_0x00a9) {
const _0x003f = document.querySelectorAll(_0xstr(530));
for (let el of _0x003f) {
const text = el.innerText.trim();
if (text === _0xstr(531) || text === _0xstr(532) || text === _0xstr(533) || text.includes(_0xstr(534))) {
_0x00a9 = el.closest(_0xstr(535)) || el;
break;
}
}
}
if (_0x00a9 && !_0x00a9.disabled && !_0x00a9.classList.contains(_0xstr(536))) {
clearInterval(_0x0023);
log(_0xstr(537));
_0x00a9.click();
setTimeout(() => {
log(_0xstr(538) + (_0x002f) + _0xstr(539));
resolve(true);
}, 800);
} else if (_0x0020 > 20) {
clearInterval(_0x0023);
resolve(false);
}
}, 150);
});
}
async function _0x00c3() {
if (!_0x0074 || _0x0071) return;
const hash = window.location.hash || _0xstr(540);
if (!hash.includes(_0xstr(541))) return;
try {
_0x0071 = true;
_0x007e = Date.now();
const data = await _0x0018(_0xstr(542), _0xstr(543));
if (data.status === _0xstr(544) && data.pupCode) {
const pupCode = data.pupCode;
const _0x00b3 = data.recipientDriver;
const recipientDriver = _0x0048(_0x00b3);
localStorage.setItem(_0xstr(545), _0xstr(546));
if (!_0x000c(_0xstr(547))) {
_0x0071 = false;
return;
}
_0x00dc(_0xstr(548));
const now = Date.now();
if (pupCode === _0x007d && (now - _0x007f) < 30000) {
log(_0xstr(549) + (pupCode) + _0xstr(550));
_0x0071 = false;
_0x00b8(_0xstr(551));
return;
}
log(_0xstr(552) + (pupCode) + _0xstr(553) + (recipientDriver) + _0xstr(554) + (_0x00b3) + _0xstr(555));
const success = await _0x0044(pupCode, recipientDriver);
_0x007d = pupCode;
_0x007f = Date.now();
if (success === true || success === _0xstr(556)) {
const _0x00c7 = success === _0xstr(557) ? _0xstr(558) : _0xstr(559) + (recipientDriver) + _0xstr(560);
log(_0xstr(561) + (pupCode) + _0xstr(562) + (_0x00c7) + _0xstr(563));
try {
await _0x0018(_0xstr(564), _0xstr(565), { pupCode: pupCode, status: _0xstr(566) });
log(_0xstr(567) + (pupCode) + _0xstr(568));
} catch (err) {
log(_0xstr(569) + (pupCode) + _0xstr(570) + (err.message) + _0xstr(571));
}
} else {
log(_0xstr(572));
try {
await _0x0018(_0xstr(573), _0xstr(574), { pupCode: pupCode, status: _0xstr(575) });
log(_0xstr(576) + (pupCode) + _0xstr(577));
} catch (err) {
log(_0xstr(578) + (pupCode) + _0xstr(579) + (err.message) + _0xstr(580));
}
}
} else {
localStorage.removeItem(_0xstr(581));
}
} catch (error) {
log(_0xstr(582) + (error.message) + _0xstr(583));
} finally {
_0x0071 = false;
_0x00b8(_0xstr(584));
}
}
async function _0x0044(pupCode, recipientDriver) {
await _0x0041();
let _0x004a = null;
const _0x004c = document.querySelectorAll(_0xstr(585));
for (let _0x0079 of _0x004c) {
const _0x007a = _0x0079.querySelector(_0xstr(586));
if (_0x007a) {
const _0x007c = (_0x007a.innerText || _0x007a.textContent || _0xstr(587)).trim().toLowerCase();
if (_0x007c.includes(_0xstr(588)) || _0x007c.includes(_0xstr(589)) || _0x007c === _0xstr(590)) {
_0x004a = _0x0079.querySelector(_0xstr(591));
if (_0x004a) break;
}
}
}
if (!_0x004a) {
const _0x0011 = document.querySelectorAll(_0xstr(592));
for (let input of _0x0011) {
const placeholder = input.placeholder || _0xstr(593);
if (placeholder.toLowerCase().includes(_0xstr(594)) || placeholder.toLowerCase().includes(_0xstr(595))) {
_0x004a = input;
break;
}
}
}
if (!_0x004a) {
log(_0xstr(596));
return false;
}
await _0x00c1(_0x004a, pupCode);
await _0x0034(300);
let _0x00bf = Array.from(document.querySelectorAll(_0xstr(597))).find(btn => {
const _0x00da = btn.innerText || btn.textContent || _0xstr(598);
return _0x00da.trim() === _0xstr(599) || _0x00da.trim() === _0xstr(600);
});
if (_0x00bf) {
_0x00bf.click();
log(_0xstr(601) + pupCode);
} else {
_0x004a.dispatchEvent(new KeyboardEvent(_0xstr(602), { key: _0xstr(603), code: _0xstr(604), keyCode: 13, which: 13, bubbles: true }));
}
await _0x0034(2000);
_0x00dc(_0xstr(605));
const _0x009c = Array.from(document.querySelectorAll(_0xstr(606))).find(el => {
const _0x00da = (el.innerText || el.textContent || _0xstr(607)).trim().toLowerCase();
return _0x00da === _0xstr(608) || _0x00da === _0xstr(609);
});
if (_0x009c && (_0x009c.offsetWidth > 0 || _0x009c.offsetHeight > 0)) {
log(_0xstr(610) + (pupCode) + _0xstr(611));
return false;
}
const _0x00bd = Array.from(document.querySelectorAll(_0xstr(612)));
const _0x0033 = _0x00bd.filter(_0x00bc => _0x00bc.querySelector(_0xstr(613)));
if (_0x0033.length > 0) {
let _0x004d = false;
for (let _0x00bc of _0x0033) {
const _0x00b4 = Array.from(_0x00bc.querySelectorAll(_0xstr(614))).find(el => {
const _0x00da = el.innerText || el.textContent || _0xstr(615);
return _0x00da.trim() === _0xstr(616) || _0x00da.trim() === _0xstr(617) || _0x00da.trim() === _0xstr(618);
});
if (_0x00b4) {
_0x004d = true;
break;
}
}
if (!_0x004d) {
log(_0xstr(619) + (pupCode) + _0xstr(620));
return false;
}
}
let _0x00b5 = false;
for (let _0x00bc of _0x00bd) {
const _0x00b4 = Array.from(_0x00bc.querySelectorAll(_0xstr(621))).find(el => {
const _0x00da = el.innerText || el.textContent || _0xstr(622);
return _0x00da.trim() === _0xstr(623) || _0x00da.trim() === _0xstr(624) || _0x00da.trim() === _0xstr(625);
});
if (_0x00b4) {
log(_0xstr(626));
_0x00b4.click();
await _0x0034(2500);
_0x00dc(_0xstr(627));
const _0x003b = document.querySelectorAll(_0xstr(628));
let _0x00ce = null;
for (const _0x0036 of _0x003b) {
if (_0x0036.offsetWidth > 0 || _0x0036.offsetHeight > 0) {
const text = (_0x0036.innerText || _0x0036.textContent || _0xstr(629));
if (text.includes(_0xstr(630)) || text.includes(_0xstr(631)) || text.includes(_0xstr(632)) || text.includes(_0xstr(633))) {
_0x00ce = _0x0036;
break;
}
}
}
if (_0x00ce) {
let _0x003d = null;
const _0x004c = _0x00ce.querySelectorAll(_0xstr(634));
for (let _0x0079 of _0x004c) {
const _0x007a = _0x0079.querySelector(_0xstr(635));
if (_0x007a) {
const _0x007c = (_0x007a.innerText || _0x007a.textContent || _0xstr(636)).trim().toLowerCase();
if (_0x007c.includes(_0xstr(637)) || _0x007c.includes(_0xstr(638))) {
_0x003d = _0x0079.querySelector(_0xstr(639));
if (_0x003d) break;
}
}
}
if (!_0x003d) {
const _0x0038 = _0x00ce.querySelectorAll(_0xstr(640));
for (let _0x0064 of _0x0038) {
const ph = _0x0064.placeholder || _0xstr(641);
if (ph.toLowerCase().includes(_0xstr(642)) || ph.toLowerCase().includes(_0xstr(643)) || ph.toLowerCase().includes(_0xstr(644))) {
_0x003d = _0x0064;
break;
}
}
}
if (_0x003d) {
const _0x00c0 = _0x003d.closest(_0xstr(645)) || _0x003d.parentElement;
if (_0x00c0) {
_0x00c0.click();
} else {
_0x003d.removeAttribute(_0xstr(646));
_0x003d.click();
}
log(_0xstr(647));
await _0x0034(2200);
_0x00dc(_0xstr(648));
let _0x000d = document.activeElement;
if (!_0x000d || _0x000d.tagName !== _0xstr(649) || !_0x00ce.contains(_0x000d)) {
_0x000d = _0x003d;
}
_0x000d.removeAttribute(_0xstr(650));
_0x000d.focus();
if (typeof _0x000d.select === _0xstr(651)) _0x000d.select();
_0x000d.value = _0xstr(652);
_0x000d.dispatchEvent(new Event(_0xstr(653), { bubbles: true }));
try {
document.execCommand(_0xstr(654), false, recipientDriver);
} catch (e) {}
if (_0x000d.value !== recipientDriver) {
_0x000d.value = recipientDriver;
}
_0x000d.dispatchEvent(new Event(_0xstr(655), { bubbles: true }));
_0x000d.dispatchEvent(new Event(_0xstr(656), { bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(657), { key: _0xstr(658), bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(659), { key: _0xstr(660), bubbles: true }));
log(_0xstr(661) + recipientDriver + _0xstr(662));
await _0x0034(2500);
const _0x0010 = Array.from(document.querySelectorAll(_0xstr(663)));
let _0x0093 = _0x0010.find(el => {
const text = (el.innerText || el.textContent || _0xstr(664)).trim();
return text.includes(recipientDriver) &&
(el.offsetWidth > 0 || el.offsetHeight > 0) &&
(el.classList.contains(_0xstr(665)) ||
el.closest(_0xstr(666)) ||
el.closest(_0xstr(667)) ||
el.tagName === _0xstr(668));
});
if (!_0x0093) {
_0x0093 = _0x0010.find(el => {
const text = (el.innerText || el.textContent || _0xstr(669)).trim();
return text.includes(recipientDriver) &&
(el.closest(_0xstr(670)) || el.closest(_0xstr(671)) || el.tagName === _0xstr(672));
});
}
if (!_0x0093) {
_0x0093 = _0x0010.find(el => {
const text = (el.innerText || el.textContent || _0xstr(673)).trim();
return text.includes(recipientDriver);
});
}
if (_0x0093) {
_0x0093.click();
log(_0xstr(674) + (_0x0093.innerText || _0x0093.textContent).trim());
await _0x0034(1200);
const _0x0037 = Array.from(_0x00ce.querySelectorAll(_0xstr(675))).find(btn => {
const _0x00da = btn.innerText || btn.textContent || _0xstr(676);
return _0x00da.trim() === _0xstr(677) || _0x00da.trim() === _0xstr(678) || _0x00da.trim() === _0xstr(679);
});
if (_0x0037) {
_0x0037.click();
log(_0xstr(680));
let _0x0058 = false;
for (let _0x001c = 0; _0x001c < 30; _0x001c++) {
await _0x0034(100);
const _0x0012 = Array.from(document.querySelectorAll(_0xstr(681)));
const _0x0043 = _0x0012.find(el => {
const _0x00da = (el.innerText || el.textContent || _0xstr(682));
return _0x00da.includes(_0xstr(683)) || _0x00da.includes(_0xstr(684));
});
if (_0x0043 && (_0x0043.offsetWidth > 0 || _0x0043.offsetHeight > 0)) {
log(_0xstr(685) + (_0x0043.textContent.trim()) + _0xstr(686));
_0x0058 = true;
break;
}
}
if (_0x0058) {
let _0x0019 = Array.from(_0x00ce.querySelectorAll(_0xstr(687))).find(btn => {
const _0x00da = (btn.innerText || btn.textContent || _0xstr(688)).trim().toLowerCase();
return _0x00da === _0xstr(689) || _0x00da === _0xstr(690) || _0x00da === _0xstr(691) || _0x00da === _0xstr(692) || _0x00da.includes(_0xstr(693)) || _0x00da.includes(_0xstr(694));
});
if (!_0x0019) {
_0x0019 = Array.from(document.querySelectorAll(_0xstr(695))).find(btn => {
const _0x00da = (btn.innerText || btn.textContent || _0xstr(696)).trim().toLowerCase();
return (_0x00da === _0xstr(697) || _0x00da === _0xstr(698) || _0x00da === _0xstr(699) || _0x00da === _0xstr(700) || _0x00da.includes(_0xstr(701)) || _0x00da.includes(_0xstr(702))) &&
(btn.offsetWidth > 0 || btn.offsetHeight > 0);
});
}
if (_0x0019) {
_0x0019.click();
log(_0xstr(703));
} else {
log(_0xstr(704));
}
await _0x0034(500);
return _0xstr(705);
}
_0x00b5 = true;
await _0x0034(1500);
break;
} else {
log(_0xstr(706));
}
} else {
log(_0xstr(707) + recipientDriver);
}
} else {
log(_0xstr(708));
}
} else {
log(_0xstr(709));
}
}
}
return _0x00b5;
}
function _0x001d() {
const now = Date.now();
if (_0x0070 && _0x0084 > 0 && (now - _0x0084) > _0x0009) {
log(_0xstr(710));
_0x0070 = false;
_0x00b8(_0xstr(711));
_0x0084 = 0;
}
if (_0x0072 && _0x0080 > 0 && (now - _0x0080) > _0x0009) {
log(_0xstr(712));
_0x0072 = false;
_0x00b8(_0xstr(713));
_0x0080 = 0;
}
if (_0x0073 && _0x0083 > 0 && (now - _0x0083) > _0x0009) {
log(_0xstr(714));
_0x0073 = false;
_0x00b8(_0xstr(715));
_0x0083 = 0;
}
if (_0x0071 && _0x007e > 0 && (now - _0x007e) > _0x0009) {
log(_0xstr(716));
_0x0071 = false;
_0x00b8(_0xstr(717));
_0x007e = 0;
}
}
function _0x0024() {
const href = window.location.href;
if (href.includes(_0xstr(718)) || href.includes(_0xstr(719))) {
log(_0xstr(720));
window.location.reload();
return false;
}
return true;
}
const _0x0008 = 60000;
const _0x0007 = 300000;
function _0x006d() {
const hash = window.location.hash || _0xstr(721);
const href = window.location.href;
if (href.includes(_0xstr(722)) || href.includes(_0xstr(723))) return false;
const _0x0092 = document.querySelectorAll(_0xstr(724));
for (const _0x0091 of _0x0092) {
if (_0x0091.offsetWidth > 100 && _0x0091.offsetHeight > 100) {
const style = window.getComputedStyle(_0x0091);
if (style.display !== _0xstr(725) && style.visibility !== _0xstr(726) && style.opacity !== _0xstr(727)) {
return false;
}
}
}
if (hash.includes(_0xstr(728))) {
const textarea = document.querySelector(_0xstr(729)) || document.querySelector(_0xstr(730));
if (!textarea) return false;
const style = window.getComputedStyle(textarea);
return textarea.offsetWidth > 0 && style.display !== _0xstr(731) && style.visibility !== _0xstr(732);
}
if (hash.includes(_0xstr(733))) {
const _0x0017 = Array.from(document.querySelectorAll(_0xstr(734)));
const _0x005c = _0x0017.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(735)).trim().toLowerCase();
const style = window.getComputedStyle(btn);
const _0x0078 = btn.offsetWidth > 0 && style.display !== _0xstr(736) && style.visibility !== _0xstr(737);
return _0x0078 && (text.includes(_0xstr(738)) || text.includes(_0xstr(739)));
});
const _0x005d = document.querySelectorAll(_0xstr(740)).length > 0;
return _0x005c && _0x005d;
}
if (hash.includes(_0xstr(741))) {
const _0x0066 = Array.from(document.querySelectorAll(_0xstr(742)));
const _0x0060 = _0x0066.some(input => {
const type = (input.type || _0xstr(743)).toLowerCase();
const style = window.getComputedStyle(input);
const _0x0077 = type === _0xstr(744) || type === _0xstr(745) || type === _0xstr(746);
return _0x0077 && input.offsetWidth > 0 && style.display !== _0xstr(747) && style.visibility !== _0xstr(748);
});
return _0x0060;
}
if (hash.includes(_0xstr(749))) {
const _0x0066 = Array.from(document.querySelectorAll(_0xstr(750)));
const _0x005b = _0x0066.some(input => {
const style = window.getComputedStyle(input);
return input.offsetWidth > 0 && style.display !== _0xstr(751) && style.visibility !== _0xstr(752);
});
const _0x0017 = Array.from(document.querySelectorAll(_0xstr(753)));
const _0x0056 = _0x0017.some(btn => {
const style = window.getComputedStyle(btn);
return btn.offsetWidth > 0 && style.display !== _0xstr(754) && style.visibility !== _0xstr(755);
});
return _0x005b && _0x0056;
}
return false;
}
function _0x0063() {
const now = Date.now();
log(_0xstr(756));
for (const type of _0x0002) {
localStorage.setItem(_0xstr(757) + type, _0xstr(758));
}
setTimeout(() => {
log(_0xstr(759));
_0x0062(_0xstr(760));
}, 2500);
_0x0088 = now;
}
function _0x001f() {
const _0x0098 = _0x0051();
if (_0x0098) {
const _0x00d8 = localStorage.getItem(_0xstr(761) + _0x0098);
if (_0x00d8 === _0xstr(762)) {
localStorage.removeItem(_0xstr(763) + _0x0098);
log(_0xstr(764));
localStorage.setItem(_0xstr(765) + _0x0098, _0xstr(766));
localStorage.removeItem(_0xstr(767) + _0x0098);
window.close();
}
}
}
function _0x0022() {
const now = Date.now();
if (localStorage.getItem(_0xstr(768)) || localStorage.getItem(_0xstr(769))) return;
const _0x006a = !_0x0070 && !_0x0072 && !_0x0073 && !_0x0071;
if (_0x006a && (now - _0x0088) > _0x0001) {
_0x0063();
}
}
let _0x0096 = 0;
function _0x0095() {
_0x00dd();
_0x00de();
_0x001f();
_0x0013 = localStorage.getItem(_0xstr(770)) || GM_getValue(_0xstr(771), _0x0000);
_0x00a7 = localStorage.getItem(_0xstr(772)) || GM_getValue(_0xstr(773), _0xstr(774));
_0x0074 = localStorage.getItem(_0xstr(775)) === _0xstr(776);
_0x00df();
const _0x0032 = window.location.href;
const hash = window.location.hash || _0xstr(777);
if (_0x0032 !== _0x008a) {
_0x008a = _0x0032;
_0x0072 = false;
_0x0073 = false;
_0x0070 = false;
_0x0071 = false;
}
_0x0053();
if (!_0x0074) return;
_0x0096++;
if (_0x0096 % 75 === 0) {
_0x001d();
_0x001e();
_0x0024();
_0x0022();
_0x0015();
}
if (hash.includes(_0xstr(778))) {
_0x00c4();
}
if (hash.includes(_0xstr(779))) {
_0x00ad();
}
if (hash.includes(_0xstr(780))) {
_0x00ac();
}
if (hash.includes(_0xstr(781))) {
_0x00c3();
}
}
window.addEventListener(_0xstr(782), (e) => {
if (e.data && e.data.type === _0xstr(783)) {
_0x00dd();
if (_0x0074) {
_0x001e();
const hash = window.location.hash || _0xstr(784);
if (hash.includes(_0xstr(785))) {
_0x00c4();
} else if (hash.includes(_0xstr(786))) {
_0x00ad();
} else if (hash.includes(_0xstr(787))) {
_0x00ac();
} else if (hash.includes(_0xstr(788))) {
_0x00c3();
}
}
}
});
_0x00dd();
let _0x00e7 = null;
try {
const _0x0016 = new Blob([_0xstr(789)], { type: _0xstr(790) });
const _0x00e8 = URL.createObjectURL(_0x0016);
_0x00e7 = new Worker(_0x00e8);
_0x00e7.onmessage = function(e) {
if (e.data === _0xstr(791)) {
_0x0095();
}
};
log(_0xstr(792));
} catch (err) {
log(_0xstr(793));
function _0x0049() {
_0x0095();
setTimeout(_0x0049, 400);
}
_0x0049();
}
}
if (document.readyState === _0xstr(794)) {
document.addEventListener(_0xstr(795), init);
} else {
init();
}
})();
} catch (e) {
    console.error("Script Runtime Error:", e);
    const errDiv = document.createElement("div");
    errDiv.style.cssText = "position: fixed; bottom: 20px; left: 20px; z-index: 999999; background-color: #f44336; color: white; padding: 20px; border-radius: 8px; font-family: monospace; font-size: 14px; max-width: 500px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); border: 2px solid #fff; white-space: pre-wrap; line-height: 1.5;";
    errDiv.innerHTML = `<h3 style="margin:0 0 10px 0; font-size:16px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.3); padding-bottom:5px;">⚠️ VTDAuto Runtime Error</h3><b>Message:</b>\n${e.message}\n\n<b>Stack:</b>\n${e.stack || "No stack"}`;
    
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = " &times; ";
    closeBtn.style.cssText = "position: absolute; top: 5px; right: 10px; cursor: pointer; font-size: 20px; font-weight: bold;";
    closeBtn.onclick = () => errDiv.remove();
    errDiv.appendChild(closeBtn);
    
    if (document.body) {
        document.body.appendChild(errDiv);
    } else {
        document.addEventListener("DOMContentLoaded", () => document.body.appendChild(errDiv));
    }
}
