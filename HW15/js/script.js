'use strict'

let userNum = prompt('Enter your number');
while (isNaN(userNum) || !userNum || userNum < 0) {
  userNum = prompt('Error. Please enter your number', userNum);
}
const n = +userNum;


function factorial(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  }
  else {
    return 1;
  }
}

alert(`Factorial of number ${userNum} is ${factorial(userNum)}`);