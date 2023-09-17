// src/components/PokemonPage.js
import React, { useState, useEffect } from 'react';
import pokemonData from '../assets/pokemon-data/pokedex.json'; 
import './GamePage.css';
import questionMarkImage from '../assets/question-mark.png';
import thumbsup from '../assets/thumbs-up.png';

const big_images = require.context('../assets/pokemon-data/images', false, /\.(png|jpg|jpeg|gif)$/);
const images = require.context('../assets/pokemon-data/thumbnails', false, /\.(png|jpg|jpeg|gif)$/);
const guessed = [];
let display_text = '-';

function PokemonPage() {
  const imagePaths = images.keys();

  const [inputText, setInputText] = useState('');

  const [guessed, setMyArray] = useState([]);
  useEffect(() => {
    return () => {
      // Clean up the array when the component unmounts
      setMyArray([]);
      display_text = '-';
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount


  const handleInputChange = (e) => {
    setInputText(e.target.value);
        loop:
            for (const pokemon of pokemonData)
            {
                const pokemon_name = pokemon.name.english;
                if (e.target.value.toLowerCase()  === pokemon_name.toLowerCase())
                {
                    for(const guessed_pokemon of guessed)
                    {
                        if(guessed_pokemon === pokemon_name)
                        {
                            display_text = pokemon_name + ' was already guessed!'
                            break loop;
                        }
                    }

                    guessed.push(pokemon_name);

                    if(guessed.length === pokemonData.length)
                    {
                        display_text = pokemon_name + 'You Win!';
                        document.getElementById(pokemon.id).style.display = "initial";
                        document.getElementById('top-image').src = thumbsup;
                    }
                    else
                    {
                        display_text = pokemon_name + ' is correct!'
                        document.getElementById(pokemon.id).style.display = "initial";
                        document.getElementById('top-image').src = big_images(imagePaths[pokemon.id-1]);
                        setInputText('')
                    }
                }
            }
  };
  

  return (
    <div>
        <img src={questionMarkImage} alt="Question Mark" className="top-image" id="top-image"/>
        <h2>{display_text}</h2>
        <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Name a Pokemon"
            className="input-field"
        />
        <h2>Completion: {guessed.length}/{pokemonData.length}</h2>

        <div className="scrollable">
            {imagePaths.map((imagePath, index) => (

                <img className="icon-pic hidden"
                    key={index}
                    id= {index + 1}
                    src={images(imagePath)}
                    alt={`Pokemon ${index + 1}`}
                    width="100"
                    height="100"
                />
            ))}
            <div className="white-space"></div>
        </div>
      </div>
  );
}

export default PokemonPage;
