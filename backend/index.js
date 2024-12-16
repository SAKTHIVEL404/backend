const express = require('express');
const cors = require('cors'); // To allow requests from frontend

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());


// Define a sample API endpoint
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
