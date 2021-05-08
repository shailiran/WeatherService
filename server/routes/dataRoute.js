const express = require('express');
const Weather = require('../modles/Weather');

const dataRouter = express.Router();
dataRouter.get('/', async (req, res) => {
  try {
    var lat = req.body.lat;
    var lon = req.body.lon;
    var data = await Weather.find({ Longitude: lon, Latitude: lat });
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = dataRouter;
