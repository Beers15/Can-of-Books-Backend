const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/jwt');

const getBooks = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, (err) => {
    if(err) {
      res.send('invalid token');
    } else {
      const email = req.query.email;

      Book.find({ email }, (err, books) => {
        if(err) {
          return console.error(err);
        }
        res.send(books);
      });
    }
  });
};

// const getBooks = async (req, res) => {
//   try {
//     const books = await Book.find({email: req.params.user});
//     res.status(200).send(books);
//   } catch(err) {
//     console.log(err);
//     res.status(404).send(err);
//   }
// };

module.exports = getBooks;
