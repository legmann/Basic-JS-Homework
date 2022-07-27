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


let children = optionsList.childNodes;

for (let i = 0; i < children.length; i++) {
  console.log(`nodeName: ${children[i].nodeName}, nodeType: ${children[i].nodeType}`);
}








