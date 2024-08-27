const { getRandomNumber } = require('../utils/MathHelper.js');


console.log('\n---------------TASK01---------------\n');
/* Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7 
14
21
.
.
. 
.
91
98
*/
 for( let i = 1; i <= 100; i++){
   if (i % 7 === 0) console.log(i);
 }


console.log('\n---------------TASK02---------------\n');

/*Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6
12
18 
.
.
48 */

for ( i = 1; i <= 50; i++) {
if((i % 2 === 0) && (i % 3 === 0)) console.log(i);
}


console.log('\n---------------TASK03---------------\n');
/*
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
.
.
55
50

*/
for (let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}


console.log('\n---------------TASK04---------------\n');
/*
Requirement:
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
*/


for (let i = 0; i <= 7; i++) {
let num = i; let square = num * num;
console.log(`The square of ${num} is ${square}`);
}

console.log('\n---------------TASK05---------------\n');

/* Requirement:
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output: 55
*/
 let sum = 0;
 for( i = 1; i <= 10; i++){
   sum += i;
}
 console.log(sum);


console.log('\n---------------TASK06---------------\n');
/*
Requirement:
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

let num = getRandomNumber(1, 10);
console.log(num);

let factorial = 1;

for ( let i = 1; i <= num; i++){
   factorial *= i;
 
}
console.log(factorial);

console.log('\n---------------TASK07---------------\n');
/*
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/
 
   let attempts = 0;
   let num1 = 1; 


  while (num1 % 5 !== 0) {
    num1 = getRandomNumber(1, 100);
    attempts++;
}

console.log(`The random number is ${num1} and it took
 ${attempts} attempts to generate it.`);





console.log('\n---------------TASK08---------------\n');
/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]

*/

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

//output entire array
for ( const country of countries){
    console.log(countries);
    break;
}
// array sorted lexicographically

for ( const country of countries){
    console.log(countries.sort());
    break;
}

console.log('\n---------------TASK09---------------\n');
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

*/

const cartoons = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

 for (const name of cartoons){
  console.log(cartoons);
   console.log(cartoons.includes('Pluto'));
   break;
 }

console.log('\n---------------TASK10---------------\n');
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

const arrCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(arrCats.sort()); 
console.log(arrCats.includes('Garfield') && arrCats.includes('Felix'));



console.log('\n---------------TASk11---------------\n');
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
 const numbers = [ 10.5, 20.75, 70, 80, 15.75 ];
  console.log(numbers);

  for( let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
  }


console.log('\n---------------TASK12---------------\n');
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/
const array = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'ruler' ];
console.log(array);

let countBP = 0;

for (let i = 0; i < array.length; i++) {
  let element = array[i];
   if (element[0].toUpperCase() === 'B' || element[0].toUpperCase() === 'P') {
        countBP++;
    }
}
console.log("Elements starting with 'B' or 'P' =", countBP);


let countBookPen = 0;

for (let i = 0; i < array.length; i++){
  let word = array[i];
  if(word.toLowerCase().includes('book') || word.toLowerCase().includes('pen')){
    countBookPen++;
}
}
console.log("Elements having 'book' or 'pen' = ", countBookPen);


console.log('\n---------------TASK13---------------\n');
/*Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2

*/
const numArray = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];
 console.log(numArray);

let count1 = 0;
let count2 = 0;
let count3 = 0;



 for (const num of numArray) {
  if( num > 10) count1++;
  else if (num < 10) count2++;
  else if (num === 10) count3++;
 }

console.log('Elements that are more than 10 =', count1);
console.log('Elements that are less than 10 =', count2);
console.log('Elements that are 10 =', count3);


console.log('\n---------------TASK14---------------\n');
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from
 first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]

*/
const firstArray = [ 5, 8, 13, 1, 2 ];
const secondArray = [ 9, 3, 67, 1, 0 ];

console.log('1st array is =', firstArray);
console.log('2nd array is =', secondArray);

const thirdArray = [];

for(let i = 0; i < firstArray.length; i++) {

 if(firstArray[i] > secondArray[i]) {
  thirdArray.push(firstArray[i]);
} else 
thirdArray.push(secondArray[i]);
}

console.log('3rd array is =', thirdArray);



console.log('\n---------------TASK15---------------\n');

/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns 
the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 
if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1

*/

function firstDuplicate(array) {
     let notDuplicate =[];

      for(i = 0; i < array.length; i++){
      if (notDuplicate.includes(array[i])){
         return array[i];
      }
      else {
      notDuplicate.push(array[i]);
      } 
    }  
      return -1;
}

console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); // 7
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); // abc
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); // 3
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ])); // -1
console.log(firstDuplicate([ 1, 2, 3, 4, ])); // -1


console.log('\n---------------TASK16---------------\n');
/*
Write a function named as getDuplicates() which takes an array argument 
and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array 
if there are no duplicates in the array. For two elements to be considered as duplicated,
 value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/



function getDuplicates(arr) {
  let duplicates = [];
   let storeArray = [];

 for (let i = 0; i < arr.length; i++){
      let element = arr[i];
  if (storeArray.includes(element)){

   if (!duplicates.includes(element)){
    duplicates.push(element);
  }
}else {
     storeArray.push(element);
    }    
   }
  return duplicates;
  }


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));	
console.log(getDuplicates([1, 2, 3, 4, 5, 2, 3]));         
console.log(getDuplicates([true, false, true, false]));  
console.log(getDuplicates([1, 2, 3, 4]));


console.log('\n---------------TASK17---------------\n');
/*
Write a function named as reverseStringWords() which takes a string as an argument
 and returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. 
Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/

function reverseStringWords(str){
  let words = str.split(' ');
  let  reverseArr = [];

 for (let i = 0; i < words.length; i++){
     let word = words[i];
     let reversedWord = '';

   for (let j = word.length - 1; j >= 0; j--){
     reversedWord += word[j]; 
 }
  reverseArr.push(reversedWord);
}
return reverseArr.join(' ');
}

console.log(reverseStringWords("Hello World") );		
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords(""));		
console.log(reverseStringWords("    "));

console.log('\n---------------TASK18---------------\n');
/*
Write a function named as getEvens() which takes 2 number arguments and returns 
all the even numbers as an array stored from smallest even number to greatest even number
 when invoked.
NOTE: Make your code dynamic that works for any numbers and 
return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]

*/
 function getEvens(num1, num2) {
   let evenNums = [];

   let min = Math.min(num1, num2);
   let max = Math.max(num1, num2);

 for (let i = min; i <= max; i++){
   if (i % 2 === 0) { 
    evenNums.push(i);
 }
}
 return evenNums;
}
      console.log(getEvens(2, 7)); // [ 2, 4, 6 ]
      console.log(getEvens(17, 5));// [ 6, 8, 10, 12, 14, 16 ]
      console.log(getEvens(4, 4));// [ 4 ]
      console.log(getEvens(3, 3));// [ ]

console.log('\n---------------TASK19---------------\n');
/*
Write a function named as getMultipleOf5() which takes 2 number arguments and 
returns all the numbers divisible by 5 as an array stored from first found match 
to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array 
if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]

*/
function getMultipleOf5(num1, num2) {
  numArray = []
 let min = Math.min(num1, num2);
 let max = Math.max(num1, num2);

 for (let i = min; i <= max; i++){
  if (i % 5 === 0){
   numArray.push(i)
 }
} 
return numArray.sort((a, b) => a - b);
}

console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15 ]
console.log(getMultipleOf5(23, 5)); // [ 5, 10, 15, 20 ] ** unsure how to fix this
console.log(getMultipleOf5(5, 5)); // [ 5 ]
console.log(getMultipleOf5(2, 4));// [ ]



console.log('\n---------------TASK20---------------\n');
/*
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"

*/

function fizzBuzz(n1, n2) {
  let storeArray = [];
   
  let min = Math.min(n1, n2);
  let max = Math.max(n1, n2);
 
  for (let i = min; i <= max; i++) {
    let str = '';
    if (i % 3 === 0 && i % 5 === 0) {
      str = 'FizzBuzz';
    } else if (i % 3 === 0) {
      str = 'Fizz';
    } else if (i % 5 === 0) {
      str = 'Buzz';
    } else { 
        str = i;
      }
    storeArray.push(str);
  }
   return storeArray.join(' | ');
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));










