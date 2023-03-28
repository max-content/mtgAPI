import React, { useEffect, useState} from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import {socket} from './socket';
import { ConnectionManager, ConnectionState, Events } from './components/socketConnection';

import Game from './components/Game';

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

  const onGameEvent = (value) => {
    setGameEvents(previous => [...previous, value]);
  }

  socket.on('connect', onConnect);
  socket.on('disconnect', onDisconnect);
  socket.on('game', onGameEvent);
  return () => {
    socket.off('connect', onConnect);
    socket.off('disconnect', onDisconnect);
    socket.off('game', onGameEvent);
  };
}, [gameEvents]);

  return (
    <div>
      <ConnectionState isConnected={ isConnected } />
      <Routes>
        <Route path="/" element={ <Game Events={ gameEvents }/> } />

      </Routes>
      <ConnectionManager />
    </div>
  );
}

export default App;
