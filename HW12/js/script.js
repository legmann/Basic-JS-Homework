'use strict'

const btn = document.querySelectorAll('.btn');
let currentElem = null;
document.addEventListener('keydown', (event) => {
  btn.forEach(element => {
    if (event.key.toUpperCase() === element.innerText || event.key === element.innerText) {
      if (currentElem) {
        currentElem.style.backgroundColor = 'black';
      }
      currentElem = element;
      currentElem.style.backgroundColor = 'blue';
    }
  })
});