// 1. traditional for loop
    console.log("Traditional for loop example:")
for (let i=1; i<=5; i++){
    console.log(i)
}

// break statement
    console.log("Break statement example:")
for (let i=1; i<=10; i++){
    if(i===6){
        break;
    }
    console.log(i)
}

// costinue statement
    console.log("Continue statement example:")
for (let i=1; i<=10;i++){
    if(i===6){
        continue;
    }
    console.log(i);
    }

// 2. for..in loop
// for in loop is used 
const person = {Fname:"John", Lname:"Doe", age:25}
// for 