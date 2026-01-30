// Anonymus function (Unnamed Function/Nameless Function)
/*
Anonymus function is function that does not have name.
Instead it is assigned to the variable so it is act as function name.*/

// Example 1 : Anonymus function
let msg = function (): string {
    return "Hello World";
}

console.log(msg())

// Example 2 : Anonymus function with parameters

let multiply = function (a: number, b: number): number {
    return a * b;
}
console.log(multiply(10, 20));