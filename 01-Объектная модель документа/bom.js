// BOM(объектная модель браузера) - дополнительные объекты предоставляемые браузером чтобы работать со всем кроме документа

// Простое окно с текстом
alert('hi')

// Уже две кнопки Ok либо Cancel
const confirmResult = confirm('Хочешь верстать?');
console.log(confirmResult)

// Отмена - null, ничего - пустая строка
const promptResult = prompt('Who are you in life?')
console.log(promptResult)
