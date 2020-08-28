// class 08 - type of functions

// primeiro tipo de função, Realiza tarefa e não devolve nada

function seyName(){
    console.log("Jonantan")
}

seyName()

// o segundo tipo devolve uma valor da função

function Myname(name) {
    return name
}

const name = Myname("Diego") // essa valor pode ser atibuido a uma variavel
console.log(name)

//============================================================

function TestFunction() {
    var name = "Diego"
    var birth = "22/02/2020"
    return {name, birth}
}

let myTest = TestFunction()

console.log({myTest})

