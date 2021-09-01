const Book = require('../models/Book');

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).send(updatedBook);
  } catch(err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = updateBook;
