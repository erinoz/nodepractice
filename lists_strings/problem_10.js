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
  let smallestListLength = Math.min(listOne.length, listTwo.length);

  let combinedList = [];
  let arrayPointer;

  for (arrayPointer = 0; arrayPointer < smallestListLength; arrayPointer++) {
    combinedList.push(listOne[arrayPointer]);
    combinedList.push(listTwo[arrayPointer]);
  }

  if (listOne.length > listTwo.length) {
    for (arrayPointer; arrayPointer < listOne.length; arrayPointer++) {
      combinedList.push(listOne[arrayPointer]);
    }
  }

  if (listOne.length < listTwo.length) {
    for (arrayPointer; arrayPointer < listTwo.length; arrayPointer++) {
      combinedList.push(listTwo[arrayPointer]);
    }
  }
  return combinedList;
};

console.log(combineLists(["a", "b", "c", "d"], [1, 2, 3, 4, 5]));

const combineListsUsingRemainder = (listOne, listTwo) => {
  let smallestListLength = Math.min(listOne.length, listTwo.length);

  let combinedList = [];

  for (i = 0; i < smallestListLength; i++) {
    combinedList.push(listOne[i]);
    combinedList.push(listTwo[i]);
  }

  if (listOne.length > listTwo.length) {
    remainderOne = listOne.length - listTwo.length;
    for (i = listOne.length - remainderOne; i < listOne.length; i++) {
      combinedList.push(listOne[i]);
    }
  }

  if (listOne.length < listTwo.length) {
    remainderTwo = listTwo.length - listOne.length;
    for (i = listTwo.length - remainderTwo; i < listTwo.length; i++) {
      combinedList.push(listTwo[i]);
    }
  }
  return combinedList;
};

console.log(combineListsUsingRemainder(["a", "b", "c", "d"], [1, 2, 3, 4, 5]));

// TODO - use Math.abs to find the difference and condense to one if statement - you'll still have to account for
// which list is being selected and the long tail is getting added to the new list 

// const difference = (listOne.length, listTwo.length) => {
//   return (listOne.length > listTwo.length) ? (listOne.length - listTwo.length) : (listTwo.length - listOne.length);
// }
  //let listLengthDifference = difference(listOne.length, listTwo.length); 

const combineListsUsingMathAbs = (listOne, listTwo) => {

  let smallestListLength = Math.min(listOne.length, listTwo.length);
  let listLengthDifference = Math.abs(listOne.length, listTwo.length)
  
  let combinedListThree = [];
  let i;

  for (i = 0; i < smallestListLength; i++) {
    combinedListThree.push(listOne[i]);
    combinedListThree.push(listTwo[i]);
  }

  if (listLengthDifference !== 0) {
    for (; i < listOne.length; i++) {
      combinedListThree.push(listOne[i]);
    }
    for (; i < listTwo.length; i++) {
      combinedListThree.push(listTwo[i]);
    }
  }

  return combinedListThree;
};

console.log(combineListsUsingMathAbs(["a", "b", "c", "d"], [1, 2, 3, 4, 5]));