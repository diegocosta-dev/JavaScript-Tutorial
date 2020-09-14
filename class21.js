// Create a function that return the sum of all multiple of 3 and 5
// example

// multiples of 3 in 10 - 3, 6, 9
// multiples of 5 in 10 - 5, 10

function sum(number){
    multipleBy3 = 0
    multipleBy5 = 0
    
    for (let i = 1; i < number + 1; i++){

        if (i % 3 === 0) {
            multipleBy3 += i
        }

        if (i % 5 === 0) {
            multipleBy5 += i
        }

        
    }
    console.log(multipleBy5 + multipleBy3)
}

sum(10)


const array = [12, 18, 33, 5, 8, 9, 99, 203, 95, 2]

function sum2(array) {
    return array.forEach(function (element) {
        if (element % 2 === 0) console.log(element)
    })
}

sum2(array)