const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  frameRate(60);
  canvas.parent("canvas");

  game.setup();
}
function preload() {
  defaultDown = loadImage("assets/DownDefault.png");
  bomb = loadImage("assets/bomb.png");
}

function draw() {
  clear();
  console.log(game.gameBoard[3][1]);

  game.gameBoardArr();
}

function keyPressed() {
  game.player.keyPressed();
}

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
