"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
console.log(add(4, 5));
const addEx = function (x, y, z) {
    return x + y;
};
console.log(addEx(5, 8));
const addArrow = (x, y) => x + y;
console.log(addArrow(2, 3));
const hello = (name) => console.log('hello ' + name);
console.log(hello('Irwan'));
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('https://typescriptlang.org', fn);
function submitContact(firstName, lastName, languange = 'english', gender) {
    return {
        firstName,
        lastName,
        languange,
        ...(gender && { gender }),
    };
}
let result = submitContact('valen', 'mayer', 'english');
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);
function CT(param) {
    return param;
}
function CT_generic(param) {
    return param;
}
CT_generic('Hello');
CT_generic(123);
function CT_Overload(param) {
    return param;
}
CT_Overload('Hello');
CT_Overload(123);
