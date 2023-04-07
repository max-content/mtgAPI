import React from 'react'
import axios from 'axios'

const DeckGenButton = ({color, setCreatureDeck}) => {

    const SCRYFALL_CREATURE = `https://api.scryfall.com/cards/random?q=t%3Acreature+id<%3D`

    const createCreatureDeck = async () => {
            console.log('I AM HERE')
            const tempArr = [];
            const cardNum = 5;
            for(let i = 0; i < cardNum; i++) {
                try {
                    const res = await axios.get(`${SCRYFALL_CREATURE}${color}`)
                    console.log({SCRYFALL_CREATURE},{color})
                    console.log(res.data)
                    tempArr.push(res.data);
                } catch (error) {
                    console.log(error);
                }
            }
    
            setCreatureDeck(tempArr);
            
    }

  return (
    <div>
        <button type='submit' onClick={createCreatureDeck}> Creature Deck </button>
    </div>
  )
}

export default DeckGenButton