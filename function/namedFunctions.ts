/*Named Function is a function declared with name

Syntax
function FunctionName(parameters):return type{
 Block of code
} 

FunctionName() // function invoked
*/
// Example 1 - No parameter no return type

function display(){
    console.log("This is just displaye function without parameters and no return value.")
}

display();

/* Diff between Function and Method 
Function - Function is standalone block of code. it does not belongs to any class or object.
Method - A Method is a function that belongs to a class or object.
*/

// Example 2 - Named function with parameter and return value
function addNumber(x:number, y:number):number{

    return x+y;
}

console.log("Addition is ", addNumber(5,10));

// Example 3 - Named function with Rest Parameters
// Rest parameters dont restrict the number of parameters that you can pass to a function 
function addNumbers(...nums: number[])
{
    let i;
    let sum: 
    number=0;
    //for(i=0; i<nums.length; i++)
         for (const num of nums){
        sum = sum + num;
    } 

   return sum;
}

console.log(addNumbers(1,2,3))
console.log(addNumbers(1,2))

// Example 4 Named function with optional parameters 
function displayDetails(id:number, name:string, email?:string):void{
    console.log("ID: ",id);
    console.log("Name: ", name);
    if(email !== undefined){
    console.log("email: ",email)
    }
}

displayDetails(101, "John", "john@gmail.com")

// Named function with default parameters 

console.log("Names fuction with default parameters")
function calculateDiscount(price:number,rate:number=0.30):void{
    let discount:number= price*rate;
    console.log("Discount Amount ", discount) 
}
calculateDiscount(1000)// it will take default valu
calculateDiscount(1000, 0.40) // Here user value we explicitly passed