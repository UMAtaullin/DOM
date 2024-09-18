/* Функция Javascript handleText заполняет поле ввода словами Hello World. 
Но кода для выполнения этой функции нет.
Заполните существующий код ниже таким образом, чтобы функция вызывалась при нажатии кнопки. Проверьте, нажав на кнопку.*/

const button = document.getElementById('button')
const input = document.getElementById('input')

const handleClick = () => {
  input.value = 'Hello World'
}

button.addEventListener('click', handleClick)