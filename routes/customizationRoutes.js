// routes/customizationRoutes.js
const express = require('express');
const router = express.Router();
const customizationController = require('../controllers/customizationController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', customizationController.getAllCustomizations);
router.post('/', authMiddleware, customizationController.createCustomization);
router.get('/:id', customizationController.getCustomization);
router.put('/:id', authMiddleware, customizationController.updateCustomization);
router.delete('/:id', authMiddleware, customizationController.deleteCustomization);
router.post('/vote/:id', customizationController.vote);

module.exports = router;
