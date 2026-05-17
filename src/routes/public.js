const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Portada',
    paginaActual: 'index'
  });
});

router.get('/servicios', (req, res) => {
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

router.get('/productos', (req, res) => {
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

router.get('/login', (req, res) => {
  res.render('login', {
    titulo: 'Login',
    paginaActual: 'login'
  });
});

router.get('/registro', (req, res) => {
  res.render('registro', {
    titulo: 'Registro',
    paginaActual: 'registro'
  });
});

module.exports = router;
