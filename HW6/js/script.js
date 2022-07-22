function createNewUser() {
  const firstName = prompt("Please enter your firstName");
  const lastName = prompt("Please enter your lastName");
  const birthday = prompt("Please enter your birthday", 'dd.mm.yyyy');

  const newUser = Object.create(
    {
      getLogin() {
        return (this.firstName.charAt(0) + this.lastName).toLowerCase();
      },

      getAge() {
        const userBirthArr = this.birthday.split('.');
        const userBirthD = +userBirthArr[0];
        const userBirthM = +userBirthArr[1];
        const userBirthY = +userBirthArr[2];
        const currentdate = new Date();
        const fullDay = currentdate.getDate();
        const fullMonth = (currentdate.getMonth() + 1);
        const fullYear = currentdate.getFullYear();

        let floatYear = -1;

        if (fullMonth > userBirthM) {
          floatYear = 0;
        }
        else if (userBirthM === fullMonth) {
          if (fullDay >= userBirthD) {
            floatYear = 0;
          }
        }
        return fullYear - userBirthY + floatYear;
      },

      getPassword() {
        const userBirthArr = this.birthday.split('.');
        const userBirthY = +userBirthArr[2];
        return (this.lastName.charAt(0).toUpperCase() + this.firstName.toLowerCase() + userBirthY);
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
        configurable: true
      },

      lastName: {
        value: lastName,
        writable: false,
        configurable: true
      },
      birthday: {
        value: birthday
      }
    }
  );

  return newUser;
}

const user = createNewUser();
console.log(user);
console.log(user.getAge());
console.log(user.getPassword());