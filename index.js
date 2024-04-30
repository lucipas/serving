const express = require('express');
const marked = require('marked');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    marked.parse(fs.readFileSync('index.md', 'utf8'))
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});