/* Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
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

const concatLists = (listOne, listTwo) => {
    let newList = listOne + ',' + listTwo;
    return newList
}

console.log(concatLists([], [1]))

// TODO: If there are 0 items in listOne, how to get rid of the comma? (do we care?) 
