const Book = require('../models/Book');

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).send(newBook);
  } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = addBook;
