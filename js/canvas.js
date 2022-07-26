let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Rect
c.fillStyle = 'rgba(0, 255, 0, .8)';
c.fillRect(10, 10, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 200);
c.strokeStyle = "#e34c26";
c.stroke();

// Arc or Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, true);
c.strokeStyle = 'blue';
c.stroke();

for (var i = 0; i < 3; i++) {
    var x = Math.random();
    var y = Math.random();

    c.beginPath();
    c.arc(x * window.innerWidth/2, y * window.innerHeight/2, 30, 0, Math.PI * 2, true);
    c.strokeStyle = 'rgba(' + (x * 255) + ',' + (y * 255) + ',' + ((x + y) * 255/2) + ', .5)';
    c.stroke(); 
}