/* Write a program that prints all prime numbers up to 100. 
(Note: if your programming language does not support arbitrary size numbers, 
printing all primes up to the largest number you can easily represent is fine too.)
*/

// Function station 

const incrementAndDisplayCount = (count, i) => {
    count += i;
    console.log(`adding = ${i}`)
    console.log(`count is currently` , count)
    return count; 
}
/**
 * Check if number is prime
 * 
 * @param {int} number 
 * 
 * returns true if the number is prime, false otherwise  
 */
const isPrime = (number) => {
    // let isPrime = true;
    // for (let i = 2; i <= Math.floor(number / 2); i++) {
    //     if (number % i === 0) {
    //         isPrime = false; 
    //         console.log(number + 'is divisible by', i)
    //         break;
    //     }
        
    // }
    // return isPrime;

    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            console.log(number + 'is divisible by', i)
            return false; 
        }
        
    }
    return true;
}

// 
const number = 237707;
let isPrime = true;

for (let i = 2; i <= Math.floor(number / 2); i++) {
    console.log('Looking at', i );
    if (number % i === 0) {
        isPrime = false; 
        console.log(number + 'is divisible by', i)
        break;
    }
    
}

if (isPrime === true) {
    console.log(number + ' is prime.')
} else {
    console.log(number + ' is not prime. boo!')
}
