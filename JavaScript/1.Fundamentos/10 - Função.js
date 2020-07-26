// função em JS

// Função sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(5, 7, 7,65)

// Função com retorno

function soma(a,b = 1){
    return a+b
}

console.log(soma(2,3))
console.log(soma(5))

// Armazenando uma função  em uma variavel


const imprimirSoma2 = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel

const soma2 = (a,b) =>{
    return a+b
}

console.log(soma2(1,6))