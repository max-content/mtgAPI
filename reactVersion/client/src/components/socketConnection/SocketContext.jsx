import React, { useEffect, useState, createContext } from 'react'; 
import { socket } from '../../socket';
import { ConnectionManager, ConnectionState, Events } from "./index";
import { useNavigate, useLocation } from 'react-router-dom';

const SocketContext = createContext();

const SocketContextProvider = ({children}) => {
    // const [isConnected, setIsConnected] = useState(socket.connected);
    // const [gameEvents, setGameEvents] = useState([]);
    const [playerOneID, setPlayerOneID] = useState('');
    const [playerTwoID, setPlayerTwoID] = useState('')
    const [room, setRoom] = useState({});
    
    useEffect(() => {
        // const onConnect = () => {
        //     setIsConnected(true);
        //     // playerConnection();
        // }

        // const onDisconnect = () => {
        //     setIsConnected(false);
        //     // playerDisconnection();
        // }

        // const onGameEvents = (value) => {
        //     setGameEvents(previous => [...previous, value]);
        // }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('game', onGameEvents);

        socket.on("room:get", (payload) => {
            setRoom(payload);
            let p1SocketObject = Object.keys(payload.players)[0];
            let p2SocketObject = Object.keys(payload.players)[1];

            if(p1SocketObject === socket.id) {
                setPlayerOneID(p1SocketObject);
                setPlayerTwoID(p2SocketObject);
            } else {
                setPlayerOneID(p2SocketObject);
                setPlayerTwoID(p1SocketObject)
            }

            if( payload?.players[p1SocketObject]?.life === 0 || payload?.players[p2SocketObject]?.score === 0) {
                console.log(`GAME OVER`);
            }
            console.log(payload.players)
        })

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('game', onGameEvents);
        };

    }, []);

    return(
        <>
            <SocketContext.Provider value={{
                isConnected,
                room,
                setRoom,
                playerOneID,
                playerTwoID
            }}>
                {children}
            </SocketContext.Provider>
        </>
    )

}

export {SocketContextProvider, SocketContext}