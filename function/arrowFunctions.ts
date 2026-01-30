// Arrow functions are most widely used.
/*
Arrow functions are also called as Lambda Functions.
Lambda refres to an anonymus function in programming.
Lambda functions are concies mechanism to represent anonymus functions.

There are 3 parts of Lambda function.
1. Parameter - a function may optionally have parameter. 
2. The fat arrow notation/ lambda notation(=>) It is aslo called as "goes to operator" 
3. Statements - represents the function instruction set. 
*/

// Example 1 - Arrow function with no parameter and with no return value
let greet = (): void => {
    console.log("Hello typescript")
}
greet();

// Example 2 - Arrow function with parameter and with return value

let add = (a: number, b: number): number => {
    return a + b;
}
console.log("Addition ", add(10, 20))

// Example 3 - Arrow function with implicit return
// when you one retrun statement you can make it explicit no need to mention return separetly.
let multiply = (a: number, b: number): number => a * b;

console.log("Product ", multiply(30, 60))

// Example 4 - Arrow function with optional parameter
let disp = (id: number, name: string, email?: string): void => {
    console.log("ID: ", id)
    console.log("Name: ", name)
    if (email !== undefined) {
        console.log("Email: ", email)
    }
}

disp(101, "Steve")
disp(102, "Marcus", "abc@gmail.com")

// Example 5 - Arrow function with default parameters 

let calculateDiscounts = (price: number, rate = 0.30) => {
    let discount = price * rate;
    console.log("Discount Amount: ", discount)
}

calculateDiscounts(1000, 0.30)
calculateDiscounts(1000, 0.50)

// Example 6 - Arrow function with rest parameters
let findElements = (...element: (number | string)[]) => {
    return element.length;
}

console.log("Length is", findElements(10, 20, 30, 40, 50, 60, 70))
console.log("Lenght is ", findElements("abc", "xyz", "pqr", "tvs"))