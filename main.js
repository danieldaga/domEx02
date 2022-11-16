const nameValue = document.querySelector('.inputValue')
const materialValue = document.querySelector('#materialValue')
const sizeBoxValue = document.querySelector('#size')
const comentsValue = document.querySelector('#coments')
const sendFormBtn = document.querySelector('#sendForm')
const returnText = document.querySelector('.returnText')

console.log(nameValue.value);
sendFormBtn.onclick = () => {
    returnText.textContent = `${nameValue.value} ha pedido una caja de ${materialValue.value} con unas dimensiones ${sizeBoxValue.value}s. ${comentsValue.value}  `
}