module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
      
        // Emit an event to the client when they connect
        socket.emit('player-connected', { playerId: socket.id });
      
        // Handle a move event from the client
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