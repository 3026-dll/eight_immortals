// 获取天兵方块
const enemy = document.getElementById('enemy-1');

// 天兵的初始 X 坐标
let enemyX = 700;

// 设置一个定时器，每 50 毫秒执行一次（就像游戏在疯狂刷新画面）
setInterval(function() {
    // 只要天兵还没走到主角面前（比如 X 坐标大于 150）
    if (enemyX > 150) {
        enemyX -= 2; // 每次往左移动 2 像素
        enemy.style.left = enemyX + 'px'; // 更新到网页上
    }
}, 50);