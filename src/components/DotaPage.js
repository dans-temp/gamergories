
import React, { useState } from 'react';
import './GamePage.css';
import dotaData from '../assets/dota-data/heroes.json'; 
import questionMarkImage from '../assets/question-mark.png';
import thumbsup from '../assets/thumbs-up.png';

const image_url = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';
const icon_urls = [];
const guessed = [];
let display_text = '-';


for (const hero of dotaData)
{
    const hero_name = hero.name;
    icon_urls.push(image_url+hero_name+'.png')
}

function DotaPage() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
        loop:
            for (const hero of dotaData)
            {
                const hero_name = hero.localized_name;
                if (e.target.value.toLowerCase()  === hero_name.toLowerCase())
                {
                    for(const guessed_hero of guessed)
                    {
                        if(guessed_hero === hero_name)
                        {
                            display_text = hero_name + ' was already guessed!'
                            break loop;
                        }
                    }

                    guessed.push(hero_name);

                    if(guessed.length === dotaData.length)
                    {
                        display_text = hero_name + 'You Win!';
                        document.getElementById(hero.id).style.display = "initial";
                        document.getElementById('top-image').src = thumbsup;
                    }
                    else
                    {
                        display_text = hero_name + ' is correct!'
                        document.getElementById(hero.id).style.display = "initial";
                        document.getElementById('top-image').src = icon_urls[hero.id-1];
                        setInputText('')
                    }
                }
            }
  };
  

  return (
    <div>
        <img src={questionMarkImage} alt="Question Mark" className="top-image-dota" id="top-image"/>
        <h2>{display_text}</h2>
        <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Name a hero"
            className="input-field"
        />
        <h2>Completion: {guessed.length}/{dotaData.length}</h2>

        <div className="scrollable" id="image-container">
        {icon_urls.map((imageSource, index) => (
          <img 
            key={index}
            src={imageSource}
            alt={index}
            width="180"
            height="100"
            id={index+1}
            className="hidden"
          />
        ))}

        </div>
      </div>
  );
}

export default DotaPage;
