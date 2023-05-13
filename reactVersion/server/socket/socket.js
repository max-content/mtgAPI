// import { createGameState, gameLoop } from "./game";
const shortId = require("shortid");

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

    const rooms = [];

    const roomHandler = (io, socket, rooms) => {
        const create = (payload, callback) => {
            if (payload.type === "stranger") {
                const index = rooms.findIndex(
                    (room) => room.vacant === true && room.private === false
                );
                if (index >= 0) {
                    const room = rooms[index];
                    room.players[socket.id] = {
                        option: null,
                        optionLock: false,
                        life: 20,
                    };
                    room.vacant = false;
                    socket.join(room.roomId);
                    io.to(room.roomId).emit("room:get", room);
                    callback(null, room.roomId);
                } else {
                    const room = {
                        roomId: shortId.generate(),
                        players: {
                            [socket.id]: {
                                option: null,
                                optionLock: false,
                                life: 20,
                            },
                        },
                        vacant: true,
                        private: false,
                        type: payload.type,
                    };
                    rooms.push(room);
                    socket.join(room.roomId);
                    io.to(room.roomId).emit("room:get", room);
                    callback(null, room.roomId);
                }
            } else {
                const room = {
                    roomId: shortId.generate(),
                    players: {
                        [socket.id]: {
                            option: null,
                            optionLock: false,
                            life: 20,
                        },
                    },
                    vacant: true,
                    private: true,
                    type: payload.type,
                };
                rooms.push(room);
                socket.join(room.roomId);
                io.to(room.roomId).emit("room:get", room);
                callback(null, room.roomId);
            }
        }; // end of create method

        const join = (payload, callback) => {
            const index = rooms.findIndex((room) => room.roomId === payload.roomId);
            if(index >= 0) {
                const room = rooms[index];
                if(room.players[socket.id]) return callback(null);
                
                if(room.vacant && room.private) {
                    room.players[socket.id] = {
                        option: null,
                        optionLock: false,
                        life: 20,
                    };
                    room.vacant = false;
                    rooms.push(room);
                    socket.join(room.roomId);
                    io.to(room.roomId).emit("room:get", room);
                    callback(null, room);
                } else {
                    callback({error: true});
                }
            } else {
                callback({error: true});
            }
        }; // end of join

        const update = (payload) => {
            const index = rooms.findIndex((room) => room.roomId === payload.roomId);
            if(index >=0) {
                rooms[index] = payload;
                io.to(payload.roomId).emit("room:get", payload);
            }
        }
        socket.on("room:create", create);
        socket.on("room:join", join);
        socket.on("room:update", update);
    } //end of room handler

    io.on('connection', (socket) => {
        // const game = createGameState();
        // startGameInterval(socket, game);
        
        // Emit an event to the client when they connect
        console.log('a user connected: ',  socket.id );
        roomHandler(io, socket, rooms);

        // // Handle a move event from the client
        // socket.on('playerOne', (data) => {
        //     socket.broadcast.emit('playerOne', data);
        // })

        // socket.on('playerTwo', (data) => {
        //     socket.broadcast.emit('playerTwo', data);
        // })

        // socket.on('draw', (data) => {
        //     console.log(`Player ${data.playerId} drew to ${data.creatureDeck[i].name}`);
        //     // Emit the move event to all other clients except the sender
        //     socket.broadcast.emit('draw', data);
        // });

        // Handle the disconnect event
        socket.on('disconnect', () => {
            console.log('user disconnected: ', socket.id);
            // Emit an event to all other clients when a player disconnects
            socket.broadcast.emit('player-disconnected', { playerId: socket.id });
        });
    });
}