class Player {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.health = 1;
    this.bombLim = 1;
    this.bombRad = 1;
    this.movLim = 1;
    this.bombArray = [];
  }
  setup() {
    defaultDown = loadImage("assets/DownDefault.png");
  }

  draw() {
    fill("lime");
    rect(this.col * 100 + 30, this.row * 100 + 30, 30, 30);
    image(defaultDown, this.col * 100 + 8, this.row * 100 + 15, 70, 70);
    this.bombArray.forEach(bomb => {
      bomb.draw();
      bomb.explosion();
    });
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
    if (this.health >= 0) {
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
