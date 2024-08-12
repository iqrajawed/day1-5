"use strict";
// Day:2 Task
// Question 3: First and Last Element Instructions: Objective: Write a TypeScript function that takes an array of numbers and 
//returns a new array containing only the first and last elements of the input array.
// Requirements: If the array has only one element, the function should return an array with 
//that element duplicated. Ensure the function handles arrays with a single element correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function firstAndLastnum(numarray) {
    return [numarray[0], numarray[numarray.length - 1]];
}
let inputarray = [2, 3, 4, 5, 6, 7, 8];
let outputarray = firstAndLastnum(inputarray);
console.log(outputarray); //[2,8]
//Question 4 : Find the Largest Number Instructions: Objective: Write a TypeScript function that takes 
//an array of numbers and returns the largest number in the array.Requirements:The function should handle arrays
// with positive and negative numbers. If the array contains only one number, return that number. Ensure the function 
//handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs). 
//Note: This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.
function largestnum(num) {
    let largest = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}
const inputArray = [3, 4, 6, 8, 2, 1, 3];
const largestNumber = largestnum(inputArray);
console.log(largestNumber); //8
