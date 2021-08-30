const Book = require('../models/Book');

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch(err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = getBooks;
