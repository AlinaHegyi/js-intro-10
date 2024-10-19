console.log('\n---------------TASK1---------------\n');
/**Requirement:
Write a function named fizzBuzz1() which takes a number argument 
and returns "Fizz" if the given number is divisible by 3, "Buzz" 
if the number is divisible by 5,
 and "FizzBuzz" if the number is divisible by both 3 and 5. 
 Otherwise, it will return the number itself.​
Examples:
fizzBuzz1(0) 		-> "FizzBuzz"
fizzBuzz1(1) 		-> 1
fizzBuzz1(3) 		-> "Fizz"
fizzBuzz1(5) 		-> "Buzz"
fizzBuzz1(30) 	-> "FizzBuzz"
fizzBuzz1(10) 	-> "Buzz"
fizzBuzz1(15) 	-> "FizzBuzz"
fizzBuzz1(-15) 	-> "FizzBuzz"
 */

const fizzBuzz1 = (n) => {
    if (n % 15 === 0) return 'FizzBuzz';
    else if (n % 3 === 0) return 'Fizz';
    else if (n % 5 === 0) return 'Buzz';
    else return n;
}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));



console.log('\n---------------TASK2---------------\n');

/**Requirement:
Write a function named fizzBuzz2() which takes a number argument and returns 
and array consist of numbers starting from 1 to given number. However, it will return "Fizz" 
for the numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers 
divided both by 3 and 5.
Examples:
fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
fizzBuzz2(15) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
fizzBuzz2(2) 		-> [ 1, 2 ]
 */
function fizzBuzz2(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    return result;
}

console.log(fizzBuzz2(3));  // [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5));  // [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)); // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)); // [ 1, 2 ]




console.log('\n---------------TASK3---------------\n');

/**Requirement:
Write a function named findSumNumbers() which takes a string argument and returns
 sum of the all numbers appears in the string.
 Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
 */

// function findSumNumbers(str) {
//     let sum = 0;
//     let currentNumber = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (char >= '0' && char <= '9') {
//             currentNumber += char;
//         } else {
//             if (currentNumber !== '') {
//                 sum += parseInt(currentNumber);
//                 currentNumber = '';
//             }
//         }
//     } if (currentNumber !== '') {
//         sum += parseInt(currentNumber);
//     }
//     return sum;
//}

//Bilal solution

const findSumNumbers = str => {
   let total = 0;
   let num = '';
 for ( let char of str) {
    if(char >= '0' && char <= '9') num += char;
    else{
        total += Number(num);
        num = '';
    }
    if(num) total += Number(num);
    return total;
 }
};















console.log(findSumNumbers("abc$")); // 0
console.log(findSumNumbers("a1b4c 6#")); // 11
console.log(findSumNumbers("ab110c045d")); // 155
console.log(findSumNumbers("525")); // 525
console.log(findSumNumbers("3 for 10 dollars")); // 13



console.log('\n---------------TASK4---------------\n');

/**Requirement:
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
 Examples:
findBiggestNumber("abc$") 		-> 0
findBiggestNumber("a1b4c  6#") 		-> 6
findBiggestNumber("ab110c045d") 		-> 110
findBiggestNumber("525") 		-> 525
findBiggestNumber("3 for 10 dollars") 	-> 10
 */

const findBiggestNumber = (str) => {
    let num = '';
    let arr = [];
    for (const char of str) {
        if (char >= '0' && char <= '9') {
            num += char;
        } 
        else if (num !== '') {
            arr.push(parseInt(num));
            num = '';
        }
    }
    if (num !== '') {
        arr.push(parseInt(num));
    }
    return arr.length > 0 ? Math.max(...arr) : 0;

}



console.log(findBiggestNumber('abc$')); // 0
console.log(findBiggestNumber('a1b4c  6#')); // 6
console.log(findBiggestNumber('ab110c045d')); // 110
console.log(findBiggestNumber('525')); // 525
console.log(findBiggestNumber('3 for 10 dollars')); // 10






console.log('\n---------------TASK5---------------\n');

/**Requirement:
Write a function named countOccurrencesOfCharacters() which takes a string argument
 and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
 Examples:
countOccurrencesOfCharacters("") 		-> ""
countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a”
countOccurrencesOfCharacters("www" ) 	-> "3w"
 */
 const countOccurencesOfCharacters = (str) => {
   let count = 1;
   let result = '';
   let currChar = str[0];

   if (str === '') return '';

   for( let i = 1; i <= str.length; i++){
    if(str[i] === currChar) count++;
    else {
        result += count + currChar;
        count = 1;
        currChar = str[i];
    }
   }
   return result;
 }


console.log(countOccurencesOfCharacters(''));
console.log(countOccurencesOfCharacters('abc'));
console.log(countOccurencesOfCharacters('abbcca'));
console.log(countOccurencesOfCharacters('aaAAa'));
console.log(countOccurencesOfCharacters('www'));




console.log('\n---------------TASK6---------------\n');
/**Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
 Examples:
fibonacciSeries1(3) 	-> [0, 1, 1]
fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	-> [0]
fibonacciSeries1(2) 	-> [0, 1]
 */

//fibonacci= each number equals the sum of previous two numbers
//

// const fibonacciSeries1 = (n) => {
//     if (n <= 0) return []; 
//     if (n === 1) return [0]; 
//     if (n === 2) return [0, 1]; 

//     let array = [0, 1];
//     for (let i = 2; i < n; i++) {
//         let nextNum = array[i - 1] + array[i - 2]; 
//         array.push(nextNum);
//     }
//     return array;
//};

const fibonacciSeries1 = (n) => { 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 

   let result = [0, 1];
   for ( let i = 2; i <= n; i++) {
 result.push(result[i - 2] + result[i - 1]);
   }
   return result;
};



console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));


console.log('\n---------------TASK7---------------\n');


/**
 * Requirement:
Write a function named fibonacciSeries2() which takes a number n argument and returns
 the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
 Examples:
fibonacciSeries2(2) 	-> 1
fibonacciSeries2(4) 	-> 2
fibonacciSeries2(8) 	-> 13
fibonacciSeries2(9) 	-> 21
fibonacciSeries2(1) 	-> 0
 */


// const fibonacciSeries2 = (n) => {
//     if (n === 1) return 0;
//     if (n === 2) return 1; 
//     let a = 0; 
//     let b = 1; 
//     let number; 

//     for (let i = 3; i <= n; i++) {
//         number = a + b; 
//         b = number; 
//     }
//     return number; 
// };


const fibonacciSeries2 = (n) => {
    if (n === 1) return 0;
    if (n === 2 || n === 3) return 1; 
   return fibonacciSeries2(n - 1) + fibonacciSeries2(n - 2)
 
};



console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));
console.log(fibonacciSeries2());






console.log('\n---------------TASK8---------------\n');
/**
 * Requirement:
Write a function named findUniques() which takes two array of number arguments and returns 
the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
 Examples:
findUniques([], []) 		-> []
findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) 	-> []
findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]
 */

// const findUniques = (arr1, arr2) => {
//     if (arr1.length === 0 && arr2.length === 0) return [];

//         let arr3 = arr1.concat(arr2);
//         let uniqueArr = [];

//     for (let i = 0; i < arr3.length; i++) {
//             let count = 0;
   
//         for (let j = 0; j < arr3.length; j++) {
//              if (arr3[i] === arr3[j]) {
//                  count++; 
//          }    
//         }
//             if (count === 1) { 
//                  uniqueArr.push(arr3[i]);
//         }
//      }
//         return uniqueArr;
// }; 

const findUniques = (arr1, arr2) => {
 const concatArr = arr1.concat(arr2);
 return concatArr;

 const filteredArr = concatArr.filter(ele => !(arr1.includes(ele) && arr2.includes(ele)))

 const set = new Set(filteredArr);
 return[...set]
}


console.log(findUniques([], []));
console.log(findUniques([],[1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));



console.log('\n---------------TASK9---------------\n');
/**
 * Requirement:
Write a function named isPowerOf3() which takes a number argument and returns true 
if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
 Examples:
isPowerOf3(1) 	-> true
isPowerOf3(2) 	-> false
isPowerOf3(3) 	-> true
isPowerOf3(27) 	-> true
isPowerOf3(100) 	-> false
isPowerOf3(81) 	-> true
isPowerOf3(9) 	-> true

 */
 // check if the number is divisible by 3 
 //keep dividing the number found by 3 in a loop. If we get 1 , number is power of 3.

function isPowerOf3(num) {
    while (num % 3 === 0) {
        num /= 3; 
    }
    return num === 1;
};


console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));







const averageOfEdges = (n1, n2, n3) => {
    let min = Math.min(n1, n2, n3);
    let max = Math.max(n1, n2, n3);
    return (min + max) / 2;
  }
  console.log(averageOfEdges(0, 0, 6));
  console.log(averageOfEdges(-2, -2, 10));
  console.log(averageOfEdges(10, 13, 20));


  //Write a function named as removeExtraSpaces() 
  //which takes a string word as an argument and returns the string 
  //back with all extra spaces removed when invoked.

  const removeExtraSpaces = str => {
      let arr = str.split(' ').filter((ele)=> {
       
       if( !ele === ' ') {
        arr.push(ele);
       }
       
       }) 
      
  }

  
  console.log(removeExtraSpaces('Hello   World    '))