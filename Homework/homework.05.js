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

const countVowelss = (word) => {
   let vowelCounter = 0;
   const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

   for(letter of word){
       if(vowels.includes(letter)) vowelCounter++;
   }
   return vowelCounter;
}



console.log('\n---------------TASK04---------------\n');
/*Requirement: 
Write a function named as countConsonants() which takes a string word as an argument
 and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countConsonants(str) {
   let count = 0;

   for (let i = 0; i < str.length; i++) {

      let vowels = 'AEIOUaeiou';
      let char = str[i];

      if (!vowels.includes(char)) count++;
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

//const countWords2 = (str) => str.trim().split(' ').length

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
function factorial(num) {
   let result = 1;
   for (let i = 2; i <= num; i++) {
      result *= i;
   }
   return result;
}

console.log(factorial(5)); //120
console.log(factorial(4));// 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1

// const factorial = (n) => n === 0 || n === 1? 1: n * factorial(n-1)

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
Write a function named as countMultipleWords() which takes an array as an argument
 and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0

*/

const countMultipleWords = (arr) => {
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
      let words = arr[i].split(' ');
      let wordsCount = 0;
      for (let j = 0; j < words.length; j++) {
         if (words[j].length > 0) {
            wordsCount++;
         }
      }
      if (wordsCount > 1) {
         counter++;
      }
   }
   return counter;
}
const countMultipleWords2 = (arr) => {
   let arrTrimmed = arr.map(x => x.trim());
   return (arrTrimmed.filter(x => x.indexOf(' ') !== -1)).length;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"])); // 1
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "])); // 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])); // 4
console.log(countMultipleWords([])); // 0

console.log('\n---------------TASK09---------------\n');
/*
Write a function named as count3OrLess() which takes a string word as an argument 
and returns the count of the words that has 3 characters or less when invoked.

 Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0

*/

function count3OrLess(str) {
   let count = 0;

   for (let i = 0; i < str.split(' ').length; i++) {
      if (str.split(' ')[i].length <= 3) {
         count++;
      }
   }

   return count;
}

console.log(count3OrLess("Hello")); // 0
console.log(count3OrLess("Hi John")); // 1
console.log(count3OrLess("JavaScript is fun")); //2
console.log(count3OrLess("My name is John Doe")); //3
console.log(count3OrLess("")); // 1

// const count3OrLess = (str) => str.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length

console.log('\n---------------TASK10---------------\n');
/*
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. 
The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

 Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false

*/
function isPrime(n) {
   if (n < 2) return false;

   for (let i = 2; i < n; i++) {
      if (n % i === 0) {
         return false;
      }
   }
   return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

const isPrime = (num) => {
   if(num < 2) return false;
   if(num === 2 || num === 3) return true;
   if(num % 2 === 0 || num % 3 === 0) return false;
}

console.log('\n---------------TASK11---------------\n');
/*
Write a function named add() which takes two array of numbers as argument
 and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.

 Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]

*/


const add = (arr1, arr2) => {
   if (arr1.length < arr2.length) {
      for (let i = arr1.length; i < arr2.length; i++) {
         arr1.push(0);
      }
   }
   if (arr2.length < arr1.length) {
      for (let i = arr2.length; i < arr1.length; i++) {
         arr2.push(0);
      }
   }
   let result = [];
   for (let i = 0; i < arr1.length; i++) result[i] = arr1[i] + arr2[i];
   return result;
}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])) //[9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])) //[16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])) // [0, 0, 0, 0]

//  return arr1.map((value, i) => value + (arr2[i] || 0))
//const add = (arr1, arr2) => {
//    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
//   }



console.log('\n---------------TASK12---------------\n');
/*
Write a function named as removeExtraSpaces() which takes a string word as an argument
 and returns the string back with all extra spaces removed when invoked.

 Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 

*/

//regex solution, shown by Bilal

//  const removeExtraSpaces = (str) => {
//    return str.trim().split(/\s+/).join(' ');
//  }


function removeExtraSpaces(str) {
   let wordsArr = str.trim().split(' ');
   return wordsArr.filter(word => word !== '').join(' ');
};


console.log(removeExtraSpaces('Hello')); // Hello
console.log(removeExtraSpaces("      Hello    World     ")); // Hello World
console.log(removeExtraSpaces("     JavaScript is          fun")); // JavaScript is fun

//const removeExtraSpaces = (str) => str.trim().split(' ').filter(s => s.length > 0).join(' ');


console.log('\n---------------TASK13---------------\n');
/*
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument 
and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
 Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

function findClosestTo10(arr) {
   let closestTo10 = Infinity; 
   for (let i = 0; i < arr.length; i++) { 
      if (arr[i] === 10) continue; 
  else {
         let currentDist = Math.abs(10 - arr[i]);
         let closestDist = Math.abs(10 - closestTo10);
         if ((currentDist < closestDist) || (currentDist === closestDist && arr[i] < closestTo10)) closestTo10 = arr[i];
      }
   }
   return closestTo10;
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -2]));
console.log(findClosestTo10([0, -1, -2]));

const findClosestTo10 = (arr) =>{
   let closestTo10 = Number.MAX_VALUE
   let closestDiff = Number.MAX_VALUE

   for(currentNum of arr){
       if(currentNum === 10) continue;

       let currentDiff = Math.abs(10 - currentNum);

       if(currentDiff < closestDiff || ((currentDiff === closestDiff) && currentNum < closestTo10)){
           closestTo10 = currentNum;
           closestDiff = currentDiff;
       }
   }
   return closestTo10;
}

console.log('\n---------------TASK14---------------\n');
/*
Write a function named as isEmailValid() which takes a string email as an argument
 and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least 2 characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true

*/
function isEmailValid(email) {
   if (email.includes(' ') || (email.indexOf('@') !== email.lastIndexOf('@')) || !email.includes('@') || !email.includes('.')) {
      return false;
   }

   else {
let beforeAt = email.slice(0, email.indexOf('@')); 
let afterAtBeforeDot = email.slice(email.indexOf('@') + 1, email.lastIndexOf('.'));
let afterDot = email.slice(email.lastIndexOf('.') + 1);

if(beforeAt.length >= 2 && afterAtBeforeDot.length >= 2 && afterDot.length >= 2) {
   return true;
}
else {
   return false;
  }
 }
};
//
const isEmailValid = (email) => {
	if(email.includes(' ')) return false;
	if(email.split('@').length !== 2) return false


	const beginning = email.split('@')[0]
	const middle = email.split('@')[1].split('.')[0]
	const end = email.split('@')[1].split('.')[1]

	if(beginning === undefined || middle === undefined || end === undefined) return false

   return (beginning.length >= 2 && middle.length >= 2 && end.length >= 2)
 }




console.log(isEmailValid('johndoe@yahoo'));
console.log(isEmailValid('johndoe@@gmail.com'));
console.log(isEmailValid('johndoe@gmail.com'));
console.log(isEmailValid('@gmail.com'));
console.log(isEmailValid('johndoe@gmail.com'));

console.log('\n---------------TASK15---------------\n');

/*
Write a function named as isPasswordValid() which takes a string email as an argument 
and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true

*/

function isPasswordValid(password) {
    if (password.length < 8 || password.length > 16) {
        return false;

    } else if (password.includes(' ')) {
      return false;
    }
    let hasDigit = false;
    let hasUpperC = false;
    let hasLowerC = false;
    let specialChar = false;

    for (let char of password) {
      let specials = '!@#$%^&*()_+[]{}|;:,.<>?';

        if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
        else if (char >= 'A' && char <= 'Z') {
            hasUpperC = true;
        }
        else if (char >= 'a' && char <= 'z') {
            hasLowerC = true;
        } 
        else if (specials.includes(char)) {
          specialChar = true;
        }
      }
         return hasDigit && hasUpperC && hasLowerC && specialChar;
   
}

console.log(isPasswordValid("")); // false
console.log(isPasswordValid("Abcd1234")); //false
console.log(isPasswordValid("Chicago12345US!#$%")); //false
console.log(isPasswordValid("Chicago123$")); //true
console.log(isPasswordValid("Chicago123$")); //true




const isPasswordValid = (pass) => {
	if(pass.includes(' ')) return false;
	if(pass.length < 8 || pass.length > 16) return false

	let hasUppercase = false;
	let hasLowercase = false;
	let hasDigit = false;
	let hasSpecial = false;

	for(char of pass){
	 if(char >= 'A' && char <= "Z") hasUppercase = true;
	 else if(char >= 'a' && char <= "z") hasLowercase = true;
	 else if(char >= '0' && char <= "9") hasDigit = true;
	 else hasSpecial = true;
	}

 return (hasUppercase && hasLowercase && hasDigit && hasSpecial);

}


