function calcSummarize(data) {
  var sumTemp = 0, sumPrec = 0, cnt = 0, minPrec = Number.MAX_VALUE, maxPrec = Number.MIN_VALUE,
    minTemp = Number.MAX_VALUE, maxTemp = Number.MIN_VALUE;
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
    if (datum.Temperature_Celsius < minTemp) {
      minTemp = datum.Temperature_Celsius;
    }
    if (maxTemp < datum.Temperature_Celsius) {
      maxPrec = datum.Temperature_Celsius;
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

module.exports = calcSummarize;
