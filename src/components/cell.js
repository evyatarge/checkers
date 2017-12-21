import React from 'react';
import ReactDOM from 'react-dom';
import '../css/cell.css';
import Board from './board';
import Piece from './piece';

class Cell extends React.Component {

    constructor(props){
            super(props);
            this.state = {
                cellRow : props.row,
                cellColumn : props.col,
                cellColor : props.color,
            };
    }

  render() {
        return (
            <div className='cell {this.getStatcellColor}'>
            </div>
        );
  }

}

export default Cell;
