// Create web server
// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Import the body-parser module
const bodyParser = require('body-parser');
// Import the comments array
const comments = require('./comments');

// Use the body-parser middleware
app.use(bodyParser.json());

// Serve the comments array
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment to the comments array
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
// Path: comments.js
// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Import the body-parser module
const bodyParser = require('body-parser');
// Import the comments array
const comments = require('./comments');

// Use the body-parser middleware
app.use(bodyParser.json());

// Serve the comments array
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment to the comments array
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
// Path: comments.js
// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Import the body-parser module
const bodyParser = require('body-parser');
// Import the comments array
const comments = require('./comments');

// Use the body-parser middleware
app.use(bodyParser.json());

// Serve the comments array
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment to the comments array
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
// Path: comments.js
// Import the express module
const express = require