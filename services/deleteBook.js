const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/getKey');

const deleteBook = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async (err) => {
    if (err) {
      res.send('invalid token');
    } else {
      const id = req.params.id;
      const deletedBook = await Book.findByIdAndDelete(id);

      res.status.status(204).send(deletedBook);
    }
  });
};

module.exports = deleteBook;
