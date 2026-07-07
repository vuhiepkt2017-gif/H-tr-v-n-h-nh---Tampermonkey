(function() {
    'use strict';

    // 1. Cấu hình & Quản lý trạng thái (nạp từ localStorage nếu có)
    const STORAGE_KEY = 'vtd_sheet_highlighter_config';
    const DEFAULT_CONFIG = {
        color: '#0e65eb',
        opacity: 0.1,
        row: true,
        column: false,
        auto: true
    };

    let config = { ...DEFAULT_CONFIG };

    // Kiểm tra trạng thái bật/tắt của Extension và của riêng Script này từ chrome.storage.local
    chrome.storage.local.get(["extension_enabled", "extension_unlocked", "user_scripts"], (res) => {
        if (res.extension_unlocked !== true || res.extension_enabled === false) {
            return;
        }

        const scripts = res.user_scripts || [];
        // Tìm script bôi màu dòng cột
        const thisScript = scripts.find(s => s.name.includes("Bôi màu") || s.matchUrl.includes("spreadsheets"));
        if (!thisScript || !thisScript.enabled) {
            console.log("[VTDAuto] Script bôi màu dòng cột đang tắt.");
            return;
        }

        console.log("[VTDAuto] Khởi chạy kịch bản Bôi màu dòng cột Google Sheets...");
        startHighlighter();
    });

    function startHighlighter() {
        function loadConfig() {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    config = { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
                }
            } catch (e) {
                console.error('Failed to load config', e);
            }
        }

        function saveConfig() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
            } catch (e) {
                console.error('Failed to save config', e);
            }
        }

        loadConfig();

        // 2. Tạo phần tử hiển thị bôi màu (Highlighter Overlays)
        const rowHighlighter = document.createElement('div');
        rowHighlighter.id = 'vtd-row-highlighter';
        rowHighlighter.style.position = 'fixed';
        rowHighlighter.style.pointerEvents = 'none';
        rowHighlighter.style.zIndex = '5'; // Nằm trên ô dữ liệu, dưới các đường viền chọn & menu
        rowHighlighter.style.display = 'none';

        const colHighlighter = document.createElement('div');
        colHighlighter.id = 'vtd-col-highlighter';
        colHighlighter.style.position = 'fixed';
        colHighlighter.style.pointerEvents = 'none';
        colHighlighter.style.zIndex = '5';
        colHighlighter.style.display = 'none';

        document.body.appendChild(rowHighlighter);
        document.body.appendChild(colHighlighter);

        // Cập nhật kiểu dáng dựa trên cấu hình
        function updateHighlighterStyles() {
            rowHighlighter.style.backgroundColor = config.color;
            rowHighlighter.style.opacity = config.opacity;
            colHighlighter.style.backgroundColor = config.color;
            colHighlighter.style.opacity = config.opacity;
        }
        updateHighlighterStyles();

        // 3. Tìm phần tử ô đang chọn (Active Cell Focus Indicator) của Google Sheets
        function findSelectionIndicator() {
            // Chiến lược A: Tìm theo class định danh của Google Sheets
            const selectors = [
                '.docs-sheet-selection-focus-indicator',
                '.selection-focus-indicator',
                '.grid-active-cell',
                '.autofill-cover'
            ];
            for (const selector of selectors) {
                const el = document.querySelector(selector);
                if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
                    return el;
                }
            }

            // Chiến lược B: Quét vùng Grid Canvas tìm div có viền xanh dương đặc trưng
            const gridCanvas = document.querySelector('.grid-canvas-container');
            if (gridCanvas) {
                const divs = gridCanvas.querySelectorAll('div');
                for (const div of divs) {
                    if (div.style.position === 'absolute' && div.offsetWidth > 0) {
                        const borderTop = window.getComputedStyle(div).borderTopColor;
                        if (borderTop.includes('rgb(26, 115, 232)') || borderTop.includes('rgb(14, 101, 235)')) {
                            return div;
                        }
                    }
                }
            }

            // Chiến lược C: Tìm div bất kỳ có viền 2px màu xanh dương
            const activeCellBorders = document.querySelectorAll('div[style*="border-top-color"][style*="2px"]');
            for (const border of activeCellBorders) {
                if (border.offsetWidth > 0) return border;
            }

            return null;
        }

        // 4. Định vị trí cho các phần tử bôi màu
        function updateHighlights() {
            if (!config.auto) {
                rowHighlighter.style.display = 'none';
                colHighlighter.style.display = 'none';
                return;
            }

            const indicator = findSelectionIndicator();
            if (!indicator) {
                rowHighlighter.style.display = 'none';
                colHighlighter.style.display = 'none';
                return;
            }

            const rect = indicator.getBoundingClientRect();
            const gridContainer = document.querySelector('.grid-canvas-container');
            const gridRect = gridContainer ? gridContainer.getBoundingClientRect() : null;

            // Định vị cho hàng (Row)
            if (config.row) {
                rowHighlighter.style.display = 'block';
                rowHighlighter.style.top = rect.top + 'px';
                rowHighlighter.style.height = rect.height + 'px';
                
                if (gridRect) {
                    rowHighlighter.style.left = gridRect.left + 'px';
                    rowHighlighter.style.width = gridRect.width + 'px';
                } else {
                    rowHighlighter.style.left = '0';
                    rowHighlighter.style.width = '100vw';
                }
            } else {
                rowHighlighter.style.display = 'none';
            }

            // Định vị cho cột (Column)
            if (config.column) {
                colHighlighter.style.display = 'block';
                colHighlighter.style.left = rect.left + 'px';
                colHighlighter.style.width = rect.width + 'px';

                if (gridRect) {
                    colHighlighter.style.top = gridRect.top + 'px';
                    colHighlighter.style.height = gridRect.height + 'px';
                } else {
                    colHighlighter.style.top = '0';
                    colHighlighter.style.height = '100vh';
                }
            } else {
                colHighlighter.style.display = 'none';
            }
        }

        // Thực hiện quét liên tục để bắt sự kiện di chuyển ô, cuộn trang, đổi kích thước
        setInterval(updateHighlights, 80);

        // Kích hoạt ngay lập tức khi click chuột hoặc bấm phím để giảm độ trễ
        window.addEventListener('mouseup', () => setTimeout(updateHighlights, 0));
        window.addEventListener('keyup', () => setTimeout(updateHighlights, 0));
        window.addEventListener('resize', updateHighlights);

        // 5. Tạo và chèn bảng điều khiển nổi (Floating Control Panel UI)
        const panel = document.createElement('div');
        panel.id = 'vtd-highlighter-panel';
        panel.style.position = 'fixed';
        panel.style.bottom = '40px';
        panel.style.right = '40px';
        panel.style.zIndex = '99999';
        panel.style.backgroundColor = '#ffffff';
        panel.style.border = '1px solid #c0c0c0';
        panel.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
        panel.style.fontFamily = 'Arial, sans-serif';
        panel.style.fontSize = '13px';
        panel.style.color = '#333333';
        panel.style.borderRadius = '4px';
        panel.style.overflow = 'hidden';
        panel.style.userSelect = 'none';

        // Nhúng CSS kiểu dáng Grid giống Google Sheets
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            #vtd-highlighter-panel table {
                border-collapse: collapse;
                margin: 0;
                padding: 0;
            }
            #vtd-highlighter-panel td, #vtd-highlighter-panel th {
                border: 1px solid #e0e0e0;
                padding: 6px 12px;
                height: 24px;
                vertical-align: middle;
            }
            #vtd-highlighter-panel th {
                background-color: #f8f9fa;
                color: #5f6368;
                font-weight: normal;
                font-size: 11px;
                text-align: center;
            }
            #vtd-highlighter-panel .col-header {
                width: 120px;
            }
            #vtd-highlighter-panel .row-header {
                background-color: #f8f9fa;
                color: #5f6368;
                font-size: 11px;
                text-align: center;
                width: 30px;
                font-weight: normal;
            }
            #vtd-highlighter-panel .title-cell {
                font-weight: bold;
                font-size: 14px;
                text-align: center;
                background-color: #ffffff;
                color: #202124;
            }
            #vtd-highlighter-panel input[type="color"] {
                border: 1px solid #a0a0a0;
                padding: 0;
                width: 100%;
                height: 22px;
                cursor: pointer;
                background: none;
            }
            #vtd-highlighter-panel input[type="number"] {
                width: 90%;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 3px 5px;
                font-size: 12px;
                outline: none;
            }
            #vtd-highlighter-panel input[type="checkbox"] {
                cursor: pointer;
                width: 16px;
                height: 16px;
            }
            #vtd-highlighter-panel .btn-reset {
                background-color: #f1f3f4;
                border: 1px solid #dadce0;
                border-radius: 4px;
                color: #3c4043;
                cursor: pointer;
                padding: 4px 16px;
                font-size: 12px;
                font-weight: 500;
            }
            #vtd-highlighter-panel .btn-reset:hover {
                background-color: #e8eaed;
            }
            #vtd-highlighter-panel .drag-handle {
                background-color: #f8f9fa;
                height: 8px;
                cursor: move;
                border-bottom: 1px solid #e0e0e0;
            }
        `;
        document.head.appendChild(styleSheet);

        panel.innerHTML = `
            <div class="drag-handle" title="Kéo để di chuyển"></div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class="col-header">A</th>
                        <th class="col-header">B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="row-header">1</td>
                        <td colspan="2" class="title-cell">Row Highlighter</td>
                    </tr>
                    <tr>
                        <td class="row-header">2</td>
                        <td>Color</td>
                        <td><input type="color" id="vtd-val-color" value="${config.color}"></td>
                    </tr>
                    <tr>
                        <td class="row-header">3</td>
                        <td>Opacity</td>
                        <td><input type="number" id="vtd-val-opacity" value="${config.opacity}" step="0.05" min="0" max="1"></td>
                    </tr>
                    <tr>
                        <td class="row-header">4</td>
                        <td>Row</td>
                        <td style="text-align: center;"><input type="checkbox" id="vtd-val-row" ${config.row ? 'checked' : ''}></td>
                    </tr>
                    <tr>
                        <td class="row-header">5</td>
                        <td>Column</td>
                        <td style="text-align: center;"><input type="checkbox" id="vtd-val-col" ${config.column ? 'checked' : ''}></td>
                    </tr>
                    <tr>
                        <td class="row-header">6</td>
                        <td>Auto</td>
                        <td style="text-align: center;"><input type="checkbox" id="vtd-val-auto" ${config.auto ? 'checked' : ''}></td>
                    </tr>
                    <tr>
                        <td class="row-header">7</td>
                        <td colspan="2" style="text-align: center;">
                            <button class="btn-reset" id="vtd-btn-reset">Reset</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
        document.body.appendChild(panel);

        // Bắt sự kiện thay đổi giá trị
        const inputColor = document.getElementById('vtd-val-color');
        const inputOpacity = document.getElementById('vtd-val-opacity');
        const inputRow = document.getElementById('vtd-val-row');
        const inputCol = document.getElementById('vtd-val-col');
        const inputAuto = document.getElementById('vtd-val-auto');
        const btnReset = document.getElementById('vtd-btn-reset');

        function handleConfigChange() {
            config.color = inputColor.value;
            config.opacity = parseFloat(inputOpacity.value) || 0;
            config.row = inputRow.checked;
            config.column = inputCol.checked;
            config.auto = inputAuto.checked;
            saveConfig();
            updateHighlighterStyles();
            updateHighlights();
        }

        inputColor.addEventListener('input', handleConfigChange);
        inputOpacity.addEventListener('input', handleConfigChange);
        inputRow.addEventListener('change', handleConfigChange);
        inputCol.addEventListener('change', handleConfigChange);
        inputAuto.addEventListener('change', handleConfigChange);

        btnReset.addEventListener('click', () => {
            config = { ...DEFAULT_CONFIG };
            inputColor.value = config.color;
            inputOpacity.value = config.opacity;
            inputRow.checked = config.row;
            inputCol.checked = config.column;
            inputAuto.checked = config.auto;
            saveConfig();
            updateHighlighterStyles();
            updateHighlights();
        });

        // Kéo thả bảng điều khiển
        const dragHandle = panel.querySelector('.drag-handle');
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = panel.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            e.preventDefault();
        });

        function onMouseMove(e) {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            panel.style.bottom = 'auto';
            panel.style.right = 'auto';
            panel.style.left = (initialLeft + dx) + 'px';
            panel.style.top = (initialTop + dy) + 'px';
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }

})();
