class Game {
  constructor() {
    this.player = new Player(1, 1);

    this.gameBoard = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 7, 1],
      [1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 1],
      [1, 8, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 6, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    // this.bombArray = [];
  }

  setup() {
    this.player.setup();
  }

  gameBoardArr() {
    this.gameBoard.forEach((x, indX) =>
      x.forEach((y, indY) => {
        //SPAWNAREA
        if (this.gameBoard[indX][indY] === 0) {
          fill(220, 254, 210);
          rect(indY * 100, indX * 100, 100, 100);
        }
        //YELLOW
        if (this.gameBoard[indX][indY] === 1) {
          fill(255, 204, 0);
          rect(indY * 100, indX * 100, 100, 100);
        }
        //GRAY
        if (this.gameBoard[indX][indY] === 2) {
          fill(119, 119, 119);
          rect(indY * 100, indX * 100, 100, 100);
        }
        //EXPLOSION
        if (this.gameBoard[indX][indY] === 3) {
          fill(255, 0, 0);
          rect(indY * 100, indX * 100, 100, 100);
        }
        //AFTER EXPLOSION
        if (this.gameBoard[indX][indY] === 4) {
          fill(224, 255, 255);
          rect(indY * 100, indX * 100, 100, 100);
        }
        //PLAYERSPAWN
        if (
          this.gameBoard[indX][indY] === 5 ||
          this.gameBoard[indX][indY] === 6 ||
          this.gameBoard[indX][indY] === 7 ||
          this.gameBoard[indX][indY] === 8
        ) {
          fill(165, 252, 252);
          rect(indY * 100, indX * 100, 100, 100);
        }
      })
    );

    this.player.draw();
  }
}
