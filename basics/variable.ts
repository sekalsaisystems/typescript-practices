
/* Variable: container which can hold store data.
Variables can be declared using three different keywords - Var, let, const.
In JS/TS specifying the data type is optional. The type of data you store it will be type of variable it will be.
 
*/
let age: number = 30;
let personName = "Josh"; //
console.log("Name is: " + personName);

// difference between var, let and const
/* 
 1. Scope 
 2. Declaration/initialization
 3. Redeclaration
 4. Re-initialization/ Re-assignment
 5. Hoisting */

// 1. Scope - accessability of variable in different part of caode. (Functionl scope (var), block scope(let, const))
//var - function scope - do not use in modern JS/TS. Because it is function scoped can lead unexpected behaviors.
//let - blocked scope - use this when you want variable which value can be changed.
//const - blocked scope - use this when you dont wants to change the value of the varible.

//var example
function varTest() {
    if (true) {
        var msg = "Hello World";
    }
    console.log(msg);
}

varTest();

// let & const example

function letConstTest() {

    if (true) {
        let msg = "Hello world"
        const pi = 3.14;
        console.log(msg);
        console.log(pi);
    }

    //console.log(msg);
    //console.log(pi);
}

//2. Declaration/initialization
var varName; // Declaration without initialization
console.log(varName); // undefined 

let letName; // Declaration without initialization
console.log(letName); // undefined

const constName = "John"; // declaration with initialization - const must be initialized ducring the declaration 

//3. Redeclaration 
var city = "New York";
var city = "Landon"; // reeclaration allowed

// redeclaration is not allowed in case of let and const

//4. Re-initialization / Re-assignment 
// re-initialization allowed in case of var and let
var country ="USA";
country ="UK";

let state ="New York";
state ="Landon";
// re-initialization is not allowed in case of const
const countryCode ="US";
// countryCode="UK" // Error : Cannot assign to 'countryCode' because it is a constant.

//5. Hoisting - meanes moving the declaration on the top of the scope during compile time

// var -- it is hoisted and initialized with undefined
//console.log(cName)
var cName ="Test";

// let & const
//console.log(sName)
const sName ="Test" // Error: Cannot access 'sName' before initialization'

//console.log(sName)
//console.log(pName)
const pName ="Test" // Error: Cannot access 'pName' before initialization'

var x;
console.log(x);
