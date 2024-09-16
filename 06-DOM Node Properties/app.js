// Поиск произвольного элемента
// выбрать все теги <li>, но только у маркированного списка
let list = document.querySelectorAll("ul > li")
for (let val of list)
  console.log(val)

let h1 = document.body.firstChild.nextSibling
h1.innerHTML = "Измененный заголовок"
console.log(h1.innerHTML)