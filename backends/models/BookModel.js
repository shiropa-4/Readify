const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
 name: { type: String, required: true },
  author: String,
  price: String,
  pdfLink: String,
  category: String,

  
  image: String
});

module.exports = mongoose.model('Book', bookSchema);
