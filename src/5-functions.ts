/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(4, 5));
// NB: Untuk parameter dengan value opsional dapat menambah tanda "?" lalu diikuti type data. Ex: z?: number

// function expression
const addEx = function (x: number, y: number, z?: number): number {
     return x + y;
};
console.log(addEx(5, 8));

// arrow function
const addArrow = (x: number, y: number): number => x + y;
console.log(addArrow(2, 3));

// function with no return value
const hello = (name: string): void => console.log('hello ' + name);
console.log(hello('Irwan'));

// function with callback
type Greeter = (message: string) => void; // type union. void berfungsi sebagai implementasi cari callback, ex: console.log
function request(url: string, cb: Greeter) {
    cb(url);
}
let fn = (str: string) => console.log(str);
request('https://typescriptlang.org', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/
type Contract = {
    firstName: string;
    lastName: string;
    gender?: string;
    languange: string;
};

function submitContact(firstName: string, lastName: string, languange = 'english', gender?: string): Contract {
    return {
        firstName,
        lastName,
        languange,
        ...(gender && { gender }), // if true when return the value gender
    };
}

let result = submitContact('valen', 'mayer', 'english');
console.log(result); // { firstName: 'valen', lastName: 'mayer', languange: 'english' }

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: string[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any` 
*/
// solution 1 : union
function CT(param: string | number): string | number {
    return param;
}

// solution 2: generic
// type variabel -> deteksi type data dari caller
function CT_generic<T>(param: T): T {
    return param;
}

CT_generic<string>('Hello');
CT_generic<number>(123);

// solution 3: overloading
function CT_Overload(param: string): string;
function CT_Overload(param: number): number;
function CT_Overload(param: any): any {
    return param;
}

CT_Overload('Hello');
CT_Overload(123);
