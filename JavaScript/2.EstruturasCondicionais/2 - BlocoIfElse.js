// Bloco IF-Else


const imprimirResultado = function(nota){
    if(nota>=7){
        console.log("Aprovado! " + nota)
    }else{
        console.log("Reprovado!")
    }
}


imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // Cuidado com o JS, ele é fracamente tipado