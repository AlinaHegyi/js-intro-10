
 //////////LOOPS/////ARRAYS///////
/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns 
the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 
if there are no duplicates in the array. 
For two elements to be considered as duplicated,
 value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1

*/

 function firstDuplicate(arr) {

   for (let i = 0; i <= arr.length - 1; i++) {
       for (let j = 1; j <= arr.length - 1; j++) {
           if (i === j) continue;
           if (arr[i] === arr[j]) return arr[i]; 
       }
   }
   return -1;
}


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


///1 Print Numbers 1 to 10
 for ( let i = 1; i <= 10; i++){
   console.log(i);
 }

//2.	Sum of Numbers 1 to 100
let sum = 0;
for ( let i = 1; i <= 100; i++){
   sum += i;
}
console.log(sum);


//	3.	Print Multiples of 5 Up to 100

for( let i = 5; i <= 100; i++){
    if ( i % 5 === 0) console.log(i);
}
 /*


2. While Loop Exercises


*/	//	Print Numbers 1 to 10
 let i = 1;
while (i <= 10) {
    console.log(i) 
      i++;
   }

// 	2.	Sum of Numbers 1 to 100
let sum1 = 0;
 i = 1;
while (i <= 100) {
 sum1 += i;
 i++;
}
console.log(sum1); //5050

// 3.	Count Down from 10 to 1

 i = 10;
while (i >= 1){
   console.log(i);
   i--;
}
//4.	Find the First Number Greater than 50 Divisible by 7

  j = 50;

 while (j >= 50) {
   if(j % 7 === 0) {
      console.log(j); 
      break;
   }
   j++;
 }
  //



// 3. Do-While Loop Exercises

	// 1.	Print Numbers 1 to 10
  let k = 1;
 do {
   console.log(k);
   k++;
 }
 while(k <= 10);

	// 2.	Sum of Numbers 1 to 100
 let sumNum = 0;
  i = 1;
  do {sumNum += i;
   i++;
  } while(i <= 100);

console.log(sumNum);// 5050



	// 3.	Print Even Numbers Between 1 and 20
 
  i = 1;
  do { if (i % 2 === 0) console.log(i);
   i++;
  }
  while(i <= 20);

/*

### 1. **Sum of Array Elements**
   - **Task**: Write a function that takes an array of numbers and returns the sum of all the numbers.
   const numbers = [1, 2, 3, 4, 5];
  */
   function sumOfNum(arr) {
      let sum = 0;
   
      for(let i = arr[0]; i <= arr.length ; i++){
       sum += i;
      }
       return sum;
   }


console.log(sumOfNum([ 1, 2, 3, 4, 5 ])); // 15

/*
   
### 2. **Find the Largest Number**
   - **Task**: Write a function that takes an array of numbers and returns the largest number.
   const numbers = [3, 67, 15, 92, 29];
*/

function findLargest(arr){
   let largest = Math.max(...arr);
   return largest;
   }

console.log(findLargest([3, 67, 15, 87, 92, 29])); //92

/*

   ```
# 3. **Filter Even Numbers**
   - **Task**: Write a function that takes an array of numbers and 
   returns a new array containing only the even numbers.
   - **Hint**: Use the `.filter()` method.
   ```javascript
   const numbers = [10, 23, 45, 66, 78, 91];
   // Your code here
/*
*/
function evenNums(arr){
   evenArr = [];
 for (const num of arr){
  if(num % 2 === 0) evenArr.push(num); 
 }
 return evenArr;
}

console.log(evenNums([ 10, 23, 45, 66, 78, 91 ])); // [ 10, 66, 78 ]






/*
### 4. **Double the Array Elements**
   - **Task**: Write a function that takes an array of numbers 
   and returns a new array where each number is doubled.
   - **Hint**: Use the `.map()` method.
   ```javascript
   const numbers = [5, 10, 15, 20];   // Your code here

   ```


### 5. **Check if All Elements Are Positive**
   - **Task**: Write a function that takes an array of numbers and returns 
   `true` if all numbers are positive, otherwise `false`.
   - **Hint**: Use the `.every()` method.
   ```javascript
   const numbers = [4, 7, 9, 13, 21];
   
   ```
### 6. **Find the First Negative Number**
   - **Task**: Write a function that takes an array of numbers and returns the first negative 
   number in the array.
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
   - **Task**: Write a function that takes an array and returns a new array 
   with the elements in reverse order.
   - **Hint**: Use the `.reverse()` method.
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   // Your code here
   ```
### 12. **Merge Two Arrays**
   - **Task**: Write a function that takes two arrays and returns a new array that
    merges both arrays together.
   - **Hint**: Use the `.concat()` method or the spread operator (`...`).
   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   */

   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6, 'string', null, '123', 123];
function mergeArr( arr1, arr2){
   let newArr = (arr1).concat(arr2);
   return newArr;
}

console.log(mergeArr(arr1, arr2)); // [ 1, 2, 3, 4, 5, 6, 'string', null, '123', 123 ]

   /*
   ```
### 13. **Check if an Array Contains a Value**
   - **Task**: Write a function that takes an array and a value, and returns `true` 
   if the array contains the value, otherwise `false`.
   - **Hint**: Use the `.includes()` method.
   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   const searchFruit = 'banana';
 */

function includes(arr, x){
   return arr.includes(x);
}

const fruits = ['apple', 'banana', 'tomato'];

console.log(includes(fruits, 'plum'));
   /*
   ```
### 14. **Find Index of a Value**
   - **Task**: Write a function that takes an array and a value, 
   and returns the index of the first occurrence of the value in the array.
   - **Hint**: Use the `.indexOf()` method.
   ```javascript
   const numbers = [10, 20, 30, 40, 50];
   const searchNumber = 30;
   // Your code here


   ```
### 15. **Convert an Array to a String**
   - **Task**: Write a function that takes an array and returns a string with all the array elements 
   joined together with a specified separator.
   - **Hint**: Use the `.join()` method.
   ```javascript
   const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
   const separator = ' ';
   // Your code here
   ```
*/

function arrString(arr){
   return arr.join(' ');
}
console.log(arrString(['Hello', 'world', 'this', 'is', 'JavaScript'])); // Hello world this is JavaScript


/*

/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns 
the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 
if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/
 function firstDuplicate(arr) {
    for ( let i = 0; i <= arr.length - 2; i++){
      for( let j = i + 1; j <= arr.length - 2; j++){
         if (arr[i] === arr[j]) return arr[i]
      }
    }
    return -1;
 }



 //best solution without nested loops
 function firstDuplicate2(arr) {

   for (let i = 0; i < arr.length - 1; i++) {
       if (arr.includes(arr[i], i + 1)) return arr[i];  
   }
   return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))	//	-> 3)
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))	//	-> 5


/*
Write a function named as getDuplicates() which takes an array argument 
and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array 
if there are no duplicates in the array. For two elements to be considered as duplicated,
 value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/

function getDuplicates(arr) { //[ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]
   let dup = [];//[0, ]
   let container =[]; // [0, -4, -7, 5, ]

  for( let element of arr){
   if(!container.includes(element)) container.push(element);
      else if(!dup.includes.element) dup.push(element)
  }
  return dup;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) // [ 0, -7, 0 ]
console.log(getDuplicates([ 'A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])); // [ 'a', 'foo' ]



/*
	3.	Create a Movie Object
	•	Create an object named movie with the following properties:
	•	title: “Inception”
	•	director: “Christopher Nolan”
	•	genres: [“Action”, “Sci-Fi”]
	•	releaseYear: 2010
	•	ratings: {imdb: 8.8, rottenTomatoes: 87}
	•	Output your object to the console. */

 const movie = {
   title: 'Inception',
   director: 'Christopher Nolan',
   genre: ['action', 'Sci-Fi'],
   releaseYear: 2010,
   ratings: {
      IMDB: 8.8,
      RottenTomatoes: 87
      }
 }
 console.log(movie);
 console.log(Object.keys(movie));
 console.log(Object.entries(movie));

   /*
	4.	Create a Restaurant Object
	•	Create an object named restaurant with the following properties:
	•	name: “Pasta Palace”
	•	cuisine: “Italian”
	•	location: “New York City”
	•	dishes: [“Spaghetti”, “Lasagna”, “Ravioli”]
	•	ratings: {yelp: 4.5, google: 4.6}
	•	Output your object to the console.
   */






   /*
	5.	Create a Person Object
	•	Create an object named person with the following properties:
	•	name: “Emma Johnson”
	•	age: 28
	•	occupation: “Graphic Designer”
	•	skills: [“Photoshop”, “Illustrator”, “InDesign”]
	•	contact: {email: "emma.j@example.com", phone: "555-1234"}

*/

//map

const words = ['foo', 'bar', 'foobar', 'rose'];



const wordsUpper = words.map((word) => {
   return word.toUpperCase();
});

console.log(wordsUpper); // [ 'FOO', 'BAR', 'FOOBAR', 'ROSE' ]

// filter

const numbers = [1, 2, 4, 6, 8, 9, 10, 12];
const evenNumbers = numbers.filter((number) => {
   return number % 2 === 0;
});
console.log(evenNumbers); // [ 2, 4, 6, 8, 10, 12 ]
console.log(numbers);  // [1, 2, 4, 6, 8, 9, 10, 12];




const names = ['Jane', 'Alex', 'James', 'Max', 'John', 'Alina'];

const namesJ = names.filter((name) => {
  return name[0] === 'J';
});

console.log(namesJ); // [ 'Jane', 'James', 'John' ]

const names4 = names.filter((name)=> {
   return name.length === 4;
})

console.log(names4); //[ 'Jane', 'Alex', 'John' ]


//reduce
     //find sum of nums in the array
 const nums = [ 1, 2, 4, 5 ]; //  12

// let summ = 0;

// for (const num of nums) {
//     summ += num;
// }
// console.log(summ); //12

const result = nums.reduce((sum, num) => {
 sum += num;
 return sum;
}, 0);

console.log(result); //12


//find max number
    //with for-of loop

//     let max = -Infinity;

//     for ( const num of nums) {
//       if(num > max) max = num;
//     }

// console.log(max); //5

const maxNumber = nums.reduce((accumulator, current) => {
  if (current > accumulator) return current;
  return accumulator;

}, -Infinity);
console.log(maxNumber); // 5

 // find the shortest name
const namesArr = ['Jane', 'Alex', 'James', 'Max', 'John', 'Alina'];

// let shortestName = namesArr[0];

// for(const name of namesArr){
//    if(name.length < shortestName.length) shortestName = name;
// };

// console.group(shortestName); //Max


const shortest = namesArr.reduce((acc, curr) => {
 if (acc.length < curr.length) return acc;
 return curr;
}, namesArr[0]);


console.log(shortest); // Max

