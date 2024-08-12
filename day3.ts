// Day 3: Task
// Question 5: Remove Duplicates from Array Instructions: Write a TypeScript function named 
//removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements
// removed. Do not use built-in methods like Set.Requirements:The function should iterate through the array 
//and check for duplicates manually. You can use additional arrays or variables to keep track of seen elements.
// Do not use any built-in methods like filter, reduce, or Set.
function removedublicate(arr:number[]):number[] {
    let removduble:number[] = []
 for(let item of arr){
    if (!removduble.includes(item)){
        removduble.push(item)
    }
 }
 return removduble
}
console.log(removedublicate([1,2,2,3,4,5,5]));//[1,2,3,4,5]

// Question 6: Find the Second Largest Number in an Array Instructions: Write a TypeScript function 
//named findSecondLargest that takes an array of numbers and returns the second largest number in the array.
// Do not use built-in methods like sort.Requirements: The function should manually find the largest and
// second largest numbers by iterating through the array.You can use additional variables to keep track of
// the largest and second largest numbers.Do not use any built-in methods like sort.
function seclargenum(num:number[]) {
    let firstlargest = num[0];
    let seclargenum = -Infinity

    for (let i = 0; i < num.length; i++) {
        if (num[i] > firstlargest) {
           seclargenum = firstlargest 
            firstlargest = num[i]; 
        } else if(num[i]>seclargenum && num[i]!== firstlargest){
            seclargenum = num[i]
        }
    }
    return seclargenum
}
const inputAray: number[] = [3,4,6,8,2,1,3];
const secndlarge: number = seclargenum(inputAray);
console.log(secndlarge);//6