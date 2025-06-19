const express = require('express');

const { login, logout } = require('../controller/authcontroller');
const { isUserLoggedIn } = require('../middleware/authMiddleware');

const router = express.Router();


// Route for user login
router.post('/login', login);

router.post('/logout', isUserLoggedIn, logout);

module.exports = router;
