"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artistName = {
    artistName: 'Beautiful day',
    songName: 'Maroon',
};
let myDataA = {
    id: 1,
    propA: 'testA',
    propB: 'testB',
};
let myDataB = {
    id: 1,
    propA: 'testA',
    propB: 'testB',
};
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName(id) {
        return 'yess';
    }
}
class PeopleEx {
    constructor(name, age, street) {
        this.name = name;
        this.age = age;
        this.street = street;
    }
    getName(id) {
        return 'yess';
    }
}
