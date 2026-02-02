// A function defined with name is called as Named Function
//Syntax -
/*
function functionName(Parameter):returnName
{
    //Block of code
} 

    functionName() // Calling the function
*/

//Example 1 - Named function with no parameters and no rturn type
function display(): void {
    console.log("Welcome to typescript Functions")
}

display();

// Example 2 - Named function with parameters and return type
function addNumbers(x: number, y: number): number {
    return x + y;
}

console.log("Addition is :", addNumbers(100, 200))
let addtion = addNumbers(300, 400);
console.log("Addition is :", addtion)

// Example 3 - Named function with Rest parameters

// Rest Function - This function can accepts any numbers of parameters
function add(...numbers:number[]){
    let total:number=0;
    for(let i=0;i<numbers.length;i++){
          total += numbers[i];   
    }

    console.log("Sum of the numbers :", total)
}

add(30,60);
add(30,60,90)