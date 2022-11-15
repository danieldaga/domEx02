const nameValue = document.querySelector('.inputValue')
const materialValue = document.querySelector('#materialValue')
const smallDimensionValue = document.querySelector('#diminuta')
const mediumDimensionValue = document.querySelector('#mediana')
const largeDimensionValue = document.querySelector('#grande')
const comentsValue = document.querySelector('#coments')
const sendFormBtn = document.querySelector('#sendForm')
const returnText = document.querySelector('.returnText')
console.log(nameValue.value);
sendFormBtn.onclick = () => {
    returnText.textContent = `${nameValue.value} ha pedido una caja de ${materialValue.value} con unas dimensiones ${comentsValue.value}  `
}