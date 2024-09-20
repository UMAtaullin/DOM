/* 
В этом сценарии мы хотим, чтобы цвет круга менялся в зависимости от типа перемещения курсора. Используйте функцию toggleColor, чтобы сделать круг оранжевым, когда курсор перемещается на него. Повторно используйте ту же функцию, чтобы сделать его черным, когда курсор покидает его.
Сложность заключается в том, что вам нужно вызвать toggleColor с другими значениями параметра isEntering. Убедитесь, что ваш код работает, наведя курсор мыши на кружок и снова оставив его. */

const element = document.querySelector('#element')

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? 'orange' : 'black'
}

// type in your code here
element.addEventListener('mouseover', () => toggleColor(true))
element.addEventListener('mouseout', ()=> toggleColor(false))