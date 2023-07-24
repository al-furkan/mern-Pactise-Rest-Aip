const express = require('express');
const { registerUser, loginUser, getMe } = require('../controllers/userContoler');
const { protect } = require('../middleware/authMiddleware');
const Userouter = express.Router();

//const { protect } = require('../middleware/authMiddleware')

Userouter.post('/', registerUser);
Userouter.post('/login', loginUser)
Userouter.get('/me',protect, getMe)

module.exports = Userouter;