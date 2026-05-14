require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Portada',
    paginaActual: 'index'
  });
});

app.get('/servicios', (req, res) => {
  res.render('servicios', {
    titulo: 'Servicios',
    paginaActual: 'servicios',
    servicios: [
      {
        nombre: 'Falso novio para cenas',
      },
      {
        nombre: 'Acompañante para hacer fila',
      },
      {
        nombre: 'Paseador de suegras',
      },
      {
        nombre: 'Receptor de quejas vecinales',
      },
      {
        nombre: 'Susurrador de plantas muertas',
      },
      {
        nombre: 'Espía de neveras ajenas',
      },
      {
        nombre: 'Abucheador de exparejas',
      },
      {
        nombre: 'Odiador de cosas en común',
      },
      {
        nombre: 'Probador profesional de siestas',
      },
      {
        nombre: 'Comprobador de bombillas fundidas',
      },
      {
        nombre: 'Acompañante para mirar obras',
      },
      {
        nombre: 'Entrenador de piedras mascota',
      },
      {
        nombre: 'Lector de términos y condiciones',
      }
    ]
  });
});

app.get('/productos', (req, res) => {
  res.render('productos', {
    titulo: 'Productos',
    paginaActual: 'productos',
    productos: [
      {
        nombre: 'Agua de charco premium',
      },
      {
        nombre: 'Crema antiarrugas "Ya es tarde"',
      },
      {
        nombre: 'Manta con agujeros para pies',
      },
      {
        nombre: 'Piedra con bluetooth',
      },
      {
        nombre: 'Reloj sin agujas',
      },
      {
        nombre: 'Jabón que ensucia',
      },
      {
        nombre: 'Agua en polvo',
      },
      {
        nombre: 'Hielo caliente',
      },
      {
        nombre: 'Flotador de plomo',
      },
      {
        nombre: 'Licor de tortilla de patata',
      },
      {
        nombre: 'Batido de morcilla',
      }
    ]
  });
});

app.get('/login', (req, res) => {
  res.render('login', {
    titulo: 'Login',
    paginaActual: 'login'
  });
});

app.get('/registro', (req, res) => {
  res.render('registro', {
    titulo: 'Registro',
    paginaActual: 'registro'
  });
});

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
