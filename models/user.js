const mongoose = require('mongoose');

// Definición
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un email válido'] 
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    roles: {
        type: [String], 
        default: ['user']
    }
}, {
    timestamps: true,
    toJSON: { 
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password; 
            delete ret.__v; 
        }
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
