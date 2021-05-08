require('dotenv/config');

var express = require('express');
var app = express();
app.listen(3000, () => {
  console.log('Server listening on 3000');
})

// Import Routes
const dataRoute = require('./server/routes/dataRoute');
const summarizeRoute = require('./server/routes/summarizeRoute');
app.use('/data', dataRoute);
app.use('/summarize', summarizeRoute);

// Connect to db
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Successfully connected to Mongodb!');
});

