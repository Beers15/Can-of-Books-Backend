const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/getKey');

const addBook = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  console.log(req.body);
  jwt.verify(token, getKey, {}, async (err) => {
    if (err) {
      res.send('invalid token');
    } else {
      const newBook = await Book.create(req.body);
      res.status(201).send(newBook);
    }
  });
};

module.exports = addBook;
