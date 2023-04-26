/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;                  // undefined
console.log(typeof(a));

let b = true;           // boolean
console.log(typeof(b));

let c = 1;              // number
console.log(typeof(c));

let d = "hello";        // string
console.log(typeof(d));

let e = 100n;           // big int (starting ES2020)
console.log(typeof(e));

let f = Symbol("Sym");  // symbol  (starting ES2015)
console.log(typeof(f));

let g = function () {   // function
  return null;
};
console.log(typeof(g));

let h = null;           // null ( special primitive )
console.log(typeof(h)); // result -> object : bugs sejak dari generasi JavaScript 1. Tidak diperbaiki karena akan mengubah basis kode dari JS itu sendiri.

let i = {};             // Object Literal
console.log(typeof(i));

let j = [];             // array
console.log(typeof(j)); // result -> object : Di JavaScript type Array itu dianggp object, itu sebabnya Array memiliki method seperti .map(), .push(), .pop(), dll

class Product {
  // class
  //...
}
console.log(typeof(Product)); // result -> function : Dibelakang layar itu dibuat dengan function, karena di JavaScript sebenarnya tidak ada class.

let k = new Product();
console.log(typeof(k));

/********** Why is it call dynamic type / weekly typed ? ***********/

// ✅1. No Declaration. Type automatically set based on value at runtime
// ✅2. Re-Assign
// Karena JavaScript itu dinamis, sehingga bisa melakukan re-assign terhadap variabel.
let number = 1;
number = "hello";
number = [1,2,3];
console.log(typeof number);

// ✅3. with dynamic type comes great responsiblity
function sum(a, b) {
  // Validasi (required) (avoid bugs)
  return a + b;
}
// let result = sum(2, "4"); // 24
let result = sum(2);
console.log(result) // Nan (Not a Number)
// Type data dinamis itu fleksibel tetapi membutuhkan responsibilitas lebih dari Developer.