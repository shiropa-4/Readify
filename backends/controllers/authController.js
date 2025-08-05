const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { name, dob, contact, profession, age, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

   // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, dob, contact, profession, age, email });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.status(200).json({ msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

module.exports = { register, login };
