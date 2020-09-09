/* Write a function that checks whether an element occurs in a list.

Tests: 
- Number
- String

*/

// const originalArray = [1, 3, 5]
// const checkElementExists = (element) => {
//     if (originalArray.indexOf(element) !== -1) {
//         console.log('This is an element!')
//     } else {
//         console.log('This is not an element!')
//     }
// }

// checkElementExists('dog')

// if something returns nothing return false or -1

/*Test Cases (Array only has numbers)
- if the element does not exist => return false
- if the element does exist => return true
- if the array is empty => return false 
*/

const checkElementOccurs = (inputArray, elementToCheck) => {
    for (i = 0; i < inputArray.length; i++) {
        if (elementToCheck === inputArray[i]) {
            return true
        }
    }
    return false
}
console.log(checkElementOccurs([], 5)) 