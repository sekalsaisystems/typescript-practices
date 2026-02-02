//A callback function is function that passed as an argument to another function and gets executed later.
/* ***Why to use Callback function?
1. Usefule when you wants to execute the function only after another function executes.
2. Common in asynchronus operations like API calls, file handling or event handling.
3. Synchronous means a code runs in pertucular sequence of instruction.
*/

// Example -1 
function showMessage(msg: string) {
    console.log(msg)
}

function greet(name: string, msgShow: (msg: string) => void) {
    console.log(name);
    msgShow("Welcome to TS Callback function.")
}
greet("John", showMessage)

// Example -2
function displayResult(result: number): void {
    console.log(result)
}

function sum(a: number, b: number, callback: (result: number) => void) {
    let result = a + b;
    callback(result);
}

sum(10, 20, displayResult);