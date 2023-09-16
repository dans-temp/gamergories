// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import GameSelection from './components/GameSelection';
import Navbar from './components/Navbar';
import PokemonPage from './components/PokemonPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game-selection" element={<GameSelection />} />
          <Route path="/pokemon" element={<PokemonPage  />} />
          <Route path="/dota" element={<div>DotA Page</div>} />
          <Route path="/league-of-legends" element={<div>League of Legends Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

