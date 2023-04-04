import React, {useState} from 'react';

const ColorDeck = () => {
    const [color, setColor] = useState('');
    
    const onSubmitHandler = (e) => {
        setColor(e.target.value);
    }
    
  return (
    <div>
        {/* Choose your color dropdown button */}
        {/* pass that color into card list props */}
        <form onSubmitHandler={onSubmitHandler}>
            <select>
                <option value="W">White</option>
                <option value="U">Blue</option>
                <option value="B">Black</option>
                <option value="R">Red</option>
                <option value="G">Green</option>
            </select>
            <input type='submit' value="Color"/>
        </form>
    </div>
  )
}

export default ColorDeck