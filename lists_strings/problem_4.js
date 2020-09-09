/* Write a function that returns the elements on odd positions in a list.
*/


const returnLargestElement = (input) => {
    let largest
    for (i = 0; i < input.length; i++) {

        for (j = 0; j < input.length; j++) {
            if (input[i] < largest && input[j] < largest) {
                // do nothing!
            }
            else if (input[i] > input[j]) {
                largest = input[i];
            } 
            else if (input[i] < input[j]) {
                largest = input[j];
            }
            else if (input[i] === input[j]) {
                largest = input[i];
            }
            // console.log("input i", input[i]) 
            // console.log("input j", input[j])
        }
    }
    console.log(largest);
    // return largest;
}

returnLargestElement([1, -7, 5])
