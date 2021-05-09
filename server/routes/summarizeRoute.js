const express = require('express');
const Weather = require('../modles/Weather');
const calcSummarize = require('./utils');

const sumRouter = express.Router();
sumRouter.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    var data = await Weather.find({ Longitude: lon, Latitude: lat });
    var summarize = calcSummarize(data);
    res.send(summarize);
  } catch (error) {
    console.log(error);
    res.send('Error:' + error);
  }
});

module.exports = sumRouter;
