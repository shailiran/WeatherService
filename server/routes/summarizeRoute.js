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
  var sumTemp = 0, sumPrec = 0, cnt = 0, minPrec = Number.MAX_VALUE, maxPrec = Number.MIN_VALUE;
  data.forEach(datum => {
    sumTemp += datum.Temperature_Celsius;
    sumPrec += datum.Precipitation_Rate;
    cnt++;
    if (datum.Precipitation_Rate < minPrec) {
      minPrec = datum.Precipitation_Rate;
    }
    if (maxPrec < datum.Precipitation_Rate) {
      maxPrec = datum.Precipitation_Rate;
    }
  });
  var result = {
    max: {
      "Temperature": data[data.length - 1].Temperature_Celsius,
      "Precipitation": maxPrec,
    },
    min: {
      "Temperature": data[0].Temperature_Celsius,
      "Precipitation": minPrec,
    },
    avg: {
      "Temperature": sumTemp / cnt,
      "Precipitation": sumPrec / cnt
    }
  }
  return result;
}

module.exports = sumRouter;

