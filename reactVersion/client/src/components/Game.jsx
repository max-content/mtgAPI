import React, { useEffect, useState } from 'react';
import { socket } from '../socket';

// import io from 'socket.io-client';
// import dotenv from 'dotenv';
// dotenv.config();

const Game = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [currentGame, setCurrentGame] = useState();

  
  
  const createNewGame = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("I am here ", value)
    
    socket.timeout(5000).emit('draw', value, () => { setIsLoading(false)})

  }

  

  return (
    <div>
      <form onSubmit={createNewGame}>
        <input onChange={ e => setValue(e.target.value)}  />
        <input type="submit" disabled= {isLoading} value="New Game"/>

      </form>
    </div>
  );
};

export default Game;