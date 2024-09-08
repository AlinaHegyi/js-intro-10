

const { getRandomNumber } = require('../utils/MathHelper.js');



console.log('\n---------------TASK01---------------\n');

/*Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected Output 1: false

Test data 2:
65, 80, 90

Expected Output 2: true

*/
 let num1 = getRandomNumber(1, 100);
 let num2 = getRandomNumber(1, 100);
 let num3 = getRandomNumber(1, 100);

console.log(num1);
console.log(num3);
console.log(num1);

 if ((num1 + num2 + num3) / 3 >= 50) {
    console.log('true');
  }
 else {  
    console.log('false');
}



console.log('\n---------------TASK02---------------\n');
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: TRIPLE MATCH

Test data 4:
1, 1, 2
Expected Output 4: DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: NO MATCH
*/

let num4 = getRandomNumber(1, 3);
let num5 = getRandomNumber(1, 3);
let num6 = getRandomNumber(1, 3);

if(num4 === num5 && num5 === num6) {
    console.log('TRIPLE MATCH');
}
else if (num4 === num5 || num5 === num6 || num4 === num6) {
     console.log('DOUBLE MATCH');
}
else {
     console.log('NO MATCH');
 }


console.log('\n---------------TASK03---------------\n');

/*
Write a function named as hasA() which takes a string word as an argument and returns true
 if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true

*/

function hasA(word){
 if (word.includes('a') || word.includes('A')) {
 return true;
}
 else {
 return false;
}
}

console.log(hasA('Tech'));
console.log(hasA('Global'));
console.log(hasA(''));
console.log(hasA('Apple'));


console.log('\n---------------TASK04---------------\n');

/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if 
the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"

*/

function doubleTripleWord(word) {
    if (word.length % 2 === 0){ 
  return word.repeat(3);
}
 else {
 return word.repeat(2);
 }
}

console.log(doubleTripleWord('Tech'));
console.log(doubleTripleWord('Apple'));
console.log(doubleTripleWord(''));
console.log(doubleTripleWord(' '));
console.log(doubleTripleWord('1'));
console.log(doubleTripleWord('22'));



console.log('\n---------------TASK05---------------\n');

/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and returns 
the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> 'Hello'
firstWord("I like JavaScript") 	-> 'I
firstWord("Hello") 		-> 'Hello'
firstWord("") 		-> ''
firstWord("    ") 		-> ''
*/

function firstWord(string) {
 let allWords = string.split(' ');

 if (allWords.length > 0) {
    return allWords[0];
 }
 else {
   return '';
 }
}

console.log(firstWord('Hello World'));  // Hello
console.log(firstWord('I like JavaScript'));// I
console.log(firstWord('Hello'));// Hello
console.log(firstWord(''));// ''
console.log(firstWord(' '));// ''


console.log('\n---------------TASK06---------------\n');

/*
Requirement:
Write a function named as lastWord() which takes a string word as an argument
 and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> 'World'
lastWord("I like JavaScript") 	-> 'JavaScript'
lastWord("Hello") 		-> 'Hello"
lastWord("") 		-> ''
lastWord("    ") 		-> ''

*/
function lastWord(string) {
    let theWords = string.split(' ');
    
    if (theWords.length > 0) {
       return theWords.slice(-1);
    }
    else {
      return '';
    }
   }

   console.log(lastWord('Hello World'));  // 'World'
   console.log(lastWord('I like JavaScript'));//  'JavaScript'
   console.log(lastWord('Hello'));//   'Hello'
   console.log(lastWord(''));//  '' - empty string
   console.log(lastWord(' '));// ''  -empty string
   

console.log('\n---------------TASK07---------------\n');


/*
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument
 and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""


*/
function firstLastWord(str) {
let newStr = str.split(' ');
 if (newStr.length < 0) {
    return '';
 }
 else
   return newStr[0] + newStr.slice(-1);
}

console.log(firstLastWord('Hello World'));  //  'HelloWorld'
console.log(firstLastWord('I like JavaScript'));//  'IIJavaScript'
console.log(firstLastWord('Hello'));//   'HelloHello'
console.log(firstLastWord(''));//  '' - empty string
console.log(firstLastWord(' '));// ''  -empty string


console.log('\n---------------TASK08---------------\n');

/*
Write a function named as startVowel() which takes a string word as an argument and returns true 
if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false

*/
function startVowel(anyWord) {
  let anyWord2 = anyWord.toLowerCase()
if (anyWord2.startsWith('a') || anyWord2.startsWith('e') || anyWord2.startsWith('i') || anyWord2.startsWith('o') || anyWord2.startsWith('u'))
 return true;
else {
   return false;
}
  }

console.log(startVowel('Hello')); //false
console.log(startVowel('Apple')); //true
console.log(startVowel('orange')); //true
console.log(startVowel('')); //false
console.log(startVowel('   ')); //false
console.log(startVowel('123')); // false

//another way with string and includes







console.log('\n---------------TASK09---------------\n');

/*   
Write a function named as swap4() which takes a string word as an argument and returns the string back 
with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""

*/
 function swap4(str) {
   str = str.trim();
   if (str.length < 8) {
      return '';    
   }
    else {
     let first4 = str.slice(0, 4); //Java
     let last4 = str.slice(-4); // ript
     let middle = str.slice(4, -4); // Sc

     return last4 + middle + first4;
    }
 }
   
console.log(swap4('abc')); // ''
console.log(swap4('JavaScript')); //riptScJava
console.log(swap4('TechGlobal')); //obalGLtECH
console.log(swap4('')); //''
console.log(swap4('    ')); // ''
console.log(swap4('Apple')); // ''


console.log('\n---------------TASK10---------------\n');

/*
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/

function swapFirstLastWord(words) {
   let word = words.split(' ');
  if (word.length < 2) {
   return false;
  } 
  else {
    let firstWord = word[0];
    let lastWord = word[word.length - 1];
    let middleWords = word.slice(1, -1);
    return `${lastWord} ${middleWords} ${firstWord}`;
  }
}
  
console.log(swapFirstLastWord('I like JavaScript'));  //'Javascript like I''
console.log(swapFirstLastWord('Apples'));


// different solution. with trim to get rid of spaces








