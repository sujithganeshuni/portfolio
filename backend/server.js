// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Message = require('./models/Message'); // <-- 1. IMPORT THE MODEL

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// --- API ROUTES ---
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// vvv 2. UPDATE THIS ENTIRE ROUTE vvv
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill out all fields.' });
    }

    // Create a new message instance using our model
    const newMessage = new Message({
      name,
      email,
      message,
    });

    // Save the new message to the database
    await newMessage.save();

    console.log('Message saved to database:', newMessage);
    res.status(201).json({ success: true, message: 'Message saved successfully!' });

  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Server error. Could not save message.' });
  }
});
// ^^^ 2. END OF UPDATED ROUTE ^^^

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});