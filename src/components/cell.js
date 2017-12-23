import React from 'react';
import '../css/cell.css';

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
