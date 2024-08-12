// Question 1: Sum of an Array Instructions:

// Write a function named sumArray that takes an array of numbers as input.
// The function should return the sum of all numbers in the array.
// Ensure your function works correctly by testing it with different inputs.

function sumarray(number:number[]){
    let sum = 0
    for(let num of number){
     sum += num
    }
    return sum
    }
    console.log(sumarray([1,2,3,4,5,6,7,8]));//36

    //method2
function sumArray(newarry:number[]):number{
    let newsum = 0
     for(let suM = 0; suM < newarry.length ; suM++){
    newsum += newarry[suM]
     }
     return newsum
     }
     console.log(sumArray([1,2,3,4,5]));//15

     
    
    // Question 2: Reverse a String Instructions:

    // Write a function named reverseString that takes a string as input.
    // The function should return the reversed version of the input string. 
    //Ensure your function works correctly by testing it with different inputs.
    //  Example:Input: "hello" Output: "olleh"
//method1
function reverseString(str:string):string{

    return str.split("").reverse().join("")
    }
    console.log(reverseString("Pakistan Zindabad"));//dabadniZ natsikaP
    //method2
    function revrsestring(str:string):string {
        let reversed =""
        for (let i = str.length-1; i >=0; i--) {
             reversed += str[i];
            
        }
        return reversed
    
    }
    
    console.log(revrsestring('hello'));//olleh
    console.log(revrsestring('Good Morning'));//gninroM dooG