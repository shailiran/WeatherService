const mongoose = require('mongoose');

function connectTodb() {
  mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successfully connected to Mongodb!');
  });
}

module.exports = connectTodb
