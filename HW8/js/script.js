'use strict'

// 1. Знайти всі параграфи на сторінці та встановити колір фону #ff0000

let pTagList = document.getElementsByTagName('p');

for (let tag of pTagList) {
  tag.style.backgroundColor = '#ff0000';
}


// 2. Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

let optionsList = document.getElementById('optionsList');
console.log(optionsList);


let parent = optionsList.parentNode;
console.log(parent);


let children = optionsList.children;

for (let i = 0; i < children.length; i++) {
  console.log(`nodeName: ${children[i].nodeName}, nodeType: ${children[i].nodeType}`);
}


// 3. Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph

document.getElementById('testParagraph').textContent = 'This is a paragraph';


// 4. Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

let mainHeaderCh = document.querySelector('.main-header').children;
console.log(mainHeaderCh);

for (let i = 0; i < mainHeaderCh.length; i++) {
  mainHeaderCh[i].classList.add('nav-item');
}

console.log(mainHeaderCh);


// 5. Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.

let sectionTitle = document.querySelectorAll('.section-title');
console.log(sectionTitle);

for (let i = 0; i < sectionTitle.length; i++) {
  sectionTitle[i].classList.remove('section-title');
}

console.log(sectionTitle);






