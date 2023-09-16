
import React, { useState, useEffect } from 'react';
import './GamePage.css';
import leagueData from '../assets/league-data/champions.json'; 
import questionMarkImage from '../assets/question-mark.png';
import thumbsup from '../assets/thumbs-up.png';

const image_url = 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/';
const icon_urls = [];
const guessed = [];
let display_text = '-';

let count = 0;
for (const champion of leagueData)
{
    champion.id = count;
    count ++;
    let champion_name = champion.name;
    if(champion_name === 'Wukong')
        champion_name = 'monkeyking';
    icon_urls.push(image_url+champion_name.toLowerCase().replace(/['.\s]/g, '')+'.png')
}

function LeaguePage() {

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
            for (const champion of leagueData)
            {
                const champion_name = champion.name;
                if (e.target.value.toLowerCase()  === champion_name.toLowerCase())
                {
                    for(const guessed_champion of guessed)
                    {
                        if(guessed_champion === champion_name)
                        {
                            display_text = champion_name + ' was already guessed!'
                            break loop;
                        }
                    }

                    guessed.push(champion_name);

                    if(guessed.length === leagueData.length)
                    {
                        display_text = champion_name + 'You Win!';
                        document.getElementById(champion.id).style.display = "initial";
                        document.getElementById('top-image').src = thumbsup;
                    }
                    else
                    {
                        display_text = champion_name + ' is correct!'
                        document.getElementById(champion.id).style.display = "initial";
                        document.getElementById('top-image').src = icon_urls[champion.id];
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
            placeholder="Name a Champion"
            className="input-field"
        />
        <h2>Completion: {guessed.length}/{leagueData.length}</h2>

        <div className="scrollable" id="image-container">
        {icon_urls.map((imageSource, index) => (
          <img 
            key={index}
            src={imageSource}
            alt={index}
            width="100"
            height="100"
            id={index}
            className="hidden"
          />
        ))}

        </div>
      </div>
  );
}

export default LeaguePage;
