// index.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); 
const jwtSecret = process.env.JWT_SECRET;

const app = express();

connectDB();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const plushieRoutes = require('./routes/plushieRoutes');
const customizationRoutes = require('./routes/customizationRoutes');
const rankingRoutes = require('./routes/rankingRoutes');

app.use('/users', userRoutes);

app.use('/plushies', plushieRoutes);
app.use('/customizations', customizationRoutes);
app.use('/rankings', rankingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
