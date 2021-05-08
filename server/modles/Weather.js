const mongoose = require('mongoose');

const weatherSchema = mongoose.Schema ({
  Longitude: { type: String, required: true },
  Latitude: { type: String, required: true },
  forecast_time: { type: String, required: true },
  Temperature_Celsius: { type: String, required: true }, 
  Precipitation_Rate: { type: String, required: true }
});

module.exports = mongoose.model('Weather', weatherSchema);
