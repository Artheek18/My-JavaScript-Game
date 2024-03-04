/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 50;
const enemyArray = [];
let gameFrame = 0;

/*enemy1 = {
    x:10,
    y:50,
    width: 200,
    height: 200,
}*/
class Enemy{
    constructor(){
        this.image  = new Image();
        this.image.src = "./Asset/enemies/enemy4.png";
        //this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteHeight/2.5;
        this.height = this.spriteHeight/2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ?  this.frame = 0 : this.frame++;
        }
        

    }
    draw(){
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image,
            this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height);
       
    }

};

//const enemy1 = new Enemy();
for(let i = 0; i < numberOfEnemies; i++){
    enemyArray.push(new Enemy());

}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //enemy1.update();
    //enemy1.draw();
    enemyArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);

}

animate();