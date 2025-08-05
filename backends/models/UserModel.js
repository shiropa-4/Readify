const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  contact: { type: String, required: true },
  profession: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
  //password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
