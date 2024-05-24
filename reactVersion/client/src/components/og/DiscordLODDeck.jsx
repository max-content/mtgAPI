import React, {useState} from 'react'
import axios from "axios"

import { Button } from './styles/ButtonStyle'
import CreatureCard from '../og/CreatureCard'
import styled from '@emotion/styled';

const DiscordLODDeck = () => {
    
    const DeckFlex = styled.div`
        display: flex;
        flex-wrap: wrap;
    `

    const SCRYFALL_NONLAND = `https://api.scryfall.com/cards/random?q=-t:land+game:paper`

      //Lord of Disharmony
    const [currentCard, setCurrentCard] = useState([]);

    const createDeck = async () => {
        console.log(`currentCard: ${currentCard}`)
        const tempArr = []
        const res = await axios.get(`${SCRYFALL_NONLAND}`);
        console.log(res.data)
        tempArr.push(res.data);
        setCurrentCard(tempArr);
    }


  return (
    <>
        <Button type='submit' onClick={createDeck}> Generate </Button>
        {/* <Button type='submit' onClick={nextCardPlayed}> Card Played </Button>
        <Button type='submit' onClick={nextCardNotPlayed}> Card Not Played </Button> */}
    
        <DeckFlex>
            {
                currentCard && currentCard.length > 0 ? currentCard.map((card) => <CreatureCard key={card.id} card={card} />) : ( <p> Loading... </p> )
            }
        </DeckFlex>

    </>
  )
}

export default DiscordLODDeck