/*
Aula 09 - Vetores - Arrays 
*/

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

console.log(valores[4]) // Não dá erro = Undefined

valores[4] = 10
console.log(valores)

valores[10] = 20
console.log(valores)


console.log(valores.length) // Tamanho da Array
valores.push({id: 3}, false, null, 'test') // Adicionando a Array

console.log(valores.pop())// Remove o último valor
delete valores[0]
console.log(valores)

console.log(typeof valores)
