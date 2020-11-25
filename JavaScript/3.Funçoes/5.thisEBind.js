// O this varia de acordo com cada uso

const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar()
falar() // Conflitos entre paradigmas


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
