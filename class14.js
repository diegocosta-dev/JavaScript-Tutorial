// for loop

// in Javascript we have 5 types of loops

// 1-for-loop // 2-while // 3-do..while // 4-for-in // 5-for-of

for (let i = 1; i <= 5; i++) {
    if (i % 2 != 0) {
        console.log(i)
    };
};


for (let i = 5; i > 0; i--) {
    console.log(i)
}

// Given a number, return a string with dash'-'marks 
// before and after each odd integer, but do not begin 
// or end the string with a dash mark.
// if value is NaN return "NaN"

// input = 1366332

// output = 1-3-66-3-3-2

function dashatize(num) {

    if (isNaN(num)) {
        return "NaN"
    }

    let number = `${num}`
    let string = ""

    for (let i = 0; i < number.length; i += 1) {
        const numberInt = parseInt(number[i], 10)

        string += numberInt % 2 === 0 ?  number[i] : `-${number[i]}-`
    }

    return string.replace(/^-{1,}|-$/g, '').replace(/--/g, "-")
}

console.log(dashatize(-28369));