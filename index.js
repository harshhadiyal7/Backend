const express = require('express');

const app = express(); // Create server instance

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});


app.listen(7000);// Start server on port 7000