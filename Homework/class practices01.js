/* 
1 .Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
 */  
let randomNumber = Math.floor(Math.random() * 51);
let result = randomNumber * 5;
console.log(`The random number * 5 = ${result}`);
  
 /*
  2 .Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

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
console.log(`Min number = ${min}`);
 console.log(`Max number = ${max}`);
 console.log(`difference = ${difference}`);      

/*  
3.Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}
*/

let random50_100 = Math.random() * (100 - 50 + 1) + 50;
let remainder = random50_100 % 10;
console.log(`The random number % 10 is ${remainder}`);


/* Task 4.
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59
*/
 // Math.floor(Math.random) * range) + startNumber.  range =(max - min + 1)
let range = 10;
let startNumber = 1;

let ranNum1 = Math.floor(Math.random() * range);
let ranNum2 = Math.floor(Math.random() * range);
let ranNum3 = Math.floor(Math.random() * range);
let ranNum4 = Math.floor(Math.random() * range);
let ranNum5 = Math.floor(Math.random() * range);

console.log(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5);

let points = 0;

 points = points + ranNum1 * 5;
 points = points + ranNum2 * 4;
 points = points + ranNum3 * 3;
 points = points + ranNum4 * 2;
 points = points + ranNum5 * 1;

console.log(points);

/*  5. Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/
let first = Math.floor(Math.random() * (25 - 1 + 1) + 1);
let second = Math.floor(Math.random() * (50 - 26 + 1) + 26);
let third = Math.floor(Math.random() * (75 - 51 + 1) + 51);
let fourth = Math.floor(Math.random() * (100 - 76 + 1) + 76);

console.log(first, second, third, fourth);

let maxNum = Math.abs(Math.max(first, second, third, fourth));
let minNum = Math.abs(Math.min(first, second, third, fourth));

 let differenceM_m = maxNum - minNum;
 let difference2_3 = Math.abs(second - third);
 let average = (first + second + third + fourth) / 4 ;

console.log(` Difference of max and min = ${differenceM_m}
Difference of second and third = ${difference2_3}
Average of all = ${average}`);



























