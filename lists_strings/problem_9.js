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

// .shift/.push method
const concatLists = (listOne, listTwo) => {
    let newList = [];    

    while ((i = listOne.shift()) !== undefined ) {
        // console.log(i);
        newList.push(i);
        // console.log(newList);
    }

    while ((i = listTwo.shift()) !== undefined ) {
        // console.log(i);
        newList.push(i);
        // console.log(newList);
    }

    return newList
}

console.log(concatLists([1, 2, 3], [4, 5, 6]))

// Spread Syntax
const concatListsSpread = (listOne, listTwo) => {
    let newList = [...listOne, ...listTwo]; 
    return newList
}

console.log(concatListsSpread([1, 2, 3], [4, 5, 6]))

// .concat method
const concatListsConcatMethod = (listOne, listTwo) => {
    newList = listOne.concat(listTwo);
    return newList
}

console.log(concatListsConcatMethod([1, 2, 3], [4, 5, 6]))
