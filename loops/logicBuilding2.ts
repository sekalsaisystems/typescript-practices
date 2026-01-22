// Square Array
let arr: number[] = [2, 3, 4, 5];
let squareArr: number[] = [];
for (let i = 0; i < arr.length; i++) {
    let square = arr[i] * arr[i]
    squareArr.push(square)
}
console.log("Square Array: ", squareArr)


console.log("*********Search Number in Array************");
function searchNumber(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Number found")
            return true;
        }
    }
    console.log("Number not found")
    return false;
}
console.log("Search Result: ", searchNumber([1, 2, 3, 4, 5], 3));