import React from 'react'
import axios from 'axios'
import { Button } from './styles/ButtonStyle'

const DeckGenButton = ({color, setCreatureDeck}) => {

    const SCRYFALL_CREATURE = `https://api.scryfall.com/cards/random?q=t%3Acreature+id<%3D`

    const createCreatureDeck = async () => {
            console.log('I AM HERE')
            const tempArr = [];
            const cardNum = 5;
            while(tempArr.length < cardNum) {

                try {
                    const res = await axios.get(`${SCRYFALL_CREATURE}${color}`)
                    
                    // console.log({SCRYFALL_CREATURE},{color})

                    console.log(res.data)

                    //only push to the array of cards if the image_uris and the image_uris.art_crop are valid. if not keep going.
                    if (res.data.image_uris && res.data.image_uris.art_crop) {
                        tempArr.push(res.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
    
            setCreatureDeck(tempArr);
            
    }

  return (
    <div>
        <Button type='submit' onClick={createCreatureDeck}> Creature Deck </Button>
    </div>
  )
}

export default DeckGenButton