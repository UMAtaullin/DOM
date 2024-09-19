/* Функция Javascript changeText изменяет текст внутри круга. 
Но, опять же, нет кода для выполнения этой функции.
Дополните существующий код ниже таким образом, чтобы функция вызывалась при наведении курсора на круг. Убедитесь, что ваш код работает, наведя курсор на круг. */

const element = document.getElementById('element')

const changeText = () => {
  element.innerText = 'Thanks!'
}

element.addEventListener('mouseover', changeText)