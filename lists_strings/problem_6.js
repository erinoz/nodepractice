/* Write a function that tests whether a string is a palindrome.
*/

// Test cases
// String with 1 character
// String with 2 characters, true
// String with 2 characters, false
// String with 3+ characters (odd), true
// String with 3+ characters (odd), false
// String with 3+ characters (even), true
// String with 3+ characters (even), false

// charAt(0); ~ bracket notation in an array

let str = 'adbz'

const checkStringIsPalindrome = (str) => {
    let pointerOne = 0;
    let pointerTwo = str.length -1; 

    while (pointerOne <= pointerTwo) {
        if (str.charAt(pointerOne) !== str.charAt(pointerTwo)) {
            return false
        }

        pointerOne++
        pointerTwo--
    }

    return true
}

console.log(checkStringIsPalindrome(str))
