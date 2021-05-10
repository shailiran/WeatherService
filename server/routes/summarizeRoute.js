const express = require('express');
const Forecast = require('../modles/Forecast');
const calcSummarize = require('./utils');

const sumRouter = express.Router();
sumRouter.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    var data = await Forecast.find({ Longitude: lon, Latitude: lat });
    var summarize = calcSummarize(data);
    res.send(summarize);
  } catch (error) {
    console.log(error);
    res.send('Error:' + error);
  }
});

module.exports = sumRouter;
