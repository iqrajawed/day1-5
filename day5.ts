// Question 1: Array Comparison and Manipulation (Updated)

// Create a function in TypeScript that takes two arrays of numbers as input. The function
// should perform the following operations based on the conditions given

// If the lengths of both arrays are the same and all elements are the same:
// Merge both arrays into one array.Multiply all elements of the merged array 
// to produce a single number.Return the product.

// If the lengths of both arrays are different:
// Merge both arrays into one array. Return the middle element of the merged array.

// If the lengths of both arrays are the same but elements are different
// Make the elements of both arrays the same by adding corresponding elements.Merge the arrays.
// Return the sum of the elements of the resulting merged array.


function processArrays(arr1: number[], arr2: number[]): number {
    if (arr1.length === arr2.length) {
        // Check if all elements are the same
        let identical = true;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                identical = false;
                break;
            }
        }

        if (identical) {
            // If all elements are the same, merge and multiply
            let product =1;
            for (let i = 0; i < arr1.length; i++) {
                product *= arr1[i] *= arr2[i];
            }
            return product;

        } else {
            // If lengths are the same but elements are different, add corresponding elements and sum
            let sum = 0;
            for (let i = 0; i < arr1.length; i++) {
                sum += arr1[i] + arr2[i];
            }
            return sum;
        }
    } else {
        // If lengths are different, merge and return the middle element
        let mergedArray = arr1.concat(arr2);
        let middleIndex = Math.floor(mergedArray.length / 2);
        return mergedArray[middleIndex];
    }
}

console.log(processArrays([1, 2, 3], [1, 2, 3]));  // Output: 36
console.log(processArrays([1, 2, 3], [4, 5, 6]));  // Output: 21
console.log(processArrays([1, 2, 3], [4, 5]));     // Output: 3



        // If lengths are different, merge and find the middle element
// let aRr1:number[]=[1,2,3]
// let aRr2:number[]=[1,3]
// let mergedArray = aRr1.concat(aRr2);
//         let middleIndex = Math.floor(mergedArray.length / 2);
//         console.log(middleIndex);
        

//q:2 Extract First Letters from String Array
// Create a function in TypeScript that takes an array of strings (names) as input. 
//The function should return a new array containing the first letter of each name.

function extractfrstlettr(name:string[]) {
    let firstletter =[]
    for (let i = 0; i < name.length; i++) {
        firstletter.push(name[i][0]);
        
    }
    return firstletter
}
const names:string[]=["Humna","Yusra","Zarish","Aqsa"]
const extractfirstlettr:string[]=extractfrstlettr(names)
console.log(extractfirstlettr);//[ 'H', 'Y', 'Z', 'A' ]

