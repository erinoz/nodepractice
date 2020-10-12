/* Write three functions that compute the sum of the numbers in a list: 
using a for-loop, a while-loop and recursion.
*/

// Test cases
// List with no numbers
// List with 1 number
// List with 1 negative number
// List with 2 numbers
// List with 2 numbers, one negative
// List with 3+ numbers
// List with 3+ numbers, one negative


// Function 1 - for loop
const returnSumFor = (inputArray) => {
    let sum = 0

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum
}

// console.log(returnSumFor([1, 2, 3]))


// Function 2 - while loop
const returnSumWhile = (inputArray) => {
    let sum = 0
    let i = 0 

    while (i < inputArray.length) {
        sum += inputArray[i];
        i++
    }

    return sum
}

// console.log(returnSumWhile([1, 2, 3]))

// Function 3 - Recursion

const returnSumRecursive = (inputArray) => {
    if (inputArray.length === 1) {
        return inputArray.pop();
    }
    // console.log('Input Array before:', inputArray);
    let poppedValue = inputArray.pop();
    // console.log('Input Array after:', inputArray);
    // console.log('Popped Value:',poppedValue);
    return poppedValue + returnSumRecursive(inputArray);
}

console.log(returnSumRecursive([1, 2, 3, 4, 5, 6]));
// TODO: Run all tests on functions 1 & 2

// notes 
    // let sum = 0; 
    // if (inputArray.length === 0) {
    //     return
    // }
    // console.log(sum);
    // console.log(inputArray);
    // returnSumRecursive(sum += inputArray.pop);