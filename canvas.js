var canvas = document.getElementById('canvas2d');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext("2d") //c is context
    c.beginPath();
    c.arc(200, 200, 30, 0, 2 * Math.PI);
    c.strokeStyle = "yellow";
    c.stroke();



    function Circle(x, y){
        this.x = x;
        this.y = y;

        this.draw = function(){
            c.beginPath();
            c.arc(x, y, radius, 0, 2 * Math.PI);
            c.fillStyle = "yellow";
            c.fill();
            c.strokeStyle = "yellow";
            c.stroke();
        }
    }
    
    var circle = new Circle(200, 200);

    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var radius = 30

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        circle.draw();
        
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.fillStyle = "yellow";
        c.fill();
        c.strokeStyle = "yellow";
        c.stroke();

        if(x + radius > canvas.width | x -radius < 0){
            dx = -dx
        }

        if(y + radius > canvas.height | y - radius < 0){
            dy = -dy
        }
        x += dx
        y += dy
    }

    animate();