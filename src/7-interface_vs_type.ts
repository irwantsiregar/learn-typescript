/* eslint-disable */

export {}; // quick fix for global variable

/* 
    Interface: Umumnya digunakan untuk Class dan Objek.
    Type: Digunakan ketika bekerja dengan Function.
*/

/**
 * Object
 */

// User ->   name, age

interface User {
    name: string;
    age: number;
}

type TUser = {
    name: string;
    age: number;
};

/**
 * Merge
 *  Pada interface, apabila terdapat dua atau lenih interface yang sama maka seluruh properti akan otomatis digabungkan (merger).
 *
 *  Berbeda dengan Type, untuk propertinya tidak dapat digabungkan (merger) layaknya seperti Interface.
 */

interface Song {
    songName: string;
}

interface Song {
    artistName: string;
}

const artistName: Song = {
    artistName: 'Beautiful day',
    songName: 'Maroon',
};

/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
};

type typeB = {
    id: number;
    propB: string;
};

// Intersection
type IntersectionAB = typeA & typeB;

// Union
type UnionAB = typeA | typeB;

// Intersection diwajibkan (required) menggunakan seluruh properti yang telah didefenisikan pada typeA dan typeB, kecuali jika terdapat properti yg optional didalam type.
let myDataA: IntersectionAB = {
    id: 1,
    propA: 'testA',
    propB: 'testB',
};

// Union tidak diwajibkan (not required) menggunakan seluruh properti yang telah didefenisikan pada typeA dan typeB.
let myDataB: UnionAB = {
    id: 1,
    propA: 'testA',
    propB: 'testB',
};

/**
 * Implements
 */
// interface Person merupakan blueprint dari class People. Untuk membuat blueprint dapat menggunakan Interface ataupun Type.

interface Person {
    name: string;
    age: number;
    getName(id: number): string;
}

class People implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(id: number) {
        return 'yess';
    }
}

/**
 * Extend
 */
// Extends pada Interface merupakan perilaku pewarisan (inheritance) seluruh properties terhadap Interface lainnya, sama seperti inheritance pada sebuah Class.

interface Address {
    street: string;
}

interface PersonEx extends Address {
    name: string;
    age: number;
    getName(id: number): string;
}

class PeopleEx implements PersonEx {
    name: string;
    age: number;
    street: string;
    constructor(name: string, age: number, street: string) {
        this.name = name;
        this.age = age;
        this.street = street;
    }

    getName(id: number) {
        return 'yess';
    }
}

/* 
NB:
Pada prakteknya, Interface dan Type sering digunakan secara bersamaan(colaboration) atau salah 1 nya. Tidak ada yang lebih baik dan tidak ada yg lebih buruk.
*/
