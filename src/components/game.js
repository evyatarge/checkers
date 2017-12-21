import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import Piece from './piece';


class Game extends React.Component {

    constructor(props){
            super(props);
            this.state = {
                turn: props.turn
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
        var pieces = [];
        var row=0, piecesInRow=4;
        for(var i=0; i<whitePieces.length; i++){
            row = i%piecesInRow;
            let column = this.calculateColumn(i,row);
            pieces.push(<Piece pieceRow={row} pieceColumn={column} pieceColor='white'/>);
        }
        return pieces;
    }
    initBlacks(blackPieces){
        var pieces = [];
        var row=0, piecesInRow=4;
        for(var i=0; i<blackPieces.length; i++){
            row = i%piecesInRow;
            let column = this.calculateColumn(i,row);
            pieces.push(<Piece pieceRow={row} pieceColumn={column} pieceColor='black'/>);
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
