// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/gamergories">Home</Link>
        </li>
        <li>
          <Link to="/how-to-play">Help</Link>
        </li>
        <li>
          <Link to="/game-selection">Game</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
