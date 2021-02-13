var express = require('express');
var mongoose = require('mongoose');
var app = express()

app.use(express.json())

require('./src/models/Usuario');
const Usuario = mongoose.model('usuarios')

require('./src/db/connect');

app.get('/usuarios', async (req,res) =>{
    const usuariosResponse = await Usuario.find()
    const usuariosJson = await usuariosResponse

    return res.json(usuariosJson)
});

app.post('/usuarios', async(req,res) =>{
    const validate = await Usuario.findOne({email:req.body.eamil})
    if(validate){
        return res.json({massage:"Já esxite um usuario cadastrado com esse email, tente outro"})
    }else{

    const novoUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
    });


    res.json({message:"Cadastro Concluido com Sucesso", usuario: novoUsuario})
    }
});

app.listen(3020)