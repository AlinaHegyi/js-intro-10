const { getRandomNumber } = require('../utils/MathHelper.js');


console.log('\n---------------TASK01---------------\n');
/* Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7 
14
21
.
.
. 
.
91
98
*/
 for( let i = 1; i <= 100; i++){
   if (i % 7 === 0) console.log(i);
 }


console.log('\n---------------TASK02---------------\n');

/*Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6
12
18 
.
.
48 */

for ( i = 1; i <= 50; i++) {
if((i % 2 === 0) && (i % 3 === 0)) console.log(i);
}


console.log('\n---------------TASK03---------------\n');
/*
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
.
.
55
50

*/
for (let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}


console.log('\n---------------TASK04---------------\n');
/*
Requirement:
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
*/


for (let i = 0; i <= 7; i++) {
let num = i; let square = num * num;
console.log(`The square of ${num} is ${square}`);
}




console.log('\n---------------TASK05---------------\n');

/* Requirement:
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output: 55
*/
 let sum = 0;
 for( i = 1; i <= 10; i++){
   sum += i;
}
 console.log(sum);


console.log('\n---------------TASK06---------------\n');
/*
Requirement:
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

let num = getRandomNumber(1, 10)
console.log(num);

let factorial;

for ( let i = 1; i <= 10; i++){
  
 
}
console.log(factorial);










console.log('\n---------------TASK07---------------\n');
/*
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/
 
   let attempts = 0;
   let num1 = 1; 


  while (num1 % 5 !== 0) {
    num1 = getRandomNumber(1, 100);
    attempts++;
}

console.log(`The random number is ${num1} and it took
 ${attempts} attempts to generate it.`);





console.log('\n---------------TASK08---------------\n');
/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]

*/

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

//output entire array
for ( const country of countries){
    console.log(countries);
    break;
}
// array sorted lexicographically

for ( const country of countries){
    console.log(countries.sort());
    break;
}

console.log('\n---------------TASK09---------------\n');
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

*/

const cartoons = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
 console.log(cartoons);

 for (const name of cartoons){
   console.log(cartoons.includes('Pluto'));
   break;
 }

console.log('\n---------------TASK10---------------\n');
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false




*/




console.log('\n---------------TASk11---------------\n');





console.log('\n---------------TASK12---------------\n');






console.log('\n---------------TASK13---------------\n');





console.log('\n---------------TASK14---------------\n');





console.log('\n---------------TASK15---------------\n');





console.log('\n---------------TASK16---------------\n');






console.log('\n---------------TASK17---------------\n');





console.log('\n---------------TASK18---------------\n');





console.log('\n---------------TASK19---------------\n');






console.log('\n---------------TASK20---------------\n');











