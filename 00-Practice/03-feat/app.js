/* В этом сценарии мы ищем список элементов, собранных в одной переменной, а не только один элемент.
Присвойте элементам списка в представлении переменную "ListItems", используя соответствующий метод выбора.
Как только вы заполните приведенный ниже код, проверьте его, наведя курсор на элементы списка, пока все элементы не будут иметь значение "ВКЛЮЧЕНО". */

const listItems = document.querySelectorAll('#list li')

const handleHover = (event) => {
  return event.target.innerText = 'ON'
}

if (listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover))
}