require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use('/', require('./routes/public'));
app.use('/servicios', require('./routes/public'));
app.use('/productos', require('./routes/public'));
app.use('/login', require('./routes/public'));
app.use('/registro', require('./routes/public'));

app.use((req, res, next) => {
  res.status(404).render('404', {
    titulo: 'error 404',
    paginaActual: '',
    mensaje: 'Estos no son los droides que estáis buscando.',
    imagenSrc: 'assets/images/obiwan-mind-control.gif'
  })
});

app.listen(port, () => {
  console.log('¡¡¡El servidor está vivo!!!');
});
