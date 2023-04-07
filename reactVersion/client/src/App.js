import React, { useEffect, useState} from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import {socket} from './socket';
import { ConnectionManager, ConnectionState, Events } from './components/socketConnection';

import Game from './components/Game';
// import Deck from './components/Deck';
import Deck from './components/og/Deck';
import ColorDeck from './components/og/ColorDeck';
// import CreatureCardList from './components/Deck';

function App() {
// ============Sockets============
const [isConnected, setIsConnected] = useState(socket.connected);
const [gameEvents, setGameEvents] = useState([]);


useEffect(() => {
  const onConnect = () => {
    setIsConnected(true);
  }

  const onDisconnect = () => {
    setIsConnected(false);
  }

  const onGameEvents = (value) => {
    setGameEvents(previous => [...previous, value]);
  }

  socket.on('connect', onConnect);
  socket.on('disconnect', onDisconnect);
  socket.on('game', gameEvents);

  return () => {
    socket.off('connect', onConnect);
    socket.off('disconnect', onDisconnect);
    socket.off('game', onGameEvents);
  };

}, [gameEvents]);


  return (
    <div>
      <ConnectionState isConnected={ isConnected } />
      <Routes>
        {/* <Route path="/" element={ <Game gameEvents={gameEvents}/>} /> */}

        {/* <Route path='/' element= { <CreatureCard />} />
        <Route path='/deck' element={<Deck  />}/> */}
        <Route path='/' element={<Game />} />

      </Routes>
      <ConnectionManager />

    </div>
  );
}

export default App;
