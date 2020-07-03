/* Modify the previous program such that only multiples of three or 
 * five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
 */

const userInput = 10
let count = 0;
for (let i = 0; i <= userInput; i++) {
    console.log(`looking at number = ${i}`)
    if ((i % 3 === 0 ) || (i % 5 === 0)) {
        console.log(`adding = ${i}`)
        count += i;
        console.log(`count is currently` , count)
    } else {
        console.log(`skipping this number = ${i}`)
    }
}
console.log(`count = ${count}`)