// for in

const name = "Diego"

for (index in name) {
    console.log(`${name[index]} letra na posição ${index}`)
}

let array = [5,'d',true,1.3, undefined]

for (key in array) {
    console.log(`${typeof array[key]}`)
}

const people = {
    name: "Diego",
    age: 16,
    height: 1.86
}

for (key in people) {
    console.log(`${key} ${people[key]}`)
}

// for of

let colors = ['red', 'green', 'blue', 'purple', 'margenta', 'white']; 

for (let color of colors) {
    console.log(color)
}


for (let letter of name) {
    console.log(letter)
}

