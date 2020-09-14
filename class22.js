// create a function to show prime numbers
// // 1 e por ele msm


function showNunbersPrime(range) {
    for (let number = 2; number <= range; number++) {
       
        if (numberPrime(number)) console.log(number)     
    }
}

function numberxrime(number) {

        for (let divisible = 2; divisible < number; divisible++) {
            if (number % divisible === 0) return false
        }

        return true
}

showNunbersPrime(15)
