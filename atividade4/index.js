const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.somar(a, b);
    res.send(`A soma de ${a} e ${b} é ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.subtrair(a, b);
    res.send(`A subtração de ${a} por ${b} é ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.multiplicar(a, b);
    res.send(`O produto de ${a} e ${b} é ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    try {
        const resultado = calculadora.dividir(a, b);
        res.send(`A divisão de ${a} por ${b} é ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});