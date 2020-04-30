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
    this.status = 1;
}
var newBullet;
var numOfBullets = -1;
var array = [];

var enemiesRows = 3;
var enemiesColumns = 12;
var enemiesWitdh = 20;
var enemiesHeight = 20;
var enemiesMarginTop = 30; 
var enemiesMarginleft = 65;
var enemiesPadding = 50;

var enemies = [];//filling the matrix
for(c=0; c<enemiesColumns; c++) {
    enemies[c] = [];
    for(r=0; r<enemiesRows; r++) {
        enemies[c][r] = {x:0, y:0, status:1}
    }
}


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
        array.push(newBullet.x, newBullet.y, newBullet.status);
        console.log(array)
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
    printEnemies();
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
        if(array[2] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[0]+7.5, array[1], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[1] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[1] < b.y + enemiesWitdh && array[0] > b.x - enemiesWitdh-12 && array[0] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[2] = 0;//status
                            
                        }
                    }
                }
            }
        }  
    }
    
    if(numOfBullets > 0){
        if(array[5] === 1) {
            ctx.beginPath();
            ctx.rect(array[3]+7.5, array[4], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
        
            array[4] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[4] < b.y + enemiesWitdh && array[3] > b.x - enemiesWitdh-12 && array[3] < b.x + enemiesWitdh) {
                            
                            b.status = 0;//so it wont print it in the next frame    
                            array[5] = 0;   
                            
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 1){
        if(array[8] === 1) {
            ctx.beginPath();
            ctx.rect(array[6]+7.5, array[7], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
        
            array[7] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[7] < b.y + enemiesWitdh && array[6] > b.x - enemiesWitdh-12 && array[6] < b.x + enemiesWitdh) {
                            
                            b.status = 0;//so it wont print it in the next frame    
                            array[8] = 0;   
                            
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 2){
        if(array[11] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[9]+7.5, array[10], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[10] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[10] < b.y + enemiesWitdh && array[9] > b.x - enemiesWitdh-12 && array[9] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[11] = 0;//status
                            
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 3){
        if(array[14] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[12]+7.5, array[13], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[13] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[13] < b.y + enemiesWitdh && array[12] > b.x - enemiesWitdh-12 && array[12] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[14] = 0;//status
                            
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 4){
        if(array[17] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[15]+7.5, array[16], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[16] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[16] < b.y + enemiesWitdh && array[15] > b.x - enemiesWitdh-12 && array[15] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[17] = 0;//status
                            
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 5){
        if(array[20] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[18]+7.5, array[19], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[19] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[19] < b.y + enemiesWitdh && array[18] > b.x - enemiesWitdh-12 && array[18] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[20] = 0;//status
                            array[19] = -1;
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 6){
        if(array[23] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[21]+7.5, array[22], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[22] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[22] < b.y + enemiesWitdh && array[21] > b.x - enemiesWitdh-12 && array[21] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[23] = 0;//status
                            array[22] = -1;//y
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 7){
        if(array[26] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[24]+7.5, array[25], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[25] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[25] < b.y + enemiesWitdh && array[24] > b.x - enemiesWitdh-12 && array[24] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[26] = 0;//status
                            array[25] = -1;//y
                        }
                    }
                }
            }
        }  
    }

    if(numOfBullets > 8){
        if(array[29] === 1) {//status
            ctx.beginPath();
                        //x            //y
            ctx.rect(array[27]+7.5, array[28], 5, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.closePath();
                //y
            array[28] -= shootDy;

            for(c=0; c<enemiesColumns; c++) {
                for(r=0; r<enemiesRows; r++) {
                    b = enemies[c][r];
                    if(b.status == 1) {
                        if(array[28] < b.y + enemiesWitdh && array[28] > b.x - enemiesWitdh-12 && array[28] < b.x + enemiesWitdh) {
                              //y                              //x                                  //x
                            b.status = 0;//so it wont print it in the next frame    
                            array[29] = 0;//status
                            array[29] = -1;//y
                        }
                    }
                }
            }
        }  
    }

    if(array[29] < 0 && reload) {
        array = [];
        reload = false;
    }

}

function printEnemies() {

    for(let c=0; c<enemiesColumns; c++) {
        for(let r=0; r<enemiesRows; r++) {

            if(enemies[c][r].status === 1) {

                var enemieX = (c*(enemiesWitdh+enemiesPadding))+enemiesMarginleft;
                var enemieY = (r*(enemiesHeight+enemiesPadding))+enemiesMarginTop;

                enemies[c][r].x = enemieX;
                enemies[c][r].y = enemieY;

                ctx.beginPath();
                ctx.arc(enemieX, enemieY, enemiesWitdh, 0, Math.PI*2);
                ctx.fillStyle = "#bb3b0e";
                ctx.fill();
                ctx.closePath();
            }
        }
    } 
}

function crush() {

    for(c=0; c<enemiesColumns; c++) {
        for(r=0; r<enemiesRows; r++) {
            var b = enemies[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+blockWidth+this.ballRadius && y > b.y && y < b.y+blockHeight+this.ballRadius) {
                    
                    b.status = 0;//so it wont print it in the next frame
                    
                }
            }
        }
    }
}