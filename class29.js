
function gerar() {
    const numero = document.querySelector('.numero > input')
    let tabela = document.getElementById('tab')

    tabela.innerHTML = ""

    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option')
        option.innerHTML = `${i} x ${numero.value} = ${numero.value * i}&nbsp;&nbsp;&nbsp;`
        tabela.appendChild(option)
    }
}
