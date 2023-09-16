// src/components/PokemonPage.js
import React, { useState } from 'react';
import pokemonData from '../assets/pokemon-data/pokedex.json'; 
import './PokemonPage.css';


const images = require.context('../assets/pokemon-data/thumbnails', false, /\.(png|jpg|jpeg|gif)$/);
const guessed = [];

function PokemonPage() {
  const imagePaths = images.keys();


  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    loop1:
        for (const pokemon of pokemonData)
        {
            const pokemon_name = pokemon.name.english;
            if (e.target.value.toLowerCase()  === pokemon_name.toLowerCase())
            {
                for(const guessed_pokemon of guessed)
                {
                    console.log('heh')
                    if(guessed_pokemon === pokemon_name)
                    {
                        console.log('already guessed');
                        setInputText('')
                        break loop1;
                    }
                }

                console.log('guessed correctly');
                guessed.push(pokemon_name);
                console.log('array :',guessed)
                document.getElementById(pokemon.id).style.display = "initial";
                setInputText('')
            }
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

                <img className="pokemon-pic hidden"
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
