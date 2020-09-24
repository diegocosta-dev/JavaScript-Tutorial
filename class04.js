// class 04 - primitive types
let name = "Diego Costa" // sting literal
let age = 25 // number literal
let itOk = true // fals and true
let fullName = undefined // undefined
let color = null // empt


// convert string to number

let string = '50.5' // string

let numberInt = Number.parseInt(string) // converted to INT
let numberFloat = Number.parseFloat(string) // converted to Float
let number = Number(string) // Dynamic convert int or float

console.log(numberInt)


// number to string

let string2 = numberInt.toString() // or S  tring(string2)
console.log(string2)

// format number

console.log(numberFloat.toFixed(2))

console.log(numberFloat.toFixed(2).replace('.', ','))

console.log(numberFloat.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
