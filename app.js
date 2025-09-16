"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
let wrongTuple1 = [1, 2, true]; // Error: Type 'number' is not assignable to type 'string'.
let wrongTuple2 = [1, false, "two"]; // Error: Source has 2 element(s) but target requires 3.
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
// Void type in TypeScript
// Never type in TypeScript
// Undefined and Null types in TypeScript
// Unknown type in TypeScript 
//# sourceMappingURL=app.js.map