import React, {useState} from 'react';
import DeckGenButton from './DeckGenButton';
import styled from '@emotion/styled';

const ColorDeck = ({setColor, color, setCreatureDeck}) => {

    const ColorDropdown = styled.select`
        margin-left: 150px;
        padding: 5px;
        width: 300px;
        font-size: 16pt;
        border: 3px solid #000000;
        border-radius: 5px;
        box-shadow: 3px 2px 4px 1px #28a40f;
    `
    
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
            <ColorDropdown onChange={(e) => setColorState(e.target.value)}>
                <option value="W"> White </option>
                <option value="U"> Blue </option>
                <option value="B"> Black </option>
                <option value="R"> Red </option>
                <option value="G"> Green </option>
            </ColorDropdown>
            <DeckGenButton setCreatureDeck={setCreatureDeck} color={color} />
        </form>
    </div>
  )
}

export default ColorDeck