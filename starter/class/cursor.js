const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';
    this.backgroundColor = 'blue'

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // Move cursor up
    if(this.row > 0){
      this.row--
      Screen.render()
    }
  }

  down() {
    // Move cursor down
    if(this.row < 2){
      this.row++
      Screen.render()
    }
  }

  left() {
    // Move cursor left
    if(this.col > 0)
      this.col--
  }

  right() {
    // Move cursor right
    if(this.col < 2)
      this.col++
  }

}


module.exports = Cursor;
