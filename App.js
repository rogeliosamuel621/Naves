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
var reload = false;

var shootDy = 5;
function bullet(x,y) {
    this.x = x;
    this.y = y;
}
var newBullet;
var numOfBullets = -1;
var array = [];
var i = -1
var a = 1;
var b = 2;
var aarray2 = [];


document.addEventListener('keydown', function move(e){

    if(e.keyCode == 39) {//right
        right = true;
    }
    if(e.keyCode == 37) {//left
        left = true;
    }
    if(e.keyCode == 32) {//space

        ShootX = spaceShipX;
        newBullet = new bullet(ShootX, shootY);
        array.push(newBullet.x, newBullet.y);
        shootY = canvas.height-80;
        numOfBullets++;
    }
    if(e.keyCode == 78) {
        reload = true;
    }
});
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

    if(numOfBullets > -1){
        ctx.beginPath();
        ctx.rect(array[0]+7.5, array[1], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[1] -= shootDy;  

        if(array[1] < 0) {
    shootY = canvas.height-80;
        }
    }

    if(numOfBullets > 0){
        ctx.beginPath();
        ctx.rect(array[2]+7.5, array[3], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[3] -= shootDy;  

        if(array[3] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 1){
        ctx.beginPath();
        ctx.rect(array[4]+7.5, array[5], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[5] -= shootDy;  

        if(array[5] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 2){
        ctx.beginPath();
        ctx.rect(array[6]+7.5, array[7], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[7] -= shootDy;  

        if(array[7] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 3){
        ctx.beginPath();
        ctx.rect(array[8]+7.5, array[9], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[9] -= shootDy;  

        if(array[9] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 4){
        ctx.beginPath();
        ctx.rect(array[10]+7.5, array[11], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[11] -= shootDy;  

        if(array[11] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 5){
        ctx.beginPath();
        ctx.rect(array[12]+7.5, array[13], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[13] -= shootDy;  

        if(array[13] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 6){
        ctx.beginPath();
        ctx.rect(array[14]+7.5, array[15], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[15] -= shootDy;  

        if(array[15] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 7){
        ctx.beginPath();
        ctx.rect(array[16]+7.5, array[17], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[17] -= shootDy;  

        if(array[17] < 0) {
    shooshootY = canvas.height-80;

        }
    }

    if(numOfBullets > 8){
        ctx.beginPath();
        ctx.rect(array[18]+7.5, array[19], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[19] -= shootDy;  

        if(array[19] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 9){
        ctx.beginPath();
        ctx.rect(array[20]+7.5, array[21], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[21] -= shootDy;  

        if(array[21] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 10){
        ctx.beginPath();
        ctx.rect(array[22]+7.5, array[23], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[23] -= shootDy;  

        if(array[23] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 11){
        ctx.beginPath();
        ctx.rect(array[24]+7.5, array[25], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[25] -= shootDy;  

        if(array[25] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 12){
        ctx.beginPath();
        ctx.rect(array[26]+7.5, array[27], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[27] -= shootDy;  

        if(array[27] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 13){
        ctx.beginPath();
        ctx.rect(array[28]+7.5, array[29], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[29] -= shootDy;  

        if(array[29] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 14){
        ctx.beginPath();
        ctx.rect(array[30]+7.5, array[31], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[31] -= shootDy;  

        if(array[31] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 15){
        ctx.beginPath();
        ctx.rect(array[32]+7.5, array[33], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[33] -= shootDy;  

        if(array[33] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 16){
        ctx.beginPath();
        ctx.rect(array[34]+7.5, array[35], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[35] -= shootDy;  

        if(array[35] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 17){
        ctx.beginPath();
        ctx.rect(array[36]+7.5, array[37], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[37] -= shootDy;  

        if(array[37] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 18){
        ctx.beginPath();
        ctx.rect(array[38]+7.5, array[39], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[39] -= shootDy;  

        if(array[39] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 19){
        ctx.beginPath();
        ctx.rect(array[40]+7.5, array[41], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[41] -= shootDy;  

        if(array[41] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 20){
        ctx.beginPath();
        ctx.rect(array[42]+7.5, array[43], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[43] -= shootDy;  

        if(array[43] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 21){
        ctx.beginPath();
        ctx.rect(array[44]+7.5, array[45], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[45] -= shootDy;  

        if(array[45] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 22){
        ctx.beginPath();
        ctx.rect(array[46]+7.5, array[47], 5, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
    
        array[47] -= shootDy;  

        if(array[47] < 0) {
    shooshootY = canvas.height-80;

        }
    }
    if(numOfBullets > 23) {
        if(array[47] < 0 && reload) {
            array = [];
            numOfBullets = -1;
            reload = false;
        }
    }
}