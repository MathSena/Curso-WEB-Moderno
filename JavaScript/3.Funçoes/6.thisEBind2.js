function Pessoa(){
    this.idade = 0

    const self = this

    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000) // o .bind amarra o this.idade à função
}

new Pessoa