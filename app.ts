//Basic Data Types
// Primitive types definations
// - A primitive type is a data type that is not an object and has no methods.
// - Primitive types are immutable, meaning their values cannot be changed once they are created.
// - number
// - string
// - boolean
// - null
// - undefined
// - symbol

// Reference types definations
// - A reference type is a data type that is an object and has methods.
// - Reference types are mutable, meaning their values can be changed after they are created.
// - object
// - array
// - function

// Arrays in TypeScript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["one", "two", "three"];
let booleans: boolean[] = [true, false, true];

// Tuples in TypeScript - A tuple is a special type of array that can hold a fixed number of elements of different types.
let tuple: [number, string, boolean] = [1, "two", true];

// wrong tuple examples
let wrongTuple1: [number, string, boolean] = [1, 2, true]; // Error: Type 'number' is not assignable to type 'string'.
let wrongTuple2: [number, string, boolean] = [1, false, "two"]; // Error: Source has 2 element(s) but target requires 3.

// Enums in TypeScript

// Any type in TypeScript

// Void type in TypeScript

// Never type in TypeScript

// Undefined and Null types in TypeScript

// Unknown type in TypeScript 



