const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log('db connected'))
  .catch((error) => console.error(error));