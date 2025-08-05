const express = require('express');
const router = express.Router();
const User = require('../models/UserModel.js'); // Mongoose model

router.post('/register', async (req, res) => {
  try {
    const { name, dob, contact, profession, age, email } = req.body;

    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = new User({ name, dob, contact, profession, age, email });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
