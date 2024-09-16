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
     let seen = [];  // Array to keep track of seen elements
 
     for (let ele of arr) {
         if (seen.includes(ele)) {
             return ele;  // Return the first duplicate when found, code finishes.
         }
         seen.push(ele);  // Add element to the seen array if it hasnt been seen in there and carry on with loop
     }
 
     return -1;  // If no duplicates are found, return -1.
 }



console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));



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




















/*
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") countVowels("JavaScript is fun") countVowels("")
-> 2 -> 5 -> 0
*/





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





/*Write a function named as countConsonants() which takes a string word as an argument 
and returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 
countConsonants("Hello World")
 countConsonants("JavaScript is fun")
  countConsonants("")

-> 3 -> 8 -> 12 -> 0

*/





/*
Write a function named as countMultipleWords() which takes an array as an argument 
and returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", " ", "foo bar", " 
countMultipleWords([ "foo", "bar", "foobar", " 
countMultipleWords([ "f o o", "b a r", "foo bar", " 
countMultipleWords([ ])
foo" ])
foobar foo bar
" ]) " ])
-> 1 -> 0 -> 4 -> 0

*/




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


/*www.techglobalschool.com
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true 
if the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1.
 It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) isPrime(2) isPrime(29) isPrime(-5) -> false isPrime(0) -> false isPrime(1) -> false
*/








/*
Write a function named add() which takes two array of numbers as argument and returns
 a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.

add([3, 0, 0, 7, 5, 10], [6, 3, 2]) 
add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34])
 add([-5, 6, -3, 11], [5, -6, 3, -11])

-> [9, 3, 2, 7, 5, 10] ->[16,11,9, 3,2,7,5,10,34] -> [0, 0, 0, 0]

*/




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








/*
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) no13([13, 2, 3])
no13([13, 13, 13 , 13, 13]) no13([])

-> [1, 2, 3 ,4] -> [0, 2, 3]
-> [0, 0, 0, 0, 0]
*/







/*Write a function named removeDuplicates() which takes an array argument and 
returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])
removeDuplicates([1, 2, 5, 2, 3])
removeDuplicates([0, -1, -2, -2, -1])
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
 removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]


*/


/*
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string.
Examples:
noDigit("")
noDigit("Javascript")
 noDigit("123Hello") 
noDigit("123Hello World149")
 noDigit("123Tech456Global149")

-> ""
-> "Javascript" -> "Hello"
-> "Hello World” -> "TechGlobal"
*/





/*
No Vowel
-> ""
-> "Javascript" -> "Hello"
-> "Hello World” -> "TechGlobal"
Write a function named noVowel() which takes a string argument and returns 
a new string with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl" 
noVowel("AEOxyz") -> "xyz" 
noVowel("Javascript") -> "Jvscrpt" 
noVowel("") -> ""
noVowel("125$") -> "125$"
*/






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





/*
Write a function named arrFactorial() which takes an array of numbers as argument
 and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) arrFactorial([0, 5]) arrFactorial([5 , 0, 6]) arrFactorial([])
-> [1, 2, 6, 24] -> [1,120]
-> [120, 1, 720] -> []
*/
























