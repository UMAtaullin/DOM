// Самые верхние элементы дерева доступны как свойства объекта document
// const htmlEl = document.documentElement;
// const headEl = document.head;
const bodyEl = document.body
// console.log(htmlEl)
// console.log(headEl)
// console.log(bodyEl)

// Получить первые и последние узлы объекта
const firstChildNode = bodyEl.firstChild
const lastChildNode = bodyEl.lastChild
// console.log(firstChildNode)
// console.log(lastChildNode)

// Коллекция childNodes содержит список всех детей, включая текстовые узлы.
const childNodes = bodyEl.childNodes
// console.log(childNodes)

// Для проверки наличия дочерних узлов существует специальная функция hasChildNodes()
console.log(bodyEl.hasChildNodes())

/*
Как мы уже видели, childNodes похож на массив, но это не массив, а коллекция - особый перебираемы объект - псевдомассив.

Отличие от массива:
1. Для перебора можем использовать for..of
2. Методы массивов не будут работать, т.к. коллекция - это не массив
*/

// Перебор коллекции
for (let node of childNodes) {
  console.log(node) // покажет все узлы коллекции
}

// Если хотим использовать методы массива
let arr = Array.from(childNodes)
arr.forEach(el => console.log(el))

// 'Живые коллекции'
// Почти все DOM-коллекции живые. Они отражают текущее состояние DOM.

// Соседние и родительские узлы
const previousSiblingNode = bodyEl.previousSibling
const nextSiblingNode = bodyEl.nextSibling
const parentNode = bodyEl.parentNode

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyEl.children