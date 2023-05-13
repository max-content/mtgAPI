import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { socket } from "../socket";
import { SocketContext } from "./socketConnection";

import ColorDeck from "./og/ColorDeck";
import Deck from "./og/Deck";


const Game = ({ gameEvents }) => {

    const [color, setColor] = useState("W");
    const [isLoading, setIsLoading] = useState(false);
    const [creatureDeck, setCreatureDeck] = useState([]);
    
    const { socket, room, p1, p2} = useContext(SocketContext)


    useEffect(() => {
        
        return () => {
            cleanup
        }
    }, [input]);

    const createNewGame = (e) => {
        e.preventDefault();
        setIsLoading(true);
        

    }

    return (
        <div>
            <form onSubmit={createNewGame}>
                <input type="submit" disabled={isLoading} value="New Game" />
            </form>
            <ColorDeck
                setColor={setColor}
                color={color}
                setCreatureDeck={setCreatureDeck}
            />
            <Deck color={color} creatureDeck={creatureDeck} />
            {/* <Events gameEvents={gameEvents} /> */}
        </div>
    );
};

export default Game;
