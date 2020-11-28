function criarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome
    }
}

console.log(criarPessoa('Robbie', 'Willians'))

function criarProduto(nome, valor){
    return {
    nome,
    valor,
    desconto: 0.1
}
}

console.log(criarProduto('Iphone', 3000))
console.log(criarProduto('Mac', 13000))