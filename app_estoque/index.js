const express = require('express');
const estoque = require('./src/estoque');
const app = express();

app.get('/adicionar/:id/:nome/:qtd', function(req,res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd
    let p = estoque.criarProduto(id, nome, qtd0);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta' + PORT);
});