// Colone Objects 

const people = {
    name : 'Diego',
    suname : 'Costa',
}

// with Object.assign()

const newObject = Object.assign({
    yearsold : 28
}, people)

console.log(newObject)

// or using spread

const object2 = {
    ...people,
    fullname : `${people.name} ${people.suname}`
}

console.log(object2)