
let evenArray: number[] = [];
let oddArray: number[] = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i}`, "is even")
        evenArray.push(i);
    } else {
        console.log(`${i}`, "is odd")
        oddArray.push(i);
    }
}
console.log("Even Numbers: ", evenArray)
console.log("Odd Numbers: ", oddArray)

console.log("************** Multipliacation Table **************")
function multiplicationTable(num: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num * i}`)
    }
}
multiplicationTable(5);

console.log("*************** Summ of the numbers ***************")
function sumOfNumbers(limit: number): number {
    let sum: number = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum;
}

console.log("Sum of numbers from 1 to 100 is: ", sumOfNumbers(100))

console.log("*********Fizz, Buzz,  FizzBuzz from 1 to 20************")
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: FizzBuzz`)
    } else if (i % 3 === 0) {
        console.log(`${i}: Fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i}: Buzz`)
    }
}

console.log("*********Revrse Number using loop************")
function reverseNumber(num:number):number{
    let reversed=0;
    while(num!=0){
        let digit=num%10;
        reversed=reversed*10+digit;
        num=Math.floor(num/10);
    }
    return reversed;
}

console.log("Reversed Number of 12345 is: ", reverseNumber(12345))

console.log('**********Factorial of a number using loop**********')
function factorial(num:number):number{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
console.log("Factorial of 5 is: ", factorial(5))

console.log("**********Sum of Elements in an Array**********")
function sumOfArray(arr:number[]):number{
    let sum=0
    for(let i=0;i<arr.length;i++){
        if (arr[i] !== undefined) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log("Sum of Array Elements: ", sumOfArray([1,2,3,4,5]));

console.log("*********Count odd number in Array************")
function countOddNumbers(arr:number[]):number{
    let count =0;
    for(let i =1;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }
    }
    return count;
}

console.log("Count of Odd Numbers in Array: ", countOddNumbers([1,2,3,4,5,6,7,8,9,10]));

console.log("**********Largest Number in an Array**********")
function largestNumber(arr:number[]):number{
    if (arr.length === 0) {
        return 0;
    }
    let largest=arr[0]
    for(let i=1;i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
}

console.log("Largest Number in Array: ", largestNumber([3,5,7,2,8,1]));

console.log("**********Reverse Array***********")
function reverseArray(arr:number[]):number[]{
    let reverseArray:number[] = [];
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i]);
    }
    return reverseArray;
}
console.log("Reversed Array: ", reverseArray([1,2,3,4,5]));
