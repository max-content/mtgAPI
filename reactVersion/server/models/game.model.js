const mongoose = require('mongoose');

const Game  = mongoose.model(
  "Game",
  new mongoose.Schema({
    player: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    life: Number,
    deck: Array,
  })
);

module.exports = Game;