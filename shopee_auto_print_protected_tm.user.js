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
        'c3R5bGU=',
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
        'cG9pbnRlcg==',
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
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'b3BlbmluZw==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'c2VxX29wZW5fY2hhaW5fc3RhcnQ=',
        'bGFzdF9vcGVuX2F0dGVtcHRf',
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
        'dW5kZWZpbmVk',
        'X2JsYW5r',
        'W03hu58gVGFiXSDinIUgVOG6pXQgY+G6oyBjw6FjIHRhYiDEkcOjIMSRxrDhu6NjIG3hu58gdsOgIHPhurVuIHPDoG5nIGhv4bqhdCDEkeG7mW5nIQ==',
        'c2VxX29wZW5fcXVldWU=',
        'c2VxX29wZW5fY3VycmVudA==',
        'c2VxX29wZW5fcGhhc2U=',
        'b3BlbmluZw==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'MA==',
        'c2VxX29wZW5fcmV0cnk=',
        'MA==',
        'c2VxX29wZW5fcmV0cnk=',
        'MQ==',
        'c2VxX29wZW5fdGFiX3N0YXJ0',
        'c2VxX29wZW5fcmV0cnk=',
        'c2VxX29wZW5fcXVldWU=',
        'c21hcnRfcmVsb2FkX3F1ZXVl',
        '',
        'bGFzdF9wdWxzZV8=',
        'MA==',
        'dGFiX2luc3RhbmNlX2lkXw==',
        'bGFzdF9vcGVuX2F0dGVtcHRf',
        'MA==',
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
        'R0VU',
        'Q29udGVudC1UeXBl',
        'dGV4dC9wbGFpbg==',
        '',
        '',
        '',
        'YXdiUHJpbnQ=',
        'YXdiUHJpbnQ=',
        'YXdiUHJpbnQ=',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmc=',
        'c3VjY2Vzcw==',
        'XG4=',
        'YXdiUHJpbnQ=',
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
        'UE9TVA==',
        'dXBkYXRlX2NvZGVfc3RhdHVz',
        'TcOjIGzhu5dp',
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
        'ZHVwbGljYXRl',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfdG8=',
        'c3VjY2Vzcw==',
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
        'c3RhcnRQYWNrTm9MYWJlbA==',
        'UE9TVA==',
        'bWFya190b19wcmludGVk',
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
        '',
        'cGlja3VwVGFzay9saXN0',
        'cGlja3VwVGFzaw==',
        'cGlja3VwVGFzaw==',
        'UE9TVA==',
        'Z2V0X3BlbmRpbmdfY2h1eWVuX3BpY2s=',
        'c3VjY2Vzcw==',
        'cGlja3VwVGFzaw==',
        'cGlja3VwVGFzaw==',
        'UE9TVA==',
        'dXBkYXRlX2hhbmRvdmVyX3N0YXR1cw==',
        'xJDDoyBjaHV54buDbg==',
        'UE9TVA==',
        'dXBkYXRlX2hhbmRvdmVyX3N0YXR1cw==',
        'VGjhuqV0IGLhuqFp',
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
const _0x1b4a = {
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
function getCurrentTabType() {
const hash = window.location.hash || _0xstr(13);
const path = hash.split(_0xstr(14))[0];
for (const [type, cfg] of Object.entries(_0x1b4a)) {
if (path.includes(cfg.hashKey)) {
return type;
}
}
return null;
}
let tabInstanceId = sessionStorage.getItem(_0xstr(15));
if (!tabInstanceId) {
tabInstanceId = _0xstr(16) + Math.random().toString(36).substring(2, 10) + _0xstr(17) + Date.now();
sessionStorage.setItem(_0xstr(18), tabInstanceId);
}
const initialTabType = getCurrentTabType();
if (initialTabType) {
localStorage.setItem(_0xstr(19) + initialTabType, Date.now().toString());
localStorage.setItem(_0xstr(20) + initialTabType, tabInstanceId);
}
function handleTabClose() {
const currentType = getCurrentTabType();
if (currentType) {
const registeredId = localStorage.getItem(_0xstr(21) + currentType);
if (registeredId === tabInstanceId) {
localStorage.setItem(_0xstr(22) + currentType, _0xstr(23));
localStorage.removeItem(_0xstr(24) + currentType);
}
}
}
window.addEventListener(_0xstr(25), handleTabClose);
window.addEventListener(_0xstr(26), handleTabClose);
function init() {
const isPopupOrPreview = window.opener !== null || window.self !== window.top || window.location.href.includes(_0xstr(27)) || window.location.href.includes(_0xstr(28));
if (isPopupOrPreview) {
return;
}
const _0x2c5b = _0xstr(29);
let apiUrl = localStorage.getItem(_0xstr(30)) || GM_getValue(_0xstr(31), _0x2c5b);
let pcName = localStorage.getItem(_0xstr(32)) || GM_getValue(_0xstr(33), _0xstr(34));
let isRunning = localStorage.getItem(_0xstr(35)) === _0xstr(36);
let isPrintingNow = false;
let isProcessingList = false;
let isProcessingPrint = false;
let isProcessingHandover = false;
let lastHandoverPup = _0xstr(37);
let lastHandoverTime = 0;
let lastUrl = _0xstr(38);
let lastSearchTime = 0;
let localExistingTOs = new Set();
let lastTOFetchTime = 0;
let lastPrintStartTime = 0;
let lastListStartTime = 0;
let lastPrintPageStartTime = 0;
let lastHandoverStartTime = 0;
const STUCK_TIMEOUT = 30000;
let lastSuccessfulAction = Date.now();
const PAGE_RELOAD_INTERVAL = 3600000;
let lastReleaseTime = 0;
function _0x0e3d(tabType) {
const now = Date.now();
if (now - lastReleaseTime < 2000) {
return false;
}
const _0x7f0e = _0xstr(39);
const typeKey = _0xstr(40);
const timeKey = _0xstr(41);
const currentLockType = localStorage.getItem(typeKey);
const lockTime = parseInt(localStorage.getItem(timeKey) || _0xstr(42));
if (!currentLockType || (now - lockTime) > 5000 || currentLockType === tabType) {
localStorage.setItem(_0x7f0e, _0xstr(43));
localStorage.setItem(typeKey, tabType);
localStorage.setItem(timeKey, now.toString());
return true;
}
return false;
}
function _0x1f4e(tabType) {
const _0x7f0e = _0xstr(44);
const typeKey = _0xstr(45);
const timeKey = _0xstr(46);
const currentLockType = localStorage.getItem(typeKey);
if (currentLockType === tabType) {
localStorage.removeItem(_0x7f0e);
localStorage.removeItem(typeKey);
localStorage.removeItem(timeKey);
lastReleaseTime = Date.now();
}
}
function updateGlobalLockHeartbeat(tabType) {
const typeKey = _0xstr(47);
const timeKey = _0xstr(48);
const currentLockType = localStorage.getItem(typeKey);
if (currentLockType === tabType) {
localStorage.setItem(timeKey, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(49), function() {
let newUrl = prompt(_0xstr(50), apiUrl);
if (newUrl) {
apiUrl = newUrl.trim();
localStorage.setItem(_0xstr(51), apiUrl);
GM_setValue(_0xstr(52), apiUrl);
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
let autoCollapseTimeout = null;
function startAutoCollapseTimer() {
stopAutoCollapseTimer();
autoCollapseTimeout = setTimeout(() => {
collapsePanel();
}, 20000);
}
function stopAutoCollapseTimer() {
if (autoCollapseTimeout) {
clearTimeout(autoCollapseTimeout);
autoCollapseTimeout = null;
}
}
function collapsePanel() {
panel.style.display = _0xstr(61);
launcher.style.display = _0xstr(62);
stopAutoCollapseTimer();
}
function expandPanel() {
panel.style.display = _0xstr(63);
launcher.style.display = _0xstr(64);
startAutoCollapseTimer();
}
panel.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-bottom: 1px solid #444; padding-bottom: 8px;">
<strong style="color: #ff5722; font-size: 14px;">Hỗ trợ</strong>
<div style="display: flex; align-items: center; gap: 6px;">
<span id="ap-badge" style="background-color: #777777; color: white; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; text-transform: uppercase; cursor: pointer;">Tắt</span>
<span id="ap-close-btn" style="color: #aaa; cursor: pointer; font-size: 18px; font-weight: bold; padding: 0 4px;">×</span>
</div>
</div>
<div id="ap-content-wrapper">
<div style="margin-bottom: 8px; margin-top: 10px;">
<label style="display: block; margin-bottom: 4px; color: #aaa;">Link Google Web App:</label>
<div id="ap-url-saved-view" style="display: none; align-items: center; justify-content: space-between; background-color: #2a2a35; padding: 6px 10px; border-radius: 4px; border: 1px solid #444;">
<span id="ap-url-status" style="color: #4caf50; font-weight: bold; letter-spacing: 3px;">***</span>
<span id="ap-edit-url-btn" style="cursor: pointer; font-size: 12px;">✏️</span>
</div>
<div id="ap-url-edit-view" style="display: block;">
<input type="text" id="ap-url-input" placeholder="https://script.google.com/macros/s/.../exec" style="width: 93%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;" value="${apiUrl}">
</div>
</div>
<div style="margin-bottom: 10px;">
<label style="display: block; margin-bottom: 4px; color: #aaa;">Tên Máy Tính (PC Name):</label>
<input type="text" id="ap-pc-input" style="width: 93%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;" value="${pcName}">
</div>
<div style="display: flex; gap: 8px; margin-bottom: 10px;">
<button id="ap-save-url" style="flex: 1; padding: 6px; border-radius: 6px; border: none; background-color: #4caf50; color: white; cursor: pointer; font-weight: bold;">Lưu</button>
<button id="ap-toggle-btn" style="flex: 1.5; padding: 6px; border-radius: 6px; border: none; background-color: #2196f3; color: white; cursor: pointer; font-weight: bold;">Bắt đầu chạy</button>
</div>
<div style="margin-bottom: 10px; border-top: 1px solid #444; padding-top: 8px;">
<label style="display: block; margin-bottom: 6px; color: #ff9800; font-weight: bold;">Trạng thái các Tab (Auto-Open):</label>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;" id="ap-tabs-status-container">
<!-- Tab status items will be rendered here dynamically -->
</div>
<button id="ap-open-all-tabs-btn" style="width: 100%; margin-top: 8px; padding: 6px; border-radius: 6px; border: 1px dashed #ff9800; background-color: rgba(255, 152, 0, 0.1); color: #ff9800; cursor: pointer; font-weight: bold; font-size: 11px;">
🚀 Mở tất cả các Tab hoạt động
</button>
</div>
<div style="background-color: #121216; padding: 8px; border-radius: 6px; font-family: monospace; font-size: 11px; max-height: 80px; overflow-y: auto; border: 1px solid #222;" id="ap-log-box">
[Hệ thống] Đang tải...
</div>
</div>
`;
document.body.appendChild(panel);
const transitionStyle = document.createElement(_0xstr(65));
transitionStyle.innerHTML = `
#shopee-auto-print-panel, #shopee-auto-print-launcher {
transition: opacity 0.25s ease-in-out;
}
`;
document.head.appendChild(transitionStyle);
function checkDialogVisibility() {
let hasVisibleDialog = false;
const dialogs = document.querySelectorAll(_0xstr(66));
for (let i = 0; i < dialogs.length; i++) {
const el = dialogs[i];
if (el.id === _0xstr(67) || el.id === _0xstr(68)) continue;
const style = window.getComputedStyle(el);
if (style.display !== _0xstr(69) && style.visibility !== _0xstr(70) && style.opacity !== _0xstr(71) && el.offsetHeight > 0) {
hasVisibleDialog = true;
break;
}
}
if (hasVisibleDialog) {
panel.style.opacity = _0xstr(72);
panel.style.pointerEvents = _0xstr(73);
} else {
if (panel.style.display !== _0xstr(74)) {
panel.style.opacity = _0xstr(75);
panel.style.pointerEvents = _0xstr(76);
}
}
if (launcher.style.display !== _0xstr(77)) {
launcher.style.opacity = _0xstr(78);
launcher.style.pointerEvents = _0xstr(79);
}
}
setInterval(checkDialogVisibility, 300);
const logBox = document.getElementById(_0xstr(80));
const badge = document.getElementById(_0xstr(81));
const toggleBtn = document.getElementById(_0xstr(82));
const urlInput = document.getElementById(_0xstr(83));
const pcInput = document.getElementById(_0xstr(84));
const saveUrlBtn = document.getElementById(_0xstr(85));
const closeBtn = document.getElementById(_0xstr(86));
const contentWrapper = document.getElementById(_0xstr(87));
const urlSavedView = document.getElementById(_0xstr(88));
const urlEditView = document.getElementById(_0xstr(89));
const editUrlBtn = document.getElementById(_0xstr(90));
const urlStatus = document.getElementById(_0xstr(91));
const tabsStatusContainer = document.getElementById(_0xstr(92));
const openAllTabsBtn = document.getElementById(_0xstr(93));
function log(message) {
const time = new Date().toLocaleTimeString();
logBox.innerHTML = `[${time}] ${message}<br>` + logBox.innerHTML;
const lines = logBox.innerHTML.split(_0xstr(94));
if (lines.length > 20) logBox.innerHTML = lines.slice(0, 20).join(_0xstr(95));
}
function updateUIState() {
if (isRunning) {
badge.innerText = _0xstr(96);
badge.style.backgroundColor = _0xstr(97);
toggleBtn.innerText = _0xstr(98);
toggleBtn.style.backgroundColor = _0xstr(99);
} else {
badge.innerText = _0xstr(100);
badge.style.backgroundColor = _0xstr(101);
toggleBtn.innerText = _0xstr(102);
toggleBtn.style.backgroundColor = _0xstr(103);
}
}
function updateUrlView() {
if (apiUrl && apiUrl !== _0x2c5b) {
urlEditView.style.display = _0xstr(104);
urlSavedView.style.display = _0xstr(105);
urlStatus.innerText = _0xstr(106);
} else {
urlEditView.style.display = _0xstr(107);
urlSavedView.style.display = _0xstr(108);
}
}
function updateSelfPulse() {
const currentType = getCurrentTabType();
if (currentType) {
localStorage.setItem(_0xstr(109) + currentType, Date.now().toString());
localStorage.setItem(_0xstr(110) + currentType, tabInstanceId);
}
}
const TAB_ACTIVE_TIMEOUT = 300000;
const REOPEN_COOLDOWN_CLOSED = 30000;
const REOPEN_COOLDOWN_CRASHED = 300000;
function updateTabsStatusUI() {
tabsStatusContainer.innerHTML = _0xstr(111);
const now = Date.now();
for (const [type, cfg] of Object.entries(_0x1b4a)) {
const lastPulse = parseInt(localStorage.getItem(_0xstr(112) + type) || _0xstr(113));
const _0x2a5f = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;
const item = document.createElement(_0xstr(114));
item.style = `display: flex; align-items: center; justify-content: space-between; padding: 4px 6px; border-radius: 4px; background-color: ${_0x2a5f ? 'rgba(76, 175, 80, 0.15)' : 'rgba(244, 67, 54, 0.15)'}; border: 1px solid ${_0x2a5f ? '#4caf50' : '#f44336'}; font-size: 11px;`;
item.innerHTML = `
<span style="font-weight: bold; color: ${_0x2a5f ? '#81c784' : '#e57373'};">${cfg.name}</span>
<span style="font-size: 9px; padding: 1px 4px; border-radius: 3px; background-color: ${_0x2a5f ? '#4caf50' : '#f44336'}; color: white;">
${_0x2a5f ? 'Mở' : 'Tắt'}
</span>
`;
item.style.cursor = _0xstr(115);
item.title = `Bấm để mở tab ${cfg.name}`;
item.addEventListener(_0xstr(116), () => {
if (typeof GM_openInTab !== _0xstr(117)) {
GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
} else {
window.open(cfg.url, _0xstr(118));
}
});
tabsStatusContainer.appendChild(item);
}
}
const RELOAD_ORDER = [_0xstr(119), _0xstr(120), _0xstr(121), _0xstr(122)];
const SEQ_OPEN_TAB_TIMEOUT = 45000;
function openMissingTabs() {
initiateSequentialTabOpen(_0xstr(123));
}
function initiateSequentialTabOpen(trigger) {
const now = Date.now();
const existing = localStorage.getItem(_0xstr(124));
if (existing) {
if (trigger === _0xstr(125)) {
log(_0xstr(126));
clearSeqOpenState();
} else {
const started = parseInt(localStorage.getItem(_0xstr(127)) || _0xstr(128));
if ((now - started) < 300000) {
return;
}
log(_0xstr(129));
clearSeqOpenState();
}
}
const tabsToOpen = [];
for (const type of RELOAD_ORDER) {
if (trigger === _0xstr(130)) {
localStorage.setItem(_0xstr(131) + type, _0xstr(132));
tabsToOpen.push(type);
} else {
const lastPulse = parseInt(localStorage.getItem(_0xstr(133) + type) || _0xstr(134));
const isActive = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;
if (!isActive) {
tabsToOpen.push(type);
}
}
}
if (tabsToOpen.length === 0) {
if (trigger === _0xstr(135)) log(_0xstr(136));
return;
}
localStorage.removeItem(_0xstr(137));
log(`[Mở Tab] ▶ Bắt đầu mở tuần tự ${tabsToOpen.length} tab: ${tabsToOpen.map(t => _0x1b4a[t]?.name || t).join(' → ')}`);
localStorage.setItem(_0xstr(138), JSON.stringify(tabsToOpen));
localStorage.setItem(_0xstr(139), tabsToOpen[0]);
localStorage.setItem(_0xstr(140), _0xstr(141));
localStorage.setItem(_0xstr(142), now.toString());
localStorage.setItem(_0xstr(143), now.toString());
const firstType = tabsToOpen[0];
const cfg = _0x1b4a[firstType];
localStorage.setItem(_0xstr(144) + firstType, now.toString());
const myTabType = getCurrentTabType();
if (myTabType === firstType) {
log(`[Mở Tab] 🔄 Đang ở tab đầu tiên (${cfg.name}) - tiến hành reload...`);
window.location.reload();
} else {
log(`[Mở Tab] 🔄 Đang mở tab: ${cfg.name}...`);
if (typeof GM_openInTab !== _0xstr(145)) {
GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
} else {
window.open(cfg.url, _0xstr(146));
}
}
}
function clearSeqOpenState() {
localStorage.removeItem(_0xstr(147));
localStorage.removeItem(_0xstr(148));
localStorage.removeItem(_0xstr(149));
localStorage.removeItem(_0xstr(150));
localStorage.removeItem(_0xstr(151));
localStorage.removeItem(_0xstr(152));
}
function openNextTabInQueue() {
let queue;
try {
queue = JSON.parse(localStorage.getItem(_0xstr(153)) || _0xstr(154));
} catch(e) {
clearSeqOpenState();
return;
}
queue.shift();
if (queue.length > 0) {
const nextType = queue[0];
const cfg = _0x1b4a[nextType];
const now = Date.now();
localStorage.setItem(_0xstr(155), JSON.stringify(queue));
localStorage.setItem(_0xstr(156), nextType);
localStorage.setItem(_0xstr(157), _0xstr(158));
localStorage.setItem(_0xstr(159), now.toString());
localStorage.setItem(_0xstr(160) + nextType, now.toString());
localStorage.removeItem(_0xstr(161));
const myTabType = getCurrentTabType();
if (myTabType === nextType) {
log(`[Mở Tab] 🔄 Đang ở tab tiếp theo (${cfg.name}) - tiến hành reload...`);
window.location.reload();
} else {
log(`[Mở Tab] ➡ Mở tab tiếp: ${cfg.name}...`);
if (typeof GM_openInTab !== _0xstr(162)) {
GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
} else {
window.open(cfg.url, _0xstr(163));
}
}
} else {
clearSeqOpenState();
log(_0xstr(164));
}
}
function handleSequentialTabOpen() {
const queueStr = localStorage.getItem(_0xstr(165));
if (!queueStr) return;
let queue;
try {
queue = JSON.parse(queueStr);
} catch(e) {
clearSeqOpenState();
return;
}
if (!Array.isArray(queue) || queue.length === 0) {
clearSeqOpenState();
return;
}
const currentTarget = localStorage.getItem(_0xstr(166));
const myTabType = getCurrentTabType();
if (!myTabType || myTabType !== currentTarget) return;
const phase = localStorage.getItem(_0xstr(167));
if (phase !== _0xstr(168)) return;
const tabStart = parseInt(localStorage.getItem(_0xstr(169)) || _0xstr(170));
const now = Date.now();
if (isPageContentFullyLoaded()) {
log(`[Mở Tab] ✓ Tab ${_0x1b4a[myTabType]?.name || myTabType} đã load đầy đủ và sẵn sàng!`);
lastSuccessfulAction = Date.now();
openNextTabInQueue();
return;
}
if ((now - tabStart) > SEQ_OPEN_TAB_TIMEOUT) {
const retryCount = parseInt(localStorage.getItem(_0xstr(171)) || _0xstr(172));
if (retryCount < 1) {
log(`[Mở Tab] ⚠ Tab ${_0x1b4a[myTabType]?.name || myTabType} load quá 45s. Thử reload lại...`);
localStorage.setItem(_0xstr(173), _0xstr(174));
localStorage.setItem(_0xstr(175), now.toString());
window.location.reload();
} else {
log(`[Mở Tab] ✗ Tab ${_0x1b4a[myTabType]?.name || myTabType} không thể load. Bỏ qua...`);
localStorage.removeItem(_0xstr(176));
openNextTabInQueue();
}
}
}
const REOPEN_COOLDOWN_CRASHED_NEW = 900000;
function autoReopenClosedTabs() {
if (!isRunning) return;
if (localStorage.getItem(_0xstr(177)) || localStorage.getItem(_0xstr(178))) return;
const now = Date.now();
let hasDeadTab = false;
let hasFrozenTab = false;
let frozenTabType = _0xstr(179);
for (const [type, cfg] of Object.entries(_0x1b4a)) {
const lastPulse = parseInt(localStorage.getItem(_0xstr(180) + type) || _0xstr(181));
const registeredInstanceId = localStorage.getItem(_0xstr(182) + type);
const _0x2a5f = lastPulse > 0 && (now - lastPulse) < TAB_ACTIVE_TIMEOUT;
if (!_0x2a5f) {
const lastOpenAttempt = parseInt(localStorage.getItem(_0xstr(183) + type) || _0xstr(184));
const lastOpenDiff = now - lastOpenAttempt;
if (registeredInstanceId && lastOpenDiff > 60000) {
hasFrozenTab = true;
frozenTabType = type;
break;
}
if (!registeredInstanceId) {
if (lastPulse === 0 && lastOpenDiff > REOPEN_COOLDOWN_CLOSED) {
hasDeadTab = true;
break;
}
if (lastPulse > 0 && (now - lastPulse) > REOPEN_COOLDOWN_CRASHED_NEW && lastOpenDiff > REOPEN_COOLDOWN_CRASHED_NEW) {
hasDeadTab = true;
break;
}
}
}
}
if (hasFrozenTab && frozenTabType) {
const cfg = _0x1b4a[frozenTabType];
log(`[Hệ thống] Phát hiện tab ${cfg.name} bị đóng băng. Đang kích hoạt (Unfreeze) lại tab...`);
localStorage.setItem(_0xstr(185) + frozenTabType, now.toString());
if (typeof GM_openInTab !== _0xstr(186)) {
GM_openInTab(cfg.url, { active: true, insert: true, setParent: true });
} else {
window.open(cfg.url, _0xstr(187));
}
return;
}
if (hasDeadTab) {
log(_0xstr(188));
initiateSequentialTabOpen(_0xstr(189));
}
}
let _0x8a1f = null;
let _0x9b2a = null;
async function requestWakeLock() {
if (!(_0xstr(190) in navigator)) {
log(_0xstr(191));
return;
}
try {
_0x8a1f = await navigator._0x8a1f.request(_0xstr(192));
log(_0xstr(193));
} catch (err) {
console.log(_0xstr(194), err.message);
}
}
function _0x4c7b() {
if (_0x8a1f) {
_0x8a1f.release().then(() => {
_0x8a1f = null;
log(_0xstr(195));
});
}
}
function startSilentAudio() {
try {
if (_0x9b2a) return;
const AudioContext = window.AudioContext || window.webkitAudioContext;
if (!AudioContext) return;
_0x9b2a = new AudioContext();
const oscillator = _0x9b2a.createOscillator();
const gainNode = _0x9b2a.createGain();
oscillator.type = _0xstr(196);
oscillator.frequency.value = 20000;
gainNode.gain.value = 0.0001;
oscillator.connect(gainNode);
gainNode.connect(_0x9b2a.destination);
oscillator.start();
log(_0xstr(197));
} catch (e) {
console.log(_0xstr(198), e.message);
}
}
function checkAndResumeAudio() {
if (_0x9b2a && _0x9b2a.state === _0xstr(199)) {
_0x9b2a.resume().then(() => {
log(_0xstr(200));
}).catch(() => {});
}
if (_0x9b2a && _0x9b2a.state === _0xstr(201)) {
_0x9b2a = null;
startSilentAudio();
log(_0xstr(202));
}
}
function stopSilentAudio() {
if (_0x9b2a) {
try {
_0x9b2a.close().then(() => {
_0x9b2a = null;
log(_0xstr(203));
});
} catch (e) {
_0x9b2a = null;
}
}
}
function enableAntiSleep() {
requestWakeLock();
startSilentAudio();
}
function disableAntiSleep() {
_0x4c7b();
stopSilentAudio();
}
document.addEventListener(_0xstr(204), () => {
if (document.visibilityState === _0xstr(205) && isRunning) {
requestWakeLock();
}
});
openAllTabsBtn.addEventListener(_0xstr(206), openMissingTabs);
updateUIState();
updateUrlView();
if (isRunning) {
enableAntiSleep();
const initAntiSleepHandler = () => {
if (isRunning) enableAntiSleep();
document.removeEventListener(_0xstr(207), initAntiSleepHandler);
};
document.addEventListener(_0xstr(208), initAntiSleepHandler);
}
editUrlBtn.addEventListener(_0xstr(209), () => {
urlEditView.style.display = _0xstr(210);
urlSavedView.style.display = _0xstr(211);
urlInput.focus();
});
saveUrlBtn.addEventListener(_0xstr(212), () => {
const inputVal = urlInput.value.trim();
const pcInputVal = pcInput.value.trim() || _0xstr(213);
if (inputVal && !inputVal.includes(_0xstr(214))) {
apiUrl = inputVal;
pcName = pcInputVal;
localStorage.setItem(_0xstr(215), apiUrl);
localStorage.setItem(_0xstr(216), pcName);
GM_setValue(_0xstr(217), apiUrl);
GM_setValue(_0xstr(218), pcName);
log(`Đã lưu cấu hình. PC: ${pcName}`);
updateUrlView();
alert(_0xstr(219));
} else {
alert(_0xstr(220));
}
});
function toggleRunningState() {
if (!apiUrl || apiUrl.includes(_0xstr(221))) {
alert(_0xstr(222));
return;
}
isRunning = !isRunning;
localStorage.setItem(_0xstr(223), isRunning ? _0xstr(224) : _0xstr(225));
updateUIState();
log(isRunning ? _0xstr(226) : _0xstr(227));
if (isRunning) {
enableAntiSleep();
openMissingTabs();
} else {
disableAntiSleep();
}
}
toggleBtn.addEventListener(_0xstr(228), toggleRunningState);
badge.addEventListener(_0xstr(229), toggleRunningState);
closeBtn.addEventListener(_0xstr(230), collapsePanel);
launcher.addEventListener(_0xstr(231), expandPanel);
panel.addEventListener(_0xstr(232), stopAutoCollapseTimer);
panel.addEventListener(_0xstr(233), stopAutoCollapseTimer);
panel.addEventListener(_0xstr(234), stopAutoCollapseTimer);
panel.addEventListener(_0xstr(235), stopAutoCollapseTimer);
panel.addEventListener(_0xstr(236), startAutoCollapseTimer);
function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function delayRandom(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function simulateInput(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(237))?.set;
if (nativeInputValueSetter) {
nativeInputValueSetter.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(238), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(239), { bubbles: true }));
await delay(300);
[_0xstr(240), _0xstr(241), _0xstr(242)].forEach(name => {
const ev = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(243), code: _0xstr(244), keyCode: 13, which: 13
});
Object.defineProperty(ev, _0xstr(245), { value: 13 });
Object.defineProperty(ev, _0xstr(246), { value: 13 });
inputEl.dispatchEvent(ev);
});
}
function callGASPromise(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let cleanApiUrl = (apiUrl || _0xstr(247)).trim();
if (!cleanApiUrl || cleanApiUrl.includes(_0xstr(248))) {
reject(new Error(_0xstr(249)));
return;
}
let targetUrl = _0xstr(250);
if (method === _0xstr(251)) {
targetUrl = `${cleanApiUrl}?action=${urlOrAction}&pc=${encodeURIComponent((pcName || "").trim())}`;
} else {
targetUrl = cleanApiUrl;
}
let isSettled = false;
const timer = setTimeout(() => {
if (!isSettled) {
isSettled = true;
reject(new Error(`Hết thời gian chờ (${timeoutMs/1000}s) khi gọi ${urlOrAction} (Lần ${attempts})`));
}
}, timeoutMs);
let options = {
method: method,
url: targetUrl,
timeout: timeoutMs,
onload: function(response) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
try {
const res = JSON.parse(response.responseText);
resolve(res);
} catch (e) {
reject(new Error(`Lỗi parse JSON: ${e.message}. Nội dung phản hồi: ${response.responseText.substring(0, 120)}`));
}
},
onerror: function(err) {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(`Lỗi kết nối mạng đến ${targetUrl}`));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(`GM_xmlhttpRequest timeout khi gọi ${urlOrAction}`));
}
};
if (method !== _0xstr(252)) {
options.headers = { _0xstr(253): _0xstr(254) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (pcName || _0xstr(255)).trim() }, data));
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
console.warn(`API call ${urlOrAction} failed: ${err.message}. Retrying in 2s...`);
setTimeout(tryCall, 2000);
} else {
reject(err);
}
});
}
tryCall();
});
}
function extractDriverCode(driverStr) {
if (!driverStr) return _0xstr(256);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function startPollingLoop() {
if (!isRunning || isPrintingNow) return;
const hash = window.location.hash || _0xstr(257);
if (!hash.includes(_0xstr(258))) return;
if (!_0x0e3d(_0xstr(259))) {
return;
}
try {
isPrintingNow = true;
lastPrintStartTime = Date.now();
updateGlobalLockHeartbeat(_0xstr(260));
const data = await callGASPromise(_0xstr(261), _0xstr(262));
lastSuccessfulAction = Date.now();
if (data.status === _0xstr(263)) {
let codesToPrint = [];
if (data.code) {
codesToPrint = data.code.split(_0xstr(264)).map(c => c.trim().toUpperCase()).filter(c => c.length > 0);
} else if (data.codes && Array.isArray(data.codes)) {
codesToPrint = data.codes.map(c => c.trim().toUpperCase());
}
if (codesToPrint.length > 0) {
log(`Tìm thấy lô gồm ${codesToPrint.length} mã để in.`);
updateGlobalLockHeartbeat(_0xstr(265));
const success = await executePrintJob(codesToPrint);
if (success) {
lastSuccessfulAction = Date.now();
log(`Đã in lô thành công: ${codesToPrint.join(', ')}`);
} else {
log(`Thất bại khi in lô.`);
}
}
}
} catch (error) {
log(`Lỗi in thường: ${error.message}`);
} finally {
isPrintingNow = false;
_0x1f4e(_0xstr(266));
}
}
async function executePrintJob(codes) {
const textarea = document.querySelector(_0xstr(267)) || document.querySelector(_0xstr(268));
if (!textarea) {
log(_0xstr(269));
return false;
}
const combinedText = codes.join(_0xstr(270));
textarea.value = combinedText;
textarea.dispatchEvent(new Event(_0xstr(271), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(272), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(273), false, combinedText);
textarea.dispatchEvent(new Event(_0xstr(274), { bubbles: true }));
} catch (e) {}
await delayRandom(300, 500);
const confirmBtn = Array.from(document.querySelectorAll(_0xstr(275))).find(btn => {
const txt = btn.innerText || btn.textContent || _0xstr(276);
return txt.trim().toLowerCase() === _0xstr(277);
});
if (!confirmBtn) return false;
confirmBtn.click();
let isLoaded = false;
let hasError = false;
let errorMsg = _0xstr(278);
const validCodesInList = codes.filter(c => c.startsWith(_0xstr(279)) || c.startsWith(_0xstr(280)) || c.startsWith(_0xstr(281)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let i = 0; i < 40; i++) {
await delay(50);
const allCells = Array.from(document.querySelectorAll(_0xstr(282)));
const foundValidCode = allCells.find(el => {
const txt = el.textContent.trim().toUpperCase();
return validCodesInList.some(vc => txt === vc || txt.includes(vc));
});
if (foundValidCode) {
isLoaded = true;
}
const dialogs = document.querySelectorAll(_0xstr(283));
for (const dialog of dialogs) {
if (dialog.offsetWidth > 0 || dialog.offsetHeight > 0) {
const dialogText = (dialog.innerText || dialog.textContent || _0xstr(284));
if (dialogText.toLowerCase().includes(_0xstr(285)) ||
dialogText.toLowerCase().includes(_0xstr(286)) ||
dialogText.toLowerCase().includes(_0xstr(287)) ||
dialogText.toLowerCase().includes(_0xstr(288)) ||
dialogText.toLowerCase().includes(_0xstr(289))) {
hasError = true;
errorMsg = dialogText.trim().replace(/\n/g, _0xstr(290));
const lines = dialogText.split(_0xstr(291)).map(l => l.trim().toUpperCase());
const invalidCodes = [];
for (const line of lines) {
const matches = line.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (matches) {
for (const match of matches) {
if (!match.includes(_0xstr(292)) && !match.includes(_0xstr(293)) && !match.includes(_0xstr(294))) {
invalidCodes.push(match);
}
}
}
}
const codesToMarkError = invalidCodes.length > 0 ? invalidCodes : codes;
const okBtn = Array.from(dialog.querySelectorAll(_0xstr(295))).find(btn => {
const txt = (btn.innerText || btn.textContent || _0xstr(296)).trim().toLowerCase();
return txt === _0xstr(297) || txt === _0xstr(298) || txt === _0xstr(299) || txt === _0xstr(300) || txt === _0xstr(301) || txt.includes(_0xstr(302));
});
if (okBtn) {
const okDelay = 800 + Math.random() * 200;
setTimeout(() => {
okBtn.click();
log(`[In Bill] Đã click nút OK đóng cảnh báo.`);
}, okDelay);
log(`[In Bill] Phát hiện dialog lỗi. Đợi ${(okDelay/1000).toFixed(2)} giây để tự động đóng...`);
}
for (const errCode of codesToMarkError) {
callGASPromise(_0xstr(303), _0xstr(304), { code: errCode, status: _0xstr(305) })
.then(() => {
log(`[In Bill] Đã báo cáo thành công mã lỗi: '${errCode}' = 'Mã lỗi'.`);
})
.catch(e => {
log(`[In Bill] Gặp lỗi khi gửi báo cáo cho ${errCode}: ${e.message}`);
});
}
break;
}
}
}
if (isLoaded && !hasError) {
break;
}
if (hasError) break;
}
if (hasError && !isLoaded) {
return false;
}
if (!isLoaded) {
log(_0xstr(306));
return false;
}
const printBtn = Array.from(document.querySelectorAll(_0xstr(307))).find(el => {
const txt = el.innerText || el.textContent || _0xstr(308);
return txt.trim() === _0xstr(309);
});
if (!printBtn) return false;
await delayRandom(400, 500);
printBtn.click();
let isModalOpened = false;
let dialogPrintBtn = null;
for (let i = 0; i < 20; i++) {
await delay(50);
const dialogs = document.querySelectorAll(_0xstr(310));
for (const dialog of dialogs) {
if (dialog.offsetWidth > 0 || dialog.offsetHeight > 0) {
dialogPrintBtn = Array.from(dialog.querySelectorAll(_0xstr(311))).find(btn => {
const txt = btn.innerText || btn.textContent || _0xstr(312);
return txt.trim() === _0xstr(313);
});
if (dialogPrintBtn) {
isModalOpened = true;
break;
}
}
}
if (isModalOpened) break;
}
if (dialogPrintBtn) {
await delayRandom(100, 200);
dialogPrintBtn.click();
await delay(500);
return true;
}
return false;
}
async function processTOListPage() {
if (!isRunning || isProcessingList) return;
isProcessingList = true;
lastListStartTime = Date.now();
lastSuccessfulAction = Date.now();
log(_0xstr(314));
try {
const now = Date.now();
if (now - lastSearchTime > 2000) {
let searchBtn = Array.from(document.querySelectorAll(_0xstr(315))).find(btn => {
const text = btn.innerText.trim();
return text === _0xstr(316) || text === _0xstr(317);
});
if (searchBtn) {
searchBtn.click();
lastSearchTime = now;
await delay(300);
}
}
if (localExistingTOs.size === 0 || (now - lastTOFetchTime) > 60000) {
try {
const res = await callGASPromise(_0xstr(318), _0xstr(319));
if (res.status === _0xstr(320) && Array.isArray(res.data)) {
localExistingTOs = new Set(res.data.map(to => to.toLowerCase()));
lastTOFetchTime = now;
log(`[TO Quét] Đã đồng bộ ${localExistingTOs.size} mã TO đã tồn tại từ Excel.`);
}
} catch (e) {
log(`[TO Quét] Lỗi đồng bộ danh sách TO hiện có: ${e.message}`);
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(321)));
let toColIndex = -1;
let opColIndex = -1;
let qtyColIndex = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(322)) || text.includes(_0xstr(323)) || text.includes(_0xstr(324)) || text.includes(_0xstr(325))) {
toColIndex = index;
} else if (text.includes(_0xstr(326)) || text.includes(_0xstr(327)) || text.includes(_0xstr(328)) || text.includes(_0xstr(329))) {
opColIndex = index;
} else if (text.includes(_0xstr(330)) || text.includes(_0xstr(331)) || text.includes(_0xstr(332)) || text.includes(_0xstr(333))) {
qtyColIndex = index;
}
});
const rows = document.querySelectorAll(_0xstr(334));
for (let row of rows) {
const cells = row.querySelectorAll(_0xstr(335));
if (cells.length > 0) {
let toNum = _0xstr(336);
let operatorText = _0xstr(337);
let quantity = -1;
if (toColIndex !== -1 && cells[toColIndex]) toNum = cells[toColIndex].innerText.trim();
if (opColIndex !== -1 && cells[opColIndex]) operatorText = cells[opColIndex].innerText.trim();
if (qtyColIndex !== -1 && cells[qtyColIndex]) {
const qVal = parseInt(cells[qtyColIndex].innerText.trim(), 10);
if (!isNaN(qVal)) quantity = qVal;
}
if (!toNum) {
cells.forEach(c => {
const txt = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/i.test(txt)) toNum = txt;
});
}
if (!operatorText) {
cells.forEach(c => {
const txt = c.innerText.trim();
if (txt.includes(_0xstr(338))) operatorText = txt;
});
}
if (quantity === -1) {
cells.forEach((c, idx) => {
const txt = c.innerText.trim();
if (/^\d+$/.test(txt) && idx > 0 && idx !== toColIndex) {
const qVal = parseInt(txt, 10);
if (qVal > 0) quantity = qVal;
}
});
}
if (toNum && operatorText && quantity > 0) {
const isSpxShopee = operatorText.toLowerCase() === _0xstr(339);
if (!isSpxShopee && !localExistingTOs.has(toNum.toLowerCase())) {
localExistingTOs.add(toNum.toLowerCase());
try {
const addRes = await callGASPromise(_0xstr(340), _0xstr(341), { toNum: toNum });
if (addRes.status === _0xstr(342)) {
log(`[TO Quét] Đã copy TO mới: ${toNum} (Operator: ${operatorText}, Qty: ${quantity})`);
lastSuccessfulAction = Date.now();
} else if (addRes.status === _0xstr(343)) {
log(`[TO Quét] TO ${toNum} đã tồn tại trên Sheet, bỏ qua.`);
} else {
log(`[TO Quét] API trả về không thành công cho ${toNum}: ${JSON.stringify(addRes)}`);
}
} catch (err) {
localExistingTOs.delete(toNum.toLowerCase());
log(`[TO Quét] Lỗi đồng bộ TO ${toNum}: ${err.message}. Sẽ thử lại.`);
}
}
}
}
}
} catch (error) {
log(`[TO Quét] Lỗi quét danh sách: ${error.message}`);
} finally {
isProcessingList = false;
}
}
async function processPrintPage() {
if (!isRunning || isProcessingPrint) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(344))) return;
if (!_0x0e3d(_0xstr(345))) {
return;
}
try {
isProcessingPrint = true;
lastPrintPageStartTime = Date.now();
updateGlobalLockHeartbeat(_0xstr(346));
const res = await callGASPromise(_0xstr(347), _0xstr(348));
if (res.status === _0xstr(349) && res.toNum) {
const currentTO = res.toNum;
log(`[TO In] Lấy mã TO cần in từ Sheet: ${currentTO}`);
let toInput = null;
const labelElements = document.querySelectorAll(_0xstr(350));
let targetLabel = null;
for (let el of labelElements) {
const text = el.innerText.trim().toLowerCase();
if (text === _0xstr(351) || text === _0xstr(352) || text === _0xstr(353) || text === _0xstr(354)) {
targetLabel = el;
break;
}
}
if (targetLabel) {
let parent = targetLabel.parentElement;
for (let i = 0; i < 3 && parent; i++) {
toInput = parent.querySelector(_0xstr(355));
if (toInput) break;
parent = parent.parentElement;
}
}
if (!toInput) {
const allInputs = document.querySelectorAll(_0xstr(356));
for (let input of allInputs) {
const placeholder = (input.placeholder || _0xstr(357)).toLowerCase();
if (placeholder.includes(_0xstr(358)) || placeholder.includes(_0xstr(359)) || placeholder.includes(_0xstr(360)) || placeholder.includes(_0xstr(361))) {
toInput = input;
break;
}
}
}
if (!toInput) {
const allInputs = Array.from(document.querySelectorAll(_0xstr(362)));
toInput = allInputs.find(input => {
const type = (input.type || _0xstr(363)).toLowerCase();
const isText = type === _0xstr(364) || type === _0xstr(365) || type === _0xstr(366);
const isVisible = input.style.display !== _0xstr(367) && input.style.visibility !== _0xstr(368);
return isText && isVisible;
});
}
if (toInput) {
log(`[TO In] Đang nhập mã TO: ${currentTO} và nhấn Enter...`);
await simulateInput(toInput, currentTO);
await delay(100);
updateGlobalLockHeartbeat(_0xstr(369));
const printSuccess = await triggerPrintLabel(currentTO);
if (printSuccess) {
log(`[TO In] Đã in nhãn thành công cho ${currentTO}`);
lastSuccessfulAction = Date.now();
try {
await callGASPromise(_0xstr(370), _0xstr(371), { toNum: currentTO });
log(`[TO In] Đã đánh dấu '${currentTO}' = Đã In trên Sheet.`);
} catch (markErr) {
log(`[TO In] Cảnh báo: Không đánh dấu được Đã In cho ${currentTO}: ${markErr.message}`);
}
} else {
log(`[TO In] Không bấm được nút in nhãn cho ${currentTO}`);
}
} else {
log(`[TO In] Không tìm thấy ô nhập TO Number trên màn hình!`);
}
} else {
}
} catch (error) {
log(`Lỗi In TO: ${error.message}`);
} finally {
isProcessingPrint = false;
_0x1f4e(_0xstr(372));
}
}
function triggerPrintLabel(currentTO) {
return new Promise((resolve) => {
let checkCount = 0;
let checkPrintInterval = setInterval(() => {
checkCount++;
let printBtn = null;
const buttons = document.querySelectorAll(_0xstr(373));
for (let btn of buttons) {
const text = btn.innerText.trim();
if (text === _0xstr(374) || text === _0xstr(375) || text === _0xstr(376) || text.includes(_0xstr(377))) {
printBtn = btn;
break;
}
}
if (!printBtn) {
const elements = document.querySelectorAll(_0xstr(378));
for (let el of elements) {
const text = el.innerText.trim();
if (text === _0xstr(379) || text === _0xstr(380) || text === _0xstr(381) || text.includes(_0xstr(382))) {
printBtn = el.closest(_0xstr(383)) || el;
break;
}
}
}
if (printBtn && !printBtn.disabled && !printBtn.classList.contains(_0xstr(384))) {
clearInterval(checkPrintInterval);
log(_0xstr(385));
printBtn.click();
setTimeout(() => {
log(`[TO In] Đánh dấu 'Đã in' thành công cho ${currentTO}`);
resolve(true);
}, 800);
} else if (checkCount > 20) {
clearInterval(checkPrintInterval);
resolve(false);
}
}, 150);
});
}
async function _0x6a9f() {
if (!isRunning || isProcessingHandover) return;
const hash = window.location.hash || _0xstr(386);
if (!hash.includes(_0xstr(387))) return;
if (!_0x0e3d(_0xstr(388))) {
return;
}
try {
isProcessingHandover = true;
lastHandoverStartTime = Date.now();
updateGlobalLockHeartbeat(_0xstr(389));
const data = await callGASPromise(_0xstr(390), _0xstr(391));
if (data.status === _0xstr(392)) {
const pupCode = data.pupCode;
const rawDriver = data.recipientDriver;
const recipientDriver = extractDriverCode(rawDriver);
const now = Date.now();
if (pupCode === lastHandoverPup && (now - lastHandoverTime) < 30000) {
log(`PUP ${pupCode} đã được xử lý gần đây (dưới 30s). Bỏ qua thao tác trùng lặp.`);
isProcessingHandover = false;
_0x1f4e(_0xstr(393));
return;
}
log(`Tìm thấy nhiệm vụ Chuyển Pick: PUP=${pupCode}, Nhận=${recipientDriver} (Gốc: ${rawDriver})`);
updateGlobalLockHeartbeat(_0xstr(394));
const success = await executeHandoverJob(pupCode, recipientDriver);
if (success) {
lastHandoverPup = pupCode;
lastHandoverTime = Date.now();
log(`Đã chuyển giao thành công PUP: ${pupCode} cho tài xế ${recipientDriver}`);
try {
await callGASPromise(_0xstr(395), _0xstr(396), { pupCode: pupCode, status: _0xstr(397) });
log(`[Chuyển Pick] Đã ghi nhận trạng thái 'Đã chuyển' cho ${pupCode} vào Sheet.`);
} catch (err) {
log(`[Chuyển Pick] Lỗi đồng bộ trạng thái thành công cho ${pupCode}: ${err.message}`);
}
} else {
log(`Chuyển giao thất bại trên giao diện Shopee.`);
try {
await callGASPromise(_0xstr(398), _0xstr(399), { pupCode: pupCode, status: _0xstr(400) });
log(`[Chuyển Pick] Đã cập nhật trạng thái 'Thất bại' cho ${pupCode} vào Sheet.`);
} catch (err) {
log(`[Chuyển Pick] Lỗi đồng bộ trạng thái thất bại cho ${pupCode}: ${err.message}`);
}
}
}
} catch (error) {
log(`Lỗi Chuyển Pick: ${error.message}`);
} finally {
isProcessingHandover = false;
_0x1f4e(_0xstr(401));
}
}
async function executeHandoverJob(pupCode, recipientDriver) {
let filterInput = null;
const formItems = document.querySelectorAll(_0xstr(402));
for (let item of formItems) {
const label = item.querySelector(_0xstr(403));
if (label) {
const labelText = (label.innerText || label.textContent || _0xstr(404)).trim().toLowerCase();
if (labelText.includes(_0xstr(405)) || labelText.includes(_0xstr(406)) || labelText === _0xstr(407)) {
filterInput = item.querySelector(_0xstr(408));
if (filterInput) break;
}
}
}
if (!filterInput) {
const allInputs = document.querySelectorAll(_0xstr(409));
for (let input of allInputs) {
const placeholder = input.placeholder || _0xstr(410);
if (placeholder.toLowerCase().includes(_0xstr(411)) || placeholder.toLowerCase().includes(_0xstr(412))) {
filterInput = input;
break;
}
}
}
if (!filterInput) {
log(_0xstr(413));
return false;
}
await simulateInput(filterInput, pupCode);
await delay(300);
let searchBtn = Array.from(document.querySelectorAll(_0xstr(414))).find(btn => {
const txt = btn.innerText || btn.textContent || _0xstr(415);
return txt.trim() === _0xstr(416) || txt.trim() === _0xstr(417);
});
if (searchBtn) {
searchBtn.click();
log(_0xstr(418) + pupCode);
} else {
filterInput.dispatchEvent(new KeyboardEvent(_0xstr(419), { key: _0xstr(420), code: _0xstr(421), keyCode: 13, which: 13, bubbles: true }));
}
await delay(2000);
updateGlobalLockHeartbeat(_0xstr(422));
const rows = Array.from(document.querySelectorAll(_0xstr(423)));
let reassignedAny = false;
for (let row of rows) {
const reassignBtn = Array.from(row.querySelectorAll(_0xstr(424))).find(el => {
const txt = el.innerText || el.textContent || _0xstr(425);
return txt.trim() === _0xstr(426) || txt.trim() === _0xstr(427) || txt.trim() === _0xstr(428);
});
if (reassignBtn) {
log(_0xstr(429));
reassignBtn.click();
await delay(2500);
updateGlobalLockHeartbeat(_0xstr(430));
const dialogs = document.querySelectorAll(_0xstr(431));
let targetDialog = null;
for (const dialog of dialogs) {
if (dialog.offsetWidth > 0 || dialog.offsetHeight > 0) {
const text = (dialog.innerText || dialog.textContent || _0xstr(432));
if (text.includes(_0xstr(433)) || text.includes(_0xstr(434)) || text.includes(_0xstr(435)) || text.includes(_0xstr(436))) {
targetDialog = dialog;
break;
}
}
}
if (targetDialog) {
let driverSelectInput = null;
const formItems = targetDialog.querySelectorAll(_0xstr(437));
for (let item of formItems) {
const label = item.querySelector(_0xstr(438));
if (label) {
const labelText = (label.innerText || label.textContent || _0xstr(439)).trim().toLowerCase();
if (labelText.includes(_0xstr(440)) || labelText.includes(_0xstr(441))) {
driverSelectInput = item.querySelector(_0xstr(442));
if (driverSelectInput) break;
}
}
}
if (!driverSelectInput) {
const dialogInputs = targetDialog.querySelectorAll(_0xstr(443));
for (let inp of dialogInputs) {
const ph = inp.placeholder || _0xstr(444);
if (ph.toLowerCase().includes(_0xstr(445)) || ph.toLowerCase().includes(_0xstr(446)) || ph.toLowerCase().includes(_0xstr(447))) {
driverSelectInput = inp;
break;
}
}
}
if (driverSelectInput) {
const selectWrapper = driverSelectInput.closest(_0xstr(448)) || driverSelectInput.parentElement;
if (selectWrapper) {
selectWrapper.click();
} else {
driverSelectInput.removeAttribute(_0xstr(449));
driverSelectInput.click();
}
log(_0xstr(450));
await delay(2200);
updateGlobalLockHeartbeat(_0xstr(451));
let activeInput = document.activeElement;
if (!activeInput || activeInput.tagName !== _0xstr(452) || !targetDialog.contains(activeInput)) {
activeInput = driverSelectInput;
}
activeInput.removeAttribute(_0xstr(453));
activeInput.focus();
if (typeof activeInput.select === _0xstr(454)) activeInput.select();
activeInput.value = _0xstr(455);
activeInput.dispatchEvent(new Event(_0xstr(456), { bubbles: true }));
try {
document.execCommand(_0xstr(457), false, recipientDriver);
} catch (e) {}
if (activeInput.value !== recipientDriver) {
activeInput.value = recipientDriver;
}
activeInput.dispatchEvent(new Event(_0xstr(458), { bubbles: true }));
activeInput.dispatchEvent(new Event(_0xstr(459), { bubbles: true }));
activeInput.dispatchEvent(new KeyboardEvent(_0xstr(460), { key: _0xstr(461), bubbles: true }));
activeInput.dispatchEvent(new KeyboardEvent(_0xstr(462), { key: _0xstr(463), bubbles: true }));
log(_0xstr(464) + recipientDriver + _0xstr(465));
await delay(2500);
const allElements = Array.from(document.querySelectorAll(_0xstr(466)));
let matchedOption = allElements.find(el => {
const text = (el.innerText || el.textContent || _0xstr(467)).trim();
return text.includes(recipientDriver) &&
(el.offsetWidth > 0 || el.offsetHeight > 0) &&
(el.classList.contains(_0xstr(468)) ||
el.closest(_0xstr(469)) ||
el.closest(_0xstr(470)) ||
el.tagName === _0xstr(471));
});
if (!matchedOption) {
matchedOption = allElements.find(el => {
const text = (el.innerText || el.textContent || _0xstr(472)).trim();
return text.includes(recipientDriver) &&
(el.closest(_0xstr(473)) || el.closest(_0xstr(474)) || el.tagName === _0xstr(475));
});
}
if (!matchedOption) {
matchedOption = allElements.find(el => {
const text = (el.innerText || el.textContent || _0xstr(476)).trim();
return text.includes(recipientDriver);
});
}
if (matchedOption) {
matchedOption.click();
log(_0xstr(477) + (matchedOption.innerText || matchedOption.textContent).trim());
await delay(1200);
const dialogConfirmBtn = Array.from(targetDialog.querySelectorAll(_0xstr(478))).find(btn => {
const txt = btn.innerText || btn.textContent || _0xstr(479);
return txt.trim() === _0xstr(480) || txt.trim() === _0xstr(481) || txt.trim() === _0xstr(482);
});
if (dialogConfirmBtn) {
dialogConfirmBtn.click();
log(_0xstr(483));
reassignedAny = true;
await delay(1500);
break;
} else {
log(_0xstr(484));
}
} else {
log(_0xstr(485) + recipientDriver);
}
} else {
log(_0xstr(486));
}
} else {
log(_0xstr(487));
}
}
}
return reassignedAny;
}
function checkAndRecoverStuckFlags() {
const now = Date.now();
if (isPrintingNow && lastPrintStartTime > 0 && (now - lastPrintStartTime) > STUCK_TIMEOUT) {
log(_0xstr(488));
isPrintingNow = false;
_0x1f4e(_0xstr(489));
lastPrintStartTime = 0;
}
if (isProcessingList && lastListStartTime > 0 && (now - lastListStartTime) > STUCK_TIMEOUT) {
log(_0xstr(490));
isProcessingList = false;
_0x1f4e(_0xstr(491));
lastListStartTime = 0;
}
if (isProcessingPrint && lastPrintPageStartTime > 0 && (now - lastPrintPageStartTime) > STUCK_TIMEOUT) {
log(_0xstr(492));
isProcessingPrint = false;
_0x1f4e(_0xstr(493));
lastPrintPageStartTime = 0;
}
if (isProcessingHandover && lastHandoverStartTime > 0 && (now - lastHandoverStartTime) > STUCK_TIMEOUT) {
log(_0xstr(494));
isProcessingHandover = false;
_0x1f4e(_0xstr(495));
lastHandoverStartTime = 0;
}
}
function checkSessionHealth() {
const href = window.location.href;
if (href.includes(_0xstr(496)) || href.includes(_0xstr(497))) {
log(_0xstr(498));
window.location.reload();
return false;
}
return true;
}
const SMART_RELOAD_TAB_TIMEOUT = 60000;
const SMART_RELOAD_CHAIN_TIMEOUT = 300000;
function isPageContentFullyLoaded() {
const hash = window.location.hash || _0xstr(499);
const href = window.location.href;
if (href.includes(_0xstr(500)) || href.includes(_0xstr(501))) return false;
const spinners = document.querySelectorAll(_0xstr(502));
for (const sp of spinners) {
if (sp.offsetWidth > 0 || sp.offsetHeight > 0) {
const style = window.getComputedStyle(sp);
if (style.display !== _0xstr(503) && style.visibility !== _0xstr(504) && style.opacity !== _0xstr(505)) {
return false;
}
}
}
if (hash.includes(_0xstr(506))) {
const textarea = document.querySelector(_0xstr(507)) || document.querySelector(_0xstr(508));
if (!textarea) return false;
const style = window.getComputedStyle(textarea);
return textarea.offsetWidth > 0 && style.display !== _0xstr(509) && style.visibility !== _0xstr(510);
}
if (hash.includes(_0xstr(511))) {
const buttons = Array.from(document.querySelectorAll(_0xstr(512)));
const hasSearchBtn = buttons.some(btn => {
const text = (btn.innerText || btn.textContent || _0xstr(513)).trim().toLowerCase();
const style = window.getComputedStyle(btn);
const isVisible = btn.offsetWidth > 0 && style.display !== _0xstr(514) && style.visibility !== _0xstr(515);
return isVisible && (text.includes(_0xstr(516)) || text.includes(_0xstr(517)));
});
const hasTable = document.querySelectorAll(_0xstr(518)).length > 0;
return hasSearchBtn && hasTable;
}
if (hash.includes(_0xstr(519))) {
const inputs = Array.from(document.querySelectorAll(_0xstr(520)));
const hasVisibleInput = inputs.some(input => {
const type = (input.type || _0xstr(521)).toLowerCase();
const style = window.getComputedStyle(input);
const isText = type === _0xstr(522) || type === _0xstr(523) || type === _0xstr(524);
return isText && input.offsetWidth > 0 && style.display !== _0xstr(525) && style.visibility !== _0xstr(526);
});
return hasVisibleInput;
}
if (hash.includes(_0xstr(527))) {
const inputs = Array.from(document.querySelectorAll(_0xstr(528)));
const hasInput = inputs.some(input => {
const style = window.getComputedStyle(input);
return input.offsetWidth > 0 && style.display !== _0xstr(529) && style.visibility !== _0xstr(530);
});
const buttons = Array.from(document.querySelectorAll(_0xstr(531)));
const hasButton = buttons.some(btn => {
const style = window.getComputedStyle(btn);
return btn.offsetWidth > 0 && style.display !== _0xstr(532) && style.visibility !== _0xstr(533);
});
return hasInput && hasButton;
}
return false;
}
function initiateSmartReload() {
const now = Date.now();
log(_0xstr(534));
for (const type of RELOAD_ORDER) {
localStorage.setItem(_0xstr(535) + type, _0xstr(536));
}
setTimeout(() => {
log(_0xstr(537));
initiateSequentialTabOpen(_0xstr(538));
}, 2500);
lastSuccessfulAction = now;
}
function checkCloseTabTrigger() {
const myTabType = getCurrentTabType();
if (myTabType) {
const trigger = localStorage.getItem(_0xstr(539) + myTabType);
if (trigger === _0xstr(540)) {
localStorage.removeItem(_0xstr(541) + myTabType);
log(`[Hệ thống] Nhận lệnh làm mới tuần tự. Đang đóng tab này...`);
localStorage.setItem(_0xstr(542) + myTabType, _0xstr(543));
localStorage.removeItem(_0xstr(544) + myTabType);
window.close();
}
}
}
function checkPeriodicReload() {
const now = Date.now();
if (localStorage.getItem(_0xstr(545)) || localStorage.getItem(_0xstr(546))) return;
const isIdle = !isPrintingNow && !isProcessingList && !isProcessingPrint && !isProcessingHandover;
if (isIdle && (now - lastSuccessfulAction) > PAGE_RELOAD_INTERVAL) {
initiateSmartReload();
}
}
let monitorCounter = 0;
function monitorApp() {
updateSelfPulse();
updateTabsStatusUI();
checkCloseTabTrigger();
apiUrl = localStorage.getItem(_0xstr(547)) || GM_getValue(_0xstr(548), _0x2c5b);
pcName = localStorage.getItem(_0xstr(549)) || GM_getValue(_0xstr(550), _0xstr(551));
isRunning = localStorage.getItem(_0xstr(552)) === _0xstr(553);
updateUIState();
const currentUrl = window.location.href;
const hash = window.location.hash || _0xstr(554);
if (currentUrl !== lastUrl) {
lastUrl = currentUrl;
isProcessingList = false;
isProcessingPrint = false;
isPrintingNow = false;
isProcessingHandover = false;
}
if (!isRunning) return;
handleSequentialTabOpen();
monitorCounter++;
if (monitorCounter % 75 === 0) {
checkAndRecoverStuckFlags();
checkAndResumeAudio();
checkSessionHealth();
checkPeriodicReload();
autoReopenClosedTabs();
}
if (hash.includes(_0xstr(555))) {
startPollingLoop();
}
if (hash.includes(_0xstr(556))) {
processTOListPage();
}
if (hash.includes(_0xstr(557))) {
processPrintPage();
}
if (hash.includes(_0xstr(558))) {
_0x6a9f();
}
}
updateSelfPulse();
let worker = null;
try {
const blob = new Blob([`
function tick() {
postMessage("pulse");
setTimeout(tick, 400);
}
tick();
`], { type: _0xstr(559) });
const workerUrl = URL.createObjectURL(blob);
worker = new Worker(workerUrl);
worker.onmessage = function(e) {
if (e.data === _0xstr(560)) {
monitorApp();
}
};
log(_0xstr(561));
} catch (err) {
log(_0xstr(562));
function fallbackTick() {
monitorApp();
setTimeout(fallbackTick, 400);
}
fallbackTick();
}
}
if (document.readyState === _0xstr(563)) {
document.addEventListener(_0xstr(564), init);
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
