// src/components/GameSelection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './GameSelection.css'; 
import pokemonLogo from '../assets/pokemon-logo.png';
import dotaLogo from '../assets/dota-logo.png';
import leagueLogo from '../assets/league-logo.png';

function GameSelection() {
  return (
    <div className="game-container">
      <h2>Select a Category:</h2>
      <Link to="/pokemon">
        <img src={pokemonLogo} alt="Pokemon" className="game-logo" />
      </Link>
      {/* <Link to="/dota">
        <img src={dotaLogo} alt="Dota" className="game-logo" />
      </Link> */}
      <Link to="/league-of-legends">
        <img src={leagueLogo} alt="League of Legends" className="game-logo" />
      </Link>
    </div>
  );
}

export default GameSelection;
