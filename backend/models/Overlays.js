// models/Overlay.js
const mongoose = require('mongoose');

const overlaySchema = new mongoose.Schema({
  name: String,
  content: String,
  position: {
    x: Number,
    y: Number
  },
  size: {
    width: Number,
    height: Number
  }
});

module.exports = mongoose.model('Overlay', overlaySchema);
