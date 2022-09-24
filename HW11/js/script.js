'use strict'

const eyeIcon = document.querySelectorAll('.icon-password');
const form = document.querySelector('.password-form');
const btn = document.querySelector('.btn');


form.addEventListener('click', (event) => {

  if (!event.target.classList.contains('fas')) {
    return;
  }

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

const errorMsg = document.createElement('span');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = event.currentTarget.querySelectorAll('.input-text');

  if (!inputs[0].value && !inputs[1].value) {
    alert('Заповніть будь-ласка поля!')
  }

  else if (inputs[0].value === inputs[1].value) {
    errorMsg.remove();
    alert('You are welcome');
  }

  else {
    errorMsg.style.color = 'red';
    errorMsg.innerHTML = 'Потрібно ввести однакові значення';
    btn.insertAdjacentElement('beforebegin', errorMsg);

  }
});