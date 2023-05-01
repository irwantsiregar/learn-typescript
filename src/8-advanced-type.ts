/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

/**
 * Partial<T> : Menjadikan seluruh properties pada Interface tersebut opsional atau tidak wajib untuk digunakan (diisi nilai).
 * Required<T> : Menjadikan seluruh properties pada Interface tersebut diwajibkan untuk digunakan (diisi nilai).
 * Readonly => Readonly<T> : Menjadikan seluruh properties pada Interface tersebut hanya dapat dibaca alias tidak dapat mengubah nilai yg telah didefenisikan sebelumnya.
 * Pick<T, K> : Menjadikan properties pada Interface hanya dapat digunakan sebagian atau beberapa saja sesuai dengan yg diperlukan.
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: User) {}
// function CreateUser(data: Partial<User>) {}
// function CreateUser(data: Required<User>) {}
// function CreateUser(data: Readonly<User>) {data.id = 2;}
// function CreateUser(data: Pick<User, 'id' | 'name'>) {}

// CreateUser({
//     id: 1,
//     name: 'doe',
//     age: 20,
//     createdAt: new Date(),
// });

/**
 * Record  => Record<K,T>
 */

// type Users = Record
type Response = Record<string, string | number>;

const message: Response = {
    id: '1',
    name: 'doe',
    address: '',
    age: '10',
};

// Menggunakan properties dari interface User
type Users = Record<string, User>;
const allUsers: Users = {
    '1': { id: 1, name: 'john', createdAt: new Date(), age: 20 },
    '2': { id: 1, name: 'doe', createdAt: new Date(), age: 20 },
};

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

/**
 * T= type, U=union
 * Extract <T, U> : Mencari setiap properties yang sama berdasarkan properties yang didefenisikan pada Extract.
 * Exclude<T, U> : Mengambil setiap properties yang tidak sama berdasarkan properties yang didefenisikan pada Exclude.
 */

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

// type ExtType = Extract<'id' | 'name', 'id' | 'title'>
// type a = keyof User;

type ExtType = Extract<keyof User, keyof Post>;
type ExcType = Exclude<keyof User, keyof Post>;
type MyNewType = Record<string, ExtType>;
