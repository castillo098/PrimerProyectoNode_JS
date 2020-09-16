const express=require("express");
const body_parser = require('body-parser');
//var http = require("http");
//var server = http.createServer();
const app=express();
var connection=require('./conexionBd');
const rutas=require('./rutas');
//const cliente=require('./cliente');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',rutas);

//app.on('request',mensaje);
var port = process.env.PORT || 3000
app.listen(port, function(){

    console.log("El servidor inicia correctamente");
});
