// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const overlayRoutes = require('./routes/overlayRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/overlayDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/overlays', overlayRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
