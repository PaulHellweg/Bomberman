class Player {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.health = 2;
    this.bombLim = 1;
    this.bombRad = 3;
    this.bombSoftR = 1;
    this.movLim = 1;
    this.bombArray = [];
  }
  setup() {
    defaultDown = loadImage("assets/DownDefault.png");
    hit = loadImage("assets/hit.png");
  }

  draw() {
    image(defaultDown, this.col * 50 + 4, this.row * 50 + 7.5, 35, 35);
    this.bombArray.forEach(bomb => {
      bomb.draw();
      bomb.explosion();
    });
    if (this.health <= 0) {
      game.gameOver();
      image(hit, this.col * 50 + 4, this.row * 50 + 7.5, 35, 35);
    }
  }
  createBomb() {
    if (this.bombLim >= this.bombArray.length) {
      this.bombArray.push(new Bomb(this.row, this.col, this.bombRad));
    }
  }
  healthDetection() {
    if (this.Player(row, col) === this.bombRad) {
      this.health - 1;
    }
  }

  keyPressed() {
    if (keyCode === 38) {
      if (
        game.gameBoard[this.row - 1][this.col] !== 2 &&
        game.gameBoard[this.row - 1][this.col] !== 1
      ) {
        this.row -= 1;
      }
    }
    if (keyCode === 40) {
      if (
        game.gameBoard[this.row + 1][this.col] !== 2 &&
        game.gameBoard[this.row + 1][this.col] !== 1
      ) {
        this.row += 1;
      }
    }
    if (keyCode === 39) {
      if (
        game.gameBoard[this.row][this.col + 1] !== 2 &&
        game.gameBoard[this.row][this.col + 1] !== 1
      ) {
        this.col += 1;
      }
    }
    if (keyCode === 37) {
      if (
        game.gameBoard[this.row][this.col - 1] !== 2 &&
        game.gameBoard[this.row][this.col - 1] !== 1
      )
        this.col -= 1;
    }

    if (keyCode === 191) {
      this.createBomb();
    }
  }
}
