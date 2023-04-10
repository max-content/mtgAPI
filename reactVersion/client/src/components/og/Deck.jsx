import React from 'react';
// import axios from 'axios';
import CreatureCard from '../og/CreatureCard'
import styled from '@emotion/styled';
// import ColorDeck from './ColorDeck';

// random deck of 23 creatures from the scryfall api filtered query by color identity. mono decks only.

const Deck = ({color, creatureDeck}) => {
    
    const DeckFlex = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    console.log('color: ' + color)


  return (
    <DeckFlex>
    {
        creatureDeck && creatureDeck.length > 0 ? creatureDeck.map((card) => <CreatureCard key={card.id} card={card} />) : ( <p> Loading... </p> )
    }
    </DeckFlex>
  );
}

export default Deck;

//goes on line 14
//     const SCRYFALL_CREATURE = `https://api.scryfall.com/cards/random?q=t%3Acreature+id<%3D${color}`
//     // const color = props.ColorDeck;
//     console.log(SCRYFALL_CREATURE)

// useEffect(() => {
//     async function fetchCards() {
//         console.log('I AM HERE')
//         const tempArr = [];
//         const cardNum = 5;
//         for(let i = 0; i < cardNum; i++) {
//             const res = await axios.get(`${SCRYFALL_CREATURE}`)
//             console.log(res.data)
//             tempArr.push(res.data);
//         }

//         setCreatureDeck(tempArr);
//     }
//         fetchCards();
// }, []);