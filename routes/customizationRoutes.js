// routes/customizationRoutes.js
const express = require('express');
const router = express.Router();
const customizationController = require('../controllers/customizationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, customizationController.createCustomization);
router.get('/', authMiddleware, customizationController.getAllCustomizations);
router.get('/:id', authMiddleware, customizationController.getCustomization);
router.put('/:id', authMiddleware, customizationController.updateCustomization);
router.delete('/:id', authMiddleware, customizationController.deleteCustomization);


router.get('/options', customizationController.getOptions);

module.exports = router;
