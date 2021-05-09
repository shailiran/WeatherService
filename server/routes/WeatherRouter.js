const express = require('express');
const dataRouter = require('./dataRoute');
const sumRouter = require('./summarizeRoute');

const weatherRouter = express.Router({ mergeParams: true });

weatherRouter.use('/data', dataRouter);
weatherRouter.use('/summarize', sumRouter);

module.exports = weatherRouter;
