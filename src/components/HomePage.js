// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo.png';
import './HomePage.css'; 

function HomePage() {
  const textStyle = {
    fontSize: '48px', // Adjust the font size as needed
    marginBottom: '15px', // Add spacing between image and text
  };


  return (
    <div className="home-page nonscrollable">
        <div style={textStyle}>Nerdygories</div>
        <img src={logo} alt="Logo" className="logo"/>
        <div className="button-container">
        <Link to="/game-selection">
          <button className="start-button">Start Game</button>
        </Link>
          <button className="how-to-play-button">How to Play</button>
        </div>
    </div>
  );
}

export default HomePage;
