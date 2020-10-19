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

    console.log(listOne.length);
    console.log(listTwo.length);

    while (pointerOne < listOne.length && pointerTwo < listTwo.length) {
        console.log(pointerOne);
            if (pointerOne < pointerTwo) {
                console.log("we/n're inside the if statement");
                newList.push(listOne[pointerOne]);
                i++;
            } else if (pointerOne > pointerTwo) {
                console.log("we/n're inside the second if statement");
                newList.push(listTwo[pointerTwo]);
                i++;
            } else {
                newList.push(listOne[pointerOne]);
                newList.push(listTwo[pointerTwo]);
                console.log("we/n're inside the else statement");
                i++;
            }
            // i had return newList here to make the loop stop from running forever, 
            // but it's stopping the while loop before I want it to 
    }
}

console.log(mergeSortedLists([1, 4, 6], [2, 3, 5]))