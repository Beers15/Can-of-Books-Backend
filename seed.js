const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book');

mongoose.connect(process.env.DATABASE_URL);

const seed = async () => {
  await Book.create({
    title: 'Lord of the Rings, the Two Towers',
    description: 'They are taking the hobbits to Isengard',
    status: 'OrcFilth',
    email: 'joe@gmail.com'
  });
  await Book.create({
    title: '1984',
    description: 'Big brother is always watching',
    status: 'dystopia',
    email: 'bob@gmail.com'
  });
  await Book.create({
    title: 'Coding for Dummies',
    description: '200 pages on for loops',
    status: 'infiniteloop',
    email: 'bill@gmail.com'
  });
  mongoose.disconnect();
};

seed();
