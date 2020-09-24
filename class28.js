const button = document.querySelector('#butao')
let inicio = document.querySelector('.inicio')
let fim = document.querySelector('.fim')
let passo = document.querySelector('.passo')
const paragraph = document.querySelector('.conta > p')
const div = document.querySelector('.num')

button.addEventListener('click', () => {
    div.innerHTML = ""

    if (Number(passo.value) == 0) {
        paragraph.innerHTML = 'Inposivel Contar'
    }
    else if (Number(inicio.value) > Number(fim.value)) {
        console.log('entou')
        for (i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value.replace('-',""))) {
            div.innerHTML += ` ${i} \u{1F603}`
        }
        div.innerHTML += ` \u{1F3F4}`
    }
    else {
        for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
            div.innerHTML += ` ${i} \u{1F603}`
        }
        div.innerHTML += ` \u{1F3F4}`
    }
})

