// fizzbuzz

// divisivel por 3 return fizz
// divisivel por 5  return buzz
// divisivel por 3 e por 5 return fizzbuzz
// não é divisivel por 3 ou 5 return entrada
// Não é um número return "não é um numero"

function fizzbuzz(entrada) {
    const condtionOne = entrada % 3 === 0
    const conditionTwo = entrada % 3 === 0 && entrada % 5 === 0

    // da pra verificar assim também -- typeof entrada !== 'number'
    if (entrada !== Number(entrada)) {
        return "Não é um número"
    }

    if (entrada % 3 !== 0 && entrada % 5 !== 0) {
        return entrada
    }
    
    if (conditionTwo) {
        return "FizzBuzz"
    }

    if (condtionOne) {
        return "Fizz"
    } 
    else return "Buzz"
}

console.log(fizzbuzz(6))