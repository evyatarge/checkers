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
            };

            this.cellColor = props.color;
    }

  render() {
      var nameClass = 'cell '+ this.cellColor;
        return (
            <div className= {nameClass}>
            </div>
        );
  }

}

export default Cell;
