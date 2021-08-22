
const calcular = document.getElementById('calcular')

function imc() {
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if (peso.value !== '' && altura.value !== '') {
        var valorIMC = (peso / (altura * altura)).toFixed(1)
        if (valorIMC < 18.5) {
            resultado.textContent = 'Seu IMC é' + ' ' + valorIMC + ' ' + 'ABAIXO DO PESO'
        } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
            resultado.textContent = 'Seu IMC é' + ' ' + valorIMC + ' ' + 'PESO NORMAL'
        } else if (valorIMC >= 25 && valorIMC < 29.9) {
            resultado.textContent = 'Seu IMC é' + ' ' + valorIMC + ' ' + 'SOBREPESO'
        } else if (valorIMC >= 30 && valorIMC < 34.9) {
            resultado.textContent = 'Seu IMC é' + ' ' + valorIMC + ' ' + 'OBESIDADE GRAU 1'
        } else if (valorIMC >= 35 && valorIMC < 39.9) {
            resultado.textContent = 'Seu IMC é' + ' ' + valorIMC + ' ' + 'OBESIDADE GRAU 2'
        } else if (valorIMC >= 40) {
            resultado.textContent = valorIMC + ' ' + 'OBESIDADE GRAU 3'
        }
    } else {
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click', imc)