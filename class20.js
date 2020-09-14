// create a funcation that read a object and return all strings

const movie = {
    title: 'Avangers',
    year: 2000,
    director: 'Robin',
    character: 'Thor'
}

function showAllStrings(input) {
    for (key in input) {
        if (typeof input[key] === 'string') {
            console.log(input[key]) 
        }
    }
}   
showAllStrings(movie)
