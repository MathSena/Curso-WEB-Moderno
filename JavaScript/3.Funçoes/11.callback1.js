const times = ["Corinthians", "Palmeiras", "São Paulo", "Santos"] 

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

times.forEach(imprimir)
times.forEach(fabricantes => console.log(fabricantes))