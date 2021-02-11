const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require("../models/Contatos");

const Contatos = mongoose.model('contatos');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/jeffsstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log("Conexão com MongoDB realizada.")
}).catch((erro) => {
    console.log("Erro: Não foi possível realizar conexão com o MongoDB.")
});

const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: 'juliocesar',
        database: 'jeffsstore_react'
    });

//get /produtos
app.get('/produtos', (req, res, next) => {
    
    connection.query("SELECT * FROM produtos INNER JOIN categoria_produto ON produtos.idproduto = categoria_produto.idproduto INNER JOIN categoria ON categoria_produto.idcategoria = categoria.idcategoria", (error, result) => {
        res.json({dados: result});
    });
});

//post /contatos
app.post('/contatos', (req,res) => {
    const contatos = Contatos.create(req.body, (err) =>{
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Contato não foi cadastrado."
        })
        return res.status(200).json({
            error: false,
            message: "Contato cadastrado com sucesso!"
        })
    })
});

app.get('/listarcontatos', (req, res) => {
    Contatos.find({}).then((contatos) => {
        return res.json({dados: contatos});
    }).catch((erro) => {
        return res.status(400).json({
           error: true,
           message: "Nenhum contato encontrado!" 
        })
    })
});

//post /pedidos
app.post('/pedidos', (req,res) => {
    let dados = [];

    dados.push({
        nome_cliente: req.body.nome_cliente,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        nome_produto: req.body.nome_produto,
        valor_unitario: req.body.valor_unitario,
        quantidade: req.body.quantidade,
        valor_total: req.body.valor_total
    });

    connection.query('INSERT INTO pedidos SET ?', dados, () => {
        res.send('Enviado.')
        //console.log("Dados enviados com sucesso!")
    });
    
});

//get /listarpedidos
app.get('/listarpedidos', (req, res, next) => {
    
    connection.query("SELECT * FROM pedidos", (error, result) => {
        res.json({dados: result});
    });
});

app.listen(1910, () => {
    console.log("Servidor Ativo!");
})