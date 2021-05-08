const express = require('express');

const dataRouter = express.Router();
dataRouter.get('/', (req, res) => {
    res.send('DATA');
});

module.exports = dataRouter;

