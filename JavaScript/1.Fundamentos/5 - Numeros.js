/*
Aula 05 - Números
*/


const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// Verificar se o valor é um valor inteiro
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 = 9.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso2 + peso1)

console.log(media.toFixed(2)) // Formatar casas decimais
console.log(media.toString(2)) // Valores binários
console.log(typeof media)
console.log(typeof Number)

console.log(7/0)

console.log("10"*1) // Converte em valor númerico o conteúdo da String

console.log("Show"*1) // Not a Number

console.log(0.1+0.7)




