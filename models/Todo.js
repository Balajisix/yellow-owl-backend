const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Todo', todoSchema);
