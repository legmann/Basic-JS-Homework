'use strict'

const eyeIcon = document.querySelectorAll('.icon-password');
const inputs = document.querySelectorAll('.input-text');
const btn = document.querySelector('.btn');

eyeIcon.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const icon = event.target;
    icon.classList.toggle('fa-eye-slash');
    icon.classList.toggle('fa-eye');

    const input = icon.closest('.input-wrapper').querySelector('.input-text');

    if (icon.classList.contains('fa-eye-slash')) {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  });
});

const errorMsg = document.createElement('span');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!inputs[0].value && !inputs[1].value) {
    alert('Заповніть будь-ласка поля!')
  }

  else if (inputs[0].value === inputs[1].value) {
    errorMsg.remove();
    alert('You are welcome')

  }

  else {
    errorMsg.style.color = 'red';
    errorMsg.innerHTML = 'Потрібно ввести однакові значення';
    btn.insertAdjacentElement('beforebegin', errorMsg);

  }
});