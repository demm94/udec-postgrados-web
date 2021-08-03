const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'web-files.site')));
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'web-files.site', 'index.html'))
});
 
app.listen(3000, () => console.log(`Run on port ${PORT}`));