"use strict";

let num1 = prompt('Enter num1');
let num2 = prompt('Enter num2');

while (!num1 || isNaN(num1) || !num2 || isNaN(num2)) {
  num1 = prompt('Try again, Please enter the num1', num1);
  num2 = prompt('Try again, Please enter the num2', num2);
}

let mathOp = prompt('Enter operation + - * /');


num1 = Number(num1);
num2 = Number(num2);

function calc(num1, num2, mathOp) {
  let result;
  switch (mathOp) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert('Error, use only +, -, *, / operation');
  }

  return result;
}

console.log(calc(num1, num2, mathOp));
console.log(calc(3, 3, '+'));
