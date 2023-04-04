import { useState, useEffect } from 'react';
import axios from 'axios';
import CreatureCard from './CreatureCard';
import ColorDeck from '../og/ColorDeck';

function CreatureCardList() {
  const [cards, setCards] = useState([]);

  const SCRYFALL_CREATURE = 'https://api.scryfall.com/cards/random?q=t%3Acreature+id<%3D';
  const color = 'W';
  

  useEffect(() => {
    async function fetchCards() {
        console.log('Hello are you there??');
        const cardArray = [];
        const cardNum = 6;
        for(let i = 0; i < cardNum; i++) {
          const response = await axios.get(`${SCRYFALL_CREATURE}${color}`
          );
          cardArray.push(response.data);
          console.log(response.data);
        }

      setCards(cardArray);
    }

    fetchCards();
  }, []);

  return (
    <div>
      
        {cards && cards.length > 0 ? (
        cards.map((card) => <CreatureCard key={card.id} card={card} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CreatureCardList;
