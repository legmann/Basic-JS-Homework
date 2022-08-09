'use strict'

const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', event => {

  document.querySelector('.active').classList.remove('active');
  event.target.classList.add('active');

  const dataNameAtr = event.target.dataset.name;
  document.querySelector('.visible-text').classList.remove('visible-text');

  document.querySelector(`.hide-text[data-name='${dataNameAtr}']`).classList.add('visible-text');


});