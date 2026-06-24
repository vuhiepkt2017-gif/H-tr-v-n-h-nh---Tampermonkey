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


    const _0xarr = [
        'dXNlIHN0cmljdA==',
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
        'XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiA1cHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0OyBwYWRkaW5nLWJvdHRvbTogOHB4O1wiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogI2ZmNTcyMjsgZm9udC1zaXplOiAxNHB4O1wiPkjhu5cgdHLhu6M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYXAtYmFkZ2VcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMnB4IDZweDsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LXNpemU6IDlweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGN1cnNvcjogcG9pbnRlcjtcIj5U4bqvdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJhcC1jbG9zZS1idG5cIiBzdHlsZT1cImNvbG9yOiAjYWFhOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDAgNHB4O1wiPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXAtY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDhweDsgbWFyZ2luLXRvcDogMTBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDRweDsgY29sb3I6ICNhYWE7XCI+TGluayBHb29nbGUgV2ViIEFwcDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXAtdXJsLXNhdmVkLXZpZXdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYmFja2dyb3VuZC1jb2xvcjogIzJhMmEzNTsgcGFkZGluZzogNnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYXAtdXJsLXN0YXR1c1wiIHN0eWxlPVwiY29sb3I6ICM0Y2FmNTA7IGZvbnQtd2VpZ2h0OiBib2xkOyBsZXR0ZXItc3BhY2luZzogM3B4O1wiPioqKjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYXAtZWRpdC11cmwtYnRuXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTJweDtcIj7inI/vuI88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXAtdXJsLWVkaXQtdmlld1wiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFwLXVybC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy8uLi4vZXhlY1wiIHN0eWxlPVwid2lkdGg6IDkzJTsgcGFkZGluZzogNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICM1NTU7IGJhY2tncm91bmQtY29sb3I6ICMyYTJhMzU7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAxMXB4O1wiIHZhbHVlPVwi',
        'XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNHB4OyBjb2xvcjogI2FhYTtcIj5Uw6puIE3DoXkgVMOtbmggKFBDIE5hbWUpOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYXAtcGMtaW5wdXRcIiBzdHlsZT1cIndpZHRoOiA5MyU7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjNTU1OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTM1OyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMTFweDtcIiB2YWx1ZT1cIg==',
        'XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXAtc2F2ZS11cmxcIiBzdHlsZT1cImZsZXg6IDE7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IGNvbG9yOiB3aGl0ZTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogYm9sZDtcIj5MxrB1PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhcC10b2dnbGUtYnRuXCIgc3R5bGU9XCJmbGV4OiAxLjU7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IGNvbG9yOiB3aGl0ZTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogYm9sZDtcIj5C4bqvdCDEkeG6p3UgY2jhuqF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0OyBwYWRkaW5nLXRvcDogOHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNnB4OyBjb2xvcjogI2ZmOTgwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+VHLhuqFuZyB0aMOhaSBjw6FjIFRhYiAoQXV0by1PcGVuKTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgZ2FwOiA2cHg7XCIgaWQ9XCJhcC10YWJzLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVGFiIHN0YXR1cyBpdGVtcyB3aWxsIGJlIHJlbmRlcmVkIGhlcmUgZHluYW1pY2FsbHkgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXAtb3Blbi1hbGwtdGFicy1idG5cIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA4cHg7IHBhZGRpbmc6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBib3JkZXI6IDFweCBkYXNoZWQgI2ZmOTgwMDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC4xKTsgY29sb3I6ICNmZjk4MDA7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTFweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIPCfmoAgTeG7nyB04bqldCBj4bqjIGPDoWMgVGFiIGhv4bqhdCDEkeG7mW5nXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjE2OyBwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMXB4OyBtYXgtaGVpZ2h0OiA4MHB4OyBvdmVyZmxvdy15OiBhdXRvOyBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1wiIGlkPVwiYXAtbG9nLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICBbSOG7hyB0aOG7kW5nXSDEkGFuZyB04bqjaS4uLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIA==',
        'c3R5bGU=',
        'XG4gICAgICAgICAgICAjc2hvcGVlLWF1dG8tcHJpbnQtcGFuZWwsICNzaG9wZWUtYXV0by1wcmludC1sYXVuY2hlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAg',
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
        'XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiA=',
        'IzgxYzc4NA==',
        'I2U1NzM3Mw==',
        'O1wiPg==',
        'PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogOXB4OyBwYWRkaW5nOiAxcHggNHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGJhY2tncm91bmQtY29sb3I6IA==',
        'IzRjYWY1MA==',
        'I2Y0NDMzNg==',
        'OyBjb2xvcjogd2hpdGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA=',
        'TeG7nw==',
        'VOG6r3Q=',
        'XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA=',
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
        'c2luZQ==',
        'W0No4buRbmcgbmfhu6ddIMSQw6MgcGjDoXQgw6JtIHRoYW5oIG7hu4FuIHThuqduIHPhu5EgY2FvIGdp4buvIHRhYiBob+G6oXQgxJHhu5luZy4=',
        'W0No4buRbmcgbmfhu6ddIEtow7RuZyB0aOG7gyBwaMOhdCDDom0gdGhhbmggbuG7gW46',
        'c3VzcGVuZGVk',
        'W0No4buRbmcgbmfhu6ddIMSQw6Mga2jDtGkgcGjhu6VjIEF1ZGlvQ29udGV4dCB04burIHRy4bqhbmcgdGjDoWkgc3VzcGVuZGVkLg==',
        'Y2xvc2Vk',
        'W0No4buRbmcgbmfhu6ddIEF1ZGlvQ29udGV4dCBi4buLIMSRw7NuZywgxJHDoyB04bqhbyBs4bqhaS4=',
        'W0No4buRbmcgbmfhu6ddIMSQw6MgdOG6r3Qgw6JtIHRoYW5oIG7hu4FuLg==',
        'dmlzaWJpbGl0eWNoYW5nZQ==',
        'dmlzaWJsZQ==',
        'Y2xpY2s=',
        'Y2xpY2s=',
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
        '',
        'YXdiUHJpbnQ=',
        'YXdiUHJpbnQ=',
        'YXdiUHJpbnQ=',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmc=',
        'c3VjY2Vzcw==',
        'XG4=',
        'VMOsbSB0aOG6pXkgbMO0IGfhu5NtIA==',
        'IG3DoyDEkeG7gyBpbi4=',
        'YXdiUHJpbnQ=',
        'xJDDoyBpbiBsw7QgdGjDoG5oIGPDtG5nOiA=',
        'LCA=',
        '',
        'VGjhuqV0IGLhuqFpIGtoaSBpbiBsw7Qu',
        'TOG7l2kgaW4gdGjGsOG7nW5nOiA=',
        '',
        'YXdiUHJpbnQ=',
        'dGV4dGFyZWE=',
        'aW5wdXRbdHlwZT0idGV4dCJd',
        'S2jDtG5nIHTDrG0gdGjhuqV5IMO0IG5o4bqtcCBtw6MgduG6rW4gxJHGoW4h',
        'XG4=',
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
        'XG4=',
        'U1lTVEVN',
        'TUVTU0FHRQ==',
        'RklORA==',
        'YnV0dG9u',
        '',
        'b2s=',
        'eMOhYyBuaOG6rW4=',
        'Y29uZmlybQ==',
        'Y2xvc2U=',
        'xJHDs25n',
        'b2s=',
        'W0luIEJpbGxdIMSQw6MgY2xpY2sgbsO6dCBPSyDEkcOzbmcgY+G6o25oIGLDoW8u',
        'W0luIEJpbGxdIFBow6F0IGhp4buHbiBkaWFsb2cgbOG7l2kuIMSQ4bujaSA=',
        'IGdpw6J5IMSR4buDIHThu7EgxJHhu5luZyDEkcOzbmcuLi4=',
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
        'c3RhcnRQYWNrTm9MYWJlbA==',
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
        '',
        'W1RPIEluXSBLaMO0bmcgdMOsbSB0aOG6pXkgw7Qgbmjhuq1wIFRPIE51bWJlciB0csOqbiBtw6BuIGjDrG5oIQ==',
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
        'cGlja3VwVGFzaw==',
        'cGlja3VwVGFzaw==',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfY2h1eWVuX3BpY2s=',
        'c3VjY2Vzcw==',
        'UFVQIA==',
        'IMSRw6MgxJHGsOG7o2MgeOG7rSBsw70gZ+G6p24gxJHDonkgKGTGsOG7m2kgMzBzKS4gQuG7jyBxdWEgdGhhbyB0w6FjIHRyw7luZyBs4bq3cC4=',
        'cGlja3VwVGFzaw==',
        'VMOsbSB0aOG6pXkgbmhp4buHbSB24bulIENodXnhu4NuIFBpY2s6IFBVUD0=',
        'LCBOaOG6rW49',
        'IChH4buRYzog',
        'KQ==',
        'cGlja3VwVGFzaw==',
        'xJDDoyBjaHV54buDbiBnaWFvIHRow6BuaCBjw7RuZyBQVVA6IA==',
        'IGNobyB0w6BpIHjhur8g',
        '',
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
        'dHI=',
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
        'xJDDoyBuaOG6pW4gWMOhYyBuaOG6rW4gY2h1eeG7g24gZ2lhbyB0w6BpIHjhur8u',
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
        'LmVsLWxvYWRpbmctbWFzaywgLmVsLWxvYWRpbmctc3Bpbm5lciwgLmxvYWRpbmctbW9jaywgW2NsYXNzKj0ibG9hZGluZy1zcGlubmVyIl0=',
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
        'XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoXCJwdWxzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aWNrLCA0MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aWNrKCk7XG4gICAgICAgICAgICA=',
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
const _0x000a = {
awbPrint: {
name: _0xstr(1),
url: _0xstr(2),
hashKey: _0xstr(3)
},
generalPackTOList: {
name: _0xstr(4),
url: _0xstr(5),
hashKey: _0xstr(6)
},
startPackNoLabel: {
name: _0xstr(7),
url: _0xstr(8),
hashKey: _0xstr(9)
},
pickupTask: {
name: _0xstr(10),
url: _0xstr(11),
hashKey: _0xstr(12)
}
};
function _0x004b() {
const hash = window.location.hash || _0xstr(13);
const _0x0096 = hash.split(_0xstr(14))[0];
for (const [type, _0x0019] of Object.entries(_0x000a)) {
if (_0x0096.includes(_0x0019.hashKey)) {
return type;
}
}
return null;
}
let _0x00bc = sessionStorage.getItem(_0xstr(15));
if (!_0x00bc) {
_0x00bc = _0xstr(16) + Math.random().toString(36).substring(2, 10) + _0xstr(17) + Date.now();
sessionStorage.setItem(_0xstr(18), _0x00bc);
}
const _0x0058 = _0x004b();
if (_0x0058) {
localStorage.setItem(_0xstr(19) + _0x0058, Date.now().toString());
localStorage.setItem(_0xstr(20) + _0x0058, _0x00bc);
}
function _0x004d() {
const _0x002e = _0x004b();
if (_0x002e) {
const _0x00a7 = localStorage.getItem(_0xstr(21) + _0x002e);
if (_0x00a7 === _0x00bc) {
localStorage.setItem(_0xstr(22) + _0x002e, _0xstr(23));
localStorage.removeItem(_0xstr(24) + _0x002e);
}
}
}
window.addEventListener(_0xstr(25), _0x004d);
window.addEventListener(_0xstr(26), _0x004d);
function init() {
const _0x0064 = window.opener !== null || window.self !== window.top || window.location.href.includes(_0xstr(27)) || window.location.href.includes(_0xstr(28));
if (_0x0064) {
return;
}
const _0x0000 = _0xstr(29);
let _0x0012 = localStorage.getItem(_0xstr(30)) || GM_getValue(_0xstr(31), _0x0000);
let _0x0099 = localStorage.getItem(_0xstr(32)) || GM_getValue(_0xstr(33), _0xstr(34));
let _0x0069 = localStorage.getItem(_0xstr(35)) === _0xstr(36);
let _0x0065 = false;
let _0x0067 = false;
let _0x0068 = false;
let _0x0066 = false;
let _0x0072 = _0xstr(37);
let _0x0074 = 0;
let _0x007f = _0xstr(38);
let _0x007c = 0;
let _0x0082 = new Set();
let _0x007e = 0;
let _0x0079 = 0;
let _0x0075 = 0;
let _0x0078 = 0;
let _0x0073 = 0;
const _0x0009 = 30000;
let _0x007d = Date.now();
const _0x0001 = 3600000;
let _0x007b = 0;
function _0x000c(tabType) {
const now = Date.now();
if (now - _0x007b < 2000) {
return false;
}
const _0x0083 = _0xstr(39);
const _0x00cd = _0xstr(40);
const _0x00c4 = _0xstr(41);
const _0x002b = localStorage.getItem(_0x00cd);
const _0x0084 = parseInt(localStorage.getItem(_0x00c4) || _0xstr(42));
if (!_0x002b || (now - _0x0084) > 5000 || _0x002b === tabType) {
localStorage.setItem(_0x0083, _0xstr(43));
localStorage.setItem(_0x00cd, tabType);
localStorage.setItem(_0x00c4, now.toString());
return true;
}
return false;
}
function _0x00a9(tabType) {
const _0x0083 = _0xstr(44);
const _0x00cd = _0xstr(45);
const _0x00c4 = _0xstr(46);
const _0x002b = localStorage.getItem(_0x00cd);
if (_0x002b === tabType) {
localStorage.removeItem(_0x0083);
localStorage.removeItem(_0x00cd);
localStorage.removeItem(_0x00c4);
_0x007b = Date.now();
}
}
function _0x00ce(tabType) {
const _0x00cd = _0xstr(47);
const _0x00c4 = _0xstr(48);
const _0x002b = localStorage.getItem(_0x00cd);
if (_0x002b === tabType) {
localStorage.setItem(_0x00c4, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(49), function() {
let _0x008c = prompt(_0xstr(50), _0x0012);
if (_0x008c) {
_0x0012 = _0x008c.trim();
localStorage.setItem(_0xstr(51), _0x0012);
GM_setValue(_0xstr(52), _0x0012);
alert(_0xstr(53));
window.location.reload();
}
});
const launcher = document.createElement(_0xstr(54));
launcher.id = _0xstr(55);
launcher.innerText = _0xstr(56);
launcher.style = _0xstr(57);
document.body.appendChild(launcher);
const panel = document.createElement(_0xstr(58));
panel.id = _0xstr(59);
panel.style = _0xstr(60);
let _0x0013 = null;
function _0x00b4() {
_0x00b9();
_0x0013 = setTimeout(() => {
_0x0027();
}, 20000);
}
function _0x00b9() {
if (_0x0013) {
clearTimeout(_0x0013);
_0x0013 = null;
}
}
function _0x0027() {
panel.style.display = _0xstr(61);
launcher.style.display = _0xstr(62);
_0x00b9();
}
function _0x0042() {
panel.style.display = _0xstr(63);
launcher.style.display = _0xstr(64);
_0x00b4();
}
panel.innerHTML = _0xstr(65) + (_0x0012) + _0xstr(66) + (_0x0099) + _0xstr(67);
document.body.appendChild(panel);
const _0x00c9 = document.createElement(_0xstr(68));
_0x00c9.innerHTML = _0xstr(69);
document.head.appendChild(_0x00c9);
function _0x001e() {
let _0x0055 = false;
const _0x0037 = document.querySelectorAll(_0xstr(70));
for (let i = 0; i < _0x0037.length; i++) {
const el = _0x0037[i];
if (el.id === _0xstr(71) || el.id === _0xstr(72)) continue;
const style = window.getComputedStyle(el);
if (style.display !== _0xstr(73) && style.visibility !== _0xstr(74) && style.opacity !== _0xstr(75) && el.offsetHeight > 0) {
_0x0055 = true;
break;
}
}
if (_0x0055) {
panel.style.opacity = _0xstr(76);
panel.style.pointerEvents = _0xstr(77);
} else {
if (panel.style.display !== _0xstr(78)) {
panel.style.opacity = _0xstr(79);
panel.style.pointerEvents = _0xstr(80);
}
}
if (launcher.style.display !== _0xstr(81)) {
launcher.style.opacity = _0xstr(82);
launcher.style.pointerEvents = _0xstr(83);
}
}
setInterval(_0x001e, 300);
const _0x0085 = document.getElementById(_0xstr(84));
const badge = document.getElementById(_0xstr(85));
const _0x00c7 = document.getElementById(_0xstr(86));
const _0x00d4 = document.getElementById(_0xstr(87));
const _0x0097 = document.getElementById(_0xstr(88));
const _0x00af = document.getElementById(_0xstr(89));
const _0x0024 = document.getElementById(_0xstr(90));
const _0x002a = document.getElementById(_0xstr(91));
const _0x00d5 = document.getElementById(_0xstr(92));
const _0x00d3 = document.getElementById(_0xstr(93));
const _0x003a = document.getElementById(_0xstr(94));
const _0x00d6 = document.getElementById(_0xstr(95));
const _0x00be = document.getElementById(_0xstr(96));
const _0x0091 = document.getElementById(_0xstr(97));
function log(message) {
const _0x00c3 = new Date().toLocaleTimeString();
_0x0085.innerHTML = _0xstr(98) + (_0x00c3) + _0xstr(99) + (message) + _0xstr(100) + _0x0085.innerHTML;
const _0x0081 = _0x0085.innerHTML.split(_0xstr(101));
if (_0x0081.length > 20) _0x0085.innerHTML = _0x0081.slice(0, 20).join(_0xstr(102));
}
function _0x00d1() {
if (_0x0069) {
badge.innerText = _0xstr(103);
badge.style.backgroundColor = _0xstr(104);
_0x00c7.innerText = _0xstr(105);
_0x00c7.style.backgroundColor = _0xstr(106);
} else {
badge.innerText = _0xstr(107);
badge.style.backgroundColor = _0xstr(108);
_0x00c7.innerText = _0xstr(109);
_0x00c7.style.backgroundColor = _0xstr(110);
}
}
function _0x00d2() {
if (_0x0012 && _0x0012 !== _0x0000) {
_0x00d3.style.display = _0xstr(111);
_0x00d5.style.display = _0xstr(112);
_0x00d6.innerText = _0xstr(113);
} else {
_0x00d3.style.display = _0xstr(114);
_0x00d5.style.display = _0xstr(115);
}
}
function _0x00cf() {
const _0x002e = _0x004b();
if (_0x002e) {
localStorage.setItem(_0xstr(116) + _0x002e, Date.now().toString());
localStorage.setItem(_0xstr(117) + _0x002e, _0x00bc);
}
}
const _0x000b = 300000;
const _0x0003 = 30000;
const _0x0004 = 300000;
function _0x00d0() {
_0x00be.innerHTML = _0xstr(118);
const now = Date.now();
for (const [type, _0x0019] of Object.entries(_0x000a)) {
const _0x007a = parseInt(localStorage.getItem(_0xstr(119) + type) || _0xstr(120));
const _0x006b = _0x007a > 0 && (now - _0x007a) < _0x000b;
const _0x006e = document.createElement(_0xstr(121));
_0x006e.style = _0xstr(122) + (_0x006b ? [_0xstr(123)] : _0xstr(124)) + _0xstr(125) + (_0x006b ? [_0xstr(126)] : _0xstr(127)) + _0xstr(128);
_0x006e.innerHTML = _0xstr(129) + (_0x006b ? [_0xstr(130)] : _0xstr(131)) + _0xstr(132) + (_0x0019.name) + _0xstr(133) + (_0x006b ? [_0xstr(134)] : _0xstr(135)) + _0xstr(136) + (_0x006b ? [_0xstr(137)] : _0xstr(138)) + _0xstr(139);
_0x006e.style.cursor = _0xstr(140);
_0x006e.title = _0xstr(141) + (_0x0019.name) + _0xstr(142);
_0x006e.addEventListener(_0xstr(143), () => {
if (typeof GM_openInTab !== _0xstr(144)) {
GM_openInTab(_0x0019.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0019.url, _0xstr(145));
}
});
_0x00be.appendChild(_0x006e);
}
}
const _0x0002 = [_0xstr(146), _0xstr(147), _0xstr(148), _0xstr(149)];
const _0x0006 = 45000;
function _0x0092() {
_0x0059(_0xstr(150));
}
function _0x0059(_0x00ca) {
const now = Date.now();
const _0x0041 = localStorage.getItem(_0xstr(151));
if (_0x0041) {
if (_0x00ca === _0xstr(152)) {
log(_0xstr(153));
_0x0023();
} else {
const _0x00b8 = parseInt(localStorage.getItem(_0xstr(154)) || _0xstr(155));
if ((now - _0x00b8) < 300000) {
return;
}
log(_0xstr(156));
_0x0023();
}
}
const _0x00bf = [];
for (const type of _0x0002) {
if (_0x00ca === _0xstr(157)) {
localStorage.setItem(_0xstr(158) + type, _0xstr(159));
_0x00bf.push(type);
} else {
const _0x007a = parseInt(localStorage.getItem(_0xstr(160) + type) || _0xstr(161));
const _0x005f = _0x007a > 0 && (now - _0x007a) < _0x000b;
if (!_0x005f) {
_0x00bf.push(type);
}
}
}
if (_0x00bf.length === 0) {
if (_0x00ca === _0xstr(162)) log(_0xstr(163));
return;
}
localStorage.removeItem(_0xstr(164));
log(_0xstr(165) + (_0x00bf.length) + _0xstr(166) + (_0x00bf.map(t => _0x000a[t]?.name || t).join(_0xstr(167))) + _0xstr(168));
localStorage.setItem(_0xstr(169), JSON.stringify(_0x00bf));
localStorage.setItem(_0xstr(170), _0x00bf[0]);
localStorage.setItem(_0xstr(171), _0xstr(172));
localStorage.setItem(_0xstr(173), now.toString());
localStorage.setItem(_0xstr(174), now.toString());
const _0x0046 = _0x00bf[0];
const _0x0019 = _0x000a[_0x0046];
localStorage.setItem(_0xstr(175) + _0x0046, now.toString());
const _0x008a = _0x004b();
if (_0x008a === _0x0046) {
log(_0xstr(176) + (_0x0019.name) + _0xstr(177));
window.location.reload();
} else {
log(_0xstr(178) + (_0x0019.name) + _0xstr(179));
if (typeof GM_openInTab !== _0xstr(180)) {
GM_openInTab(_0x0019.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0019.url, _0xstr(181));
}
}
}
function _0x0023() {
localStorage.removeItem(_0xstr(182));
localStorage.removeItem(_0xstr(183));
localStorage.removeItem(_0xstr(184));
localStorage.removeItem(_0xstr(185));
localStorage.removeItem(_0xstr(186));
localStorage.removeItem(_0xstr(187));
}
function _0x0093() {
let _0x00a2;
try {
_0x00a2 = JSON.parse(localStorage.getItem(_0xstr(188)) || _0xstr(189));
} catch(e) {
_0x0023();
return;
}
_0x00a2.shift();
if (_0x00a2.length > 0) {
const _0x008d = _0x00a2[0];
const _0x0019 = _0x000a[_0x008d];
const now = Date.now();
localStorage.setItem(_0xstr(190), JSON.stringify(_0x00a2));
localStorage.setItem(_0xstr(191), _0x008d);
localStorage.setItem(_0xstr(192), _0xstr(193));
localStorage.setItem(_0xstr(194), now.toString());
localStorage.setItem(_0xstr(195) + _0x008d, now.toString());
localStorage.removeItem(_0xstr(196));
const _0x008a = _0x004b();
if (_0x008a === _0x008d) {
log(_0xstr(197) + (_0x0019.name) + _0xstr(198));
window.location.reload();
} else {
log(_0xstr(199) + (_0x0019.name) + _0xstr(200));
if (typeof GM_openInTab !== _0xstr(201)) {
GM_openInTab(_0x0019.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0019.url, _0xstr(202));
}
}
} else {
_0x0023();
log(_0xstr(203));
}
}
function _0x004c() {
const _0x00a3 = localStorage.getItem(_0xstr(204));
if (!_0x00a3) return;
let _0x00a2;
try {
_0x00a2 = JSON.parse(_0x00a3);
} catch(e) {
_0x0023();
return;
}
if (!Array.isArray(_0x00a2) || _0x00a2.length === 0) {
_0x0023();
return;
}
const _0x002d = localStorage.getItem(_0xstr(205));
const _0x008a = _0x004b();
if (!_0x008a || _0x008a !== _0x002d) return;
const _0x009a = localStorage.getItem(_0xstr(206));
if (_0x009a !== _0xstr(207)) return;
const _0x00bd = parseInt(localStorage.getItem(_0xstr(208)) || _0xstr(209));
const now = Date.now();
if (_0x0063()) {
log(_0xstr(210) + (_0x000a[_0x008a]?.name || _0x008a) + _0xstr(211));
_0x007d = Date.now();
_0x0093();
return;
}
if ((now - _0x00bd) > _0x0006) {
const _0x00ac = parseInt(localStorage.getItem(_0xstr(212)) || _0xstr(213));
if (_0x00ac < 1) {
log(_0xstr(214) + (_0x000a[_0x008a]?.name || _0x008a) + _0xstr(215));
localStorage.setItem(_0xstr(216), _0xstr(217));
localStorage.setItem(_0xstr(218), now.toString());
window.location.reload();
} else {
log(_0xstr(219) + (_0x000a[_0x008a]?.name || _0x008a) + _0xstr(220));
localStorage.removeItem(_0xstr(221));
_0x0093();
}
}
}
const _0x0005 = 900000;
function _0x0014() {
if (!_0x0069) return;
if (localStorage.getItem(_0xstr(222)) || localStorage.getItem(_0xstr(223))) return;
const now = Date.now();
let _0x004f = false;
let _0x0051 = false;
let _0x0049 = _0xstr(224);
for (const [type, _0x0019] of Object.entries(_0x000a)) {
const _0x007a = parseInt(localStorage.getItem(_0xstr(225) + type) || _0xstr(226));
const _0x00a8 = localStorage.getItem(_0xstr(227) + type);
const _0x006b = _0x007a > 0 && (now - _0x007a) < _0x000b;
if (!_0x006b) {
const _0x0076 = parseInt(localStorage.getItem(_0xstr(228) + type) || _0xstr(229));
const _0x0077 = now - _0x0076;
if (_0x00a8 && _0x0077 > 60000) {
_0x0051 = true;
_0x0049 = type;
break;
}
if (!_0x00a8) {
if (_0x007a === 0 && _0x0077 > _0x0003) {
_0x004f = true;
break;
}
if (_0x007a > 0 && (now - _0x007a) > _0x0005 && _0x0077 > _0x0005) {
_0x004f = true;
break;
}
}
}
}
if (_0x0051 && _0x0049) {
const _0x0019 = _0x000a[_0x0049];
log(_0xstr(230) + (_0x0019.name) + _0xstr(231));
localStorage.setItem(_0xstr(232) + _0x0049, now.toString());
if (typeof GM_openInTab !== _0xstr(233)) {
GM_openInTab(_0x0019.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x0019.url, _0xstr(234));
}
return;
}
if (_0x004f) {
log(_0xstr(235));
_0x0059(_0xstr(236));
}
}
let wakeLock = null;
let audioCtx = null;
async function _0x00ab() {
if (!(_0xstr(237) in navigator)) {
log(_0xstr(238));
return;
}
try {
wakeLock = await navigator.wakeLock.request(_0xstr(239));
log(_0xstr(240));
} catch (err) {
console.log(_0xstr(241), err.message);
}
}
function _0x00aa() {
if (wakeLock) {
wakeLock.release().then(() => {
wakeLock = null;
log(_0xstr(242));
});
}
}
function _0x00b7() {
try {
if (audioCtx) return;
const AudioContext = window.AudioContext || window.webkitAudioContext;
if (!AudioContext) return;
audioCtx = new AudioContext();
const _0x0095 = audioCtx.createOscillator();
const _0x004a = audioCtx.createGain();
_0x0095.type = _0xstr(243);
_0x0095.frequency.value = 20000;
_0x004a.gain.value = 0.0001;
_0x0095.connect(_0x004a);
_0x004a.connect(audioCtx.destination);
_0x0095.start();
log(_0xstr(244));
} catch (e) {
console.log(_0xstr(245), e.message);
}
}
function _0x001b() {
if (audioCtx && audioCtx.state === _0xstr(246)) {
audioCtx.resume().then(() => {
log(_0xstr(247));
}).catch(() => {});
}
if (audioCtx && audioCtx.state === _0xstr(248)) {
audioCtx = null;
_0x00b7();
log(_0xstr(249));
}
}
function _0x00ba() {
if (audioCtx) {
try {
audioCtx.close().then(() => {
audioCtx = null;
log(_0xstr(250));
});
} catch (e) {
audioCtx = null;
}
}
}
function _0x003c() {
_0x00ab();
_0x00b7();
}
function _0x0038() {
_0x00aa();
_0x00ba();
}
document.addEventListener(_0xstr(251), () => {
if (document.visibilityState === _0xstr(252) && _0x0069) {
_0x00ab();
}
});
_0x0091.addEventListener(_0xstr(253), _0x0092);
_0x00d1();
_0x00d2();
if (_0x0069) {
_0x003c();
const _0x0057 = () => {
if (_0x0069) _0x003c();
document.removeEventListener(_0xstr(254), _0x0057);
};
document.addEventListener(_0xstr(255), _0x0057);
}
_0x003a.addEventListener(_0xstr(256), () => {
_0x00d3.style.display = _0xstr(257);
_0x00d5.style.display = _0xstr(258);
_0x00d4.focus();
});
_0x00af.addEventListener(_0xstr(259), () => {
const _0x005c = _0x00d4.value.trim();
const _0x0098 = _0x0097.value.trim() || _0xstr(260);
if (_0x005c && !_0x005c.includes(_0xstr(261))) {
_0x0012 = _0x005c;
_0x0099 = _0x0098;
localStorage.setItem(_0xstr(262), _0x0012);
localStorage.setItem(_0xstr(263), _0x0099);
GM_setValue(_0xstr(264), _0x0012);
GM_setValue(_0xstr(265), _0x0099);
log(_0xstr(266) + (_0x0099) + _0xstr(267));
_0x00d2();
alert(_0xstr(268));
} else {
alert(_0xstr(269));
}
});
function _0x00c8() {
if (!_0x0012 || _0x0012.includes(_0xstr(270))) {
alert(_0xstr(271));
return;
}
_0x0069 = !_0x0069;
localStorage.setItem(_0xstr(272), _0x0069 ? [_0xstr(273)] : _0xstr(274));
_0x00d1();
log(_0x0069 ? [_0xstr(275)] : _0xstr(276));
if (_0x0069) {
_0x003c();
_0x0092();
} else {
_0x0038();
}
}
_0x00c7.addEventListener(_0xstr(277), _0x00c8);
badge.addEventListener(_0xstr(278), _0x00c8);
_0x0024.addEventListener(_0xstr(279), _0x0027);
launcher.addEventListener(_0xstr(280), _0x0042);
panel.addEventListener(_0xstr(281), _0x00b9);
panel.addEventListener(_0xstr(282), _0x00b9);
panel.addEventListener(_0xstr(283), _0x00b9);
panel.addEventListener(_0xstr(284), _0x00b9);
panel.addEventListener(_0xstr(285), _0x00b4);
function _0x0030(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function _0x0031(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function _0x00b2(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const _0x008b = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(286))?.set;
if (_0x008b) {
_0x008b.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(287), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(288), { bubbles: true }));
await _0x0030(300);
[_0xstr(289), _0xstr(290), _0xstr(291)].forEach(name => {
const ev = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(292), code: _0xstr(293), keyCode: 13, which: 13
});
Object.defineProperty(ev, _0xstr(294), { value: 13 });
Object.defineProperty(ev, _0xstr(295), { value: 13 });
inputEl.dispatchEvent(ev);
});
}
function _0x0017(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let _0x0022 = (_0x0012 || _0xstr(296)).trim();
if (!_0x0022 || _0x0022.includes(_0xstr(297))) {
reject(new Error(_0xstr(298)));
return;
}
let _0x00c2 = _0xstr(299);
if (method === _0xstr(300)) {
_0x00c2 = _0xstr(301) + (_0x0022) + _0xstr(302) + (urlOrAction) + _0xstr(303) + (encodeURIComponent((_0x0099 || _0xstr(304)).trim())) + _0xstr(305);
} else {
_0x00c2 = _0x0022;
}
let isSettled = false;
const timer = setTimeout(() => {
if (!isSettled) {
isSettled = true;
reject(new Error(_0xstr(306) + (timeoutMs/1000) + _0xstr(307) + (urlOrAction) + _0xstr(308) + (attempts) + _0xstr(309)));
}
}, timeoutMs);
let options = {
method: method,
url: _0x00c2,
timeout: timeoutMs,
onload: function(response) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
try {
const res = JSON.parse(response.responseText);
resolve(res);
} catch (e) {
reject(new Error(_0xstr(310) + (e.message) + _0xstr(311) + (response.responseText.substring(0, 120)) + _0xstr(312)));
}
},
onerror: function(err) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(313) + (_0x00c2) + _0xstr(314)));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(_0xstr(315) + (urlOrAction) + _0xstr(316)));
}
};
if (method !== _0xstr(317)) {
options.headers = { [_0xstr(318)]: _0xstr(319) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (_0x0099 || _0xstr(320)).trim() }, data));
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
console.warn(_0xstr(321) + (urlOrAction) + _0xstr(322) + (err.message) + _0xstr(323));
setTimeout(tryCall, 2000);
} else {
reject(err);
}
});
}
tryCall();
});
}
function _0x0043(driverStr) {
if (!driverStr) return _0xstr(324);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function _0x00b6() {
if (!_0x0069 || _0x0065) return;
const hash = window.location.hash || _0xstr(325);
if (!hash.includes(_0xstr(326))) return;
if (!_0x000c(_0xstr(327))) {
return;
}
try {
_0x0065 = true;
_0x0079 = Date.now();
_0x00ce(_0xstr(328));
const data = await _0x0017(_0xstr(329), _0xstr(330));
_0x007d = Date.now();
if (data.status === _0xstr(331)) {
let _0x0026 = [];
if (data.code) {
_0x0026 = data.code.split(_0xstr(332)).map(c => c.trim().toUpperCase()).filter(c => c.length > 0);
} else if (data.codes && Array.isArray(data.codes)) {
_0x0026 = data.codes.map(c => c.trim().toUpperCase());
}
if (_0x0026.length > 0) {
log(_0xstr(333) + (_0x0026.length) + _0xstr(334));
_0x00ce(_0xstr(335));
const _0x00bb = await _0x0040(_0x0026);
if (_0x00bb) {
_0x007d = Date.now();
log(_0xstr(336) + (_0x0026.join(_0xstr(337))) + _0xstr(338));
} else {
log(_0xstr(339));
}
}
}
} catch (error) {
log(_0xstr(340) + (error.message) + _0xstr(341));
} finally {
_0x0065 = false;
_0x00a9(_0xstr(342));
}
}
async function _0x0040(codes) {
const textarea = document.querySelector(_0xstr(343)) || document.querySelector(_0xstr(344));
if (!textarea) {
log(_0xstr(345));
return false;
}
const _0x0028 = codes.join(_0xstr(346));
textarea.value = _0x0028;
textarea.dispatchEvent(new Event(_0xstr(347), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(348), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(349), false, _0x0028);
textarea.dispatchEvent(new Event(_0xstr(350), { bubbles: true }));
} catch (e) {}
await _0x0031(300, 500);
const _0x0029 = Array.from(document.querySelectorAll(_0xstr(351))).find(btn => {
const _0x00cc = btn.innerText || btn.textContent || _0xstr(352);
return _0x00cc.trim().toLowerCase() === _0xstr(353);
});
if (!_0x0029) return false;
_0x0029.click();
let _0x0061 = false;
let _0x0050 = false;
let _0x003e = _0xstr(354);
const _0x00d7 = codes.filter(c => c.startsWith(_0xstr(355)) || c.startsWith(_0xstr(356)) || c.startsWith(_0xstr(357)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let i = 0; i < 40; i++) {
await _0x0030(50);
const _0x000f = Array.from(document.querySelectorAll(_0xstr(358)));
const _0x0048 = _0x000f.find(el => {
const _0x00cc = el.textContent.trim().toUpperCase();
return _0x00d7.some(vc => _0x00cc === vc || _0x00cc.includes(vc));
});
if (_0x0048) {
_0x0061 = true;
}
const _0x0037 = document.querySelectorAll(_0xstr(359));
for (const _0x0032 of _0x0037) {
if (_0x0032.offsetWidth > 0 || _0x0032.offsetHeight > 0) {
const _0x0036 = (_0x0032.innerText || _0x0032.textContent || _0xstr(360));
if (_0x0036.toLowerCase().includes(_0xstr(361)) ||
_0x0036.toLowerCase().includes(_0xstr(362)) ||
_0x0036.toLowerCase().includes(_0xstr(363)) ||
_0x0036.toLowerCase().includes(_0xstr(364)) ||
_0x0036.toLowerCase().includes(_0xstr(365))) {
_0x0050 = true;
_0x003e = _0x0036.trim().replace(/\n/g, _0xstr(366));
const _0x0081 = _0x0036.split(_0xstr(367)).map(l => l.trim().toUpperCase());
const _0x005e = [];
for (const _0x0080 of _0x0081) {
const _0x0087 = _0x0080.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (_0x0087) {
for (const match of _0x0087) {
if (!match.includes(_0xstr(368)) && !match.includes(_0xstr(369)) && !match.includes(_0xstr(370))) {
_0x005e.push(match);
}
}
}
}
const _0x0025 = _0x005e.length > 0 ? _0x005e : codes;
const _0x008e = Array.from(_0x0032.querySelectorAll(_0xstr(371))).find(btn => {
const _0x00cc = (btn.innerText || btn.textContent || _0xstr(372)).trim().toLowerCase();
return _0x00cc === _0xstr(373) || _0x00cc === _0xstr(374) || _0x00cc === _0xstr(375) || _0x00cc === _0xstr(376) || _0x00cc === _0xstr(377) || _0x00cc.includes(_0xstr(378));
});
if (_0x008e) {
const _0x008f = 800 + Math.random() * 200;
setTimeout(() => {
_0x008e.click();
log(_0xstr(379));
}, _0x008f);
log(_0xstr(380) + ((_0x008f/1000).toFixed(2)) + _0xstr(381));
}
for (const _0x003d of _0x0025) {
_0x0017(_0xstr(382), _0xstr(383), { code: _0x003d, status: _0xstr(384) })
.then(() => {
log(_0xstr(385) + (_0x003d) + _0xstr(386));
})
.catch(e => {
log(_0xstr(387) + (_0x003d) + _0xstr(388) + (e.message) + _0xstr(389));
});
}
break;
}
}
}
if (_0x0061 && !_0x0050) {
break;
}
if (_0x0050) break;
}
if (_0x0050 && !_0x0061) {
return false;
}
if (!_0x0061) {
log(_0xstr(390));
return false;
}
const _0x009b = Array.from(document.querySelectorAll(_0xstr(391))).find(el => {
const _0x00cc = el.innerText || el.textContent || _0xstr(392);
return _0x00cc.trim() === _0xstr(393);
});
if (!_0x009b) return false;
await _0x0031(400, 500);
_0x009b.click();
let _0x0062 = false;
let _0x0035 = null;
for (let i = 0; i < 20; i++) {
await _0x0030(50);
const _0x0037 = document.querySelectorAll(_0xstr(394));
for (const _0x0032 of _0x0037) {
if (_0x0032.offsetWidth > 0 || _0x0032.offsetHeight > 0) {
_0x0035 = Array.from(_0x0032.querySelectorAll(_0xstr(395))).find(btn => {
const _0x00cc = btn.innerText || btn.textContent || _0xstr(396);
return _0x00cc.trim() === _0xstr(397);
});
if (_0x0035) {
_0x0062 = true;
break;
}
}
}
if (_0x0062) break;
}
if (_0x0035) {
await _0x0031(100, 200);
_0x0035.click();
await _0x0030(500);
return true;
}
return false;
}
async function _0x009e() {
if (!_0x0069 || _0x0067) return;
_0x0067 = true;
_0x0075 = Date.now();
_0x007d = Date.now();
log(_0xstr(398));
try {
const now = Date.now();
if (now - _0x007c > 2000) {
let _0x00b0 = Array.from(document.querySelectorAll(_0xstr(399))).find(btn => {
const text = btn.innerText.trim();
return text === _0xstr(400) || text === _0xstr(401);
});
if (_0x00b0) {
_0x00b0.click();
_0x007c = now;
await _0x0030(300);
}
}
if (_0x0082.size === 0 || (now - _0x007e) > 60000) {
try {
const res = await _0x0017(_0xstr(402), _0xstr(403));
if (res.status === _0xstr(404) && Array.isArray(res.data)) {
_0x0082 = new Set(res.data.map(to => to.toLowerCase()));
_0x007e = now;
log(_0xstr(405) + (_0x0082.size) + _0xstr(406));
}
} catch (e) {
log(_0xstr(407) + (e.message) + _0xstr(408));
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(409)));
let _0x00c5 = -1;
let _0x0090 = -1;
let _0x00a0 = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(410)) || text.includes(_0xstr(411)) || text.includes(_0xstr(412)) || text.includes(_0xstr(413))) {
_0x00c5 = index;
} else if (text.includes(_0xstr(414)) || text.includes(_0xstr(415)) || text.includes(_0xstr(416)) || text.includes(_0xstr(417))) {
_0x0090 = index;
} else if (text.includes(_0xstr(418)) || text.includes(_0xstr(419)) || text.includes(_0xstr(420)) || text.includes(_0xstr(421))) {
_0x00a0 = index;
}
});
const _0x00ae = document.querySelectorAll(_0xstr(422));
for (let _0x00ad of _0x00ae) {
const _0x0018 = _0x00ad.querySelectorAll(_0xstr(423));
if (_0x0018.length > 0) {
let toNum = _0xstr(424);
let _0x0094 = _0xstr(425);
let _0x00a1 = -1;
if (_0x00c5 !== -1 && _0x0018[_0x00c5]) toNum = _0x0018[_0x00c5].innerText.trim();
if (_0x0090 !== -1 && _0x0018[_0x0090]) _0x0094 = _0x0018[_0x0090].innerText.trim();
if (_0x00a0 !== -1 && _0x0018[_0x00a0]) {
const _0x009f = parseInt(_0x0018[_0x00a0].innerText.trim(), 10);
if (!isNaN(_0x009f)) _0x00a1 = _0x009f;
}
if (!toNum) {
_0x0018.forEach(c => {
const _0x00cc = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/i.test(_0x00cc)) toNum = _0x00cc;
});
}
if (!_0x0094) {
_0x0018.forEach(c => {
const _0x00cc = c.innerText.trim();
if (_0x00cc.includes(_0xstr(426))) _0x0094 = _0x00cc;
});
}
if (_0x00a1 === -1) {
_0x0018.forEach((c, idx) => {
const _0x00cc = c.innerText.trim();
if (/^\d+$/.test(_0x00cc) && idx > 0 && idx !== _0x00c5) {
const _0x009f = parseInt(_0x00cc, 10);
if (_0x009f > 0) _0x00a1 = _0x009f;
}
});
}
if (toNum && _0x0094 && _0x00a1 > 0) {
const _0x006a = _0x0094.toLowerCase() === _0xstr(427);
if (!_0x006a && !_0x0082.has(toNum.toLowerCase())) {
_0x0082.add(toNum.toLowerCase());
try {
const _0x000e = await _0x0017(_0xstr(428), _0xstr(429), { toNum: toNum });
if (_0x000e.status === _0xstr(430)) {
log(_0xstr(431) + (toNum) + _0xstr(432) + (_0x0094) + _0xstr(433) + (_0x00a1) + _0xstr(434));
_0x007d = Date.now();
} else if (_0x000e.status === _0xstr(435)) {
log(_0xstr(436) + (toNum) + _0xstr(437));
} else {
log(_0xstr(438) + (toNum) + _0xstr(439) + (JSON.stringify(_0x000e)) + _0xstr(440));
}
} catch (err) {
_0x0082.delete(toNum.toLowerCase());
log(_0xstr(441) + (toNum) + _0xstr(442) + (err.message) + _0xstr(443));
}
}
}
}
}
} catch (error) {
log(_0xstr(444) + (error.message) + _0xstr(445));
} finally {
_0x0067 = false;
}
}
async function _0x009d() {
if (!_0x0069 || _0x0068) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(446))) return;
if (!_0x000c(_0xstr(447))) {
return;
}
try {
_0x0068 = true;
_0x0078 = Date.now();
_0x00ce(_0xstr(448));
const res = await _0x0017(_0xstr(449), _0xstr(450));
if (res.status === _0xstr(451) && res.toNum) {
const _0x002c = res.toNum;
log(_0xstr(452) + (_0x002c) + _0xstr(453));
let _0x00c6 = null;
const _0x0070 = document.querySelectorAll(_0xstr(454));
let _0x00c1 = null;
for (let el of _0x0070) {
const text = el.innerText.trim().toLowerCase();
if (text === _0xstr(455) || text === _0xstr(456) || text === _0xstr(457) || text === _0xstr(458)) {
_0x00c1 = el;
break;
}
}
if (_0x00c1) {
let parent = _0x00c1.parentElement;
for (let i = 0; i < 3 && parent; i++) {
_0x00c6 = parent.querySelector(_0xstr(459));
if (_0x00c6) break;
parent = parent.parentElement;
}
}
if (!_0x00c6) {
const _0x0011 = document.querySelectorAll(_0xstr(460));
for (let input of _0x0011) {
const placeholder = (input.placeholder || _0xstr(461)).toLowerCase();
if (placeholder.includes(_0xstr(462)) || placeholder.includes(_0xstr(463)) || placeholder.includes(_0xstr(464)) || placeholder.includes(_0xstr(465))) {
_0x00c6 = input;
break;
}
}
}
if (!_0x00c6) {
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(466)));
_0x00c6 = _0x0011.find(input => {
const type = (input.type || _0xstr(467)).toLowerCase();
const _0x006c = type === _0xstr(468) || type === _0xstr(469) || type === _0xstr(470);
const _0x006d = input.style.display !== _0xstr(471) && input.style.visibility !== _0xstr(472);
return _0x006c && _0x006d;
});
}
if (_0x00c6) {
log(_0xstr(473) + (_0x002c) + _0xstr(474));
await _0x00b2(_0x00c6, _0x002c);
await _0x0030(100);
_0x00ce(_0xstr(475));
const _0x009c = await _0x00cb(_0x002c);
if (_0x009c) {
log(_0xstr(476) + (_0x002c) + _0xstr(477));
_0x007d = Date.now();
try {
await _0x0017(_0xstr(478), _0xstr(479), { toNum: _0x002c });
log(_0xstr(480) + (_0x002c) + _0xstr(481));
} catch (markErr) {
log(_0xstr(482) + (_0x002c) + _0xstr(483) + (markErr.message) + _0xstr(484));
}
} else {
log(_0xstr(485) + (_0x002c) + _0xstr(486));
}
} else {
log(_0xstr(487));
}
} else {
}
} catch (error) {
log(_0xstr(488) + (error.message) + _0xstr(489));
} finally {
_0x0068 = false;
_0x00a9(_0xstr(490));
}
}
function _0x00cb(_0x002c) {
return new Promise((resolve) => {
let _0x001d = 0;
let _0x0020 = setInterval(() => {
_0x001d++;
let _0x009b = null;
const _0x0016 = document.querySelectorAll(_0xstr(491));
for (let btn of _0x0016) {
const text = btn.innerText.trim();
if (text === _0xstr(492) || text === _0xstr(493) || text === _0xstr(494) || text.includes(_0xstr(495))) {
_0x009b = btn;
break;
}
}
if (!_0x009b) {
const _0x003b = document.querySelectorAll(_0xstr(496));
for (let el of _0x003b) {
const text = el.innerText.trim();
if (text === _0xstr(497) || text === _0xstr(498) || text === _0xstr(499) || text.includes(_0xstr(500))) {
_0x009b = el.closest(_0xstr(501)) || el;
break;
}
}
}
if (_0x009b && !_0x009b.disabled && !_0x009b.classList.contains(_0xstr(502))) {
clearInterval(_0x0020);
log(_0xstr(503));
_0x009b.click();
setTimeout(() => {
log(_0xstr(504) + (_0x002c) + _0xstr(505));
resolve(true);
}, 800);
} else if (_0x001d > 20) {
clearInterval(_0x0020);
resolve(false);
}
}, 150);
});
}
async function _0x00b5() {
if (!_0x0069 || _0x0066) return;
const hash = window.location.hash || _0xstr(506);
if (!hash.includes(_0xstr(507))) return;
if (!_0x000c(_0xstr(508))) {
return;
}
try {
_0x0066 = true;
_0x0073 = Date.now();
_0x00ce(_0xstr(509));
const data = await _0x0017(_0xstr(510), _0xstr(511));
if (data.status === _0xstr(512)) {
const pupCode = data.pupCode;
const _0x00a4 = data.recipientDriver;
const recipientDriver = _0x0043(_0x00a4);
const now = Date.now();
if (pupCode === _0x0072 && (now - _0x0074) < 30000) {
log(_0xstr(513) + (pupCode) + _0xstr(514));
_0x0066 = false;
_0x00a9(_0xstr(515));
return;
}
log(_0xstr(516) + (pupCode) + _0xstr(517) + (recipientDriver) + _0xstr(518) + (_0x00a4) + _0xstr(519));
_0x00ce(_0xstr(520));
const _0x00bb = await _0x003f(pupCode, recipientDriver);
if (_0x00bb) {
_0x0072 = pupCode;
_0x0074 = Date.now();
log(_0xstr(521) + (pupCode) + _0xstr(522) + (recipientDriver) + _0xstr(523));
try {
await _0x0017(_0xstr(524), _0xstr(525), { pupCode: pupCode, status: _0xstr(526) });
log(_0xstr(527) + (pupCode) + _0xstr(528));
} catch (err) {
log(_0xstr(529) + (pupCode) + _0xstr(530) + (err.message) + _0xstr(531));
}
} else {
log(_0xstr(532));
try {
await _0x0017(_0xstr(533), _0xstr(534), { pupCode: pupCode, status: _0xstr(535) });
log(_0xstr(536) + (pupCode) + _0xstr(537));
} catch (err) {
log(_0xstr(538) + (pupCode) + _0xstr(539) + (err.message) + _0xstr(540));
}
}
}
} catch (error) {
log(_0xstr(541) + (error.message) + _0xstr(542));
} finally {
_0x0066 = false;
_0x00a9(_0xstr(543));
}
}
async function _0x003f(pupCode, recipientDriver) {
let _0x0045 = null;
const _0x0047 = document.querySelectorAll(_0xstr(544));
for (let _0x006e of _0x0047) {
const _0x006f = _0x006e.querySelector(_0xstr(545));
if (_0x006f) {
const _0x0071 = (_0x006f.innerText || _0x006f.textContent || _0xstr(546)).trim().toLowerCase();
if (_0x0071.includes(_0xstr(547)) || _0x0071.includes(_0xstr(548)) || _0x0071 === _0xstr(549)) {
_0x0045 = _0x006e.querySelector(_0xstr(550));
if (_0x0045) break;
}
}
}
if (!_0x0045) {
const _0x0011 = document.querySelectorAll(_0xstr(551));
for (let input of _0x0011) {
const placeholder = input.placeholder || _0xstr(552);
if (placeholder.toLowerCase().includes(_0xstr(553)) || placeholder.toLowerCase().includes(_0xstr(554))) {
_0x0045 = input;
break;
}
}
}
if (!_0x0045) {
log(_0xstr(555));
return false;
}
await _0x00b2(_0x0045, pupCode);
await _0x0030(300);
let _0x00b0 = Array.from(document.querySelectorAll(_0xstr(556))).find(btn => {
const _0x00cc = btn.innerText || btn.textContent || _0xstr(557);
return _0x00cc.trim() === _0xstr(558) || _0x00cc.trim() === _0xstr(559);
});
if (_0x00b0) {
_0x00b0.click();
log(_0xstr(560) + pupCode);
} else {
_0x0045.dispatchEvent(new KeyboardEvent(_0xstr(561), { key: _0xstr(562), code: _0xstr(563), keyCode: 13, which: 13, bubbles: true }));
}
await _0x0030(2000);
_0x00ce(_0xstr(564));
const _0x00ae = Array.from(document.querySelectorAll(_0xstr(565)));
let _0x00a6 = false;
for (let _0x00ad of _0x00ae) {
const _0x00a5 = Array.from(_0x00ad.querySelectorAll(_0xstr(566))).find(el => {
const _0x00cc = el.innerText || el.textContent || _0xstr(567);
return _0x00cc.trim() === _0xstr(568) || _0x00cc.trim() === _0xstr(569) || _0x00cc.trim() === _0xstr(570);
});
if (_0x00a5) {
log(_0xstr(571));
_0x00a5.click();
await _0x0030(2500);
_0x00ce(_0xstr(572));
const _0x0037 = document.querySelectorAll(_0xstr(573));
let _0x00c0 = null;
for (const _0x0032 of _0x0037) {
if (_0x0032.offsetWidth > 0 || _0x0032.offsetHeight > 0) {
const text = (_0x0032.innerText || _0x0032.textContent || _0xstr(574));
if (text.includes(_0xstr(575)) || text.includes(_0xstr(576)) || text.includes(_0xstr(577)) || text.includes(_0xstr(578))) {
_0x00c0 = _0x0032;
break;
}
}
}
if (_0x00c0) {
let _0x0039 = null;
const _0x0047 = _0x00c0.querySelectorAll(_0xstr(579));
for (let _0x006e of _0x0047) {
const _0x006f = _0x006e.querySelector(_0xstr(580));
if (_0x006f) {
const _0x0071 = (_0x006f.innerText || _0x006f.textContent || _0xstr(581)).trim().toLowerCase();
if (_0x0071.includes(_0xstr(582)) || _0x0071.includes(_0xstr(583))) {
_0x0039 = _0x006e.querySelector(_0xstr(584));
if (_0x0039) break;
}
}
}
if (!_0x0039) {
const _0x0034 = _0x00c0.querySelectorAll(_0xstr(585));
for (let _0x005b of _0x0034) {
const ph = _0x005b.placeholder || _0xstr(586);
if (ph.toLowerCase().includes(_0xstr(587)) || ph.toLowerCase().includes(_0xstr(588)) || ph.toLowerCase().includes(_0xstr(589))) {
_0x0039 = _0x005b;
break;
}
}
}
if (_0x0039) {
const _0x00b1 = _0x0039.closest(_0xstr(590)) || _0x0039.parentElement;
if (_0x00b1) {
_0x00b1.click();
} else {
_0x0039.removeAttribute(_0xstr(591));
_0x0039.click();
}
log(_0xstr(592));
await _0x0030(2200);
_0x00ce(_0xstr(593));
let _0x000d = document.activeElement;
if (!_0x000d || _0x000d.tagName !== _0xstr(594) || !_0x00c0.contains(_0x000d)) {
_0x000d = _0x0039;
}
_0x000d.removeAttribute(_0xstr(595));
_0x000d.focus();
if (typeof _0x000d.select === _0xstr(596)) _0x000d.select();
_0x000d.value = _0xstr(597);
_0x000d.dispatchEvent(new Event(_0xstr(598), { bubbles: true }));
try {
document.execCommand(_0xstr(599), false, recipientDriver);
} catch (e) {}
if (_0x000d.value !== recipientDriver) {
_0x000d.value = recipientDriver;
}
_0x000d.dispatchEvent(new Event(_0xstr(600), { bubbles: true }));
_0x000d.dispatchEvent(new Event(_0xstr(601), { bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(602), { key: _0xstr(603), bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(604), { key: _0xstr(605), bubbles: true }));
log(_0xstr(606) + recipientDriver + _0xstr(607));
await _0x0030(2500);
const _0x0010 = Array.from(document.querySelectorAll(_0xstr(608)));
let _0x0086 = _0x0010.find(el => {
const text = (el.innerText || el.textContent || _0xstr(609)).trim();
return text.includes(recipientDriver) &&
(el.offsetWidth > 0 || el.offsetHeight > 0) &&
(el.classList.contains(_0xstr(610)) ||
el.closest(_0xstr(611)) ||
el.closest(_0xstr(612)) ||
el.tagName === _0xstr(613));
});
if (!_0x0086) {
_0x0086 = _0x0010.find(el => {
const text = (el.innerText || el.textContent || _0xstr(614)).trim();
return text.includes(recipientDriver) &&
(el.closest(_0xstr(615)) || el.closest(_0xstr(616)) || el.tagName === _0xstr(617));
});
}
if (!_0x0086) {
_0x0086 = _0x0010.find(el => {
const text = (el.innerText || el.textContent || _0xstr(618)).trim();
return text.includes(recipientDriver);
});
}
if (_0x0086) {
_0x0086.click();
log(_0xstr(619) + (_0x0086.innerText || _0x0086.textContent).trim());
await _0x0030(1200);
const _0x0033 = Array.from(_0x00c0.querySelectorAll(_0xstr(620))).find(btn => {
const _0x00cc = btn.innerText || btn.textContent || _0xstr(621);
return _0x00cc.trim() === _0xstr(622) || _0x00cc.trim() === _0xstr(623) || _0x00cc.trim() === _0xstr(624);
});
if (_0x0033) {
_0x0033.click();
log(_0xstr(625));
_0x00a6 = true;
await _0x0030(1500);
break;
} else {
log(_0xstr(626));
}
} else {
log(_0xstr(627) + recipientDriver);
}
} else {
log(_0xstr(628));
}
} else {
log(_0xstr(629));
}
}
}
return _0x00a6;
}
function _0x001a() {
const now = Date.now();
if (_0x0065 && _0x0079 > 0 && (now - _0x0079) > _0x0009) {
log(_0xstr(630));
_0x0065 = false;
_0x00a9(_0xstr(631));
_0x0079 = 0;
}
if (_0x0067 && _0x0075 > 0 && (now - _0x0075) > _0x0009) {
log(_0xstr(632));
_0x0067 = false;
_0x00a9(_0xstr(633));
_0x0075 = 0;
}
if (_0x0068 && _0x0078 > 0 && (now - _0x0078) > _0x0009) {
log(_0xstr(634));
_0x0068 = false;
_0x00a9(_0xstr(635));
_0x0078 = 0;
}
if (_0x0066 && _0x0073 > 0 && (now - _0x0073) > _0x0009) {
log(_0xstr(636));
_0x0066 = false;
_0x00a9(_0xstr(637));
_0x0073 = 0;
}
}
function _0x0021() {
const href = window.location.href;
if (href.includes(_0xstr(638)) || href.includes(_0xstr(639))) {
log(_0xstr(640));
window.location.reload();
return false;
}
return true;
}
const _0x0008 = 60000;
const _0x0007 = 300000;
function _0x0063() {
const hash = window.location.hash || _0xstr(641);
const href = window.location.href;
if (href.includes(_0xstr(642)) || href.includes(_0xstr(643))) return false;
const _0x00b3 = document.querySelectorAll(_0xstr(644));
for (const sp of _0x00b3) {
if (sp.offsetWidth > 0 || sp.offsetHeight > 0) {
const style = window.getComputedStyle(sp);
if (style.display !== _0xstr(645) && style.visibility !== _0xstr(646) && style.opacity !== _0xstr(647)) {
return false;
}
}
}
if (hash.includes(_0xstr(648))) {
const textarea = document.querySelector(_0xstr(649)) || document.querySelector(_0xstr(650));
if (!textarea) return false;
const style = window.getComputedStyle(textarea);
return textarea.offsetWidth > 0 && style.display !== _0xstr(651) && style.visibility !== _0xstr(652);
}
if (hash.includes(_0xstr(653))) {
const _0x0016 = Array.from(document.querySelectorAll(_0xstr(654)));
const _0x0053 = _0x0016.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(655)).trim().toLowerCase();
const style = window.getComputedStyle(btn);
const _0x006d = btn.offsetWidth > 0 && style.display !== _0xstr(656) && style.visibility !== _0xstr(657);
return _0x006d && (text.includes(_0xstr(658)) || text.includes(_0xstr(659)));
});
const _0x0054 = document.querySelectorAll(_0xstr(660)).length > 0;
return _0x0053 && _0x0054;
}
if (hash.includes(_0xstr(661))) {
const _0x005d = Array.from(document.querySelectorAll(_0xstr(662)));
const _0x0056 = _0x005d.some(input => {
const type = (input.type || _0xstr(663)).toLowerCase();
const style = window.getComputedStyle(input);
const _0x006c = type === _0xstr(664) || type === _0xstr(665) || type === _0xstr(666);
return _0x006c && input.offsetWidth > 0 && style.display !== _0xstr(667) && style.visibility !== _0xstr(668);
});
return _0x0056;
}
if (hash.includes(_0xstr(669))) {
const _0x005d = Array.from(document.querySelectorAll(_0xstr(670)));
const _0x0052 = _0x005d.some(input => {
const style = window.getComputedStyle(input);
return input.offsetWidth > 0 && style.display !== _0xstr(671) && style.visibility !== _0xstr(672);
});
const _0x0016 = Array.from(document.querySelectorAll(_0xstr(673)));
const _0x004e = _0x0016.some(btn => {
const style = window.getComputedStyle(btn);
return btn.offsetWidth > 0 && style.display !== _0xstr(674) && style.visibility !== _0xstr(675);
});
return _0x0052 && _0x004e;
}
return false;
}
function _0x005a() {
const now = Date.now();
log(_0xstr(676));
for (const type of _0x0002) {
localStorage.setItem(_0xstr(677) + type, _0xstr(678));
}
setTimeout(() => {
log(_0xstr(679));
_0x0059(_0xstr(680));
}, 2500);
_0x007d = now;
}
function _0x001c() {
const _0x008a = _0x004b();
if (_0x008a) {
const _0x00ca = localStorage.getItem(_0xstr(681) + _0x008a);
if (_0x00ca === _0xstr(682)) {
localStorage.removeItem(_0xstr(683) + _0x008a);
log(_0xstr(684));
localStorage.setItem(_0xstr(685) + _0x008a, _0xstr(686));
localStorage.removeItem(_0xstr(687) + _0x008a);
window.close();
}
}
}
function _0x001f() {
const now = Date.now();
if (localStorage.getItem(_0xstr(688)) || localStorage.getItem(_0xstr(689))) return;
const _0x0060 = !_0x0065 && !_0x0067 && !_0x0068 && !_0x0066;
if (_0x0060 && (now - _0x007d) > _0x0001) {
_0x005a();
}
}
let _0x0089 = 0;
function _0x0088() {
_0x00cf();
_0x00d0();
_0x001c();
_0x0012 = localStorage.getItem(_0xstr(690)) || GM_getValue(_0xstr(691), _0x0000);
_0x0099 = localStorage.getItem(_0xstr(692)) || GM_getValue(_0xstr(693), _0xstr(694));
_0x0069 = localStorage.getItem(_0xstr(695)) === _0xstr(696);
_0x00d1();
const _0x002f = window.location.href;
const hash = window.location.hash || _0xstr(697);
if (_0x002f !== _0x007f) {
_0x007f = _0x002f;
_0x0067 = false;
_0x0068 = false;
_0x0065 = false;
_0x0066 = false;
}
if (!_0x0069) return;
_0x004c();
_0x0089++;
if (_0x0089 % 75 === 0) {
_0x001a();
_0x001b();
_0x0021();
_0x001f();
_0x0014();
}
if (hash.includes(_0xstr(698))) {
_0x00b6();
}
if (hash.includes(_0xstr(699))) {
_0x009e();
}
if (hash.includes(_0xstr(700))) {
_0x009d();
}
if (hash.includes(_0xstr(701))) {
_0x00b5();
}
}
_0x00cf();
let _0x00d8 = null;
try {
const _0x0015 = new Blob([_0xstr(702)], { type: _0xstr(703) });
const _0x00d9 = URL.createObjectURL(_0x0015);
_0x00d8 = new Worker(_0x00d9);
_0x00d8.onmessage = function(e) {
if (e.data === _0xstr(704)) {
_0x0088();
}
};
log(_0xstr(705));
} catch (err) {
log(_0xstr(706));
function _0x0044() {
_0x0088();
setTimeout(_0x0044, 400);
}
_0x0044();
}
}
if (document.readyState === _0xstr(707)) {
document.addEventListener(_0xstr(708), init);
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
