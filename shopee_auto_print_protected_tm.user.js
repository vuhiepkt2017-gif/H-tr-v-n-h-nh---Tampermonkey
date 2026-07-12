// ==UserScript==
// @name         Hỗ trợ VTDStadio
// @namespace    http://VTDStadio.net/
// @version      10.12
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
        'YXNzaWduUGljaw==',
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
        'YXNzaWduUGljaw==',
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
        'YXNzaWduUGljaw==',
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
        'c2VxX29wZW5fbG9hZF9kb25lX3RpbWVf',
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
        'U0hPUEVFX0FDVElWQVRFX1RBQl9SRVFVRVNU',
        'Kg==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'MA==',
        'c2VxX29wZW5fbG9hZF9kb25lX3RpbWVf',
        'W03hu58gVGFiXSDinJMgVGFiIA==',
        'IMSRw6MgcGjDoXQgaGnhu4duIG7DunQvw7Qgbmjhuq1wIGxp4buHdS4gQ2jhu50gdGjDqm0gMC42cyDEkeG7gyB0cmFuZyDhu5VuIMSR4buLbmguLi4=',
        'W03hu58gVGFiXSDinJMgVGFiIA==',
        'IMSRw6Mg4buVbiDEkeG7i25oLiBUaeG6v24gaMOgbmggbeG7nyB0YWIga+G6vyB0aeG6v3Ah',
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
        'YXNzaWduUGljaw==',
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
        'YXNzaWduUGljaw==',
        'dGFiX2J1c3lfYXdiUHJpbnQ=',
        'dHJ1ZQ==',
        'dGFiX2J1c3lfcGlja3VwVGFzaw==',
        'dHJ1ZQ==',
        'dGFiX2J1c3lfc3RhcnRQYWNrTm9MYWJlbA==',
        'dHJ1ZQ==',
        '',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
        'UE9TVA==',
        'Z2V0X2Fzc2lnbl9waWNrX3N0YXRl',
        'c3VjY2Vzcw==',
        '',
        'I04vQQ==',
        'Ti9B',
        'W0Lhuq9uIFBpY2tdIFBow6F0IGhp4buHbiBjw7Mgbmhp4buHbSB24bulIGfDoW4gdMOgaSB44bq/LiBU4buxIMSR4buZbmcgY2h1eeG7g24gduG7gSB0cmFuZyBC4bqvbiBQaWNrLi4u',
        'U0hPUEVFX0FDVElWQVRFX1RBQl9SRVFVRVNU',
        'Kg==',
        'Iy9waWNrdXBPcmRlci9jcmVhdGVOZXc=',
        'YnV0dG9u',
        '',
        'c2VhcmNo',
        'dMOsbSBraeG6v20=',
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
        '',
        'cGlja3VwcG9pbnRpZA==',
        'c2hvcC9zcG5hbWVz',
        'c2hvcC9zcG5hbWU=',
        'c2hvcC9zcGFkZHJlc3M=',
        'bWFwcGVkcHVwZw==',
        'W0Lhuq9uIFBpY2tdIEvhur90IHF14bqjIHBow6JuIHTDrWNoIGPhu5l0OiBQaWNrdXAgUG9pbnQgSUQ9',
        'LCBTaG9wIE5hbWU9',
        'LCBTaG9wIEFkZHJlc3M9',
        'LCBNYXBwZWQgUFVQRz0=',
        '',
        'W0Lhuq9uIFBpY2tdIEPhuqNuaCBiw6FvOiBLaMO0bmcgdMOsbSB0aOG6pXkgY+G7mXQgUGlja3VwIFBvaW50IElEIHRyw6puIHRyYW5nIHdlYi4=',
        'dHI=',
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
        'I04vQQ==',
        'Ti9B',
        'U0hPUEVFX0FDVElWQVRFX1RBQl9SRVFVRVNU',
        'Kg==',
        'W0Lhuq9uIFBpY2tdIMSQYW5nIHRo4buxYyBoaeG7h24gZ8OhbiB0w6BpIHjhur8gY2hvIG3DoyBQVVA6IA==',
        'IC0+IFJpZGVyIElEOiA=',
        '',
        'dHI=',
        '',
        'LmVsLWNoZWNrYm94',
        'LmVsLWNoZWNrYm94X19pbm5lcg==',
        'LmVsLWNoZWNrYm94X19pbnB1dA==',
        'aW5wdXRbdHlwZT0iY2hlY2tib3giXQ==',
        'aXMtY2hlY2tlZA==',
        'LmlzLWNoZWNrZWQ=',
        'aXMtY2hlY2tlZA==',
        'YnV0dG9u',
        '',
        'YXNzaWdu',
        'cGjDom4gYuG7lQ==',
        'LnNzYy1kaWFsb2csIC5lbC1kaWFsb2csIC5tb2RhbC1jb250ZW50LCBbcm9sZT0iZGlhbG9nIl0sIFtjbGFzcyo9ImRpYWxvZyJd',
        '',
        'ZHJpdmVy',
        'dMOgaSB44bq/',
        'dmVoaWNsZQ==',
        'c2VsZWN0',
        'Kg==',
        'U0NSSVBU',
        'U1RZTEU=',
        'U1ZH',
        'UEFUSA==',
        'VEFCTEU=',
        'VEJPRFk=',
        'VFI=',
        'VEhFQUQ=',
        '',
        '',
        'cGxlYXNlIHNlbGVjdA==',
        'dnVpIGzDsm5nIGNo4buNbg==',
        'cGxlYXNlIHNlbGVjdA==',
        'dnVpIGzDsm5nIGNo4buNbg==',
        'Kg==',
        'aW5wdXQ=',
        'aGlkZGVu',
        '',
        'cmVhZG9ubHk=',
        'c2VsZWN0',
        'SU5QVVQ=',
        'aW5wdXQ=',
        'W0Lhuq9uIFBpY2tdIFTDrG0gdGjhuqV5IG3hu6VjIHRpw6p1IHThuqFpICg=',
        'LCA=',
        'KSwgQ2xhc3M6IA==',
        '',
        'bW91c2Vkb3du',
        'bW91c2V1cA==',
        'Y2xpY2s=',
        'W0Lhuq9uIFBpY2tdIEzhu5ZJIE5HSEnDik0gVFLhu4xORzogS0jDlE5HIFTDjE0gVEjhuqRZIELhuqRUIEvhu7IgVsOZTkcgTsOATyDEkOG7giBDTElDSyBUUk9ORyBESUFMT0ch',
        'a2V5ZG93bg==',
        'QXJyb3dEb3du',
        'QXJyb3dEb3du',
        'dmFsdWU=',
        'dmFsdWU=',
        '',
        'aW5wdXQ=',
        'aW5wdXQ=',
        'a2V5ZG93bg==',
        'a2V5cHJlc3M=',
        'a2V5dXA=',
        'Y2hhbmdl',
        'bGksIHNwYW4sIGRpdiwgcCwgb3B0aW9uLCAuc3NjLXNlbGVjdC1vcHRpb24sIC5lbC1zZWxlY3QtZHJvcGRvd25fX2l0ZW0=',
        '',
        'Ww==',
        'XQ==',
        'MjVIWU4=',
        'aW5wdXQ=',
        'I3Nob3BlZS1hdXRvLXByaW50LXBhbmVs',
        'I2FwLXBhbmVs',
        'I2FwLWxvZy1ib3g=',
        'W2lkXj0iYXAtIl0=',
        '',
        '',
        'bW91c2Vkb3du',
        'bW91c2V1cA==',
        'bW91c2Vkb3du',
        'bW91c2V1cA==',
        'W0Lhuq9uIFBpY2tdIMSQw6MgY2jhu41uIHTDoGkgeOG6vzog',
        '',
        'Kg==',
        'U0NSSVBU',
        'U1RZTEU=',
        'U1ZH',
        'UEFUSA==',
        'VEFCTEU=',
        'VEJPRFk=',
        'VFI=',
        'VEhFQUQ=',
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
        'Kg==',
        'U0NSSVBU',
        'U1RZTEU=',
        'U1ZH',
        'UEFUSA==',
        'VEFCTEU=',
        'VEJPRFk=',
        'VFI=',
        'VEhFQUQ=',
        '',
        'Y2FuY2Vs',
        'aOG7p3k=',
        'aHXhu7c=',
        'UE9TVA==',
        'dXBkYXRlX2Fzc2lnbl9waWNrX3Rhc2s=',
        'Y29weV90b19tYXA=',
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
        'aW5wdXQ=',
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
        'dGFiX2J1c3lf',
        'dHJ1ZQ==',
        'ZmFsc2U=',
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
        'ZnVuY3Rpb24=',
        '',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzay9saXN0',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
        'dGFiX2J1c3lfYXdiUHJpbnQ=',
        'dHJ1ZQ==',
        'dGFiX2J1c3lfc3RhcnRQYWNrTm9MYWJlbA==',
        'dHJ1ZQ==',
        'dGFiX2J1c3lfcGlja3VwVGFzaw==',
        'dHJ1ZQ==',
        'bWVzc2FnZQ==',
        'U0hPUEVFX1dBS0VfVVBfUElORw==',
        '',
        'YXdiUHJpbnQ=',
        'Z2VuZXJhbC10by1tYW5hZ2VtZW50',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'cGlja3VwVGFzay9saXN0',
        'cGlja3VwT3JkZXIvY3JlYXRlTmV3',
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
const _0x0093 = window.location.host.includes(_0xstr(0)) || window.location.host.includes(_0xstr(1));
if (!_0x0093) {
return;
}
if (typeof GM_getValue === _0xstr(2)) {
globalThis.GM_getValue = (key, def) => {
const _0x012c = localStorage.getItem(key);
return _0x012c !== null ? _0x012c : def;
};
}
if (typeof GM_setValue === _0xstr(3)) {
globalThis.GM_setValue = (key, _0x012c) => {
localStorage.setItem(key, _0x012c);
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
window.addEventListener(_0xstr(11), function _0x0069(e) {
if (e.data && e.data.type === _0xstr(12) && e.data.reqId === reqId) {
window.removeEventListener(_0xstr(13), _0x0069);
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
function _0x0065() {
const hash = window.location.hash || _0xstr(33);
const _0x00d0 = hash.split(_0xstr(34))[0];
for (const [type, _0x0022] of Object.entries(_0x000a)) {
if (_0x00d0.includes(_0x0022.hashKey)) {
return type;
}
}
return null;
}
let _0x0108 = sessionStorage.getItem(_0xstr(35));
if (!_0x0108) {
_0x0108 = _0xstr(36) + Math.random().toString(36).substring(2, 10) + _0xstr(37) + Date.now();
sessionStorage.setItem(_0xstr(38), _0x0108);
}
const _0x0076 = _0x0065();
if (_0x0076) {
localStorage.setItem(_0xstr(39) + _0x0076, Date.now().toString());
localStorage.setItem(_0xstr(40) + _0x0076, _0x0108);
}
function _0x0068() {
const _0x003e = _0x0065();
if (_0x003e) {
const _0x00ec = localStorage.getItem(_0xstr(41) + _0x003e);
if (_0x00ec === _0x0108) {
localStorage.setItem(_0xstr(42) + _0x003e, _0xstr(43));
localStorage.removeItem(_0xstr(44) + _0x003e);
}
}
}
window.addEventListener(_0xstr(45), _0x0068);
window.addEventListener(_0xstr(46), _0x0068);
function init() {
const _0x008c = window.self !== window.top || window.location.href.includes(_0xstr(47)) || window.location.href.includes(_0xstr(48));
if (_0x008c) {
return;
}
const _0x0000 = _0xstr(49);
let _0x0013 = localStorage.getItem(_0xstr(50)) || GM_getValue(_0xstr(51), _0x0000);
let _0x00d3 = localStorage.getItem(_0xstr(52)) || GM_getValue(_0xstr(53), _0xstr(54));
if (!_0x00d3 || _0x00d3 === _0xstr(55) || _0x00d3 === _0xstr(56) || _0x00d3.trim() === _0xstr(57)) {
_0x00d3 = _0xstr(58);
localStorage.setItem(_0xstr(59), _0xstr(60));
}
let _0x00d4 = localStorage.getItem(_0xstr(61)) || GM_getValue(_0xstr(62), _0xstr(63));
let _0x0092 = localStorage.getItem(_0xstr(64)) === _0xstr(65);
let _0x007d = localStorage.getItem(_0xstr(66)) === _0xstr(67);
let _0x008d = false;
let _0x0090 = false;
let _0x0091 = false;
let _0x008f = false;
let _0x008e = false;
let _0x00a1 = _0xstr(68);
let _0x00a3 = 0;
let _0x00af = _0xstr(69);
let _0x00ab = 0;
let _0x00b4 = new Set();
let _0x00ad = 0;
let _0x00a8 = 0;
let _0x00a4 = 0;
let _0x00a7 = 0;
let _0x00a2 = 0;
let _0x009e = 0;
const _0x0009 = 30000;
let _0x00ac = Date.now();
const _0x0001 = 1800000;
const _0x010a = Date.now() + Math.floor(Math.random() * 60000);
let _0x00aa = 0;
let _0x009f = 0;
let _0x00ae = 0;
let _0x00a0 = 0;
let _0x009d = 0;
function _0x0084(_0x00c3) {
const now = Date.now();
const _0x00d9 = [_0xstr(70), _0xstr(71), _0xstr(72), _0xstr(73)];
const _0x00c1 = _0x00d9.indexOf(_0x00c3);
if (_0x00c1 === -1) return false;
const _0x000b = 12000;
for (let i = 0; i < _0x00c1; i++) {
const type = _0x00d9[i];
const _0x00a9 = parseInt(localStorage.getItem(_0xstr(74) + type) || _0xstr(75));
const _0x0095 = _0x00a9 > 0 && (now - _0x00a9) < _0x000b;
const _0x008b = localStorage.getItem(_0xstr(76) + type) === _0xstr(77);
if (_0x0095 && _0x008b) {
return true;
}
}
return false;
}
function _0x000c(tabType) {
const now = Date.now();
if (now - _0x00aa < 2000) {
return false;
}
if (_0x0084(tabType)) {
return false;
}
const _0x00b5 = _0xstr(78);
const _0x0121 = _0xstr(79);
const _0x0114 = _0xstr(80);
const _0x003b = localStorage.getItem(_0x0121);
const _0x00b6 = parseInt(localStorage.getItem(_0x0114) || _0xstr(81));
const _0x00d9 = [_0xstr(82), _0xstr(83), _0xstr(84), _0xstr(85)];
const _0x00c1 = _0x00d9.indexOf(tabType);
const _0x0075 = _0x003b ? _0x00d9.indexOf(_0x003b) : 99;
if (!_0x003b || (now - _0x00b6) > 25000 || _0x003b === tabType || (_0x00c1 !== -1 && _0x00c1 < _0x0075)) {
localStorage.setItem(_0x00b5, _0xstr(86));
localStorage.setItem(_0x0121, tabType);
localStorage.setItem(_0x0114, now.toString());
return true;
}
return false;
}
function _0x00ee(tabType) {
const _0x00b5 = _0xstr(87);
const _0x0121 = _0xstr(88);
const _0x0114 = _0xstr(89);
const _0x003b = localStorage.getItem(_0x0121);
if (_0x003b === tabType) {
localStorage.removeItem(_0x00b5);
localStorage.removeItem(_0x0121);
localStorage.removeItem(_0x0114);
_0x00aa = Date.now();
}
}
function _0x0123(tabType) {
const _0x0121 = _0xstr(90);
const _0x0114 = _0xstr(91);
const _0x003b = localStorage.getItem(_0x0121);
if (_0x003b === tabType) {
localStorage.setItem(_0x0114, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(92), function() {
let _0x00c5 = prompt(_0xstr(93), _0x0013);
if (_0x00c5) {
_0x0013 = _0x00c5.trim();
localStorage.setItem(_0xstr(94), _0x0013);
GM_setValue(_0xstr(95), _0x0013);
alert(_0xstr(96));
window.location.reload();
}
});
const launcher = document.createElement(_0xstr(97));
launcher.id = _0xstr(98);
launcher.innerText = _0xstr(99);
launcher.style = _0xstr(100);
document.body.appendChild(launcher);
const panel = document.createElement(_0xstr(101));
panel.id = _0xstr(102);
panel.style = _0xstr(103);
let _0x0016 = null;
function _0x00fe() {
_0x0105();
_0x0016 = setTimeout(() => {
_0x0036();
}, 20000);
}
function _0x0105() {
if (_0x0016) {
clearTimeout(_0x0016);
_0x0016 = null;
}
}
function _0x0036() {
panel.style.display = _0xstr(104);
launcher.style.display = _0xstr(105);
_0x0105();
}
function _0x0059() {
panel.style.display = _0xstr(106);
launcher.style.display = _0xstr(107);
_0x00fe();
}
panel.innerHTML = _0xstr(108) + (_0x0013) + _0xstr(109) + (_0x00d3) + _0xstr(110) + (_0x00d4 === _0xstr(111) ? _0xstr(112) : _0xstr(113)) + _0xstr(114) + (_0x00d4 === _0xstr(115) ? _0xstr(116) : _0xstr(117)) + _0xstr(118) + (_0x00d4 === _0xstr(119) ? _0xstr(120) : _0xstr(121)) + _0xstr(122);
document.body.appendChild(panel);
const _0x011c = document.createElement(_0xstr(123));
_0x011c.innerHTML = _0xstr(124);
document.head.appendChild(_0x011c);
function _0x0029() {
let _0x0074 = false;
const _0x004b = document.querySelectorAll(_0xstr(125));
for (let i = 0; i < _0x004b.length; i++) {
const el = _0x004b[i];
if (el.id === _0xstr(126) || el.id === _0xstr(127)) continue;
const style = window.getComputedStyle(el);
if (style.display !== _0xstr(128) && style.visibility !== _0xstr(129) && style.opacity !== _0xstr(130) && el.offsetHeight > 0) {
_0x0074 = true;
break;
}
}
if (_0x0074) {
panel.style.opacity = _0xstr(131);
panel.style.pointerEvents = _0xstr(132);
} else {
if (panel.style.display !== _0xstr(133)) {
panel.style.opacity = _0xstr(134);
panel.style.pointerEvents = _0xstr(135);
}
}
if (launcher.style.display !== _0xstr(136)) {
launcher.style.opacity = _0xstr(137);
launcher.style.pointerEvents = _0xstr(138);
}
}
setInterval(_0x0029, 300);
const _0x00b7 = document.getElementById(_0xstr(139));
const badge = document.getElementById(_0xstr(140));
const _0x0119 = document.getElementById(_0xstr(141));
const _0x0129 = document.getElementById(_0xstr(142));
const _0x00d1 = document.getElementById(_0xstr(143));
const _0x00f6 = document.getElementById(_0xstr(144));
const _0x0032 = document.getElementById(_0xstr(145));
const _0x003a = document.getElementById(_0xstr(146));
const _0x012a = document.getElementById(_0xstr(147));
const _0x0128 = document.getElementById(_0xstr(148));
const _0x0051 = document.getElementById(_0xstr(149));
const _0x012b = document.getElementById(_0xstr(150));
const _0x010b = document.getElementById(_0xstr(151));
const _0x00cc = document.getElementById(_0xstr(152));
function log(message) {
const _0x0113 = new Date().toLocaleTimeString();
_0x00b7.innerHTML = _0xstr(153) + (_0x0113) + _0xstr(154) + (message) + _0xstr(155) + _0x00b7.innerHTML;
const _0x00b1 = _0x00b7.innerHTML.split(_0xstr(156));
if (_0x00b1.length > 20) _0x00b7.innerHTML = _0x00b1.slice(0, 20).join(_0xstr(157));
}
function _0x0126() {
if (_0x0092) {
badge.innerText = _0xstr(158);
badge.style.backgroundColor = _0xstr(159);
_0x0119.innerText = _0xstr(160);
_0x0119.style.backgroundColor = _0xstr(161);
} else {
badge.innerText = _0xstr(162);
badge.style.backgroundColor = _0xstr(163);
_0x0119.innerText = _0xstr(164);
_0x0119.style.backgroundColor = _0xstr(165);
}
}
function _0x0127() {
if (_0x0013 && _0x0013 !== _0x0000) {
_0x0128.style.display = _0xstr(166);
_0x012a.style.display = _0xstr(167);
_0x012b.innerText = _0xstr(168);
} else {
_0x0128.style.display = _0xstr(169);
_0x012a.style.display = _0xstr(170);
}
}
function _0x0124() {
const _0x003e = _0x0065();
if (_0x003e) {
localStorage.setItem(_0xstr(171) + _0x003e, Date.now().toString());
localStorage.setItem(_0xstr(172) + _0x003e, _0x0108);
const _0x0082 = _0x008d || _0x0090 || _0x0091 || _0x008f;
if (!_0x0082) {
localStorage.removeItem(_0xstr(173) + _0x003e);
}
}
}
const _0x000b = 15000;
const _0x0003 = 10000;
const _0x0004 = 20000;
function _0x0125() {
_0x010b.innerHTML = _0xstr(174);
const now = Date.now();
for (const [type, _0x0022] of Object.entries(_0x000a)) {
const _0x00a9 = parseInt(localStorage.getItem(_0xstr(175) + type) || _0xstr(176));
const _0x0095 = _0x00a9 > 0 && (now - _0x00a9) < _0x000b;
if (type === _0xstr(177)) {
const _0x0104 = document.getElementById(_0xstr(178));
if (_0x0104) {
_0x0104.innerText = _0x0095 ? _0xstr(179) : _0xstr(180);
_0x0104.style.backgroundColor = _0x0095 ? _0xstr(181) : _0xstr(182);
}
continue;
}
const _0x0099 = document.createElement(_0xstr(183));
_0x0099.style = _0xstr(184) + (_0x0095 ? _0xstr(185) : _0xstr(186)) + _0xstr(187) + (_0x0095 ? _0xstr(188) : _0xstr(189)) + _0xstr(190);
_0x0099.innerHTML = _0xstr(191) + (_0x0095 ? _0xstr(192) : _0xstr(193)) + _0xstr(194) + (_0x0022.name) + _0xstr(195) + (_0x0095 ? _0xstr(196) : _0xstr(197)) + _0xstr(198) + (_0x0095 ? _0xstr(199) : _0xstr(200)) + _0xstr(201);
_0x0099.style.cursor = _0xstr(202);
_0x0099.title = _0xstr(203) + (_0x0022.name) + _0xstr(204);
_0x0099.addEventListener(_0xstr(205), () => {
if (typeof GM_openInTab !== _0xstr(206)) {
GM_openInTab(_0x0022.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0022.url, _0xstr(207));
}
});
_0x010b.appendChild(_0x0099);
}
}
const _0x0002 = [_0xstr(208), _0xstr(209), _0xstr(210), _0xstr(211), _0xstr(212)];
const _0x0006 = 45000;
function _0x00cd() {
_0x0077(_0xstr(213));
}
function _0x0077(trigger) {
const now = Date.now();
const _0x0058 = localStorage.getItem(_0xstr(214));
if (_0x0058) {
if (trigger === _0xstr(215)) {
log(_0xstr(216));
_0x0030();
} else {
const _0x0102 = parseInt(localStorage.getItem(_0xstr(217)) || _0xstr(218));
if ((now - _0x0102) < 300000) {
return;
}
log(_0xstr(219));
_0x0030();
}
}
const _0x010c = [];
for (const type of _0x0002) {
if (type === _0xstr(220) && !_0x007d) {
continue;
}
if (trigger === _0xstr(221)) {
localStorage.setItem(_0xstr(222) + type, _0xstr(223));
_0x010c.push(type);
} else {
const _0x00a9 = parseInt(localStorage.getItem(_0xstr(224) + type) || _0xstr(225));
const _0x007c = _0x00a9 > 0 && (now - _0x00a9) < _0x000b;
if (!_0x007c) {
_0x010c.push(type);
}
}
}
if (_0x010c.length === 0) {
if (trigger === _0xstr(226)) log(_0xstr(227));
return;
}
localStorage.removeItem(_0xstr(228));
log(_0xstr(229) + (_0x010c.length) + _0xstr(230) + (_0x010c.map(t => _0x000a[t]?.name || t).join(_0xstr(231))) + _0xstr(232));
localStorage.setItem(_0xstr(233), JSON.stringify(_0x010c));
localStorage.setItem(_0xstr(234), _0x010c[0]);
localStorage.setItem(_0xstr(235), _0xstr(236));
localStorage.setItem(_0xstr(237), now.toString());
localStorage.setItem(_0xstr(238), now.toString());
const _0x005f = _0x010c[0];
const _0x0022 = _0x000a[_0x005f];
localStorage.setItem(_0xstr(239) + _0x005f, now.toString());
const _0x00c2 = _0x0065();
if (_0x00c2 === _0x005f) {
log(_0xstr(240) + (_0x0022.name) + _0xstr(241));
window.location.reload();
} else {
log(_0xstr(242) + (_0x0022.name) + _0xstr(243));
window.postMessage({ type: _0xstr(244), url: _0x0022.url, active: true }, _0xstr(245));
}
}
function _0x0030() {
localStorage.removeItem(_0xstr(246));
localStorage.removeItem(_0xstr(247));
localStorage.removeItem(_0xstr(248));
localStorage.removeItem(_0xstr(249));
localStorage.removeItem(_0xstr(250));
localStorage.removeItem(_0xstr(251));
for (const type of _0x0002) {
localStorage.removeItem(_0xstr(252) + type);
}
}
function _0x00ce() {
let _0x00e3;
try {
_0x00e3 = JSON.parse(localStorage.getItem(_0xstr(253)) || _0xstr(254));
} catch(e) {
_0x0030();
return;
}
_0x00e3.shift();
if (_0x00e3.length > 0) {
const _0x00c6 = _0x00e3[0];
const _0x0022 = _0x000a[_0x00c6];
const now = Date.now();
localStorage.setItem(_0xstr(255), JSON.stringify(_0x00e3));
localStorage.setItem(_0xstr(256), _0x00c6);
localStorage.setItem(_0xstr(257), _0xstr(258));
localStorage.setItem(_0xstr(259), now.toString());
localStorage.setItem(_0xstr(260) + _0x00c6, now.toString());
localStorage.removeItem(_0xstr(261));
const _0x00c2 = _0x0065();
if (_0x00c2 === _0x00c6) {
log(_0xstr(262) + (_0x0022.name) + _0xstr(263));
window.location.reload();
} else {
log(_0xstr(264) + (_0x0022.name) + _0xstr(265));
window.postMessage({ type: _0xstr(266), url: _0x0022.url, active: true }, _0xstr(267));
}
} else {
_0x0030();
log(_0xstr(268));
}
}
function _0x0067() {
const _0x00e4 = localStorage.getItem(_0xstr(269));
if (!_0x00e4) return;
let _0x00e3;
try {
_0x00e3 = JSON.parse(_0x00e4);
} catch(e) {
_0x0030();
return;
}
if (!Array.isArray(_0x00e3) || _0x00e3.length === 0) {
_0x0030();
return;
}
const _0x003d = localStorage.getItem(_0xstr(270));
const _0x00c2 = _0x0065();
if (!_0x00c2 || _0x00c2 !== _0x003d) return;
const _0x00d5 = localStorage.getItem(_0xstr(271));
if (_0x00d5 !== _0xstr(272)) return;
window.postMessage({ type: _0xstr(273) }, _0xstr(274));
const _0x0109 = parseInt(localStorage.getItem(_0xstr(275)) || _0xstr(276));
const now = Date.now();
if (_0x008a()) {
const _0x00b3 = _0xstr(277) + _0x00c2;
const _0x00b2 = localStorage.getItem(_0x00b3);
if (!_0x00b2) {
localStorage.setItem(_0x00b3, now.toString());
log(_0xstr(278) + (_0x000a[_0x00c2]?.name || _0x00c2) + _0xstr(279));
return;
}
const _0x0115 = now - parseInt(_0x00b2);
if (_0x0115 < 600) {
return;
}
localStorage.removeItem(_0x00b3);
log(_0xstr(280) + (_0x000a[_0x00c2]?.name || _0x00c2) + _0xstr(281));
_0x00ac = Date.now();
_0x00ce();
return;
}
if ((now - _0x0109) > _0x0006) {
const _0x00f2 = parseInt(localStorage.getItem(_0xstr(282)) || _0xstr(283));
if (_0x00f2 < 1) {
log(_0xstr(284) + (_0x000a[_0x00c2]?.name || _0x00c2) + _0xstr(285));
localStorage.setItem(_0xstr(286), _0xstr(287));
localStorage.setItem(_0xstr(288), now.toString());
window.location.reload();
} else {
log(_0xstr(289) + (_0x000a[_0x00c2]?.name || _0x00c2) + _0xstr(290));
localStorage.removeItem(_0xstr(291));
_0x00ce();
}
}
}
const _0x0005 = 20000;
function _0x0017() {
if (!_0x0092) return;
if (localStorage.getItem(_0xstr(292)) || localStorage.getItem(_0xstr(293))) return;
const now = Date.now();
let _0x006b = false;
let _0x006e = false;
let _0x0063 = _0xstr(294);
for (const [type, _0x0022] of Object.entries(_0x000a)) {
if (type === _0xstr(295) && !_0x007d) {
continue;
}
const _0x00a9 = parseInt(localStorage.getItem(_0xstr(296) + type) || _0xstr(297));
const _0x00ed = localStorage.getItem(_0xstr(298) + type);
const _0x0095 = _0x00a9 > 0 && (now - _0x00a9) < _0x000b;
if (!_0x0095) {
const _0x00a5 = parseInt(localStorage.getItem(_0xstr(299) + type) || _0xstr(300));
const _0x00a6 = now - _0x00a5;
if (_0x00ed && _0x00a6 > 60000) {
_0x006e = true;
_0x0063 = type;
break;
}
if (!_0x00ed) {
if (_0x00a9 === 0 && _0x00a6 > _0x0003) {
_0x006b = true;
break;
}
if (_0x00a9 > 0 && (now - _0x00a9) > _0x0004 && _0x00a6 > _0x0004) {
_0x006b = true;
break;
}
}
}
}
if (_0x006e && _0x0063) {
const _0x0022 = _0x000a[_0x0063];
log(_0xstr(301) + (_0x0022.name) + _0xstr(302));
localStorage.setItem(_0xstr(303) + _0x0063, now.toString());
if (typeof GM_openInTab !== _0xstr(304)) {
GM_openInTab(_0x0022.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0022.url, _0xstr(305));
}
return;
}
if (_0x006b) {
log(_0xstr(306));
_0x0077(_0xstr(307));
}
}
let wakeLock = null;
let audioCtx = null;
async function _0x00f0() {
if (!(_0xstr(308) in navigator)) {
log(_0xstr(309));
return;
}
try {
wakeLock = await navigator.wakeLock.request(_0xstr(310));
log(_0xstr(311));
} catch (err) {
console.log(_0xstr(312), err.message);
}
}
function _0x00ef() {
if (wakeLock) {
wakeLock.release().then(() => {
wakeLock = null;
log(_0xstr(313));
});
}
}
let _0x0072 = false;
function _0x0101() {
}
const _0x0064 = [_0xstr(314), _0xstr(315), _0xstr(316), _0xstr(317), _0xstr(318)];
const _0x0066 = () => {
_0x0072 = true;
_0x0064.forEach(e => window.removeEventListener(e, _0x0066, true));
if (_0x0092) {
_0x0101();
_0x0026();
}
};
_0x0064.forEach(e => window.addEventListener(e, _0x0066, { once: true, capture: true, passive: true }));
function _0x0026() {
}
function _0x0106() {
}
function _0x0054() {
_0x00f0();
_0x0101();
}
function _0x004c() {
_0x00ef();
_0x0106();
}
document.addEventListener(_0xstr(319), () => {
if (document.visibilityState === _0xstr(320) && _0x0092) {
_0x00f0();
}
});
_0x00cc.addEventListener(_0xstr(321), _0x00cd);
_0x0126();
_0x0127();
if (_0x0092) {
_0x0054();
}
_0x0051.addEventListener(_0xstr(322), () => {
_0x0128.style.display = _0xstr(323);
_0x012a.style.display = _0xstr(324);
_0x0129.focus();
});
_0x00f6.addEventListener(_0xstr(325), async () => {
const _0x007a = _0x0129.value.trim();
const _0x00d2 = _0x00d1.value.trim() || _0xstr(326);
const _0x00da = document.getElementById(_0xstr(327));
const _0x00db = _0x00da ? _0x00da.value : _0xstr(328);
const _0x00ca = localStorage.getItem(_0xstr(329)) || _0xstr(330);
if (_0x007a && !_0x007a.includes(_0xstr(331))) {
if (_0x007a !== _0x00ca && _0x00ca !== _0xstr(332)) {
const pass = prompt(_0xstr(333));
if (pass !== _0xstr(334)) {
alert(_0xstr(335));
return;
}
}
_0x0013 = _0x007a;
_0x00d3 = _0x00d2;
_0x00d4 = _0x00db;
localStorage.setItem(_0xstr(336), _0x0013);
localStorage.setItem(_0xstr(337), _0x00d3);
localStorage.setItem(_0xstr(338), _0x00d4);
GM_setValue(_0xstr(339), _0x0013);
GM_setValue(_0xstr(340), _0x00d3);
GM_setValue(_0xstr(341), _0x00d4);
log(_0xstr(342) + (_0x00d3) + _0xstr(343) + (_0x00d4) + _0xstr(344));
_0x0127();
if (_0x007a !== _0x00ca && _0x00ca !== _0xstr(345)) {
log(_0xstr(346));
try {
await _0x001d(_0xstr(347), _0xstr(348), { newUrl: _0x0013 });
log(_0xstr(349));
} catch (e) {
log(_0xstr(350) + (e.message) + _0xstr(351));
}
}
alert(_0xstr(352));
} else {
alert(_0xstr(353));
}
});
function _0x011a() {
if (!_0x0013 || _0x0013.includes(_0xstr(354))) {
alert(_0xstr(355));
return;
}
_0x0092 = !_0x0092;
localStorage.setItem(_0xstr(356), _0x0092 ? _0xstr(357) : _0xstr(358));
_0x0126();
log(_0x0092 ? _0xstr(359) : _0xstr(360));
if (_0x0092) {
_0x0054();
_0x00cd();
} else {
_0x004c();
}
}
_0x0119.addEventListener(_0xstr(361), _0x011a);
badge.addEventListener(_0xstr(362), _0x011a);
const _0x0118 = document.getElementById(_0xstr(363));
const _0x0015 = document.getElementById(_0xstr(364));
function _0x0122() {
if (_0x0118) {
_0x0118.innerText = _0x007d ? _0xstr(365) : _0xstr(366);
_0x0118.style.backgroundColor = _0x007d ? _0xstr(367) : _0xstr(368);
}
}
_0x0122();
if (_0x0118) {
_0x0118.addEventListener(_0xstr(369), () => {
_0x007d = !_0x007d;
localStorage.setItem(_0xstr(370), _0x007d ? _0xstr(371) : _0xstr(372));
log(_0xstr(373) + (_0x007d ? _0xstr(374) : _0xstr(375)) + _0xstr(376));
_0x0122();
});
}
if (_0x0015) {
_0x0015.addEventListener(_0xstr(377), () => {
const _0x0022 = _0x000a.assignPick;
if (typeof GM_openInTab !== _0xstr(378)) {
GM_openInTab(_0x0022.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0022.url, _0xstr(379));
}
});
}
_0x0032.addEventListener(_0xstr(380), _0x0036);
launcher.addEventListener(_0xstr(381), _0x0059);
panel.addEventListener(_0xstr(382), _0x0105);
panel.addEventListener(_0xstr(383), _0x0105);
panel.addEventListener(_0xstr(384), _0x0105);
panel.addEventListener(_0xstr(385), _0x0105);
panel.addEventListener(_0xstr(386), _0x00fe);
function _0x0042(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function _0x0043(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function _0x00fd(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const _0x00c4 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(387))?.set;
if (_0x00c4) {
_0x00c4.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(388), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(389), { bubbles: true }));
await _0x0042(300);
[_0xstr(390), _0xstr(391), _0xstr(392)].forEach(name => {
const ev = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(393), code: _0xstr(394), keyCode: 13, which: 13
});
Object.defineProperty(ev, _0xstr(395), { value: 13 });
Object.defineProperty(ev, _0xstr(396), { value: 13 });
inputEl.dispatchEvent(ev);
});
}
function _0x001d(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let _0x002e = (_0x0013 || _0xstr(397)).trim();
if (!_0x002e || _0x002e.includes(_0xstr(398))) {
reject(new Error(_0xstr(399)));
return;
}
let _0x010f = _0xstr(400);
if (method === _0xstr(401)) {
_0x010f = _0xstr(402) + (_0x002e) + _0xstr(403) + (urlOrAction) + _0xstr(404) + (encodeURIComponent((_0x00d3 || _0xstr(405)).trim())) + _0xstr(406) + (encodeURIComponent((_0x00d4 || _0xstr(407)).trim())) + _0xstr(408);
} else {
_0x010f = _0x002e;
}
let isSettled = false;
const timer = setTimeout(() => {
if (!isSettled) {
isSettled = true;
reject(new Error(_0xstr(409) + (timeoutMs/1000) + _0xstr(410) + (urlOrAction) + _0xstr(411) + (attempts) + _0xstr(412)));
}
}, timeoutMs);
let options = {
method: method,
url: _0x010f,
timeout: timeoutMs,
onload: function(response) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
try {
const res = JSON.parse(response.responseText);
if (res.activeWebappUrl && res.activeWebappUrl.trim() !== _0xstr(413) && res.activeWebappUrl !== _0x0013) {
_0x0013 = res.activeWebappUrl;
localStorage.setItem(_0xstr(414), _0x0013);
GM_setValue(_0xstr(415), _0x0013);
log(_0xstr(416) + (_0x0013) + _0xstr(417));
if (typeof chrome !== _0xstr(418) && chrome.runtime && chrome.runtime.sendMessage) {
chrome.runtime.sendMessage({
action: _0xstr(419),
apiUrl: _0x0013
}, () => {
const err = chrome.runtime.lastError;
});
}
}
resolve(res);
} catch (e) {
reject(new Error(_0xstr(420) + (e.message) + _0xstr(421) + (response.responseText.substring(0, 120)) + _0xstr(422)));
}
},
onerror: function(err) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(423) + (_0x010f) + _0xstr(424)));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(425) + (urlOrAction) + _0xstr(426)));
}
};
if (method !== _0xstr(427)) {
options.headers = { [_0xstr(428)]: _0xstr(429) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (_0x00d3 || _0xstr(430)).trim(), priority: (_0x00d4 || _0xstr(431)).trim() }, data));
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
console.log(_0xstr(432) + (urlOrAction) + _0xstr(433) + (err.message) + _0xstr(434));
setTimeout(tryCall, 2000);
} else {
reject(err);
}
});
}
tryCall();
});
}
function _0x005a(driverStr) {
if (!driverStr) return _0xstr(435);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function _0x0055() {
if (document.hidden || !document.hasFocus()) {
log(_0xstr(436));
window.postMessage({ type: _0xstr(437), tabInstanceId: _0x0108 }, _0xstr(438));
for (let i = 0; i < 40; i++) {
await _0x0042(100);
if (!document.hidden && document.hasFocus()) {
await _0x0042(500);
return true;
}
}
return false;
}
return true;
}
async function _0x0100() {
if (!_0x0092 || _0x008d) return;
const hash = window.location.hash || _0xstr(439);
if (!hash.includes(_0xstr(440))) return;
if (!_0x008a()) {
return;
}
if (!_0x000c(_0xstr(441))) {
return;
}
try {
_0x008d = true;
_0x00a8 = Date.now();
localStorage.setItem(_0xstr(442), _0xstr(443));
_0x0123(_0xstr(444));
const data = await _0x001d(_0xstr(445), _0xstr(446));
_0x00ac = Date.now();
let _0x0034 = [];
if (data.status === _0xstr(447)) {
if (data.code) {
const _0x00e8 = data.code.toUpperCase();
const _0x00bd = _0x00e8.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
_0x0034 = _0x00bd ? _0x00bd.filter(c => c.trim().length > 0) : [];
} else if (data.codes && Array.isArray(data.codes)) {
_0x0034 = data.codes.map(c => c.trim().toUpperCase());
}
}
if (_0x0034.length > 0) {
log(_0xstr(448) + (_0x0034.length) + _0xstr(449));
const _0x00f1 = await _0x0057(_0x0034);
if (_0x00f1 && _0x00f1.success) {
_0x00ac = Date.now();
const _0x005b = _0x00f1.invalidCodes || [];
const _0x0107 = _0x0034.filter(c => !_0x005b.some(f => c === f || c.includes(f)));
log(_0xstr(450) + (_0x0107.length) + _0xstr(451) + (_0x005b.length) + _0xstr(452));
for (const code of _0x0107) {
_0x001d(_0xstr(453), _0xstr(454), { code: code, status: _0xstr(455) })
.then(() => log(_0xstr(456) + (code) + _0xstr(457)))
.catch(e => log(_0xstr(458) + (code) + _0xstr(459) + (e.message) + _0xstr(460)));
}
for (const code of _0x005b) {
_0x001d(_0xstr(461), _0xstr(462), { code: code, status: _0xstr(463) })
.then(() => log(_0xstr(464) + (code) + _0xstr(465)))
.catch(e => log(_0xstr(466) + (code) + _0xstr(467) + (e.message) + _0xstr(468)));
}
} else {
log(_0xstr(469));
const _0x005c = (_0x00f1 && _0x00f1.invalidCodes) ? _0x00f1.invalidCodes : _0x0034;
for (const code of _0x005c) {
_0x001d(_0xstr(470), _0xstr(471), { code: code, status: _0xstr(472) })
.then(() => log(_0xstr(473) + (code) + _0xstr(474)))
.catch(e => log(_0xstr(475) + (code) + _0xstr(476) + (e.message) + _0xstr(477)));
}
}
}
} catch (error) {
log(_0xstr(478) + (error.message) + _0xstr(479));
} finally {
_0x008d = false;
localStorage.removeItem(_0xstr(480));
_0x00ee(_0xstr(481));
}
}
async function _0x0057(codes) {
await _0x0055();
let textarea = null;
for (let i = 0; i < 20; i++) {
textarea = document.querySelector(_0xstr(482)) || document.querySelector(_0xstr(483));
if (textarea) break;
await _0x0042(100);
}
if (!textarea) {
log(_0xstr(484));
return { success: false, invalidCodes: codes };
}
const _0x0037 = codes.join(_0xstr(485));
textarea.value = _0x0037;
textarea.dispatchEvent(new Event(_0xstr(486), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(487), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(488), false, _0x0037);
textarea.dispatchEvent(new Event(_0xstr(489), { bubbles: true }));
} catch (e) {}
await _0x0043(300, 500);
const _0x0038 = Array.from(document.querySelectorAll(_0xstr(490))).find(btn => {
const _0x0120 = btn.innerText || btn.textContent || _0xstr(491);
return _0x0120.trim().toLowerCase() === _0xstr(492);
});
if (!_0x0038) return { success: false, invalidCodes: codes };
_0x0038.click();
let _0x0087 = false;
let _0x006d = false;
const invalidCodes = [];
const _0x012d = codes.filter(c => c.startsWith(_0xstr(493)) || c.startsWith(_0xstr(494)) || c.startsWith(_0xstr(495)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let i = 0; i < 40; i++) {
await _0x0042(50);
const _0x0010 = Array.from(document.querySelectorAll(_0xstr(496)));
const _0x0062 = _0x0010.find(el => {
const _0x0120 = el.textContent.trim().toUpperCase();
return _0x012d.some(vc => _0x0120 === vc || _0x0120.includes(vc));
});
if (_0x0062) {
_0x0087 = true;
}
const _0x004b = document.querySelectorAll(_0xstr(497));
for (const _0x0045 of _0x004b) {
if (_0x0045.offsetWidth > 0 || _0x0045.offsetHeight > 0) {
const _0x004a = (_0x0045.innerText || _0x0045.textContent || _0xstr(498));
if (_0x004a.toLowerCase().includes(_0xstr(499)) ||
_0x004a.toLowerCase().includes(_0xstr(500)) ||
_0x004a.toLowerCase().includes(_0xstr(501)) ||
_0x004a.toLowerCase().includes(_0xstr(502)) ||
_0x004a.toLowerCase().includes(_0xstr(503)) ||
_0x004a.toLowerCase().includes(_0xstr(504)) ||
_0x004a.toLowerCase().includes(_0xstr(505)) ||
_0x004a.toLowerCase().includes(_0xstr(506)) ||
_0x004a.toLowerCase().includes(_0xstr(507)) ||
_0x004a.toLowerCase().includes(_0xstr(508)) ||
_0x004a.toLowerCase().includes(_0xstr(509))) {
_0x006d = true;
const _0x00c8 = Array.from(_0x0045.querySelectorAll(_0xstr(510))).find(btn => {
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(511)).trim().toLowerCase();
return _0x0120 === _0xstr(512) || _0x0120 === _0xstr(513) || _0x0120 === _0xstr(514) || _0x0120 === _0xstr(515) || _0x0120 === _0xstr(516) || _0x0120.includes(_0xstr(517));
});
if (_0x00c8) {
const _0x00c9 = 800 + Math.random() * 200;
log(_0xstr(518) + ((_0x00c9/1000).toFixed(2)) + _0xstr(519));
await _0x0042(_0x00c9);
_0x00c8.click();
log(_0xstr(520));
await _0x0042(500);
}
const _0x00b1 = _0x004a.split(_0xstr(521)).map(l => l.trim().toUpperCase());
for (const _0x00b0 of _0x00b1) {
const _0x00bd = _0x00b0.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (_0x00bd) {
for (const match of _0x00bd) {
if (!match.includes(_0xstr(522)) && !match.includes(_0xstr(523)) && !match.includes(_0xstr(524))) {
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
if (_0x0087 && !_0x006d) {
break;
}
if (_0x006d) break;
}
if (_0x006d && !_0x0087) {
return { success: false, invalidCodes: codes };
}
if (!_0x0087) {
log(_0xstr(525));
return { success: false, invalidCodes: codes };
}
const _0x00d7 = Array.from(document.querySelectorAll(_0xstr(526))).find(el => {
const _0x0120 = el.innerText || el.textContent || _0xstr(527);
return _0x0120.trim().toLowerCase() === _0xstr(528);
});
if (!_0x00d7) return { success: false, invalidCodes: codes };
await _0x0043(400, 500);
_0x00d7.click();
let _0x0049 = null;
for (let i = 0; i < 40; i++) {
await _0x0042(50);
const _0x000f = Array.from(document.querySelectorAll(_0xstr(529))).filter(btn => {
const _0x0120 = btn.innerText || btn.textContent || _0xstr(530);
return _0x0120.trim().toLowerCase() === _0xstr(531);
});
_0x0049 = _0x000f.find(btn => {
let parent = btn.parentElement;
let _0x0044 = 0;
while (parent && _0x0044 < 4) {
const textContent = (parent.innerText || parent.textContent || _0xstr(532)).toLowerCase();
if (textContent.includes(_0xstr(533)) || textContent.includes(_0xstr(534)) || textContent.includes(_0xstr(535))) {
return true;
}
parent = parent.parentElement;
_0x0044++;
}
return false;
});
if (_0x0049) break;
}
if (_0x0049) {
await _0x0042(300);
_0x0049.click();
log(_0xstr(536));
await _0x0042(1000);
} else {
log(_0xstr(537));
await _0x0042(500);
}
return { success: true, invalidCodes: invalidCodes };
}
async function _0x00de() {
if (!_0x0092 || _0x0090) return;
if (!_0x008a()) {
return;
}
_0x0090 = true;
_0x00a4 = Date.now();
_0x00ac = Date.now();
log(_0xstr(538));
try {
const now = Date.now();
if (now - _0x00ab > 2000) {
let _0x00f8 = Array.from(document.querySelectorAll(_0xstr(539))).find(btn => {
const text = btn.innerText.trim();
return text === _0xstr(540) || text === _0xstr(541);
});
if (_0x00f8) {
_0x00f8.click();
_0x00ab = now;
await _0x0042(300);
}
}
if (_0x00b4.size === 0 || (now - _0x00ad) > 60000) {
try {
const res = await _0x001d(_0xstr(542), _0xstr(543));
if (res.status === _0xstr(544) && Array.isArray(res.data)) {
_0x00b4 = new Set(res.data.map(to => to.toLowerCase()));
_0x00ad = now;
log(_0xstr(545) + (_0x00b4.size) + _0xstr(546));
}
} catch (e) {
log(_0xstr(547) + (e.message) + _0xstr(548));
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(549)));
let _0x0116 = -1;
let _0x00cb = -1;
let _0x00e1 = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(550)) || text.includes(_0xstr(551)) || text.includes(_0xstr(552)) || text.includes(_0xstr(553))) {
_0x0116 = index;
} else if (text.includes(_0xstr(554)) || text.includes(_0xstr(555)) || text.includes(_0xstr(556)) || text.includes(_0xstr(557))) {
_0x00cb = index;
} else if (text.includes(_0xstr(558)) || text.includes(_0xstr(559)) || text.includes(_0xstr(560)) || text.includes(_0xstr(561))) {
_0x00e1 = index;
}
});
const _0x00f4 = document.querySelectorAll(_0xstr(562));
for (let _0x00f3 of _0x00f4) {
const _0x0021 = _0x00f3.querySelectorAll(_0xstr(563));
if (_0x0021.length > 0) {
let toNum = _0xstr(564);
let _0x00cf = _0xstr(565);
let _0x00e2 = -1;
if (_0x0116 !== -1 && _0x0021[_0x0116]) toNum = _0x0021[_0x0116].innerText.trim();
if (_0x00cb !== -1 && _0x0021[_0x00cb]) _0x00cf = _0x0021[_0x00cb].innerText.trim();
if (_0x00e1 !== -1 && _0x0021[_0x00e1]) {
const _0x00e0 = parseInt(_0x0021[_0x00e1].innerText.trim(), 10);
if (!isNaN(_0x00e0)) _0x00e2 = _0x00e0;
}
if (!toNum) {
_0x0021.forEach(c => {
const _0x0120 = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/i.test(_0x0120)) toNum = _0x0120;
});
}
if (!_0x00cf) {
_0x0021.forEach(c => {
const _0x0120 = c.innerText.trim();
if (_0x0120.includes(_0xstr(566))) _0x00cf = _0x0120;
});
}
if (_0x00e2 === -1) {
_0x0021.forEach((c, idx) => {
const _0x0120 = c.innerText.trim();
if (/^\d+$/.test(_0x0120) && idx > 0 && idx !== _0x0116) {
const _0x00e0 = parseInt(_0x0120, 10);
if (_0x00e0 > 0) _0x00e2 = _0x00e0;
}
});
}
if (toNum && _0x00cf && _0x00e2 > 0) {
const _0x0094 = _0x00cf.toLowerCase() === _0xstr(567);
if (!_0x0094 && !_0x00b4.has(toNum.toLowerCase())) {
_0x00b4.add(toNum.toLowerCase());
try {
const _0x000e = await _0x001d(_0xstr(568), _0xstr(569), { toNum: toNum });
if (_0x000e.status === _0xstr(570)) {
log(_0xstr(571) + (toNum) + _0xstr(572) + (_0x00cf) + _0xstr(573) + (_0x00e2) + _0xstr(574));
_0x00ac = Date.now();
} else if (_0x000e.status === _0xstr(575)) {
log(_0xstr(576) + (toNum) + _0xstr(577));
} else {
log(_0xstr(578) + (toNum) + _0xstr(579) + (JSON.stringify(_0x000e)) + _0xstr(580));
}
} catch (err) {
_0x00b4.delete(toNum.toLowerCase());
log(_0xstr(581) + (toNum) + _0xstr(582) + (err.message) + _0xstr(583));
}
}
}
}
}
} catch (error) {
log(_0xstr(584) + (error.message) + _0xstr(585));
} finally {
_0x0090 = false;
}
}
async function _0x00dd() {
if (!_0x0092 || _0x0091) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(586))) return;
if (!_0x008a()) {
return;
}
if (!_0x000c(_0xstr(587))) {
return;
}
try {
_0x0091 = true;
_0x00a7 = Date.now();
localStorage.setItem(_0xstr(588), _0xstr(589));
_0x0123(_0xstr(590));
const res = await _0x001d(_0xstr(591), _0xstr(592));
if (res.status === _0xstr(593) && res.toNum) {
const _0x003c = res.toNum;
log(_0xstr(594) + (_0x003c) + _0xstr(595));
await _0x0055();
let _0x0117 = null;
const _0x009b = document.querySelectorAll(_0xstr(596));
let _0x010e = null;
for (let el of _0x009b) {
const text = el.innerText.trim().toLowerCase();
if (text === _0xstr(597) || text === _0xstr(598) || text === _0xstr(599) || text === _0xstr(600)) {
_0x010e = el;
break;
}
}
if (_0x010e) {
let parent = _0x010e.parentElement;
for (let i = 0; i < 3 && parent; i++) {
_0x0117 = parent.querySelector(_0xstr(601));
if (_0x0117) break;
parent = parent.parentElement;
}
}
if (!_0x0117) {
const _0x0012 = document.querySelectorAll(_0xstr(602));
for (let input of _0x0012) {
const placeholder = (input.placeholder || _0xstr(603)).toLowerCase();
if (placeholder.includes(_0xstr(604)) || placeholder.includes(_0xstr(605)) || placeholder.includes(_0xstr(606)) || placeholder.includes(_0xstr(607))) {
_0x0117 = input;
break;
}
}
}
if (!_0x0117) {
const _0x0012 = Array.from(document.querySelectorAll(_0xstr(608)));
_0x0117 = _0x0012.find(input => {
const type = (input.type || _0xstr(609)).toLowerCase();
const _0x0096 = type === _0xstr(610) || type === _0xstr(611) || type === _0xstr(612);
const _0x0098 = input.style.display !== _0xstr(613) && input.style.visibility !== _0xstr(614);
return _0x0096 && _0x0098;
});
}
if (_0x0117) {
log(_0xstr(615) + (_0x003c) + _0xstr(616));
await _0x00fd(_0x0117, _0x003c);
await _0x0042(100);
_0x0123(_0xstr(617));
const _0x00d8 = await _0x011d(_0x003c);
if (_0x00d8) {
log(_0xstr(618) + (_0x003c) + _0xstr(619));
_0x00ac = Date.now();
try {
await _0x001d(_0xstr(620), _0xstr(621), { toNum: _0x003c });
log(_0xstr(622) + (_0x003c) + _0xstr(623));
} catch (markErr) {
log(_0xstr(624) + (_0x003c) + _0xstr(625) + (markErr.message) + _0xstr(626));
}
} else {
log(_0xstr(627) + (_0x003c) + _0xstr(628));
try {
await _0x001d(_0xstr(629), _0xstr(630), { toNum: _0x003c, status: _0xstr(631) });
} catch (e) {
log(_0xstr(632) + (_0x003c) + _0xstr(633) + (e.message) + _0xstr(634));
}
}
} else {
log(_0xstr(635));
try {
await _0x001d(_0xstr(636), _0xstr(637), { toNum: _0x003c, status: _0xstr(638) });
log(_0xstr(639) + (_0x003c) + _0xstr(640));
} catch (e) {
log(_0xstr(641) + (_0x003c) + _0xstr(642) + (e.message) + _0xstr(643));
}
}
}
} catch (error) {
log(_0xstr(644) + (error.message) + _0xstr(645));
} finally {
_0x0091 = false;
localStorage.removeItem(_0xstr(646));
_0x00ee(_0xstr(647));
}
}
function _0x011d(_0x003c) {
return new Promise((resolve) => {
let _0x0028 = 0;
let _0x002b = setInterval(() => {
_0x0028++;
let _0x00d7 = null;
const _0x001a = document.querySelectorAll(_0xstr(648));
for (let btn of _0x001a) {
const text = btn.innerText.trim();
if (text === _0xstr(649) || text === _0xstr(650) || text === _0xstr(651) || text.includes(_0xstr(652))) {
_0x00d7 = btn;
break;
}
}
if (!_0x00d7) {
const _0x0052 = document.querySelectorAll(_0xstr(653));
for (let el of _0x0052) {
const text = el.innerText.trim();
if (text === _0xstr(654) || text === _0xstr(655) || text === _0xstr(656) || text.includes(_0xstr(657))) {
_0x00d7 = el.closest(_0xstr(658)) || el;
break;
}
}
}
if (_0x00d7 && !_0x00d7.disabled && !_0x00d7.classList.contains(_0xstr(659))) {
clearInterval(_0x002b);
log(_0xstr(660));
_0x00d7.click();
setTimeout(() => {
log(_0xstr(661) + (_0x003c) + _0xstr(662));
resolve(true);
}, 800);
} else if (_0x0028 > 20) {
clearInterval(_0x002b);
resolve(false);
}
}, 150);
});
}
async function _0x00ff() {
if (!_0x0092 || _0x008f) return;
const hash = window.location.hash || _0xstr(663);
if (!hash.includes(_0xstr(664))) return;
if (!_0x008a()) {
return;
}
if (!_0x000c(_0xstr(665))) {
return;
}
try {
_0x008f = true;
_0x00a2 = Date.now();
localStorage.setItem(_0xstr(666), _0xstr(667));
_0x0123(_0xstr(668));
const data = await _0x001d(_0xstr(669), _0xstr(670));
if (data.status === _0xstr(671) && data.pupCode) {
const pupCode = data.pupCode;
const _0x00e7 = data.recipientDriver;
const recipientDriver = _0x005a(_0x00e7);
const now = Date.now();
if (pupCode === _0x00a1 && (now - _0x00a3) < 30000) {
log(_0xstr(672) + (pupCode) + _0xstr(673));
return;
}
log(_0xstr(674) + (pupCode) + _0xstr(675) + (recipientDriver) + _0xstr(676) + (_0x00e7) + _0xstr(677));
const _0x001b = localStorage.getItem(_0xstr(678) + pupCode);
const _0x001c = parseInt(localStorage.getItem(_0xstr(679) + pupCode) || _0xstr(680));
if (_0x001b && _0x001b === recipientDriver && (Date.now() - _0x001c) < 1200000) {
log(_0xstr(681) + (pupCode) + _0xstr(682) + (recipientDriver) + _0xstr(683));
try {
await _0x001d(_0xstr(684), _0xstr(685), { pupCode: pupCode, status: _0xstr(686) });
log(_0xstr(687) + (pupCode) + _0xstr(688));
} catch (err) {
log(_0xstr(689) + (pupCode) + _0xstr(690) + (err.message) + _0xstr(691));
}
return;
}
const success = await _0x0056(pupCode, recipientDriver);
_0x00a1 = pupCode;
_0x00a3 = Date.now();
if (success === true || success === _0xstr(692)) {
localStorage.setItem(_0xstr(693) + pupCode, recipientDriver);
localStorage.setItem(_0xstr(694) + pupCode, Date.now().toString());
const _0x0103 = success === _0xstr(695) ? _0xstr(696) : _0xstr(697) + (recipientDriver) + _0xstr(698);
log(_0xstr(699) + (pupCode) + _0xstr(700) + (_0x0103) + _0xstr(701));
try {
await _0x001d(_0xstr(702), _0xstr(703), { pupCode: pupCode, status: _0xstr(704) });
log(_0xstr(705) + (pupCode) + _0xstr(706));
} catch (err) {
log(_0xstr(707) + (pupCode) + _0xstr(708) + (err.message) + _0xstr(709));
}
} else {
log(_0xstr(710));
try {
await _0x001d(_0xstr(711), _0xstr(712), { pupCode: pupCode, status: _0xstr(713) });
log(_0xstr(714) + (pupCode) + _0xstr(715));
} catch (err) {
log(_0xstr(716) + (pupCode) + _0xstr(717) + (err.message) + _0xstr(718));
}
}
} else {
localStorage.removeItem(_0xstr(719));
}
} catch (error) {
log(_0xstr(720) + (error.message) + _0xstr(721));
} finally {
_0x008f = false;
_0x00ee(_0xstr(722));
}
}
async function _0x0056(pupCode, recipientDriver) {
await _0x0055();
let _0x005e = null;
const _0x0060 = document.querySelectorAll(_0xstr(723));
for (let _0x0099 of _0x0060) {
const _0x009a = _0x0099.querySelector(_0xstr(724));
if (_0x009a) {
const _0x009c = (_0x009a.innerText || _0x009a.textContent || _0xstr(725)).trim().toLowerCase();
if (_0x009c.includes(_0xstr(726)) || _0x009c.includes(_0xstr(727)) || _0x009c === _0xstr(728)) {
_0x005e = _0x0099.querySelector(_0xstr(729));
if (_0x005e) break;
}
}
}
if (!_0x005e) {
const _0x0012 = document.querySelectorAll(_0xstr(730));
for (let input of _0x0012) {
const placeholder = input.placeholder || _0xstr(731);
if (placeholder.toLowerCase().includes(_0xstr(732)) || placeholder.toLowerCase().includes(_0xstr(733))) {
_0x005e = input;
break;
}
}
}
if (!_0x005e) {
log(_0xstr(734));
return false;
}
await _0x00fd(_0x005e, pupCode);
await _0x0042(300);
let _0x00f8 = Array.from(document.querySelectorAll(_0xstr(735))).find(btn => {
const _0x0120 = btn.innerText || btn.textContent || _0xstr(736);
return _0x0120.trim() === _0xstr(737) || _0x0120.trim() === _0xstr(738);
});
if (_0x00f8) {
_0x00f8.click();
log(_0xstr(739) + pupCode);
} else {
_0x005e.dispatchEvent(new KeyboardEvent(_0xstr(740), { key: _0xstr(741), code: _0xstr(742), keyCode: 13, which: 13, bubbles: true }));
}
await _0x0042(2000);
_0x0123(_0xstr(743));
const _0x00c7 = Array.from(document.querySelectorAll(_0xstr(744))).find(el => {
const _0x0120 = (el.innerText || el.textContent || _0xstr(745)).trim().toLowerCase();
return _0x0120 === _0xstr(746) || _0x0120 === _0xstr(747);
});
if (_0x00c7 && (_0x00c7.offsetWidth > 0 || _0x00c7.offsetHeight > 0)) {
log(_0xstr(748) + (pupCode) + _0xstr(749));
return false;
}
const _0x00f4 = Array.from(document.querySelectorAll(_0xstr(750)));
const _0x0041 = _0x00f4.filter(_0x00f3 => _0x00f3.querySelector(_0xstr(751)));
if (_0x0041.length > 0) {
let _0x0061 = false;
for (let _0x00f3 of _0x0041) {
const _0x00e9 = Array.from(_0x00f3.querySelectorAll(_0xstr(752))).find(el => {
const _0x0120 = el.innerText || el.textContent || _0xstr(753);
return _0x0120.trim() === _0xstr(754) || _0x0120.trim() === _0xstr(755) || _0x0120.trim() === _0xstr(756);
});
if (_0x00e9) {
_0x0061 = true;
break;
}
}
if (!_0x0061) {
log(_0xstr(757) + (pupCode) + _0xstr(758));
return false;
}
}
let _0x00ea = false;
for (let _0x00f3 of _0x00f4) {
const _0x00e9 = Array.from(_0x00f3.querySelectorAll(_0xstr(759))).find(el => {
const _0x0120 = el.innerText || el.textContent || _0xstr(760);
return _0x0120.trim() === _0xstr(761) || _0x0120.trim() === _0xstr(762) || _0x0120.trim() === _0xstr(763);
});
if (_0x00e9) {
log(_0xstr(764));
_0x00e9.click();
await _0x0042(2500);
_0x0123(_0xstr(765));
const _0x004b = document.querySelectorAll(_0xstr(766));
let _0x010d = null;
for (const _0x0045 of _0x004b) {
if (_0x0045.offsetWidth > 0 || _0x0045.offsetHeight > 0) {
const text = (_0x0045.innerText || _0x0045.textContent || _0xstr(767));
if (text.includes(_0xstr(768)) || text.includes(_0xstr(769)) || text.includes(_0xstr(770)) || text.includes(_0xstr(771))) {
_0x010d = _0x0045;
break;
}
}
}
if (_0x010d) {
let _0x004f = null;
const _0x0060 = _0x010d.querySelectorAll(_0xstr(772));
for (let _0x0099 of _0x0060) {
const _0x009a = _0x0099.querySelector(_0xstr(773));
if (_0x009a) {
const _0x009c = (_0x009a.innerText || _0x009a.textContent || _0xstr(774)).trim().toLowerCase();
if (_0x009c.includes(_0xstr(775)) || _0x009c.includes(_0xstr(776))) {
_0x004f = _0x0099.querySelector(_0xstr(777));
if (_0x004f) break;
}
}
}
if (!_0x004f) {
const _0x0048 = _0x010d.querySelectorAll(_0xstr(778));
for (let _0x0079 of _0x0048) {
const ph = _0x0079.placeholder || _0xstr(779);
if (ph.toLowerCase().includes(_0xstr(780)) || ph.toLowerCase().includes(_0xstr(781)) || ph.toLowerCase().includes(_0xstr(782))) {
_0x004f = _0x0079;
break;
}
}
}
if (_0x004f) {
const _0x00fa = _0x004f.closest(_0xstr(783)) || _0x004f.parentElement;
if (_0x00fa) {
_0x00fa.click();
} else {
_0x004f.removeAttribute(_0xstr(784));
_0x004f.click();
}
log(_0xstr(785));
await _0x0042(2200);
_0x0123(_0xstr(786));
let _0x000d = document.activeElement;
if (!_0x000d || _0x000d.tagName !== _0xstr(787) || !_0x010d.contains(_0x000d)) {
_0x000d = _0x004f;
}
_0x000d.removeAttribute(_0xstr(788));
_0x000d.focus();
if (typeof _0x000d.select === _0xstr(789)) _0x000d.select();
_0x000d.value = _0xstr(790);
_0x000d.dispatchEvent(new Event(_0xstr(791), { bubbles: true }));
try {
document.execCommand(_0xstr(792), false, recipientDriver);
} catch (e) {}
if (_0x000d.value !== recipientDriver) {
_0x000d.value = recipientDriver;
}
_0x000d.dispatchEvent(new Event(_0xstr(793), { bubbles: true }));
_0x000d.dispatchEvent(new Event(_0xstr(794), { bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(795), { key: _0xstr(796), bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(797), { key: _0xstr(798), bubbles: true }));
log(_0xstr(799) + recipientDriver + _0xstr(800));
await _0x0042(2500);
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(801)));
let _0x00bc = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(802)).trim();
return text.includes(recipientDriver) &&
(el.offsetWidth > 0 || el.offsetHeight > 0) &&
(el.classList.contains(_0xstr(803)) ||
el.closest(_0xstr(804)) ||
el.closest(_0xstr(805)) ||
el.tagName === _0xstr(806));
});
if (!_0x00bc) {
_0x00bc = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(807)).trim();
return text.includes(recipientDriver) &&
(el.closest(_0xstr(808)) || el.closest(_0xstr(809)) || el.tagName === _0xstr(810));
});
}
if (!_0x00bc) {
_0x00bc = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(811)).trim();
return text.includes(recipientDriver);
});
}
if (_0x00bc) {
_0x00bc.click();
log(_0xstr(812) + (_0x00bc.innerText || _0x00bc.textContent).trim());
await _0x0042(1200);
const _0x0046 = Array.from(_0x010d.querySelectorAll(_0xstr(813))).find(btn => {
const _0x0120 = btn.innerText || btn.textContent || _0xstr(814);
return _0x0120.trim() === _0xstr(815) || _0x0120.trim() === _0xstr(816) || _0x0120.trim() === _0xstr(817);
});
if (_0x0046) {
_0x0046.click();
log(_0xstr(818));
let _0x006c = false;
for (let _0x0024 = 0; _0x0024 < 30; _0x0024++) {
await _0x0042(100);
const _0x0019 = document.body.innerText || _0xstr(819);
if (_0x0019.includes(_0xstr(820)) || _0x0019.toLowerCase().includes(_0xstr(821))) {
log(_0xstr(822));
_0x006c = true;
break;
}
}
if (_0x006c) {
let _0x001e = Array.from(_0x010d.querySelectorAll(_0xstr(823))).find(btn => {
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(824)).trim().toLowerCase();
return _0x0120 === _0xstr(825) || _0x0120 === _0xstr(826) || _0x0120 === _0xstr(827) || _0x0120 === _0xstr(828) || _0x0120.includes(_0xstr(829)) || _0x0120.includes(_0xstr(830));
});
if (!_0x001e) {
_0x001e = Array.from(document.querySelectorAll(_0xstr(831))).find(btn => {
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(832)).trim().toLowerCase();
return (_0x0120 === _0xstr(833) || _0x0120 === _0xstr(834) || _0x0120 === _0xstr(835) || _0x0120 === _0xstr(836) || _0x0120.includes(_0xstr(837)) || _0x0120.includes(_0xstr(838))) &&
(btn.offsetWidth > 0 || btn.offsetHeight > 0);
});
}
if (!_0x001e) {
_0x001e = _0x010d.querySelector(_0xstr(839));
}
if (_0x001e) {
_0x001e.click();
log(_0xstr(840));
} else {
log(_0xstr(841));
}
await _0x0042(500);
return _0xstr(842);
}
_0x00ea = true;
await _0x0042(1500);
break;
} else {
log(_0xstr(843));
}
} else {
log(_0xstr(844) + recipientDriver);
}
} else {
log(_0xstr(845));
}
} else {
log(_0xstr(846));
}
}
}
return _0x00ea;
}
async function _0x00dc() {
if (!_0x0092 || !_0x007d || _0x008e) return;
const _0x00c2 = _0x0065();
if (_0x00c2 !== _0xstr(847)) return;
const _0x0088 = localStorage.getItem(_0xstr(848)) === _0xstr(849) ||
localStorage.getItem(_0xstr(850)) === _0xstr(851) ||
localStorage.getItem(_0xstr(852)) === _0xstr(853);
const hash = window.location.hash || _0xstr(854);
const isCurrentlyOnBắnPickPage = hash.includes(_0xstr(855));
if (!isCurrentlyOnBắnPickPage) {
if (_0x0088) return;
try {
_0x008e = true;
const data = await _0x001d(_0xstr(856), _0xstr(857));
if (data.status === _0xstr(858) && data.tasks && data.tasks.length > 0) {
const _0x0073 = data.tasks.some(t => {
if (!t.riderId) return false;
const _0x00e5 = t.riderId.trim();
const _0x00e6 = _0x00e5.toUpperCase();
return _0x00e5 !== _0xstr(859) && _0x00e6 !== _0xstr(860) && _0x00e6 !== _0xstr(861);
});
if (_0x0073) {
log(_0xstr(862));
window.postMessage({ type: _0xstr(863) }, _0xstr(864));
window.location.hash = _0xstr(865);
}
}
} catch (e) {
console.error(e);
} finally {
_0x008e = false;
}
return;
}
const _0x001a = Array.from(document.querySelectorAll(_0xstr(866)));
const _0x0070 = _0x001a.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(867)).trim().toLowerCase();
return text.includes(_0xstr(868)) || text.includes(_0xstr(869));
});
if (!_0x0070) {
return;
}
if (!_0x000c(_0xstr(870))) {
return;
}
try {
_0x008e = true;
_0x009e = Date.now();
localStorage.setItem(_0xstr(871), _0xstr(872));
_0x0123(_0xstr(873));
const data = await _0x001d(_0xstr(874), _0xstr(875));
if (data.status !== _0xstr(876)) {
throw new Error(_0xstr(877));
}
if (data.tasks.length === 0) {
log(_0xstr(878));
const headers = Array.from(document.querySelectorAll(_0xstr(879)));
let _0x0035 = { pupId: -1, shopName: -1, shopAddress: -1, mappedPupg: -1 };
headers.forEach((th, idx) => {
const _0x0120 = (th.innerText || th.textContent || _0xstr(880)).trim().toLowerCase();
const _0x002f = _0x0120.replace(/\s+/g, _0xstr(881));
if (_0x002f.includes(_0xstr(882))) _0x0035.pupId = idx;
else if (_0x002f.includes(_0xstr(883)) || _0x002f.includes(_0xstr(884))) _0x0035.shopName = idx;
else if (_0x002f.includes(_0xstr(885))) _0x0035.shopAddress = idx;
else if (_0x002f.includes(_0xstr(886))) _0x0035.mappedPupg = idx;
});
log(_0xstr(887) + (_0x0035.pupId) + _0xstr(888) + (_0x0035.shopName) + _0xstr(889) + (_0x0035.shopAddress) + _0xstr(890) + (_0x0035.mappedPupg) + _0xstr(891));
if (_0x0035.pupId === -1) {
log(_0xstr(892));
return;
}
const _0x00f7 = [];
const _0x00f4 = document.querySelectorAll(_0xstr(893));
_0x00f4.forEach(_0x00f3 => {
const _0x0021 = _0x00f3.querySelectorAll(_0xstr(894));
if (_0x0021.length > Math.max(_0x0035.pupId, _0x0035.shopName, _0x0035.shopAddress, _0x0035.mappedPupg)) {
const pupId = _0x0021[_0x0035.pupId].innerText.trim();
const shopName = _0x0035.shopName !== -1 ? _0x0021[_0x0035.shopName].innerText.trim() : _0xstr(895);
const shopAddress = _0x0035.shopAddress !== -1 ? _0x0021[_0x0035.shopAddress].innerText.trim() : _0xstr(896);
const mappedPupg = _0x0035.mappedPupg !== -1 ? _0x0021[_0x0035.mappedPupg].innerText.trim() : _0xstr(897);
if (pupId) {
_0x00f7.push({ pupId, shopName, shopAddress, mappedPupg });
}
}
});
if (_0x00f7.length > 0) {
log(_0xstr(898) + (_0x00f7.length) + _0xstr(899));
await _0x001d(_0xstr(900), _0xstr(901), { scraped: _0x00f7 });
log(_0xstr(902));
} else {
log(_0xstr(903));
}
return;
}
if (!data.hasRiderValue) {
log(_0xstr(904));
return;
}
const _0x0053 = data.tasks.find(t => !t.riderId || t.riderId.trim() === _0xstr(905));
if (_0x0053) {
log(_0xstr(906) + (_0x0053.pupId) + _0xstr(907));
await _0x001d(_0xstr(908), _0xstr(909), { pupId: _0x0053.pupId, actionType: _0xstr(910) });
return;
}
const _0x0110 = data.tasks.find(t => {
if (!t.riderId) return false;
const _0x00e5 = t.riderId.trim();
const _0x00e6 = _0x00e5.toUpperCase();
return _0x00e5 !== _0xstr(911) && _0x00e6 !== _0xstr(912) && _0x00e6 !== _0xstr(913);
});
if (_0x0110) {
window.postMessage({ type: _0xstr(914) }, _0xstr(915));
await _0x0042(600);
log(_0xstr(916) + (_0x0110.pupId) + _0xstr(917) + (_0x0110.riderId) + _0xstr(918));
const _0x00f5 = Array.from(document.querySelectorAll(_0xstr(919)));
const _0x00bb = _0x00f5.find(_0x00f3 => (_0x00f3.innerText || _0x00f3.textContent || _0xstr(920)).includes(_0x0110.pupId));
if (_0x00bb) {
const _0x002d = _0x00bb.querySelector(_0xstr(921)) || _0x00bb.querySelector(_0xstr(922)) || _0x00bb.querySelector(_0xstr(923)) || _0x00bb.querySelector(_0xstr(924));
if (_0x002d) {
const _0x007f = _0x002d.classList.contains(_0xstr(925)) ||
(_0x002d.querySelector && _0x002d.querySelector(_0xstr(926))) ||
(_0x002d.parentElement && _0x002d.parentElement.classList.contains(_0xstr(927)));
if (!_0x007f) {
_0x002d.click();
await _0x0042(500);
}
}
const _0x0014 = Array.from(document.querySelectorAll(_0xstr(928))).find(btn => {
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(929)).trim().toLowerCase();
return _0x0120 === _0xstr(930) || _0x0120.includes(_0xstr(931));
});
if (_0x0014) {
_0x0014.click();
let _0x0045 = null;
for (let attempts = 0; attempts < 10; attempts++) {
await _0x0042(500);
const _0x0020 = Array.from(document.querySelectorAll(_0xstr(932)));
const _0x012f = _0x0020.filter(d => {
const r = d.getBoundingClientRect();
const _0x0097 = (r.width > 0 && r.height > 0) || d.offsetWidth > 0 || d.offsetHeight > 0;
if (!_0x0097) return false;
const _0x0120 = (d.innerText || d.textContent || _0xstr(933)).toLowerCase();
return _0x0120.includes(_0xstr(934)) || _0x0120.includes(_0xstr(935)) || _0x0120.includes(_0xstr(936));
});
if (_0x012f.length > 0) {
_0x0045 = _0x012f[_0x012f.length - 1];
break;
}
}
if (_0x0045) {
await _0x0042(1000);
let _0x0031 = null;
let _0x004e = null;
let _0x0047 = _0x0045;
const _0x00fb = Array.from(_0x0047.querySelectorAll(_0xstr(937)));
if (_0x00fb.length >= 2) {
_0x00fb.sort((a,b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
_0x0031 = _0x00fb[_0x00fb.length - 1];
} else if (_0x00fb.length === 1) {
_0x0031 = _0x00fb[0];
}
if (!_0x0031) {
let _0x00f9 = Array.from(_0x0047.querySelectorAll(_0xstr(938))).filter(el => {
if ([_0xstr(939),_0xstr(940),_0xstr(941),_0xstr(942),_0xstr(943),_0xstr(944),_0xstr(945),_0xstr(946)].includes(el.tagName)) return false;
const _0x00eb = el.getBoundingClientRect();
if (_0x00eb.width === 0 || _0x00eb.height === 0) return false;
const _0x0120 = (el.innerText || el.textContent || _0xstr(947)).toLowerCase().trim();
const _0x00d6 = (el.placeholder || _0xstr(948)).toLowerCase().trim();
return _0x0120.includes(_0xstr(949)) || _0x0120.includes(_0xstr(950)) || _0x00d6.includes(_0xstr(951)) || _0x00d6.includes(_0xstr(952));
});
_0x00f9 = _0x00f9.filter(el => !Array.from(el.querySelectorAll(_0xstr(953))).some(child => _0x00f9.includes(child)));
if (_0x00f9.length >= 2) {
_0x00f9.sort((a,b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
_0x0031 = _0x00f9[_0x00f9.length - 1];
} else if (_0x00f9.length === 1) {
_0x0031 = _0x00f9[0];
}
}
if (!_0x0031) {
const _0x007b = Array.from(_0x0047.querySelectorAll(_0xstr(954))).filter(el => {
const r = el.getBoundingClientRect();
return r.width > 0 && r.height > 0 && el.type !== _0xstr(955);
});
let _0x0050 = _0x007b.filter(el => {
return el.value === _0xstr(956) || el.readOnly || el.getAttribute(_0xstr(957)) !== null || el.className.includes(_0xstr(958));
});
if (_0x0050.length === 0 && _0x007b.length > 0) {
_0x0050 = _0x007b;
}
if (_0x0050.length >= 2) {
_0x0050.sort((a,b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
_0x0031 = _0x0050[_0x0050.length - 1];
} else if (_0x0050.length === 1) {
_0x0031 = _0x0050[0];
}
}
if (_0x0031) {
_0x004e = (_0x0031.tagName === _0xstr(959)) ? _0x0031 : _0x0031.querySelector(_0xstr(960));
if (!_0x004e) _0x004e = _0x0031;
const _0x00eb = _0x0031.getBoundingClientRect();
const x = _0x00eb.left + _0x00eb.width / 2;
const y = _0x00eb.top + _0x00eb.height / 2;
log(_0xstr(961) + (x.toFixed(0)) + _0xstr(962) + (y.toFixed(0)) + _0xstr(963) + (_0x0031.className) + _0xstr(964));
const _0x011b = document.elementFromPoint(x, y);
const _0x004d = (el) => {
if (!el) return;
try {
el.dispatchEvent(new MouseEvent(_0xstr(965), { bubbles: true, cancelable: true, clientX: x, clientY: y, view: window }));
el.dispatchEvent(new MouseEvent(_0xstr(966), { bubbles: true, cancelable: true, clientX: x, clientY: y, view: window }));
el.dispatchEvent(new MouseEvent(_0xstr(967), { bubbles: true, cancelable: true, clientX: x, clientY: y, view: window }));
el.click();
} catch(e) {}
};
if (_0x011b && _0x011b !== _0x0031) {
_0x004d(_0x011b);
await _0x0042(100);
}
_0x004d(_0x0031);
await _0x0042(100);
let p = _0x0031;
for(let i=0; i<3 && p && p !== _0x0045; i++){
_0x004d(p);
p = p.parentElement;
await _0x0042(100);
}
} else {
log(_0xstr(968));
}
await _0x0042(800);
if (_0x004e) {
try { _0x004e.focus(); } catch(e) {}
await _0x0042(200);
_0x004e.dispatchEvent(new KeyboardEvent(_0xstr(969), { key: _0xstr(970), code: _0xstr(971), keyCode: 40, which: 40, bubbles: true }));
await _0x0042(600);
}
const _0x00fc = (el, _0x012c) => {
const _0x012e = Object.getOwnPropertyDescriptor(el, _0xstr(972))?.set;
const prototype = Object.getPrototypeOf(el);
const _0x00df = Object.getOwnPropertyDescriptor(prototype, _0xstr(973))?.set;
if (_0x00df && _0x012e !== _0x00df) {
_0x00df.call(el, _0x012c);
} else if (_0x012e) {
_0x012e.call(el, _0x012c);
} else {
el.value = _0x012c;
}
};
if (_0x004e) {
_0x00fc(_0x004e, _0xstr(974));
_0x004e.dispatchEvent(new Event(_0xstr(975), { bubbles: true }));
for (let _0x0023 of _0x0110.riderId) {
let _0x0040 = _0x004e.value + _0x0023;
_0x00fc(_0x004e, _0x0040);
_0x004e.dispatchEvent(new Event(_0xstr(976), { bubbles: true }));
_0x004e.dispatchEvent(new KeyboardEvent(_0xstr(977), { key: _0x0023, bubbles: true }));
_0x004e.dispatchEvent(new KeyboardEvent(_0xstr(978), { key: _0x0023, bubbles: true }));
_0x004e.dispatchEvent(new KeyboardEvent(_0xstr(979), { key: _0x0023, bubbles: true }));
await _0x0042(80);
}
_0x004e.dispatchEvent(new Event(_0xstr(980), { bubbles: true }));
await _0x0042(1200);
}
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(981)));
const _0x00be = _0x0011.filter(_0x0099 => {
const _0x0120 = (_0x0099.innerText || _0x0099.textContent || _0xstr(982)).trim();
const _0x0089 = _0x0120.includes(_0xstr(983) + _0x0110.riderId + _0xstr(984)) ||
(_0x0120.includes(_0x0110.riderId) && !_0x0120.includes(_0xstr(985)));
const _0x0086 = _0x0099.tagName.toLowerCase() === _0xstr(986);
const _0x0081 = _0x0099.closest(_0xstr(987)) || _0x0099.closest(_0xstr(988)) || _0x0099.closest(_0xstr(989)) || _0x0099.closest(_0xstr(990));
return _0x0089 && !_0x0086 && !_0x0081 && (_0x0099.offsetWidth > 0 || _0x0099.offsetHeight > 0);
});
let _0x00ba = null;
if (_0x00be.length > 0) {
_0x00be.sort((a, b) => {
const _0x0111 = (a.innerText || a.textContent || _0xstr(991)).trim();
const _0x0112 = (b.innerText || b.textContent || _0xstr(992)).trim();
return _0x0111.length - _0x0112.length;
});
_0x00ba = _0x00be[0];
}
if (_0x00ba) {
const _0x00eb = _0x00ba.getBoundingClientRect();
const cx = _0x00eb.left + _0x00eb.width / 2;
const cy = _0x00eb.top + _0x00eb.height / 2;
try {
const _0x011b = document.elementFromPoint(cx, cy) || _0x00ba;
_0x011b.dispatchEvent(new MouseEvent(_0xstr(993), { bubbles: true, cancelable: true, clientX: cx, clientY: cy, view: window }));
_0x011b.dispatchEvent(new MouseEvent(_0xstr(994), { bubbles: true, cancelable: true, clientX: cx, clientY: cy, view: window }));
_0x011b.click();
_0x00ba.dispatchEvent(new MouseEvent(_0xstr(995), { bubbles: true, cancelable: true, clientX: cx, clientY: cy, view: window }));
_0x00ba.dispatchEvent(new MouseEvent(_0xstr(996), { bubbles: true, cancelable: true, clientX: cx, clientY: cy, view: window }));
_0x00ba.click();
} catch(e) {}
log(_0xstr(997) + (_0x00ba.innerText) + _0xstr(998));
await _0x0042(500);
const _0x0039 = Array.from(document.querySelectorAll(_0xstr(999))).filter(btn => {
if ([_0xstr(1000),_0xstr(1001),_0xstr(1002),_0xstr(1003),_0xstr(1004),_0xstr(1005),_0xstr(1006),_0xstr(1007)].includes(btn.tagName)) return false;
const r = btn.getBoundingClientRect();
if (r.width === 0 || r.height === 0) return false;
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(1008)).trim().toLowerCase();
if (_0x0120.length > 20) return false;
return _0x0120 === _0xstr(1009) || _0x0120 === _0xstr(1010);
});
const _0x0038 = _0x0039[_0x0039.length - 1];
if (_0x0038) {
_0x0038.click();
log(_0xstr(1011));
await _0x0042(1500);
await _0x001d(_0xstr(1012), _0xstr(1013), { pupId: _0x0110.pupId, actionType: _0xstr(1014) });
} else {
throw new Error(_0xstr(1015));
}
} else {
log(_0xstr(1016) + (_0x0110.riderId) + _0xstr(1017));
const _0x001f = Array.from(document.querySelectorAll(_0xstr(1018))).filter(btn => {
if ([_0xstr(1019),_0xstr(1020),_0xstr(1021),_0xstr(1022),_0xstr(1023),_0xstr(1024),_0xstr(1025),_0xstr(1026)].includes(btn.tagName)) return false;
const r = btn.getBoundingClientRect();
if (r.width === 0 || r.height === 0) return false;
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(1027)).trim().toLowerCase();
if (_0x0120.length > 20) return false;
return _0x0120 === _0xstr(1028) || _0x0120 === _0xstr(1029) || _0x0120 === _0xstr(1030);
});
const _0x001e = _0x001f[_0x001f.length - 1];
if (_0x001e) _0x001e.click();
await _0x0042(800);
await _0x001d(_0xstr(1031), _0xstr(1032), { pupId: _0x0110.pupId, actionType: _0xstr(1033) });
}
} else {
throw new Error(_0xstr(1034));
}
} else {
throw new Error(_0xstr(1035));
}
} else {
log(_0xstr(1036) + (_0x0110.pupId) + _0xstr(1037));
await _0x001d(_0xstr(1038), _0xstr(1039), { pupId: _0x0110.pupId, actionType: _0xstr(1040) });
}
return;
}
if (data.tasks.length === 0) {
log(_0xstr(1041));
const _0x00f8 = Array.from(document.querySelectorAll(_0xstr(1042))).find(btn => {
const _0x0120 = (btn.innerText || btn.textContent || _0xstr(1043)).trim().toLowerCase();
return _0x0120 === _0xstr(1044) || _0x0120 === _0xstr(1045);
});
if (_0x00f8) {
_0x00f8.click();
await _0x0042(1500);
}
} } catch (error) {
log(_0xstr(1046) + (error.message) + _0xstr(1047));
} finally {
_0x008e = false;
localStorage.removeItem(_0xstr(1048));
_0x00ee(_0xstr(1049));
}
}
function _0x0025() {
const now = Date.now();
if (_0x008d && _0x00a8 > 0 && (now - _0x00a8) > _0x0009) {
log(_0xstr(1050));
_0x008d = false;
_0x00ee(_0xstr(1051));
_0x00a8 = 0;
}
if (_0x0090 && _0x00a4 > 0 && (now - _0x00a4) > _0x0009) {
log(_0xstr(1052));
_0x0090 = false;
_0x00ee(_0xstr(1053));
_0x00a4 = 0;
}
if (_0x0091 && _0x00a7 > 0 && (now - _0x00a7) > _0x0009) {
log(_0xstr(1054));
_0x0091 = false;
_0x00ee(_0xstr(1055));
_0x00a7 = 0;
}
if (_0x008f && _0x00a2 > 0 && (now - _0x00a2) > _0x0009) {
log(_0xstr(1056));
_0x008f = false;
_0x00ee(_0xstr(1057));
_0x00a2 = 0;
}
if (_0x008e && _0x009e > 0 && (now - _0x009e) > _0x0009) {
log(_0xstr(1058));
_0x008e = false;
_0x00ee(_0xstr(1059));
_0x009e = 0;
}
}
function _0x002c() {
const href = window.location.href;
if (href.includes(_0xstr(1060)) || href.includes(_0xstr(1061))) {
log(_0xstr(1062));
window.location.reload();
return false;
}
return true;
}
const _0x0008 = 60000;
const _0x0007 = 300000;
function _0x008a() {
const hash = window.location.hash || _0xstr(1063);
const href = window.location.href;
if (href.includes(_0xstr(1064)) || href.includes(_0xstr(1065))) return false;
const _0x00b9 = document.querySelectorAll(_0xstr(1066));
for (const _0x00b8 of _0x00b9) {
if (_0x00b8.offsetWidth > 100 && _0x00b8.offsetHeight > 100) {
const style = window.getComputedStyle(_0x00b8);
if (style.display !== _0xstr(1067) && style.visibility !== _0xstr(1068) && style.opacity !== _0xstr(1069)) {
return false;
}
}
}
if (hash.includes(_0xstr(1070))) {
const textarea = document.querySelector(_0xstr(1071)) || document.querySelector(_0xstr(1072));
return !!textarea;
}
if (hash.includes(_0xstr(1073))) {
const _0x001a = Array.from(document.querySelectorAll(_0xstr(1074)));
const _0x0070 = _0x001a.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(1075)).trim().toLowerCase();
return text.includes(_0xstr(1076)) || text.includes(_0xstr(1077));
});
const _0x0071 = document.querySelectorAll(_0xstr(1078)).length > 0;
return _0x0070 && _0x0071;
}
if (hash.includes(_0xstr(1079))) {
const _0x007b = Array.from(document.querySelectorAll(_0xstr(1080)));
const _0x006f = _0x007b.some(input => {
const type = (input.type || _0xstr(1081)).toLowerCase();
return type === _0xstr(1082) || type === _0xstr(1083) || type === _0xstr(1084);
});
return _0x006f;
}
if (hash.includes(_0xstr(1085))) {
const _0x006f = document.querySelector(_0xstr(1086)) !== null;
const _0x006a = document.querySelector(_0xstr(1087)) !== null;
return _0x006f && _0x006a;
}
if (hash.includes(_0xstr(1088))) {
const _0x001a = Array.from(document.querySelectorAll(_0xstr(1089)));
const _0x0070 = _0x001a.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(1090)).trim().toLowerCase();
return text.includes(_0xstr(1091)) || text.includes(_0xstr(1092));
});
const _0x006f = document.querySelectorAll(_0xstr(1093)).length > 0;
return _0x0070 || _0x006f;
}
return false;
}
function _0x0033(tabType) {
log(_0xstr(1094) + (tabType) + _0xstr(1095));
localStorage.setItem(_0xstr(1096) + tabType, _0xstr(1097));
localStorage.removeItem(_0xstr(1098) + tabType);
window.postMessage({ type: _0xstr(1099) }, _0xstr(1100));
setTimeout(() => {
try {
window.close();
} catch (e) {
console.log(_0xstr(1101));
}
}, 1000);
}
function _0x0078() {
const now = Date.now();
const _0x00c2 = _0x0065();
log(_0xstr(1102));
for (const type of _0x0002) {
if (type !== _0x00c2) {
localStorage.setItem(_0xstr(1103) + type, now.toString());
}
}
setTimeout(() => {
log(_0xstr(1104));
localStorage.setItem(_0xstr(1105), JSON.stringify(_0x0002));
const _0x005f = _0x0002[0];
localStorage.setItem(_0xstr(1106), _0x005f);
localStorage.setItem(_0xstr(1107), _0xstr(1108));
localStorage.setItem(_0xstr(1109), Date.now().toString());
localStorage.removeItem(_0xstr(1110));
if (_0x00c2 === _0x005f) {
log(_0xstr(1111) + (_0x005f) + _0xstr(1112));
window.location.reload();
} else {
const _0x0022 = _0x000a[_0x005f];
log(_0xstr(1113) + (_0x0022.name) + _0xstr(1114));
window.postMessage({ type: _0xstr(1115), url: _0x0022.url, active: true }, _0xstr(1116));
setTimeout(() => {
log(_0xstr(1117));
_0x0033(_0x00c2);
}, 1000);
}
}, 2500);
_0x00ac = now;
}
function _0x0027() {
const _0x00c2 = _0x0065();
if (_0x00c2) {
const _0x011f = localStorage.getItem(_0xstr(1118) + _0x00c2);
if (_0x011f) {
const _0x011e = parseInt(_0x011f, 10);
const now = Date.now();
if (now - _0x011e < 8000) {
const _0x007e = _0x008d || _0x0090 || _0x0091 || _0x008f || _0x008e;
if (_0x007e) {
log(_0xstr(1119));
return;
}
log(_0xstr(1120));
_0x0033(_0x00c2);
}
}
}
}
function _0x002a() {
const now = Date.now();
const _0x0085 = !_0x008d && !_0x0090 && !_0x0091 && !_0x008f && !_0x008e;
if (_0x0085 && (now - _0x010a) > _0x0001) {
log(_0xstr(1121));
window.location.reload();
}
}
let _0x00c0 = 0;
function _0x00bf() {
const _0x00c3 = _0x0065();
if (_0x00c3) {
const _0x0080 = _0x008d || _0x0090 || _0x0091 || _0x008f || _0x008e;
localStorage.setItem(_0xstr(1122) + _0x00c3, _0x0080 ? _0xstr(1123) : _0xstr(1124));
}
_0x0124();
_0x0125();
_0x0027();
_0x0013 = localStorage.getItem(_0xstr(1125)) || GM_getValue(_0xstr(1126), _0x0000);
_0x00d3 = localStorage.getItem(_0xstr(1127)) || GM_getValue(_0xstr(1128), _0xstr(1129));
if (!_0x00d3 || _0x00d3 === _0xstr(1130) || _0x00d3 === _0xstr(1131) || _0x00d3.trim() === _0xstr(1132)) {
_0x00d3 = _0xstr(1133);
}
_0x00d4 = localStorage.getItem(_0xstr(1134)) || GM_getValue(_0xstr(1135), _0xstr(1136));
_0x0092 = localStorage.getItem(_0xstr(1137)) === _0xstr(1138);
_0x007d = localStorage.getItem(_0xstr(1139)) === _0xstr(1140);
_0x0126();
if (typeof _0x0122 === _0xstr(1141)) {
_0x0122();
}
const _0x003f = window.location.href;
const hash = window.location.hash || _0xstr(1142);
if (_0x003f !== _0x00af) {
_0x00af = _0x003f;
_0x0090 = false;
_0x0091 = false;
_0x008d = false;
_0x008f = false;
_0x008e = false;
}
_0x0067();
if (!_0x0092) return;
_0x00c0++;
if (_0x00c0 % 75 === 0) {
_0x0025();
_0x0026();
_0x002c();
_0x002a();
_0x0017();
}
const now = Date.now();
if (hash.includes(_0xstr(1143))) {
if (now - _0x009f > 4500) {
_0x009f = now;
_0x0100();
}
}
if (hash.includes(_0xstr(1144))) {
_0x00de();
}
if (hash.includes(_0xstr(1145))) {
if (now - _0x00ae > 4500) {
_0x00ae = now;
_0x00dd();
}
}
if (hash.includes(_0xstr(1146))) {
if (now - _0x00a0 > 5000) {
_0x00a0 = now;
_0x00ff();
}
}
if (hash.includes(_0xstr(1147))) {
const _0x0083 =
localStorage.getItem(_0xstr(1148)) === _0xstr(1149) ||
localStorage.getItem(_0xstr(1150)) === _0xstr(1151) ||
localStorage.getItem(_0xstr(1152)) === _0xstr(1153);
if (_0x0083) {
} else {
if (now - _0x009d > 5000) {
_0x009d = now;
_0x00dc();
}
}
}
}
window.addEventListener(_0xstr(1154), (e) => {
if (e.data) {
if (e.data.type === _0xstr(1155)) {
_0x0124();
if (_0x0092) {
_0x0026();
const hash = window.location.hash || _0xstr(1156);
if (hash.includes(_0xstr(1157))) {
_0x0100();
} else if (hash.includes(_0xstr(1158))) {
_0x00de();
} else if (hash.includes(_0xstr(1159))) {
_0x00dd();
} else if (hash.includes(_0xstr(1160))) {
_0x00ff();
} else if (hash.includes(_0xstr(1161))) {
_0x00dc();
}
}
} else if (e.data.type === _0xstr(1162)) {
log(_0xstr(1163));
_0x0077(_0xstr(1164));
}
}
});
_0x0124();
let _0x0130 = null;
try {
const _0x0018 = new Blob([_0xstr(1165)], { type: _0xstr(1166) });
const _0x0131 = URL.createObjectURL(_0x0018);
_0x0130 = new Worker(_0x0131);
_0x0130.onmessage = function(e) {
if (e.data === _0xstr(1167)) {
_0x00bf();
}
};
log(_0xstr(1168));
} catch (err) {
log(_0xstr(1169));
function _0x005d() {
_0x00bf();
setTimeout(_0x005d, 400);
}
_0x005d();
}
}
if (document.readyState === _0xstr(1170)) {
document.addEventListener(_0xstr(1171), init);
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
