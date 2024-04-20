function criarProduto(id, nome, qtd){
    let p = {
        id : id,
        nome : nome,
        qtd : qtd
    }
    return p;
}

module.exports = {
    criarProduto
}