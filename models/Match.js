const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    champion: String,    // Played Hero
    opponent: String,    // Opponent Hero
    result: String,      // Win / Loss
    kda: String,         // Kda 
    date: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Match', matchSchema);