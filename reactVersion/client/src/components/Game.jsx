import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import dotenv from 'dotenv';

dotenv.config();

const Game = () => {

  const [currentGame, setCurrentGame] = useState();

  useEffect(() => {
    const socket = io(process.env.SOCKET_SERVER_URL);
    socket.on('connect', () =>{
      console.log("Connected to Socket.io Server");
    });

    socket.on('draw', (data) => {
      console.log("player drew a card.");
    })

    return() => {
      socket.disconnect();
    }
  }, [])
  
  const createNewGame = () => {
    console.log("New Game Button Clicked")
  //  create new game call to backend
  // player 
  // life = 20 is default can be different
  // deck = on player color choice 
    // populate with call to scryfall.
  }

  return (
    <div>
      <form onSubmit={createNewGame}>
        <input type="submit" value="New Game" />
      </form>
    
    </div>
  )
}

export default Game