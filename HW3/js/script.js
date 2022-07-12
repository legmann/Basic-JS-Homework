'use strict'
let userNum = null;
userNum = Number(prompt("Please enter your number"));
while (!userNum || isNaN(userNum)) {
  alert('Invalid. Please enter number');
  userNum = prompt("Please enter your number");
}

for (let i = 0; i <= userNum; i++) {

  if (i % 5 === 0 && i !== 0) {
    console.log(i);
  }

  if (userNum <= 4) {
    console.log('Sorry, no numbers');
    break
  }

}