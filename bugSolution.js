const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Accessing req.query in a GET request
  console.log(req.query);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});