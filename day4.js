"use strict";
// Question 7: Find Duplicate Numbers in an Array. Write a TypeScript function that takes an array of numbers
// as input and returns a new array containing only the duplicate numbers from the original array. 
//If there are no duplicates, return an empty array.Function Signature:typescript 
Object.defineProperty(exports, "__esModule", { value: true });
function findDuplicates(numbers) {
    let findduble = [];
    let allnum = numbers.length;
    for (let i = 0; i < allnum; i++) {
        for (let j = i + 1; j < allnum; j++) {
            if (numbers[i] === numbers[j] && !findduble.includes(numbers[i])) {
                findduble.push(numbers[i]);
            }
        }
    }
    return findduble;
}
const numberS = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 8];
const dupliCates = findDuplicates(numberS);
console.log(dupliCates); // Output: [2, 3, 8]
function printTopStudents(students) {
    for (let student of students) {
        if (student.marks > 80) {
            console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
        }
    }
}
const students = [
    { name: "Alisha", age: 20, marks: 85 },
    { name: "Badar", age: 22, marks: 75 },
    { name: "Aliya", age: 19, marks: 90 },
    { name: "Duaa", age: 21, marks: 65 },
    { name: "Sana", age: 23, marks: 88 },
];
printTopStudents(students);
