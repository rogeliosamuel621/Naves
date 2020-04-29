var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var spaceShipX = canvas.width/2;
var spaceShipY = canvas.height - 20;
var dx = 5;
var dy = 5;
var right = false;
var left = false;
var shoot = false;
var ShootX = spaceShipX;
var shootY = canvas.height-80;
var shootDy = 5;

document.addEventListener('keydown', function move(e){

    if(e.keyCode == 39) {//right
        right = true;
    }
    if(e.keyCode == 37) {//left
        left = true;
    }
    if(e.keyCode == 32) {
        shoot = true;
        ShootX = spaceShipX;
    }
}
);
document.addEventListener('keyup', function dontMove(e) {

    if(e.keyCode == 39) {//right
        right = false;
    }
    if(e.keyCode == 37) {//left
        left = false;
    }
});


function play() {

    printSpaceShip();
    shooting();
    requestAnimationFrame(play);
}
play();

function printSpaceShip() {

    if(right && (spaceShipX+30) < canvas.width) {
        spaceShipX += dx;
    }
    if(left && spaceShipX > 10) {
        spaceShipX -= dy;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(spaceShipX-10,spaceShipY);
    ctx.lineTo(spaceShipX+10,canvas.height-50);
    ctx.lineTo(spaceShipX+30,canvas.height-20);
    ctx.fillStyle = '#3c4245'
    ctx.fill();
}

function shooting() {

    if(shoot == true) {
        ctx.beginPath();
        ctx.rect(ShootX+7.5, shootY, 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        shootY -= shootDy;        
    }
}