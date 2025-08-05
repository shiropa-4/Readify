const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes); 


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
