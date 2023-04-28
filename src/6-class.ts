/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
// Object Literal vs Object Instance

// implement Abstraction
abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    //  properties
    id: number;
    firstName: string;
    lastName: string;
    protected save: boolean;
    private token: string;
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;

    constructor(id: number, firsName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firsName;
        this.lastName = lastName;
        this.save = false;
        this.token = '';
        this.done = false;
    }

    // method
    login(username: string, password: string) {
        this.retryLogin += 1;
        if (username == 'admin' && password == 'admin') {
            return true;
        }

        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attempted';
        }

        return false;
    }

    // register() {}
}

User.MAX_FAILED_LOGIN = 4;
let myUser = new User(1, 'John', 'Dodo');
console.log(myUser.login('', '')); // false
console.log(myUser.login('', '')); // false
console.log(myUser.login('', '')); // false
console.log(myUser.login('', '')); // "max login attempted"

// implement inheritance
class Enhancement extends User {
    location: string;
    constructor(location: string, id: number, firsName: string, lastName: string) {
        super(id, firsName, lastName);
        this.location = location;
        this.save;
    }
}

let myNewUser = new Enhancement('medan', 2, 'Ucok', 'Cool');
