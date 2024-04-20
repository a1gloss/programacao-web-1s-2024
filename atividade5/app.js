const express = require('express');
const app = express();

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send(`Produto ${nome} adicionado ao estoque.`);
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send(`Produto com ID ${id} removido do estoque.`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const index = estoque.findIndex(produto => produto.id === id);
    if (index !== -1) {
        estoque[index].quantidade = parseInt(qtd);
        res.send(`Quantidade do produto com ID ${id} atualizada.`);
    } else {
        res.status(404).send('Produto não encontrado no estoque.');
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
