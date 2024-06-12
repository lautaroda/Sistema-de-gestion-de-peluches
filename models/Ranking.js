// models/Ranking.js
const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
    customizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customization',
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
