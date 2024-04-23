// models/Plushie.js
const mongoose = require('mongoose');

const plushieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Plushie = mongoose.model('Plushie', plushieSchema);
module.exports = Plushie;
