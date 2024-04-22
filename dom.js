// Самые верхние элементы дерева доступны как свойства объекта document
// const htmlEl = document.documentElement;
// const headEl = document.head;
const bodyEl = document.body;
// console.log(htmlEl)
// console.log(headEl)
// console.log(bodyEl)

// const firstChildNode = bodyEl.firstChild
// const lastChildNode = bodyEl.lastChild
// console.log(firstChildNode)
// console.log(lastChildNode)

// Коллекция childNodes содержит список всех детей, включая текстовые узлы.
const childNodes = bodyEl.childNodes;
console.log(childNodes)

// Для проверки наличия дочерних узлов существует специальная функция hasChildNodes()
console.log(bodyEl.hasChildNodes())

// Перебор коллекции
for (let node of childNodes) {
  console.log(node); // покажет все узлы коллекции
}
