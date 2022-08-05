'use strict'

function out(array, parent = document.body) {

  let item = array.map((item) => `<li>${item}</li>`);
  let li = '';

  for (let i = 0; i < item.length; i++) {
    li += item[i];
  }

  let ul = `<ul>${li}</ul>`;

  if (parent !== document.body) {
    let createParent = document.createElement(parent);
    document.body.append(createParent);
    createParent.innerHTML = ul;
  } else {
    document.body.innerHTML = ul;
  }

}

out(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], 'div');

