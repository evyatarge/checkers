import React from 'react';
import ReactDOM from 'react-dom';
import '../css/piece.css';

class Piece extends React.Component {

    constructor(props){
            super(props);
            this.state = {
                pieceRow : props.row,
                pieceColumn : props.col,
                pieceColor : props.color,
            };
    }

  render() {
      return (
          <div>
              <Piece className= 'piece {this.getStatcellColor}'/>
          </div>
      );
  }

}

export default Piece;
