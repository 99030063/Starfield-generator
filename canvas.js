var canvas = document.getElementById('canvas2d');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext("2d") //c is context

// c.fillStyle = "rgba( 0, 0, 255, 0.5)";
// c.fillRect(100, 100, 100, 100);

// console.log(canvas)

//line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "blue";
// c.stroke();

//arc / circle 
// c.beginPath();
// c.arc(300, 300, 30, 0, 2 * Math.PI);
// c.strokeStyle = "yellow";
// c.stroke();

// for(var i = 0; i < 1000; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, 2 * Math.PI);
//     c.strokeStyle = "yellow";
//     c.stroke();
// }
    c.beginPath();
    c.arc(200, 200, 30, 0, 2 * Math.PI);
    c.strokeStyle = "yellow";
    c.stroke();

    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = Math.random() - 0.5;
    var dy = 5;
    var radius = 30

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.strokeStyle = "yellow";
        c.stroke();

        if(x + radius > innerWidth | x -radius < 0){
            dx = -dx
        }

        if(y + radius > innerHeight | y - radius < 0){
            dy = -dy
        }
        x += dx
        y += dy
    }

    animate();