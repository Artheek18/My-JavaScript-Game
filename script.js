let playerState = "run";
const dropdown = document.getElementById("animations");
dropdown.addEventListener('change', function(e){
  playerState = e.target.value;
});


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);

const WIDTH_CANVAS = canvas.width = 700;
const HEIGHT_CANVAS = canvas.height = 700;

const player_Image = new Image();
player_Image.src = "./Asset/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 525;
let horizontalFrame = 0;
let verticalFrame = 0;
let gameFrame = 0;


const staggerFrame = 6;
const spriteAnimations = [];
const animationState = [
  {
  name: "idle",
  frames: 7,
  }
,
  {
    name: "jump",
    frames: 7,
    }
,
  {
    name: "fall",
    frames: 7,
    }
  
,
  {
    name: "run",
    frames: 9,
    }
    ,
  {
    name: "dizzy",
    frames: 11,
    },
  {
    name: "sit",
    frames: 5,
    }
,
  {
    name: "roll",
    frames: 7,
    }
    ,
  {
    name: "bite",
    frames: 7,
    }

    ,
  {
    name: "ko",
    frames: 12,
    }
,
  {
    name: "gethit",
    frames: 4,
    }


];

animationState.forEach((state, index) => {
    let frames ={
      loc: [],
    }
    for(let j = 0; j < state.frames; j++){
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})

console.log(spriteAnimations);


function animate(){
  ctx.clearRect(0, 0, WIDTH_CANVAS,HEIGHT_CANVAS);
  //ctx.fillRect(100,50,100,100);
  let position = Math.floor(gameFrame/ staggerFrame) % spriteAnimations[playerState].loc.length;
  let horizontalFrame = spriteWidth * position;
  let verticalFrame = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(player_Image, horizontalFrame, verticalFrame, spriteWidth, spriteHeight , 0 , 0 , WIDTH_CANVAS, HEIGHT_CANVAS);
  
  gameFrame++;
  
  requestAnimationFrame(animate);

}
animate();
























// Player properties
/*const player = {
  x: 50,
  y: 300,
  width: 50,
  height: 50,
  color: "blue",
  speed: 5,
  jumpHeight: 12,
  isJumping: false,
  velocityY: 0,
};

// Platform properties
const platforms = [
  { x: 0, y: 350, width: 800, height: 10 },
  { x: 200, y: 250, width: 100, height: 10 },
  { x: 500, y: 200, width: 100, height: 10 },
];

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawPlatforms() {
  ctx.fillStyle = "green";
  platforms.forEach(platform => {
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  });
}

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update player position
  player.y += player.velocityY;
  player.velocityY += 1; // Gravity

  // Check collisions with platforms
  platforms.forEach(platform => {
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y + player.height > platform.y &&
      player.y < platform.y + platform.height
    ) {
      // Player is on the platform
      player.y = platform.y - player.height;
      player.velocityY = 0;
      player.isJumping = false;
    }
  });

  // Draw elements
  drawPlayer();
  drawPlatforms();

  requestAnimationFrame(draw);
}

// Handle keyboard input
window.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !player.isJumping) {
    player.velocityY = -player.jumpHeight;
    player.isJumping = true;
  }
});

// Start the game loop
draw();*/