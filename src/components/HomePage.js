// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo2.png';
import './HomePage.css'; 

function HomePage() {
  const textStyle = {
    fontSize: '48px', 
    marginBottom: '15px', 
  };


  return (
    <div className="home-page nonscrollable">
        <div style={textStyle}>GAMERGORIES</div>
        <img src={logo} alt="Logo" className="logo"/>
        <div className="button-container">
        <Link to="/game-selection">
          <button className="start-button">Start Game</button>
        </Link>
        <Link to="/how-to-play">
          <button className="how-to-play-button">How to Play</button>
        </Link>
        </div>
    </div>
  );
}

export default HomePage;
