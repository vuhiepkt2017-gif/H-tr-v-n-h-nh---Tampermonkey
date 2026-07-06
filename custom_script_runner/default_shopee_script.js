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
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'MQ==',
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
        'PjMgKENhbyBuaOG6pXQgLSDGr3UgdGnDqm4pPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyI+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYXAtc2F2ZS11cmwiIHN0eWxlPSJmbGV4OiAxOyBwYWRkaW5nOiA2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyBjb2xvcjogd2hpdGU7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7Ij5MxrB1PC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYXAtdG9nZ2xlLWJ0biIgc3R5bGU9ImZsZXg6IDEuNTsgcGFkZGluZzogNnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgY29sb3I6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiBib2xkOyI+QuG6r3QgxJHhuqd1IGNo4bqheTwvYnV0dG9uPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tYm90dG9tOiAxMHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDsgcGFkZGluZy10b3A6IDhweDsiPgogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT0iZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDZweDsgY29sb3I6ICNmZjk4MDA7IGZvbnQtd2VpZ2h0OiBib2xkOyI+VHLhuqFuZyB0aMOhaSBjw6FjIFRhYiAoQXV0by1PcGVuKTo8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IGdhcDogNnB4OyIgaWQ9ImFwLXRhYnMtc3RhdHVzLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVGFiIHN0YXR1cyBpdGVtcyB3aWxsIGJlIHJlbmRlcmVkIGhlcmUgZHluYW1pY2FsbHkgLS0+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYXAtb3Blbi1hbGwtdGFicy1idG4iIHN0eWxlPSJ3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogOHB4OyBwYWRkaW5nOiA2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyOiAxcHggZGFzaGVkICNmZjk4MDA7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7IGNvbG9yOiAjZmY5ODAwOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDExcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAg8J+agCBN4bufIHThuqV0IGPhuqMgY8OhYyBUYWIgaG/huqF0IMSR4buZbmcKICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxNjsgcGFkZGluZzogOHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTFweDsgbWF4LWhlaWdodDogODBweDsgb3ZlcmZsb3cteTogYXV0bzsgYm9yZGVyOiAxcHggc29saWQgIzIyMjsiIGlkPSJhcC1sb2ctYm94Ij4KICAgICAgICAgICAgICAgICAgICBbSOG7hyB0aOG7kW5nXSDEkGFuZyB04bqjaS4uLgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIA==',
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
        'W0jhu4cgdGjhu5FuZ10gTmjhuq1uIGzhu4duaCBsw6BtIG3hu5tpIHR14bqnbiB04buxIG5oxrBuZyB0YWIgxJFhbmcgYuG6rW4geOG7rSBsw70gdGFzay4gSG/Do24gdmnhu4djIMSRw7NuZyB0YWIuLi4=',
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
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'c2hvcGVlX3BjX3ByaW9yaXR5',
        'MQ==',
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
_0xstr(0);
if (typeof GM_getValue === _0xstr(1)) {
globalThis.GM_getValue = (key, def) => {
const _0x00f2 = localStorage.getItem(key);
return _0x00f2 !== null ? _0x00f2 : def;
};
}
if (typeof GM_setValue === _0xstr(2)) {
globalThis.GM_setValue = (key, _0x00f2) => {
localStorage.setItem(key, _0x00f2);
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
window.addEventListener(_0xstr(10), function _0x0059(e) {
if (e.data && e.data.type === _0xstr(11) && e.data.reqId === reqId) {
window.removeEventListener(_0xstr(12), _0x0059);
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
function _0x0055() {
const hash = window.location.hash || _0xstr(29);
const _0x00ac = hash.split(_0xstr(30))[0];
for (const [type, _0x001e] of Object.entries(_0x000a)) {
if (_0x00ac.includes(_0x001e.hashKey)) {
return type;
}
}
return null;
}
let _0x00d7 = sessionStorage.getItem(_0xstr(31));
if (!_0x00d7) {
_0x00d7 = _0xstr(32) + Math.random().toString(36).substring(2, 10) + _0xstr(33) + Date.now();
sessionStorage.setItem(_0xstr(34), _0x00d7);
}
const _0x0066 = _0x0055();
if (_0x0066) {
localStorage.setItem(_0xstr(35) + _0x0066, Date.now().toString());
localStorage.setItem(_0xstr(36) + _0x0066, _0x00d7);
}
function _0x0058() {
const _0x0033 = _0x0055();
if (_0x0033) {
const _0x00c1 = localStorage.getItem(_0xstr(37) + _0x0033);
if (_0x00c1 === _0x00d7) {
localStorage.setItem(_0xstr(38) + _0x0033, _0xstr(39));
localStorage.removeItem(_0xstr(40) + _0x0033);
}
}
}
window.addEventListener(_0xstr(41), _0x0058);
window.addEventListener(_0xstr(42), _0x0058);
function init() {
const _0x0073 = window.self !== window.top || window.location.href.includes(_0xstr(43)) || window.location.href.includes(_0xstr(44));
if (_0x0073) {
return;
}
const _0x0000 = _0xstr(45);
let _0x0014 = localStorage.getItem(_0xstr(46)) || GM_getValue(_0xstr(47), _0x0000);
let _0x00af = localStorage.getItem(_0xstr(48)) || GM_getValue(_0xstr(49), _0xstr(50));
let _0x00b0 = localStorage.getItem(_0xstr(51)) || GM_getValue(_0xstr(52), _0xstr(53));
let _0x0078 = localStorage.getItem(_0xstr(54)) === _0xstr(55);
let _0x0074 = false;
let _0x0076 = false;
let _0x0077 = false;
let _0x0075 = false;
let _0x0083 = _0xstr(56);
let _0x0085 = 0;
let _0x0091 = _0xstr(57);
let _0x008d = 0;
let _0x0094 = new Set();
let _0x008f = 0;
let _0x008a = 0;
let _0x0086 = 0;
let _0x0089 = 0;
let _0x0084 = 0;
const _0x0009 = 30000;
let _0x008e = Date.now();
const _0x0001 = 2700000;
let _0x008c = 0;
let _0x0081 = 0;
let _0x0090 = 0;
let _0x0082 = 0;
function _0x006e(myType) {
const now = Date.now();
const _0x00b4 = [_0xstr(58), _0xstr(59), _0xstr(60)];
const _0x009e = _0x00b4.indexOf(myType);
if (_0x009e === -1) return false;
const _0x000b = 12000;
for (let i = 0; i < _0x009e; i++) {
const type = _0x00b4[i];
const _0x008b = parseInt(localStorage.getItem(_0xstr(61) + type) || _0xstr(62));
const _0x007a = _0x008b > 0 && (now - _0x008b) < _0x000b;
const _0x0072 = localStorage.getItem(_0xstr(63) + type) === _0xstr(64);
if (_0x007a && _0x0072) {
return true;
}
}
return false;
}
function _0x000c(tabType) {
const now = Date.now();
if (now - _0x008c < 2000) {
return false;
}
if (_0x006e(tabType)) {
return false;
}
const _0x0095 = _0xstr(65);
const _0x00e8 = _0xstr(66);
const _0x00df = _0xstr(67);
const _0x0030 = localStorage.getItem(_0x00e8);
const _0x0096 = parseInt(localStorage.getItem(_0x00df) || _0xstr(68));
const _0x00b4 = [_0xstr(69), _0xstr(70), _0xstr(71)];
const _0x009e = _0x00b4.indexOf(tabType);
const _0x0065 = _0x0030 ? _0x00b4.indexOf(_0x0030) : 99;
if (!_0x0030 || (now - _0x0096) > 5000 || _0x0030 === tabType || (_0x009e !== -1 && _0x009e < _0x0065)) {
localStorage.setItem(_0x0095, _0xstr(72));
localStorage.setItem(_0x00e8, tabType);
localStorage.setItem(_0x00df, now.toString());
return true;
}
return false;
}
function _0x00c3(tabType) {
const _0x0095 = _0xstr(73);
const _0x00e8 = _0xstr(74);
const _0x00df = _0xstr(75);
const _0x0030 = localStorage.getItem(_0x00e8);
if (_0x0030 === tabType) {
localStorage.removeItem(_0x0095);
localStorage.removeItem(_0x00e8);
localStorage.removeItem(_0x00df);
_0x008c = Date.now();
}
}
function _0x00e9(tabType) {
const _0x00e8 = _0xstr(76);
const _0x00df = _0xstr(77);
const _0x0030 = localStorage.getItem(_0x00e8);
if (_0x0030 === tabType) {
localStorage.setItem(_0x00df, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(78), function() {
let _0x00a1 = prompt(_0xstr(79), _0x0014);
if (_0x00a1) {
_0x0014 = _0x00a1.trim();
localStorage.setItem(_0xstr(80), _0x0014);
GM_setValue(_0xstr(81), _0x0014);
alert(_0xstr(82));
window.location.reload();
}
});
const launcher = document.createElement(_0xstr(83));
launcher.id = _0xstr(84);
launcher.innerText = _0xstr(85);
launcher.style = _0xstr(86);
document.body.appendChild(launcher);
const panel = document.createElement(_0xstr(87));
panel.id = _0xstr(88);
panel.style = _0xstr(89);
let _0x0015 = null;
function _0x00ce() {
_0x00d4();
_0x0015 = setTimeout(() => {
_0x002c();
}, 20000);
}
function _0x00d4() {
if (_0x0015) {
clearTimeout(_0x0015);
_0x0015 = null;
}
}
function _0x002c() {
panel.style.display = _0xstr(90);
launcher.style.display = _0xstr(91);
_0x00d4();
}
function _0x0049() {
panel.style.display = _0xstr(92);
launcher.style.display = _0xstr(93);
_0x00ce();
}
panel.innerHTML = _0xstr(94) + (_0x0014) + _0xstr(95) + (_0x00af) + _0xstr(96) + (_0x00b0 === _0xstr(97) ? _0xstr(98) : _0xstr(99)) + _0xstr(100) + (_0x00b0 === _0xstr(101) ? _0xstr(102) : _0xstr(103)) + _0xstr(104) + (_0x00b0 === _0xstr(105) ? _0xstr(106) : _0xstr(107)) + _0xstr(108);
document.body.appendChild(panel);
const _0x00e4 = document.createElement(_0xstr(109));
_0x00e4.innerHTML = _0xstr(110);
document.head.appendChild(_0x00e4);
function _0x0024() {
let _0x0063 = false;
const _0x003e = document.querySelectorAll(_0xstr(111));
for (let i = 0; i < _0x003e.length; i++) {
const el = _0x003e[i];
if (el.id === _0xstr(112) || el.id === _0xstr(113)) continue;
const style = window.getComputedStyle(el);
if (style.display !== _0xstr(114) && style.visibility !== _0xstr(115) && style.opacity !== _0xstr(116) && el.offsetHeight > 0) {
_0x0063 = true;
break;
}
}
if (_0x0063) {
panel.style.opacity = _0xstr(117);
panel.style.pointerEvents = _0xstr(118);
} else {
if (panel.style.display !== _0xstr(119)) {
panel.style.opacity = _0xstr(120);
panel.style.pointerEvents = _0xstr(121);
}
}
if (launcher.style.display !== _0xstr(122)) {
launcher.style.opacity = _0xstr(123);
launcher.style.pointerEvents = _0xstr(124);
}
}
setInterval(_0x0024, 300);
const _0x0097 = document.getElementById(_0xstr(125));
const badge = document.getElementById(_0xstr(126));
const _0x00e2 = document.getElementById(_0xstr(127));
const _0x00ef = document.getElementById(_0xstr(128));
const _0x00ad = document.getElementById(_0xstr(129));
const _0x00ca = document.getElementById(_0xstr(130));
const _0x002a = document.getElementById(_0xstr(131));
const _0x002f = document.getElementById(_0xstr(132));
const _0x00f0 = document.getElementById(_0xstr(133));
const _0x00ee = document.getElementById(_0xstr(134));
const _0x0041 = document.getElementById(_0xstr(135));
const _0x00f1 = document.getElementById(_0xstr(136));
const _0x00d9 = document.getElementById(_0xstr(137));
const _0x00a8 = document.getElementById(_0xstr(138));
function log(message) {
const _0x00de = new Date().toLocaleTimeString();
_0x0097.innerHTML = _0xstr(139) + (_0x00de) + _0xstr(140) + (message) + _0xstr(141) + _0x0097.innerHTML;
const _0x0093 = _0x0097.innerHTML.split(_0xstr(142));
if (_0x0093.length > 20) _0x0097.innerHTML = _0x0093.slice(0, 20).join(_0xstr(143));
}
function _0x00ec() {
if (_0x0078) {
badge.innerText = _0xstr(144);
badge.style.backgroundColor = _0xstr(145);
_0x00e2.innerText = _0xstr(146);
_0x00e2.style.backgroundColor = _0xstr(147);
} else {
badge.innerText = _0xstr(148);
badge.style.backgroundColor = _0xstr(149);
_0x00e2.innerText = _0xstr(150);
_0x00e2.style.backgroundColor = _0xstr(151);
}
}
function _0x00ed() {
if (_0x0014 && _0x0014 !== _0x0000) {
_0x00ee.style.display = _0xstr(152);
_0x00f0.style.display = _0xstr(153);
_0x00f1.innerText = _0xstr(154);
} else {
_0x00ee.style.display = _0xstr(155);
_0x00f0.style.display = _0xstr(156);
}
}
function _0x00ea() {
const _0x0033 = _0x0055();
if (_0x0033) {
localStorage.setItem(_0xstr(157) + _0x0033, Date.now().toString());
localStorage.setItem(_0xstr(158) + _0x0033, _0x00d7);
}
}
const _0x000b = 15000;
const _0x0003 = 10000;
const _0x0004 = 20000;
function _0x00eb() {
_0x00d9.innerHTML = _0xstr(159);
const now = Date.now();
for (const [type, _0x001e] of Object.entries(_0x000a)) {
const _0x008b = parseInt(localStorage.getItem(_0xstr(160) + type) || _0xstr(161));
const _0x007a = _0x008b > 0 && (now - _0x008b) < _0x000b;
const _0x007d = document.createElement(_0xstr(162));
_0x007d.style = _0xstr(163) + (_0x007a ? _0xstr(164) : _0xstr(165)) + _0xstr(166) + (_0x007a ? _0xstr(167) : _0xstr(168)) + _0xstr(169);
_0x007d.innerHTML = _0xstr(170) + (_0x007a ? _0xstr(171) : _0xstr(172)) + _0xstr(173) + (_0x001e.name) + _0xstr(174) + (_0x007a ? _0xstr(175) : _0xstr(176)) + _0xstr(177) + (_0x007a ? _0xstr(178) : _0xstr(179)) + _0xstr(180);
_0x007d.style.cursor = _0xstr(181);
_0x007d.title = _0xstr(182) + (_0x001e.name) + _0xstr(183);
_0x007d.addEventListener(_0xstr(184), () => {
if (typeof GM_openInTab !== _0xstr(185)) {
GM_openInTab(_0x001e.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001e.url, _0xstr(186));
}
});
_0x00d9.appendChild(_0x007d);
}
}
const _0x0002 = [_0xstr(187), _0xstr(188), _0xstr(189), _0xstr(190)];
const _0x0006 = 45000;
function _0x00a9() {
_0x0067(_0xstr(191));
}
function _0x0067(_0x00e5) {
const now = Date.now();
const _0x0048 = localStorage.getItem(_0xstr(192));
if (_0x0048) {
if (_0x00e5 === _0xstr(193)) {
log(_0xstr(194));
_0x0029();
} else {
const _0x00d2 = parseInt(localStorage.getItem(_0xstr(195)) || _0xstr(196));
if ((now - _0x00d2) < 300000) {
return;
}
log(_0xstr(197));
_0x0029();
}
}
const _0x00da = [];
for (const type of _0x0002) {
if (_0x00e5 === _0xstr(198)) {
localStorage.setItem(_0xstr(199) + type, _0xstr(200));
_0x00da.push(type);
} else {
const _0x008b = parseInt(localStorage.getItem(_0xstr(201) + type) || _0xstr(202));
const _0x006c = _0x008b > 0 && (now - _0x008b) < _0x000b;
if (!_0x006c) {
_0x00da.push(type);
}
}
}
if (_0x00da.length === 0) {
if (_0x00e5 === _0xstr(203)) log(_0xstr(204));
return;
}
localStorage.removeItem(_0xstr(205));
log(_0xstr(206) + (_0x00da.length) + _0xstr(207) + (_0x00da.map(t => _0x000a[t]?.name || t).join(_0xstr(208))) + _0xstr(209));
localStorage.setItem(_0xstr(210), JSON.stringify(_0x00da));
localStorage.setItem(_0xstr(211), _0x00da[0]);
localStorage.setItem(_0xstr(212), _0xstr(213));
localStorage.setItem(_0xstr(214), now.toString());
localStorage.setItem(_0xstr(215), now.toString());
const _0x004f = _0x00da[0];
const _0x001e = _0x000a[_0x004f];
localStorage.setItem(_0xstr(216) + _0x004f, now.toString());
const _0x009f = _0x0055();
if (_0x009f === _0x004f) {
log(_0xstr(217) + (_0x001e.name) + _0xstr(218));
window.location.reload();
} else {
log(_0xstr(219) + (_0x001e.name) + _0xstr(220));
if (typeof GM_openInTab !== _0xstr(221)) {
GM_openInTab(_0x001e.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001e.url, _0xstr(222));
}
}
}
function _0x0029() {
localStorage.removeItem(_0xstr(223));
localStorage.removeItem(_0xstr(224));
localStorage.removeItem(_0xstr(225));
localStorage.removeItem(_0xstr(226));
localStorage.removeItem(_0xstr(227));
localStorage.removeItem(_0xstr(228));
}
function _0x00aa() {
let _0x00bc;
try {
_0x00bc = JSON.parse(localStorage.getItem(_0xstr(229)) || _0xstr(230));
} catch(e) {
_0x0029();
return;
}
_0x00bc.shift();
if (_0x00bc.length > 0) {
const _0x00a2 = _0x00bc[0];
const _0x001e = _0x000a[_0x00a2];
const now = Date.now();
localStorage.setItem(_0xstr(231), JSON.stringify(_0x00bc));
localStorage.setItem(_0xstr(232), _0x00a2);
localStorage.setItem(_0xstr(233), _0xstr(234));
localStorage.setItem(_0xstr(235), now.toString());
localStorage.setItem(_0xstr(236) + _0x00a2, now.toString());
localStorage.removeItem(_0xstr(237));
const _0x009f = _0x0055();
if (_0x009f === _0x00a2) {
log(_0xstr(238) + (_0x001e.name) + _0xstr(239));
window.location.reload();
} else {
log(_0xstr(240) + (_0x001e.name) + _0xstr(241));
if (typeof GM_openInTab !== _0xstr(242)) {
GM_openInTab(_0x001e.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001e.url, _0xstr(243));
}
}
} else {
_0x0029();
log(_0xstr(244));
}
}
function _0x0057() {
const _0x00bd = localStorage.getItem(_0xstr(245));
if (!_0x00bd) return;
let _0x00bc;
try {
_0x00bc = JSON.parse(_0x00bd);
} catch(e) {
_0x0029();
return;
}
if (!Array.isArray(_0x00bc) || _0x00bc.length === 0) {
_0x0029();
return;
}
const _0x0032 = localStorage.getItem(_0xstr(246));
const _0x009f = _0x0055();
if (!_0x009f || _0x009f !== _0x0032) return;
const _0x00b1 = localStorage.getItem(_0xstr(247));
if (_0x00b1 !== _0xstr(248)) return;
const _0x00d8 = parseInt(localStorage.getItem(_0xstr(249)) || _0xstr(250));
const now = Date.now();
if (_0x0071()) {
log(_0xstr(251) + (_0x000a[_0x009f]?.name || _0x009f) + _0xstr(252));
_0x008e = Date.now();
_0x00aa();
return;
}
if ((now - _0x00d8) > _0x0006) {
const _0x00c7 = parseInt(localStorage.getItem(_0xstr(253)) || _0xstr(254));
if (_0x00c7 < 1) {
log(_0xstr(255) + (_0x000a[_0x009f]?.name || _0x009f) + _0xstr(256));
localStorage.setItem(_0xstr(257), _0xstr(258));
localStorage.setItem(_0xstr(259), now.toString());
window.location.reload();
} else {
log(_0xstr(260) + (_0x000a[_0x009f]?.name || _0x009f) + _0xstr(261));
localStorage.removeItem(_0xstr(262));
_0x00aa();
}
}
}
const _0x0005 = 20000;
function _0x0016() {
if (!_0x0078) return;
if (localStorage.getItem(_0xstr(263)) || localStorage.getItem(_0xstr(264))) return;
const now = Date.now();
let _0x005b = false;
let _0x005e = false;
let _0x0053 = _0xstr(265);
for (const [type, _0x001e] of Object.entries(_0x000a)) {
const _0x008b = parseInt(localStorage.getItem(_0xstr(266) + type) || _0xstr(267));
const _0x00c2 = localStorage.getItem(_0xstr(268) + type);
const _0x007a = _0x008b > 0 && (now - _0x008b) < _0x000b;
if (!_0x007a) {
const _0x0087 = parseInt(localStorage.getItem(_0xstr(269) + type) || _0xstr(270));
const _0x0088 = now - _0x0087;
if (_0x00c2 && _0x0088 > 60000) {
_0x005e = true;
_0x0053 = type;
break;
}
if (!_0x00c2) {
if (_0x008b === 0 && _0x0088 > _0x0003) {
_0x005b = true;
break;
}
if (_0x008b > 0 && (now - _0x008b) > _0x0005 && _0x0088 > _0x0005) {
_0x005b = true;
break;
}
}
}
}
if (_0x005e && _0x0053) {
const _0x001e = _0x000a[_0x0053];
log(_0xstr(271) + (_0x001e.name) + _0xstr(272));
localStorage.setItem(_0xstr(273) + _0x0053, now.toString());
if (typeof GM_openInTab !== _0xstr(274)) {
GM_openInTab(_0x001e.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001e.url, _0xstr(275));
}
return;
}
if (_0x005b) {
log(_0xstr(276));
_0x0067(_0xstr(277));
}
}
let wakeLock = null;
let audioCtx = null;
async function _0x00c5() {
if (!(_0xstr(278) in navigator)) {
log(_0xstr(279));
return;
}
try {
wakeLock = await navigator.wakeLock.request(_0xstr(280));
log(_0xstr(281));
} catch (err) {
console.log(_0xstr(282), err.message);
}
}
function _0x00c4() {
if (wakeLock) {
wakeLock.release().then(() => {
wakeLock = null;
log(_0xstr(283));
});
}
}
let _0x0062 = false;
function _0x00d1() {
}
const _0x0054 = [_0xstr(284), _0xstr(285), _0xstr(286), _0xstr(287), _0xstr(288)];
const _0x0056 = () => {
_0x0062 = true;
_0x0054.forEach(e => window.removeEventListener(e, _0x0056, true));
if (_0x0078) {
_0x00d1();
_0x0021();
}
};
_0x0054.forEach(e => window.addEventListener(e, _0x0056, { once: true, capture: true, passive: true }));
function _0x0021() {
}
function _0x00d5() {
}
function _0x0043() {
_0x00c5();
_0x00d1();
}
function _0x003f() {
_0x00c4();
_0x00d5();
}
document.addEventListener(_0xstr(289), () => {
if (document.visibilityState === _0xstr(290) && _0x0078) {
_0x00c5();
}
});
_0x00a8.addEventListener(_0xstr(291), _0x00a9);
_0x00ec();
_0x00ed();
if (_0x0078) {
_0x0043();
}
_0x0041.addEventListener(_0xstr(292), () => {
_0x00ee.style.display = _0xstr(293);
_0x00f0.style.display = _0xstr(294);
_0x00ef.focus();
});
_0x00ca.addEventListener(_0xstr(295), async () => {
const _0x006a = _0x00ef.value.trim();
const _0x00ae = _0x00ad.value.trim() || _0xstr(296);
const _0x00b5 = document.getElementById(_0xstr(297));
const _0x00b6 = _0x00b5 ? _0x00b5.value : _0xstr(298);
const _0x00a6 = localStorage.getItem(_0xstr(299)) || _0xstr(300);
if (_0x006a && !_0x006a.includes(_0xstr(301))) {
if (_0x006a !== _0x00a6 && _0x00a6 !== _0xstr(302)) {
const pass = prompt(_0xstr(303));
if (pass !== _0xstr(304)) {
alert(_0xstr(305));
return;
}
}
_0x0014 = _0x006a;
_0x00af = _0x00ae;
_0x00b0 = _0x00b6;
localStorage.setItem(_0xstr(306), _0x0014);
localStorage.setItem(_0xstr(307), _0x00af);
localStorage.setItem(_0xstr(308), _0x00b0);
GM_setValue(_0xstr(309), _0x0014);
GM_setValue(_0xstr(310), _0x00af);
GM_setValue(_0xstr(311), _0x00b0);
log(_0xstr(312) + (_0x00af) + _0xstr(313) + (_0x00b0) + _0xstr(314));
_0x00ed();
if (_0x006a !== _0x00a6 && _0x00a6 !== _0xstr(315)) {
log(_0xstr(316));
try {
await _0x001b(_0xstr(317), _0xstr(318), { newUrl: _0x0014 });
log(_0xstr(319));
} catch (e) {
log(_0xstr(320) + (e.message) + _0xstr(321));
}
}
alert(_0xstr(322));
} else {
alert(_0xstr(323));
}
});
function _0x00e3() {
if (!_0x0014 || _0x0014.includes(_0xstr(324))) {
alert(_0xstr(325));
return;
}
_0x0078 = !_0x0078;
localStorage.setItem(_0xstr(326), _0x0078 ? _0xstr(327) : _0xstr(328));
_0x00ec();
log(_0x0078 ? _0xstr(329) : _0xstr(330));
if (_0x0078) {
_0x0043();
_0x00a9();
} else {
_0x003f();
}
}
_0x00e2.addEventListener(_0xstr(331), _0x00e3);
badge.addEventListener(_0xstr(332), _0x00e3);
_0x002a.addEventListener(_0xstr(333), _0x002c);
launcher.addEventListener(_0xstr(334), _0x0049);
panel.addEventListener(_0xstr(335), _0x00d4);
panel.addEventListener(_0xstr(336), _0x00d4);
panel.addEventListener(_0xstr(337), _0x00d4);
panel.addEventListener(_0xstr(338), _0x00d4);
panel.addEventListener(_0xstr(339), _0x00ce);
function _0x0036(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function _0x0037(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function _0x00cd(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const _0x00a0 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(340))?.set;
if (_0x00a0) {
_0x00a0.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(341), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(342), { bubbles: true }));
await _0x0036(300);
[_0xstr(343), _0xstr(344), _0xstr(345)].forEach(name => {
const ev = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(346), code: _0xstr(347), keyCode: 13, which: 13
});
Object.defineProperty(ev, _0xstr(348), { value: 13 });
Object.defineProperty(ev, _0xstr(349), { value: 13 });
inputEl.dispatchEvent(ev);
});
}
function _0x001b(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let _0x0028 = (_0x0014 || _0xstr(350)).trim();
if (!_0x0028 || _0x0028.includes(_0xstr(351))) {
reject(new Error(_0xstr(352)));
return;
}
let _0x00dd = _0xstr(353);
if (method === _0xstr(354)) {
_0x00dd = _0xstr(355) + (_0x0028) + _0xstr(356) + (urlOrAction) + _0xstr(357) + (encodeURIComponent((_0x00af || _0xstr(358)).trim())) + _0xstr(359) + (encodeURIComponent((_0x00b0 || _0xstr(360)).trim())) + _0xstr(361);
} else {
_0x00dd = _0x0028;
}
let isSettled = false;
const timer = setTimeout(() => {
if (!isSettled) {
isSettled = true;
reject(new Error(_0xstr(362) + (timeoutMs/1000) + _0xstr(363) + (urlOrAction) + _0xstr(364) + (attempts) + _0xstr(365)));
}
}, timeoutMs);
let options = {
method: method,
url: _0x00dd,
timeout: timeoutMs,
onload: function(response) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
try {
const res = JSON.parse(response.responseText);
if (res.activeWebappUrl && res.activeWebappUrl.trim() !== _0xstr(366) && res.activeWebappUrl !== _0x0014) {
_0x0014 = res.activeWebappUrl;
localStorage.setItem(_0xstr(367), _0x0014);
GM_setValue(_0xstr(368), _0x0014);
log(_0xstr(369) + (_0x0014) + _0xstr(370));
if (typeof chrome !== _0xstr(371) && chrome.runtime && chrome.runtime.sendMessage) {
chrome.runtime.sendMessage({
action: _0xstr(372),
apiUrl: _0x0014
}, () => {
const err = chrome.runtime.lastError;
});
}
}
resolve(res);
} catch (e) {
reject(new Error(_0xstr(373) + (e.message) + _0xstr(374) + (response.responseText.substring(0, 120)) + _0xstr(375)));
}
},
onerror: function(err) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(376) + (_0x00dd) + _0xstr(377)));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(378) + (urlOrAction) + _0xstr(379)));
}
};
if (method !== _0xstr(380)) {
options.headers = { [_0xstr(381)]: _0xstr(382) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (_0x00af || _0xstr(383)).trim(), priority: (_0x00b0 || _0xstr(384)).trim() }, data));
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
console.log(_0xstr(385) + (urlOrAction) + _0xstr(386) + (err.message) + _0xstr(387));
setTimeout(tryCall, 2000);
} else {
reject(err);
}
});
}
tryCall();
});
}
function _0x004a(driverStr) {
if (!driverStr) return _0xstr(388);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function _0x0044() {
if (document.hidden || !document.hasFocus()) {
log(_0xstr(389));
window.postMessage({ type: _0xstr(390), tabInstanceId: _0x00d7 }, _0xstr(391));
for (let i = 0; i < 40; i++) {
await _0x0036(100);
if (!document.hidden && document.hasFocus()) {
await _0x0036(500);
return true;
}
}
return false;
}
return true;
}
async function _0x00d0() {
if (!_0x0078 || _0x0074) return;
const hash = window.location.hash || _0xstr(392);
if (!hash.includes(_0xstr(393))) return;
if (!_0x000c(_0xstr(394))) {
return;
}
try {
_0x0074 = true;
_0x008a = Date.now();
localStorage.setItem(_0xstr(395), _0xstr(396));
_0x00e9(_0xstr(397));
const data = await _0x001b(_0xstr(398), _0xstr(399));
_0x008e = Date.now();
let _0x002b = [];
if (data.status === _0xstr(400)) {
if (data.code) {
_0x002b = data.code.split(/\s+/).map(c => c.trim().toUpperCase()).filter(c => c.length > 0);
} else if (data.codes && Array.isArray(data.codes)) {
_0x002b = data.codes.map(c => c.trim().toUpperCase());
}
}
if (_0x002b.length > 0) {
log(_0xstr(401) + (_0x002b.length) + _0xstr(402));
const _0x00c6 = await _0x0047(_0x002b);
if (_0x00c6 && _0x00c6.success) {
_0x008e = Date.now();
const _0x004b = _0x00c6.invalidCodes || [];
const _0x00d6 = _0x002b.filter(c => !_0x004b.some(f => c === f || c.includes(f)));
log(_0xstr(403) + (_0x00d6.length) + _0xstr(404) + (_0x004b.length) + _0xstr(405));
for (const code of _0x00d6) {
_0x001b(_0xstr(406), _0xstr(407), { code: code, status: _0xstr(408) })
.then(() => log(_0xstr(409) + (code) + _0xstr(410)))
.catch(e => log(_0xstr(411) + (code) + _0xstr(412) + (e.message) + _0xstr(413)));
}
for (const code of _0x004b) {
_0x001b(_0xstr(414), _0xstr(415), { code: code, status: _0xstr(416) })
.then(() => log(_0xstr(417) + (code) + _0xstr(418)))
.catch(e => log(_0xstr(419) + (code) + _0xstr(420) + (e.message) + _0xstr(421)));
}
} else {
log(_0xstr(422));
const _0x004c = (_0x00c6 && _0x00c6.invalidCodes) ? _0x00c6.invalidCodes : _0x002b;
for (const code of _0x004c) {
_0x001b(_0xstr(423), _0xstr(424), { code: code, status: _0xstr(425) })
.then(() => log(_0xstr(426) + (code) + _0xstr(427)))
.catch(e => log(_0xstr(428) + (code) + _0xstr(429) + (e.message) + _0xstr(430)));
}
}
}
} catch (error) {
log(_0xstr(431) + (error.message) + _0xstr(432));
} finally {
_0x0074 = false;
localStorage.removeItem(_0xstr(433));
_0x00c3(_0xstr(434));
}
}
async function _0x0047(codes) {
await _0x0044();
let textarea = null;
for (let i = 0; i < 20; i++) {
textarea = document.querySelector(_0xstr(435)) || document.querySelector(_0xstr(436));
if (textarea) break;
await _0x0036(100);
}
if (!textarea) {
log(_0xstr(437));
return { success: false, invalidCodes: codes };
}
const _0x002d = codes.join(_0xstr(438));
textarea.value = _0x002d;
textarea.dispatchEvent(new Event(_0xstr(439), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(440), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(441), false, _0x002d);
textarea.dispatchEvent(new Event(_0xstr(442), { bubbles: true }));
} catch (e) {}
await _0x0037(300, 500);
const _0x002e = Array.from(document.querySelectorAll(_0xstr(443))).find(btn => {
const _0x00e7 = btn.innerText || btn.textContent || _0xstr(444);
return _0x00e7.trim().toLowerCase() === _0xstr(445);
});
if (!_0x002e) return { success: false, invalidCodes: codes };
_0x002e.click();
let _0x0070 = false;
let _0x005d = false;
const invalidCodes = [];
const _0x00f3 = codes.filter(c => c.startsWith(_0xstr(446)) || c.startsWith(_0xstr(447)) || c.startsWith(_0xstr(448)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let i = 0; i < 40; i++) {
await _0x0036(50);
const _0x0010 = Array.from(document.querySelectorAll(_0xstr(449)));
const _0x0052 = _0x0010.find(el => {
const _0x00e7 = el.textContent.trim().toUpperCase();
return _0x00f3.some(vc => _0x00e7 === vc || _0x00e7.includes(vc));
});
if (_0x0052) {
_0x0070 = true;
}
const _0x003e = document.querySelectorAll(_0xstr(450));
for (const _0x0039 of _0x003e) {
if (_0x0039.offsetWidth > 0 || _0x0039.offsetHeight > 0) {
const _0x003d = (_0x0039.innerText || _0x0039.textContent || _0xstr(451));
if (_0x003d.toLowerCase().includes(_0xstr(452)) ||
_0x003d.toLowerCase().includes(_0xstr(453)) ||
_0x003d.toLowerCase().includes(_0xstr(454)) ||
_0x003d.toLowerCase().includes(_0xstr(455)) ||
_0x003d.toLowerCase().includes(_0xstr(456))) {
_0x005d = true;
const _0x00a4 = Array.from(_0x0039.querySelectorAll(_0xstr(457))).find(btn => {
const _0x00e7 = (btn.innerText || btn.textContent || _0xstr(458)).trim().toLowerCase();
return _0x00e7 === _0xstr(459) || _0x00e7 === _0xstr(460) || _0x00e7 === _0xstr(461) || _0x00e7 === _0xstr(462) || _0x00e7 === _0xstr(463) || _0x00e7.includes(_0xstr(464));
});
if (_0x00a4) {
const _0x00a5 = 800 + Math.random() * 200;
log(_0xstr(465) + ((_0x00a5/1000).toFixed(2)) + _0xstr(466));
await _0x0036(_0x00a5);
_0x00a4.click();
log(_0xstr(467));
await _0x0036(500);
}
const _0x0093 = _0x003d.split(_0xstr(468)).map(l => l.trim().toUpperCase());
for (const _0x0092 of _0x0093) {
const _0x009b = _0x0092.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (_0x009b) {
for (const match of _0x009b) {
if (!match.includes(_0xstr(469)) && !match.includes(_0xstr(470)) && !match.includes(_0xstr(471))) {
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
if (_0x0070 && !_0x005d) {
break;
}
if (_0x005d) break;
}
if (_0x005d && !_0x0070) {
return { success: false, invalidCodes: codes };
}
if (!_0x0070) {
log(_0xstr(472));
return { success: false, invalidCodes: codes };
}
const _0x00b2 = Array.from(document.querySelectorAll(_0xstr(473))).find(el => {
const _0x00e7 = el.innerText || el.textContent || _0xstr(474);
return _0x00e7.trim().toLowerCase() === _0xstr(475);
});
if (!_0x00b2) return { success: false, invalidCodes: codes };
await _0x0037(400, 500);
_0x00b2.click();
let _0x003c = null;
for (let i = 0; i < 40; i++) {
await _0x0036(50);
const _0x000f = Array.from(document.querySelectorAll(_0xstr(476))).filter(btn => {
const _0x00e7 = btn.innerText || btn.textContent || _0xstr(477);
return _0x00e7.trim().toLowerCase() === _0xstr(478);
});
_0x003c = _0x000f.find(btn => {
let parent = btn.parentElement;
let _0x0038 = 0;
while (parent && _0x0038 < 4) {
const textContent = (parent.innerText || parent.textContent || _0xstr(479)).toLowerCase();
if (textContent.includes(_0xstr(480)) || textContent.includes(_0xstr(481)) || textContent.includes(_0xstr(482))) {
return true;
}
parent = parent.parentElement;
_0x0038++;
}
return false;
});
if (_0x003c) break;
}
if (_0x003c) {
await _0x0036(300);
_0x003c.click();
log(_0xstr(483));
await _0x0036(1000);
} else {
log(_0xstr(484));
await _0x0036(500);
}
return { success: true, invalidCodes: invalidCodes };
}
async function _0x00b8() {
if (!_0x0078 || _0x0076) return;
_0x0076 = true;
_0x0086 = Date.now();
_0x008e = Date.now();
log(_0xstr(485));
try {
const now = Date.now();
if (now - _0x008d > 2000) {
let _0x00cb = Array.from(document.querySelectorAll(_0xstr(486))).find(btn => {
const text = btn.innerText.trim();
return text === _0xstr(487) || text === _0xstr(488);
});
if (_0x00cb) {
_0x00cb.click();
_0x008d = now;
await _0x0036(300);
}
}
if (_0x0094.size === 0 || (now - _0x008f) > 60000) {
try {
const res = await _0x001b(_0xstr(489), _0xstr(490));
if (res.status === _0xstr(491) && Array.isArray(res.data)) {
_0x0094 = new Set(res.data.map(to => to.toLowerCase()));
_0x008f = now;
log(_0xstr(492) + (_0x0094.size) + _0xstr(493));
}
} catch (e) {
log(_0xstr(494) + (e.message) + _0xstr(495));
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(496)));
let _0x00e0 = -1;
let _0x00a7 = -1;
let _0x00ba = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(497)) || text.includes(_0xstr(498)) || text.includes(_0xstr(499)) || text.includes(_0xstr(500))) {
_0x00e0 = index;
} else if (text.includes(_0xstr(501)) || text.includes(_0xstr(502)) || text.includes(_0xstr(503)) || text.includes(_0xstr(504))) {
_0x00a7 = index;
} else if (text.includes(_0xstr(505)) || text.includes(_0xstr(506)) || text.includes(_0xstr(507)) || text.includes(_0xstr(508))) {
_0x00ba = index;
}
});
const _0x00c9 = document.querySelectorAll(_0xstr(509));
for (let _0x00c8 of _0x00c9) {
const _0x001d = _0x00c8.querySelectorAll(_0xstr(510));
if (_0x001d.length > 0) {
let toNum = _0xstr(511);
let _0x00ab = _0xstr(512);
let _0x00bb = -1;
if (_0x00e0 !== -1 && _0x001d[_0x00e0]) toNum = _0x001d[_0x00e0].innerText.trim();
if (_0x00a7 !== -1 && _0x001d[_0x00a7]) _0x00ab = _0x001d[_0x00a7].innerText.trim();
if (_0x00ba !== -1 && _0x001d[_0x00ba]) {
const _0x00b9 = parseInt(_0x001d[_0x00ba].innerText.trim(), 10);
if (!isNaN(_0x00b9)) _0x00bb = _0x00b9;
}
if (!toNum) {
_0x001d.forEach(c => {
const _0x00e7 = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/i.test(_0x00e7)) toNum = _0x00e7;
});
}
if (!_0x00ab) {
_0x001d.forEach(c => {
const _0x00e7 = c.innerText.trim();
if (_0x00e7.includes(_0xstr(513))) _0x00ab = _0x00e7;
});
}
if (_0x00bb === -1) {
_0x001d.forEach((c, idx) => {
const _0x00e7 = c.innerText.trim();
if (/^\d+$/.test(_0x00e7) && idx > 0 && idx !== _0x00e0) {
const _0x00b9 = parseInt(_0x00e7, 10);
if (_0x00b9 > 0) _0x00bb = _0x00b9;
}
});
}
if (toNum && _0x00ab && _0x00bb > 0) {
const _0x0079 = _0x00ab.toLowerCase() === _0xstr(514);
if (!_0x0079 && !_0x0094.has(toNum.toLowerCase())) {
_0x0094.add(toNum.toLowerCase());
try {
const _0x000e = await _0x001b(_0xstr(515), _0xstr(516), { toNum: toNum });
if (_0x000e.status === _0xstr(517)) {
log(_0xstr(518) + (toNum) + _0xstr(519) + (_0x00ab) + _0xstr(520) + (_0x00bb) + _0xstr(521));
_0x008e = Date.now();
} else if (_0x000e.status === _0xstr(522)) {
log(_0xstr(523) + (toNum) + _0xstr(524));
} else {
log(_0xstr(525) + (toNum) + _0xstr(526) + (JSON.stringify(_0x000e)) + _0xstr(527));
}
} catch (err) {
_0x0094.delete(toNum.toLowerCase());
log(_0xstr(528) + (toNum) + _0xstr(529) + (err.message) + _0xstr(530));
}
}
}
}
}
} catch (error) {
log(_0xstr(531) + (error.message) + _0xstr(532));
} finally {
_0x0076 = false;
}
}
async function _0x00b7() {
if (!_0x0078 || _0x0077) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(533))) return;
if (!_0x000c(_0xstr(534))) {
return;
}
try {
_0x0077 = true;
_0x0089 = Date.now();
localStorage.setItem(_0xstr(535), _0xstr(536));
_0x00e9(_0xstr(537));
const res = await _0x001b(_0xstr(538), _0xstr(539));
if (res.status === _0xstr(540) && res.toNum) {
const _0x0031 = res.toNum;
log(_0xstr(541) + (_0x0031) + _0xstr(542));
await _0x0044();
let _0x00e1 = null;
const _0x007f = document.querySelectorAll(_0xstr(543));
let _0x00dc = null;
for (let el of _0x007f) {
const text = el.innerText.trim().toLowerCase();
if (text === _0xstr(544) || text === _0xstr(545) || text === _0xstr(546) || text === _0xstr(547)) {
_0x00dc = el;
break;
}
}
if (_0x00dc) {
let parent = _0x00dc.parentElement;
for (let i = 0; i < 3 && parent; i++) {
_0x00e1 = parent.querySelector(_0xstr(548));
if (_0x00e1) break;
parent = parent.parentElement;
}
}
if (!_0x00e1) {
const _0x0012 = document.querySelectorAll(_0xstr(549));
for (let input of _0x0012) {
const placeholder = (input.placeholder || _0xstr(550)).toLowerCase();
if (placeholder.includes(_0xstr(551)) || placeholder.includes(_0xstr(552)) || placeholder.includes(_0xstr(553)) || placeholder.includes(_0xstr(554))) {
_0x00e1 = input;
break;
}
}
}
if (!_0x00e1) {
const _0x0012 = Array.from(document.querySelectorAll(_0xstr(555)));
_0x00e1 = _0x0012.find(input => {
const type = (input.type || _0xstr(556)).toLowerCase();
const _0x007b = type === _0xstr(557) || type === _0xstr(558) || type === _0xstr(559);
const _0x007c = input.style.display !== _0xstr(560) && input.style.visibility !== _0xstr(561);
return _0x007b && _0x007c;
});
}
if (_0x00e1) {
log(_0xstr(562) + (_0x0031) + _0xstr(563));
await _0x00cd(_0x00e1, _0x0031);
await _0x0036(100);
_0x00e9(_0xstr(564));
const _0x00b3 = await _0x00e6(_0x0031);
if (_0x00b3) {
log(_0xstr(565) + (_0x0031) + _0xstr(566));
_0x008e = Date.now();
try {
await _0x001b(_0xstr(567), _0xstr(568), { toNum: _0x0031 });
log(_0xstr(569) + (_0x0031) + _0xstr(570));
} catch (markErr) {
log(_0xstr(571) + (_0x0031) + _0xstr(572) + (markErr.message) + _0xstr(573));
}
} else {
log(_0xstr(574) + (_0x0031) + _0xstr(575));
try {
await _0x001b(_0xstr(576), _0xstr(577), { toNum: _0x0031, status: _0xstr(578) });
} catch (e) {
log(_0xstr(579) + (_0x0031) + _0xstr(580) + (e.message) + _0xstr(581));
}
}
} else {
log(_0xstr(582));
try {
await _0x001b(_0xstr(583), _0xstr(584), { toNum: _0x0031, status: _0xstr(585) });
log(_0xstr(586) + (_0x0031) + _0xstr(587));
} catch (e) {
log(_0xstr(588) + (_0x0031) + _0xstr(589) + (e.message) + _0xstr(590));
}
}
}
} catch (error) {
log(_0xstr(591) + (error.message) + _0xstr(592));
} finally {
_0x0077 = false;
localStorage.removeItem(_0xstr(593));
_0x00c3(_0xstr(594));
}
}
function _0x00e6(_0x0031) {
return new Promise((resolve) => {
let _0x0023 = 0;
let _0x0026 = setInterval(() => {
_0x0023++;
let _0x00b2 = null;
const _0x0018 = document.querySelectorAll(_0xstr(595));
for (let btn of _0x0018) {
const text = btn.innerText.trim();
if (text === _0xstr(596) || text === _0xstr(597) || text === _0xstr(598) || text.includes(_0xstr(599))) {
_0x00b2 = btn;
break;
}
}
if (!_0x00b2) {
const _0x0042 = document.querySelectorAll(_0xstr(600));
for (let el of _0x0042) {
const text = el.innerText.trim();
if (text === _0xstr(601) || text === _0xstr(602) || text === _0xstr(603) || text.includes(_0xstr(604))) {
_0x00b2 = el.closest(_0xstr(605)) || el;
break;
}
}
}
if (_0x00b2 && !_0x00b2.disabled && !_0x00b2.classList.contains(_0xstr(606))) {
clearInterval(_0x0026);
log(_0xstr(607));
_0x00b2.click();
setTimeout(() => {
log(_0xstr(608) + (_0x0031) + _0xstr(609));
resolve(true);
}, 800);
} else if (_0x0023 > 20) {
clearInterval(_0x0026);
resolve(false);
}
}, 150);
});
}
async function _0x00cf() {
if (!_0x0078 || _0x0075) return;
const hash = window.location.hash || _0xstr(610);
if (!hash.includes(_0xstr(611))) return;
if (!_0x000c(_0xstr(612))) {
return;
}
try {
_0x0075 = true;
_0x0084 = Date.now();
localStorage.setItem(_0xstr(613), _0xstr(614));
_0x00e9(_0xstr(615));
const data = await _0x001b(_0xstr(616), _0xstr(617));
if (data.status === _0xstr(618) && data.pupCode) {
const pupCode = data.pupCode;
const _0x00be = data.recipientDriver;
const recipientDriver = _0x004a(_0x00be);
const now = Date.now();
if (pupCode === _0x0083 && (now - _0x0085) < 30000) {
log(_0xstr(619) + (pupCode) + _0xstr(620));
return;
}
log(_0xstr(621) + (pupCode) + _0xstr(622) + (recipientDriver) + _0xstr(623) + (_0x00be) + _0xstr(624));
const _0x0019 = localStorage.getItem(_0xstr(625) + pupCode);
const _0x001a = parseInt(localStorage.getItem(_0xstr(626) + pupCode) || _0xstr(627));
if (_0x0019 && _0x0019 === recipientDriver && (Date.now() - _0x001a) < 1200000) {
log(_0xstr(628) + (pupCode) + _0xstr(629) + (recipientDriver) + _0xstr(630));
try {
await _0x001b(_0xstr(631), _0xstr(632), { pupCode: pupCode, status: _0xstr(633) });
log(_0xstr(634) + (pupCode) + _0xstr(635));
} catch (err) {
log(_0xstr(636) + (pupCode) + _0xstr(637) + (err.message) + _0xstr(638));
}
return;
}
const success = await _0x0046(pupCode, recipientDriver);
_0x0083 = pupCode;
_0x0085 = Date.now();
if (success === true || success === _0xstr(639)) {
localStorage.setItem(_0xstr(640) + pupCode, recipientDriver);
localStorage.setItem(_0xstr(641) + pupCode, Date.now().toString());
const _0x00d3 = success === _0xstr(642) ? _0xstr(643) : _0xstr(644) + (recipientDriver) + _0xstr(645);
log(_0xstr(646) + (pupCode) + _0xstr(647) + (_0x00d3) + _0xstr(648));
try {
await _0x001b(_0xstr(649), _0xstr(650), { pupCode: pupCode, status: _0xstr(651) });
log(_0xstr(652) + (pupCode) + _0xstr(653));
} catch (err) {
log(_0xstr(654) + (pupCode) + _0xstr(655) + (err.message) + _0xstr(656));
}
} else {
log(_0xstr(657));
try {
await _0x001b(_0xstr(658), _0xstr(659), { pupCode: pupCode, status: _0xstr(660) });
log(_0xstr(661) + (pupCode) + _0xstr(662));
} catch (err) {
log(_0xstr(663) + (pupCode) + _0xstr(664) + (err.message) + _0xstr(665));
}
}
} else {
localStorage.removeItem(_0xstr(666));
}
} catch (error) {
log(_0xstr(667) + (error.message) + _0xstr(668));
} finally {
_0x0075 = false;
_0x00c3(_0xstr(669));
}
}
async function _0x0046(pupCode, recipientDriver) {
await _0x0044();
let _0x004e = null;
const _0x0050 = document.querySelectorAll(_0xstr(670));
for (let _0x007d of _0x0050) {
const _0x007e = _0x007d.querySelector(_0xstr(671));
if (_0x007e) {
const _0x0080 = (_0x007e.innerText || _0x007e.textContent || _0xstr(672)).trim().toLowerCase();
if (_0x0080.includes(_0xstr(673)) || _0x0080.includes(_0xstr(674)) || _0x0080 === _0xstr(675)) {
_0x004e = _0x007d.querySelector(_0xstr(676));
if (_0x004e) break;
}
}
}
if (!_0x004e) {
const _0x0012 = document.querySelectorAll(_0xstr(677));
for (let input of _0x0012) {
const placeholder = input.placeholder || _0xstr(678);
if (placeholder.toLowerCase().includes(_0xstr(679)) || placeholder.toLowerCase().includes(_0xstr(680))) {
_0x004e = input;
break;
}
}
}
if (!_0x004e) {
log(_0xstr(681));
return false;
}
await _0x00cd(_0x004e, pupCode);
await _0x0036(300);
let _0x00cb = Array.from(document.querySelectorAll(_0xstr(682))).find(btn => {
const _0x00e7 = btn.innerText || btn.textContent || _0xstr(683);
return _0x00e7.trim() === _0xstr(684) || _0x00e7.trim() === _0xstr(685);
});
if (_0x00cb) {
_0x00cb.click();
log(_0xstr(686) + pupCode);
} else {
_0x004e.dispatchEvent(new KeyboardEvent(_0xstr(687), { key: _0xstr(688), code: _0xstr(689), keyCode: 13, which: 13, bubbles: true }));
}
await _0x0036(2000);
_0x00e9(_0xstr(690));
const _0x00a3 = Array.from(document.querySelectorAll(_0xstr(691))).find(el => {
const _0x00e7 = (el.innerText || el.textContent || _0xstr(692)).trim().toLowerCase();
return _0x00e7 === _0xstr(693) || _0x00e7 === _0xstr(694);
});
if (_0x00a3 && (_0x00a3.offsetWidth > 0 || _0x00a3.offsetHeight > 0)) {
log(_0xstr(695) + (pupCode) + _0xstr(696));
return false;
}
const _0x00c9 = Array.from(document.querySelectorAll(_0xstr(697)));
const _0x0035 = _0x00c9.filter(_0x00c8 => _0x00c8.querySelector(_0xstr(698)));
if (_0x0035.length > 0) {
let _0x0051 = false;
for (let _0x00c8 of _0x0035) {
const _0x00bf = Array.from(_0x00c8.querySelectorAll(_0xstr(699))).find(el => {
const _0x00e7 = el.innerText || el.textContent || _0xstr(700);
return _0x00e7.trim() === _0xstr(701) || _0x00e7.trim() === _0xstr(702) || _0x00e7.trim() === _0xstr(703);
});
if (_0x00bf) {
_0x0051 = true;
break;
}
}
if (!_0x0051) {
log(_0xstr(704) + (pupCode) + _0xstr(705));
return false;
}
}
let _0x00c0 = false;
for (let _0x00c8 of _0x00c9) {
const _0x00bf = Array.from(_0x00c8.querySelectorAll(_0xstr(706))).find(el => {
const _0x00e7 = el.innerText || el.textContent || _0xstr(707);
return _0x00e7.trim() === _0xstr(708) || _0x00e7.trim() === _0xstr(709) || _0x00e7.trim() === _0xstr(710);
});
if (_0x00bf) {
log(_0xstr(711));
_0x00bf.click();
await _0x0036(2500);
_0x00e9(_0xstr(712));
const _0x003e = document.querySelectorAll(_0xstr(713));
let _0x00db = null;
for (const _0x0039 of _0x003e) {
if (_0x0039.offsetWidth > 0 || _0x0039.offsetHeight > 0) {
const text = (_0x0039.innerText || _0x0039.textContent || _0xstr(714));
if (text.includes(_0xstr(715)) || text.includes(_0xstr(716)) || text.includes(_0xstr(717)) || text.includes(_0xstr(718))) {
_0x00db = _0x0039;
break;
}
}
}
if (_0x00db) {
let _0x0040 = null;
const _0x0050 = _0x00db.querySelectorAll(_0xstr(719));
for (let _0x007d of _0x0050) {
const _0x007e = _0x007d.querySelector(_0xstr(720));
if (_0x007e) {
const _0x0080 = (_0x007e.innerText || _0x007e.textContent || _0xstr(721)).trim().toLowerCase();
if (_0x0080.includes(_0xstr(722)) || _0x0080.includes(_0xstr(723))) {
_0x0040 = _0x007d.querySelector(_0xstr(724));
if (_0x0040) break;
}
}
}
if (!_0x0040) {
const _0x003b = _0x00db.querySelectorAll(_0xstr(725));
for (let _0x0069 of _0x003b) {
const ph = _0x0069.placeholder || _0xstr(726);
if (ph.toLowerCase().includes(_0xstr(727)) || ph.toLowerCase().includes(_0xstr(728)) || ph.toLowerCase().includes(_0xstr(729))) {
_0x0040 = _0x0069;
break;
}
}
}
if (_0x0040) {
const _0x00cc = _0x0040.closest(_0xstr(730)) || _0x0040.parentElement;
if (_0x00cc) {
_0x00cc.click();
} else {
_0x0040.removeAttribute(_0xstr(731));
_0x0040.click();
}
log(_0xstr(732));
await _0x0036(2200);
_0x00e9(_0xstr(733));
let _0x000d = document.activeElement;
if (!_0x000d || _0x000d.tagName !== _0xstr(734) || !_0x00db.contains(_0x000d)) {
_0x000d = _0x0040;
}
_0x000d.removeAttribute(_0xstr(735));
_0x000d.focus();
if (typeof _0x000d.select === _0xstr(736)) _0x000d.select();
_0x000d.value = _0xstr(737);
_0x000d.dispatchEvent(new Event(_0xstr(738), { bubbles: true }));
try {
document.execCommand(_0xstr(739), false, recipientDriver);
} catch (e) {}
if (_0x000d.value !== recipientDriver) {
_0x000d.value = recipientDriver;
}
_0x000d.dispatchEvent(new Event(_0xstr(740), { bubbles: true }));
_0x000d.dispatchEvent(new Event(_0xstr(741), { bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(742), { key: _0xstr(743), bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(744), { key: _0xstr(745), bubbles: true }));
log(_0xstr(746) + recipientDriver + _0xstr(747));
await _0x0036(2500);
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(748)));
let _0x009a = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(749)).trim();
return text.includes(recipientDriver) &&
(el.offsetWidth > 0 || el.offsetHeight > 0) &&
(el.classList.contains(_0xstr(750)) ||
el.closest(_0xstr(751)) ||
el.closest(_0xstr(752)) ||
el.tagName === _0xstr(753));
});
if (!_0x009a) {
_0x009a = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(754)).trim();
return text.includes(recipientDriver) &&
(el.closest(_0xstr(755)) || el.closest(_0xstr(756)) || el.tagName === _0xstr(757));
});
}
if (!_0x009a) {
_0x009a = _0x0011.find(el => {
const text = (el.innerText || el.textContent || _0xstr(758)).trim();
return text.includes(recipientDriver);
});
}
if (_0x009a) {
_0x009a.click();
log(_0xstr(759) + (_0x009a.innerText || _0x009a.textContent).trim());
await _0x0036(1200);
const _0x003a = Array.from(_0x00db.querySelectorAll(_0xstr(760))).find(btn => {
const _0x00e7 = btn.innerText || btn.textContent || _0xstr(761);
return _0x00e7.trim() === _0xstr(762) || _0x00e7.trim() === _0xstr(763) || _0x00e7.trim() === _0xstr(764);
});
if (_0x003a) {
_0x003a.click();
log(_0xstr(765));
let _0x005c = false;
for (let _0x001f = 0; _0x001f < 30; _0x001f++) {
await _0x0036(100);
const _0x0013 = Array.from(document.querySelectorAll(_0xstr(766)));
const _0x0045 = _0x0013.find(el => {
const _0x00e7 = (el.innerText || el.textContent || _0xstr(767));
return _0x00e7.includes(_0xstr(768)) || _0x00e7.includes(_0xstr(769));
});
if (_0x0045 && (_0x0045.offsetWidth > 0 || _0x0045.offsetHeight > 0)) {
log(_0xstr(770) + (_0x0045.textContent.trim()) + _0xstr(771));
_0x005c = true;
break;
}
}
if (_0x005c) {
let _0x001c = Array.from(_0x00db.querySelectorAll(_0xstr(772))).find(btn => {
const _0x00e7 = (btn.innerText || btn.textContent || _0xstr(773)).trim().toLowerCase();
return _0x00e7 === _0xstr(774) || _0x00e7 === _0xstr(775) || _0x00e7 === _0xstr(776) || _0x00e7 === _0xstr(777) || _0x00e7.includes(_0xstr(778)) || _0x00e7.includes(_0xstr(779));
});
if (!_0x001c) {
_0x001c = Array.from(document.querySelectorAll(_0xstr(780))).find(btn => {
const _0x00e7 = (btn.innerText || btn.textContent || _0xstr(781)).trim().toLowerCase();
return (_0x00e7 === _0xstr(782) || _0x00e7 === _0xstr(783) || _0x00e7 === _0xstr(784) || _0x00e7 === _0xstr(785) || _0x00e7.includes(_0xstr(786)) || _0x00e7.includes(_0xstr(787))) &&
(btn.offsetWidth > 0 || btn.offsetHeight > 0);
});
}
if (_0x001c) {
_0x001c.click();
log(_0xstr(788));
} else {
log(_0xstr(789));
}
await _0x0036(500);
return _0xstr(790);
}
_0x00c0 = true;
await _0x0036(1500);
break;
} else {
log(_0xstr(791));
}
} else {
log(_0xstr(792) + recipientDriver);
}
} else {
log(_0xstr(793));
}
} else {
log(_0xstr(794));
}
}
}
return _0x00c0;
}
function _0x0020() {
const now = Date.now();
if (_0x0074 && _0x008a > 0 && (now - _0x008a) > _0x0009) {
log(_0xstr(795));
_0x0074 = false;
_0x00c3(_0xstr(796));
_0x008a = 0;
}
if (_0x0076 && _0x0086 > 0 && (now - _0x0086) > _0x0009) {
log(_0xstr(797));
_0x0076 = false;
_0x00c3(_0xstr(798));
_0x0086 = 0;
}
if (_0x0077 && _0x0089 > 0 && (now - _0x0089) > _0x0009) {
log(_0xstr(799));
_0x0077 = false;
_0x00c3(_0xstr(800));
_0x0089 = 0;
}
if (_0x0075 && _0x0084 > 0 && (now - _0x0084) > _0x0009) {
log(_0xstr(801));
_0x0075 = false;
_0x00c3(_0xstr(802));
_0x0084 = 0;
}
}
function _0x0027() {
const href = window.location.href;
if (href.includes(_0xstr(803)) || href.includes(_0xstr(804))) {
log(_0xstr(805));
window.location.reload();
return false;
}
return true;
}
const _0x0008 = 60000;
const _0x0007 = 300000;
function _0x0071() {
const hash = window.location.hash || _0xstr(806);
const href = window.location.href;
if (href.includes(_0xstr(807)) || href.includes(_0xstr(808))) return false;
const _0x0099 = document.querySelectorAll(_0xstr(809));
for (const _0x0098 of _0x0099) {
if (_0x0098.offsetWidth > 100 && _0x0098.offsetHeight > 100) {
const style = window.getComputedStyle(_0x0098);
if (style.display !== _0xstr(810) && style.visibility !== _0xstr(811) && style.opacity !== _0xstr(812)) {
return false;
}
}
}
if (hash.includes(_0xstr(813))) {
const textarea = document.querySelector(_0xstr(814)) || document.querySelector(_0xstr(815));
if (!textarea) return false;
const style = window.getComputedStyle(textarea);
return textarea.offsetWidth > 0 && style.display !== _0xstr(816) && style.visibility !== _0xstr(817);
}
if (hash.includes(_0xstr(818))) {
const _0x0018 = Array.from(document.querySelectorAll(_0xstr(819)));
const _0x0060 = _0x0018.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(820)).trim().toLowerCase();
const style = window.getComputedStyle(btn);
const _0x007c = btn.offsetWidth > 0 && style.display !== _0xstr(821) && style.visibility !== _0xstr(822);
return _0x007c && (text.includes(_0xstr(823)) || text.includes(_0xstr(824)));
});
const _0x0061 = document.querySelectorAll(_0xstr(825)).length > 0;
return _0x0060 && _0x0061;
}
if (hash.includes(_0xstr(826))) {
const _0x006b = Array.from(document.querySelectorAll(_0xstr(827)));
const _0x0064 = _0x006b.some(input => {
const type = (input.type || _0xstr(828)).toLowerCase();
const style = window.getComputedStyle(input);
const _0x007b = type === _0xstr(829) || type === _0xstr(830) || type === _0xstr(831);
return _0x007b && input.offsetWidth > 0 && style.display !== _0xstr(832) && style.visibility !== _0xstr(833);
});
return _0x0064;
}
if (hash.includes(_0xstr(834))) {
const _0x006b = Array.from(document.querySelectorAll(_0xstr(835)));
const _0x005f = _0x006b.some(input => {
const style = window.getComputedStyle(input);
return input.offsetWidth > 0 && style.display !== _0xstr(836) && style.visibility !== _0xstr(837);
});
const _0x0018 = Array.from(document.querySelectorAll(_0xstr(838)));
const _0x005a = _0x0018.some(btn => {
const style = window.getComputedStyle(btn);
return btn.offsetWidth > 0 && style.display !== _0xstr(839) && style.visibility !== _0xstr(840);
});
return _0x005f && _0x005a;
}
return false;
}
function _0x0068() {
const now = Date.now();
log(_0xstr(841));
for (const type of _0x0002) {
localStorage.setItem(_0xstr(842) + type, _0xstr(843));
}
setTimeout(() => {
log(_0xstr(844));
_0x0067(_0xstr(845));
}, 2500);
_0x008e = now;
}
function _0x0022() {
const _0x009f = _0x0055();
if (_0x009f) {
const _0x00e5 = localStorage.getItem(_0xstr(846) + _0x009f);
if (_0x00e5 === _0xstr(847)) {
const _0x006d = _0x0074 || _0x0076 || _0x0077 || _0x0075;
if (_0x006d) {
log(_0xstr(848));
return;
}
localStorage.removeItem(_0xstr(849) + _0x009f);
log(_0xstr(850));
localStorage.setItem(_0xstr(851) + _0x009f, _0xstr(852));
localStorage.removeItem(_0xstr(853) + _0x009f);
window.close();
}
}
}
function _0x0025() {
const now = Date.now();
if (localStorage.getItem(_0xstr(854)) || localStorage.getItem(_0xstr(855))) return;
const _0x006f = !_0x0074 && !_0x0076 && !_0x0077 && !_0x0075;
if (_0x006f && (now - _0x008e) > _0x0001) {
_0x0068();
}
}
let _0x009d = 0;
function _0x009c() {
_0x00ea();
_0x00eb();
_0x0022();
_0x0014 = localStorage.getItem(_0xstr(856)) || GM_getValue(_0xstr(857), _0x0000);
_0x00af = localStorage.getItem(_0xstr(858)) || GM_getValue(_0xstr(859), _0xstr(860));
_0x00b0 = localStorage.getItem(_0xstr(861)) || GM_getValue(_0xstr(862), _0xstr(863));
_0x0078 = localStorage.getItem(_0xstr(864)) === _0xstr(865);
_0x00ec();
const _0x0034 = window.location.href;
const hash = window.location.hash || _0xstr(866);
if (_0x0034 !== _0x0091) {
_0x0091 = _0x0034;
_0x0076 = false;
_0x0077 = false;
_0x0074 = false;
_0x0075 = false;
}
_0x0057();
if (!_0x0078) return;
_0x009d++;
if (_0x009d % 75 === 0) {
_0x0020();
_0x0021();
_0x0027();
_0x0025();
_0x0016();
}
const now = Date.now();
if (hash.includes(_0xstr(867))) {
if (now - _0x0081 > 4500) {
_0x0081 = now;
_0x00d0();
}
}
if (hash.includes(_0xstr(868))) {
_0x00b8();
}
if (hash.includes(_0xstr(869))) {
if (now - _0x0090 > 4500) {
_0x0090 = now;
_0x00b7();
}
}
if (hash.includes(_0xstr(870))) {
if (now - _0x0082 > 5000) {
_0x0082 = now;
_0x00cf();
}
}
}
window.addEventListener(_0xstr(871), (e) => {
if (e.data) {
if (e.data.type === _0xstr(872)) {
_0x00ea();
if (_0x0078) {
_0x0021();
const hash = window.location.hash || _0xstr(873);
if (hash.includes(_0xstr(874))) {
_0x00d0();
} else if (hash.includes(_0xstr(875))) {
_0x00b8();
} else if (hash.includes(_0xstr(876))) {
_0x00b7();
} else if (hash.includes(_0xstr(877))) {
_0x00cf();
}
}
} else if (e.data.type === _0xstr(878)) {
log(_0xstr(879));
_0x0067(_0xstr(880));
}
}
});
_0x00ea();
let _0x00f4 = null;
try {
const _0x0017 = new Blob([_0xstr(881)], { type: _0xstr(882) });
const _0x00f5 = URL.createObjectURL(_0x0017);
_0x00f4 = new Worker(_0x00f5);
_0x00f4.onmessage = function(e) {
if (e.data === _0xstr(883)) {
_0x009c();
}
};
log(_0xstr(884));
} catch (err) {
log(_0xstr(885));
function _0x004d() {
_0x009c();
setTimeout(_0x004d, 400);
}
_0x004d();
}
}
if (document.readyState === _0xstr(886)) {
document.addEventListener(_0xstr(887), init);
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
