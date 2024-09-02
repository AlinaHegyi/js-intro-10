console.log('\n---------------TASK01---------------\n');
/*Requirement:
Write a function named countPos() which takes an array of numbers as an argument
 and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/
/* */

   const countPos = (arr) => {
    return arr.filter(num => num > 0).length;
};

console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4
console.log(countPos([0, -1, -2, -3])); // 0

console.log('\n---------------TASK02---------------\n');
/*Requirement:
Write a function named countA() which takes a string argument 
and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0

*/

//  const countA = (str) => {
//  let arr = str.toUpperCase().split('');
//  let counter = 0;
//   arr.forEach((element) => {
//     if(element === 'A') counter++;
//   })
//     return counter;
//   };

const countA = (str) => {
    const letterA = str.toUpperCase().split('').filter((element) => element === 'A');
return letterA.length; 
};

console.log(countA("TechGlobal is a QA bootcamp")); //4
console.log(countA("QA stands for Quality Assurance")); //5
console.log(countA("Cypress"));//0





console.log('\n---------------TASK03---------------\n');
/*Requirement: 
Write a function named as countVowels() which takes a string word as an argument
 and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

const countVowels = (str) => {
    let str2 = 'AEIOU';
   const vowels = str.toUpperCase().split('').filter((letter) => str2.includes(letter));
  return vowels.length;
};

console.log(countVowels('Hello')) // 2
console.log(countVowels('Hello World')) //3
console.log(countVowels('JavaScript is fun')) //5
console.log(countVowels('')) //0


console.log('\n---------------TASK04---------------\n');
/*Requirement: 
Write a function named as countConsonants() which takes a string word as an argument
 and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countConsonants(str) {
   let count = 0;

   for (let i = 0; i < str.length; i++){

    let vowels = 'AEIOUaeiou';
    let char = str[i];

  if (!vowels.includes(char)) {
   count++;
   }
}
   return count;
   };



console.log(countConsonants('Hello')); // 3
console.log(countConsonants('Hello World')); //8
console.log(countConsonants('Javascript is fun')); //12
console.log(countConsonants('')); // 0


console.log('\n---------------TASK05---------------\n');

/*Requirement:
Write a function named countWords() which takes a string argument and 
returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 				-> 4

*/

const countWords = (str) => {
    const numOfWords = str.trim().split(' ');
    return numOfWords.length;
};


console.log(countWords("     Javascript is fun       ")); //3
console.log(countWords("Cypress is an UI automation tool.    ")); //6



console.log('\n---------------TASK06---------------\n');

/*Requirement:
Write a function named as factorial() which takes a number as an argument and 
returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1

*/


console.log('\n---------------TASK07---------------\n');

/*Write a function named as isPalindrome() which takes a string word as an argument
 and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true

*/
const isPalindrome = (str) => {
   return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
}

console.log(isPalindrome('Hello')); //false
console.log(isPalindrome('Kayak')); //true
console.log(isPalindrome('civic')); //true
console.log(isPalindrome('abba')); //true
console.log(isPalindrome('A')); //true
console.log(isPalindrome('ab a')); //false



console.log('\n---------------TASK08---------------\n');
/*

*/





console.log('\n---------------TASK09---------------\n');
/*

*/

console.log('\n---------------TASK10---------------\n');
/*

*/

console.log('\n---------------TASK11---------------\n');
/*

*/

console.log('\n---------------TASK12---------------\n');
/*

*/

console.log('\n---------------TASK13---------------\n');
/*


*/

console.log('\n---------------TASK14---------------\n');
/*


*/

console.log('\n---------------TASK15---------------\n');

/*



*/


