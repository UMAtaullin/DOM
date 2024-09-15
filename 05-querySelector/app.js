// Поиск произвольного элемента
// выбрать все теги <li>, но только у маркированного списка
let list = document.querySelectorAll("ul > li")
for (let val of list)
  console.log(val)