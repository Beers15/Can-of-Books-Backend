const Book = require('../models/Book');

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(204).send(deletedBook);
  } catch(err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = deleteBook;
