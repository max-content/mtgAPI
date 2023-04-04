import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatureCard from '../og/CreatureCard'
import ColorDeck from './ColorDeck';

// random deck of 23 creatures from the scryfall api filtered query by color identity. mono decks only.

const Deck = (props) => {
    const [creatureDeck, setCreatureDeck] = useState([]);
    
    const color = props.ColorDeck;
    console.log('color: ' + color)


    const SCRYFALL_CREATURE = 'https://api.scryfall.com/cards/random?q=t%3Acreature+id<%3D';
    // const color = props.ColorDeck;

useEffect(() => {
    async function fetchCards() {
        console.log('I AM HERE')
        const tempArr = [];
        const cardNum = 5;
        for(let i = 0; i < cardNum; i++) {
            const res = await axios.get(`${SCRYFALL_CREATURE}${color}`)
            console.log(res.data)
            tempArr.push(res.data);
        }

        setCreatureDeck(tempArr);
    }
        fetchCards();
}, []);


    //useState declarations

    const createCreatureDeck = () => {
        
    }


  return (
    <div>
        <button onClick={createCreatureDeck}> Creature Deck </button>
    {
        creatureDeck && creatureDeck.length > 0 ? creatureDeck.map((card) => <CreatureCard key={card.id} card={card} />) : ( <p> Loading... </p> )
    }
    </div>
  );
}

export default Deck;