const express = require('express');

const router = express.Router();

const { getIndex, getServicios, getProductos, getLogin, getRegistro } = require('../controllers/public');

router.get('/', getIndex);

router.get('/servicios', getServicios);

router.get('/productos', getProductos);

router.get('/login', getLogin);

router.get('/registro', getRegistro);

module.exports = router;
