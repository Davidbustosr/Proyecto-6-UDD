// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('./authMiddleware');

// Rutas de Usuario
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/verifytoken', protect, userController.verifyToken);
router.put('/update', protect, userController.updateUser);

module.exports = router;