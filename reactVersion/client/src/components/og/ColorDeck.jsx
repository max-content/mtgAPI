import React, {useState} from 'react';
import DeckGenButton from './DeckGenButton';

const ColorDeck = ({setColor, color, setCreatureDeck}) => {
    
    const [colorState, setColorState] = useState('W');

    const submitHandler = (e) => {
        e.preventDefault();
        setColor(colorState);
        console.log('HELLO FRIEND')
        console.log('colorState: ' + colorState)
        console.log('color: ' + color)
    }
    
  return (
    <div>
        {/* Choose your color dropdown button */}
        {/* pass that color into card list props */}
        <form onSubmit={submitHandler}>
            <select onChange={(e) => setColorState(e.target.value)}>
                <option value="W"> White </option>
                <option value="U"> Blue </option>
                <option value="B"> Black </option>
                <option value="R"> Red </option>
                <option value="G"> Green </option>
            </select>
            <DeckGenButton setCreatureDeck={setCreatureDeck} color={color} />
        </form>
    </div>
  )
}

export default ColorDeck