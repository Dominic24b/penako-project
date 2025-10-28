const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Selamat datang di API PENAKO!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Server PENAKO berjalan dengan baik!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server PENAKO berjalan di port ${PORT}`);
});
