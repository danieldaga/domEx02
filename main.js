const nameValue = document.querySelector('.inputValue')
const materialValue = document.querySelector('#materialValue')
const sizeBoxValue = document.querySelectorAll('#size')
const comentsValue = document.querySelector('#coments')
const sendFormBtn = document.querySelector('#sendForm')
const returnText = document.querySelector('.returnText')


sendFormBtn.onclick = () => {
    
    let sizeBoxValueResult = ''
    sizeBoxValue.forEach(element => {
        if (element.checked) {
            sizeBoxValueResult += element.value
        }
    });
    returnText.textContent = `${nameValue.value} ha pedido una caja de ${materialValue.value} con unas dimensiones ${sizeBoxValueResult}s. ${comentsValue.value}  `
}






////////////////////


const evaluateBtn = document.querySelector('.evaluate-btn')
const inputText = document.querySelector('.input-text')
const resultGame = document.querySelector('.result')

evaluateBtn.onclick = () => {
    if (inputText.value === '1') {
        resultGame.textContent = 'El jugador ha perdido'
    } else if (inputText.value === '2') {
        resultGame.textContent = 'El jugador ha perdido'
    } else if (inputText.value === '3') {
        resultGame.textContent = 'El jugador ha Ganado'
    }else{
        resultGame.textContent = 'Vuelve a probar suerte'

    }
}