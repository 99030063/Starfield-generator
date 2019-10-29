var canvas = document.getElementById('canvas2d');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext("2d") //c is context

var numStars = 1000;
var starArray = [];
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var speed = 5;

for(var i = 0; i < numStars; i++){
    starArray[i] = new Star();
}

function Star(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;

    this.move = function(){
        this.z = this.z-speed;
        if(this.z<=0){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.z = canvas.width;
        }
    }


    this.show = function (){
        var x,y,s;
        x = (this.x - centerX) * (fl/this.z);
        x = x + centerX;
        y = (this.y - centerY) * (fl/this.z);
        y = y + centerY;

        s = size * (fl/this.z);
        
        c.beginPath();
        c.fillStyle = "white";
        c.arc(x, y, s, 0, Math.PI*2);
        c.fill();
    }
}

function draw(){
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width, canvas.height);
    for(var i = 0; i < numStars; i++){
        starArray[i].show();
        starArray[i].move();
    }
}

function update(){
    draw();
    requestAnimationFrame(update);
}
update();




//circles / stars

// for(var i = 0; i < 250; i++){
//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
//     c.beginPath();
//     c.arc(x, y, 3, 0, Math.PI * 2, false);
//     c.fillStyle = 'white'
//     c.fill();
//     c.strokeStyle = "white";
//     c.stroke();
//     starArrays.push
// }