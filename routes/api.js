const express = require('express');
const router = express.Router();

// Import contrillers

const authController = require('../controllers/auth');

router.get('/', function (req, res) {
    res.send('Hello World');
});

router.get('/signup', authController.signup);

module.exports = router;