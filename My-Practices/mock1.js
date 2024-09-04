/*  
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 
2 -> true
*/

random1_10 = Math.floor(Math.random() * 10) + 1;
console.log(random1_10 % 2 === 0);


/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 2 -> false
*/
let rando1_10 = Math.floor(Math.random() * 10) + 1;
 console.log(rando1_10 % 2 !== 0);

/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is positive, print true.
Otherwise, print false.

*/
 ranNum = Math.floor(Math.random() * 11) - 5;
console.log(ranNum > 0);


/*  
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false
*/
ranNum2 = Math.floor(Math.random() * 11) - 5;
console.log(ranNum2 < 0);

/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false 5 -> true 20 -> true 37 -> false 50 -> true
*/
 let ran1_50 = Math.floor(Math.random() * 50 + 1);
console.log(ran1_50 % 5 === 0);

/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 7 -> true 35 -> true 49 -> true 50 -> false

*/
let random1_50 = Math.floor(Math.random() * 50 + 1);
console.log(random1_50 % 7 === 0);

/*  
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 2 -> true 5 -> false 10 -> true
*/
let random1_ = Math.floor(Math.random() * 10) + 1;
console.log(random1_ % 2 === 0);

/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 2 -> false 5 -> true 10 -> false
*/
let random2_ = Math.floor(Math.random() * 10) + 1;
console.log(random2_ % 2 !== 0);
/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the sum of the numbers and print it.
Examples: 3,5
7,3
5,5
1, 10 10, 1
->8 ->10 ->10 -> 11 -> 11
*/
let ranN1 = Math.floor(Math.random() * 10) + 1
let ranN2 = Math.floor(Math.random() * 10) + 1
console.log(ranN1 + ranN2);



/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the absolute difference of the numbers and print it.
Examples:
3,5 ->2     7,3 ->4    5,5 ->0    1,10 ->9     10,1 ->9
*/
let ranN3 = Math.floor(Math.random() * 10) + 1
let ranN4 = Math.floor(Math.random() * 10) + 1
  console.log(Math.abs(ranN3 - ranN4));
  console.log(`The absolute difference is : ${Math.abs(ranN3 - ranN4)}`);

/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it.
 */
let ranN5 = Math.floor(Math.random() * 10) + 1
let ranN6 = Math.floor(Math.random() * 10) + 1
console.log(`The product is : ${ranN5 * ranN6}`)

/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the square of the number and print it.
Examples:
1 ->1
2 ->4
5 ->25 10 -> 100 */

let ranN7 = Math.floor(Math.random() * 10) + 1;
console.log(`The square of the number is ${ranN7 * ranN7}`);

/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it.
Examples:
1 ->1
2 ->8
5 ->125 10 -> 1000  
*/
let ranN8 = Math.floor(Math.random() * 10) + 1
console.log(ranN8);
console.log(`The cube of the number is ${ranN8 * ranN8 * ranN8}`);

/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 ->1.6
*/

let mileUnit = Math.floor(Math.random() * 10) + 1;
console.log(mileUnit);
console.log(mileUnit * 1.6);


/*
Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 ->2.2 20 ->44 75 -> 165 100 -> 220 */
let numK = Math.floor(Math.random() * 100) + 1
console.log (`${numK} kilograms = ${numK * 2.2} pounds.`)

/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). If the numbers are equal, print true.
Otherwise, print false.
Examples:
1,1 -> true
1,2 -> false
2,3 -> false 2,2 -> true 3,3 -> false  */

let num1 = Math.floor(Math.random() * 3) + 1;
let num2 = Math.floor(Math.random() * 3) + 1;
console.log(num1 === num2);

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false 15 -> false 16 -> true 45 -> true 100 -> true
*/
let age = Math.floor(Math.random() * 100) + 1;
 console.log(age >= 16);

/*

Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5,2 ->2   7,3,1 ->1  5,5,5 ->5   1,10,9 ->1   10,1,2 ->1  */

let n1 = Math.floor(Math.random() * 10) + 1;
let n2 = Math.floor(Math.random() * 10) + 1;
let n3 = Math.floor(Math.random() * 10) + 1;
console.log(Math.min(n1, n2, n3));

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5 7,3,2 ->4 5,5,5 ->5 1,10,7 ->6 10,1,1 ->4  */
let n4 = Math.floor(Math.random() * 10) + 1;
let n5 = Math.floor(Math.random() * 10) + 1;
let n6 = Math.floor(Math.random() * 10) + 1;
let average =(n4 + n5 + n6) / 3;

console.log(`The average of numbers is ${average.toFixed(2)}`);

/*
Calculate the absolute difference between max and min of 3 random numbers.

Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Calculate the greatest and the smallest numbers 
and print their absolute difference.
Examples:
3,5,2 ->3 7,3,1 ->6 5,5,5 ->0 1,10,9 ->9 10,1,2 ->9
*/
let n01 = Math.floor(Math.random() * 10) + 1;
let n02 = Math.floor(Math.random() * 10) + 1;
let n03 = Math.floor(Math.random() * 10) + 1;
    
console.log(Math.max(n01, n02, n03) - Math.min(n01, n02, n03));

/*
Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). Find which quarter of the range the number
 falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75 
4th quarter is 76-100
Examples:
15 -> 1st quarter 73 -> 3rd quarter 39 -> 2nd quarter 87 -> 4th quarter */
const { getRandomNumber } = require('../utils/MathHelper.js');

  let num = getRandomNumber(1, 100);

if (num <= 25) console.log('Number is in 1st quarter');
  else if(num <= 50) console.log('number is 2nd quarter');
  else if (num <= 75) console.log('Number is in 3rd quarter');
 else console.log('Number is in 4th quarter');


/*
Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half
87 -> 2nd half 100 -> 2nd half  */

let number10 = Math.floor(Math.random() * 100) + 1;

if (number10 <= 50) console.log('The number is in the 1st half');
else console.log('The number is in the 2nd half');


/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). If the sum of the random numbers is even,
 print true.
Otherwise, print false.
  Examples: 3,5
7,3
5,5
1, 10 10, 1
-> true -> true -> true -> false -> false  */
let ran01 = Math.floor(Math.random() * 10) + 1;
let ran02 = Math.floor(Math.random() * 10) + 1;
console.log((ran01 + ran02) % 2 === 0);


/*
Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
 If the product of the random numbers is odd, print true.
Otherwise, print false.
  Examples: 3, 5
7, 3
5, 5
1, 10 10, 1
-> true -> true -> true -> false -> false  */

let ran09 = Math.floor(Math.random() * 10) + 1;
let ran08 = Math.floor(Math.random() * 10) + 1;
let theProduct = ran09 * ran08;

console.log(theProduct % 2 !== 0);

/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples: rectangleArea(5, 4) rectangleArea(3, 7) rectangleArea(6, 10)
-> 20 -> 21 -> 60  */
function rectangleArea(x, y) {
  console.log(`The rectangle area is ${x * y}`);
}

 rectangleArea(6, 10); //
/*
Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
Examples: rectanglePerimeter(5, 4) rectanglePerimeter(3, 7) rectanglePerimeter(6, 10)
-> 18 -> 20 -> 32
*/
function rectanglePerimeter(x, y) {
 console.log(`${2 * (x + y)}`);

}
rectanglePerimeter(2, 6); //18


/*
 Area of a square
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
 Examples: squareArea(5) squareArea(3) squareArea(6)
-> 25 -> 9 -> 36
*/
function squareArea(x) {
console.log(x * x);
}
squareArea(9); //81

/*
Perimeter of a square.
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked.
 NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
Examples: squarePerimeter(5) squarePerimeter(3) squarePerimeter(6)
Double The Word
-> 20 -> 12 -> 24
*/
function squarePerimeter(x) {
    console.log(4 * x);

}
squarePerimeter(8);


/*
Write a function named as doubleWord() which takes a string word as an argument and returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech" doubleWord("Global") -> "GlobalGlobal"*/

function doubleWord(word) {
 return word.repeat(2);

}
console.log(doubleWord('Hello')); //HelloHello

/*
First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the first character 
of the given 
word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T" firstCharacter("Global") -> "G"
*/

function firstCharacter(word){
    return word[0];
}
console.log(firstCharacter('Family')); //F



/*
First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns the first 
two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.  */

function firstTwoCharacters(hello) {
  return hello.slice(0, 2);

}

console.log(firstTwoCharacters('TechGlobal')); //'Te'



/*
Write a function named as lastCharacter() which takes a string word as an argument and returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples: lastCharacter("Tech") lastCharacter("Global") lastCharacter(" ") lastCharacter("123")
 */
 function lastTwoCharacters(strings){
    return strings.slice(-2);
 }

console.log(lastTwoCharacters('mornings')); //gs




/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns the last two characters
 of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: lastTwoCharacters("Tech") lastTwoCharacters("Global") lastTwoCharacters("") lastTwoCharacters(" ") lastTwoCharacters("1")
           -> "ch"                               -> "al"                         -> ""              -> " "                     -> "1"
*/

function lastTwoCharacters(words){
   return words.slice(-2);
}
console.log(lastTwoCharacters('hello'))// lo
console.log(lastTwoCharacters('  '))// '  '

/*
First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and returns 
the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.  */

function firstLast(any){
   if (any.length < 2) return any;
  else return any.charAt(0) + any.slice(-1);
}
console.log(firstLast('hello'));
console.log(firstLast('h'));


/*
Write a function named as hasFive() which takes a string word as an argument and returns true if given string has
 at least 5 characters, and false otherwise when invoked.
Examples: hasFive("Tech") hasFive("Global") hasFive("") hasFive("12345") hasFive("hello")
Middle
-> false -> true -> false -> true -> true  */


function hasFive(any) {
    if (any.length >= 5)  {

         return true;

 } else 
 
{  return false;
    }
}
console.log(hasFive('grt'));//false
console.log(hasFive('great'));//true


/*
Write a function named as middle() which takes a string word as an argument and returns the middle character 
if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples: middle("Tech") middle("Global") middle("abcde") middle("1") middle("abc") middle(“1234”)
-> "ec" -> "ob" -> "c" -> "1" -> "b" -> "23"
*/
 function middle(str) {
  if (str.length % 2 !== 0) return  str.charAt(Math.floor(str.length / 2));
    else if (str.length % 2 === 0) return str.slice(str.length / 2 - 1, str.length / 2 + 1);
   else return '';
 }
 

console.log(middle("many")); // an
console.log(middle("two")); // w
console.log(middle('manymore')); //ym


/*
Longer String
Write a function named as longer() which takes two string words as arguments and returns the string that has more characters
 when invoked.
NOTE: If both of the words have the same length, then return the first string.  */

function longer(words1, words2) {
   if (words1.length >= words2.length) return words1;
    else return words2;
    } 
    

console.log(longer('one', 'two')); //one
console.log(longer('three', 'four')); //three 
console.log(longer('six', 'seven')); //six

/*
 Write a function named as shorter() which takes two String words as arguments and returns the String has less characters
  when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples: shorter("Tech", "Global") shorter("Hello", "Hi") shorter("Hello", "World")

-> "Tech" -> "Hi"
-> "World"  
*/
 function shorter(word1, word2) {
  if (word1.length < word2.length) {
    return word1;
  } else {
    return word2;
  }
 }
console.log(shorter('Tech', 'Global'));
console.log(shorter('Hello', 'Hi'));
console.log(shorter('Hello', 'World'));
console.log(shorter('Hi', 'We'));






/*
Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples: concat("Tech", "Global") concat("Hello", "World") concat("", "abc") concat("123", "1234")
-> "TechGlobal" -> "HelloWorld" -> "abc"
-> "1231234"
*/
 function concat(word1, word2) {
 return word1 + word2;
  
 }
console.log(concat('Hello', 'World')); //HelloWorld
console.log(concat('123', '456')); //123456

/*
 Starts With Vowel

 Write a function named as startsVowel() which takes a string word as an argument and returns true 
 if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples: startsVowel("Tech") startsVowel("Apple") startsVowel("abc")
 
*/
 function  startsVowel(str) {
  let str1 = 'aeiouAEIOU';
  return str1.includes(str[0]);
 }

console.log(startsVowel('rose'));
console.log(startsVowel('Tech'));
console.log(startsVowel('abcd'));
console.log(startsVowel('Apple'));



// logical and comparison

console.log((3 == "3" || 2 + 5 === "7") && !( 5 < 10 || !false));

console.log(( !true && !false) || 5 * 2 === true * 10);

 console.log( "3" * "5" >= 15 && true == 1 && " " ==  false && "" === 0);

 console.log(!(5**(10/5)===25||5==="5"||3>=5));

console.log(!(2+2===8/2&&!false&&10%2===0)||25%4=="1");

 console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange"));

 console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false));

 console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false));

 console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat"));

 console.log(( 20 % 6 !== 0 && "apple" === "orange" ) || !( 2 + 2 === 4 && true));

 console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10));

 console.log((5 + 3 >= "8" && 2 ** 3 === "8" ) || !( false || true));

 console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true));

 console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0));

 console.log((5 * 2 === 9 || true ) && !(10 - 5 !== 5 && 10 % 3  === 1));




















