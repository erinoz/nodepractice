/* Write a function that merges two sorted lists into a new sorted list. 
[1,4,6],[2,3,5] → [1,2,3,4,5,6]. 

You can find a solution that runs more quickly than 
concatenating them followed by a sort.
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

// Loop over while pointer 1 is less than the length of the first array and pointer 2 is less than the length of the
// second Array

// Evaluate each item to select the smaller one to push into the list 

// Once one of those pointers reaches the end of the array, then add the rest of the elements for 
// the other if there's anything left

const mergeSortedLists = (listOne, listTwo) => {
    let newList = []; 
    let pointerOne = 0;
    let pointerTwo = 0; 
    let i = 0;

    while (pointerOne <= listOne.length && pointerTwo <= listTwo.length) {
            if (pointerOne[i] < pointerTwo[i]) {
                newList.push(pointerOne[i]);
                console.log(newList);
                i++;
            } else {
                newList.push(pointerTwo[i]);
                console.log(newList);
                i++;
            }

        
    }
}