const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware for parsing request body
app.use(bodyParser.json());

// Fake in-memory "database"
let users = [];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the DevOps CRUD App');
});

// Create a new user (POST)
app.post('/users', (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).send('All fields are required');
  }
  users.push({ id, name, email });
  res.status(201).send('User created successfully');
});

// Read all users (GET)
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// Update a user (PUT)
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  let user = users.find(user => user.id === userId);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    return res.status(200).send('User updated successfully');
  }
  res.status(404).send('User not found');
});

// Delete a user (DELETE)
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.status(200).send('User deleted successfully');
});

// Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
