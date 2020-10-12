/* Write a function that combines two lists by 
alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

// Test cases
// 0 items each
// 1 item each
// 2 items each
// 3+ items each
// 0 items and 1 item
// 0 items and 2 items
// 0 items and 3 items
// 1 item and 2 items
// 1 item and 3 items
// 2 items and 3 items

// Using Math.min to find smallest list length
 
const combineLists = (listOne, listTwo) => {
    let smallestListLength = Math.min(listOne.length, listTwo.length)
    console.log(smallestListLength)

    let combinedList = [];

    for (i = 0; i < smallestListLength; i++) {
        combinedList.push(listOne[i]);
        console.log(combinedList)
        combinedList.push(listTwo[i]);
        console.log(combinedList)
    }

    console.log("after the for loop:", combinedList)

    if (listOne.length > listTwo.length) {
        remainderOne = (listOne.length - listTwo.length) + 2;
        console.log("remainderOne", remainderOne);
        for (i = remainderOne; i < listOne.length; i++) {
            combinedList.push(listOne[i]);
        }
    }

    if (listOne.length < listTwo.length) {
        remainderTwo = (listTwo.length - listOne.length) + 2;
        for (i = remainderTwo; i < listTwo.length; i++) {
            combinedList.push(listTwo[i]);
        }
    }
    return combinedList
}

console.log(combineLists(["a", "b", "c", "d"], [1, 2, 3, 4, 5]))
//     return newList
// }

// Cheating? with shift method

// const combineLists = (listOne, listTwo) => {
//     let combinedList = [];

//     while (typeof listOne[0] !== "undefined" && typeof listTwo[0] !== "undefined") {
//         combinedList += listOne.shift()
//         combinedList += listTwo.shift()

    // }

    // evaluate if the full lists have been returned, if not, add the remainder of the longer list
    // to the end of the new array

//     return combinedList
// }

// console.log(combineLists([1, 2, 3], [4, 5, 6]))

// console.log(concatLists([], [1]))

// const checkStringIsPalindrome = (str) => {
//     let pointerOne = 0;
//     let pointerTwo = str.length -1; 

//     while (pointerOne <= pointerTwo) {
//         if (str.charAt(pointerOne) !== str.charAt(pointerTwo)) {
//             return false
//         }

//         pointerOne++
//         pointerTwo--
//     }

//     return true
// }

// console.log(checkStringIsPalindrome(str))