'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./services/getBooks');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/books', getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
