// |Bloco IF


function calculoDeNota(nota){
    if(nota >= 7){ // Se isso for verdadeiro, nota maior ou igual a 7
        console.log("Você foi aprovado com a nota: " + nota)

    }
}

calculoDeNota(7)

function verdade(valor){
    if(valor){ // Verdadeiro
        console.log("Isso é verdadeiro" + valor)
    }
}

verdade()
verdade([])