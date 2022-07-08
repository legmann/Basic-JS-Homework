let userName = "";
userName = prompt('Enter your name');
while (!userName) {
  alert('Name is invalid. Try again');
  userName = prompt('Please enter your name again', userName);
}

let userAge = null;
userAge = +prompt('Enter your age');
while (!userAge || isNaN(userAge)) {
  alert('Age is invalid. Try again');
  userAge = +prompt('Please enter your age again', userAge);
}

if (userAge < 18) {
  alert('You are not allowed to visit this website');
} 
else if (userAge > 22) {
  alert('Welcome, ' + userName);
}

else if (userAge >= 18 || userAge == 22) {
  let userAnswer = confirm('Are you sure you want to continue?');
  if (userAnswer == true) {
    alert('Welcome, ' + userName);
  } else {
    alert('You are not allowed to visit this website');
  }
}