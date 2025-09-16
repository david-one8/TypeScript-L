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

// Enums in TypeScript - An enum is a special "class" that represents a group of constants (unchangeable variables).
enum UserRoles{
    Admin = "admin",
    User = "user",
    Guest = "guest",
    SuperAdmin = "superadmin"
}
let userRole: UserRoles = UserRoles.Admin;

enum Directions{
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
let direction: Directions = Directions.Up;

enum StatusCodes{
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
let statusCode: StatusCodes = StatusCodes.Success;


// Any type in TypeScript
let a;  // a is of type any because it is not initialized and no type is specified so it is by defaults to any


// Void type in TypeScript

// Never type in TypeScript

// Undefined and Null types in TypeScript

// Unknown type in TypeScript 



