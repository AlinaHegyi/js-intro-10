// console.log("\n---------------TASK1---------------\n");
// /**
//  * Write a function named repeatingX() which takes a string argument and returns true if the letter x is followed by another x.
//  *  Otherwise, return false.
// NOTE: This method should be case-insensitive.
// Examples:
// repeatingX("xTechxGlobalx") 	-> false
// repeatingX("Hello Xx World") 	-> true
// repeatingX("x x") 		-> false
// repeatingX("") 		-> false
// repeatingX("xxxxx") 		-> true
//
//  */
//
// // const repeatingX = (str) => {
// //   for (let i = 0; i <= str.length; i++) {
// //     if (
// //       (str[i] === "x" || str[i] === "X") &&
// //       (str[i + 1] === "x" || str[i + 1] === "X")
// //     ) {
// //       return true;
// //     }
// //   }
// //   return false;
// // };
//
// // OR
//
// const repeatingX2 = (str) => {
//   return (
//     str.includes("xx") ||
//     str.includes("XX") ||
//     str.includes("xX") ||
//     str.includes("Xx")
//   );
// };
//
// console.log(repeatingX("xTechxGlobalx"));
// console.log(repeatingX("Hello Xx World"));
// console.log(repeatingX("x x"));
// console.log(repeatingX(""));
// console.log(repeatingX("xxxxx"));
//
// console.log("\n---------------TASK2---------------\n");
// /**
//  * Write a function named isPerfectSquare() which takes a number as an argument and checks if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
// NOTE: A perfect square is a number that can be expressed as the product of an integer by itself or as the second exponent of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.
// Examples:
// isPerfectSquare(25) 	-> true
// isPerfectSquare(24) 	-> false
// isPerfectSquare(0) 	-> true
// isPerfectSquare(1) 	-> true
// isPerfectSquare(-1) 	-> false
// isPerfectSquare(144) 	-> true
//
//  */
//
// const isPerfectSquare = (n) => {
//   if (n < 0) return false;
//   let sqrt = Math.sqrt(n);
//   return sqrt === Math.floor(sqrt);
// };
//
// console.log(isPerfectSquare(25));
// console.log(isPerfectSquare(24));
// console.log(isPerfectSquare(0));
// console.log(isPerfectSquare(1));
// console.log(isPerfectSquare(-1));
// console.log(isPerfectSquare(144));
//
// console.log("\n---------------TASK3---------------\n");
// /**
//  * Requirement:
// Write a function named convertTemperature() which takes a number and a string arguments to be considered as a
//  temperature value and a unit (either Celsius or Fahrenheit) as arguments and converts the temperature to the other unit.
// NOTE: Use below formulas to convert temperature:
// Celsius to Fahrenheit: temp * 9/5) + 32
// Fahrenheit to Celsius: temp - 32) * 5/9
// Examples:
// convertTemperature(100, 'Celsius’) 		-> 212
// convertTemperature(32, 'Fahrenheit’) 	-> 0
// convertTemperature(0, 'Celsius’) 		-> 32
// convertTemperature(212, 'Fahrenheit’) 	-> 100
// convertTemperature(-40, 'Celsius’) 		-> -40
// convertTemperature(-40, 'Fahrenheit’) 	-> -40
//
//  */
// const convertTemperature = (num, str) => {
//   if (str.toLowerCase() === "celsius") {
//     return (num * 9) / 5 + 32;
//   } else if (str.toLowerCase() === "fahrenheit") {
//     return ((num - 32) * 5) / 9;
//   }
// };
//
// console.log(convertTemperature(100, "Celsius"));
// console.log(convertTemperature(32, "Fahrenheit"));
// console.log(convertTemperature(0, "Celsius"));
// console.log(convertTemperature(212, "Fahrenheit"));
// console.log(convertTemperature(-40, "Celsius"));
// console.log(convertTemperature(-40, "Fahrenheit"));
//
// console.log("\n---------------TASK4---------------\n");
// /**
//  * Write a function named sumOfEvenNumbers() which takes an array as an argument and returns the sum of all the even numbers in an array.
// Examples:
// sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) 		-> 30
// sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) 	-> 110
// sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) 	-> 0
// sumOfEvenNumbers( [ ] ) 			-> 0
// sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) 			-> 6
// sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) 		-> 150
//
//  */
// const sumOfEvenNumbers = (arr) => {
//   let total = 0;
//   for (const num of arr) {
//     if (num % 2 === 0) {
//       total += num;
//     }
//   }
//   return total;
// };
//
// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
// console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));
// console.log(sumOfEvenNumbers([]));
// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));
// console.log(sumOfEvenNumbers([10, 20, 30, 40, 50]));
//
// console.log("\n---------------TASK5---------------\n");
// /**
//  * Requirement:
// Write a function named capsOdds() which takes an array argument and returns the array with all the odd index elements capitalized (converted to uppercase).
// Examples:
// capsOdds(["Hello", "World"]) 			-> ["Hello", "WORLD"]
// capsOdds(["Jan", "Feb", "Mar", "Apr"]) 		-> ["Jan", "FEB", "Mar", "APR"]
// capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]) 	-> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
// capsOdds([ ]) 				-> [ ]
// capsOdds(["John !@#$%", "^&*() Doe"]) 		-> ["John !@#$%", "^&*() DOE"]
//
//  */
// function capsOdds(arr) {
//   return arr.map((element, index) => {
//     if (index % 2 !== 0) {
//       return element.toUpperCase();
//     }
//     return element;
//   });
// };
//

/**
 * Write a function named add() which takes two array of numbers as arguments and returns a new
 * array with the sum of given array elements
 * . NOTE: Be careful about the array sizes as they could be different.
 */


/**
 * Examples:
 * add([3, 0, 0, 7, 5, 10], [6, 3, 2])                         -> [9, 3, 2, 7, 5, 10]
 * add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])      	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]
 * add([-5, 6, -3, 11], [5, -6, 3, -11])                       -> [0, 0, 0, 0]
 */


 const add = (arr1, arr2) => {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = [];
     for ( let i = 0; i < maxLength; i++) {
       result.push((arr1[i] || 0) + (arr2[i] || 0));
     }
     return result;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
























