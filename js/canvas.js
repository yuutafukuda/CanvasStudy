let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Rect
c.fillStyle = 'blue';
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
c.strokeStyle = 'rgba(255, 0, 0, .5)';
c.stroke();