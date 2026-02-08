const canvas = document.getElementById('raceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

// إعدادات السيارة
const car = {
    x: 175,
    y: 500,
    width: 50,
    height: 90,
    speed: 0,
    acceleration: 0.2,
    friction: 0.05
};

// مراقبة المفاتيح
let keys = {};
window.addEventListener('keydown', e => keys[e.code] = true);
window.addEventListener('keyup', e => keys[e.code] = false);

function update() {
    // الحركة
    if (keys['ArrowUp']) car.speed += car.acceleration;
    if (keys['ArrowDown']) car.speed -= car.acceleration;
    if (keys['ArrowLeft']) car.x -= 5;
    if (keys['ArrowRight']) car.x += 5;

    // احتكاك لتقليل السرعة تدريجياً
    car.speed *= (1 - car.friction);
    car.y -= car.speed; // في اللعبة الحقيقية، الطريق هو من يتحرك

    draw();
    requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // رسم الطريق (بسيط)
    ctx.fillStyle = "#333";
    ctx.fillRect(50, 0, 300, canvas.height);

    // رسم السيارة (مستطيل مؤقتاً - يمكنك استبداله بصورة السيارة الفخمة)
    ctx.fillStyle = "silver";
    ctx.fillRect(car.x, 500, car.width, car.height);
    
    document.getElementById('speed').innerText = Math.round(car.speed * 10);
}

update();
