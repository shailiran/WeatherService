const express = require('express');
const Forecast = require('../modles/Forecast');

const dataRouter = express.Router();
dataRouter.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    var data = await Forecast.find({ Longitude: lon, Latitude: lat });
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
