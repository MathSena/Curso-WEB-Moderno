/*
Aula 07 - String - Propriedades
*/

const escola = "Cod3r"

console.log(escola.charAt(4)) // Posição da String
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Valor na tabela ASC
console.log(escola.indexOf('3')) // Posição dentro da String
console.log(escola.substring(1)) // Imprime a String a partir da posição subsequente
console.log(escola.substring(0, 3)) // Imprime a String a partir da posição subsequente, exceto

console.log('Escola ' .concat(escola).concat("!")) // Concatena com literal

console.log(escola.replace(3, 'e')) // Substituir por um valor

console.log('Ana, Maria, Pedro'.split(',')) // Converter em Array