const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/getKey');

const addBook = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  // verify that the jwt is valid
  jwt.verify(token, getKey, {}, async (err) => {
    if (err) {
      res.send('invalid token');
    } else {
      const newBook = await Book.create(req.body);
      res.status(201).send(newBook);
    }
  });
};

// const addBook = async (req, res) => {
//   try {
//     const newBook = await Book.create(req.body);
//     res.status(201).send(newBook);
//   } catch(err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// };

module.exports = addBook;
