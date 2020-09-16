var moongoose= require('mongoose');
var connection=moongoose.connect('mongodb+srv://Root:jon123@cluster0.xx6ye.mongodb.net/equipoFutbol?retryWrites=true&w=majority');

moongoose.connection.on('open',(ref)=>{
    console.log("Conectado a mongoCloud");
});
module.exports=connection;


