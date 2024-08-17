

/* assume you are given a string of any length; get the last 5 characters*/


let str1 = 'Midnight';


str1.slice(-5); //night- slice method is preffered
console.log(str1.slice(str1.length -5));  //night
console.log(str1.substring(str1.length -5));  //night



/* assume any legth of string, get the first three charcaters and the last 3 characters
then concatenate those in a new string
*/
 
 let str2 = 'JavaScript';

 console.log(str2.slice(0, 3)); //jav
 console.log(str2.slice(-3));    //ipt

 console.log(str2.slice(0, 3) + str2.slice(-3));  //javipt


//extracting strings

let sentence = 'I like using single quotes.';
console.log(sentence.split(' '));
console.log(sentence.split(''));






