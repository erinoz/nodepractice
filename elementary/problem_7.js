/* Write a program that prints a multiplication table for numbers up to 12.
 

1 2 3 
2 4 6
3 6 9
*/

// operator is multiplication
// two sets of values - set 1 needs to iterate over each value in set 2

// logging with just the two for loops console.log(`(i, j) = (${i}, ${j}) = ${i * j}`)

// Setting variables
let result = '';

// Two for loops with an if/else statement
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        result += (i * j) + ' ';
    }
    console.log(result)
    result = '';
}