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

    socket.timeout(5000).emit('create-something', value, () => { setIsLoading(false)})
  }

  // useEffect(() => {
  //   const newSocket = io(process.env.SOCKET_SERVER_URL);
  //   setSocket(newSocket);
  //   console.log(newSocket)

  //   newSocket.on('connect', () => {
  //     console.log('Connected to Socket.io Server');
  //   });

  //   return () => {
  //     newSocket.disconnect();
  //   };
  // }, []);

  // const createNewGame = (event) => {
  //   event.preventDefault();
  //   console.log('New Game Button Clicked');
  //   // socket.emit('join', { gameId: '1234', playerName: 'Alice' });
  // };

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