function createNewUser() {
  let firstName = prompt("Please enter your firstName");
  let lastName = prompt("Please enter your lastName");

  const newUser = Object.create(
    {
      getLogin() {
        return (this.firstName.charAt(0) + this.lastName).toLowerCase();
      },
      setFirstName(name) {
        Object.defineProperty(this, "firstName", { writable: true });
        this.firstName = name;
        Object.defineProperty(this, "firstName", { writable: false });
      },
      setLastName(name) {
        Object.defineProperty(this, "lastName", { writable: true });
        this.lastName = name;
        Object.defineProperty(this, "lastName", { writable: false });
      },
    },
    {
      firstName: {
        value: firstName,
        writable: false,
        configurable: true,
      },

      lastName: {
        value: lastName,
        writable: false,
        configurable: true,
      },
    }
  );

  return newUser;
}

const user = createNewUser();

console.log(user.getLogin());
