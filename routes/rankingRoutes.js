// routes/rankingRoutes.js
const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, rankingController.createRanking);
router.get('/', rankingController.getRanking);
router.get('/:id', rankingController.getRanking);
router.put('/:id', authMiddleware, rankingController.updateRanking);
router.delete('/:id', authMiddleware, rankingController.deleteRanking);
router.post('/vote/:id', rankingController.vote);

module.exports = router;
