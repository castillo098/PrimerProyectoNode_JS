const terreno = require('./modelo_terreno');
const express=require('express'),
rutas=express.Router(),
equipo=require('./controlador_terreno');
cliente=require('./controlador_cliente');
rutas.use('/equipo',equipo);
rutas.use('/cliente',cliente);

module.exports=rutas;