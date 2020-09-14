// constructor functions

function CellPhone(mark, screen, battery) {
    this.mark = mark,
    this.screen = screen,
    this.battery = battery,
    this.call = () => {
        console.log(`Calling ${phoneNumber}`)
    }
}

const cellphone1 = new CellPhone("Asus", 8.5, 5000)
console.log(cellphone1)

function People(name, yearsold, height, weight, haircolor) {
    this.name = name
    this.yearsold = yearsold
    this.height = height
    this.weight = weight
    this.haircolor = haircolor
    this.info = () => {
        return console.log(`My name is ${this.name} I've ${this.yearsold} years old!`)
    }
}


const people1 = new People('Diego', 28, 1.75, 90, 'black')
console.log(people1)
people1.info()