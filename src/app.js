require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Y el monstruo se levanta.');
});

app.listen(port, () => {
  console.log('¡¡¡El servidor está vivo!!!');
});
