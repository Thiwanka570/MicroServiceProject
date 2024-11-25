const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/user', userController.getAllusers);
router.get('/user:id', userController.getUserById);
router.post('/user', userController.createUser);
router.put('/user:id', userController.updateUser);
router.delete('/user:id', userController.deleteUser);

module.exports = router;

