// BOM(объектная модель браузера) - дополнительные объекты предоставляемые браузером чтобы работать со всем кроме документа

// Например с помощью navigator получать данные о браузере и ОС 
console.log(navigator.userAgent);

// Текущий адрес страницы
console.log(location.href);

// Перенаправить пользователя
location.href = 'https://fls.guru';

// Объект history позволяет управлять историей браузера и передвигаться по посещенным страницам
history.back()
history.forward();

/*Существуют еще полезные методы для взаимодействия с пользователем, которые тоже часть BOM:
-alert
-confirm
-prompt
Все эти три объекта выводят диалоговые окна в наш браузер: */

// Простое окно с текстом
alert('hi')

// Уже две кнопки Ok либо Cancel
const confirmResult = confirm('Хочешь верстать?');
console.log(confirmResult)

// Отмена - null, ничего - пустая строка
const promptResult = prompt('Who are you in life?')
console.log(promptResult)
