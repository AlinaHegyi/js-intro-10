const { getRandomNumber } = require('../utils/MathHelper.js');


console.log('\n---------------TASK01---------------\n');
/*
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

*/
/*
Test data 1:
34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2:
76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter

*/
// let n1 = getRandomNumber(1, 100);

/* if (n1 <= 25) {
    console.log(`${n1} is in the 1st half
 ${n1} is in the 1st quarter`);

} else if ( n1 <= 50) {
  console.log(`${n1} is in the 1st half
 ${n1} is in the 2nd quarter`);

 } else if ( n1 <= 75) {
    console.log(`${n1} is in the 2nd half
      ${n1} is in the 3rd quarter`);

}else {
    console.log(`${n1} is in the second half
 ${n1} is in the 4th quarter`);
    }    
*/
 let num = getRandomNumber(1, 100);
if(num < 1 || num > 100) console.log("Number is not in range of 1-100")
    else{
        if(num < 51) {
            console.log('First half')
            if(num <= 25) console.log('First Quarter')
            else console.log('Second Quarter')
        }
        else {
            console.log('Second half')
            if(num <= 75) console.log('Third Quarter')
            else console.log('Fourth Quarter')
        } 
    
    }
    






console.log('\n---------------TASK02---------------\n');

/*
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false

*/
const { getRandomNumber } = require('../utils/MathHelper.js');

let num1 = getRandomNumber(1, 100);
let num2 = getRandomNumber(1, 100);
let num3 = getRandomNumber(1, 100);

console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0);




console.log('\n---------------TASK03---------------\n');

/*
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.
Test data 1:
"a"

Expected result 1:
"a"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit

Test data 2:
"$"

Expected result 1:
"$"  is a special character

Test data 4:
" "

Expected result 4:
" " is a whitespace

*/

 let char = '7';

 if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) console.log('letter');
  else if (char >= '0' && char <= '9') console.log('digit');
  else if (char === ' ') console.log('whitespace');
  else console.log('special character');



console.log('\n---------------TASK04---------------\n');

/*
Write a function named hasBlue() which takes a string argument and returns true 
if the string has an occurrence of blue word, returns false otherwise.

NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")   		-> false
hasBlue("Javabluescript")   	-> true
hasBlue("Tech Blue Global")   	-> true
hasBlue("1234")   		-> false
hasBlue("ABLUEC")   		-> true

*/
function hasBlue(str) {
    return str.includes('blue');
}

console.log(hasBlue('Hello World')); //f
console.log(hasBlue('Tech blue Global'));  //t
console.log(hasBlue('1234')); //f
console.log(hasBlue('Abluefin')); //t



console.log('\n---------------TASK05---------------\n');

/*
Write a function named startT() which takes a string argument and returns true if the string start with letter T,
 returns false otherwise.

NOTE: Ignore upper/lower cases.
Examples:
startT("Hello World")   	-> false
startT("typescript")   	-> true
startT("TechGlobal")   	-> true
startT("1234")   	-> false
startT("ABC")   	-> false

*/
 function startT(str) {
 //return str.startsWith('T') || str.startsWith('t');
 return str.toLowerCase().startsWith('t');
 }

console.log(startT('Hello World'));
console.log(startT('typescript'));
console.log(startT('Techglobal'));
console.log(startT('123'));
console.log(startT('abc'));








