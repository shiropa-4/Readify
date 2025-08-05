

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model("Order", orderSchema);

