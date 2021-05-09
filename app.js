require('dotenv/config');
const routesSetup = require('./server/routesSetup')
const connectTodb = require('./server/connectToDB');

var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on 3000');
});

connectTodb();
routesSetup(app);

