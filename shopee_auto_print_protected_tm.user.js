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
function _0x0050() {
const hash = window.location.hash || _0xstr(13);
const _0x009e = hash.split(_0xstr(14))[0];
for (const [type, _0x001c] of Object.entries(_0x000a)) {
if (_0x009e.includes(_0x001c.hashKey)) {
return type;
}
}
return null;
}
let _0x00c6 = sessionStorage.getItem(_0xstr(15));
if (!_0x00c6) {
_0x00c6 = _0xstr(16) + Math.random().toString(36).substring(2, 10) + _0xstr(17) + Date.now();
sessionStorage.setItem(_0xstr(18), _0x00c6);
}
const _0x005e = _0x0050();
if (_0x005e) {
localStorage.setItem(_0xstr(19) + _0x005e, Date.now().toString());
localStorage.setItem(_0xstr(20) + _0x005e, _0x00c6);
}
function _0x0052() {
const _0x0031 = _0x0050();
if (_0x0031) {
const _0x00b0 = localStorage.getItem(_0xstr(21) + _0x0031);
if (_0x00b0 === _0x00c6) {
localStorage.setItem(_0xstr(22) + _0x0031, _0xstr(23));
localStorage.removeItem(_0xstr(24) + _0x0031);
}
}
}
window.addEventListener(_0xstr(25), _0x0052);
window.addEventListener(_0xstr(26), _0x0052);
function init() {
const _0x006a = window.opener !== null || window.self !== window.top || window.location.href.includes(_0xstr(27)) || window.location.href.includes(_0xstr(28));
if (_0x006a) {
return;
}
const _0x0000 = _0xstr(29);
let _0x0012 = localStorage.getItem(_0xstr(30)) || GM_getValue(_0xstr(31), _0x0000);
let _0x00a1 = localStorage.getItem(_0xstr(32)) || GM_getValue(_0xstr(33), _0xstr(34));
let _0x006f = localStorage.getItem(_0xstr(35)) === _0xstr(36);
let _0x006b = false;
let _0x006d = false;
let _0x006e = false;
let _0x006c = false;
let _0x0078 = _0xstr(37);
let _0x007a = 0;
let _0x0085 = _0xstr(38);
let _0x0082 = 0;
let _0x0089 = new Set();
let _0x0084 = 0;
let _0x007f = 0;
let _0x007b = 0;
let _0x007e = 0;
let _0x0079 = 0;
const _0x0009 = 30000;
let _0x0083 = Date.now();
const _0x0001 = 3600000;
let _0x0081 = 0;
function _0x000c(tabType) {
const now = Date.now();
if (now - _0x0081 < 2000) {
return false;
}
const _0x008a = _0xstr(39);
const _0x00d8 = _0xstr(40);
const _0x00cf = _0xstr(41);
const _0x002e = localStorage.getItem(_0x00d8);
const _0x008b = parseInt(localStorage.getItem(_0x00cf) || _0xstr(42));
if (!_0x002e || (now - _0x008b) > 5000 || _0x002e === tabType) {
localStorage.setItem(_0x008a, _0xstr(43));
localStorage.setItem(_0x00d8, tabType);
localStorage.setItem(_0x00cf, now.toString());
return true;
}
return false;
}
function _0x00b2(tabType) {
const _0x008a = _0xstr(44);
const _0x00d8 = _0xstr(45);
const _0x00cf = _0xstr(46);
const _0x002e = localStorage.getItem(_0x00d8);
if (_0x002e === tabType) {
localStorage.removeItem(_0x008a);
localStorage.removeItem(_0x00d8);
localStorage.removeItem(_0x00cf);
_0x0081 = Date.now();
}
}
function _0x00d9(tabType) {
const _0x00d8 = _0xstr(47);
const _0x00cf = _0xstr(48);
const _0x002e = localStorage.getItem(_0x00d8);
if (_0x002e === tabType) {
localStorage.setItem(_0x00cf, Date.now().toString());
}
}
GM_registerMenuCommand(_0xstr(49), function() {
let _0x0093 = prompt(_0xstr(50), _0x0012);
if (_0x0093) {
_0x0012 = _0x0093.trim();
localStorage.setItem(_0xstr(51), _0x0012);
GM_setValue(_0xstr(52), _0x0012);
alert(_0xstr(53));
window.location.reload();
}
});
const _0x0086 = document.createElement(_0xstr(54));
_0x0086.id = _0xstr(55);
_0x0086.innerText = _0xstr(56);
_0x0086.style = _0xstr(57);
document.body.appendChild(_0x0086);
const _0x009d = document.createElement(_0xstr(58));
_0x009d.id = _0xstr(59);
_0x009d.style = _0xstr(60);
let _0x0014 = null;
function _0x00be() {
_0x00c3();
_0x0014 = setTimeout(() => {
_0x002a();
}, 20000);
}
function _0x00c3() {
if (_0x0014) {
clearTimeout(_0x0014);
_0x0014 = null;
}
}
function _0x002a() {
_0x009d.style.display = _0xstr(61);
_0x0086.style.display = _0xstr(62);
_0x00c3();
}
function _0x0047() {
_0x009d.style.display = _0xstr(63);
_0x0086.style.display = _0xstr(64);
_0x00be();
}
_0x009d.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-bottom: 1px solid #444; padding-bottom: 8px;">
<strong style="color: #ff5722; font-size: 14px;">Hỗ trợ</strong>
<div style="display: flex; align-items: center; gap: 6px;">
<span id="ap-_0x0016" style="background-color: #777777; color: white; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; text-transform: uppercase; cursor: pointer;">Tắt</span>
<span id="ap-close-_0x0018" style="color: #aaa; cursor: pointer; font-size: 18px; font-weight: bold; padding: 0 4px;">×</span>
</div>
</div>
<div id="ap-content-wrapper">
<div style="margin-bottom: 8px; margin-top: 10px;">
<_0x0075 style="display: block; margin-bottom: 4px; color: #aaa;">Link Google Web App:</_0x0075>
<div id="ap-url-saved-view" style="display: none; align-items: center; justify-content: space-between; background-color: #2a2a35; padding: 6px 10px; border-radius: 4px; border: 1px solid #444;">
<span id="ap-url-status" style="color: #4caf50; font-weight: bold; letter-spacing: 3px;">***</span>
<span id="ap-edit-url-_0x0018" style="cursor: pointer; font-size: 12px;">✏️</span>
</div>
<div id="ap-url-edit-view" style="display: block;">
<input type="text" id="ap-url-input" placeholder="https://script.google.com/macros/s/.../exec" style="width: 93%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;" value="${_0x0012}">
</div>
</div>
<div style="margin-bottom: 10px;">
<_0x0075 style="display: block; margin-bottom: 4px; color: #aaa;">Tên Máy Tính (PC Name):</_0x0075>
<input type="text" id="ap-pc-input" style="width: 93%; padding: 6px; border-radius: 4px; border: 1px solid #555; background-color: #2a2a35; color: white; font-size: 11px;" value="${_0x00a1}">
</div>
<div style="display: flex; gap: 8px; margin-bottom: 10px;">
<button id="ap-save-url" style="flex: 1; padding: 6px; border-radius: 6px; border: none; background-color: #4caf50; color: white; cursor: pointer; font-weight: bold;">Lưu</button>
<button id="ap-toggle-_0x0018" style="flex: 1.5; padding: 6px; border-radius: 6px; border: none; background-color: #2196f3; color: white; cursor: pointer; font-weight: bold;">Bắt đầu chạy</button>
</div>
<div style="margin-bottom: 10px; border-top: 1px solid #444; padding-top: 8px;">
<_0x0075 style="display: block; margin-bottom: 6px; color: #ff9800; font-weight: bold;">Trạng thái các Tab (Auto-Open):</_0x0075>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;" id="ap-tabs-status-container">
<!-- Tab status items will be rendered here dynamically -->
</div>
<button id="ap-open-all-tabs-_0x0018" style="width: 100%; margin-top: 8px; padding: 6px; border-radius: 6px; border: 1px dashed #ff9800; background-color: rgba(255, 152, 0, 0.1); color: #ff9800; cursor: pointer; font-weight: bold; font-size: 11px;">
🚀 Mở tất cả các Tab hoạt động
</button>
</div>
<div style="background-color: #121216; padding: 8px; border-radius: 6px; font-family: monospace; font-size: 11px; max-height: 80px; overflow-y: auto; border: 1px solid #222;" id="ap-log-box">
[Hệ thống] Đang tải...
</div>
</div>
`;
document.body.appendChild(_0x009d);
const _0x00d4 = document.createElement(_0xstr(65));
_0x00d4.innerHTML = `
#shopee-auto-print-_0x009d, #shopee-auto-print-_0x0086 {
transition: opacity 0.25s ease-in-out;
}
`;
document.head.appendChild(_0x00d4);
function _0x0021() {
let _0x005a = false;
const _0x003a = document.querySelectorAll(_0xstr(66));
for (let _0x005c = 0; _0x005c < _0x003a.length; _0x005c++) {
const _0x003e = _0x003a[_0x005c];
if (_0x003e.id === _0xstr(67) || _0x003e.id === _0xstr(68)) continue;
const style = window.getComputedStyle(_0x003e);
if (style.display !== _0xstr(69) && style.visibility !== _0xstr(70) && style.opacity !== _0xstr(71) && _0x003e.offsetHeight > 0) {
_0x005a = true;
break;
}
}
if (_0x005a) {
_0x009d.style.opacity = _0xstr(72);
_0x009d.style.pointerEvents = _0xstr(73);
} else {
if (_0x009d.style.display !== _0xstr(74)) {
_0x009d.style.opacity = _0xstr(75);
_0x009d.style.pointerEvents = _0xstr(76);
}
}
if (_0x0086.style.display !== _0xstr(77)) {
_0x0086.style.opacity = _0xstr(78);
_0x0086.style.pointerEvents = _0xstr(79);
}
}
setInterval(_0x0021, 300);
const _0x008c = document.getElementById(_0xstr(80));
const _0x0016 = document.getElementById(_0xstr(81));
const _0x00d2 = document.getElementById(_0xstr(82));
const _0x00df = document.getElementById(_0xstr(83));
const _0x009f = document.getElementById(_0xstr(84));
const _0x00b8 = document.getElementById(_0xstr(85));
const _0x0027 = document.getElementById(_0xstr(86));
const _0x002d = document.getElementById(_0xstr(87));
const _0x00e0 = document.getElementById(_0xstr(88));
const _0x00de = document.getElementById(_0xstr(89));
const _0x003d = document.getElementById(_0xstr(90));
const _0x00e1 = document.getElementById(_0xstr(91));
const _0x00c8 = document.getElementById(_0xstr(92));
const _0x0098 = document.getElementById(_0xstr(93));
function log(message) {
const _0x00ce = new Date().toLocaleTimeString();
_0x008c.innerHTML = `[${_0x00ce}] ${message}<br>` + _0x008c.innerHTML;
const _0x0088 = _0x008c.innerHTML.split(_0xstr(94));
if (_0x0088.length > 20) _0x008c.innerHTML = _0x0088.slice(0, 20).join(_0xstr(95));
}
function _0x00dc() {
if (_0x006f) {
_0x0016.innerText = _0xstr(96);
_0x0016.style.backgroundColor = _0xstr(97);
_0x00d2.innerText = _0xstr(98);
_0x00d2.style.backgroundColor = _0xstr(99);
} else {
_0x0016.innerText = _0xstr(100);
_0x0016.style.backgroundColor = _0xstr(101);
_0x00d2.innerText = _0xstr(102);
_0x00d2.style.backgroundColor = _0xstr(103);
}
}
function _0x00dd() {
if (_0x0012 && _0x0012 !== _0x0000) {
_0x00de.style.display = _0xstr(104);
_0x00e0.style.display = _0xstr(105);
_0x00e1.innerText = _0xstr(106);
} else {
_0x00de.style.display = _0xstr(107);
_0x00e0.style.display = _0xstr(108);
}
}
function _0x00da() {
const _0x0031 = _0x0050();
if (_0x0031) {
localStorage.setItem(_0xstr(109) + _0x0031, Date.now().toString());
localStorage.setItem(_0xstr(110) + _0x0031, _0x00c6);
}
}
const _0x000b = 300000;
const _0x0003 = 30000;
const _0x0004 = 300000;
function _0x00db() {
_0x00c8.innerHTML = _0xstr(111);
const now = Date.now();
for (const [type, _0x001c] of Object.entries(_0x000a)) {
const _0x0080 = parseInt(localStorage.getItem(_0xstr(112) + type) || _0xstr(113));
const _0x0071 = _0x0080 > 0 && (now - _0x0080) < _0x000b;
const _0x0074 = document.createElement(_0xstr(114));
_0x0074.style = `display: flex; align-items: center; justify-content: space-between; padding: 4px 6px; border-radius: 4px; background-color: ${_0x0071 ? 'rgba(76, 175, 80, 0.15)' : 'rgba(244, 67, 54, 0.15)'}; border: 1px solid ${_0x0071 ? '#4caf50' : '#f44336'}; font-size: 11px;`;
_0x0074.innerHTML = `
<span style="font-weight: bold; color: ${_0x0071 ? '#81c784' : '#e57373'};">${_0x001c.name}</span>
<span style="font-size: 9px; padding: 1px 4px; border-radius: 3px; background-color: ${_0x0071 ? '#4caf50' : '#f44336'}; color: white;">
${_0x0071 ? 'Mở' : 'Tắt'}
</span>
`;
_0x0074.style.cursor = _0xstr(115);
_0x0074.title = `Bấm để mở tab ${_0x001c.name}`;
_0x0074.addEventListener(_0xstr(116), () => {
if (typeof GM_openInTab !== _0xstr(117)) {
GM_openInTab(_0x001c.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001c.url, _0xstr(118));
}
});
_0x00c8.appendChild(_0x0074);
}
}
const _0x0002 = [_0xstr(119), _0xstr(120), _0xstr(121), _0xstr(122)];
const _0x0006 = 45000;
function _0x0099() {
_0x005f(_0xstr(123));
}
function _0x005f(_0x00d5) {
const now = Date.now();
const _0x0046 = localStorage.getItem(_0xstr(124));
if (_0x0046) {
if (_0x00d5 === _0xstr(125)) {
log(_0xstr(126));
_0x0026();
} else {
const _0x00c2 = parseInt(localStorage.getItem(_0xstr(127)) || _0xstr(128));
if ((now - _0x00c2) < 300000) {
return;
}
log(_0xstr(129));
_0x0026();
}
}
const _0x00c9 = [];
for (const type of _0x0002) {
if (_0x00d5 === _0xstr(130)) {
localStorage.setItem(_0xstr(131) + type, _0xstr(132));
_0x00c9.push(type);
} else {
const _0x0080 = parseInt(localStorage.getItem(_0xstr(133) + type) || _0xstr(134));
const _0x0065 = _0x0080 > 0 && (now - _0x0080) < _0x000b;
if (!_0x0065) {
_0x00c9.push(type);
}
}
}
if (_0x00c9.length === 0) {
if (_0x00d5 === _0xstr(135)) log(_0xstr(136));
return;
}
localStorage.removeItem(_0xstr(137));
log(`[Mở Tab] ▶ Bắt đầu mở tuần tự ${_0x00c9.length} tab: ${_0x00c9.map(t => _0x000a[t]?.name || t).join(' → ')}`);
localStorage.setItem(_0xstr(138), JSON.stringify(_0x00c9));
localStorage.setItem(_0xstr(139), _0x00c9[0]);
localStorage.setItem(_0xstr(140), _0xstr(141));
localStorage.setItem(_0xstr(142), now.toString());
localStorage.setItem(_0xstr(143), now.toString());
const _0x004b = _0x00c9[0];
const _0x001c = _0x000a[_0x004b];
localStorage.setItem(_0xstr(144) + _0x004b, now.toString());
const _0x0091 = _0x0050();
if (_0x0091 === _0x004b) {
log(`[Mở Tab] 🔄 Đang ở tab đầu tiên (${_0x001c.name}) - tiến hành reload...`);
window.location.reload();
} else {
log(`[Mở Tab] 🔄 Đang mở tab: ${_0x001c.name}...`);
if (typeof GM_openInTab !== _0xstr(145)) {
GM_openInTab(_0x001c.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001c.url, _0xstr(146));
}
}
}
function _0x0026() {
localStorage.removeItem(_0xstr(147));
localStorage.removeItem(_0xstr(148));
localStorage.removeItem(_0xstr(149));
localStorage.removeItem(_0xstr(150));
localStorage.removeItem(_0xstr(151));
localStorage.removeItem(_0xstr(152));
}
function _0x009a() {
let _0x00ab;
try {
_0x00ab = JSON.parse(localStorage.getItem(_0xstr(153)) || _0xstr(154));
} catch(e) {
_0x0026();
return;
}
_0x00ab.shift();
if (_0x00ab.length > 0) {
const _0x0094 = _0x00ab[0];
const _0x001c = _0x000a[_0x0094];
const now = Date.now();
localStorage.setItem(_0xstr(155), JSON.stringify(_0x00ab));
localStorage.setItem(_0xstr(156), _0x0094);
localStorage.setItem(_0xstr(157), _0xstr(158));
localStorage.setItem(_0xstr(159), now.toString());
localStorage.setItem(_0xstr(160) + _0x0094, now.toString());
localStorage.removeItem(_0xstr(161));
const _0x0091 = _0x0050();
if (_0x0091 === _0x0094) {
log(`[Mở Tab] 🔄 Đang ở tab tiếp theo (${_0x001c.name}) - tiến hành reload...`);
window.location.reload();
} else {
log(`[Mở Tab] ➡ Mở tab tiếp: ${_0x001c.name}...`);
if (typeof GM_openInTab !== _0xstr(162)) {
GM_openInTab(_0x001c.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001c.url, _0xstr(163));
}
}
} else {
_0x0026();
log(_0xstr(164));
}
}
function _0x0051() {
const _0x00ac = localStorage.getItem(_0xstr(165));
if (!_0x00ac) return;
let _0x00ab;
try {
_0x00ab = JSON.parse(_0x00ac);
} catch(e) {
_0x0026();
return;
}
if (!Array.isArray(_0x00ab) || _0x00ab.length === 0) {
_0x0026();
return;
}
const _0x0030 = localStorage.getItem(_0xstr(166));
const _0x0091 = _0x0050();
if (!_0x0091 || _0x0091 !== _0x0030) return;
const _0x00a3 = localStorage.getItem(_0xstr(167));
if (_0x00a3 !== _0xstr(168)) return;
const _0x00c7 = parseInt(localStorage.getItem(_0xstr(169)) || _0xstr(170));
const now = Date.now();
if (_0x0069()) {
log(`[Mở Tab] ✓ Tab ${_0x000a[_0x0091]?.name || _0x0091} đã load đầy đủ và sẵn sàng!`);
_0x0083 = Date.now();
_0x009a();
return;
}
if ((now - _0x00c7) > _0x0006) {
const _0x00b5 = parseInt(localStorage.getItem(_0xstr(171)) || _0xstr(172));
if (_0x00b5 < 1) {
log(`[Mở Tab] ⚠ Tab ${_0x000a[_0x0091]?.name || _0x0091} load quá 45s. Thử reload lại...`);
localStorage.setItem(_0xstr(173), _0xstr(174));
localStorage.setItem(_0xstr(175), now.toString());
window.location.reload();
} else {
log(`[Mở Tab] ✗ Tab ${_0x000a[_0x0091]?.name || _0x0091} không thể load. Bỏ qua...`);
localStorage.removeItem(_0xstr(176));
_0x009a();
}
}
}
const _0x0005 = 900000;
function _0x0015() {
if (!_0x006f) return;
if (localStorage.getItem(_0xstr(177)) || localStorage.getItem(_0xstr(178))) return;
const now = Date.now();
let _0x0054 = false;
let _0x0056 = false;
let _0x004e = _0xstr(179);
for (const [type, _0x001c] of Object.entries(_0x000a)) {
const _0x0080 = parseInt(localStorage.getItem(_0xstr(180) + type) || _0xstr(181));
const _0x00b1 = localStorage.getItem(_0xstr(182) + type);
const _0x0071 = _0x0080 > 0 && (now - _0x0080) < _0x000b;
if (!_0x0071) {
const _0x007c = parseInt(localStorage.getItem(_0xstr(183) + type) || _0xstr(184));
const _0x007d = now - _0x007c;
if (_0x00b1 && _0x007d > 60000) {
_0x0056 = true;
_0x004e = type;
break;
}
if (!_0x00b1) {
if (_0x0080 === 0 && _0x007d > _0x0003) {
_0x0054 = true;
break;
}
if (_0x0080 > 0 && (now - _0x0080) > _0x0005 && _0x007d > _0x0005) {
_0x0054 = true;
break;
}
}
}
}
if (_0x0056 && _0x004e) {
const _0x001c = _0x000a[_0x004e];
log(`[Hệ thống] Phát hiện tab ${_0x001c.name} bị đóng băng. Đang kích hoạt (Unfreeze) lại tab...`);
localStorage.setItem(_0xstr(185) + _0x004e, now.toString());
if (typeof GM_openInTab !== _0xstr(186)) {
GM_openInTab(_0x001c.url, { active: true, insert: true, setParent: true });
} else {
window.open(_0x001c.url, _0xstr(187));
}
return;
}
if (_0x0054) {
log(_0xstr(188));
_0x005f(_0xstr(189));
}
}
let wakeLock = null;
let _0x0013 = null;
async function _0x00b4() {
if (!(_0xstr(190) in navigator)) {
log(_0xstr(191));
return;
}
try {
wakeLock = await navigator.wakeLock.request(_0xstr(192));
log(_0xstr(193));
} catch (err) {
console.log(_0xstr(194), err.message);
}
}
function _0x00b3() {
if (wakeLock) {
wakeLock.release().then(() => {
wakeLock = null;
log(_0xstr(195));
});
}
}
function _0x00c1() {
try {
if (_0x0013) return;
const AudioContext = window.AudioContext || window.webkitAudioContext;
if (!AudioContext) return;
_0x0013 = new AudioContext();
const _0x009c = _0x0013.createOscillator();
const _0x004f = _0x0013.createGain();
_0x009c.type = _0xstr(196);
_0x009c.frequency.value = 20000;
_0x004f.gain.value = 0.0001;
_0x009c.connect(_0x004f);
_0x004f.connect(_0x0013.destination);
_0x009c.start();
log(_0xstr(197));
} catch (e) {
console.log(_0xstr(198), e.message);
}
}
function _0x001e() {
if (_0x0013 && _0x0013.state === _0xstr(199)) {
_0x0013.resume().then(() => {
log(_0xstr(200));
}).catch(() => {});
}
if (_0x0013 && _0x0013.state === _0xstr(201)) {
_0x0013 = null;
_0x00c1();
log(_0xstr(202));
}
}
function _0x00c4() {
if (_0x0013) {
try {
_0x0013.close().then(() => {
_0x0013 = null;
log(_0xstr(203));
});
} catch (e) {
_0x0013 = null;
}
}
}
function _0x0040() {
_0x00b4();
_0x00c1();
}
function _0x003b() {
_0x00b3();
_0x00c4();
}
document.addEventListener(_0xstr(204), () => {
if (document.visibilityState === _0xstr(205) && _0x006f) {
_0x00b4();
}
});
_0x0098.addEventListener(_0xstr(206), _0x0099);
_0x00dc();
_0x00dd();
if (_0x006f) {
_0x0040();
const _0x005d = () => {
if (_0x006f) _0x0040();
document.removeEventListener(_0xstr(207), _0x005d);
};
document.addEventListener(_0xstr(208), _0x005d);
}
_0x003d.addEventListener(_0xstr(209), () => {
_0x00de.style.display = _0xstr(210);
_0x00e0.style.display = _0xstr(211);
_0x00df.focus();
});
_0x00b8.addEventListener(_0xstr(212), () => {
const _0x0062 = _0x00df.value.trim();
const _0x00a0 = _0x009f.value.trim() || _0xstr(213);
if (_0x0062 && !_0x0062.includes(_0xstr(214))) {
_0x0012 = _0x0062;
_0x00a1 = _0x00a0;
localStorage.setItem(_0xstr(215), _0x0012);
localStorage.setItem(_0xstr(216), _0x00a1);
GM_setValue(_0xstr(217), _0x0012);
GM_setValue(_0xstr(218), _0x00a1);
log(`Đã lưu cấu hình. PC: ${_0x00a1}`);
_0x00dd();
alert(_0xstr(219));
} else {
alert(_0xstr(220));
}
});
function _0x00d3() {
if (!_0x0012 || _0x0012.includes(_0xstr(221))) {
alert(_0xstr(222));
return;
}
_0x006f = !_0x006f;
localStorage.setItem(_0xstr(223), _0x006f ? [_0xstr(224)] : _0xstr(225));
_0x00dc();
log(_0x006f ? [_0xstr(226)] : _0xstr(227));
if (_0x006f) {
_0x0040();
_0x0099();
} else {
_0x003b();
}
}
_0x00d2.addEventListener(_0xstr(228), _0x00d3);
_0x0016.addEventListener(_0xstr(229), _0x00d3);
_0x0027.addEventListener(_0xstr(230), _0x002a);
_0x0086.addEventListener(_0xstr(231), _0x0047);
_0x009d.addEventListener(_0xstr(232), _0x00c3);
_0x009d.addEventListener(_0xstr(233), _0x00c3);
_0x009d.addEventListener(_0xstr(234), _0x00c3);
_0x009d.addEventListener(_0xstr(235), _0x00c3);
_0x009d.addEventListener(_0xstr(236), _0x00be);
function _0x0033(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function _0x0034(min, max) {
return new Promise(resolve => setTimeout(resolve, min + Math.random() * (max - min)));
}
async function _0x00bb(inputEl, value) {
try {
inputEl.focus();
} catch (e) {}
const _0x0092 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, _0xstr(237))?.set;
if (_0x0092) {
_0x0092.call(inputEl, value);
} else {
inputEl.value = value;
}
inputEl.dispatchEvent(new Event(_0xstr(238), { bubbles: true }));
inputEl.dispatchEvent(new Event(_0xstr(239), { bubbles: true }));
await _0x0033(300);
[_0xstr(240), _0xstr(241), _0xstr(242)].forEach(name => {
const _0x0043 = new KeyboardEvent(name, {
bubbles: true, cancelable: true, key: _0xstr(243), code: _0xstr(244), keyCode: 13, which: 13
});
Object.defineProperty(_0x0043, _0xstr(245), { value: 13 });
Object.defineProperty(_0x0043, _0xstr(246), { value: 13 });
inputEl.dispatchEvent(_0x0043);
});
}
function _0x001a(method, urlOrAction, data = null, timeoutMs = 60000) {
let attempts = 0;
const maxAttempts = 2;
function makeRequest() {
attempts++;
return new Promise((resolve, reject) => {
let _0x0025 = (_0x0012 || _0xstr(247)).trim();
if (!_0x0025 || _0x0025.includes(_0xstr(248))) {
reject(new Error(_0xstr(249)));
return;
}
let _0x00cc = _0xstr(250);
if (method === _0xstr(251)) {
_0x00cc = `${_0x0025}?action=${urlOrAction}&pc=${encodeURIComponent((_0x00a1 || "").trim())}`;
} else {
_0x00cc = _0x0025;
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
url: _0x00cc,
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
reject(new Error(`Lỗi kết nối mạng đến ${_0x00cc}`));
},
ontimeout: function() {
if (isSettled) return;
isSettled = true;
clearTimeout(timer);
reject(new Error(`GM_xmlhttpRequest timeout khi gọi ${urlOrAction}`));
}
};
if (method !== _0xstr(252)) {
options.headers = { [_0xstr(253)]: _0xstr(254) };
options.data = JSON.stringify(Object.assign({ action: urlOrAction, pc: (_0x00a1 || _0xstr(255)).trim() }, data));
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
function _0x0048(driverStr) {
if (!driverStr) return _0xstr(256);
const match = driverStr.match(/\d+/);
return match ? match[0] : driverStr;
}
async function _0x00c0() {
if (!_0x006f || _0x006b) return;
const hash = window.location.hash || _0xstr(257);
if (!hash.includes(_0xstr(258))) return;
if (!_0x000c(_0xstr(259))) {
return;
}
try {
_0x006b = true;
_0x007f = Date.now();
_0x00d9(_0xstr(260));
const data = await _0x001a(_0xstr(261), _0xstr(262));
_0x0083 = Date.now();
if (data.status === _0xstr(263)) {
let _0x0029 = [];
if (data.code) {
_0x0029 = data.code.split(_0xstr(264)).map(c => c.trim().toUpperCase()).filter(c => c.length > 0);
} else if (data.codes && Array.isArray(data.codes)) {
_0x0029 = data.codes.map(c => c.trim().toUpperCase());
}
if (_0x0029.length > 0) {
log(`Tìm thấy lô gồm ${_0x0029.length} mã để in.`);
_0x00d9(_0xstr(265));
const _0x00c5 = await _0x0045(_0x0029);
if (_0x00c5) {
_0x0083 = Date.now();
log(`Đã in lô thành công: ${_0x0029.join(', ')}`);
} else {
log(`Thất bại khi in lô.`);
}
}
}
} catch (error) {
log(`Lỗi in thường: ${error.message}`);
} finally {
_0x006b = false;
_0x00b2(_0xstr(266));
}
}
async function _0x0045(codes) {
const textarea = document.querySelector(_0xstr(267)) || document.querySelector(_0xstr(268));
if (!textarea) {
log(_0xstr(269));
return false;
}
const _0x002b = codes.join(_0xstr(270));
textarea.value = _0x002b;
textarea.dispatchEvent(new Event(_0xstr(271), { bubbles: true }));
textarea.dispatchEvent(new Event(_0xstr(272), { bubbles: true }));
try {
textarea.focus();
textarea.select();
document.execCommand(_0xstr(273), false, _0x002b);
textarea.dispatchEvent(new Event(_0xstr(274), { bubbles: true }));
} catch (e) {}
await _0x0034(300, 500);
const _0x002c = Array.from(document.querySelectorAll(_0xstr(275))).find(_0x0018 => {
const _0x00d7 = _0x0018.innerText || _0x0018.textContent || _0xstr(276);
return _0x00d7.trim().toLowerCase() === _0xstr(277);
});
if (!_0x002c) return false;
_0x002c.click();
let _0x0067 = false;
let _0x0055 = false;
let _0x0042 = _0xstr(278);
const _0x00e2 = codes.filter(c => c.startsWith(_0xstr(279)) || c.startsWith(_0xstr(280)) || c.startsWith(_0xstr(281)) || /^[A-Z0-9]{8,25}$/.test(c));
for (let _0x005c = 0; _0x005c < 40; _0x005c++) {
await _0x0033(50);
const _0x000f = Array.from(document.querySelectorAll(_0xstr(282)));
const _0x004d = _0x000f.find(_0x003e => {
const _0x00d7 = _0x003e.textContent.trim().toUpperCase();
return _0x00e2.some(vc => _0x00d7 === vc || _0x00d7.includes(vc));
});
if (_0x004d) {
_0x0067 = true;
}
const _0x003a = document.querySelectorAll(_0xstr(283));
for (const _0x0035 of _0x003a) {
if (_0x0035.offsetWidth > 0 || _0x0035.offsetHeight > 0) {
const _0x0039 = (_0x0035.innerText || _0x0035.textContent || _0xstr(284));
if (_0x0039.toLowerCase().includes(_0xstr(285)) ||
_0x0039.toLowerCase().includes(_0xstr(286)) ||
_0x0039.toLowerCase().includes(_0xstr(287)) ||
_0x0039.toLowerCase().includes(_0xstr(288)) ||
_0x0039.toLowerCase().includes(_0xstr(289))) {
_0x0055 = true;
_0x0042 = _0x0039.trim().replace(/\n/g, _0xstr(290));
const _0x0088 = _0x0039.split(_0xstr(291)).map(l => l.trim().toUpperCase());
const _0x0064 = [];
for (const _0x0087 of _0x0088) {
const _0x008e = _0x0087.match(/(SPXVN\d+|TETS\d+|VN\d+|[A-Z0-9]{8,25})/g);
if (_0x008e) {
for (const match of _0x008e) {
if (!match.includes(_0xstr(292)) && !match.includes(_0xstr(293)) && !match.includes(_0xstr(294))) {
_0x0064.push(match);
}
}
}
}
const _0x0028 = _0x0064.length > 0 ? _0x0064 : codes;
const _0x0095 = Array.from(_0x0035.querySelectorAll(_0xstr(295))).find(_0x0018 => {
const _0x00d7 = (_0x0018.innerText || _0x0018.textContent || _0xstr(296)).trim().toLowerCase();
return _0x00d7 === _0xstr(297) || _0x00d7 === _0xstr(298) || _0x00d7 === _0xstr(299) || _0x00d7 === _0xstr(300) || _0x00d7 === _0xstr(301) || _0x00d7.includes(_0xstr(302));
});
if (_0x0095) {
const _0x0096 = 800 + Math.random() * 200;
setTimeout(() => {
_0x0095.click();
log(`[In Bill] Đã click nút OK đóng cảnh báo.`);
}, _0x0096);
log(`[In Bill] Phát hiện _0x0035 lỗi. Đợi ${(_0x0096/1000).toFixed(2)} giây để tự động đóng...`);
}
for (const _0x0041 of _0x0028) {
_0x001a(_0xstr(303), _0xstr(304), { code: _0x0041, status: _0xstr(305) })
.then(() => {
log(`[In Bill] Đã báo cáo thành công mã lỗi: '${_0x0041}' = 'Mã lỗi'.`);
})
.catch(e => {
log(`[In Bill] Gặp lỗi khi gửi báo cáo cho ${_0x0041}: ${e.message}`);
});
}
break;
}
}
}
if (_0x0067 && !_0x0055) {
break;
}
if (_0x0055) break;
}
if (_0x0055 && !_0x0067) {
return false;
}
if (!_0x0067) {
log(_0xstr(306));
return false;
}
const _0x00a4 = Array.from(document.querySelectorAll(_0xstr(307))).find(_0x003e => {
const _0x00d7 = _0x003e.innerText || _0x003e.textContent || _0xstr(308);
return _0x00d7.trim() === _0xstr(309);
});
if (!_0x00a4) return false;
await _0x0034(400, 500);
_0x00a4.click();
let _0x0068 = false;
let _0x0038 = null;
for (let _0x005c = 0; _0x005c < 20; _0x005c++) {
await _0x0033(50);
const _0x003a = document.querySelectorAll(_0xstr(310));
for (const _0x0035 of _0x003a) {
if (_0x0035.offsetWidth > 0 || _0x0035.offsetHeight > 0) {
_0x0038 = Array.from(_0x0035.querySelectorAll(_0xstr(311))).find(_0x0018 => {
const _0x00d7 = _0x0018.innerText || _0x0018.textContent || _0xstr(312);
return _0x00d7.trim() === _0xstr(313);
});
if (_0x0038) {
_0x0068 = true;
break;
}
}
}
if (_0x0068) break;
}
if (_0x0038) {
await _0x0034(100, 200);
_0x0038.click();
await _0x0033(500);
return true;
}
return false;
}
async function _0x00a7() {
if (!_0x006f || _0x006d) return;
_0x006d = true;
_0x007b = Date.now();
_0x0083 = Date.now();
log(_0xstr(314));
try {
const now = Date.now();
if (now - _0x0082 > 2000) {
let _0x00b9 = Array.from(document.querySelectorAll(_0xstr(315))).find(_0x0018 => {
const text = _0x0018.innerText.trim();
return text === _0xstr(316) || text === _0xstr(317);
});
if (_0x00b9) {
_0x00b9.click();
_0x0082 = now;
await _0x0033(300);
}
}
if (_0x0089.size === 0 || (now - _0x0084) > 60000) {
try {
const res = await _0x001a(_0xstr(318), _0xstr(319));
if (res.status === _0xstr(320) && Array.isArray(res.data)) {
_0x0089 = new Set(res.data.map(to => to.toLowerCase()));
_0x0084 = now;
log(`[TO Quét] Đã đồng bộ ${_0x0089.size} mã TO đã tồn tại từ Excel.`);
}
} catch (e) {
log(`[TO Quét] Lỗi đồng bộ danh sách TO hiện có: ${e.message}`);
}
}
const headers = Array.from(document.querySelectorAll(_0xstr(321)));
let _0x00d0 = -1;
let _0x0097 = -1;
let _0x00a9 = -1;
headers.forEach((th, index) => {
const text = th.innerText.trim().toLowerCase();
if (text.includes(_0xstr(322)) || text.includes(_0xstr(323)) || text.includes(_0xstr(324)) || text.includes(_0xstr(325))) {
_0x00d0 = index;
} else if (text.includes(_0xstr(326)) || text.includes(_0xstr(327)) || text.includes(_0xstr(328)) || text.includes(_0xstr(329))) {
_0x0097 = index;
} else if (text.includes(_0xstr(330)) || text.includes(_0xstr(331)) || text.includes(_0xstr(332)) || text.includes(_0xstr(333))) {
_0x00a9 = index;
}
});
const _0x00b7 = document.querySelectorAll(_0xstr(334));
for (let _0x00b6 of _0x00b7) {
const _0x001b = _0x00b6.querySelectorAll(_0xstr(335));
if (_0x001b.length > 0) {
let toNum = _0xstr(336);
let _0x009b = _0xstr(337);
let _0x00aa = -1;
if (_0x00d0 !== -1 && _0x001b[_0x00d0]) toNum = _0x001b[_0x00d0].innerText.trim();
if (_0x0097 !== -1 && _0x001b[_0x0097]) _0x009b = _0x001b[_0x0097].innerText.trim();
if (_0x00a9 !== -1 && _0x001b[_0x00a9]) {
const _0x00a8 = parseInt(_0x001b[_0x00a9].innerText.trim(), 10);
if (!isNaN(_0x00a8)) _0x00aa = _0x00a8;
}
if (!toNum) {
_0x001b.forEach(c => {
const _0x00d7 = c.innerText.trim();
if (/^TO\d+[A-Z0-9]+$/_0x005c.test(_0x00d7)) toNum = _0x00d7;
});
}
if (!_0x009b) {
_0x001b.forEach(c => {
const _0x00d7 = c.innerText.trim();
if (_0x00d7.includes(_0xstr(338))) _0x009b = _0x00d7;
});
}
if (_0x00aa === -1) {
_0x001b.forEach((c, idx) => {
const _0x00d7 = c.innerText.trim();
if (/^\d+$/.test(_0x00d7) && idx > 0 && idx !== _0x00d0) {
const _0x00a8 = parseInt(_0x00d7, 10);
if (_0x00a8 > 0) _0x00aa = _0x00a8;
}
});
}
if (toNum && _0x009b && _0x00aa > 0) {
const _0x0070 = _0x009b.toLowerCase() === _0xstr(339);
if (!_0x0070 && !_0x0089.has(toNum.toLowerCase())) {
_0x0089.add(toNum.toLowerCase());
try {
const _0x000e = await _0x001a(_0xstr(340), _0xstr(341), { toNum: toNum });
if (_0x000e.status === _0xstr(342)) {
log(`[TO Quét] Đã copy TO mới: ${toNum} (Operator: ${_0x009b}, Qty: ${_0x00aa})`);
_0x0083 = Date.now();
} else if (_0x000e.status === _0xstr(343)) {
log(`[TO Quét] TO ${toNum} đã tồn tại trên Sheet, bỏ qua.`);
} else {
log(`[TO Quét] API trả về không thành công cho ${toNum}: ${JSON.stringify(_0x000e)}`);
}
} catch (err) {
_0x0089.delete(toNum.toLowerCase());
log(`[TO Quét] Lỗi đồng bộ TO ${toNum}: ${err.message}. Sẽ thử lại.`);
}
}
}
}
}
} catch (error) {
log(`[TO Quét] Lỗi quét danh sách: ${error.message}`);
} finally {
_0x006d = false;
}
}
async function _0x00a6() {
if (!_0x006f || _0x006e) return;
const hash = window.location.hash;
if (!hash.includes(_0xstr(344))) return;
if (!_0x000c(_0xstr(345))) {
return;
}
try {
_0x006e = true;
_0x007e = Date.now();
_0x00d9(_0xstr(346));
const res = await _0x001a(_0xstr(347), _0xstr(348));
if (res.status === _0xstr(349) && res.toNum) {
const _0x002f = res.toNum;
log(`[TO In] Lấy mã TO cần in từ Sheet: ${_0x002f}`);
let _0x00d1 = null;
const _0x0076 = document.querySelectorAll(_0xstr(350));
let _0x00cb = null;
for (let _0x003e of _0x0076) {
const text = _0x003e.innerText.trim().toLowerCase();
if (text === _0xstr(351) || text === _0xstr(352) || text === _0xstr(353) || text === _0xstr(354)) {
_0x00cb = _0x003e;
break;
}
}
if (_0x00cb) {
let parent = _0x00cb.parentElement;
for (let _0x005c = 0; _0x005c < 3 && parent; _0x005c++) {
_0x00d1 = parent.querySelector(_0xstr(355));
if (_0x00d1) break;
parent = parent.parentElement;
}
}
if (!_0x00d1) {
const _0x0011 = document.querySelectorAll(_0xstr(356));
for (let input of _0x0011) {
const placeholder = (input.placeholder || _0xstr(357)).toLowerCase();
if (placeholder.includes(_0xstr(358)) || placeholder.includes(_0xstr(359)) || placeholder.includes(_0xstr(360)) || placeholder.includes(_0xstr(361))) {
_0x00d1 = input;
break;
}
}
}
if (!_0x00d1) {
const _0x0011 = Array.from(document.querySelectorAll(_0xstr(362)));
_0x00d1 = _0x0011.find(input => {
const type = (input.type || _0xstr(363)).toLowerCase();
const _0x0072 = type === _0xstr(364) || type === _0xstr(365) || type === _0xstr(366);
const _0x0073 = input.style.display !== _0xstr(367) && input.style.visibility !== _0xstr(368);
return _0x0072 && _0x0073;
});
}
if (_0x00d1) {
log(`[TO In] Đang nhập mã TO: ${_0x002f} và nhấn Enter...`);
await _0x00bb(_0x00d1, _0x002f);
await _0x0033(100);
_0x00d9(_0xstr(369));
const _0x00a5 = await _0x00d6(_0x002f);
if (_0x00a5) {
log(`[TO In] Đã in nhãn thành công cho ${_0x002f}`);
_0x0083 = Date.now();
try {
await _0x001a(_0xstr(370), _0xstr(371), { toNum: _0x002f });
log(`[TO In] Đã đánh dấu '${_0x002f}' = Đã In trên Sheet.`);
} catch (markErr) {
log(`[TO In] Cảnh báo: Không đánh dấu được Đã In cho ${_0x002f}: ${markErr.message}`);
}
} else {
log(`[TO In] Không bấm được nút in nhãn cho ${_0x002f}`);
}
} else {
log(`[TO In] Không tìm thấy ô nhập TO Number trên màn hình!`);
}
} else {
}
} catch (error) {
log(`Lỗi In TO: ${error.message}`);
} finally {
_0x006e = false;
_0x00b2(_0xstr(372));
}
}
function _0x00d6(_0x002f) {
return new Promise((resolve) => {
let _0x0020 = 0;
let _0x0023 = setInterval(() => {
_0x0020++;
let _0x00a4 = null;
const _0x0019 = document.querySelectorAll(_0xstr(373));
for (let _0x0018 of _0x0019) {
const text = _0x0018.innerText.trim();
if (text === _0xstr(374) || text === _0xstr(375) || text === _0xstr(376) || text.includes(_0xstr(377))) {
_0x00a4 = _0x0018;
break;
}
}
if (!_0x00a4) {
const _0x003f = document.querySelectorAll(_0xstr(378));
for (let _0x003e of _0x003f) {
const text = _0x003e.innerText.trim();
if (text === _0xstr(379) || text === _0xstr(380) || text === _0xstr(381) || text.includes(_0xstr(382))) {
_0x00a4 = _0x003e.closest(_0xstr(383)) || _0x003e;
break;
}
}
}
if (_0x00a4 && !_0x00a4.disabled && !_0x00a4.classList.contains(_0xstr(384))) {
clearInterval(_0x0023);
log(_0xstr(385));
_0x00a4.click();
setTimeout(() => {
log(`[TO In] Đánh dấu 'Đã in' thành công cho ${_0x002f}`);
resolve(true);
}, 800);
} else if (_0x0020 > 20) {
clearInterval(_0x0023);
resolve(false);
}
}, 150);
});
}
async function _0x00bf() {
if (!_0x006f || _0x006c) return;
const hash = window.location.hash || _0xstr(386);
if (!hash.includes(_0xstr(387))) return;
if (!_0x000c(_0xstr(388))) {
return;
}
try {
_0x006c = true;
_0x0079 = Date.now();
_0x00d9(_0xstr(389));
const data = await _0x001a(_0xstr(390), _0xstr(391));
if (data.status === _0xstr(392)) {
const pupCode = data.pupCode;
const _0x00ad = data.recipientDriver;
const recipientDriver = _0x0048(_0x00ad);
const now = Date.now();
if (pupCode === _0x0078 && (now - _0x007a) < 30000) {
log(`PUP ${pupCode} đã được xử lý gần đây (dưới 30s). Bỏ qua thao tác trùng lặp.`);
_0x006c = false;
_0x00b2(_0xstr(393));
return;
}
log(`Tìm thấy nhiệm vụ Chuyển Pick: PUP=${pupCode}, Nhận=${recipientDriver} (Gốc: ${_0x00ad})`);
_0x00d9(_0xstr(394));
const _0x00c5 = await _0x0044(pupCode, recipientDriver);
if (_0x00c5) {
_0x0078 = pupCode;
_0x007a = Date.now();
log(`Đã chuyển giao thành công PUP: ${pupCode} cho tài xế ${recipientDriver}`);
try {
await _0x001a(_0xstr(395), _0xstr(396), { pupCode: pupCode, status: _0xstr(397) });
log(`[Chuyển Pick] Đã ghi nhận trạng thái 'Đã chuyển' cho ${pupCode} vào Sheet.`);
} catch (err) {
log(`[Chuyển Pick] Lỗi đồng bộ trạng thái thành công cho ${pupCode}: ${err.message}`);
}
} else {
log(`Chuyển giao thất bại trên giao diện Shopee.`);
try {
await _0x001a(_0xstr(398), _0xstr(399), { pupCode: pupCode, status: _0xstr(400) });
log(`[Chuyển Pick] Đã cập nhật trạng thái 'Thất bại' cho ${pupCode} vào Sheet.`);
} catch (err) {
log(`[Chuyển Pick] Lỗi đồng bộ trạng thái thất bại cho ${pupCode}: ${err.message}`);
}
}
}
} catch (error) {
log(`Lỗi Chuyển Pick: ${error.message}`);
} finally {
_0x006c = false;
_0x00b2(_0xstr(401));
}
}
async function _0x0044(pupCode, recipientDriver) {
let _0x004a = null;
const _0x004c = document.querySelectorAll(_0xstr(402));
for (let _0x0074 of _0x004c) {
const _0x0075 = _0x0074.querySelector(_0xstr(403));
if (_0x0075) {
const _0x0077 = (_0x0075.innerText || _0x0075.textContent || _0xstr(404)).trim().toLowerCase();
if (_0x0077.includes(_0xstr(405)) || _0x0077.includes(_0xstr(406)) || _0x0077 === _0xstr(407)) {
_0x004a = _0x0074.querySelector(_0xstr(408));
if (_0x004a) break;
}
}
}
if (!_0x004a) {
const _0x0011 = document.querySelectorAll(_0xstr(409));
for (let input of _0x0011) {
const placeholder = input.placeholder || _0xstr(410);
if (placeholder.toLowerCase().includes(_0xstr(411)) || placeholder.toLowerCase().includes(_0xstr(412))) {
_0x004a = input;
break;
}
}
}
if (!_0x004a) {
log(_0xstr(413));
return false;
}
await _0x00bb(_0x004a, pupCode);
await _0x0033(300);
let _0x00b9 = Array.from(document.querySelectorAll(_0xstr(414))).find(_0x0018 => {
const _0x00d7 = _0x0018.innerText || _0x0018.textContent || _0xstr(415);
return _0x00d7.trim() === _0xstr(416) || _0x00d7.trim() === _0xstr(417);
});
if (_0x00b9) {
_0x00b9.click();
log(_0xstr(418) + pupCode);
} else {
_0x004a.dispatchEvent(new KeyboardEvent(_0xstr(419), { key: _0xstr(420), code: _0xstr(421), keyCode: 13, which: 13, bubbles: true }));
}
await _0x0033(2000);
_0x00d9(_0xstr(422));
const _0x00b7 = Array.from(document.querySelectorAll(_0xstr(423)));
let _0x00af = false;
for (let _0x00b6 of _0x00b7) {
const _0x00ae = Array.from(_0x00b6.querySelectorAll(_0xstr(424))).find(_0x003e => {
const _0x00d7 = _0x003e.innerText || _0x003e.textContent || _0xstr(425);
return _0x00d7.trim() === _0xstr(426) || _0x00d7.trim() === _0xstr(427) || _0x00d7.trim() === _0xstr(428);
});
if (_0x00ae) {
log(_0xstr(429));
_0x00ae.click();
await _0x0033(2500);
_0x00d9(_0xstr(430));
const _0x003a = document.querySelectorAll(_0xstr(431));
let _0x00ca = null;
for (const _0x0035 of _0x003a) {
if (_0x0035.offsetWidth > 0 || _0x0035.offsetHeight > 0) {
const text = (_0x0035.innerText || _0x0035.textContent || _0xstr(432));
if (text.includes(_0xstr(433)) || text.includes(_0xstr(434)) || text.includes(_0xstr(435)) || text.includes(_0xstr(436))) {
_0x00ca = _0x0035;
break;
}
}
}
if (_0x00ca) {
let _0x003c = null;
const _0x004c = _0x00ca.querySelectorAll(_0xstr(437));
for (let _0x0074 of _0x004c) {
const _0x0075 = _0x0074.querySelector(_0xstr(438));
if (_0x0075) {
const _0x0077 = (_0x0075.innerText || _0x0075.textContent || _0xstr(439)).trim().toLowerCase();
if (_0x0077.includes(_0xstr(440)) || _0x0077.includes(_0xstr(441))) {
_0x003c = _0x0074.querySelector(_0xstr(442));
if (_0x003c) break;
}
}
}
if (!_0x003c) {
const _0x0037 = _0x00ca.querySelectorAll(_0xstr(443));
for (let _0x0061 of _0x0037) {
const _0x00a2 = _0x0061.placeholder || _0xstr(444);
if (_0x00a2.toLowerCase().includes(_0xstr(445)) || _0x00a2.toLowerCase().includes(_0xstr(446)) || _0x00a2.toLowerCase().includes(_0xstr(447))) {
_0x003c = _0x0061;
break;
}
}
}
if (_0x003c) {
const _0x00ba = _0x003c.closest(_0xstr(448)) || _0x003c.parentElement;
if (_0x00ba) {
_0x00ba.click();
} else {
_0x003c.removeAttribute(_0xstr(449));
_0x003c.click();
}
log(_0xstr(450));
await _0x0033(2200);
_0x00d9(_0xstr(451));
let _0x000d = document.activeElement;
if (!_0x000d || _0x000d.tagName !== _0xstr(452) || !_0x00ca.contains(_0x000d)) {
_0x000d = _0x003c;
}
_0x000d.removeAttribute(_0xstr(453));
_0x000d.focus();
if (typeof _0x000d.select === _0xstr(454)) _0x000d.select();
_0x000d.value = _0xstr(455);
_0x000d.dispatchEvent(new Event(_0xstr(456), { bubbles: true }));
try {
document.execCommand(_0xstr(457), false, recipientDriver);
} catch (e) {}
if (_0x000d.value !== recipientDriver) {
_0x000d.value = recipientDriver;
}
_0x000d.dispatchEvent(new Event(_0xstr(458), { bubbles: true }));
_0x000d.dispatchEvent(new Event(_0xstr(459), { bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(460), { key: _0xstr(461), bubbles: true }));
_0x000d.dispatchEvent(new KeyboardEvent(_0xstr(462), { key: _0xstr(463), bubbles: true }));
log(_0xstr(464) + recipientDriver + _0xstr(465));
await _0x0033(2500);
const _0x0010 = Array.from(document.querySelectorAll(_0xstr(466)));
let _0x008d = _0x0010.find(_0x003e => {
const text = (_0x003e.innerText || _0x003e.textContent || _0xstr(467)).trim();
return text.includes(recipientDriver) &&
(_0x003e.offsetWidth > 0 || _0x003e.offsetHeight > 0) &&
(_0x003e.classList.contains(_0xstr(468)) ||
_0x003e.closest(_0xstr(469)) ||
_0x003e.closest(_0xstr(470)) ||
_0x003e.tagName === _0xstr(471));
});
if (!_0x008d) {
_0x008d = _0x0010.find(_0x003e => {
const text = (_0x003e.innerText || _0x003e.textContent || _0xstr(472)).trim();
return text.includes(recipientDriver) &&
(_0x003e.closest(_0xstr(473)) || _0x003e.closest(_0xstr(474)) || _0x003e.tagName === _0xstr(475));
});
}
if (!_0x008d) {
_0x008d = _0x0010.find(_0x003e => {
const text = (_0x003e.innerText || _0x003e.textContent || _0xstr(476)).trim();
return text.includes(recipientDriver);
});
}
if (_0x008d) {
_0x008d.click();
log(_0xstr(477) + (_0x008d.innerText || _0x008d.textContent).trim());
await _0x0033(1200);
const _0x0036 = Array.from(_0x00ca.querySelectorAll(_0xstr(478))).find(_0x0018 => {
const _0x00d7 = _0x0018.innerText || _0x0018.textContent || _0xstr(479);
return _0x00d7.trim() === _0xstr(480) || _0x00d7.trim() === _0xstr(481) || _0x00d7.trim() === _0xstr(482);
});
if (_0x0036) {
_0x0036.click();
log(_0xstr(483));
_0x00af = true;
await _0x0033(1500);
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
return _0x00af;
}
function _0x001d() {
const now = Date.now();
if (_0x006b && _0x007f > 0 && (now - _0x007f) > _0x0009) {
log(_0xstr(488));
_0x006b = false;
_0x00b2(_0xstr(489));
_0x007f = 0;
}
if (_0x006d && _0x007b > 0 && (now - _0x007b) > _0x0009) {
log(_0xstr(490));
_0x006d = false;
_0x00b2(_0xstr(491));
_0x007b = 0;
}
if (_0x006e && _0x007e > 0 && (now - _0x007e) > _0x0009) {
log(_0xstr(492));
_0x006e = false;
_0x00b2(_0xstr(493));
_0x007e = 0;
}
if (_0x006c && _0x0079 > 0 && (now - _0x0079) > _0x0009) {
log(_0xstr(494));
_0x006c = false;
_0x00b2(_0xstr(495));
_0x0079 = 0;
}
}
function _0x0024() {
const href = window.location.href;
if (href.includes(_0xstr(496)) || href.includes(_0xstr(497))) {
log(_0xstr(498));
window.location.reload();
return false;
}
return true;
}
const _0x0008 = 60000;
const _0x0007 = 300000;
function _0x0069() {
const hash = window.location.hash || _0xstr(499);
const href = window.location.href;
if (href.includes(_0xstr(500)) || href.includes(_0xstr(501))) return false;
const _0x00bd = document.querySelectorAll(_0xstr(502));
for (const _0x00bc of _0x00bd) {
if (_0x00bc.offsetWidth > 0 || _0x00bc.offsetHeight > 0) {
const style = window.getComputedStyle(_0x00bc);
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
const _0x0019 = Array.from(document.querySelectorAll(_0xstr(512)));
const _0x0058 = _0x0019.some(_0x0018 => {
const text = (_0x0018.innerText || _0x0018.textContent || _0xstr(513)).trim().toLowerCase();
const style = window.getComputedStyle(_0x0018);
const _0x0073 = _0x0018.offsetWidth > 0 && style.display !== _0xstr(514) && style.visibility !== _0xstr(515);
return _0x0073 && (text.includes(_0xstr(516)) || text.includes(_0xstr(517)));
});
const _0x0059 = document.querySelectorAll(_0xstr(518)).length > 0;
return _0x0058 && _0x0059;
}
if (hash.includes(_0xstr(519))) {
const _0x0063 = Array.from(document.querySelectorAll(_0xstr(520)));
const _0x005b = _0x0063.some(input => {
const type = (input.type || _0xstr(521)).toLowerCase();
const style = window.getComputedStyle(input);
const _0x0072 = type === _0xstr(522) || type === _0xstr(523) || type === _0xstr(524);
return _0x0072 && input.offsetWidth > 0 && style.display !== _0xstr(525) && style.visibility !== _0xstr(526);
});
return _0x005b;
}
if (hash.includes(_0xstr(527))) {
const _0x0063 = Array.from(document.querySelectorAll(_0xstr(528)));
const _0x0057 = _0x0063.some(input => {
const style = window.getComputedStyle(input);
return input.offsetWidth > 0 && style.display !== _0xstr(529) && style.visibility !== _0xstr(530);
});
const _0x0019 = Array.from(document.querySelectorAll(_0xstr(531)));
const _0x0053 = _0x0019.some(_0x0018 => {
const style = window.getComputedStyle(_0x0018);
return _0x0018.offsetWidth > 0 && style.display !== _0xstr(532) && style.visibility !== _0xstr(533);
});
return _0x0057 && _0x0053;
}
return false;
}
function _0x0060() {
const now = Date.now();
log(_0xstr(534));
for (const type of _0x0002) {
localStorage.setItem(_0xstr(535) + type, _0xstr(536));
}
setTimeout(() => {
log(_0xstr(537));
_0x005f(_0xstr(538));
}, 2500);
_0x0083 = now;
}
function _0x001f() {
const _0x0091 = _0x0050();
if (_0x0091) {
const _0x00d5 = localStorage.getItem(_0xstr(539) + _0x0091);
if (_0x00d5 === _0xstr(540)) {
localStorage.removeItem(_0xstr(541) + _0x0091);
log(`[Hệ thống] Nhận lệnh làm mới tuần tự. Đang đóng tab này...`);
localStorage.setItem(_0xstr(542) + _0x0091, _0xstr(543));
localStorage.removeItem(_0xstr(544) + _0x0091);
window.close();
}
}
}
function _0x0022() {
const now = Date.now();
if (localStorage.getItem(_0xstr(545)) || localStorage.getItem(_0xstr(546))) return;
const _0x0066 = !_0x006b && !_0x006d && !_0x006e && !_0x006c;
if (_0x0066 && (now - _0x0083) > _0x0001) {
_0x0060();
}
}
let _0x0090 = 0;
function _0x008f() {
_0x00da();
_0x00db();
_0x001f();
_0x0012 = localStorage.getItem(_0xstr(547)) || GM_getValue(_0xstr(548), _0x0000);
_0x00a1 = localStorage.getItem(_0xstr(549)) || GM_getValue(_0xstr(550), _0xstr(551));
_0x006f = localStorage.getItem(_0xstr(552)) === _0xstr(553);
_0x00dc();
const _0x0032 = window.location.href;
const hash = window.location.hash || _0xstr(554);
if (_0x0032 !== _0x0085) {
_0x0085 = _0x0032;
_0x006d = false;
_0x006e = false;
_0x006b = false;
_0x006c = false;
}
if (!_0x006f) return;
_0x0051();
_0x0090++;
if (_0x0090 % 75 === 0) {
_0x001d();
_0x001e();
_0x0024();
_0x0022();
_0x0015();
}
if (hash.includes(_0xstr(555))) {
_0x00c0();
}
if (hash.includes(_0xstr(556))) {
_0x00a7();
}
if (hash.includes(_0xstr(557))) {
_0x00a6();
}
if (hash.includes(_0xstr(558))) {
_0x00bf();
}
}
_0x00da();
let _0x00e3 = null;
try {
const _0x0017 = new Blob([`
function _0x00cd() {
postMessage("pulse");
setTimeout(_0x00cd, 400);
}
_0x00cd();
`], { type: _0xstr(559) });
const _0x00e4 = URL.createObjectURL(_0x0017);
_0x00e3 = new Worker(_0x00e4);
_0x00e3.onmessage = function(e) {
if (e.data === _0xstr(560)) {
_0x008f();
}
};
log(_0xstr(561));
} catch (err) {
log(_0xstr(562));
function _0x0049() {
_0x008f();
setTimeout(_0x0049, 400);
}
_0x0049();
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
