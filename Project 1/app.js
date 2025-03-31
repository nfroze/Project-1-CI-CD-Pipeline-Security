// File: app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Project 1 - CI/CD Pipeline Security!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
