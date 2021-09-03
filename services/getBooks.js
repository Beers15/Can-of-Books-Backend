const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/getKey');

const getBooks = (req, res) => {
  console.log(req);
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, (err) => {
    if (err) {
      res.send('invalid token');
    } else {
      const email = req.query.email;

      Book.find({ email }, (err, books) => {
        if (err) {
          return console.error(err);
        }
        res.send(books);
      });
    }
  });
};

module.exports = getBooks;
