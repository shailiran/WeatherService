const express = require('express');

const sumRouter = express.Router();
sumRouter.get('/', (req, res) => {
    res.send('DATA');
});

module.exports = sumRouter;

