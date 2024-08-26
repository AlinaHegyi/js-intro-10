
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



