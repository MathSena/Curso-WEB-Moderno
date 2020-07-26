// novo recurso do ES2015


const pessoa = {
    nome: 'Darth Vader',
    idade: 52,
    endereco: {
        longradouro: 'Rua estrela da morte',
        numero: 666
    }
    
}

const {nome, idade} = pessoa // Retirando do objeto os atributos nome e idade
console.log(nome, idade)

const {nome:n , idade:i} = pessoa // Retirando do objeto os atributos nome e idade e atribuindo a uma nova variável
console.log(n, i)


