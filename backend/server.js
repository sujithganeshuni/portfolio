// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const Message = require('./models/Message');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// --- Rate Limiter: max 10 contact form submissions per 15 minutes per IP ---
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again in 15 minutes.' },
});

// --- API ROUTES ---
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill out all fields.' });
    }

    // Create a new message instance using our model
    const newMessage = new Message({ name, email, message });

    // Save the new message to the database
    await newMessage.save();

    console.log('Message saved to database:', newMessage);
    res.status(201).json({ success: true, message: 'Message saved successfully!' });

  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Server error. Could not save message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});