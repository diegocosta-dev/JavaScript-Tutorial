// Comparation not boolean

// falsy == / undefined - null - 0 - false - "" - NaN

console.log(undefined || undefined)
console.log(undefined || null)
console.log(false || undefined)
console.log(false || NaN)

// trufhy = all other values - 

console.log(1 && 0)
console.log(0 || 1)
console.log(!0 || 0)

let customColor = ""
let defaltColor = "blue"
let feedColor = customColor || defaltColor

console.log(feedColor)
