const express = require('express');
const Weather = require('../modles/Weather');

const sumRouter = express.Router();
sumRouter.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    var data = await Weather.find({ Longitude: lon, Latitude: lat }).sort('Temperature_Celsius');
    var summarize = calcSummarize(data);
    res.send(summarize);
  } catch (error) {
    console.log(error);
    res.send('Error:' + error);
  }
});


function calcSummarize(data) {
  var sumTemp = 0, sumPrec = 0, cnt = 0;
  data.forEach(datum => {
    sumTemp += datum.Temperature_Celsius;
    sumPrec += datum.Precipitation_Rate;
    cnt++;
  });
  var result = {
    max: {
      "Temperature": data[data.length - 1].Temperature_Celsius,
      "Precipitation": 20,
    },
    min: {
      "Temperature": data[0].Temperature_Celsius,
      "Precipitation": 20,
    },
    avg: {
      "Temperature": sumTemp / cnt,
      "Precipitation": sumPrec / cnt
    }
  }
  return result;
}

module.exports = sumRouter;

