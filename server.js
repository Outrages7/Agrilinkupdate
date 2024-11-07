const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// Multer setup for file upload with file size limit
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Give the file a unique name
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/agriLink', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully.');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// User schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Product schema with auction end date
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  auctionEndDate: { type: Date, required: true }, // Adding auction end date
});

const Product = mongoose.model('Product', productSchema);

// Signup route
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'Email already in use.' });
    }

    const newUser = new User({ fullName, email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: 'Signup successful!' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user by email (username)
    const user = await User.findOne({ email: username });
    if (!user) {
      return res.status(404).json({ success: false, error: 'User does not exist!' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ success: false, error: 'Incorrect password!' });
    }

    // Successful login
    res.status(200).json({ success: true, message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route to list a product with auction end date
app.post('/api/products', upload.single('image'), async (req, res) => {
  console.log('Received product data:', req.body);
  console.log('Uploaded file:', req.file);

  try {
    const { productName, description, price, category, auctionEndDate } = req.body;
    const image = req.file ? req.file.path : null; // Get image path

    const newProduct = new Product({
      productName,
      description,
      price,
      category,
      image,
      auctionEndDate,  // Store auction end date
    });

    await newProduct.save();
    res.status(201).json({ success: true, message: 'Product listed successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
