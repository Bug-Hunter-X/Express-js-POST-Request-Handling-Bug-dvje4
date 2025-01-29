const express = require('express');
const app = express();
app.use(express.json());

// Initialize users array outside the request handler
let users = [];

app.post('/users', (req, res) => {
  try {
    // Validate request body
    if (!req.body || !req.body.name || !req.body.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newUser = req.body; 
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});