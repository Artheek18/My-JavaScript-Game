const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player properties
const player = {
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
draw();