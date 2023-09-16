// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import HowToPlay from './components/HowToPlay'
import GameSelection from './components/GameSelection';
import Navbar from './components/Navbar';
import PokemonPage from './components/PokemonPage';
import LeaguePage from './components/LeaguePage';
import DotaPage from './components/DotaPage'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/gamergories" element={<HomePage />} />
          <Route path="/how-to-play" element={<HowToPlay  />} />
          <Route path="/game-selection" element={<GameSelection />} />
          <Route path="/pokemon" element={<PokemonPage  />} />
          <Route path="/dota" element={<DotaPage  />} />
          <Route path="/league-of-legends" element={<LeaguePage  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

