const mongoose = require('mongoose');

const Contatos = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    } 
},
{
    timestamps: true,
});

mongoose.model('contatos', Contatos);