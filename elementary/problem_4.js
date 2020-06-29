/* Write a program that asks the user for a number n and prints the 
 * sum of the numbers 1 to n
 */

const userInput_start = 2
const userInput_end = 4
let count = 0;
for (let i = userInput_start; i <= userInput_end; i++) {
    //console.log(`the incrementer = ${i}`)
    count += i;
}
console.log(`count = ${count}`)