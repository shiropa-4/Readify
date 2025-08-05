// controllers/bookController.js
const Book = require('../models/BookModel');

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

// Get books by category
const getBooksByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const books = await Book.find({ category });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category books', error });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllBooks,
  getBooksByCategory,
  createBook
};
