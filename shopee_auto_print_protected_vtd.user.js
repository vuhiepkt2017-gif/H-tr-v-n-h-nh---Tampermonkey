// ==UserScript==
// @name         Hỗ trợ VTDStadio
// @namespace    http://VTDStadio.net/
// @version      7.4
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
        'c3B4LnNob3BlZS52bg==',
        'c3B4ZXhwcmVzcy5jb20=',
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
        'QuG6r24gUGljaw==',
        'aHR0cHM6Ly9zcHguc2hvcGVlLnZuLyMvcGlja3VwT3JkZXIvY3JlYXRlTmV3',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
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
        'dW5kZWZpbmVk',
        'bnVsbA==',
        '',
        'UENfMDE=',
        'c2hvcGVlX3BjX25hbWU=',
        'UENfMDE=',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'MQ==',
        'YXV0b19wcmludF9lbmFibGVk',
        'dHJ1ZQ==',
        'YXNzaWduX3BpY2tfZW5hYmxlZA==',
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
        'YXdiUHJpbnQ=',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzaw==',
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
        'Ij4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMTBweDsiPgogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT0iZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDRweDsgY29sb3I6ICNhYWE7Ij7EkOG7mSDGsHUgdGnDqm4gdGhp4bq/dCBi4buLOjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0iYXAtcHJpb3JpdHktc2VsZWN0IiBzdHlsZT0id2lkdGg6IDk5JTsgcGFkZGluZzogNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICM1NTU7IGJhY2tncm91bmQtY29sb3I6ICMyYTJhMzU7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAxMXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjEiIA==',
        'MQ==',
        'c2VsZWN0ZWQ=',
        '',
        'PjEgKE3hurdjIMSR4buLbmggLSBUaOG6pXApPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjIiIA==',
        'Mg==',
        'c2VsZWN0ZWQ=',
        '',
        'PjIgKFRydW5nIGLDrG5oKTwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIzIiA=',
        'Mw==',
        'c2VsZWN0ZWQ=',
        '',
        'PjMgKENhbyBuaOG6pXQgLSDGr3UgdGnDqm4pPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyI+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYXAtc2F2ZS11cmwiIHN0eWxlPSJmbGV4OiAxOyBwYWRkaW5nOiA2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyBjb2xvcjogd2hpdGU7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7Ij5MxrB1PC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYXAtdG9nZ2xlLWJ0biIgc3R5bGU9ImZsZXg6IDEuNTsgcGFkZGluZzogNnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgY29sb3I6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiBib2xkOyI+QuG6r3QgxJHhuqd1IGNo4bqheTwvYnV0dG9uPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tYm90dG9tOiAxMHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDsgcGFkZGluZy10b3A6IDhweDsiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4OCwgMjEyLCAwLjA4KTsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE4OCwgMjEyLCAwLjI1KTsiPgogICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPSJjb2xvcjogIzAwYmNkNDsgZm9udC1zaXplOiAxMXB4OyI+VMOtbmggbsSDbmcgQuG6r24gUGljazo8L3N0cm9uZz4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iZGlzcGxheTogZmxleDsgZ2FwOiA2cHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJhcC1hc3NpZ24tcGljay10YWItc3RhdHVzIiBzdHlsZT0iZm9udC1zaXplOiA5cHg7IHBhZGRpbmc6IDJweCA1cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgY29sb3I6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiBib2xkOyIgdGl0bGU9IkLhuqVtIMSR4buDIG3hu58gdGFiIELhuq9uIFBpY2siPlRhYjogVOG6r3Q8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJhcC10b2dnbGUtYXNzaWduLXBpY2stYnRuIiBzdHlsZT0icGFkZGluZzogM3B4IDhweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7IGNvbG9yOiB3aGl0ZTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxMHB4OyBvdXRsaW5lOiBub25lOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7Ij5O4bqhcC4uLjwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMTBweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7IHBhZGRpbmctdG9wOiA4cHg7Ij4KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA2cHg7IGNvbG9yOiAjZmY5ODAwOyBmb250LXdlaWdodDogYm9sZDsiPlRy4bqhbmcgdGjDoWkgY8OhYyBUYWIgKEF1dG8tT3Blbik6PC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyBnYXA6IDZweDsiIGlkPSJhcC10YWJzLXN0YXR1cy1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRhYiBzdGF0dXMgaXRlbXMgd2lsbCBiZSByZW5kZXJlZCBoZXJlIGR5bmFtaWNhbGx5IC0tPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImFwLW9wZW4tYWxsLXRhYnMtYnRuIiBzdHlsZT0id2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDhweDsgcGFkZGluZzogNnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJvcmRlcjogMXB4IGRhc2hlZCAjZmY5ODAwOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpOyBjb2xvcjogI2ZmOTgwMDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxMXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIPCfmoAgTeG7nyB04bqldCBj4bqjIGPDoWMgVGFiIGhv4bqhdCDEkeG7mW5nCiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICMxMjEyMTY7IHBhZGRpbmc6IDhweDsgYm9yZGVyLXJhZGl1czogNnB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDExcHg7IG1heC1oZWlnaHQ6IDgwcHg7IG92ZXJmbG93LXk6IGF1dG87IGJvcmRlcjogMXB4IHNvbGlkICMyMjI7IiBpZD0iYXAtbG9nLWJveCI+CiAgICAgICAgICAgICAgICAgICAgW0jhu4cgdGjhu5FuZ10gxJBhbmcgdOG6o2kuLi4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA=',
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
        'cGVuZGluZ18=',
        '',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'YXNzaWduUGljaw==',
        'YXAtYXNzaWduLXBpY2stdGFiLXN0YXR1cw==',
        'VGFiOiBN4buf',
        'VGFiOiBU4bqvdA==',
        'IzRjYWY1MA==',
        'I2Y0NDMzNg==',
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
        'YXNzaWduUGljaw==',
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
        'U0hPUEVFX09QRU5fVEFCX1JFUVVFU1Q=',
        'Kg==',
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
        'U0hPUEVFX09QRU5fVEFCX1JFUVVFU1Q=',
        'Kg==',
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
        'YXAtcHJpb3JpdHktc2VsZWN0',
        'MQ==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        '',
        'SEFZX0RJRU5fVVJM',
        '',
        'Tmjhuq1wIG3huq10IGto4bqpdSB4w6FjIHRo4buxYyDEkeG7gyB0aGF5IMSR4buVaSBXZWIgQXBwIFVSTDo=',
        'U1BYVk4wMjI4JA==',
        'TeG6rXQga2jhuql1IGtow7RuZyBjaMOtbmggeMOhYyEgS2jDtG5nIHRo4buDIHRoYXkgxJHhu5VpIFdlYiBBcHAgVVJMLg==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'xJDDoyBsxrB1IGPhuqV1IGjDrG5oLiBQQzog',
        'LCDEkOG7mSDGsHUgdGnDqm46IA==',
        '',
        '',
        'xJBhbmcgxJHhu5NuZyBi4buZIFdlYiBBcHAgVVJMIG3hu5tpIGzDqm4gR29vZ2xlIFNoZWV0Li4u',
        'UE9TVA==',
        'dXBkYXRlX3dlYmFwcF91cmw=',
        'xJDhu5NuZyBi4buZIFdlYiBBcHAgVVJMIG3hu5tpIGzDqm4gR29vZ2xlIFNoZWV0IHRow6BuaCBjw7RuZyE=',
        'TOG7l2kgxJHhu5NuZyBi4buZIFdlYiBBcHAgVVJMIGzDqm4gU2hlZXQ6IA==',
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
        'YXAtdG9nZ2xlLWFzc2lnbi1waWNrLWJ0bg==',
        'YXAtYXNzaWduLXBpY2stdGFiLXN0YXR1cw==',
        'QuG6rFQ=',
        'VOG6rlQ=',
        'IzRjYWY1MA==',
        'Izc3Nzc3Nw==',
        'Y2xpY2s=',
        'YXNzaWduX3BpY2tfZW5hYmxlZA==',
        'dHJ1ZQ==',
        'ZmFsc2U=',
        'W0Lhuq9uIFBpY2tdIMSQw6Mg',
        'QuG6rFQ=',
        'VOG6rlQ=',
        'IHTDrW5oIG7Eg25nIELhuq9uIFBpY2su',
        'Y2xpY2s=',
        'dW5kZWZpbmVk',
        'X2JsYW5r',
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
        'JnByaW9yaXR5PQ==',
        'MQ==',
        '',
        'SOG6v3QgdGjhu51pIGdpYW4gY2jhu50gKA==',
        'cykga2hpIGfhu41pIA==',
        'IChM4bqnbiA=',
        'KQ==',
        '',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'W0PhuqV1IGjDrG5oXSBU4buxIMSR4buZbmcgxJHhu5NuZyBi4buZIFdlYmFwcCBVUkwgbeG7m2k6IA==',
        '',
        'dW5kZWZpbmVk',
        'c3luY19hY3RpdmVfd2ViYXBwX3VybA==',
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
        'MQ==',
        'QVBJIGNhbGwg',
        'IGZhaWxlZDog',
        'LiBSZXRyeWluZyBpbiAycy4uLg==',
        '',
        'UGjDoXQgaGnhu4duIHRhYiBob+G6t2MgY+G7rWEgc+G7lSBDaHJvbWUgxJFhbmcgY2jhuqF5IOG6qW4vbeG6pXQgZm9jdXMuIMSQYW5nIGvDrWNoIGhv4bqhdCB0YWIuLi4=',
        'U0hPUEVFX0FDVElWQVRFX1RBQl9SRVFVRVNU',
        'Kg==',
        '',
        'YXdiUHJpbnQ=',
        'YXdiUHJpbnQ=',
        'cGVuZGluZ19hd2JQcmludA==',
        'dHJ1ZQ==',
        'YXdiUHJpbnQ=',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmc=',
        'c3VjY2Vzcw==',
        'VMOsbSB0aOG6pXkgbMO0IGfhu5NtIA==',
        'IG3DoyDEkeG7gyBpbi4=',
        'xJDDoyBpbiBsw7QgdGjDoG5oIGPDtG5nLiBUaMOgbmggY8O0bmc6IA==',
        'LCBUaOG6pXQgYuG6oWk6IA==',
        '',
        'UE9TVA==',
        'dXBkYXRlX2NvZGVfc3RhdHVz',
        'xJDDoyBpbg==',
        'W0luIEJpbGxdIMSQw6MgY+G6rXAgbmjhuq10ICfEkMOjIGluJyBjaG86IA==',
        '',
        'W0luIEJpbGxdIEzhu5dpIGPhuq1wIG5o4bqtdCAnxJDDoyBpbicgY2hvIA==',
        'OiA=',
        '',
        'UE9TVA==',
        'dXBkYXRlX2NvZGVfc3RhdHVz',
        'TcOjIGzhu5dp',
        'W0luIEJpbGxdIMSQw6MgY+G6rXAgbmjhuq10ICdNw6MgbOG7l2knIGNobzog',
        '',
        'W0luIEJpbGxdIEzhu5dpIGPhuq1wIG5o4bqtdCAnTcOjIGzhu5dpJyBjaG8g',
        'OiA=',
        '',
        'VGjhuqV0IGLhuqFpIGtoaSBpbiBsw7QuIEPhuq1wIG5o4bqtdCB0cuG6oW5nIHRow6FpICdNw6MgbOG7l2knIGNobyBj4bqjIGzDtC4uLg==',
        'UE9TVA==',
        'dXBkYXRlX2NvZGVfc3RhdHVz',
        'TcOjIGzhu5dp',
        'W0luIEJpbGxdIMSQw6MgY+G6rXAgbmjhuq10ICdNw6MgbOG7l2knIGNobzog',
        '',
        'W0luIEJpbGxdIEzhu5dpIGPhuq1wIG5o4bqtdCBs4buXaSBjaG8g',
        'OiA=',
        '',
        'TOG7l2kgaW4gdGjGsOG7nW5nOiA=',
        '',
        'cGVuZGluZ19hd2JQcmludA==',
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
        'b25ob2xk',
        'c3RhdHVz',
        'YWxsb3c=',
        'a2jDtG5nIGNobyBwaMOpcA==',
        'bm90IGFsbG93ZWQ=',
        'a2jDtG5nIHRo4buD',
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
        'W0luIEJpbGxdIFF1w6EgdGjhu51pIGdpYW4gY2jhu50gbuG6oXAgbcOjIHbhuq1uIMSRxqFuIGzDqm4gZ2lhbyBkaeG7h24u',
        'YnV0dG9uLCBzcGFuLCBh',
        '',
        'cHJpbnQ=',
        'YnV0dG9u',
        '',
        'cHJpbnQ=',
        '',
        'Y2FuY2Vs',
        'xJHDs25n',
        'Y2xvc2U=',
        'W0luIEJpbGxdIMSQw6MgY2xpY2sgbsO6dCBpbiB4w6FjIG5o4bqtbiB0csOqbiBwb3B1cC4=',
        'W0luIEJpbGxdIEtow7RuZyBwaMOhdCBoaeG7h24gcG9wdXAgeMOhYyBuaOG6rW4sIGLhu48gcXVhIGLGsOG7m2MgY2xpY2sgeMOhYyBuaOG6rW4u',
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
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGVuZGluZ19zdGFydFBhY2tOb0xhYmVs',
        'dHJ1ZQ==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfdG8=',
        'c3VjY2Vzcw==',
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
        'LiBD4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSAnTcOjIGzhu5dpJyBsw6puIFNoZWV0Li4u',
        'UE9TVA==',
        'bWFya190b19wcmludGVk',
        'TcOjIGzhu5dp',
        'W1RPIEluXSBM4buXaSBj4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSBs4buXaSBjaG8g',
        'OiA=',
        '',
        'W1RPIEluXSBLaMO0bmcgdMOsbSB0aOG6pXkgw7Qgbmjhuq1wIFRPIE51bWJlciB0csOqbiBtw6BuIGjDrG5oISBD4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSAnTcOjIGzhu5dpJyBsw6puIFNoZWV0Li4u',
        'UE9TVA==',
        'bWFya190b19wcmludGVk',
        'TcOjIGzhu5dp',
        'W1RPIEluXSBM4buXaSBj4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSBs4buXaSBjaG8g',
        '',
        'W1RPIEluXSBM4buXaSBj4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSBs4buXaSBjaG8g',
        'OiA=',
        '',
        'TOG7l2kgSW4gVE86IA==',
        '',
        'cGVuZGluZ19zdGFydFBhY2tOb0xhYmVs',
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
        'cGlja3VwVGFzaw==',
        'cGVuZGluZ19waWNrdXBUYXNr',
        'dHJ1ZQ==',
        'cGlja3VwVGFzaw==',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfY2h1eWVuX3BpY2s=',
        'c3VjY2Vzcw==',
        'UFVQIA==',
        'IMSRw6MgxJHGsOG7o2MgeOG7rSBsw70gZ+G6p24gxJHDonkgKGTGsOG7m2kgMzBzKS4gQuG7jyBxdWEgdGhhbyB0w6FjIHRyw7luZyBs4bq3cC4=',
        'VMOsbSB0aOG6pXkgbmhp4buHbSB24bulIENodXnhu4NuIFBpY2s6IFBVUD0=',
        'LCBOaOG6rW49',
        'IChH4buRYzog',
        'KQ==',
        'YXNzaWduZWRfZHJpdmVyXw==',
        'YXNzaWduZWRfZHJpdmVyX3RpbWVf',
        'MA==',
        'UFVQIA==',
        'IMSRw6MgxJHGsOG7o2MgZ8OhbiBjaG8g',
        'IHRyxrDhu5tjIMSRw7MgKGTGsOG7m2kgMjAgcGjDunQpLiBHaGkgbmjhuq1uIHRow6BuaCBjw7RuZyB0cuG7sWMgdGnhur9wLg==',
        'UE9TVA==',
        'dXBkYXRlX2hhbmRvdmVyX3N0YXR1cw==',
        'xJDDoyBjaHV54buDbg==',
        'W0NodXnhu4NuIFBpY2tdIMSQw6MgZ2hpIG5o4bqtbiB0aMOgbmggY8O0bmcgdOG7qyBjYWNoZSBjaG8g',
        'Lg==',
        'W0NodXnhu4NuIFBpY2tdIEzhu5dpIMSR4buTbmcgYuG7mSB0aMOgbmggY8O0bmcgY2hvIA==',
        'OiA=',
        '',
        'YWxyZWFkeV9iZWxvbmdz',
        'YXNzaWduZWRfZHJpdmVyXw==',
        'YXNzaWduZWRfZHJpdmVyX3RpbWVf',
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
        '',
        'MTEwOTAxMDAy',
        'YWxyZWFkeSBiZWxvbmdzIHRvIHRoaXMgZHJpdmVy',
        'W0NodXnhu4NuIFBpY2tdIFBow6F0IGhp4buHbiBs4buXaSB0w6BpIHjhur8gxJHDoyB0aHXhu5ljIG5oaeG7h20gduG7pS4=',
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
        'LmVsLWRpYWxvZ19faGVhZGVyYnRuLCBbY2xhc3MqPSJjbG9zZSJdLCBbY2xhc3MqPSJoZWFkZXJidG4iXQ==',
        'W0NodXnhu4NuIFBpY2tdIMSQw6MgY2xpY2sgbsO6dCBI4buneS9DbG9zZSDEkeG7gyDEkcOzbmcgaOG7mXAgdGhv4bqhaSBSZWFzc2lnbi4=',
        'W0NodXnhu4NuIFBpY2tdIEPhuqNuaCBiw6FvOiBLaMO0bmcgdMOsbSB0aOG6pXkgbsO6dCBDbG9zZS9I4buneSB0csOqbiBnaWFvIGRp4buHbiDEkeG7gyDEkcOzbmcgaOG7mXAgdGhv4bqhaSE=',
        'YWxyZWFkeV9iZWxvbmdz',
        'Q+G6o25oIGLDoW86IEtow7RuZyB0w6xtIHRo4bqleSBuw7p0IENvbmZpcm0gdHJvbmcgZGlhbG9nIQ==',
        'S2jDtG5nIHTDrG0gdGjhuqV5IHTDuXkgY2jhu41uIHTDoGkgeOG6vyB0cm9uZyBkYW5oIHPDoWNoOiA=',
        'S2jDtG5nIHTDrG0gdGjhuqV5IMO0IGNo4buNbiB0w6BpIHjhur8gdHJvbmcgZGlhbG9nIQ==',
        'S2jDtG5nIHTDrG0gdGjhuqV5IERpYWxvZyBjaHV54buDbiBnaWFvIQ==',
        '',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
        'YXNzaWduUGljaw==',
        'cGVuZGluZ19hc3NpZ25QaWNr',
        'dHJ1ZQ==',
        'YXNzaWduUGljaw==',
        'UE9TVA==',
        'Z2V0X2Fzc2lnbl9waWNrX3N0YXRl',
        'c3VjY2Vzcw==',
        'S2jDtG5nIHRo4buDIHThuqNpIHRy4bqhbmcgdGjDoWkgQXNzaWduIFBpY2sgdOG7qyBHQVM=',
        'W0Lhuq9uIFBpY2tdIERhbmggc8OhY2ggdHLDqm4gdHJhbmcgdMOtbmggdHLhu5FuZy4gVGnhur9uIGjDoG5oIGPDoG8gZOG7ryBsaeG7h3UuLi4=',
        'dGg=',
        '',
        'cGlja3VwIHBvaW50IGlk',
        'c2hvcC9zcCBuYW1lcw==',
        'c2hvcC9zcCBhZGRyZXNz',
        'bWFwcGVkIHB1cGc=',
        'W0Lhuq9uIFBpY2tdIEPhuqNuaCBiw6FvOiBLaMO0bmcgdMOsbSB0aOG6pXkgY+G7mXQgUGlja3VwIFBvaW50IElEIHRyw6puIHRyYW5nIHdlYi4=',
        'LmVsLXRhYmxlX19yb3c=',
        'dGQ=',
        '',
        '',
        '',
        'W0Lhuq9uIFBpY2tdIEPDoG8gdGjDoG5oIGPDtG5nIA==',
        'IG3DoyBQVVAuIEfhu61pIGzDqm4gR29vZ2xlIFNoZWV0cy4uLg==',
        'UE9TVA==',
        'c2F2ZV9hc3NpZ25fcGlja19zY3JhcGVk',
        'W0Lhuq9uIFBpY2tdIMSQw6MgY+G6rXAgbmjhuq10IGThu68gbGnhu4d1IGPDoG8gbMOqbiBTaGVldHMuIFZ1aSBsw7JuZyBi4buVIHN1bmcgSUQgUmlkZXIu',
        'W0Lhuq9uIFBpY2tdIEtow7RuZyB0w6xtIHRo4bqleSBkw7JuZyBk4buvIGxp4buHdSBuw6BvIGto4bqjIGThu6VuZyB0csOqbiBi4bqjbmcgU2hvcGVlLg==',
        'W0Lhuq9uIFBpY2tdIEPhu5l0IElEIFJpZGVyIHRy4buRbmcgaG/DoG4gdG/DoG4uIFThuqFtIGThu6tuZyDEkeG7gyBjaOG7nSBuaOG6rXAgUmlkZXIgSUQu',
        '',
        'W0Lhuq9uIFBpY2tdIFBow6F0IGhp4buHbiBtw6MgUFVQIA==',
        'IGtow7RuZyBjw7MgUmlkZXIgSUQuIFRp4bq/biBow6BuaCBjaHV54buDbiBzYW5nIHbDuW5nIE1BUCBs4buXaS4uLg==',
        'UE9TVA==',
        'dXBkYXRlX2Fzc2lnbl9waWNrX3Rhc2s=',
        'Y29weV90b19tYXA=',
        '',
        'W0Lhuq9uIFBpY2tdIMSQYW5nIHRo4buxYyBoaeG7h24gZ8OhbiB0w6BpIHjhur8gY2hvIG3DoyBQVVA6IA==',
        'IC0+IFJpZGVyIElEOiA=',
        '',
        'LmVsLXRhYmxlX19yb3c=',
        '',
        'LmVsLWNoZWNrYm94X19pbnB1dA==',
        'aW5wdXRbdHlwZT0iY2hlY2tib3giXQ==',
        'aXMtY2hlY2tlZA==',
        'YnV0dG9u',
        '',
        'YXNzaWdu',
        'cGjDom4gYuG7lQ==',
        'LmVsLWRpYWxvZw==',
        'LmVsLW92ZXJsYXk=',
        'W3JvbGU9ImRpYWxvZyJd',
        'aW5wdXRbcGxhY2Vob2xkZXIqPSJEcml2ZXIiXQ==',
        'aW5wdXRbcGxhY2Vob2xkZXIqPSJ0w6BpIHjhur8iXQ==',
        'LmVsLXNlbGVjdF9faW5wdXQ=',
        'aW5wdXQ=',
        'aW5wdXQ=',
        'Y2hhbmdl',
        'LmVsLXNlbGVjdC1kcm9wZG93bl9faXRlbQ==',
        '',
        'W0Lhuq9uIFBpY2tdIMSQw6MgY2jhu41uIHTDoGkgeOG6vzog',
        '',
        'YnV0dG9u',
        '',
        'Y29uZmlybQ==',
        'eMOhYyBuaOG6rW4=',
        'W0Lhuq9uIFBpY2tdIMSQw6MgQ29uZmlybSBnw6FuIHRow6BuaCBjw7RuZy4=',
        'UE9TVA==',
        'dXBkYXRlX2Fzc2lnbl9waWNrX3Rhc2s=',
        'c3VjY2Vzcw==',
        'S2jDtG5nIHTDrG0gdGjhuqV5IG7DunQgQ29uZmlybSB0csOqbiBwb3B1cA==',
        'W0Lhuq9uIFBpY2tdIEtow7RuZyB0w6xtIHRo4bqleSBtw6MgUmlkZXIg',
        'IHRyw6puIFNob3BlZS4gQ2h1eeG7g24gc2FuZyBNQVAuLi4=',
        'YnV0dG9u',
        '',
        'Y2FuY2Vs',
        'aOG7p3k=',
        'UE9TVA==',
        'dXBkYXRlX2Fzc2lnbl9waWNrX3Rhc2s=',
        'Y29weV90b19tYXA=',
        'S2jDtG5nIHTDrG0gdGjhuqV5IMO0IG5o4bqtcCBEcml2ZXIgdHLDqm4gcG9wdXA=',
        'S2jDtG5nIGhp4buDbiB0aOG7iyBkaWFsb2cgZ8OhbiB0w6BpIHjhur8=',
        'S2jDtG5nIHTDrG0gdGjhuqV5IG7DunQgQXNzaWdu',
        'W0Lhuq9uIFBpY2tdIEtow7RuZyB0w6xtIHRo4bqleSBtw6MgUFVQIA==',
        'IHRyw6puIHRyYW5nIHdlYiBoaeG7h24gdOG6oWkuIENodXnhu4NuIHNhbmcgTUFQLi4u',
        'UE9TVA==',
        'dXBkYXRlX2Fzc2lnbl9waWNrX3Rhc2s=',
        'Y29weV90b19tYXA=',
        'W0Lhuq9uIFBpY2tdIEhvw6BuIHRow6BuaCB0b8OgbiBi4buZIGRhbmggc8OhY2guIFRp4bq/biBow6BuaCBi4bqlbSBTZWFyY2ggcXXDqXQgZGFuaCBzw6FjaCBt4bubaS4uLg==',
        'YnV0dG9u',
        '',
        'c2VhcmNo',
        'dMOsbSBraeG6v20=',
        'W0Lhuq9uIFBpY2tdIEzhu5dpOiA=',
        '',
        'cGVuZGluZ19hc3NpZ25QaWNr',
        'YXNzaWduUGljaw==',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIEluIEJpbGwgYuG7iyB0cmVvIHF1w6EgMzAgZ2nDonkuIFThu7EgxJHhu5luZyBnaeG6o2kgcGjDs25nLi4u',
        'YXdiUHJpbnQ=',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIFF1w6l0IFRPIGLhu4sgdHJlbyBxdcOhIDMwIGdpw6J5LiBU4buxIMSR4buZbmcgZ2nhuqNpIHBow7NuZy4uLg==',
        'Z2VuZXJhbFBhY2tUT0xpc3Q=',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIEluIFRPIGLhu4sgdHJlbyBxdcOhIDMwIGdpw6J5LiBU4buxIMSR4buZbmcgZ2nhuqNpIHBow7NuZy4uLg==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIENodXnhu4NuIFBpY2sgYuG7iyB0cmVvIHF1w6EgMzAgZ2nDonkuIFThu7EgxJHhu5luZyBnaeG6o2kgcGjDs25nLi4u',
        'cGlja3VwVGFzaw==',
        'W0tow7RpIHBo4bulY10gUGjDoXQgaGnhu4duIELhuq9uIFBpY2sgYuG7iyB0cmVvIHF1w6EgMzAgZ2nDonkuIFThu7EgxJHhu5luZyBnaeG6o2kgcGjDs25nLi4u',
        'YXNzaWduUGljaw==',
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
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'YnV0dG9u',
        '',
        'dMOsbSBraeG6v20=',
        'c2VhcmNo',
        'dGg=',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'aW5wdXQ=',
        'dGV4dA==',
        'dGV4dA==',
        'c2VhcmNo',
        '',
        'cGlja3VwVGFzaw==',
        'aW5wdXQ=',
        'YnV0dG9u',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
        'YnV0dG9u',
        '',
        'c2VhcmNo',
        'dMOsbSBraeG6v20=',
        'W1NtYXJ0IFJlbG9hZF0gxJBhbmcgdGnhur9uIGjDoG5oIMSRw7NuZyB0YWIgbG/huqFpOiA=',
        '',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'U0hPUEVFX0NMT1NFX1RBQl9SRVFVRVNU',
        'Kg==',
        'W1NtYXJ0IFJlbG9hZF0gd2luZG93LmNsb3NlKCkgYmxvY2tlZCBieSBicm93c2VyLCByZWx5aW5nIG9uIEV4dGVuc2lvbiB0YWJzLnJlbW92ZQ==',
        'W1NtYXJ0IFJlbG9hZF0gUGjDoXQgbOG7h25oIMSRw7NuZyB04bqldCBj4bqjIGPDoWMgdGFiIGtow6FjIMSR4buDIGzDoG0gbeG7m2kuLi4=',
        'Y2xvc2VfdGFiX3RyaWdnZXJfdGltZV8=',
        'W1NtYXJ0IFJlbG9hZF0gQuG6r3QgxJHhuqd1IG3hu58gbOG6oWkgdHXhuqduIHThu7EgY8OhYyB0YWIuLi4=',
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'b3BlbmluZw==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'c2VxX29wZW5fcmV0cnk=',
        'W03hu58gVGFiXSDwn5SEIFRhYiBoaeG7h24gdOG6oWkgY2jDrW5oIGzDoCB0YWIgxJHhuqd1IHRpw6puICg=',
        'KSAtIEY1IMSR4buDIGLhuq90IMSR4bqndSBjaHXhu5dpLi4u',
        'W03hu58gVGFiXSDinqEgTeG7nyB0YWIgxJHhuqd1IHRpw6puIGPhu6dhIGNodeG7l2k6IA==',
        'Li4u',
        'U0hPUEVFX09QRU5fVEFCX1JFUVVFU1Q=',
        'Kg==',
        'W1NtYXJ0IFJlbG9hZF0gVGFiIMSRaeG7gXUgcGjhu5FpIMSRw6MgcGjDoXQgbOG7h25oIG3hu58gY2h14buXaSB0aMOgbmggY8O0bmcsIHThu7EgxJHDs25nLi4u',
        'Y2xvc2VfdGFiX3RyaWdnZXJfdGltZV8=',
        'W0jhu4cgdGjhu5FuZ10gTmjhuq1uIGzhu4duaCBsw6BtIG3hu5tpIHR14bqnbiB04buxIG5oxrBuZyB0YWIgxJFhbmcgYuG6rW4geOG7rSBsw70gdGFzay4gSG/Do24gdmnhu4djIMSRw7NuZyB0YWIuLi4=',
        'W0jhu4cgdGjhu5FuZ10gTmjhuq1uIGzhu4duaCBsw6BtIG3hu5tpIHR14bqnbiB04buxLiDEkGFuZyDEkcOzbmcgdGFiIG7DoHkuLi4=',
        'W1Thu7EgxJHhu5luZyBsw6BtIG3hu5tpXSBUYWIgxJHDoyBob+G6oXQgxJHhu5luZyBsacOqbiB04bulYyAzMCBwaMO6dC4gVGnhur9uIGjDoG5oIEY1IGzDoG0gbeG7m2kgdHJhbmcuLi4=',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'Z29vZ2xlX2FwcHNfc2NyaXB0X3VybA==',
        'c2hvcGVlX3BjX25hbWU=',
        'c2hvcGVlX3BjX25hbWU=',
        'UENfMDE=',
        'dW5kZWZpbmVk',
        'bnVsbA==',
        '',
        'UENfMDE=',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'MQ==',
        'YXV0b19wcmludF9lbmFibGVk',
        'dHJ1ZQ==',
        'YXNzaWduX3BpY2tfZW5hYmxlZA==',
        'dHJ1ZQ==',
        '',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzay9saXN0',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
        'bWVzc2FnZQ==',
        'U0hPUEVFX1dBS0VfVVBfUElORw==',
        '',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzay9saXN0',
        'U0hPUEVFX1RSSUdHRVJfT1BFTl9BTExfVEFCUw==',
        'W0jhu4cgdGjhu5FuZ10gTmjhuq1uIHnDqnUgY+G6p3UgdOG7sSDEkeG7mW5nIG3hu58gdOG6pXQgY+G6oyBjw6FjIHRhYi4=',
        'bWFudWFs',
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
const _0x0082 = window.location.host.includes(_0xstr(0)) || window.location.host.includes(_0xstr(1));
if (!_0x0082) {
return;
}
if (typeof GM_getValue === _0xstr(2)) {
globalThis.GM_getValue = (key, def) => {
const _0x0109 = localStorage.getItem(key);
return _0x0109 !== null ? _0x0109 : def;
};
}
if (typeof GM_setValue === _0xstr(3)) {
globalThis.GM_setValue = (key, _0x0109) => {
localStorage.setItem(key, _0x0109);
};
}
if (typeof GM_registerMenuCommand === _0xstr(4)) {
globalThis.GM_registerMenuCommand = (name, fn) => {
console.log(_0xstr(5), name);
};
}
if (typeof GM_openInTab === _0xstr(6)) {
globalThis.GM_openInTab = (url, options) => {
const active = options && options.active !== undefined ? options.active : true;
window.postMessage({ type: _0xstr(7), url, active }, _0xstr(8));
};
}
if (typeof GM_xmlhttpRequest === _0xstr(9)) {
globalThis.GM_xmlhttpRequest = (options) => {
const reqId = _0xstr(10) + Math.random().toString(36).substring(2, 9);
window.addEventListener(_0xstr(11), function _0x0060(e) {
if (e.data && e.data.type === _0xstr(12) && e.data.reqId === reqId) {
window.removeEventListener(_0xstr(13), _0x0060);
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
options.onerror(new Error(e.data.error || _0xstr(14)));
}
}
}
});
window.postMessage({ type: _0xstr(15), reqId, options: {
url: options.url,
method: options.method,
data: options.data
}}, _0xstr(16));
};
}
if (typeof unsafeWindow === _0xstr(17)) {
globalThis.unsafeWindow = window;
}
const _0x000a = {
awbPrint: {
name: _0xstr(18),
url: _0xstr(19),
hashKey: _0xstr(20)
},
generalPackTOList: {
name: _0xstr(21),
url: _0xstr(22),
hashKey: _0xstr(23)
},
startPackNoLabel: {
name: _0xstr(24),
url: _0xstr(25),
hashKey: _0xstr(26)
},
pickupTask: {
name: _0xstr(27),
url: _0xstr(28),
hashKey: _0xstr(29)
},
assignPick: {
name: _0xstr(30),
url: _0xstr(31),
hashKey: _0xstr(32)
}
};
function _0x005c() {
const hash = window.location.hash || _0xstr(33);
const _0x00ba = hash.split(_0xstr(34))[0];
for (const [type, _0x0020] of Object.entries(_0x000a)) {
if (_0x00ba.includes(_0x0020.hashKey)) {
return type;
}
}
return null;
}
let _0x00e9 = sessionStorage.getItem(_0xstr(35));
if (!_0x00e9) {
_0x00e9 = _0xstr(36) + Math.random().toString(36).substring(2, 10) + _0xstr(37) + Date.now();
sessionStorage.setItem(_0xstr(38), _0x00e9);
}
const _0x006c = _0x005c();
if (_0x006c) {
localStorage.setItem(_0xstr(39) + _0x006c, Date.now().toString());
localStorage.setItem(_0xstr(40) + _0x006c, _0x00e9);
}
function _0x005f() {
const _0x0038 = _0x005c();
if (_0x0038) {
const _0x00d1 = localStorage.getItem(_0xstr(41) + _0x0038);
if (_0x00d1 === _0x00e9) {
localStorage.setItem(_0xstr(42) + _0x0038, _0xstr(43));
localStorage.removeItem(_0xstr(44) + _0x0038);
}
}
}
window.addEventListener(_0xstr(45), _0x005f);
window.addEventListener(_0xstr(46), _0x005f);
function init() {
const _0x007b = window.self !== window.top || window.location.href.includes(_0xstr(47)) || window.location.href.includes(_0xstr(48));
if (_0x007b) {
return;
}
const _0x0000 = _0xstr(49);
let _0x0013 = localStorage.getItem(_0xstr(50)) || GM_getValue(_0xstr(51), _0x0000);
let _0x00bd = localStorage.getItem(_0xstr(52)) || GM_getValue(_0xstr(53), _0xstr(54));
if (!_0x00bd || _0x00bd === _0xstr(55) || _0x00bd === _0xstr(56) || _0x00bd.trim() === _0xstr(57)) {
_0x00bd = _0xstr(58);
localStorage.setItem(_0xstr(59), _0xstr(60));
}
let _0x00be = localStorage.getItem(_0xstr(61)) || GM_getValue(_0xstr(62), _0xstr(63));
let _0x0081 = localStorage.getItem(_0xstr(64)) === _0xstr(65);
let _0x0073 = localStorage.getItem(_0xstr(66)) === _0xstr(67);
let _0x007c = false;
let _0x007f = false;
let _0x0080 = false;
let _0x007e = false;
let _0x007d = false;
let _0x008f = _0xstr(68);
let _0x0091 = 0;
let _0x009d = _0xstr(69);
let _0x0099 = 0;
let _0x00a0 = new Set();
let _0x009b = 0;
let _0x0096 = 0;
let _0x0092 = 0;
let _0x0095 = 0;
let _0x0090 = 0;
let _0x008c = 0;
const _0x0009 = 30000;
let _0x009a = Date.now();
const _0x0001 = 1800000;
const _0x00eb = Date.now() + Math.floor(Math.random() * 60000);
let _0x0098 = 0;
let _0x008d = 0;
let _0x009c = 0;
let _0x008e = 0;
let _0x008b = 0;
function _0x0076(myType) {
const now = Date.now();
const _0x00c2 = [_0xstr(70), _0xstr(71), _0xstr(72)];
const _0x00ac = _0x00c2.indexOf(myType);
if (_0x00ac === -1) return false;
const _0x000b = 12000;
for (let i = 0; i < _0x00ac; i++) {
const type = _0x00c2[i];
const _0x0097 = parseInt(localStorage.getItem(_0xstr(73) + type) || _0xstr(74));
const _0x0084 = _0x0097 > 0 && (now - _0x0097) < _0x000b;
const _0x007a = localStorage.getItem(_0xstr(75) + type) === _0xstr(76);
if (_0x0084 && _0x007a) {
return true;
}
}
return false;
}
function _0x000c(tabType) {
const now = Date.now();
if (now - _0x0098 < 2000) {
return false;
}
if (_0x0076(tabType)) {
return false;
}
const _0x00a1 = _0xstr(77);
const _0x00fe = _0xstr(78);
const _0x00f3 = _0xstr(79);
const _0x0035 = localStorage.getItem(_0x00fe);
const _0x00a2 = parseInt(localStorage.getItem(_0x00f3) || _0xstr(80));
const _0x00c2 = [_0xstr(81), _0xstr(82), _0xstr(83)];
const _0x00ac = _0x00c2.indexOf(tabType);
const _0x006b = _0x0035 ? _0x00c2.indexOf(_0x0035) : 99;
if (!_0x0035 || (now - _0x00a2) > 25000 || _0x0035 === tabType || (_0x00ac !== -1 && _0x00ac < _0x006b)) {
localStorage.setItem(_0x00a1, _0xstr(84));
localStorage.setItem(_0x00fe, tabType);
localStorage.setItem(_0x00f3, now.toString());
return true;
}
return false;
}
function _0x00d3(tabType) {
const _0x00a1 = _0xstr(85);
const _0x00fe = _0xstr(86);
const _0x00f3 = _0xstr(87);
const _0x0035 = localStorage.getItem(_0x00fe);
if (_0x0035 === tabType) {
localStorage.removeItem(_0x00a1);
localStorage.removeItem(_0x00fe);
localStorage.removeItem(_0x00f3);
_0x0098 = Date.now();
}
}
function _0x0100(tabType) {
const _0x00fe = _0xstr(88);
const _0x00f3 = _0xstr(89);
const _0x0035 = localStorage.getItem(_0x00fe);
if (_0x0035 === tabType) {
localStorage.setItem(_0x00f3, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(90), function() {
let _0x00af = prompt(_0xstr(91), _0x0013);
if (_0x00af) {
_0x0013 = _0x00af.trim();
localStorage.setItem(_0xstr(92), _0x0013);
GM_setValue(_0xstr(93), _0x0013);
alert(_0xstr(94));
window.location.reload();
}
});
const launcher = document.createElement(_0xstr(95));
launcher.id = _0xstr(96);
launcher.innerText = _0xstr(97);
launcher.style = _0xstr(98);
document.body.appendChild(launcher);
const panel = document.createElement(_0xstr(99));
panel.id = _0xstr(100);
panel.style = _0xstr(101);
let _0x0016 = null;
function _0x00df() {
_0x00e6();
_0x0016 = setTimeout(() => {
_0x0031();
}, 20000);
}
function _0x00e6() {
if (_0x0016) {
clearTimeout(_0x0016);
_0x0016 = null;
}
}
function _0x0031() {
panel.style.display = _0xstr(102);
launcher.style.display = _0xstr(103);
_0x00e6();
}
function _0x0050() {
panel.style.display = _0xstr(104);
launcher.style.display = _0xstr(105);
_0x00df();
}
panel.innerHTML = _0xstr(106) + (_0x0013) + _0xstr(107) + (_0x00bd) + _0xstr(108) + (_0x00be === _0xstr(109) ? _0xstr(110) : _0xstr(111)) + _0xstr(112) + (_0x00be === _0xstr(113) ? _0xstr(114) : _0xstr(115)) + _0xstr(116) + (_0x00be === _0xstr(117) ? _0xstr(118) : _0xstr(119)) + _0xstr(120);
document.body.appendChild(panel);
const _0x00f9 = document.createElement(_0xstr(121));
_0x00f9.innerHTML = _0xstr(122);
document.head.appendChild(_0x00f9);
function _0x0026() {
let _0x006a = false;
const _0x0043 = document.querySelectorAll(_0xstr(123));
for (let i = 0; i < _0x0043.length; i++) {
const el = _0x0043[i];
if (el.id === _0xstr(124) || el.id === _0xstr(125)) continue;
const style = window.getComputedStyle(el);
if (style.display !== _0xstr(126) && style.visibility !== _0xstr(127) && style.opacity !== _0xstr(128) && el.offsetHeight > 0) {
_0x006a = true;
break;
}
}
if (_0x006a) {
panel.style.opacity = _0xstr(129);
panel.style.pointerEvents = _0xstr(130);
} else {
if (panel.style.display !== _0xstr(131)) {
panel.style.opacity = _0xstr(132);
panel.style.pointerEvents = _0xstr(133);
}
}
if (launcher.style.display !== _0xstr(134)) {
launcher.style.opacity = _0xstr(135);
launcher.style.pointerEvents = _0xstr(136);
}
}
setInterval(_0x0026, 300);
const _0x00a3 = document.getElementById(_0xstr(137));
const badge = document.getElementById(_0xstr(138));
const _0x00f7 = document.getElementById(_0xstr(139));
const _0x0106 = document.getElementById(_0xstr(140));
const _0x00bb = document.getElementById(_0xstr(141));
const _0x00da = document.getElementById(_0xstr(142));
const _0x002d = document.getElementById(_0xstr(143));
const _0x0034 = document.getElementById(_0xstr(144));
const _0x0107 = document.getElementById(_0xstr(145));
const _0x0105 = document.getElementById(_0xstr(146));
const _0x0048 = document.getElementById(_0xstr(147));
const _0x0108 = document.getElementById(_0xstr(148));
const _0x00ec = document.getElementById(_0xstr(149));
const _0x00b6 = document.getElementById(_0xstr(150));
function log(message) {
const _0x00f2 = new Date().toLocaleTimeString();
_0x00a3.innerHTML = _0xstr(151) + (_0x00f2) + _0xstr(152) + (message) + _0xstr(153) + _0x00a3.innerHTML;
const _0x009f = _0x00a3.innerHTML.split(_0xstr(154));
if (_0x009f.length > 20) _0x00a3.innerHTML = _0x009f.slice(0, 20).join(_0xstr(155));
}
function _0x0103() {
if (_0x0081) {
badge.innerText = _0xstr(156);
badge.style.backgroundColor = _0xstr(157);
_0x00f7.innerText = _0xstr(158);
_0x00f7.style.backgroundColor = _0xstr(159);
} else {
badge.innerText = _0xstr(160);
badge.style.backgroundColor = _0xstr(161);
_0x00f7.innerText = _0xstr(162);
_0x00f7.style.backgroundColor = _0xstr(163);
}
}
function _0x0104() {
if (_0x0013 && _0x0013 !== _0x0000) {
_0x0105.style.display = _0xstr(164);
_0x0107.style.display = _0xstr(165);
_0x0108.innerText = _0xstr(166);
} else {
_0x0105.style.display = _0xstr(167);
_0x0107.style.display = _0xstr(168);
}
}
function _0x0101() {
const _0x0038 = _0x005c();
if (_0x0038) {
localStorage.setItem(_0xstr(169) + _0x0038, Date.now().toString());
localStorage.setItem(_0xstr(170) + _0x0038, _0x00e9);
const _0x0075 = _0x007c || _0x007f || _0x0080 || _0x007e;
if (!_0x0075) {
localStorage.removeItem(_0xstr(171) + _0x0038);
}
}
}
const _0x000b = 15000;
const _0x0003 = 10000;
const _0x0004 = 20000;
function _0x0102() {
_0x00ec.innerHTML = _0xstr(172);
const now = Date.now();
for (const [type, _0x0020] of Object.entries(_0x000a)) {
const _0x0097 = parseInt(localStorage.getItem(_0xstr(173) + type) || _0xstr(174));
const _0x0084 = _0x0097 > 0 && (now - _0x0097) < _0x000b;
if (type === _0xstr(175)) {
const _0x00e5 = document.getElementById(_0xstr(176));
if (_0x00e5) {
_0x00e5.innerText = _0x0084 ? _0xstr(177) : _0xstr(178);
_0x00e5.style.backgroundColor = _0x0084 ? _0xstr(179) : _0xstr(180);
}
continue;
}
const _0x0087 = document.createElement(_0xstr(181));
_0x0087.style = _0xstr(182) + (_0x0084 ? _0xstr(183) : _0xstr(184)) + _0xstr(185) + (_0x0084 ? _0xstr(186) : _0xstr(187)) + _0xstr(188);
_0x0087.innerHTML = _0xstr(189) + (_0x0084 ? _0xstr(190) : _0xstr(191)) + _0xstr(192) + (_0x0020.name) + _0xstr(193) + (_0x0084 ? _0xstr(194) : _0xstr(195)) + _0xstr(196) + (_0x0084 ? _0xstr(197) : _0xstr(198)) + _0xstr(199);
_0x0087.style.cursor = _0xstr(200);
_0x0087.title = _0xstr(201) + (_0x0020.name) + _0xstr(202);
_0x0087.addEventListener(_0xstr(203), () => {
if (typeof GM_openInTab !== _0xstr(204)) {
GM_openInTab(_0x0020.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0020.url, _0xstr(205));
}
});
_0x00ec.appendChild(_0x0087);
}
}
const _0x0002 = [_0xstr(206), _0xstr(207), _0xstr(208), _0xstr(209), _0xstr(210)];
const _0x0006 = 45000;
function _0x00b7() {
_0x006d(_0xstr(211));
}
function _0x006d(trigger) {
const now = Date.now();
const _0x004f = localStorage.getItem(_0xstr(212));
if (_0x004f) {
if (trigger === _0xstr(213)) {
log(_0xstr(214));
_0x002c();
} else {
const _0x00e3 = parseInt(localStorage.getItem(_0xstr(215)) || _0xstr(216));
if ((now - _0x00e3) < 300000) {
return;
}
log(_0xstr(217));
_0x002c();
}
}
const _0x00ed = [];
for (const type of _0x0002) {
if (trigger === _0xstr(218)) {
localStorage.setItem(_0xstr(219) + type, _0xstr(220));
_0x00ed.push(type);
} else {
const _0x0097 = parseInt(localStorage.getItem(_0xstr(221) + type) || _0xstr(222));
const _0x0072 = _0x0097 > 0 && (now - _0x0097) < _0x000b;
if (!_0x0072) {
_0x00ed.push(type);
}
}
}
if (_0x00ed.length === 0) {
if (trigger === _0xstr(223)) log(_0xstr(224));
return;
}
localStorage.removeItem(_0xstr(225));
log(_0xstr(226) + (_0x00ed.length) + _0xstr(227) + (_0x00ed.map(t => _0x000a[t]?.name || t).join(_0xstr(228))) + _0xstr(229));
localStorage.setItem(_0xstr(230), JSON.stringify(_0x00ed));
localStorage.setItem(_0xstr(231), _0x00ed[0]);
localStorage.setItem(_0xstr(232), _0xstr(233));
localStorage.setItem(_0xstr(234), now.toString());
localStorage.setItem(_0xstr(235), now.toString());
const _0x0056 = _0x00ed[0];
const _0x0020 = _0x000a[_0x0056];
localStorage.setItem(_0xstr(236) + _0x0056, now.toString());
const _0x00ad = _0x005c();
if (_0x00ad === _0x0056) {
log(_0xstr(237) + (_0x0020.name) + _0xstr(238));
window.location.reload();
} else {
log(_0xstr(239) + (_0x0020.name) + _0xstr(240));
window.postMessage({ type: _0xstr(241), url: _0x0020.url, active: true }, _0xstr(242));
}
}
function _0x002c() {
localStorage.removeItem(_0xstr(243));
localStorage.removeItem(_0xstr(244));
localStorage.removeItem(_0xstr(245));
localStorage.removeItem(_0xstr(246));
localStorage.removeItem(_0xstr(247));
localStorage.removeItem(_0xstr(248));
}
function _0x00b8() {
let _0x00cb;
try {
_0x00cb = JSON.parse(localStorage.getItem(_0xstr(249)) || _0xstr(250));
} catch(e) {
_0x002c();
return;
}
_0x00cb.shift();
if (_0x00cb.length > 0) {
const _0x00b0 = _0x00cb[0];
const _0x0020 = _0x000a[_0x00b0];
const now = Date.now();
localStorage.setItem(_0xstr(251), JSON.stringify(_0x00cb));
localStorage.setItem(_0xstr(252), _0x00b0);
localStorage.setItem(_0xstr(253), _0xstr(254));
localStorage.setItem(_0xstr(255), now.toString());
localStorage.setItem(_0xstr(256) + _0x00b0, now.toString());
localStorage.removeItem(_0xstr(257));
const _0x00ad = _0x005c();
if (_0x00ad === _0x00b0) {
log(_0xstr(258) + (_0x0020.name) + _0xstr(259));
window.location.reload();
} else {
log(_0xstr(260) + (_0x0020.name) + _0xstr(261));
window.postMessage({ type: _0xstr(262), url: _0x0020.url, active: true }, _0xstr(263));
}
} else {
_0x002c();
log(_0xstr(264));
}
}
function _0x005e() {
const _0x00cc = localStorage.getItem(_0xstr(265));
if (!_0x00cc) return;
let _0x00cb;
try {
_0x00cb = JSON.parse(_0x00cc);
} catch(e) {
_0x002c();
return;
}
if (!Array.isArray(_0x00cb) || _0x00cb.length === 0) {
_0x002c();
return;
}
const _0x0037 = localStorage.getItem(_0xstr(266));
const _0x00ad = _0x005c();
if (!_0x00ad || _0x00ad !== _0x0037) return;
const _0x00bf = localStorage.getItem(_0xstr(267));
if (_0x00bf !== _0xstr(268)) return;
const _0x00ea = parseInt(localStorage.getItem(_0xstr(269)) || _0xstr(270));
const now = Date.now();
if (_0x0079()) {
log(_0xstr(271) + (_0x000a[_0x00ad]?.name || _0x00ad) + _0xstr(272));
_0x009a = Date.now();
_0x00b8();
return;
}
if ((now - _0x00ea) > _0x0006) {
const _0x00d7 = parseInt(localStorage.getItem(_0xstr(273)) || _0xstr(274));
if (_0x00d7 < 1) {
log(_0xstr(275) + (_0x000a[_0x00ad]?.name || _0x00ad) + _0xstr(276));
localStorage.setItem(_0xstr(277), _0xstr(278));
localStorage.setItem(_0xstr(279), now.toString());
window.location.reload();
} else {
log(_0xstr(280) + (_0x000a[_0x00ad]?.name || _0x00ad) + _0xstr(281));
localStorage.removeItem(_0xstr(282));
_0x00b8();
}
}
}
const _0x0005 = 20000;
function _0x0017() {
if (!_0x0081) return;
if (localStorage.getItem(_0xstr(283)) || localStorage.getItem(_0xstr(284))) return;
const now = Date.now();
let _0x0062 = false;
let _0x0065 = false;
let _0x005a = _0xstr(285);
for (const [type, _0x0020] of Object.entries(_0x000a)) {
const _0x0097 = parseInt(localStorage.getItem(_0xstr(286) + type) || _0xstr(287));
const _0x00d2 = localStorage.getItem(_0xstr(288) + type);
const _0x0084 = _0x0097 > 0 && (now - _0x0097) < _0x000b;
if (!_0x0084) {
const _0x0093 = parseInt(localStorage.getItem(_0xstr(289) + type) || _0xstr(290));
const _0x0094 = now - _0x0093;
if (_0x00d2 && _0x0094 > 60000) {
_0x0065 = true;
_0x005a = type;
break;
}
if (!_0x00d2) {
if (_0x0097 === 0 && _0x0094 > _0x0003) {
_0x0062 = true;
break;
}
if (_0x0097 > 0 && (now - _0x0097) > _0x0004 && _0x0094 > _0x0004) {
_0x0062 = true;
break;
}
}
}
}
if (_0x0065 && _0x005a) {
const _0x0020 = _0x000a[_0x005a];
log(_0xstr(291) + (_0x0020.name) + _0xstr(292));
localStorage.setItem(_0xstr(293) + _0x005a, now.toString());
if (typeof GM_openInTab !== _0xstr(294)) {
GM_openInTab(_0x0020.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0020.url, _0xstr(295));
}
return;
}
if (_0x0062) {
log(_0xstr(296));
_0x006d(_0xstr(297));
}
}
let wakeLock = null;
let audioCtx = null;
async function _0x00d5() {
if (!(_0xstr(298) in navigator)) {
log(_0xstr(299));
return;
}
try {
wakeLock = await navigator.wakeLock.request(_0xstr(300));
log(_0xstr(301));
} catch (err) {
console.log(_0xstr(302), err.message);
}
}
function _0x00d4() {
if (wakeLock) {
wakeLock.release().then(() => {
wakeLock = null;
log(_0xstr(303));
});
}
}
let _0x0069 = false;
function _0x00e2() {
}
const _0x005b = [_0xstr(304), _0xstr(305), _0xstr(306), _0xstr(307), _0xstr(308)];
const _0x005d = () => {
_0x0069 = true;
_0x005b.forEach(e => window.removeEventListener(e, _0x005d, true));
if (_0x0081) {
_0x00e2();
_0x0023();
}
};
_0x005b.forEach(e => window.addEventListener(e, _0x005d, { once: true, capture: true, passive: true }));
function _0x0023() {
}
function _0x00e7() {
}
function _0x004b() {
_0x00d5();
_0x00e2();
}
function _0x0044() {
_0x00d4();
_0x00e7();
}
document.addEventListener(_0xstr(309), () => {
if (document.visibilityState === _0xstr(310) && _0x0081) {
_0x00d5();
}
});
_0x00b6.addEventListener(_0xstr(311), _0x00b7);
_0x0103();
_0x0104();
if (_0x0081) {
_0x004b();
}
_0x0048.addEventListener(_0xstr(312), () => {
_0x0105.style.display = _0xstr(313);
_0x0107.style.display = _0xstr(314);
_0x0106.focus();
});
_0x00da.addEventListener(_0xstr(315), async () => {
const _0x0070 = _0x0106.value.trim();
const _0x00bc = _0x00bb.value.trim() || _0xstr(316);
const _0x00c3 = document.getElementById(_0xstr(317));
const _0x00c4 = _0x00c3 ? _0x00c3.value : _0xstr(318);
const _0x00b4 = localStorage.getItem(_0xstr(319)) || _0xstr(320);
if (_0x0070 && !_0x0070.includes(_0xstr(321))) {
if (_0x0070 !== _0x00b4 && _0x00b4 !== _0xstr(322)) {
const pass = prompt(_0xstr(323));
if (pass !== _0xstr(324)) {
alert(_0xstr(325));
return;
}
}
_0x0013 = _0x0070;
_0x00bd = _0x00bc;
_0x00be = _0x00c4;
localStorage.setItem(_0xstr(326), _0x0013);
localStorage.setItem(_0xstr(327), _0x00bd);
localStorage.setItem(_0xstr(328), _0x00be);
GM_setValue(_0xstr(329), _0x0013);
GM_setValue(_0xstr(330), _0x00bd);
GM_setValue(_0xstr(331), _0x00be);
log(_0xstr(332) + (_0x00bd) + _0xstr(333) + (_0x00be) + _0xstr(334));
_0x0104();
if (_0x0070 !== _0x00b4 && _0x00b4 !== _0xstr(335)) {
log(_0xstr(336));
try {
await _0x001d(_0xstr(337), _0xstr(338), { newUrl: _0x0013 });
log(_0xstr(339));
} catch (e) {
log(_0xstr(340) + (e.message) + _0xstr(341));
}
}
alert(_0xstr(342));
} else {
alert(_0xstr(343));
}
});
function _0x00f8() {
if (!_0x0013 || _0x0013.includes(_0xstr(344))) {
alert(_0xstr(345));
return;
}
_0x0081 = !_0x0081;
localStorage.setItem(_0xstr(346), _0x0081 ? _0xstr(347) : _0xstr(348));
_0x0103();
log(_0x0081 ? _0xstr(349) : _0xstr(350));
if (_0x0081) {
_0x004b();
_0x00b7();
} else {
_0x0044();
}
}
_0x00f7.addEventListener(_0xstr(351), _0x00f8);
badge.addEventListener(_0xstr(352), _0x00f8);
const _0x00f6 = document.getElementById(_0xstr(353));
const _0x0015 = document.getElementById(_0xstr(354));
function _0x00ff() {
if (_0x00f6) {
_0x00f6.innerText = _0x0073 ? _0xstr(355) : _0xstr(356);
_0x00f6.style.backgroundColor = _0x0073 ? _0xstr(357) : _0xstr(358);
}
}
_0x00ff();
if (_0x00f6) {
_0x00f6.addEventListener(_0xstr(359), () => {
_0x0073 = !_0x0073;
localStorage.setItem(_0xstr(360), _0x0073 ? _0xstr(361) : _0xstr(362));
log(_0xstr(363) + (_0x0073 ? _0xstr(364) : _0xstr(365)) + _0xstr(366));
_0x00ff();
});
}
if (_0x0015) {
_0x0015.addEventListener(_0xstr(367), () => {
const _0x0020 = _0x000a.assignPick;
if (typeof GM_openInTab !== _0xstr(368)) {
GM_openInTab(_0x0020.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0020.url, _0xstr(369));
}
});
}
_0x002d.addEventListener(_0xstr(370), _0x0031);
launcher.addEventListener(_0xstr(371), _0x0050);
panel.addEventListener(_0xstr(372), _0x00e6);
panel.addEventListener(_0xstr(373), _0x00e6);
panel.addEventListener(_0xstr(374), _0x00e6);
panel.addEventListener(_0xstr(375), _0x00e6);
panel.addEventListener(_0xstr(376), _0x00df);
function _0x003b(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function _0x003c(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function _0x00de(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const _0x00ae = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(377))?.set;
if (_0x00ae) {
_0x00ae.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(378), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(379), { bubbles: true }));
await _0x003b(300);
[_0xstr(380), _0xstr(381), _0xstr(382)].forEach(name => {
const ev = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(383), code: _0xstr(384), keyCode: 13, which: 13
});
Object.defineProperty(ev, _0xstr(385), { value: 13 });
Object.defineProperty(ev, _0xstr(386), { value: 13 });
inputEl.dispatchEvent(ev);
});
}
function _0x001d(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let _0x002b = (_0x0013 || _0xstr(387)).trim();
if (!_0x002b || _0x002b.includes(_0xstr(388))) {
reject(new Error(_0xstr(389)));
return;
}
let _0x00f0 = _0xstr(390);
if (method === _0xstr(391)) {
_0x00f0 = _0xstr(392) + (_0x002b) + _0xstr(393) + (urlOrAction) + _0xstr(394) + (encodeURIComponent((_0x00bd || _0xstr(395)).trim())) + _0xstr(396) + (encodeURIComponent((_0x00be || _0xstr(397)).trim())) + _0xstr(398);
} else {
_0x00f0 = _0x002b;
}
let isSettled = false;
const timer = setTimeout(() => {
if (!isSettled) {
isSettled = true;
reject(new Error(_0xstr(399) + (timeoutMs/1000) + _0xstr(400) + (urlOrAction) + _0xstr(401) + (attempts) + _0xstr(402)));
}
}, timeoutMs);
let options = {
method: method,
url: _0x00f0,
timeout: timeoutMs,
onload: function(response) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
try {
const res = JSON.parse(response.responseText);
if (res.activeWebappUrl && res.activeWebappUrl.trim() !== _0xstr(403) && res.activeWebappUrl !== _0x0013) {
_0x0013 = res.activeWebappUrl;
localStorage.setItem(_0xstr(404), _0x0013);
GM_setValue(_0xstr(405), _0x0013);
log(_0xstr(406) + (_0x0013) + _0xstr(407));
if (typeof chrome !== _0xstr(408) && chrome.runtime && chrome.runtime.sendMessage) {
chrome.runtime.sendMessage({
action: _0xstr(409),
apiUrl: _0x0013
}, () => {
const err = chrome.runtime.lastError;
});
}
}
resolve(res);
} catch (e) {
reject(new Error(_0xstr(410) + (e.message) + _0xstr(411) + (response.responseText.substring(0, 120)) + _0xstr(412)));
}
},
onerror: function(err) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(413) + (_0x00f0) + _0xstr(414)));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(415) + (urlOrAction) + _0xstr(416)));
}
};
if (method !== _0xstr(417)) {
options.headers = { [_0xstr(418)]: _0xstr(419) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (_0x00bd || _0xstr(420)).trim(), priority: (_0x00be || _0xstr(421)).trim() }, data));
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
console.log(_0xstr(422) + (urlOrAction) + _0xstr(423) + (err.message) + _0xstr(424));
setTimeout(tryCall, 2000);
} else {
reject(err);
}
});
}
tryCall();
});
}
function _0x0051(driverStr) {
if (!driverStr) return _0xstr(425);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function _0x004c() {
if (document.hidden || !document.hasFocus()) {
log(_0xstr(426));
window.postMessage({ type: _0xstr(427), tabInstanceId: _0x00e9 }, _0xstr(428));
for (let i = 0; i < 40; i++) {
await _0x003b(100);
if (!document.hidden && document.hasFocus()) {
await _0x003b(500);
return true;
}
}
return false;
}
return true;
}
async function _0x00e1() {
if (!_0x0081 || _0x007c) return;
const hash = window.location.hash || _0xstr(429);
if (!hash.includes(_0xstr(430))) return;
if (!_0x0079()) {
return;
}
if (!_0x000c(_0xstr(431))) {
return;
}
try {
_0x007c = true;
_0x0096 = Date.now();
localStorage.setItem(_0xstr(432), _0xstr(433));
_0x0100(_0xstr(434));
const data = await _0x001d(_0xstr(435), _0xstr(436));
_0x009a = Date.now();
let _0x002f = [];
if (data.status === _0xstr(437)) {
if (data.code) {
const _0x00ce = data.code.toUpperCase();
const _0x00a9 = _0x00ce.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
_0x002f = _0x00a9 ? _0x00a9.filter(c => c.trim().length > 0) : [];
} else if (data.codes && Array.isArray(data.codes)) {
_0x002f = data.codes.map(c => c.trim().toUpperCase());
}
}
if (_0x002f.length > 0) {
log(_0xstr(438) + (_0x002f.length) + _0xstr(439));
const _0x00d6 = await _0x004e(_0x002f);
if (_0x00d6 && _0x00d6.success) {
_0x009a = Date.now();
const _0x0052 = _0x00d6.invalidCodes || [];
const _0x00e8 = _0x002f.filter(c => !_0x0052.some(f => c === f || c.includes(f)));
log(_0xstr(440) + (_0x00e8.length) + _0xstr(441) + (_0x0052.length) + _0xstr(442));
for (const code of _0x00e8) {
_0x001d(_0xstr(443), _0xstr(444), { code: code, status: _0xstr(445) })
.then(() => log(_0xstr(446) + (code) + _0xstr(447)))
.catch(e => log(_0xstr(448) + (code) + _0xstr(449) + (e.message) + _0xstr(450)));
}
for (const code of _0x0052) {
_0x001d(_0xstr(451), _0xstr(452), { code: code, status: _0xstr(453) })
.then(() => log(_0xstr(454) + (code) + _0xstr(455)))
.catch(e => log(_0xstr(456) + (code) + _0xstr(457) + (e.message) + _0xstr(458)));
}
} else {
log(_0xstr(459));
const _0x0053 = (_0x00d6 && _0x00d6.invalidCodes) ? _0x00d6.invalidCodes : _0x002f;
for (const code of _0x0053) {
_0x001d(_0xstr(460), _0xstr(461), { code: code, status: _0xstr(462) })
.then(() => log(_0xstr(463) + (code) + _0xstr(464)))
.catch(e => log(_0xstr(465) + (code) + _0xstr(466) + (e.message) + _0xstr(467)));
}
}
}
} catch (error) {
log(_0xstr(468) + (error.message) + _0xstr(469));
} finally {
_0x007c = false;
localStorage.removeItem(_0xstr(470));
_0x00d3(_0xstr(471));
}
}
async function _0x004e(codes) {
await _0x004c();
let textarea = null;
for (let i = 0; i < 20; i++) {
textarea = document.querySelector(_0xstr(472)) || document.querySelector(_0xstr(473));
if (textarea) break;
await _0x003b(100);
}
if (!textarea) {
log(_0xstr(474));
return { success: false, invalidCodes: codes };
}
const _0x0032 = codes.join(_0xstr(475));
textarea.value = _0x0032;
textarea.dispatchEvent(new Event(_0xstr(476), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(477), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(478), false, _0x0032);
textarea.dispatchEvent(new Event(_0xstr(479), { bubbles: true }));
} catch (e) {}
await _0x003c(300, 500);
const _0x0033 = Array.from(document.querySelectorAll(_0xstr(480))).find(btn => {
const _0x00fd = btn.innerText || btn.textContent || _0xstr(481);
return _0x00fd.trim().toLowerCase() === _0xstr(482);
});
if (!_0x0033) return { success: false, invalidCodes: codes };
_0x0033.click();
let _0x0078 = false;
let _0x0064 = false;
const invalidCodes = [];
const _0x010a = codes.filter(c => c.startsWith(_0xstr(483)) || c.startsWith(_0xstr(484)) || c.startsWith(_0xstr(485)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let i = 0; i < 40; i++) {
await _0x003b(50);
const _0x0010 = Array.from(document.querySelectorAll(_0xstr(486)));
const _0x0059 = _0x0010.find(el => {
const _0x00fd = el.textContent.trim().toUpperCase();
return _0x010a.some(vc => _0x00fd === vc || _0x00fd.includes(vc));
});
if (_0x0059) {
_0x0078 = true;
}
const _0x0043 = document.querySelectorAll(_0xstr(487));
for (const _0x003e of _0x0043) {
if (_0x003e.offsetWidth > 0 || _0x003e.offsetHeight > 0) {
const _0x0042 = (_0x003e.innerText || _0x003e.textContent || _0xstr(488));
if (_0x0042.toLowerCase().includes(_0xstr(489)) ||
_0x0042.toLowerCase().includes(_0xstr(490)) ||
_0x0042.toLowerCase().includes(_0xstr(491)) ||
_0x0042.toLowerCase().includes(_0xstr(492)) ||
_0x0042.toLowerCase().includes(_0xstr(493)) ||
_0x0042.toLowerCase().includes(_0xstr(494)) ||
_0x0042.toLowerCase().includes(_0xstr(495)) ||
_0x0042.toLowerCase().includes(_0xstr(496)) ||
_0x0042.toLowerCase().includes(_0xstr(497)) ||
_0x0042.toLowerCase().includes(_0xstr(498)) ||
_0x0042.toLowerCase().includes(_0xstr(499))) {
_0x0064 = true;
const _0x00b2 = Array.from(_0x003e.querySelectorAll(_0xstr(500))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(501)).trim().toLowerCase();
return _0x00fd === _0xstr(502) || _0x00fd === _0xstr(503) || _0x00fd === _0xstr(504) || _0x00fd === _0xstr(505) || _0x00fd === _0xstr(506) || _0x00fd.includes(_0xstr(507));
});
if (_0x00b2) {
const _0x00b3 = 800 + Math.random() * 200;
log(_0xstr(508) + ((_0x00b3/1000).toFixed(2)) + _0xstr(509));
await _0x003b(_0x00b3);
_0x00b2.click();
log(_0xstr(510));
await _0x003b(500);
}
const _0x009f = _0x0042.split(_0xstr(511)).map(l => l.trim().toUpperCase());
for (const _0x009e of _0x009f) {
const _0x00a9 = _0x009e.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (_0x00a9) {
for (const match of _0x00a9) {
if (!match.includes(_0xstr(512)) && !match.includes(_0xstr(513)) && !match.includes(_0xstr(514))) {
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
if (_0x0078 && !_0x0064) {
break;
}
if (_0x0064) break;
}
if (_0x0064 && !_0x0078) {
return { success: false, invalidCodes: codes };
}
if (!_0x0078) {
log(_0xstr(515));
return { success: false, invalidCodes: codes };
}
const _0x00c0 = Array.from(document.querySelectorAll(_0xstr(516))).find(el => {
const _0x00fd = el.innerText || el.textContent || _0xstr(517);
return _0x00fd.trim().toLowerCase() === _0xstr(518);
});
if (!_0x00c0) return { success: false, invalidCodes: codes };
await _0x003c(400, 500);
_0x00c0.click();
let _0x0041 = null;
for (let i = 0; i < 40; i++) {
await _0x003b(50);
const _0x000f = Array.from(document.querySelectorAll(_0xstr(519))).filter(btn => {
const _0x00fd = btn.innerText || btn.textContent || _0xstr(520);
return _0x00fd.trim().toLowerCase() === _0xstr(521);
});
_0x0041 = _0x000f.find(btn => {
let parent = btn.parentElement;
let _0x003d = 0;
while (parent && _0x003d < 4) {
const textContent = (parent.innerText || parent.textContent || _0xstr(522)).toLowerCase();
if (textContent.includes(_0xstr(523)) || textContent.includes(_0xstr(524)) || textContent.includes(_0xstr(525))) {
return true;
}
parent = parent.parentElement;
_0x003d++;
}
return false;
});
if (_0x0041) break;
}
if (_0x0041) {
await _0x003b(300);
_0x0041.click();
log(_0xstr(526));
await _0x003b(1000);
} else {
log(_0xstr(527));
await _0x003b(500);
}
return { success: true, invalidCodes: invalidCodes };
}
async function _0x00c7() {
if (!_0x0081 || _0x007f) return;
if (!_0x0079()) {
return;
}
_0x007f = true;
_0x0092 = Date.now();
_0x009a = Date.now();
log(_0xstr(528));
try {
const now = Date.now();
if (now - _0x0099 > 2000) {
let _0x00dc = Array.from(document.querySelectorAll(_0xstr(529))).find(btn => {
const text = btn.innerText.trim();
return text === _0xstr(530) || text === _0xstr(531);
});
if (_0x00dc) {
_0x00dc.click();
_0x0099 = now;
await _0x003b(300);
}
}
if (_0x00a0.size === 0 || (now - _0x009b) > 60000) {
try {
const res = await _0x001d(_0xstr(532), _0xstr(533));
if (res.status === _0xstr(534) && Array.isArray(res.data)) {
_0x00a0 = new Set(res.data.map(to => to.toLowerCase()));
_0x009b = now;
log(_0xstr(535) + (_0x00a0.size) + _0xstr(536));
}
} catch (e) {
log(_0xstr(537) + (e.message) + _0xstr(538));
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(539)));
let _0x00f4 = -1;
let _0x00b5 = -1;
let _0x00c9 = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(540)) || text.includes(_0xstr(541)) || text.includes(_0xstr(542)) || text.includes(_0xstr(543))) {
_0x00f4 = index;
} else if (text.includes(_0xstr(544)) || text.includes(_0xstr(545)) || text.includes(_0xstr(546)) || text.includes(_0xstr(547))) {
_0x00b5 = index;
} else if (text.includes(_0xstr(548)) || text.includes(_0xstr(549)) || text.includes(_0xstr(550)) || text.includes(_0xstr(551))) {
_0x00c9 = index;
}
});
const _0x00d9 = document.querySelectorAll(_0xstr(552));
for (let _0x00d8 of _0x00d9) {
const _0x001f = _0x00d8.querySelectorAll(_0xstr(553));
if (_0x001f.length > 0) {
let toNum = _0xstr(554);
let _0x00b9 = _0xstr(555);
let _0x00ca = -1;
if (_0x00f4 !== -1 && _0x001f[_0x00f4]) toNum = _0x001f[_0x00f4].innerText.trim();
if (_0x00b5 !== -1 && _0x001f[_0x00b5]) _0x00b9 = _0x001f[_0x00b5].innerText.trim();
if (_0x00c9 !== -1 && _0x001f[_0x00c9]) {
const _0x00c8 = parseInt(_0x001f[_0x00c9].innerText.trim(), 10);
if (!isNaN(_0x00c8)) _0x00ca = _0x00c8;
}
if (!toNum) {
_0x001f.forEach(c => {
const _0x00fd = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/i.test(_0x00fd)) toNum = _0x00fd;
});
}
if (!_0x00b9) {
_0x001f.forEach(c => {
const _0x00fd = c.innerText.trim();
if (_0x00fd.includes(_0xstr(556))) _0x00b9 = _0x00fd;
});
}
if (_0x00ca === -1) {
_0x001f.forEach((c, idx) => {
const _0x00fd = c.innerText.trim();
if (/^\d+$/.test(_0x00fd) && idx > 0 && idx !== _0x00f4) {
const _0x00c8 = parseInt(_0x00fd, 10);
if (_0x00c8 > 0) _0x00ca = _0x00c8;
}
});
}
if (toNum && _0x00b9 && _0x00ca > 0) {
const _0x0083 = _0x00b9.toLowerCase() === _0xstr(557);
if (!_0x0083 && !_0x00a0.has(toNum.toLowerCase())) {
_0x00a0.add(toNum.toLowerCase());
try {
const _0x000e = await _0x001d(_0xstr(558), _0xstr(559), { toNum: toNum });
if (_0x000e.status === _0xstr(560)) {
log(_0xstr(561) + (toNum) + _0xstr(562) + (_0x00b9) + _0xstr(563) + (_0x00ca) + _0xstr(564));
_0x009a = Date.now();
} else if (_0x000e.status === _0xstr(565)) {
log(_0xstr(566) + (toNum) + _0xstr(567));
} else {
log(_0xstr(568) + (toNum) + _0xstr(569) + (JSON.stringify(_0x000e)) + _0xstr(570));
}
} catch (err) {
_0x00a0.delete(toNum.toLowerCase());
log(_0xstr(571) + (toNum) + _0xstr(572) + (err.message) + _0xstr(573));
}
}
}
}
}
} catch (error) {
log(_0xstr(574) + (error.message) + _0xstr(575));
} finally {
_0x007f = false;
}
}
async function _0x00c6() {
if (!_0x0081 || _0x0080) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(576))) return;
if (!_0x0079()) {
return;
}
if (!_0x000c(_0xstr(577))) {
return;
}
try {
_0x0080 = true;
_0x0095 = Date.now();
localStorage.setItem(_0xstr(578), _0xstr(579));
_0x0100(_0xstr(580));
const res = await _0x001d(_0xstr(581), _0xstr(582));
if (res.status === _0xstr(583) && res.toNum) {
const _0x0036 = res.toNum;
log(_0xstr(584) + (_0x0036) + _0xstr(585));
await _0x004c();
let _0x00f5 = null;
const _0x0089 = document.querySelectorAll(_0xstr(586));
let _0x00ef = null;
for (let el of _0x0089) {
const text = el.innerText.trim().toLowerCase();
if (text === _0xstr(587) || text === _0xstr(588) || text === _0xstr(589) || text === _0xstr(590)) {
_0x00ef = el;
break;
}
}
if (_0x00ef) {
let parent = _0x00ef.parentElement;
for (let i = 0; i < 3 && parent; i++) {
_0x00f5 = parent.querySelector(_0xstr(591));
if (_0x00f5) break;
parent = parent.parentElement;
}
}
if (!_0x00f5) {
const _0x0012 = document.querySelectorAll(_0xstr(592));
for (let input of _0x0012) {
const placeholder = (input.placeholder || _0xstr(593)).toLowerCase();
if (placeholder.includes(_0xstr(594)) || placeholder.includes(_0xstr(595)) || placeholder.includes(_0xstr(596)) || placeholder.includes(_0xstr(597))) {
_0x00f5 = input;
break;
}
}
}
if (!_0x00f5) {
const _0x0012 = Array.from(document.querySelectorAll(_0xstr(598)));
_0x00f5 = _0x0012.find(input => {
const type = (input.type || _0xstr(599)).toLowerCase();
const _0x0085 = type === _0xstr(600) || type === _0xstr(601) || type === _0xstr(602);
const _0x0086 = input.style.display !== _0xstr(603) && input.style.visibility !== _0xstr(604);
return _0x0085 && _0x0086;
});
}
if (_0x00f5) {
log(_0xstr(605) + (_0x0036) + _0xstr(606));
await _0x00de(_0x00f5, _0x0036);
await _0x003b(100);
_0x0100(_0xstr(607));
const _0x00c1 = await _0x00fa(_0x0036);
if (_0x00c1) {
log(_0xstr(608) + (_0x0036) + _0xstr(609));
_0x009a = Date.now();
try {
await _0x001d(_0xstr(610), _0xstr(611), { toNum: _0x0036 });
log(_0xstr(612) + (_0x0036) + _0xstr(613));
} catch (markErr) {
log(_0xstr(614) + (_0x0036) + _0xstr(615) + (markErr.message) + _0xstr(616));
}
} else {
log(_0xstr(617) + (_0x0036) + _0xstr(618));
try {
await _0x001d(_0xstr(619), _0xstr(620), { toNum: _0x0036, status: _0xstr(621) });
} catch (e) {
log(_0xstr(622) + (_0x0036) + _0xstr(623) + (e.message) + _0xstr(624));
}
}
} else {
log(_0xstr(625));
try {
await _0x001d(_0xstr(626), _0xstr(627), { toNum: _0x0036, status: _0xstr(628) });
log(_0xstr(629) + (_0x0036) + _0xstr(630));
} catch (e) {
log(_0xstr(631) + (_0x0036) + _0xstr(632) + (e.message) + _0xstr(633));
}
}
}
} catch (error) {
log(_0xstr(634) + (error.message) + _0xstr(635));
} finally {
_0x0080 = false;
localStorage.removeItem(_0xstr(636));
_0x00d3(_0xstr(637));
}
}
function _0x00fa(_0x0036) {
return new Promise((resolve) => {
let _0x0025 = 0;
let _0x0028 = setInterval(() => {
_0x0025++;
let _0x00c0 = null;
const _0x001a = document.querySelectorAll(_0xstr(638));
for (let btn of _0x001a) {
const text = btn.innerText.trim();
if (text === _0xstr(639) || text === _0xstr(640) || text === _0xstr(641) || text.includes(_0xstr(642))) {
_0x00c0 = btn;
break;
}
}
if (!_0x00c0) {
const _0x0049 = document.querySelectorAll(_0xstr(643));
for (let el of _0x0049) {
const text = el.innerText.trim();
if (text === _0xstr(644) || text === _0xstr(645) || text === _0xstr(646) || text.includes(_0xstr(647))) {
_0x00c0 = el.closest(_0xstr(648)) || el;
break;
}
}
}
if (_0x00c0 && !_0x00c0.disabled && !_0x00c0.classList.contains(_0xstr(649))) {
clearInterval(_0x0028);
log(_0xstr(650));
_0x00c0.click();
setTimeout(() => {
log(_0xstr(651) + (_0x0036) + _0xstr(652));
resolve(true);
}, 800);
} else if (_0x0025 > 20) {
clearInterval(_0x0028);
resolve(false);
}
}, 150);
});
}
async function _0x00e0() {
if (!_0x0081 || _0x007e) return;
const hash = window.location.hash || _0xstr(653);
if (!hash.includes(_0xstr(654))) return;
if (!_0x0079()) {
return;
}
if (!_0x000c(_0xstr(655))) {
return;
}
try {
_0x007e = true;
_0x0090 = Date.now();
localStorage.setItem(_0xstr(656), _0xstr(657));
_0x0100(_0xstr(658));
const data = await _0x001d(_0xstr(659), _0xstr(660));
if (data.status === _0xstr(661) && data.pupCode) {
const pupCode = data.pupCode;
const _0x00cd = data.recipientDriver;
const recipientDriver = _0x0051(_0x00cd);
const now = Date.now();
if (pupCode === _0x008f && (now - _0x0091) < 30000) {
log(_0xstr(662) + (pupCode) + _0xstr(663));
return;
}
log(_0xstr(664) + (pupCode) + _0xstr(665) + (recipientDriver) + _0xstr(666) + (_0x00cd) + _0xstr(667));
const _0x001b = localStorage.getItem(_0xstr(668) + pupCode);
const _0x001c = parseInt(localStorage.getItem(_0xstr(669) + pupCode) || _0xstr(670));
if (_0x001b && _0x001b === recipientDriver && (Date.now() - _0x001c) < 1200000) {
log(_0xstr(671) + (pupCode) + _0xstr(672) + (recipientDriver) + _0xstr(673));
try {
await _0x001d(_0xstr(674), _0xstr(675), { pupCode: pupCode, status: _0xstr(676) });
log(_0xstr(677) + (pupCode) + _0xstr(678));
} catch (err) {
log(_0xstr(679) + (pupCode) + _0xstr(680) + (err.message) + _0xstr(681));
}
return;
}
const success = await _0x004d(pupCode, recipientDriver);
_0x008f = pupCode;
_0x0091 = Date.now();
if (success === true || success === _0xstr(682)) {
localStorage.setItem(_0xstr(683) + pupCode, recipientDriver);
localStorage.setItem(_0xstr(684) + pupCode, Date.now().toString());
const _0x00e4 = success === _0xstr(685) ? _0xstr(686) : _0xstr(687) + (recipientDriver) + _0xstr(688);
log(_0xstr(689) + (pupCode) + _0xstr(690) + (_0x00e4) + _0xstr(691));
try {
await _0x001d(_0xstr(692), _0xstr(693), { pupCode: pupCode, status: _0xstr(694) });
log(_0xstr(695) + (pupCode) + _0xstr(696));
} catch (err) {
log(_0xstr(697) + (pupCode) + _0xstr(698) + (err.message) + _0xstr(699));
}
} else {
log(_0xstr(700));
try {
await _0x001d(_0xstr(701), _0xstr(702), { pupCode: pupCode, status: _0xstr(703) });
log(_0xstr(704) + (pupCode) + _0xstr(705));
} catch (err) {
log(_0xstr(706) + (pupCode) + _0xstr(707) + (err.message) + _0xstr(708));
}
}
} else {
localStorage.removeItem(_0xstr(709));
}
} catch (error) {
log(_0xstr(710) + (error.message) + _0xstr(711));
} finally {
_0x007e = false;
_0x00d3(_0xstr(712));
}
}
async function _0x004d(pupCode, recipientDriver) {
await _0x004c();
let _0x0055 = null;
const _0x0057 = document.querySelectorAll(_0xstr(713));
for (let _0x0087 of _0x0057) {
const _0x0088 = _0x0087.querySelector(_0xstr(714));
if (_0x0088) {
const _0x008a = (_0x0088.innerText || _0x0088.textContent || _0xstr(715)).trim().toLowerCase();
if (_0x008a.includes(_0xstr(716)) || _0x008a.includes(_0xstr(717)) || _0x008a === _0xstr(718)) {
_0x0055 = _0x0087.querySelector(_0xstr(719));
if (_0x0055) break;
}
}
}
if (!_0x0055) {
const _0x0012 = document.querySelectorAll(_0xstr(720));
for (let input of _0x0012) {
const placeholder = input.placeholder || _0xstr(721);
if (placeholder.toLowerCase().includes(_0xstr(722)) || placeholder.toLowerCase().includes(_0xstr(723))) {
_0x0055 = input;
break;
}
}
}
if (!_0x0055) {
log(_0xstr(724));
return false;
}
await _0x00de(_0x0055, pupCode);
await _0x003b(300);
let _0x00dc = Array.from(document.querySelectorAll(_0xstr(725))).find(btn => {
const _0x00fd = btn.innerText || btn.textContent || _0xstr(726);
return _0x00fd.trim() === _0xstr(727) || _0x00fd.trim() === _0xstr(728);
});
if (_0x00dc) {
_0x00dc.click();
log(_0xstr(729) + pupCode);
} else {
_0x0055.dispatchEvent(new KeyboardEvent(_0xstr(730), { key: _0xstr(731), code: _0xstr(732), keyCode: 13, which: 13, bubbles: true }));
}
await _0x003b(2000);
_0x0100(_0xstr(733));
const _0x00b1 = Array.from(document.querySelectorAll(_0xstr(734))).find(el => {
const _0x00fd = (el.innerText || el.textContent || _0xstr(735)).trim().toLowerCase();
return _0x00fd === _0xstr(736) || _0x00fd === _0xstr(737);
});
if (_0x00b1 && (_0x00b1.offsetWidth > 0 || _0x00b1.offsetHeight > 0)) {
log(_0xstr(738) + (pupCode) + _0xstr(739));
return false;
}
const _0x00d9 = Array.from(document.querySelectorAll(_0xstr(740)));
const _0x003a = _0x00d9.filter(_0x00d8 => _0x00d8.querySelector(_0xstr(741)));
if (_0x003a.length > 0) {
let _0x0058 = false;
for (let _0x00d8 of _0x003a) {
const _0x00cf = Array.from(_0x00d8.querySelectorAll(_0xstr(742))).find(el => {
const _0x00fd = el.innerText || el.textContent || _0xstr(743);
return _0x00fd.trim() === _0xstr(744) || _0x00fd.trim() === _0xstr(745) || _0x00fd.trim() === _0xstr(746);
});
if (_0x00cf) {
_0x0058 = true;
break;
}
}
if (!_0x0058) {
log(_0xstr(747) + (pupCode) + _0xstr(748));
return false;
}
}
let _0x00d0 = false;
for (let _0x00d8 of _0x00d9) {
const _0x00cf = Array.from(_0x00d8.querySelectorAll(_0xstr(749))).find(el => {
const _0x00fd = el.innerText || el.textContent || _0xstr(750);
return _0x00fd.trim() === _0xstr(751) || _0x00fd.trim() === _0xstr(752) || _0x00fd.trim() === _0xstr(753);
});
if (_0x00cf) {
log(_0xstr(754));
_0x00cf.click();
await _0x003b(2500);
_0x0100(_0xstr(755));
const _0x0043 = document.querySelectorAll(_0xstr(756));
let _0x00ee = null;
for (const _0x003e of _0x0043) {
if (_0x003e.offsetWidth > 0 || _0x003e.offsetHeight > 0) {
const text = (_0x003e.innerText || _0x003e.textContent || _0xstr(757));
if (text.includes(_0xstr(758)) || text.includes(_0xstr(759)) || text.includes(_0xstr(760)) || text.includes(_0xstr(761))) {
_0x00ee = _0x003e;
break;
}
}
}
if (_0x00ee) {
let _0x0046 = null;
const _0x0057 = _0x00ee.querySelectorAll(_0xstr(762));
for (let _0x0087 of _0x0057) {
const _0x0088 = _0x0087.querySelector(_0xstr(763));
if (_0x0088) {
const _0x008a = (_0x0088.innerText || _0x0088.textContent || _0xstr(764)).trim().toLowerCase();
if (_0x008a.includes(_0xstr(765)) || _0x008a.includes(_0xstr(766))) {
_0x0046 = _0x0087.querySelector(_0xstr(767));
if (_0x0046) break;
}
}
}
if (!_0x0046) {
const _0x0040 = _0x00ee.querySelectorAll(_0xstr(768));
for (let _0x006f of _0x0040) {
const ph = _0x006f.placeholder || _0xstr(769);
if (ph.toLowerCase().includes(_0xstr(770)) || ph.toLowerCase().includes(_0xstr(771)) || ph.toLowerCase().includes(_0xstr(772))) {
_0x0046 = _0x006f;
break;
}
}
}
if (_0x0046) {
const _0x00dd = _0x0046.closest(_0xstr(773)) || _0x0046.parentElement;
if (_0x00dd) {
_0x00dd.click();
} else {
_0x0046.removeAttribute(_0xstr(774));
_0x0046.click();
}
log(_0xstr(775));
await _0x003b(2200);
_0x0100(_0xstr(776));
let _0x000d = document.activeElement;
if (!_0x000d || _0x000d.tagName !== _0xstr(777) || !_0x00ee.contains(_0x000d)) {
_0x000d = _0x0046;
}
_0x000d.removeAttribute(_0xstr(778));
_0x000d.focus();
if (typeof _0x000d.select === _0xstr(779)) _0x000d.select();
_0x000d.value = _0xstr(780);
_0x000d.dispatchEvent(new Event(_0xstr(781), { bubbles: true }));
try {
document.execCommand(_0xstr(782), false, recipientDriver);
} catch (e) {}
if (_0x000d.value !== recipientDriver) {
_0x000d.value = recipientDriver;
}
_0x000d.dispatchEvent(new Event(_0xstr(783), { bubbles: true }));
_0x000d.dispatchEvent(new Event(_0xstr(784), { bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(785), { key: _0xstr(786), bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(787), { key: _0xstr(788), bubbles: true }));
log(_0xstr(789) + recipientDriver + _0xstr(790));
await _0x003b(2500);
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(791)));
let _0x00a8 = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(792)).trim();
return text.includes(recipientDriver) &&
(el.offsetWidth > 0 || el.offsetHeight > 0) &&
(el.classList.contains(_0xstr(793)) ||
el.closest(_0xstr(794)) ||
el.closest(_0xstr(795)) ||
el.tagName === _0xstr(796));
});
if (!_0x00a8) {
_0x00a8 = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(797)).trim();
return text.includes(recipientDriver) &&
(el.closest(_0xstr(798)) || el.closest(_0xstr(799)) || el.tagName === _0xstr(800));
});
}
if (!_0x00a8) {
_0x00a8 = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(801)).trim();
return text.includes(recipientDriver);
});
}
if (_0x00a8) {
_0x00a8.click();
log(_0xstr(802) + (_0x00a8.innerText || _0x00a8.textContent).trim());
await _0x003b(1200);
const _0x003f = Array.from(_0x00ee.querySelectorAll(_0xstr(803))).find(btn => {
const _0x00fd = btn.innerText || btn.textContent || _0xstr(804);
return _0x00fd.trim() === _0xstr(805) || _0x00fd.trim() === _0xstr(806) || _0x00fd.trim() === _0xstr(807);
});
if (_0x003f) {
_0x003f.click();
log(_0xstr(808));
let _0x0063 = false;
for (let _0x0021 = 0; _0x0021 < 30; _0x0021++) {
await _0x003b(100);
const _0x0019 = document.body.innerText || _0xstr(809);
if (_0x0019.includes(_0xstr(810)) || _0x0019.toLowerCase().includes(_0xstr(811))) {
log(_0xstr(812));
_0x0063 = true;
break;
}
}
if (_0x0063) {
let _0x001e = Array.from(_0x00ee.querySelectorAll(_0xstr(813))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(814)).trim().toLowerCase();
return _0x00fd === _0xstr(815) || _0x00fd === _0xstr(816) || _0x00fd === _0xstr(817) || _0x00fd === _0xstr(818) || _0x00fd.includes(_0xstr(819)) || _0x00fd.includes(_0xstr(820));
});
if (!_0x001e) {
_0x001e = Array.from(document.querySelectorAll(_0xstr(821))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(822)).trim().toLowerCase();
return (_0x00fd === _0xstr(823) || _0x00fd === _0xstr(824) || _0x00fd === _0xstr(825) || _0x00fd === _0xstr(826) || _0x00fd.includes(_0xstr(827)) || _0x00fd.includes(_0xstr(828))) &&
(btn.offsetWidth > 0 || btn.offsetHeight > 0);
});
}
if (!_0x001e) {
_0x001e = _0x00ee.querySelector(_0xstr(829));
}
if (_0x001e) {
_0x001e.click();
log(_0xstr(830));
} else {
log(_0xstr(831));
}
await _0x003b(500);
return _0xstr(832);
}
_0x00d0 = true;
await _0x003b(1500);
break;
} else {
log(_0xstr(833));
}
} else {
log(_0xstr(834) + recipientDriver);
}
} else {
log(_0xstr(835));
}
} else {
log(_0xstr(836));
}
}
}
return _0x00d0;
}
async function _0x00c5() {
if (!_0x0081 || !_0x0073 || _0x007d) return;
const hash = window.location.hash || _0xstr(837);
if (!hash.includes(_0xstr(838))) return;
if (!_0x0079()) {
return;
}
if (!_0x000c(_0xstr(839))) {
return;
}
try {
_0x007d = true;
_0x008c = Date.now();
localStorage.setItem(_0xstr(840), _0xstr(841));
_0x0100(_0xstr(842));
const data = await _0x001d(_0xstr(843), _0xstr(844));
if (data.status !== _0xstr(845)) {
throw new Error(_0xstr(846));
}
if (data.tasks.length === 0) {
log(_0xstr(847));
const headers = Array.from(document.querySelectorAll(_0xstr(848)));
let _0x0030 = { pupId: -1, shopName: -1, shopAddress: -1, mappedPupg: -1 };
headers.forEach((th, idx) => {
const _0x00fd = (th.innerText || th.textContent || _0xstr(849)).trim().toLowerCase();
if (_0x00fd.includes(_0xstr(850))) _0x0030.pupId = idx;
else if (_0x00fd.includes(_0xstr(851))) _0x0030.shopName = idx;
else if (_0x00fd.includes(_0xstr(852))) _0x0030.shopAddress = idx;
else if (_0x00fd.includes(_0xstr(853))) _0x0030.mappedPupg = idx;
});
if (_0x0030.pupId === -1) {
log(_0xstr(854));
return;
}
const _0x00db = [];
const _0x00d9 = document.querySelectorAll(_0xstr(855));
_0x00d9.forEach(_0x00d8 => {
const _0x001f = _0x00d8.querySelectorAll(_0xstr(856));
if (_0x001f.length > Math.max(_0x0030.pupId, _0x0030.shopName, _0x0030.shopAddress, _0x0030.mappedPupg)) {
const pupId = _0x001f[_0x0030.pupId].innerText.trim();
const shopName = _0x0030.shopName !== -1 ? _0x001f[_0x0030.shopName].innerText.trim() : _0xstr(857);
const shopAddress = _0x0030.shopAddress !== -1 ? _0x001f[_0x0030.shopAddress].innerText.trim() : _0xstr(858);
const mappedPupg = _0x0030.mappedPupg !== -1 ? _0x001f[_0x0030.mappedPupg].innerText.trim() : _0xstr(859);
if (pupId) {
_0x00db.push({ pupId, shopName, shopAddress, mappedPupg });
}
}
});
if (_0x00db.length > 0) {
log(_0xstr(860) + (_0x00db.length) + _0xstr(861));
await _0x001d(_0xstr(862), _0xstr(863), { scraped: _0x00db });
log(_0xstr(864));
} else {
log(_0xstr(865));
}
return;
}
if (!data.hasRiderValue) {
log(_0xstr(866));
return;
}
const _0x004a = data.tasks.find(t => !t.riderId || t.riderId.trim() === _0xstr(867));
if (_0x004a) {
log(_0xstr(868) + (_0x004a.pupId) + _0xstr(869));
await _0x001d(_0xstr(870), _0xstr(871), { pupId: _0x004a.pupId, actionType: _0xstr(872) });
return;
}
const _0x00f1 = data.tasks.find(t => t.riderId && t.riderId.trim() !== _0xstr(873));
if (_0x00f1) {
log(_0xstr(874) + (_0x00f1.pupId) + _0xstr(875) + (_0x00f1.riderId) + _0xstr(876));
const _0x00d9 = Array.from(document.querySelectorAll(_0xstr(877)));
const _0x00a7 = _0x00d9.find(_0x00d8 => (_0x00d8.innerText || _0x00d8.textContent || _0xstr(878)).includes(_0x00f1.pupId));
if (_0x00a7) {
const _0x002a = _0x00a7.querySelector(_0xstr(879)) || _0x00a7.querySelector(_0xstr(880));
if (_0x002a && !_0x002a.classList.contains(_0xstr(881))) {
_0x002a.click();
await _0x003b(300);
}
const _0x0014 = Array.from(document.querySelectorAll(_0xstr(882))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(883)).trim().toLowerCase();
return _0x00fd === _0xstr(884) || _0x00fd.includes(_0xstr(885));
});
if (_0x0014) {
_0x0014.click();
await _0x003b(1200);
const _0x003e = document.querySelector(_0xstr(886)) || document.querySelector(_0xstr(887)) || document.querySelector(_0xstr(888));
if (_0x003e) {
const _0x0045 = _0x003e.querySelector(_0xstr(889)) || _0x003e.querySelector(_0xstr(890)) || _0x003e.querySelector(_0xstr(891)) || _0x003e.querySelector(_0xstr(892));
if (_0x0045) {
_0x0045.focus();
_0x0045.click();
await _0x003b(800);
_0x0045.value = _0x00f1.riderId;
_0x0045.dispatchEvent(new Event(_0xstr(893), { bubbles: true }));
_0x0045.dispatchEvent(new Event(_0xstr(894), { bubbles: true }));
await _0x003b(800);
const _0x0047 = Array.from(document.querySelectorAll(_0xstr(895)));
const _0x00a6 = _0x0047.find(_0x0087 => {
const _0x00fd = (_0x0087.innerText || _0x0087.textContent || _0xstr(896)).trim();
return _0x00fd.includes(_0x00f1.riderId);
});
if (_0x00a6) {
_0x00a6.click();
log(_0xstr(897) + (_0x00a6.innerText) + _0xstr(898));
await _0x003b(500);
const _0x0033 = Array.from(_0x003e.querySelectorAll(_0xstr(899))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(900)).trim().toLowerCase();
return _0x00fd.includes(_0xstr(901)) || _0x00fd.includes(_0xstr(902));
});
if (_0x0033) {
_0x0033.click();
log(_0xstr(903));
await _0x003b(1500);
await _0x001d(_0xstr(904), _0xstr(905), { pupId: _0x00f1.pupId, actionType: _0xstr(906) });
} else {
throw new Error(_0xstr(907));
}
} else {
log(_0xstr(908) + (_0x00f1.riderId) + _0xstr(909));
const _0x001e = Array.from(_0x003e.querySelectorAll(_0xstr(910))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(911)).trim().toLowerCase();
return _0x00fd.includes(_0xstr(912)) || _0x00fd.includes(_0xstr(913));
});
if (_0x001e) _0x001e.click();
await _0x003b(800);
await _0x001d(_0xstr(914), _0xstr(915), { pupId: _0x00f1.pupId, actionType: _0xstr(916) });
}
} else {
throw new Error(_0xstr(917));
}
} else {
throw new Error(_0xstr(918));
}
} else {
throw new Error(_0xstr(919));
}
} else {
log(_0xstr(920) + (_0x00f1.pupId) + _0xstr(921));
await _0x001d(_0xstr(922), _0xstr(923), { pupId: _0x00f1.pupId, actionType: _0xstr(924) });
}
return;
}
if (data.tasks.length === 0) {
log(_0xstr(925));
const _0x00dc = Array.from(document.querySelectorAll(_0xstr(926))).find(btn => {
const _0x00fd = (btn.innerText || btn.textContent || _0xstr(927)).trim().toLowerCase();
return _0x00fd === _0xstr(928) || _0x00fd === _0xstr(929);
});
if (_0x00dc) {
_0x00dc.click();
await _0x003b(1500);
}
}
} catch (error) {
log(_0xstr(930) + (error.message) + _0xstr(931));
} finally {
_0x007d = false;
localStorage.removeItem(_0xstr(932));
_0x00d3(_0xstr(933));
}
}
function _0x0022() {
const now = Date.now();
if (_0x007c && _0x0096 > 0 && (now - _0x0096) > _0x0009) {
log(_0xstr(934));
_0x007c = false;
_0x00d3(_0xstr(935));
_0x0096 = 0;
}
if (_0x007f && _0x0092 > 0 && (now - _0x0092) > _0x0009) {
log(_0xstr(936));
_0x007f = false;
_0x00d3(_0xstr(937));
_0x0092 = 0;
}
if (_0x0080 && _0x0095 > 0 && (now - _0x0095) > _0x0009) {
log(_0xstr(938));
_0x0080 = false;
_0x00d3(_0xstr(939));
_0x0095 = 0;
}
if (_0x007e && _0x0090 > 0 && (now - _0x0090) > _0x0009) {
log(_0xstr(940));
_0x007e = false;
_0x00d3(_0xstr(941));
_0x0090 = 0;
}
if (_0x007d && _0x008c > 0 && (now - _0x008c) > _0x0009) {
log(_0xstr(942));
_0x007d = false;
_0x00d3(_0xstr(943));
_0x008c = 0;
}
}
function _0x0029() {
const href = window.location.href;
if (href.includes(_0xstr(944)) || href.includes(_0xstr(945))) {
log(_0xstr(946));
window.location.reload();
return false;
}
return true;
}
const _0x0008 = 60000;
const _0x0007 = 300000;
function _0x0079() {
const hash = window.location.hash || _0xstr(947);
const href = window.location.href;
if (href.includes(_0xstr(948)) || href.includes(_0xstr(949))) return false;
const _0x00a5 = document.querySelectorAll(_0xstr(950));
for (const _0x00a4 of _0x00a5) {
if (_0x00a4.offsetWidth > 100 && _0x00a4.offsetHeight > 100) {
const style = window.getComputedStyle(_0x00a4);
if (style.display !== _0xstr(951) && style.visibility !== _0xstr(952) && style.opacity !== _0xstr(953)) {
return false;
}
}
}
if (hash.includes(_0xstr(954))) {
const textarea = document.querySelector(_0xstr(955)) || document.querySelector(_0xstr(956));
return !!textarea;
}
if (hash.includes(_0xstr(957))) {
const _0x001a = Array.from(document.querySelectorAll(_0xstr(958)));
const _0x0067 = _0x001a.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(959)).trim().toLowerCase();
return text.includes(_0xstr(960)) || text.includes(_0xstr(961));
});
const _0x0068 = document.querySelectorAll(_0xstr(962)).length > 0;
return _0x0067 && _0x0068;
}
if (hash.includes(_0xstr(963))) {
const _0x0071 = Array.from(document.querySelectorAll(_0xstr(964)));
const _0x0066 = _0x0071.some(input => {
const type = (input.type || _0xstr(965)).toLowerCase();
return type === _0xstr(966) || type === _0xstr(967) || type === _0xstr(968);
});
return _0x0066;
}
if (hash.includes(_0xstr(969))) {
const _0x0066 = document.querySelector(_0xstr(970)) !== null;
const _0x0061 = document.querySelector(_0xstr(971)) !== null;
return _0x0066 && _0x0061;
}
if (hash.includes(_0xstr(972))) {
const _0x001a = Array.from(document.querySelectorAll(_0xstr(973)));
const _0x0067 = _0x001a.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(974)).trim().toLowerCase();
return text.includes(_0xstr(975)) || text.includes(_0xstr(976));
});
return _0x0067;
}
return false;
}
function _0x002e(tabType) {
log(_0xstr(977) + (tabType) + _0xstr(978));
localStorage.setItem(_0xstr(979) + tabType, _0xstr(980));
localStorage.removeItem(_0xstr(981) + tabType);
window.postMessage({ type: _0xstr(982) }, _0xstr(983));
setTimeout(() => {
try {
window.close();
} catch (e) {
console.log(_0xstr(984));
}
}, 1000);
}
function _0x006e() {
const now = Date.now();
const _0x00ad = _0x005c();
log(_0xstr(985));
for (const type of _0x0002) {
if (type !== _0x00ad) {
localStorage.setItem(_0xstr(986) + type, now.toString());
}
}
setTimeout(() => {
log(_0xstr(987));
localStorage.setItem(_0xstr(988), JSON.stringify(_0x0002));
const _0x0056 = _0x0002[0];
localStorage.setItem(_0xstr(989), _0x0056);
localStorage.setItem(_0xstr(990), _0xstr(991));
localStorage.setItem(_0xstr(992), Date.now().toString());
localStorage.removeItem(_0xstr(993));
if (_0x00ad === _0x0056) {
log(_0xstr(994) + (_0x0056) + _0xstr(995));
window.location.reload();
} else {
const _0x0020 = _0x000a[_0x0056];
log(_0xstr(996) + (_0x0020.name) + _0xstr(997));
window.postMessage({ type: _0xstr(998), url: _0x0020.url, active: true }, _0xstr(999));
setTimeout(() => {
log(_0xstr(1000));
_0x002e(_0x00ad);
}, 1000);
}
}, 2500);
_0x009a = now;
}
function _0x0024() {
const _0x00ad = _0x005c();
if (_0x00ad) {
const _0x00fc = localStorage.getItem(_0xstr(1001) + _0x00ad);
if (_0x00fc) {
const _0x00fb = parseInt(_0x00fc, 10);
const now = Date.now();
if (now - _0x00fb < 8000) {
const _0x0074 = _0x007c || _0x007f || _0x0080 || _0x007e || _0x007d;
if (_0x0074) {
log(_0xstr(1002));
return;
}
log(_0xstr(1003));
_0x002e(_0x00ad);
}
}
}
}
function _0x0027() {
const now = Date.now();
const _0x0077 = !_0x007c && !_0x007f && !_0x0080 && !_0x007e && !_0x007d;
if (_0x0077 && (now - _0x00eb) > _0x0001) {
log(_0xstr(1004));
window.location.reload();
}
}
let _0x00ab = 0;
function _0x00aa() {
_0x0101();
_0x0102();
_0x0024();
_0x0013 = localStorage.getItem(_0xstr(1005)) || GM_getValue(_0xstr(1006), _0x0000);
_0x00bd = localStorage.getItem(_0xstr(1007)) || GM_getValue(_0xstr(1008), _0xstr(1009));
if (!_0x00bd || _0x00bd === _0xstr(1010) || _0x00bd === _0xstr(1011) || _0x00bd.trim() === _0xstr(1012)) {
_0x00bd = _0xstr(1013);
}
_0x00be = localStorage.getItem(_0xstr(1014)) || GM_getValue(_0xstr(1015), _0xstr(1016));
_0x0081 = localStorage.getItem(_0xstr(1017)) === _0xstr(1018);
_0x0073 = localStorage.getItem(_0xstr(1019)) === _0xstr(1020);
_0x0103();
const _0x0039 = window.location.href;
const hash = window.location.hash || _0xstr(1021);
if (_0x0039 !== _0x009d) {
_0x009d = _0x0039;
_0x007f = false;
_0x0080 = false;
_0x007c = false;
_0x007e = false;
_0x007d = false;
}
_0x005e();
if (!_0x0081) return;
_0x00ab++;
if (_0x00ab % 75 === 0) {
_0x0022();
_0x0023();
_0x0029();
_0x0027();
_0x0017();
}
const now = Date.now();
if (hash.includes(_0xstr(1022))) {
if (now - _0x008d > 4500) {
_0x008d = now;
_0x00e1();
}
}
if (hash.includes(_0xstr(1023))) {
_0x00c7();
}
if (hash.includes(_0xstr(1024))) {
if (now - _0x009c > 4500) {
_0x009c = now;
_0x00c6();
}
}
if (hash.includes(_0xstr(1025))) {
if (now - _0x008e > 5000) {
_0x008e = now;
_0x00e0();
}
}
if (hash.includes(_0xstr(1026))) {
if (now - _0x008b > 5000) {
_0x008b = now;
_0x00c5();
}
}
}
window.addEventListener(_0xstr(1027), (e) => {
if (e.data) {
if (e.data.type === _0xstr(1028)) {
_0x0101();
if (_0x0081) {
_0x0023();
const hash = window.location.hash || _0xstr(1029);
if (hash.includes(_0xstr(1030))) {
_0x00e1();
} else if (hash.includes(_0xstr(1031))) {
_0x00c7();
} else if (hash.includes(_0xstr(1032))) {
_0x00c6();
} else if (hash.includes(_0xstr(1033))) {
_0x00e0();
}
}
} else if (e.data.type === _0xstr(1034)) {
log(_0xstr(1035));
_0x006d(_0xstr(1036));
}
}
});
_0x0101();
let _0x010b = null;
try {
const _0x0018 = new Blob([_0xstr(1037)], { type: _0xstr(1038) });
const _0x010c = URL.createObjectURL(_0x0018);
_0x010b = new Worker(_0x010c);
_0x010b.onmessage = function(e) {
if (e.data === _0xstr(1039)) {
_0x00aa();
}
};
log(_0xstr(1040));
} catch (err) {
log(_0xstr(1041));
function _0x0054() {
_0x00aa();
setTimeout(_0x0054, 400);
}
_0x0054();
}
}
if (document.readyState === _0xstr(1042)) {
document.addEventListener(_0xstr(1043), init);
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
