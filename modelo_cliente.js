var mongoose= require("mongoose"),
Schemas=mongoose.Schema;
var atributos=new Schemas({
    idCliente:{type:Number,trim:true},
    nombre:{type:String,trim:true},
    apellido:{type:String,trim:true},
    edad:{type:Number,trim:true},
    email:{type:String,trim:true},
    telefono:{type:String,trim:true}
});
var cliente=mongoose.model('cliente',atributos);
module.exports=cliente;