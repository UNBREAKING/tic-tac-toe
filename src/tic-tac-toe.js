class TicTacToe {
    constructor() {
        this.CurrentPlayerSymbol='x';
        this.matrix=[[null,null,null],[null,null,null],[null,null,null]];
        this.winner=null;
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
        if(this.isDraw()===true || this.winner!=null){
            return true;
        }else{
            return false
        }
    }

    getWinner() {
        this.isDraw();
        return this.winner;
    }

    noMoreTurns() {

      if(this.matrix[0].indexOf(null)=== -1 && this.matrix[1].indexOf(null) ===-1 && this.matrix[2].indexOf(null)===-1){
         return true;
     }else{
         return false;
     }
    }

    isDraw() {
        if(this.matrix[0][0]===this.matrix[0][1] && this.matrix[0][0]===this.matrix[0][2]){
            this.winner=this.matrix[0][0];
        }else if(this.matrix[1][0]===this.matrix[1][1] && this.matrix[1][0]===this.matrix[1][2])
        {
            this.winner=this.matrix[1][0];
        }else if(this.matrix[2][0]===this.matrix[2][1] && this.matrix[2][0]===this.matrix[2][2])
        {
            this.winner=this.matrix[2][0];
        }else if(this.matrix[0][0]===this.matrix[1][0] && this.matrix[0][0]===this.matrix[2][0])
        {
            this.winner=this.matrix[0][0];
        }else if(this.matrix[0][1]===this.matrix[1][1] && this.matrix[0][1]===this.matrix[2][1])
        {
            this.winner=this.matrix[0][1];
        }else if(this.matrix[0][2]===this.matrix[1][2] && this.matrix[0][2]===this.matrix[2][2])
        {
            this.winner=this.matrix[0][2];
        }else if(this.matrix[0][0]===this.matrix[1][1] && this.matrix[0][0]===this.matrix[2][2]) {
            this.winner = this.matrix[0][0];
        }else if(this.matrix[2][0]===this.matrix[1][1] && this.matrix[2][0]===this.matrix[0][2])
        {
            this.winner=this.matrix[2][0];
        }
        if(this.noMoreTurns()===true && this.winner===null){
            return true;
        }else{return false;}
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
