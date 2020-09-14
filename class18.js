// fizzbuzz

// divisible by 3 return fizz
// divisible by 5 return buzz
// divisible by 3 and 5 return fizzbuzz
// not divisible by 3 or 5 return input
// not is a nunber return "NaN"

function fizzbuzz(input) {

    const divisibleBy5 = input % 5 === 0
    const divisibleBy3And5 = input % 3 === 0 && input % 5 === 0
    const notDivisible = input % 3 !== 0 && input % 5 !== 0
    const NotANumber = input !== Number(input)

    if (NotANumber) {
        return "NaN"
    }

    if (notDivisible) {
        return input
    }
    
    if (divisibleBy3And5) {
        return "FizzBuzz"
    }

    if (divisibleBy5) {
        return "Buzz"
    } 
    else return "Fizz"
}

console.log(fizzbuzz(5))