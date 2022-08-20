"use strict"

function swapStyleSheet(sheet) {
  document.getElementById("stylesheet").setAttribute("href", sheet);
}
let switchThemeButton = document.getElementById("switch-theme-button");

function initate() {

  if (localStorage.getItem('darkMode')) {
    swapStyleSheet("./css/dark_mode.css");
    switchThemeButton.innerText = 'White mode';
  }


  switchThemeButton.addEventListener('click', () => {
    const cssUrl = document.querySelector("#stylesheet").getAttribute("href");
    if (cssUrl === './css/style.css') {
      swapStyleSheet("./css/dark_mode.css");
      switchThemeButton.innerText = 'White mode';
      localStorage.setItem('darkMode', true);

    } else {
      swapStyleSheet("./css/style.css");
      switchThemeButton.innerText = 'Dark mode';
      localStorage.removeItem('darkMode');

    };

  });
}

window.onload = initate;