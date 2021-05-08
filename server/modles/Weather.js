const mongoose = require('mongoose');

const weatherSchema = mongoose.Schema ({
  Longitude: { type: Number, required: true },
  Latitude: { type: Number, required: true },
  forecast_time: { type: String, required: true },
  Temperature_Celsius: { type: Number, required: true }, 
  Precipitation_Rate: { type: Number, required: true }
});

module.exports = mongoose.model('weather', weatherSchema);
