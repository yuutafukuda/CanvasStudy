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

// Circle Class
function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.strokeStyle = this.color;
        c.stroke();       

        c.fillStyle = this.color;
        c.fill();
    }
    
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

//Animation

let circleArray = [];

let ncircles = 15;
for (var i = 0; i < ncircles; i++) {
    let radius = 40;
    var x = Math.random() * (innerWidth - (radius * 2)) + radius;
    var y = Math.random() * (innerHeight - (radius * 2)) + radius;
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var a = Math.random();
    let color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

    circleArray.push(new Circle(x, y, dx, dy, radius, color));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();