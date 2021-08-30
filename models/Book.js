const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: {type: String},
  description: {type: String},
  status: {type: String},
  email:  {type: String},
});

const Book = model('Book', bookSchema);

module.exports = Book;
