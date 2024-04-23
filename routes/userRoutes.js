// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');  


router.post('/register', userController.register);
router.post('/login', userController.login);


router.get('/', authMiddleware,userController.getAllUsers); 
router.get('/:id', authMiddleware,userController.getUser);  
router.put('/:id', authMiddleware, userController.updateUser); 
router.delete('/:id', authMiddleware, userController.deleteUser);  

module.exports = router;
