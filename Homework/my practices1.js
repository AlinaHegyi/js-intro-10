
console.log(4 >= 3 && 5 * 2 === "10" || 7 !== "7" && "dog" === "cat");
//false or false 
 //false



let spell = "Supercalifragilistic" ;

console.log(spell.length); //20

console.log(spell.toUpperCase()); //SUPERCALIFRAGILISTIC
console.log(spell.charAt(8)); //'i'
console.log(spell[8]); //'i'
console.log(spell[23]); // undefined


let quote = 'When life gives you lemons, make lemonade';

console.log(quote.indexOf('gives')); //10
console.log(quote.startsWith('When'));  //true
console.log(quote.endsWith('ade')); //true
console.log(quote.lastIndexOf('gives')); //10







//create array ['']
let colors = ['blue', 'green', 'yellow'];
console.log(colors);
 //length property
const names = ['john', 'zoli', 'alina', 'oliver', 'mara'];
const size = names.length;
console.log(size); //5
 //indexes and length
  let name = names[3];
  console.log(name);//oliver is the third name, because we start counting from 0

 let firstName = names[0];
let lastName = names[names.length - 1]; 

console.log(firstName); //john
console.log(lastName);  //mara

//objects
 const userN = {name: 'Dean',
    age: 34,
    address: 'China'};

console.log(userN.name); //dean  //both these do the same thing, we used dot notation or bracket notation 
//to get the value of a specific key
console.log(userN['age']); //34

//updating a property in the object
 userN.name = 'jane';
console.log(userN.name);

//adding a new peropert
userN.lname = 'doe';
console.log(userN); //{ name: 'jane', age: 34, address: 'China', lname: 'doe' }
//deleting a property
 delete userN['age'];
console.log(userN);


//Math functions//
   //   .abs()  - converts number to absoulte number,positive

console.log(Math.abs(34.65)); //returns 34.65
console.log(Math.abs(3 + 5 - 12)); // returns 4


  
/*Write a program that calculates and outputs the area and perimeter of a rectangle.
Area = a*b, perimeter = 2*(a+b)
*/
 let side1 = 2; 
let  side2 = 4;
let area = (side1 * side2);
let perimeter = 2 * (side1 + side2);
console.log(area);
console.log(perimeter);



//  .ceil() - rounds up to whole number
//   .floor() -rounds down the decimals, going to whole number.
//   .round()  - rounds up or douwn taking in considerantion the next decimal too
//   .trunc()  - completely cuts the decimal off, doesn't care about rounding.

console.log(Math.ceil(15.76));  //16
console.log(Math.ceil(23.19));  //24
console.log(Math.floor(15.76));  //15
console.log(Math.floor(23.19));  //23
console.log(Math.round(15.76));  //16
console.log(Math.round(23.19));  //23

console.log(Math.trunc(15.76));  //15
console.log(Math.trunc(23.19));  //23

console.log(Math.floor(23.596734));//23
console.log(Math.trunc(0.009));   //0


// max() min()  pwr()

let num1 = 34, num2 = 20, num3 = 23;
 
let maxNum = Math.max(num1, num2, num3);
let minNum = Math.min(num1, num2, num3);
 console.log(`${maxNum - minNum}`); //14

console.log(Math.max(12, 45, 67, -76, 12,-98)); //67

//pwr() but we have ** and it's a better method.


//RANDOM NUMBERS//    .random()  

let randomNumber = Math.random(); // returns a random number between 0 and 1, 1 is not included

let ranNum0_9 = Math.random() * 10;
console.log(randomNumber); //
console.log(Math.floor(ranNum0_9));//  maximum number it can get is upto 10, but 10 not included
console.log(Math.ceil(ranNum0_9));
console.log(Math.trunc(ranNum0_9));
console.log(Math.round(ranNum0_9));

//get a random number between 1 and 10, both included
let ranNum1_10 = Math.random() * 10;
console.log(Math.ceil(ranNum1_10)); 

//get a random number between 0 and 25 , both included
     //RULE BELLOW (ONLY WHEN YOUR RANGE STARTS WITH 0)
    /*1. gen a random number between 0 and 1
      2. multiply this number with the amount of numbers we have  *25 + 1 because we count the 0 too.  
      3. floor the result 
      */
let ranNum0_25 = (Math.floor(Math.random() * 26));

console.log(ranNum0_25);


/* 
Assume you are given a name let name = "Johnathan"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them
*/

let name1 = 'Johnathan';
console.log(name1.length);//9
console.log(name1[0]);//J
console.log(name1.at(-1));//n
console.log(name1.slice(0, 3));//Joh
console.log(name1.slice(6));//han



  //FORMULA - use this when your range doesnt start at 0
  //  Math.floor(Math.random) * (max - min +1) + min//

  //get a random number between 234 and 1232, both included
  let ranNum234_1232 = Math.random(); 
 console.log(Math.floor(Math.random() * (1232 - 234 + 1)) + 234);

/* Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below message
Expected result:
The random number * 5 = {result}    
*/

let ranNum0_50 = Math.floor(Math.random() * 51);
 let result = ranNum0_50 * 5;
//
console.log(`The random number * 5 = ${result}`);

/* Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/
//generate 2 random numbers
 let randomNum1 = (Math.floor(Math.random()) * 10) + 1;
let randomNum2 = (Math.floor(Math.random()) * 10)+ 1;

//find the min and max numbers
let min = Math.min(randomNum1, randomNum2);
let max = Math.max(randomNum1, randomNum2);

//find the abs difference
 let difference = Math.abs(randomNum1 - randomNum2);

//result
console.log(`min number = ${min}`);
 console.log(`max number = ${max}`);
 console.log(`difference = ${difference}`);       



/////////Recaps//////

//find a rand number between 111 and 126 both included;

let random = Math.floor(Math.random() * ( 126 - 111 + 1) + 111); //range is always max - min  + 1
  console.log(random);


/* Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is even, print true.
Otherwise, print false.
*/
let random1_10 = Math.floor(Math.random() * 10) + 1;
let isEven = (random1_10 % 2 === 0);

console.log(random1_10);
console.log(isEven);


/* Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
*/

  let random1 = Math.floor(Math.random() * 10) + 1;
   let random2 = Math.floor(Math.random() * 10) + 1;
   smallest = Math.min(random1, random2);
   console.log(random1, random2);
    console.log(smallest);


/* 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns the first two character of
 the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/
function firstTwoCharacters(firstNam) {
return firstNam.substring(0, 2); 
}

 console.log(firstTwoCharacters('A')); 
 console.log(firstTwoCharacters('january')); 

/* 
Write a function named as shorter() which takes two string words as arguments and returns the string that has less characters when 
invoked.
NOTE: If both of the words have the same length, then return the second string.
*/

function shorter(word1, word2) {
 if ( word1.length === word2.length) {
  return word2;
 } else if (word1.length < word2.length){
      return word1;
 } else return word2;
}

console.log(shorter('Go', 'Home'));
console.log(shorter('Apples', 'bananas'));
console.log(shorter('Hello', 'You'));




//exercises


let str = 'Trandafir';
console.log(str[5]);
console.log(str.charAt(5));
console.log(str.at(5));

//get last character
 console.log(str[str.length - 1]);

let city = 'Rome';

console.log(city[-1]); //undefined
console.log(city.charAt(-1)); //empty string
console.log(city.at(-1)); // e. returns the last character

console.log(city[4]); // undefined
console.log(city.charAt(4)); // empty string
console.log(city.at(4)); // undefined


/*  
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 

Math.floor(Math.random() * (max - min + 1) + min)
*/

function getRandomNumber (num1, num2) {
  return Math.floor(Math.random() * (Math.max(num1, num2) - Math.min(num1, num2) + 1) + Math.min(num1, num2));
 
 }
 
 console.log(getRandomNumber(3, 5));
 console.log(getRandomNumber(5, 3));
 console.log(getRandomNumber(-5, 15));



//exercises

console.log('TechGlobal'.replace('Tech', '').toUpperCase().split('')); //'G','L','O','B','A','L'

let s = 'TechGlobal';
console.log(s.slice(s.indexOf('l'), s.lastIndexOf('l')).replace('O', '###').toUpperCase());  //LOBA
 
/*  
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

*/
 let string ='';

  //console.log(charAt(string.length / 2 + 1));
 // console.log(charAt(string.length / 2 - 1));

  let middle = string.length / 2;
  let midCharacters = string.charAt(middle - 1) + string.charAt(middle);
    console.log(midCharacters); //an



/*   
/*
Requirement:
Write a function named as tripleWord() which takes a string word as an argument and 
returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.
 Examples:
tripleWord("Tech") 	-> "TechTechTech"
tripleWord("Global") 	-> "GlobalGlobalGlobal"

*/
function tripleWord(wordswords) {

return wordswords.repeat(3);
}

console.log(tripleWord('oh'));





/*  
Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle 
when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula:
Area: x * y
Perimeter 2 * (x + y)
*/
function rectangleArea(x, y){
return x * y;
}

function rectanglePerimeter(x, y){
return 2 * (x + x);
}

 console.log(rectangleArea(4, 6)); //24
 console.log(rectanglePerimeter(4, 6)); //16

/*

Write 2 functions named as squareArea() and squarePerimeter() 
which calculate the area and perimeter of a square when invoked.

NOTE: Assume the side of the square is x.

*/
 function squareArea(x) {
 return x * x;

 }

 function squarePerimeter(x) {
return 2 * (x + x);

 }

console.log(squareArea(6));
console.log(squarePerimeter(6));


/* 
Requirement: TASK 10
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

*/
let string4 = 'I miss my home very much';

console.log(string4.split(' ').length); //6

//

let age = Math.floor(Math.random() * 100 + 1);
console.log(age >= 16);



const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/

let r2 = getRandomNumber(-10, 10);
console.log(r2);



let num = Math.floor(Math.random() * 50) + 1;
 console.log(num % 7 === 0) ;

 let um1 = Math.floor(Math.random * 10) + 1;
 let um2 = Math.floor(Math.random * 10) + 1;
 let um3 = Math.floor(Math.random * 10) + 1;
 console.log(Math.min(um1, um2, um3));


 let num5 = Math.floor(Math.random() * 10) + 1;
 let num7 = Math.floor(Math.random() * 10) + 1;
 let num6 = Math.floor(Math.random() * 10) + 1;
 console.log((num7 + num5 + num6) / 3);


//
 function hasFive(str) {
    return (str.length >= 5);
 }
 console.log(hasFive('alina'));
 console.log(hasFive('ali'));



 // write a function that takes a string as argument and teturns last 2 characters
 function lastTwoCharacters(str){
  return str.slice(-2);  
  }
 console.log(lastTwoCharacters('alina'));
 console.log(lastTwoCharacters('a'));
 console.log(lastTwoCharacters(''));
 console.log(lastTwoCharacters(' '));
 console.log(lastTwoCharacters('1'));

// solve with if-else and with switch
/*
Generate a random number bt 1 and 10 both included
if the number is 1, print '3 POINTS'
if the number is 2, print '2 POINTS'
if the number is 3, print '1 POINT'

if the number is anything else , print '0 POINT'
*/
number = Math.floor(Math.random() * 10) + 1;

if (number === 1) console.log('3 POINTS')
  else if(number === 2) console.log('2 POINTS');
  else if (number === 3) console.log('1 POINT');
    else console.log('0 POINT');


    // SWITCH
 switch(number) {
   case 1: console.log('3 POINTS');
     break;
   case 2 : console.log('2 POINTS');
     break;
   case 3 : console.log('1 POINT');
     break;
   default: console.log('0 POINT');
 }



console.log("3" * "5" >= 15 && true == 1 && "   " == false && "" === false);



