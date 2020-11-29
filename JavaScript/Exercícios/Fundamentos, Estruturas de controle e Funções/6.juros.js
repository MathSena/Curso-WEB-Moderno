/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
M = C(1+i)^t
*/

function jurosCompostos(capital, taxa, tempo){
    return capital*((1+taxa)**tempo)
}

function jurosSimples(capital, taxa, tempo){
    return capital + (capital*taxa*tempo)
}


console.log(jurosSimples(5000,0.10,12))
console.log(jurosCompostos(5000,0.10,12))