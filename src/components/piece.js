import React from 'react';
import ReactDOM from 'react-dom';
import '../css/piece.css';

class Piece extends React.Component {

    constructor(props){
            super(props);
            this.state = {
                pieceRow : props.row,
                pieceColumn : props.col,
            };
            this.pieceColor = props.pieceColor;
    }

  render() {
      var nameClass = 'piece '+ this.pieceColor;
      return (
          <div className={nameClass}>
          </div>
      );
  }

}

export default Piece;
