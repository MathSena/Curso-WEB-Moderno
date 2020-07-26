function tratarErro(erro){
   // throw new Error('...')
   throw{
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}


function imprimirGrito(obj){
    try{ // Executa o código
        console.log(obj.name.toUpperCase()+ '!!!') ///toUpperCase == Transforma String em Maiúscula
    }catch(e){ // Caso dê erro, executa
        tratarErro(e)
        
    }finally{ // Finaliza
        console.log('Deu Ruim')
    }
    

}

const obj = {name: 'Jane Doe'}
imprimirGrito(obj)
