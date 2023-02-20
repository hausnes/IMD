const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML file with the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Name: ${name}<br>Email: ${email}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});