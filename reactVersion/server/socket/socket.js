// import { createGameState, gameLoopf } from "./game";


module.exports = (io) => {
    // const startGameInterval = (socket, game) => {
    //     const intervalID = setInterval(() => {
    //         const winner = gameLoop(game);

    //         if(!winner) {
    //             socket.emit('game', JSON.stringify(game));
    //         } else {
    //             socket.emit('gameOver');
    //             clearInterval(intervalID);
    //         }
    //     })
    // }
    io.on('connection', (socket) => {
        // const game = createGameState();
        // startGameInterval(socket, game);

        console.log('a user connected');

        // Emit an event to the client when they connect
        socket.emit('player-connected', { playerId: socket.id });

        // Handle a move event from the client
        socket.on('playerOne', (data) => {
            socket.broadcast.emit('playerOne', data);
        })

        socket.on('playerTwo', (data) => {
            socket.broadcast.emit('playerTwo', data);
        })


        socket.on('draw', (data) => {
            console.log(`Player ${data.playerId} drew to ${data.creatureDeck[i].name}`);
            // Emit the move event to all other clients except the sender
            socket.broadcast.emit('draw', data);
        });

        // Handle the disconnect event
        socket.on('disconnect', () => {
            console.log('user disconnected');
            // Emit an event to all other clients when a player disconnects
            socket.broadcast.emit('player-disconnected', { playerId: socket.id });
        });
    });
}