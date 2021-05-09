require('dotenv/config');
const routesSetup = require('./server/routesSetup')
const connectTodb = require('./server/connectToDB');

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listening on 3000');
});

connectTodb();
routesSetup(app);

