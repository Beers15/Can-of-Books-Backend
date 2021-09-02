const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/jwt');

function updateBook(req, res) {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async (err) => {
    if(err) {
      res.send('invalid token');
    } else {
      const { name, email, description, status } = req.body;
      try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { name, email, description, status }, { new: true, overwrite: true });
        res.send(updatedBook);
      } catch(err) {
        res.status(500).send(err);
      }
    }
  });
}

// const updateBook = async (req, res) => {
//   try {
//     const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
//     res.status(201).send(updatedBook);
//   } catch(err) {
//     console.log(err);
//     res.status(404).send(err);
//   }
// };

module.exports = updateBook;
