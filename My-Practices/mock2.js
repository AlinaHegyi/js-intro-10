// WHITEBOARD //

/*First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns 
the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, 
value and data types of the elements must be same.
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) // 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])  // 5
firstDuplicate([ 5, '5', 3, 7, 4 ])// -1 
 firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) // 'abc'
 firstDuplicate([ 1, 2, 3]) -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -1

*/
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

/*
Write a function named as getDuplicates() which takes an array argument and returns 
all the duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are 
no duplicates in the array.
 For two elements to be considered as duplicated, value and data types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) 
getDuplicates([ 1, 2, 5, 0, 7 ])
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])
 getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])
Count Vowels
-> [ 0, -7 ]
-> [ ]
-> [ 'foo', 'a’ ] -> [ ]
*/
function getDuplicates(arr) {
  let dups = [];
  let storeArr = [];
  for (const num of arr) {
    if (arr.indexOf(num) !== arr.lastIndexOf(num) && !storeArr.includes(num)) {
      dups.push(num);
      storeArr.push(num);
    }
  }
  return dups;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));

/*
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") //2
 countVowels("JavaScript is fun") //5
  countVowels("") //0
*/

const countVowels = (word) => {
  let vowels = "aeiouAEIOU";
  return word.split("").filter((ele) => vowels.includes(ele)).length;
};

console.log(countVowels("hello"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument 
and returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider 
extra spaces before and after words in the given string.


reverseStringWords("Hello World") 
reverseStringWords("I like JavaScript")
 reverseStringWords("Hello")
  reverseStringWords("") 
  reverseStringWords(" ")

-> "olleH dlroW"
-> "I ekil tpircSavaJ" -> "olleH"
-> ""
-> ""
*/

function reverseStringWord(s) {
  let str = s
    .trim()
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    });
  return str.join(" ");
}

console.log(reverseStringWord("Hello World"));
console.log(reverseStringWord("I like JavaScript"));
console.log(reverseStringWord("Hello"));
console.log(reverseStringWord(" "));

/*Write a function named as countConsonants() which takes a string word as an argument 
and returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 
countConsonants("Hello") 
countConsonants("Hello") 
countConsonants("Hello")
 countConsonants("JavaScript is fun")
  countConsonants("")

-> 3 -> 8 -> 12 -> 0

*/
const countConsonants = (s) => {
  let arr = s.toLowerCase().split("");
  let vowels = "aeiou";
  let consonants = [];
  for (const ele of arr) {
    if (!vowels.includes(ele)) consonants.push(ele);
  }
  return consonants.length;
};

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));

/*
Write a function named as countMultipleWords() which takes an array as an argument 
and returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])
countMultipleWords([ "foo", "bar", "foobar", " foobar', 'foo', 'bar'])
countMultipleWords([ "f o o", "b a r", "foo bar", 'foobar', 'foo', 'bar' ,'fooo ba']) 
countMultipleWords([ ])

-> 1 -> 0 -> 4 -> 0

*/
function countMultipleWords(arr) {
  return arr.filter((ele) => ele.trim().includes(" ")).length;
}
console.log(
  countMultipleWords([
    "f o o",
    "b a r",
    "foo bar",
    "foobar",
    "foo",
    "bar",
    "fooo ba",
  ])
); //4

/*

Write a function named as fizzBuzz() which takes 2 number arguments and returns 
a string composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive)
 and store them in a string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.

NOTE: Make your code dynamic that works for any numbers.
 Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) 
fizzBuzz(12, 5) 
fizzBuzz(5, 5) 
fizzBuzz(9, 6)

-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" -> "Buzz"
-> "Fizz | 7 | 8 | Fizz"


*/

function fizzBuzz(n1, n2) {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  let arr = [];

  for (let i = min; i <= max; i++) {
    if (i % 15 === 0) arr.push("FizzBuzz");
    else if (i % 5 === 0) arr.push("Buzz");
    else if (i % 3 === 0) arr.push("Fizz");
    else arr.push(i);
  }
  return arr.join(" | ");
}

console.log(fizzBuzz(12, 5));

/*
Write a function named as isPalindrome() which takes a string word as an argument and returns
 true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false 
isPalindrome("Kayak") -> true 
isPalindrome("civic") -> true
 isPalindrome("abba") -> true 
isPalindrome("ab a") -> false
 isPalindrome("123454321") -> true 
isPalindrome("A") -> true 
isPalindrome("") -> true

*/
const isPalindrome = (str) => {
  let newStr = str.toLowerCase();
  let reversed = newStr.split("").reverse().join("");
  return newStr === reversed;
};

console.log(isPalindrome("Hello")); //f
console.log(isPalindrome("Kayak")); //t
console.log(isPalindrome("civic")); //t
console.log(isPalindrome("abba")); //t
console.log(isPalindrome("ab a")); //f
console.log(isPalindrome("123454321")); //f
console.log(isPalindrome("A")); //t
console.log(isPalindrome("")); //t

/*
Write a function named add() which takes two array of numbers as argument and returns
 a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.

add([3, 0, 0, 7, 5, 10], [6, 3, 2]) 
add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34])
 add([-5, 6, -3, 11], [5, -6, 3, -11])

-> [9, 3, 2, 7, 5, 10] ->[16,11,9, 3,2,7,5,10,34] -> [0, 0, 0, 0]

*/

function addArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);

  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const val1 = arr1[i] || 0; // Use 0 if arr1[i] is undefined
    const val2 = arr2[i] || 0; // Use 0 if arr2[i] is undefined
    result.push(val1 + val2);
  }

  return result;
}

const array1 = [1, 2, 3];
const array2 = [4, 5];

console.log(addArrays(array1, array2));

// another
const add = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result[i] = (arr1[i] || 0) + (arr2[i] || 0);
  }
  return result;
};

/*
Write a function named noA() which takes an array of strings as argument and will return
 a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"])
 noA(["apple", "123", "ABC", "javascript"])
 noA(["apple", "abc", "ABC", "Alex", "A"])
-> ["javascript", "hello", "123", "xyz"] -> 
["###", "123", "###", "javascript"] -> 
["###", "###", "###", "###", "###"]
*/

const noA = (arr) => {
  return arr.map((ele) => {
    if (ele[0] === "A" || ele[0] === "a") {
      return "###";
    }
    return ele;
  });
};

console.log(noA(["apple", "jiku", "ABC", "Alex", "A"]));

/*No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument
 and will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])
 no3and5([3, 4, 5, 6])
 no3and5([10, 11, 12, 13, 14, 15])

-> [7, 4, 11, 23, 17]
-> [100, 4, 99, 100]
-> [99, 11, 100, 13, 14, 101]

*/

const no3And5 = (arr) => {
  return arr.map((n) => {
    if (n % 15 === 0) return 101;
    if (n % 5 === 0) return 99;
    if (n % 3 === 0) return 100;
    else return n;
  });
};

console.log(no3And5([7, 4, 11, 23, 17]));
console.log(no3And5([3, 4, 5, 6]));
console.log(no3And5([10, 11, 12, 13, 14, 15]));

/*
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) no13([13, 2, 3])
no13([13, 13, 13 , 13, 13]) no13([])

-> [1, 2, 3 ,4] -> [0, 2, 3]
-> [0, 0, 0, 0, 0]
*/
const no13 = (arr) => {
  return arr.map((ele) => (ele === 13 ? 0 : ele));
};

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 33, 4]));
console.log(no13([3, 12, 13, 13, 13]));

/*Write a function named removeDuplicates() which takes an array argument and 
returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])
removeDuplicates([1, 2, 5, 2, 3])
removeDuplicates([0, -1, -2, -2, -1])
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
 removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]

*/
const removeDuplicates = (arr) => {
  newArr = [];
  arr.forEach((ele) => {
    if (!newArr.includes(ele)) newArr.push(ele);
  });
  return newArr;
};

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));

/*
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string.
*/
const noDigit = (str) => {
  return str
    .split("")
    .filter((char) => isNaN(char) || char === " ")
    .join("");
};

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

/*
No Vowel

Write a function named noVowel() which takes a string argument and returns 
a new string with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl" 
noVowel("AEOxyz") -> "xyz" 
noVowel("Javascript") -> "Jvscrpt" 
noVowel("") -> ""
noVowel("125$") -> "125$"
*/
const noVowel = (str) => {
  let vowels = "aeiouAEIOU";
  let newStr = "";
  for (const char of str) {
    if (!vowels.includes(char)) newStr += char;
  }
  return newStr;
};

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

/*

Sum Of Digits
Write a function named sumOfDigits() which takes a string argument
 and returns sum of all digits from the original string.
Examples:
sumOfDigits("Javascript")
 sumOfDigits("John’s age is 29") 
 sumOfDigits("$125.0") 
 sumOfDigits("")
-> 0 -> 11 -> 8 -> 0
*/

const sumOfDigits = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      sum += parseInt(str[i]);
    }
  }
  return sum;
};
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

/*
Write a function named arrFactorial() which takes an array of numbers as argument
 and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])-> [1, 2, 6, 24]
 arrFactorial([0, 5]) ->[1,120]
 arrFactorial([5 , 0, 6])-> [120, 1, 720]
  arrFactorial([]) -> []

*/

const arrFactorial = (arr) => {
  return arr.map((ele) => {
    let factorial = 1;
    for (let i = 1; i <= ele; i++) {
      factorial *= i;
    }
    return factorial;
  });
};

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

// Write a function named as removeExtraSpaces()
//which takes a string word as an argument and returns the string
// back with all extra spaces removed when invoked.

// Examples:
// removeExtraSpaces("Hello")   				        -> "Hello"
// removeExtraSpaces("  	Hello    World 	")   		-> "Hello World"
// removeExtraSpaces(" 	JavaScript is      	fun")   -> "JavaScript is fun"
//removeExtraSpaces("")   					        -> ""

const removeExtraSpaces = (str) => {
  return str
    .trim()
    .split(" ")
    .filter((ele) => {
      if (ele !== " ") return ele;
    })
    .join(" ");
};

function removeExtraSpaces(str) {
  return str
    .split(" ")
    .filter((ele) => {
      if (ele) return ele;
    })
    .join(" ");
}

console.log(removeExtraSpaces("   HELLO   world  "));

/*
Write a function named as getEvens() which takes 2 number arguments 
and returns all the even numbers as an array stored from smallest even number
 to greatest even number when invoked. NOTE: Make your code dynamic that works for
  any numbers and return an empty array if there are no even numbers 
  in the range of given 2 numbers. Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)  	-> [ 2, 4, 6 ]
getEvens(17, 5)  	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)  	-> [ 4 ]
getEvens(3, 3)  	-> [ ]
*/
const getEvens = (n1, n2) => {
  let arr = [];
  for (i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
    if (i % 2 === 0) arr.push(i);
  }
  return arr;
};

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));
console.log(getEvens(0, 8));

// Write a function named as getMultipleOf5() which takes 2 number arguments
// and returns all the numbers divisible by 5 as an array stored from first found match
// to last found match when invoked. NOTE: Make your code dynamic that works for any numbers and
// return an empty array if there are no numbers divisible by 5 in the range of given 2 numbers.
//Assume you will not be given negative numbers.

// Examples:
// getMultipleOf5(3, 17)  	-> [ 5, 10, 15]
// getMultipleOf5(23, 5)  	-> [ 20, 15, 10, 5 ]
// getMultipleOf5(5, 5)  	-> [ 5 ]
//getMultipleOf5(2, 4)  	-> [ ]

const getMultipleOf5 = (n1, n2) => {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  let arr = [];
  for (let i = min; i <= max; i++) {
    if (i % 5 === 0) arr.push(i);
  }
  if (n1 > n2) return arr.reverse();
  return arr;
};

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true 
if the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1.
 It cannot be divided by any other number. The smallest prime number is 2 and 2 is 
 the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) isPrime(2) isPrime(29) isPrime(-5) -> false isPrime(0) -> false isPrime(1) -> false
*/

const isPrime1 = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 2 === 0) return false;
  }
  return true;
};

console.log(isPrime1(5));
console.log(isPrime1(29));
console.log(isPrime1(-5));
console.log(isPrime1(0));

//
//
// Write a function named as removeExtraSpaces() which takes a string word
//as an argument and returns the string back with all extra spaces removed when invoked.

const removeExtraSpaces = (str) => {
  return str
    .split(" ")
    .filter((ele) => ele !== "")
    .join(" ");
};

console.log(removeExtraSpaces("Hello   World    "));

const fizzBuzz = (n1, n2) => {
  let arr = [];
  for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
    if (i % 15 === 0) arr.push("FizzBuzz");
    else if (i % 3 === 0) arr.push("Fizz");
    else if (i % 5 === 0) arr.push("Buzz");
    else arr.push(i);
  }
  return arr.join(" | ");
};

console.log(fizzBuzz(3, 15));
console.log(fizzBuzz(3, 9));
console.log(fizzBuzz(6, 15));

// Write a function named countPos() which takes an array of numbers as an argument
//  and returns how many elements are positive​ when invoked.
const countPos = (arr) => arr.filter((ele) => ele > 0).length;

console.log(countPos([1, 2, -3, -6, 5]));
console.log(countPos([0, 6, -5, 9]));
console.log(countPos([0]));

/*
Write a function named replaceFirstLast() which takes a string
 argument and returns a new string with the first and last characters replaced.
  NOTE: If the length is less than 2, return an empty string.
   NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("")   			    -> ""
replaceFirstLast("Hello")   		-> "oellH"
replaceFirstLast("Tech Global")   	-> "lech GlobaT"
replaceFirstLast("A")   		    -> ""
replaceFirstLast("    A      ")   	-> ""

*/

const replaceFirstLast = (str) => {
  str = str.trim();
  return str.length < 2
    ? ""
    : str[str.length - 1] + str.slice(1, str.length - 1) + str.slice(0, 1);
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("TECH GLOBAL"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("     A     "));

/*
Write a function named removeDuplicates() which takes an array 
argument and returns a new array with all the duplicates removed.

Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])   	
	 -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])   				        
 -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])   			        
 -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  
-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])   			   
  -> ["1", "2", "3"]
*/

const removeDuplicates = (arr) => {
  newArr = [];
  arr.forEach((ele) => {
    if (!newArr.includes(ele)) newArr.push(ele);
  });
  return newArr;
};
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));

//shorter way

const removeDuplicates1 = (arr) => {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
};

//other way

function removeDuplicates(arr) {
  newArr = [];
  arr.forEach((ele) => {
    if (!newArr.includes(ele)) newArr.push(ele);
  });
  return newArr;
}
/*
/*First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns 
the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, 
value and data types of the elements must be same.
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) // 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])  // 5
firstDuplicate([ 5, '5', 3, 7, 4 ])// -1 
 firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) // 'abc'
 firstDuplicate([ 1, 2, 3]) -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -1

*/
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return -1;
}

/*
Write a function named as swap4() which takes a string word as 
an argument and returns the string back with its first and last 4 characters
 swapped when invoked. NOTE: Return empty string if the given string does not have 8 
 or more characters.

Examples:
swap4("abc")   		    -> ""
swap4("JavaScript")   	-> "riptScJava"
swap4("TechGlobal")   	-> "obalGlTech"
swap4("")   			-> ""
swap4("	")   		    -> ""
swap4("Apple")   		-> ""
*/

const swap4 = (str) => {
  if (str.length < 8) return "";
  else {
    let first4 = str.slice(0, 4);
    let last4 = str.slice(-4);
    let middle = str.slice(4, -4);
    return last4 + middle + first4;
  }
};

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("apple"));

/*
Write a function named sumOfDigits() which takes a string 
argument and returns sum of all digits from the original string. ​

Examples:
sumOfDigits("Javascript")   		-> 0
sumOfDigits("John’s age is 29")   	-> 11
sumOfDigits("$125.0")   		    -> 8
sumOfDigits("")   			        -> 0
*/
const sumofDigits = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== " ") {
      sum += Number(s[i]);
    }
  }
  return sum;
};
console.log(sumofDigits(""));

/*
 */

const middleInt = (n1, n2, n3) => {
  return [n1, n2, n3].sort((a, b) => a - b)[1];
};
/*
 */
function middleInt(x, y, z) {
  return x + y + z - Math.max(x, y, z) - Math.min(x, y, z);
}
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 3, 5));
console.log(middleInt(5, 5, 8));
console.log(middleInt(-1, 25, 10));
console.log(middleInt(2, 2, 2));

/*
3Write a function named countPos() which takes an array of numbers
 as an argument and returns how many elements are positive​ when invoked.

Examples:
countPos([-45, 0, 0, 34, 5, 67])   	    -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4
countPos([0, -1, -2, -3])   		    -> 0
*/

const countpos = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr > 0) acc++;
    return acc;
  }, 0);
};
console.log(countpos([-45, 0, 0, 34, 5, 67]));
console.log(countpos([-23, -4, 0, 2, 5, 90, 123]));

/**
 *
 * Write a function named as firstlastWord() which takes a string word as an argument
 *  and returns the first and last words from the given string when invoked.
 *  NOTE: Return empty string if the given string does not have any word.
 *
 */

const firstlastWord = (str) => {
  let arr = str.split(" ");
  return (arr[0] + arr.at(-1)).toString();
};

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord(" "));

/*

*/

const removeExtraSpaces = (str) => {
  str = str.trim();
  return str
    .split(" ")
    .filter((ele) => ele !== " ")
    .join(" ");
};
console.log(removeExtraSpaces("    Javascript   is   fun"));

/*
Write a function named as swaP4() which takes a string word as an argument
 and returns the string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters.
*/
const swaP4 = (str) => {
  if (str.length < 8) return "";
  else return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
};

/**
 

 */
const countOcurrences = (str1, str2)
