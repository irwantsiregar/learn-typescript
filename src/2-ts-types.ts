/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// type inference(Implicit)
// let ti = 'hello';
// ti = 123

// type annotation(Explicit)
// let ta: string = 'hello ts';
// ta = [1,2,3];

/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a; // undefined
let b: boolean;
b = true; // boolean

let c: number;
c = 1; // number

let d: string;
d = 'hello'; // string

let e: bigint;
e = 100n; // big int (starting ES2020)

let f: symbol;
f = Symbol('Sym'); // symbol  (starting ES2015)

let g: () => void;
g = function () {
    // function
    return null;
};

let h: null;
h = null; // null ( special primitive )

let i: Record<string, unknown>;
i = {}; // Object Literal

let j: [];
j = []; // array

class Product {
    // class
    //...
}
let k = new Product(); // object

// Biasanya digunakan untuk case tertentu. Ketika developer belum yakin untuk menetapkan pilihan type data pada suatu variabel.
let z: any;
z = 123;
z = 'hello';
z = [1, 2, 3];

// #With dynamic type comes great responsiblity
// type Number utk me-return value OR Void jika tidak ingin me-return value.
function sum(a: number, b: number): number {
    // Validasi (required) (avoid/menghindari bugs)
    return a + b;
}
// let result = sum(2, "4"); // 24
let result = sum(2, 5);
console.log(result); // Nan (Not a Number)
// Type data dinamis itu fleksibel tetapi membutuhkan responsibilitas lebih dari Developer.

//  Union
let multi: string | number; // Hanya bisa menerima value dari salah satu tipe yang didefenisikan
multi = 'hello';
multi = 123;
// multi = true;

// type Aliases
type CustomType = string | number; // Hanya bisa menerima value dari salah satu tipe yang didefenisikan. Biasanya sering digunakan pada Function dan Class
let myType: CustomType;
myType = 'hello';
myType = 123;
