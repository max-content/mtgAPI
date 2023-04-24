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