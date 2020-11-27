let dobro = function (a){
    return 2*a
}

// Função dobro em reescrita como Arrow
dobro = (a) => {
    return 2 * a
}

// Arrow mais explicita (Somente funções de uma única linha)
dobro = a => 2*a
console.log(dobro(Math.PI))

idade = a => a*2

console.log(idade(16))


let ola = function(){
    return 'Olá'
}


ola = () => 'Olá'
ola = _=> 'Olá' // Possui um parametro
console.log(ola())