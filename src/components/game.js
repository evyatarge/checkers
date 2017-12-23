import React from 'react';
import Board from './board';
import Piece from './piece';


class Game extends React.Component {

    constructor(props){
            super(props);

            this.state = {
                turn: props.turn || 'white',
                whitesMap : [],
                blacksMap : [],
            };
    }

    initPieces(){
        var whitePieces = new Array(12);
        var blackPieces = new Array(12);

        whitePieces = this.initWhites(whitePieces);
        blackPieces = this.initBlacks(blackPieces);

        return whitePieces.concat(blackPieces);
    }
    initWhites(whitePieces){
        let pieces = [];
        let row=0, piecesInRow=4;
        for(var i=0; i<whitePieces.length; i++){
            row = parseInt(i/piecesInRow, 10);
            let column = this.calculateColumn(i,row);
            pieces.push(<Piece pieceRow={row} pieceColumn={column} pieceColor='white'/>);
            let location = ""+row+column+"";

            let whitesMap = this.state.whitesMap;
            whitesMap[location]=true;
        }
        return pieces;
    }
    initBlacks(blackPieces){
        let pieces = [];
        let row=7, piecesInRow=4;
        for(var i=0; i<blackPieces.length; i++){
            let currentRow = row-(parseInt(i/piecesInRow, 10));
            let column = this.calculateColumn(i,currentRow);
            column = (column%2)===0 ? column+1 : column-1;
            pieces.push(<Piece pieceRow={currentRow} pieceColumn={column} pieceColor='black'/>);
            let location = ""+currentRow+column+"";

            let blacksMap = this.state.blacksMap;
            blacksMap[location]=true;
        }
        return pieces;
    }

    calculateColumn(index,row){
        var rowLength = 8;
        let isSecondRow = ((row%2)+1)%2;
        let indexInRow = index%4;
        return ((indexInRow*2)+isSecondRow)%rowLength;
    }

  render() {
      return (
          <Board pieces={this.initPieces()} />

      );
  }

}

export default Game;
