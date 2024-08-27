
 //////////LOOPS/////ARRAYS///////



//check if  ''hello'' contains vowels without using the includes function
//( create my own includes function)

function myIncludes (word, letter) {
  for(let i = 0; i < word.length; i++){
    let currentLetter = word[i]
    if (letter === currentLetter) return true;
  }
  return false
}

console.log(myIncludes('techGlobal', 'o'));

//write a program that outputs all the numbers that are divisible by 7 from 1 to 100.

for( i = 1; i <= 100; i++){
  if (i % 7 === 0) console.log(i);
}

// exercises

//1. For Loop Exercises  
/*
	1.	Print Numbers 1 to 10
	2.	Sum of Numbers 1 to 100
	3.	Print Multiples of 5 Up to 100
	4.	Create a Pattern   •	Create a pattern with asterisks (*). 
    For example:
     *
     **
     ***
     ****
     *****

*/









 /*
2. While Loop Exercises

	1.	Print Numbers 1 to 10
	2.	Sum of Numbers 1 to 100
	3.	Count Down from 10 to 1
	4.	Find the First Number Greater than 50 Divisible by 7

*/










/*
3. Do-While Loop Exercises

	1.	Print Numbers 1 to 10
	2.	Sum of Numbers 1 to 100
	3.	Print Even Numbers Between 1 and 20
	4.	Prompt User Until They Enter “yes”
	•	Use prompt to get user input until they type “yes”.
*/


/*
Here are some exercises to help you practice and get comfortable with array methods in JavaScript:
### 1. **Sum of Array Elements**
   - **Task**: Write a function that takes an array of numbers and returns the sum of all the numbers.
   - **Hint**: Use the `.reduce()` method.
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   // Your code here
   ```
### 2. **Find the Largest Number**
   - **Task**: Write a function that takes an array of numbers and returns the largest number.
   - **Hint**: You can use `.reduce()` or the spread operator with `Math.max`.
   ```javascript
   const numbers = [3, 67, 15, 92, 29];
   // Your code here
   ```
### 3. **Filter Even Numbers**
   - **Task**: Write a function that takes an array of numbers and returns a new array containing only the even numbers.
   - **Hint**: Use the `.filter()` method.
   ```javascript
   const numbers = [10, 23, 45, 66, 78, 91];
   // Your code here
   ```
### 4. **Double the Array Elements**
   - **Task**: Write a function that takes an array of numbers and returns a new array where each number is doubled.
   - **Hint**: Use the `.map()` method.
   ```javascript
   const numbers = [5, 10, 15, 20];
   // Your code here
   ```
### 5. **Check if All Elements Are Positive**
   - **Task**: Write a function that takes an array of numbers and returns `true` if all numbers are positive, otherwise `false`.
   - **Hint**: Use the `.every()` method.
   ```javascript
   const numbers = [4, 7, 9, 13, 21];
   // Your code here
   ```
### 6. **Find the First Negative Number**
   - **Task**: Write a function that takes an array of numbers and returns the first negative number in the array.
   - **Hint**: Use the `.find()` method.
   ```javascript
   const numbers = [3, 5, -7, 9, -12, 15];
   // Your code here
   ```
### 7. **Count Occurrences of an Element**
   - **Task**: Write a function that takes an array and a value, and returns the number of times that value occurs in the array.
   - **Hint**: Use the `.reduce()` method to count occurrences.
   ```javascript
   const items = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
   const searchItem = 'apple';
   // Your code here
   ```
### 8. **Flatten a Nested Array**
   - **Task**: Write a function that takes a nested array and returns a flat array (one-dimensional array).
   - **Hint**: Use the `.flat()` method or `.reduce()` combined with `.concat()`.
   ```javascript
   const nestedArray = [[1, 2], [3, 4], [5, 6], [7, 8]];
   // Your code here
   ```
### 9. **Remove Duplicates from an Array**
   - **Task**: Write a function that takes an array and returns a new array with all duplicates removed.
   - **Hint**: Use the `Set` object or `.filter()` with `.indexOf()`.
   ```javascript
   const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];
   // Your code here
   ```
### 10. **Sort an Array of Strings**
   - **Task**: Write a function that takes an array of strings and returns the array sorted alphabetically.
   - **Hint**: Use the `.sort()` method.
   ```javascript
   const fruits = ['banana', 'apple', 'orange', 'mango', 'pineapple'];
   // Your code here
   ```
### 11. **Reverse an Array**
   - **Task**: Write a function that takes an array and returns a new array with the elements in reverse order.
   - **Hint**: Use the `.reverse()` method.
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   // Your code here
   ```
### 12. **Merge Two Arrays**
   - **Task**: Write a function that takes two arrays and returns a new array that merges both arrays together.
   - **Hint**: Use the `.concat()` method or the spread operator (`...`).
   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   // Your code here
   ```
### 13. **Check if an Array Contains a Value**
   - **Task**: Write a function that takes an array and a value, and returns `true` if the array contains the value, otherwise `false`.
   - **Hint**: Use the `.includes()` method.
   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   const searchFruit = 'banana';
   // Your code here
   ```
### 14. **Find Index of a Value**
   - **Task**: Write a function that takes an array and a value, and returns the index of the first occurrence of the value in the array.
   - **Hint**: Use the `.indexOf()` method.
   ```javascript
   const numbers = [10, 20, 30, 40, 50];
   const searchNumber = 30;
   // Your code here
   ```
### 15. **Convert an Array to a String**
   - **Task**: Write a function that takes an array and returns a string with all the array elements joined together with a specified separator.
   - **Hint**: Use the `.join()` method.
   ```javascript
   const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
   const separator = ' ';
   // Your code here
   ```










*/
