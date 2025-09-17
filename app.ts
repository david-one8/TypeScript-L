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


// Unknown type in TypeScript 
let b: unknown;  // b is of type unknown because it is not initialized and no type is specified so it is by defaults to unknown
a = 10; // OK
a = "Hello"; // OK
a = true; // OK 
b = 20; // OK
b = "World"; // OK
b = false; // OK

// Void type in TypeScript
function logMessage(message: string): void {
    console.log(message);
}


// Never type in TypeScript
function throwError(message: string): never {
    throw new Error(message);
}

// Undefined and Null types in TypeScript
let u: undefined = undefined;
let n: null = null;


// # Introduction to type Inference & type Annotations

// Defination of Type Inference - Type Inference is the ability of TypeScript to automatically deduce the type of a variable based on its value.
let inferredString = "This is a string"; // Hover over inferredString to see its type is string
let inferredNumber = 42; // Hover over inferredNumber to see its type is number
let inferredBoolean = true; // Hover over inferredBoolean to see its type is boolean

// Defination of Type Annotations - Type Annotations is the ability of TypeScript to explicitly specify the type of a variable.
let annotatedString: string = "This is a string"; 
let annotatedNumber: number = 42; 
let annotatedBoolean: boolean = true;


// # Introduction to Interfaces 

// Defination of Interface - An interface is a syntactical contract that an entity should conform to. In TypeScript, interfaces define the shape of an object.
interface User {
    name: string;
    email: string;
    gender?: string; // Optional property
}

function abcd (user: User) {

}

abcd({name: "John", email: "john@example.com"}); // OK
abcd({name: "Jane", email: "jane@example.com", gender: "female"}); // OK
// Error: Property 'name' is missing in type '{ age: number; }' but required in type 'User'.



// # Extending Interfaces
interface User {
    name: string;
    email: string;
    gender?: string; // Optional property
}

interface Admin extends User {  // In simple words, Admin is a User with additional properties
    admin: boolean; // Admin property is mandatory for Admin interface
}

function xyz(user: Admin) { // Function that takes an Admin type object as parameter

}

xyz({name: "Alice", email: "alice@example.com", admin: true}); // OK
xyz({name: "Bob", email: "bob@example.com", admin: false}); // OK
xyz({name: "Charlie"}) // Error: Property 'email' is missing in type '{ name: string; }' but required in type 'Admin'.


// # Type Aliases
// Defination of Type Alias - User can create custom names for any data type using type alias.

//1
type ID = string | number; // ID can be either string or number

let userId: ID;


// Union and Intersection Types
// Union Type - A union type is a type that can be one of several types. It is defined using the pipe (|) operator.
let unionType: string | number;

// Intersection Type - An intersection type is a type that combines multiple types into one. It is defined using the ampersand (&) operator.
let intersectionType: { id: number } & { name: string };
let user: { id: number; name: string } = { id: 1, name: "John" }; // OK
// let wrongUser: { id: number } = { id: 1 }; // Error: Property 'name' is missing in type '{ id: number; }' but required in type '{ id: number; name: string; }'.      


