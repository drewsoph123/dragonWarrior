const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello Wrld!');
// });
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
