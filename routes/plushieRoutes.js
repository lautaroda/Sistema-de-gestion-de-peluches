// routes/plushieRoutes.js
const express = require('express');
const router = express.Router();
const plushieController = require('../controllers/plushieController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, plushieController.createPlushie);
router.get('/', plushieController.getAllPlushies);
router.get('/:id', plushieController.getPlushie);
router.put('/:id', authMiddleware, plushieController.updatePlushie);
router.delete('/:id', authMiddleware, plushieController.deletePlushie);


router.get('/ranking', plushieController.getRanking);

module.exports = router;

