const express = require('express');
const Weather = require('../modles/Weather');

const dataRouter = express.Router();
dataRouter.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    var data = await Weather.find({ Longitude: lon, Latitude: lat });
    res.json(data.map(datum => ({
      ForecastTime: datum.forecast_time, 
      Temperature: datum.Temperature_Celsius, 
      Precipitation: datum.Precipitation_Rate
    })));
  } catch (error) {
    console.log(error);
    res.send('Error:' + error);
  }
});

module.exports = dataRouter;
