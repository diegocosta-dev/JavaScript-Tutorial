// factory funcations 

function createCellPhone(mark, screen, battery) {
    return {
        mark,
        screen,
        battery,
        call(phoneNumber) {
            console.log(`Calling ${phoneNumber}`)
        }
    }
}

const asus = createCellPhone("Asus", {w:150,h: 75}, 5000)
const zenphone = createCellPhone("Zenphone", {w:150,h:80}, 7000)

console.log(asus.call('84 98880-8712'))
console.log(zenphone)