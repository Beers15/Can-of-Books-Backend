'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./services/getBooks');
const addBook = require('./services/addBook');
const deleteBook = require('./services/deleteBook');
const updateBook = require('./services/updateBook');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

//books route
app.get('/books', getBooks);
app.post('/books', addBook);
app.delete('/books/:id', deleteBook);
app.put('/books/:id', updateBook);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
