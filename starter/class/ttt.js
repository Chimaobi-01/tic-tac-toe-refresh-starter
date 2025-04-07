const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('up', 'move cursor up', this.cursor.up);
    Screen.addCommand('down', 'move cursor down', this.cursor.down);
    Screen.addCommand('left', 'move cursor left', this.cursor.left);
    Screen.addCommand('right', 'move cursor right', this.cursor.right);
    
    Screen.render();
  }


  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    let horizontalWin = TTT.__hasHorizontalWin(grid)
    let verticalWin = TTT.__hasVerticalWin(grid)
    let diagonalWin = TTT.__hasDiagonalWin(grid)
    let tie = TTT.__hasFullGrid(grid)


    if (horizontalWin != null) { return horizontalWin }
    if (verticalWin != null) { return verticalWin }
    if (diagonalWin != null) { return diagonalWin }
    if (tie) { return 'T' }

    return false

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }


  //Helper functions
  static __hasVerticalWin(grid) {
    for (let i = 0; i < 3; i++) {
      let verticalXWin = grid.every(row => row.every((_, __, array) => array[i] === 'X'))
      let verticalOWin = grid.every(row => row.every((_, __, array) => array[i] === 'O'))

      if (verticalOWin) { return 'O' }
      if (verticalXWin) { return 'X' }
    }
    return null
  }
  static __hasHorizontalWin(grid) {
    let horizontalXWin = grid.some(row => row.every(col => col === 'X'))
    let horizontalOWin = grid.some(row => row.every(col => col === 'O'))

    if (horizontalOWin) { return 'O' }
    if (horizontalXWin) { return 'X' }
    return null
  }
  static __hasDiagonalWin(grid) {
    let diagonalXOne = grid.every((row, i) => row[i] === 'X')
    let diagonalXTwo = grid.every((row, i) => row[2 - i] === 'X')
    let diagonalOOne = grid.every((row, i) => row[i] === 'O')
    let diagonalOTwo = grid.every((row, i) => row[2 - i] === 'O')

    if (diagonalXOne || diagonalXTwo) { return 'X' }
    if (diagonalOOne || diagonalOTwo) { return 'O' }
    return null
  }
  static __hasFullGrid(grid) {
    return grid.every(row => row.every(col => col != ' '))
  }


}


module.exports = TTT;
