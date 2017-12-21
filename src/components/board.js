import React from 'react';
import ReactDOM from 'react-dom';
import '../css/board.css';
import Cell from './cell';
import Piece from './piece';

class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

        this.pieces = props.pieces;
        this.board = this.createBoard();
    }

    createBoard(){
        const board = new Array(8);
        for(var i=0; i<board.length; i++){
            board[i] = new Array(8);
        }
        return board;
    }

    setColor(row, col){
        if(this.isOdd(row)){
            if(!this.isOdd(col)){
                return 'black';
            }
            else{//both odd
                return 'white';
            }
        }
        else{
            if(this.isOdd(col)){
                return 'black';
            }
            else{//both are NOT odd
                return 'white';
            }
        }
    }

    isOdd(num){
        return(num%2);
    }

    createCells(){
        let allCells = [];
        for(var row=0; row<this.board.length; row++){
            let rowCells = this.createRowCells(this.board[row],row);
            allCells.push(rowCells);
        }
        return allCells;
    }

    createRowCells(row, rowNumber){
        let rowCells = [];
        for(var col=0; col<row.length; col++){
            let color = this.setColor(rowNumber,col);
            rowCells.push(<Cell row={rowNumber} col={col} color={color}/>)
        }
        return rowCells;
    }


  render() {
      return (
          <div className='board'>
              {this.createCells()}
              <div className='piecesOnBord'>
                  {this.pieces}
              </div>
          </div>
      );
  }

}

export default Board;
