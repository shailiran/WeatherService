const dataRoute = require('./routes/dataRoute');
const summarizeRoute = require('./routes/summarizeRoute');
const weatherRouter = require('./routes/WeatherRouter');

function routesSetup(app) {
  // app.use('/data', dataRoute);
  // app.use('/summarize', summarizeRoute);  
  app.use('/weather', weatherRouter);
}

module.exports = routesSetup;
