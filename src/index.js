import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state/state-drills/HelloWorld'
import Bomb from './state/state-drills/Bomb'
import RouletteGun from './state/state-drills/RouletteGun'

//ReactDOM.render(<RouletteGun bulletInChamber={8} />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));