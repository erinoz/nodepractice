// Write function that reverses a list, preferably in place.

const originalArray = [13, 'dog', 'fish', true, 7, 'caterpillar']

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

const reverseListNotInPlace = (originalArray) => {
    let reverseArray = []; 
    let i = originalArray.length - 1; 
    for (i; i >= 0; i--) {
        reverseArray.push(originalArray[i])
    }
    return reverseArray
  }

  console.log(reverseListNotInPlace(originalArray))

  const reverseListInPlace = (originalArray) => {
    let pointerOne = 0;
    let pointerTwo = originalArray.length -1; 
  while (pointerOne <= pointerTwo) {
    let tmp = originalArray[pointerOne]; 
    originalArray[pointerOne] = originalArray[pointerTwo]; 
    originalArray[pointerTwo] = tmp; 
    pointerOne++
    pointerTwo--
  }
  return originalArray
}

console.log(reverseListInPlace(originalArray))

// while pointerone is less than pointerTwo 
// save one of the items (first or last) in a temporary variable 
// then say originalArray[pointerOne] = the element of the array, originalArray[pointerTwo] = something else
// increment pointerOne
// decrement pointerTwo

// thing at pointerone = thing at pointerTwo
// pointerTwo needs to become the temporary thing that was at pointerOnebut isn't anymore 
