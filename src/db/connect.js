const mongoose = require('mongoose');

function connect (){
    mongoose
    .connect('mongodb://localhost/genisis',{useNewUrlParser:true,useUnifiedTopology:true})
     .then(() =>{
         console.log('Conectado com o banco Recode')
     }).catch((error) => {
         console.log(`Erro ao conctar banco Recode${error}`)
     })
}

module.exports = connect()