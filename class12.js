// if and else

// if the time of day is in 06:00 at 12:00: we say good morning
// if the time of dat is 12:00 at 18:00: we sey good afternoon
// else we sey good night

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()

hours = 6
minutes = 0

console.log(`0${hours}`.slice(-2) + ":" + `0${minutes}`.slice(-2)+ ":" + `0${seconds}`.slice(-2))

if ( hours >= 6 && hours <= 12) {
    let day = hours >= 12 && minutes > 0 ? "good afternoon" : "good morning"
    console.log(day)

} else if (hours >= 12 && hours <= 18){
    let day = hours >= 18 && minutes > 0 ? "good nigth" : "good afternoon"
    console.log(day)

} else {
    console.log('good night')
}
