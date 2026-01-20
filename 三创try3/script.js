// 更新时间函数
function updateTime() {
    // 获取当前时间
    const now = new Date();
    
    // 获取小时、分钟、秒
    let hours = now.getHours();    // 0-23
    let minutes = now.getMinutes(); // 0-59
    let seconds = now.getSeconds(); // 0-59
    
    // 在个位数前补零（如 9 -> 09）
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // 创建时间字符串（格式：时:分:秒）
    const timeString = hours + ':' + minutes + ':' + seconds;
    
    // 找到页面上的时间显示元素并更新内容
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// 页面加载完成后执行
window.onload = function() {
    console.log("页面已加载，开始显示时间...");
    
    // 立即显示时间（避免等待1秒的空窗期）
    updateTime();
    
    // 每秒更新一次时间
    setInterval(updateTime, 1000);
    
    // 为登录按钮添加点击事件（可选）
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('登录功能即将开放！');
            // 这里可以添加实际的登录逻辑
        });
    }
};