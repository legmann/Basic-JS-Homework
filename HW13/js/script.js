'use strict'

const imgCollection = document.querySelectorAll('.image-to-show');
const stopBtn = document.querySelector('#stop-btn');
const continueBtn = document.querySelector('#continue-btn');
let timerId = null;
let currentIndex = 0;
continueBtn.disabled = true;

function slider(interval) {
  timerId = setTimeout(() => {

    imgCollection[currentIndex].classList.add('hidden');
    currentIndex = currentIndex >= imgCollection.length - 1 ? 0 : ++currentIndex;
    imgCollection[currentIndex].classList.remove('hidden');
    slider(interval);

  }, interval);

}

slider(1000);

stopBtn.addEventListener('click', () => {
  clearTimeout(timerId);
  continueBtn.disabled = false;
  stopBtn.disabled = true;
});

continueBtn.addEventListener('click', () => {
  slider(3000);
  continueBtn.disabled = true;
  stopBtn.disabled = false;
});