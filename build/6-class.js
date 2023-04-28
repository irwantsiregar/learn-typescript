"use strict";
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firsName, lastName) {
            super();
            this.retryLogin = 0;
            this.id = id;
            this.firstName = firsName;
            this.lastName = lastName;
            this.save = false;
            this.token = '';
            this.done = false;
        }
        login(username, password) {
            this.retryLogin += 1;
            if (username == 'admin' && password == 'admin') {
                return true;
            }
            if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
                return 'max login attempted';
            }
            return false;
        }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
User.MAX_FAILED_LOGIN = 4;
let myUser = new User(1, 'John', 'Dodo');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
class Enhancement extends User {
    constructor(location, id, firsName, lastName) {
        super(id, firsName, lastName);
        this.location = location;
        this.save;
    }
}
let myNewUser = new Enhancement('medan', 2, 'Ucok', 'Cool');
