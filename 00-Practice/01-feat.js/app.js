const buttonElem = document.getElementById('button')

buttonElem.addEventListener('click', handleSwitch)

function handleSwitch () {
  const oldText = buttonElem.innerText
  return button.innerText = oldText === 'ON' ? 'OFF' : 'ON'
}