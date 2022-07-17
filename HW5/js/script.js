function createNewUser() {

  let firstName = prompt('Please enter your firstName');
  let lastName = prompt('Please enter your lastName');


  const newUser = Object.create(
    {
      getLogin() {
        let newLogin = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        return newLogin;
      }

    },
    {
      firstName: {
        value: firstName,
        enumerable: false,
        writable: false,
        configurable: false
      },

      lastName: {
        value: lastName,
        enumerable: false,
        writable: false,
        configurable: false
      }
    }
  )

  return newUser;
}

let newUser = new createNewUser();
console.log(newUser.getLogin());
