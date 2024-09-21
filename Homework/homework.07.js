
console.log('\n---------------TASK1---------------\n');

/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/


   //using regex


function hasUpperCase(str) {
  return str.split('').some((x) => /[A-Z]/.test(x));
}



// using ASCII code

function hasUpperCase(str) {
    return str.split('').some(x => {
      return 65 <= x.charCodeAt(0) && x.charCodeAt(0) <= 90; 
    });
  }
  
console.log(hasUpperCase('javascript')); //false
console.log(hasUpperCase('John')); //true
console.log(hasUpperCase('$125.0')); //false
console.log(hasUpperCase('')); //false






console.log('\n---------------TASK2---------------\n');
/*
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

const noDigit = (str) => str.split('').filter((x => isNaN(x))).join('');


console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));




console.log('\n---------------TASK3---------------\n');
/*
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$

*/
const noVowels = (str) => {
    let vowels = 'aeiouAEIOU';
   return str.split('').filter((x => !vowels.includes(x))).join('');
}

console.log(noVowels("TechGlobal"));
console.log(noVowels("AEOxyz"));
console.log(noVowels("Javascript"));
console.log(noVowels(""));
console.log(noVowels("125$"));




console.log('\n---------------TASK4---------------\n');
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []

*/
const no13 = function(arr) {
   return arr.map(num => {
        if ( num === 13)  return 0;
        return num;
    });
}


console.log(no13([1, 2, 3 ,4])); //[ 1, 2, 3, 4 ]
console.log(no13([13, 2, 3])); // [ 0, 2, 3 ]
console.log(no13([13, 13, 13 , 13, 13])); //[ 0, 0, 0, 0, 0 ]
console.log(no13([])); //[]



console.log('\n---------------TASK5---------------\n');
/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

// const middleInt = (n1, n2, n3) => {
//     let sortedNums = [n1, n2, n3].sort((a, b) => a - b);
//     return sortedNums[1];
// }


//bilal solution

const middleInt = (n1, n2, n3) => {
  if(n1 >= n2 && n1 <= n3) return n1;
  else if(n1 >= n1 && n2 <= n3) return n2;
  return n3;

}
// another Bilal solution


console.log(middleInt(1, 2, 2)); //2
console.log(middleInt(5, 5, 8)); //5
console.log(middleInt(5, 3, 5)); //5
console.log(middleInt(1, 1, 1)); //1
console.log(middleInt(-1, 25, 10)); //10




console.log('\n---------------TASK6---------------\n');

/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
*/



function sumOfDigits(str) {
    let sum = 0;
    for (let char of str) {
      if (!isNaN(char) && char !== ' ') {  
         sum += Number(char); 
    }
  }
  return sum;
}

console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John's age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8

//// Bilal
return str.split('').filter(ele => ele >= '0' && ele <= '9').reduce((sum, num) => sum + Number(num), 0)


console.log('\n---------------TASK7---------------\n');

/*Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []

*/
 const arrFactoriall = (arr) => {
  return arr.map((num) => {
    let result = 1;
    for( let i = 1; i <= num; i++){
      result *= i;
    }
    return result;
  });
 };

 //Bilal solution

 const arrFactorial = (arr) => {
  return arr.map(ele => {
  let factorial = 1;
  for (i = 2; i <= ele; i++){
    factorial *= i;
  }
  return factorial;
 })
 }



console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));



console.log('\n---------------TASK8---------------\n');
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/

// const categorizeCharacters = (str) => {
//   let letters = '';
//   let digits = '';
//   let specials = '';

//   for (const char of str) {
//     let charCode = char.charCodeAt(0);

//     if ((65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122)) {
//       letters += char;  
//     } else if (48 <= charCode && charCode <= 57) {
//       digits += char; 
//     } else {
//       specials += char;  
//     }
//   }

//   return [ letters, digits, specials ];
// };

const categorizeCharacters = (str) => {
  return str.split('').reduce((cat, ele) => {
   if (ele.toLowerCase() >= 'a' && ele.toLowerCase() <= 'z') cat[0] += ele;
   else if(ele >= '0' && ele <= '9') cat[1] += ele
   else if(ele !== ' ') cat[2] += ele

   return cat;

  }, ['', '', '' ])
 
}

console.log(categorizeCharacters("1234"));       //  [ '', '1234', '' ]
console.log(categorizeCharacters("abc123$#%"));  //  [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"));  // [ 'abc', '123', '$%%' ]





