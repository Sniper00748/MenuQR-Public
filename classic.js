document.addEventListener('DOMContentLoaded', function() {
    const menuItemsContainer = document.getElementById('menu-items');
    
    // 加载经典鸡尾酒菜品
    function loadClassicCocktails() {
        menuItemsContainer.innerHTML = '';
        
        // 筛选出经典鸡尾酒类别的菜品 (categoryId = 1)
        const items = menuData.items.filter(item => item.categoryId === 1);
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            // 生成雷达图SVG
            const radarSvg = generateRadarChart(item.stats);
            
            menuItem.innerHTML = `
                <div class="card border-0 h-100">
                    <div class="menu-item-content">
                        <div class="menu-item-left">
                            <img src="${item.image}" class="menu-item-image" alt="${item.name}">
                            <div class="radar-chart">
                                ${radarSvg}
                            </div>
                        </div>
                        <div class="menu-item-right">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h5 class="card-title mb-0">${item.name}</h5>
                                <span class="menu-item-price">¥${item.price}</span>
                            </div>
                            <p class="menu-item-description mb-2">${item.description}</p>
                            <p style="color: #555555; font-size: 1rem;"><strong>配料：</strong>${item.ingredients}</p>
                        </div>
                    </div>
                </div>
            `;
            
            // 添加点击事件处理
            menuItem.addEventListener('click', function(e) {
                // 在移动设备上优化滚动体验
                if (window.innerWidth <= 768) {
                    // 只有当点击的是卡片而不是滚动操作时才执行
                    if (e.target.closest('.card-body')) {
                        // 计算元素顶部到视口顶部的距离
                        const rect = this.getBoundingClientRect();
                        // 只有当元素距离顶部较远时才滚动
                        if (Math.abs(rect.top) > 50) {
                            this.scrollIntoView({behavior: 'smooth'});
                        }
                    }
                }
            });
            
            menuItemsContainer.appendChild(menuItem);
        });
        
        // 在移动设备上，添加滚动监听以优化单屏显示体验
        if (window.innerWidth <= 768) {
            // 移除之前可能存在的滚动监听器
            window.removeEventListener('scroll', handleMenuScroll);
            // 添加新的滚动监听器
            window.addEventListener('scroll', handleMenuScroll);
        }
    }
    
    // 处理菜单滚动，优化移动端单屏显示体验
    function handleMenuScroll() {
        const menuItems = document.querySelectorAll('.menu-item');
        if (menuItems.length === 0) return;
        
        // 只有当用户停止滚动一段时间后才考虑自动对齐
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            // 只有当滚动几乎停止时才检查是否需要对齐
            if (!isScrolling) {
                // 找出当前在视口中最接近顶部的菜单项
                let closestItem = null;
                let closestDistance = Infinity;
                
                menuItems.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestItem = item;
                    }
                });
                
                // 只有当菜单项非常接近顶部但又不完全在顶部时才进行微调
                if (closestItem && closestDistance > 5 && closestDistance < 50) {
                    isScrolling = true;
                    closestItem.scrollIntoView({behavior: 'smooth'});
                    setTimeout(() => { isScrolling = false; }, 500);
                }
            }
        }, 300); // 等待用户停止滚动300毫秒后再考虑对齐
    }
    
    // 滚动状态标志，防止滚动事件重复触发
    let isScrolling = false;
    // 滚动定时器，用于检测滚动停止
    let scrollTimer = null;
    
    // 生成雷达图SVG
    function generateRadarChart(stats) {
        if (!stats) return '';
        
        const labels = ['酒精度', '甜度', '酸度', '苦度', '复杂度', '酒体'];
        const values = [stats.alcohol, stats.sweetness, stats.acidity, stats.bitterness, stats.complexity, stats.body];
        const maxValue = 5;
        const center = 50;
        const radius = 35;
        
        // 计算六边形的顶点
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            points.push({x, y, label: labels[i]});
        }
        
        // 计算数据点
        const dataPoints = [];
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
            const value = values[i] / maxValue;
            const x = center + Math.cos(angle) * radius * value;
            const y = center + Math.sin(angle) * radius * value;
            dataPoints.push({x, y});
        }
        
        // 生成网格线
        let gridLines = '';
        for (let level = 1; level <= 5; level++) {
            const levelRadius = (radius * level) / 5;
            const levelPoints = [];
            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
                const x = center + Math.cos(angle) * levelRadius;
                const y = center + Math.sin(angle) * levelRadius;
                levelPoints.push(`${x},${y}`);
            }
            gridLines += `<polygon points="${levelPoints.join(' ')}" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="0.5"/>`;
        }
        
        // 生成轴线
        let axisLines = '';
        for (let i = 0; i < 6; i++) {
            const point = points[i];
            axisLines += `<line x1="${center}" y1="${center}" x2="${point.x}" y2="${point.y}" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/>`;
        }
        
        // 生成数据区域
        const dataPath = dataPoints.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ') + ' Z';
        
        // 生成标签
        let labels_svg = '';
        for (let i = 0; i < 6; i++) {
            const point = points[i];
            const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
            const labelX = center + Math.cos(angle) * (radius + 8);
            const labelY = center + Math.sin(angle) * (radius + 8);
            
            let textAnchor = 'middle';
            if (labelX > center + 5) textAnchor = 'start';
            else if (labelX < center - 5) textAnchor = 'end';
            
            labels_svg += `<text x="${labelX}" y="${labelY + 2}" text-anchor="${textAnchor}" fill="#555555" font-size="8" font-family="Microsoft YaHei">${point.label}</text>`;
        }
        
        return `
            <svg viewBox="-15 -15 130 130" xmlns="http://www.w3.org/2000/svg">
                ${gridLines}
                ${axisLines}
                <path d="${dataPath}" fill="rgba(255, 152, 0, 0.3)" stroke="rgba(255, 87, 34, 0.8)" stroke-width="1.5"/>
                ${dataPoints.map(point => `<circle cx="${point.x}" cy="${point.y}" r="1.5" fill="rgba(255, 87, 34, 1)"/>`).join('')}
                ${labels_svg}
            </svg>
        `;
    }
    
    // 初始化加载
    loadClassicCocktails();
});