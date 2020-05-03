var level = 2;
var score = 0;
var lives = 3;
var damage = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');//to draw
var spaceShipX = canvas.width/2;
var spaceShipY = canvas.height - 20;
var dx = 5;//to move the ship
var dy = 5;//to move the ship
var right = false;//to verify whereis moving to
var left = false;
var shoot = false;
var ShootX = spaceShipX;//bullet
var shootY = canvas.height-80;//bullet
var reload = false;//empty the array

//bullets
var shootDy = 5;//to move the bullet
function bullet(x,y) {
    this.x = x;
    this.y = y;
    this.status = 1;
}
var newBullet;
var numOfBullets = -1;
var array = [];//to store the bullets

//enemies
var enemieY = 0;
var enemieX = 0; 
var enemiesRows = 3;
var enemiesColumns = 6;
var enemiesWitdh = 20;
var enemiesHeight = 20;
var enemiesMarginTop = 30; 
var enemiesMarginleft = 210;
var enemiesPadding = 80;
var enemies = [];//filling the matrix
for(c=0; c<enemiesColumns; c++) {
    enemies[c] = [];
    for(r=0; r<enemiesRows; r++) {
        enemies[c][r] = {x:0, y:0, status:1, alreadyPrinted: 0, look: 0}
    }
}
var enemiesDx = 2;
var enemiesBand = 0;


//stars for the background
var starX = 0
var starY = 0;
var starDy = 8;
function stars() {this.x = 0, this.y = 0, this.status = 0}
var vector = [];
var newStar;
for(var i=0; i<30; i++) {
    newStar = new stars();
    vector[i] = newStar;
}

//boss
var bossX = canvas.width/2;
var bossY = (canvas.width/2)-850;
var bossDx = 2;
var bossDy = 2;
var alreadySetY = false;
var bossBulletX = 0;
var bossBulletY = 0
var bossBulletDy = 7;
function bossBullets() {this.x = 0, this.y = 0, this.status = 0, this.print = 0}
var bossVector = [];
var newBossBullet;
for(var i=0; i<10; i++) {
    newBossBullet = new bossBullets();
    bossVector[i] = newBossBullet;
    console.log(bossVector);
}
var contador = 0;
var weakPointX = canvas.width/2;
var weakPointY = bossY + 200;


document.addEventListener('keydown', function move(e){

    if(e.keyCode == 39) {//right
        right = true;
    }
    if(e.keyCode == 37) {//left
        left = true;
    }
    if(e.keyCode == 32) {//space

        ShootX = spaceShipX;
        newBullet = new bullet(ShootX, shootY);//create a new bullet
        array.push(newBullet.x, newBullet.y, newBullet.status);//store the position of the bullet
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

    
    if(level === 1) {
        printSpaceShip();
        printEnemies();
        shooting();
        backgorund();
        rules();
    }
    if(level === 2) {
        printSpaceShip();
        bossTakingDamage();
        backgorund();
        rules();
        Boss();
        lose();
    }
    
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

    if(damage == true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(spaceShipX-10,spaceShipY);
        ctx.lineTo(spaceShipX+10,canvas.height-50);
        ctx.lineTo(spaceShipX+30,canvas.height-20);
        ctx.fillStyle = '#888888'
        ctx.fill();
        damage = false;
    }
}

function shooting() {//dont open it

    for(var i=0, y=1, s=2; i<array.length; i+=3, y+=3, s+=3) {
        if(array[s] === 1) {
            ctx.beginPath();
            ctx.rect(array[i]+7.5, array[y], 5, 10);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();

            array[y] -= shootDy;

            //verify if it touches any ball
            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[y] === b.y + enemiesWitdh && array[i] > b.x - enemiesWitdh-12 && array[i] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[s] = 0;//status
                            array[y] = -1;//y
                            score++;
                        }
                    }
                }
            }
        }
    }

    if(score === (enemiesColumns*enemiesRows)) {
        score = 0;
        level = 2;
        array = [];
    }
}

function printEnemies() {

    for(let c=0; c<enemiesColumns; c++) {
        for(let r=0; r<enemiesRows; r++) {

            if(enemies[c][r].status === 1) {

                if(enemies[c][r].alreadyPrinted === 0) {
                    enemieX = (c*(enemiesWitdh+enemiesPadding))+enemiesMarginleft;
                    enemieY = (r*(enemiesHeight+enemiesPadding))+enemiesMarginTop;
                    enemies[c][r].x = enemieX;
                    enemies[c][r].y = enemieY;
                    enemies[c][r].alreadyPrinted = 1;

                    enemies[c][r].look = Math.floor(Math.random() * (2 - 1)) + 1;
                }

                ctx.beginPath();
                ctx.arc(enemies[c][r].x, enemies[c][r].y, enemiesWitdh, 0, Math.PI*2);
                ctx.fillStyle = "#bb3b0e";
                ctx.fill();
                ctx.closePath();

                
                if(enemies[c][r].x - enemiesWitdh > 0 && enemiesBand === 0 ) {
                    enemies[c][r].x += enemiesDx;
                }
                if(enemies[c][r].x + enemiesWitdh === canvas.width-2) {
                    enemiesBand = 1;
                }
                if(enemies[c][r].x - enemiesWitdh === 2) {
                    enemiesBand = 0;
                }
                if(enemies[c][r].x + enemiesWitdh < canvas.width && enemiesBand === 1) {
                    enemies[c][r].x -= enemiesDx;
                }

            }
        }
    } 
}

function backgorund() {

    for(let i=0; i<vector.length; i++) {
        
        if(vector[i].status === 0) {
            starX = Math.floor(Math.random() * (canvas.width - 0)) + 0;
            starY = Math.floor(Math.random() * ((canvas.height-300) - 0)) + 0;
            vector[i].x = starX;
            vector[i].y = starY;
            vector[i].status = 1;
        }

        ctx.beginPath();
        ctx.rect(vector[i].x, vector[i].y, 2, 1);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();

        vector[i].y += starDy;

        if(vector[i].y > canvas.height) {
            vector[i].y = 0;
            vector[i].status = 0;
        }
    }
}

function rules() {

    ctx.font = "16px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: " + score, 10, 15);

    ctx.font = "16px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("vidas: " + lives,canvas.width-80,15);
}

function Boss() {

    ctx.beginPath();
    ctx.arc(bossX, bossY, 200, 0, Math.PI*2);
    ctx.fillStyle = "#bb3b0e";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(weakPointX, weakPointY, 30, 0, Math.PI*2);
    ctx.fillStyle = "#1f4068";
    ctx.fill();
    ctx.closePath();

    if(!alreadySetY) {

        bossY += bossDy;
        weakPointY += bossDy;
        if(bossY === (canvas.width/2)-500) {
            alreadySetY = true;
        }
    }
    if(alreadySetY) {
        for(var i=0; i<bossVector.length; i++) {
            if(bossVector[i].status === 0) {
                bossBulletX = Math.floor(Math.random() * (canvas.width-150 - 150)) + 150;
                bossBulletY = Math.floor(Math.random() * (10 - 0)) + 0;
                bossVector[i].x = bossBulletX;
                bossVector[i].y = bossBulletY;
                bossVector[i].status = 1;
            }
            ctx.beginPath();
            ctx.rect(bossVector[i].x, bossVector[i].y, 10, 10);
            ctx.fillStyle = '#bb3b0e';
            ctx.fill();
            ctx.closePath();

            bossVector[i].y += bossBulletDy;

            if(bossVector[i].x > spaceShipX-10 && bossVector[i].x - 10 < spaceShipX+30 && bossVector[i].y+10 > spaceShipY) {
                damage = true;
                bossVector[i].y = 0;
                bossVector[i].status = 0;
                lives--;
            }

            if(bossVector[i].y > canvas.height) {
                bossVector[i].y = 0;
                bossVector[i].status = 0;
            }
        }
    }
}

function bossTakingDamage() {
 
    for(var i=0, y=1, s=2; i<array.length; i+=3, y+=3, s+=3) {
        if(array[s] === 1) {
            ctx.beginPath();
            ctx.rect(array[i]+7.5, array[y], 5, 10);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();

            array[y] -= shootDy;

            if(array[i] + 5 > weakPointX-30 && array[i] < weakPointX + 30 && array[y] == weakPointY + 30) {
                score++;
            }
            if(score === 200) {
                alert('Felicidades has ganado');
                array = [];
                document.location.reload();
            }
        }
    }
}

function lose() {
    if(lives === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        alert('Has perdido');
        document.location.reload();
    }
}