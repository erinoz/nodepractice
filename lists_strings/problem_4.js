/* Write a function that returns the elements on odd positions in a list.
*/

let inputArray = [0, 1]

const returnOddElements = (inputArray) => {
    let oddElementsArray = [];
    for (i = 1; i < inputArray.length; i+=2) {        
        oddElementsArray.push(inputArray[i]);
    }
    return oddElementsArray
}

console.log(returnOddElements(inputArray))

// const returnOddElements = (originalArray) => {
//     let reverseArray = []; 
//     let i = originalArray.length - 1; 
//     for (i; i >= 0; i--) {
//         reverseArray.push(originalArray[i])
//     }
//     return reverseArray
//   }
