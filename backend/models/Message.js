const mongoose = require('mongoose');

// This is our blueprint for a single message
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// The model is the tool we use to interact with the 'messages' collection in the database
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;