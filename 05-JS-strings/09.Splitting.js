
let items = 'Apples, Oranges, Bananas, Eggs, Milk';




console.log(items.split(','));//
console.log(items.split(' '));//
console.log(items.split(', '))//

 let sentence = 'I like JavaScript';
console.log(sentence.split(' ')); // 'I', 'like', 'JavaScript' 
console.log(sentence.split('like')); //'I ', ' JavaScript'


/* Assume you are given a string having some words
  Count how many words the string has 
*/
let str3 = 'I like JavaScript';
 let str2 = 'Me and you will be successful';

console.log(str3.split(' '));  // 'I', 'like', 'JavaScript'.

console.log(str2.split(' ').length);   //6


let smth = 'Hello';
console.log(smth.split('')); //splits all elements

/* 
TASK: used to split a string into ARRAY ELEMENTS WITH THE GIVEN SEPARATOR
RETURN:returns an array of elements
ARGUMENTS: takes a string argument as a separator
CHANGE ORIGINAL VALUE: doesnt change original value
STATIC or NON-STATIC ; non-static 
*/
