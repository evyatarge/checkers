import React from 'react';
import ReactDOM from 'react-dom';
import '../css/board.css';
import Cell from './cell';

class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // board: this.createBoard(),
        };
        this.board = this.createBoard();
    }

    createBoard(){
        const board = new Array(8);
        for(var i in board){
            i = new Array(8);
        }
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

    createCells(){//TODO - consider if this is the right place
        this.board.map((row) => {
            return(this.createRowCells(row));//end of return for row
        });//end of map for rows
    }

    createRowCells(row){
        row.map((col) => {
            let rowNumber = this.board.indexOf(row);
            let colNumber = row.indexOf(col);
            let color = this.setColor(rowNumber,colNumber);
            return(
                <Cell row={rowNumber} col={colNumber} color={color}/>
            );//end of return for col
        });//end of map for cols
    }

  render() {
      return (
          <div className='board'>
              {this.createCells}
          </div>
      );
  }

}

export default Board;
