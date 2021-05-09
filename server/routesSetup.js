const dataRoute = require('./routes/dataRoute');
const summarizeRoute = require('./routes/summarizeRoute');

function routesSetup(app) {
  app.use('/data', dataRoute);
  app.use('/summarize', summarizeRoute);  
}

module.exports = routesSetup;
