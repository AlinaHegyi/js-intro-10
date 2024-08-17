
/* TASK 1
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/


let sentence1 = "I like apple and oranges" ;
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

sentence1.slice(7, 12).toUpperCase(); 
console.log(sentence2.slice(0, 4) + sentence2(14).toUppercase() + sentence2.slice(15, 20));
console.log(sentence3.replace("don't", ''));



/* TASK 2 Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters     
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

    */
let string = 'I like mornings';

console.log(`The length is = ${(string.length)}`);
console.log(`The first char is = ${string[0]}`);
console.log(`The last char is = ${string.slice(-1)}`);

string = string.toLowerCase()

console.log(string.includes('a') || string.includes('e') || string.includes('i') || string.includes('o') || string.includes('u'));
    
/*  
TASK 3
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"

ODD STRINGS 
string          length              middle index 
abc             3                   1
civic           5                   2
tatyana         7                   3    

(str.length-1) / 2
Math.floor(str.length / 2)

EVEN STRINGS 
string          length              middle indexes 
abcd            4                   1 and 2 
toyota          6                   2 and 3 
12345678        8                   3 and 4
TypeScript      10                  4 and 5

length / 2 -1 and length / 2
str[str.length / 2 - 1] + str[str.length / 2]
str.slice(str.length / 2 - 1, str.length / 2 + 1)



*/
 //length / 2 -->second letter
 //

let s3 = 'abcde'
console.log(s3.slice(s3.length / 2, s3.length / 2 + 1));  //c


/*  TASK 5
Write a program that divides the given String. Assume the length of the String will at least 
be 4.

-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

*/

let s4 = "";

console.log(`The first 2 characters are = ${s4.substring(0, 2)}`);
console.log(`The last 2 characters  are = ${s4.slice(-2)}`);
console.log(`The other characters are = ${s4.slice(2, s4.length - 2)}`);


/*  TASK 9
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"
*/

let s8 = 'I like Apples';

 let firstWord = s8.slice(0, s8.indexOf(' '));
 let lastWord = s8.slice(s8.lastIndexOf(' ') + 1);
 let mid = s8.slice(s8.indexOf(' ') + 1, s8.lastIndexOf(' '));

console.log(firstWord);
console.log(lastWord);
console.log(mid);

console.log(lastWord + ' ' + mid + ' ' + firstWord) // or

console.log(`${lastWord} ${mid} ${firstWord}`);

/*  
Requirement: TASK 10
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.
*/

let s9 = 'JavaScript is nice to learn';

  //first way
 words = s9.split(' ').length;
console.log(words);



//second way
let str10 = 'I like apple'   
console.log(str10.length);  //12
 
console.log(str10.length - str10.replaceAll(' ', '').length + 1);
console.log(s9.split(' ').length);
console.log(s9.length - s9.replaceAll(' ', '').length + 1); 


  /* 
  TASK 6
  /*
Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";;

Expected Result 1:
true
*/
  
str11 = "abcd";
   console.log(firstChar = str11.slice(0, 2));
   console.log(lastChar = str11.slice(-2));
  
console.log(firstChar === lastChar);

//or another way

let s5 = "12ab12";

console.log(s5.slice(0, 2) === s5.slice(-2));

/*  Task 7
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2:
23ree
*/

let strin1 = 'good';
let strin2 = 'morning';

let newStrin1 = strin1.substring(1, strin1.length - 1);
let newStrin2 = strin2.substring(1, strin2.length - 1);
 let result = (`${newStrin1}${newStrin2}`);
 console.log(result);  // ooornin

/*   
  Task 08
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 4:
let s7 = "xxbluexx";
Expected Result 4:
true
*/
  let s11 = 'green';
console.log(s11.startsWith('xx') && s11.endsWith('xx'));

// 'green'    --false
// 'xxbluexx' --true














