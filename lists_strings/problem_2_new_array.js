// Write function that reverses a list, preferably in place.

const originalArray = ['dog', 'cat', 'fish']

// No items
// one item
// two items
// three+ items
// bigger than 3 odd number of items
// bigger than 3 even number of items 
// different item types 

// find the array length 
// array length minus 1 to find the biggest place number 

// loop - decrement from the last item position to 0 
// write each item to a new array in that order 

// add an item at the beginning - unshift()
// add item at the end - push()

// 

const reverseListNotInPlace = (originalArray) => {
    let reverseArray = []; 
    let i = originalArray.length - 1; 
    for (i; i >= 0; i--) {
        reverseArray.push(originalArray[i])
    }
    return reverseArray
  }

  console.log(reverseListNotInPlace(originalArray))