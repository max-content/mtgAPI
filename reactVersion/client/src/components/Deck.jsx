import React, {useState, useEffect} from 'react';
import axios from 'axios';

// random deck of 23 creatures from the scryfall api filtered query by color identity. mono decks only.

const Deck = () => {
    //scryfall deck global infomation will probably move to it's own config file.
    const SCRYFALL_CREATURE = 'https://api.scryfall.com/cards/random?q=t%3Acreature+id<%3D';
    const color = 'W';

    //useState declarations
    const [creatureDeck, setCreatureDeck] = useState([]);

    useEffect(() => {
        console.log('I AM HERE')
        // const genCreatureDeck = (req, res) => {
            // let i = 0;
            // while(i < 5) {
            axios.get(`${SCRYFALL_CREATURE}${color}`)
            .then(res => {
                setCreatureDeck(
                    [...creatureDeck, 
                    res.data])
                    console.log(res.data)
                }
            )
            .catch(err => console.log(err));
                
                // console.log(tempCreatureDeck);
                // console.log(tempCreatureDeck[i].name + " power: " + tempCreatureDeck[i].power + " toughness: " + tempCreatureDeck[i].toughness);
    
            
        // }
    }, []);

  return (
    <div>
        {/* <button> Creature Deck </button> */}
        {/* <p> {creatureDeck.card}</p> */}
        <p>{creatureDeck.length > 0 ? JSON.stringify(creatureDeck[0].name) : <p>Weeeeeeeee</p>}</p>
    {
        creatureDeck.length > 0 ? creatureDeck.map((card, idx) => {
            <p key={idx}> {card.name} </p>
        }) : <></>

    }
    </div>
  )
}

export default Deck