const { request, response } = require('express');
var cliente=require('./modelo_cliente'),
    express=require('express'),
    rutas=express.Router();

rutas.post('/obtenerTodos',(request, response)=>{
    cliente.find({},(err,datos)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(datos);
    })
}) 
rutas.post('crear',(resquest,response)=>{
    var body=request.body;
    cliente.insertMany({
        idCliente:body.idCliente,
        nombre:body.nombre,
        apellido:body.apellido,
        edad:body.edad,
        email:body.email,
        telefono:body.telefono
    },(err,resp)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200),json(resp);
    })  
})
rutas.post('/editar',(request,response)=>{
    var body=request.body;
    cliente.updateOne(
        {
            idCliente:body.idCliente,
        },{
            nombre:body.nombre,
            apellido:body.apellido,
            edad:body.edad,
            email:body.email,
            telefono:body.telefono
        },(err,res)=>{
            if(err){
                console.log(err);
                throw err;
            }
            response.status(200).json(res);
        }
    )

})
rutas.post('/eliminar',(request,response)=>{
    var body=request.body;
    cliente.deleteOne(
        {
            idCliente:body.idCliente
        },(err,res)=>{
            if(err){
                console.log(err);
                throw err;
            }
            response.status(200).json(res);
        })
})
module.exports=rutas;