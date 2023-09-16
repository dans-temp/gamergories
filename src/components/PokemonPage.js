// src/components/PokemonPage.js
import React, { useState } from 'react';
import pokemonData from '../assets/pokemon-data/pokedex.json'; 
import './PokemonPage.css';


const images = require.context('../assets/pokemon-data/images', false, /\.(png|jpg|jpeg|gif)$/);

function PokemonPage() {
  const imagePaths = images.keys();

  console.log(imagePaths);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    for (const pokemon of pokemonData)
    {
        if (e.target.value.toLowerCase()  === pokemon.name.english.toLowerCase())
            console.log(pokemon.name.english);
    }
    
  };
  

  return (
    <div>
      <h2>Pokemon Page</h2>
        <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text here"
        />
        <p>You typed: {inputText}</p>

        <div className="scrollable">
            {imagePaths.map((imagePath, index) => (
            <img
                key={index}
                id= {index + 1}
                src={images(imagePath)}
                alt={`Pokemon ${index + 1}`}
                width="100"
                height="100"
            />
            ))}
        </div>
      </div>
  );
}

export default PokemonPage;
