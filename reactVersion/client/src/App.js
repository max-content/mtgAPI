import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

import { socket } from './socket';
import { ConnectionManager, ConnectionState, Events } from './components/socketConnection';

import Game from './components/Game';

function App() {
    // ============Sockets============
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [gameEvents, setGameEvents] = useState([]);
    const [playerOneID, setPlayerOneID] = useState('');
    const [playerTwoID, setPlayerTwoID] = useState('')

    useEffect(() => {
        const onConnect = () => {
            setIsConnected(true);
            playerConnection();
        }

        const onDisconnect = () => {
            setIsConnected(false);
            playerDisconnection();
        }

        const onGameEvents = (value) => {
            setGameEvents(previous => [...previous, value]);
        }

        const playerConnection = () => {
            if (playerOneID === '' && playerTwoID === '') {
                setPlayerOneID(socket.id);
                console.log(`Player 1: ${socket.id}`)
            } else {
                setPlayerTwoID(socket.id);
                console.log(`Player 2: ${socket.id}`)
            }
        }

        const playerDisconnection = () => {
            if (socket.emit('playerOne')) {
                setPlayerOneID('');
            }
            if (socket.emit('playerTwo')) {
                setPlayerTwoID('');
            }
        }


        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('game', onGameEvents);
        socket.on('playerOne', playerConnection);
        socket.on('playerTwo', playerConnection)

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('game', onGameEvents);
            socket.off('playerOne', playerDisconnection);
            socket.off('playerTwo', playerDisconnection);
        };

    }, [gameEvents]);


    return (
        <div style={{ margin: '120px'}}>
            <ConnectionState isConnected={isConnected} />
            <Routes>

                <Route path='/' element={<Game />} />

            </Routes>
            <ConnectionManager />

        </div>
    );
}

export default App;
