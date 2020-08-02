// |Bloco IF-Else-If

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log("Medalha de ouro")
    } else if(nota.entre(7,8.99)) {
        console.log("Aprovado")

    } else if (nota.entre(0, 6.99)){
        console.log("Reprovado")
    }else{
        console.log("Opção inválida")
    }
    console.log("fim")
    }
 

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6)
