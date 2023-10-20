const express = require('express');
const app = express();
const port = 3000;

// Setiap GET request ke http://localhost:3000/ akan diarahkan ke handler ini
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Setiap GET request ke http://localhost:3000/products akan diarahkan ke handler ini
app.get('/product', (req, res) => {
  res.json(['Apple', 'Redmi', 'One Plus One']);
});

// Setiap GET request ke http://localhost:3000/orders akan diarahkan ke handler ini
app.get('/orders', (req, res) => {
  res.send([
    {
      id: 1,
      paid: false,
      user_id: 1,
    },
    {
      id: 2,
      paid: false,
      user_id: 2,
    },
  ]);
});

// Method yang dipakai untuk menyelakan web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
