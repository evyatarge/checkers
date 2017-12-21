import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Board from './components/board';
import Piece from './components/piece';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <Board />, document.getElementById('root')

    );

registerServiceWorker();
