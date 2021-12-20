const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello World');
});

router.get('/signup', (req, res) => {
    res.json({
        'data':'your hit signup url'
    });
});

module.exports = router;