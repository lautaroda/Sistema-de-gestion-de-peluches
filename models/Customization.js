// models/Customization.js
const mongoose = require('mongoose');

const customizationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    plushieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plushie',
        required: true
    },
    color: {
        type: String,
        required: true
    },
    accessory: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Customization = mongoose.model('Customization', customizationSchema);
module.exports = Customization;
