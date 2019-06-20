class Player1 {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.health = 1;
    this.bombLim = 1;
    this.bombRad = 3;
    this.movLim = 1;
    this.bombArray = [];
  }
  setup() {
    defaultDownPlayer1 = loadImage("assets/DownDefaultPlayer1.png");
  }

  draw() {
    image(defaultDownPlayer1, this.col * 50 + 4, this.row * 50 + 7.5, 35, 35);
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
    if (this.Player1(row, col) === this.bombRad) {
      this.health - 1;
    }
    if (this.health >= 0) {
      game.gameOver1();
    }
  }

  keyPressed() {
    // move up
    if (keyCode === 87) {
      if (
        game.gameBoard[this.row - 1][this.col] !== 2 &&
        game.gameBoard[this.row - 1][this.col] !== 1
      ) {
        this.row -= 1;
      }
    }
    //move down
    if (keyCode === 83) {
      if (
        game.gameBoard[this.row + 1][this.col] !== 2 &&
        game.gameBoard[this.row + 1][this.col] !== 1
      ) {
        this.row += 1;
      }
    }
    //move right
    if (keyCode === 68) {
      if (
        game.gameBoard[this.row][this.col + 1] !== 2 &&
        game.gameBoard[this.row][this.col + 1] !== 1
      ) {
        this.col += 1;
      }
    }
    //move  left
    if (keyCode === 65) {
      if (
        game.gameBoard[this.row][this.col - 1] !== 2 &&
        game.gameBoard[this.row][this.col - 1] !== 1
      )
        this.col -= 1;
    }

    if (keyCode === 82) {
      this.createBomb();
    }
  }
}
