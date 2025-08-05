const express = require("express");
const router = express.Router();
const Order = require("../models/OrderModel");
const Book = require("../models/BookModel");

// POST: Buy a book
router.post("/buy", async (req, res) => {
  const { bookId } = req.body;

  try {
    const order = new Order({ bookId });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation failed:", err);  // log to terminal
    res.status(500).json({ error: err.message });
  }
});


// GET: All orders with book details
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("bookId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
