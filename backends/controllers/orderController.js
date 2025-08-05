const Order = require('../models/OrderModel');

// POST: Create a new order
exports.createOrder = async (req, res) => {
  const { name, author, image, purchaseDate } = req.body;

  try {
    const newOrder = new Order({
      name,
      author,
      image,
      purchaseDate,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
};

// GET: Fetch all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ purchaseDate: -1 }); // latest first
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};
