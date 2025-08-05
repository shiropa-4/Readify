const express = require('express');
const router = express.Router();
const { getAllBooks, getBooksByCategory, createBook } = require('../controllers/bookController');

// Route handlers now point to controller functions
router.get('/', getAllBooks);
router.get('/:category', getBooksByCategory);
router.post('/', createBook);

module.exports = router;
