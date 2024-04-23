require('mongoose');
const Usr = require('../models/user');
const jwt = require('jsonwebtoken');

exports.generateToken = function(user) {
    const payload = {
        userId: user._id,
        email: user.email
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

