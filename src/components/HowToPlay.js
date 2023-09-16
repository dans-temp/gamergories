
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo.png';
import './HomePage.css'; 

function HowToPlay() {
  const textStyle = {
    fontSize: '32px', 
    marginBottom: '15px', 
  };


  return (
    <div className="nonscrollable">
        <img src={logo} alt="Logo" className="logo"/>
        <div style={textStyle}>How To Play:</div>
        <p>Select a video game category and try and name all the characters in it!</p>
        <p>Spelling counts including special characters like apostrophe</p>
        <p>The Pokemon category is just the original 151</p>
    </div>
  );
}

export default HowToPlay;
