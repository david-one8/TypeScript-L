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
let numbers = [1, 2, 3, 4, 5];
let strings = ["one", "two", "three"];
let booleans = [true, false, true];
// Tuples in TypeScript - A tuple is a special type of array that can hold a fixed number of elements of different types.
let tuple = [1, "two", true];
// wrong tuple examples
// wrong tuple examples
// let wrongTuple1: [number, string, boolean] = [1, 2, true]; // Error: Type 'number' is not assignable to type 'string'.
// Enums in TypeScript - An enum is a special "class" that represents a group of constants (unchangeable variables).
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["User"] = "user";
    UserRoles["Guest"] = "guest";
    UserRoles["SuperAdmin"] = "superadmin";
})(UserRoles || (UserRoles = {}));
let userRole = UserRoles.Admin;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 1] = "Up";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Left"] = 3] = "Left";
    Directions[Directions["Right"] = 4] = "Right";
})(Directions || (Directions = {}));
let direction = Directions.Up;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["ServerError"] = 500] = "ServerError";
})(StatusCodes || (StatusCodes = {}));
let statusCode = StatusCodes.Success;
// Any type in TypeScript
let a; // a is of type any because it is not initialized and no type is specified so it is by defaults to any
// Unknown type in TypeScript 
let b; // b is of type unknown because it is not initialized and no type is specified so it is by defaults to unknown
a = 10; // OK
a = "Hello"; // OK
a = true; // OK 
b = 20; // OK
b = "World"; // OK
b = false; // OK
// Void type in TypeScript
function logMessage(message) {
    console.log(message);
}
// Never type in TypeScript
function throwError(message) {
    throw new Error(message);
}
// Undefined and Null types in TypeScript
let u = undefined;
let n = null;
// # Introduction to type Inference & type Annotations
// Defination of Type Inference - Type Inference is the ability of TypeScript to automatically deduce the type of a variable based on its value.
let inferredString = "This is a string"; // Hover over inferredString to see its type is string
let inferredNumber = 42; // Hover over inferredNumber to see its type is number
let inferredBoolean = true; // Hover over inferredBoolean to see its type is boolean
// Defination of Type Annotations - Type Annotations is the ability of TypeScript to explicitly specify the type of a variable.
let annotatedString = "This is a string";
let annotatedNumber = 42;
let annotatedBoolean = true;
function abcd(user) {
}
abcd({ name: "John", email: "john@example.com" }); // OK
abcd({ name: "Jane", email: "jane@example.com", gender: "female" }); // OK
function xyz(user) {
}
xyz({ name: "Alice", email: "alice@example.com", admin: true }); // OK
xyz({ name: "Bob", email: "bob@example.com", admin: false }); // OK
xyz({ name: "Bob", email: "bob@example.com", admin: false }); // OK
let userId;
// # Union and Intersection Types 
// Union Type - A union type is a type that can be one of several types. It is defined using the pipe (|) operator.
let unionType;
// Intersection Type - An intersection type is a type that combines multiple types into one. It is defined using the ampersand (&) operator.
let intersectionType;
let user = { id: 1, name: "John" }; // OK
// let wrongUser: { id: number } = { id: 1 }; // Error: Property 'name' is missing in type '{ id: number; }' but required in type '{ id: number; name: string; }'.      
// # Fundamental of Classes & Objects in TypeScript
class Person {
    name = "John Doe"; // Property with default value
    age = 30; // Property without default value
    gender = "male"; // Property with default value
}
let p1 = new Person(); // Creating an instance of Person class
let p2 = new Person(); // Creating another instance of Person class
class Device {
    company = "Apple";
    model = "iPhone 16";
    year = 2024;
    price = 110000;
}
let d1 = new Device();
// # Constructors in TypeScript Classes
class BottleMaker {
    brand;
    material;
    price;
    color;
    constructor(brand, material, price, color) {
        this.brand = brand;
        this.material = material;
        this.price = price;
        this.color = color;
    }
}
let b1 = new BottleMaker('camel', 'plastic', 200, 'blue');
export {};
//# sourceMappingURL=app.js.map