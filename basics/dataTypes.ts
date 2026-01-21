//JS is dynamically typed language. It means we dont have to specify the data type of the variable during declaration. the type will be determined during runtime based on the value assigned to it.
//TS is strictly typed language. We have to specify the data type of the variable during declaration. If we dont specify the type, TS will infer the type based on the value assigned to it.

//Data types in TS
// Data types are of two types
// 1. Primitive data types - number, string, boolean, null, undefined, any, union, symbol, bigint (Built-in types)
// 2. Non-primitive data types - object, array, function, tuple, class (Objects)

let age:number=30; // number data type
// Here annaotation is ":number" means we exclusively want to store number type of data in age variable. If we try to stire other type of data it will throw error during compilation.

//Specifiying data type is optional in ts
// Type inference - TS will infer the type based on the value assigned to it.
let score=100; // TS infers the type as number

// Number data type
// Number can be integer or floating point numbers
let price = 23.99 // floating point number
let quantity:number =10 // integer number
let hexanumber:number=0xff; // hexadecimal number

console.log("Price: "+price);
console.log("Quanitity: ",quantity)
console.log("Hexa number: ",hexanumber)

// String data type
let firstName:string="John";
let lastName:string='Doe';
let fullName:string=`Mr. ${firstName} ${lastName}`;// this is called template string or template literal
console.log("Full Name is ",fullName);

// Boolean data type
let isLoggedIn:boolean=true;
let isAdmin:boolean=false;

console.log("Is logged in: ",isLoggedIn);
console.log("Is Admin: ",isAdmin);

//  Null and undefined

    
