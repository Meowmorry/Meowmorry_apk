const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Meowmorry Server is Active! 🐱');
});

app.listen(port, () => {
  console.log(`Server Meowmorry lari di http://localhost:${port}`);
});