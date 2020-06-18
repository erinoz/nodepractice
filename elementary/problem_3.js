/* Modify the previous program such that only the users Alice and 
 * Bob are greeted with their names.
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?\n', function(name) {
    if (name === "Bob" || name === "Alice" ) {
        console.log(`Hello ${name}`)
    }
    rl.close();
});

rl.on("close", function() {
    console.log("BYE BYE !!!");
    process.exit(0);
});
