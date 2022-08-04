'use strict'

function out(array, parent = document.body) {


  let item = array.map((item) => `<li>${item}</li>`);
  let li = '';

  for (let i = 0; i < item.length; i++) {
    li += item[i];
  }

  let ul = `<ul>${li}</ul>`;
  document.body.innerHTML = ul;

}

out(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"],);

