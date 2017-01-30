class TicTacToe {
    constructor() {
        this.CurrentPlayerSymbol='x';
        this.matrix=[[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.CurrentPlayerSymbol==='x' && this.matrix[rowIndex][columnIndex]===null){
            this.matrix[rowIndex][columnIndex]=this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol='o';
        }else if(this.matrix[rowIndex][columnIndex]===null){
            this.matrix[rowIndex][columnIndex]=this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol='x';
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
