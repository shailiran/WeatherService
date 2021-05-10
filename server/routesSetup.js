const weatherRouter = require('./routes/WeatherRouter');

function routesSetup(app) { 
  app.use('/weather', weatherRouter);
}

module.exports = routesSetup;
