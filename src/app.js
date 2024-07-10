"use strict"

class User {
  #login;
  #_password;
  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  };

  set #password(pass) {
    this.#_password = pass.split("").reverse().join("");
  }

  get #password() {
    this.#_password = pass.split("").reverse().join("");
  }
  

  get loginUser() {
    return this.#login;
  };

  checkPassword(checkingPassword) {
    return checkingPassword === this.password
  }

  changePassword(oldPassword, newPassword) {
    if (!this.checkPassword(oldPassword)){
      return false
    }
    else {
      this.#password = newPassword
      return true;
    }
  }
}

const user1 = new User('user', "123");

console.log(user1.loginUser); 
user1.changePassword(1235, 3210)
console.log(user1);
user1.checkPassword = 1234;
