const Book = require('../models/Book');
const jwt = require('jsonwebtoken');
const getKey = require('../helpers/jwt');

const deleteBook = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async (err) => {
    if(err) {
      res.send('invalid token');
    } else {
      //const email = req.query.email;
      const id = req.params.id;
      const deletedBook = await Book.findByIdAndDelete(id);

      res.status.status(204).send(deletedBook);
    }
  });
};

// const deleteBook = async (req, res) => {
//   try {
//     const deletedBook = await Book.findByIdAndDelete(req.params.id);
//     res.status(204).send(deletedBook);
//   } catch(err) {
//     console.log(err);
//     res.status(404).send(err);
//   }
// };

module.exports = deleteBook;
