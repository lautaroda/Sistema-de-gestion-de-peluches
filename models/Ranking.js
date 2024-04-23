// models/Ranking.js
const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
    plushieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plushie',
        required: true
    },
    counter: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const Ranking = mongoose.model('Ranking', rankingSchema);
module.exports = Ranking;
