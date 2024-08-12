// Question 7: Find Duplicate Numbers in an Array. Write a TypeScript function that takes an array of numbers
// as input and returns a new array containing only the duplicate numbers from the original array. 
//If there are no duplicates, return an empty array.Function Signature:typescript 

function findDuplicates(numbers: number[]): number[] { 
    let findduble:number[] = []
    let allnum = numbers.length;
    for (let i = 0; i < allnum; i++) {
       for (let j = i + 1; j < allnum; j++) {
        if (numbers[i] === numbers[j] && !findduble.includes(numbers[i])) {
            findduble.push(numbers[i]);
        
       }    
    }
} 
 return findduble
 }
 const numberS = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 8];
  const dupliCates = findDuplicates(numberS);
  console.log(dupliCates); // Output: [2, 3, 8]

 // Question 8: Filter Students with Marks Greater than 80 .Create an array of objects where each object represents a 
 //student with properties name, age, and marks. Write a function that filters and prints the data of students
 // who have marks greater than 80.


interface Student { name: string; age: number; marks: number; }

function printTopStudents(students: Student[]): void { 
    for (let student of students) {
        if (student.marks > 80) {
            console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
        }
    }
}

const students: Student[] = [
    { name: "Alisha", age: 20, marks: 85 },
    { name: "Badar", age: 22, marks: 75 },
    { name: "Aliya", age: 19, marks: 90 },
    { name: "Duaa", age: 21, marks: 65 },
    { name: "Sana", age: 23, marks: 88 },
];

printTopStudents(students);
 