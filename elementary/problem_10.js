/*  Write a program that prints the next 20 leap years.
*/

// Variables

//let isLeapYear = false;

// Function 
const isLeapYear = (year) => {
    let leapYear = false;
    
    if (year % 400 === 0) {
        leapYear = true;
       }
    
       else if (year % 100 === 0) {
           // year is not a leap year
       }
    
       else if (year % 4 === 0) {
           leapYear = true;
       }
        
       else {
           // not a leap year
       }

       return leapYear;
}

// console.log('2000 is leap year', isLeapYear(2000));
// console.log('2003 is not leap year', isLeapYear(2003));
// console.log('2100 is not leap year', isLeapYear(2100));
// console.log('2004 is leap year', isLeapYear(2004));



// for (let year = 2020; year < 2200; year++) {
//     if (isLeapYear(year)) {
//         console.log(year + ' is a leap year!')
//     }
// }

// Iterate over the years and check if it's a leap year 
// Limit to 20
let year = 2020;
let numberOfLeapYears = 0;

while (numberOfLeapYears < 20) {
    if (isLeapYear(year)) {
        numberOfLeapYears++ 
        console.log(year + ' is a leap year!')
        console.log('Number of leap years is ', numberOfLeapYears)
    }
    year++
}

// // Calculate if the year is a leap year
// while (numberOfLeapYears < 20) {
//    if (yearCounter % 400 === 0) {
//     isLeapYear = true;
//    }

//    else if (yearCounter % 100 === 0) {
//        // year is not a leap year
//    }

//    else if (yearCounter % 4 === 0) {
//        isLeapYear = true;
//    }
    
//    else {
//        // not a leap year
//    }
//     yearCounter++
// }

// example from web page 

/* 


// Functions
const yearCounter = (year, i) => {
    year += i;
    console.log(`adding = ${i}`)
    console.log(`year is currently` , year)
    return year; 
}

 if (yearCounter % 4 === 0 && yearCounter % 100 !=== 0 || ) {

    } else {


    }


function go(){var nYear=parseInt(document.getElementById('year').value);var s=''
if(isNaN(nYear)||nYear<1582){msg('Enter a Year from 1582 onwards')
return}else{s+=leapYearMsg(nYear)
s+='\n'
if(leapYearQ(nYear)){s+=nYear+' IS a Leap Year'}else{s+=nYear+' is NOT a Leap Year'}}
msg(s)}
function leapYearMsg(n){var s=''
if(n%4){return 'not divisible by 4\n'}else{s+='divisible by 4\n'
if(n%100){s+='and not divisible by 100\n'
return s}else{s+='and divisible by 100\n'
if(n%400){s+='but not divisible by 400\n'
return s}else{s+='but also divisible by 400\n'
return s}}}}
function leapYearQ(n){if(n%4){return false}else{if(n%100){return true}else{return(n%400)?false:true}}}
function msg(s){var div=document.getElementById('result')
div.value=s} */