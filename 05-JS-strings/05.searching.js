// startsWith(  vs endsWith()  vs includes()


let str = 'TechGlobal';

console.log(str.startsWith('HI')); //false
console.log(str.startsWith('Tech')); //true
console.log(str.startsWith('T'));  //true
console.log(str.startsWith('t')); //true
console.log(str.startsWith(''));  //true -before and each character there is an empty string,

console.log(str.endsWith('apple'));  //
console.log(str.endsWith('obal'));  //
console.log(str.endsWith('global'));  //
console.log(str.endsWith('la'));  // 
console.log(str.endsWith(''));  //


console.log(str.includes('G'));  //true
console.log(str.includes('oab'));  //false 
console.log(str.includes(''));    //true
console.log(str.includes('TechGlobal')); //true
 
/*
  startsWith() --> 
 TASK::checks if the string starts with another substring
 RETURN:a boolean, true or false
 ARGUMENT: takes a substring as an argument
 CHANGE ORIGINAL VALUE: does not modify the original value
  STATIC or NON-STATIC ; non-static


 endsWith()
 TASK::checks if the string ends with another substring
 RETURN:a boolean, true or false
 ARGUMENT: takes a substring as an argument
 CHANGE ORIGINAL VALUE: does not modify the original value
  STATIC or NON-STATIC ; non-static


includes()
 TASK::checks if the string includes  another substring
 RETURN:a boolean, true or false
 ARGUMENT: takes a substring as an argument
 CHANGE ORIGINAL VALUE: does not modify the original value
  STATIC or NON-STATIC ; non-static
*/



//  indexOf()  vs lastindexoF()

let message = 'Can I can a can?';

message.charAt(4);  // I

message.indexOf('I');  // 4
message.indexOf('?');  // 15

console.log(message.indexOf('can'));  //6
console.log(message.lastIndexOf('can'));  //12 

console.log(message.indexOf('Can'));  //0
console.log(message.lastIndexOf('Can'));  //0

console.log(message.indexOf(''));  //0
console.log(message.lastIndexOf(''));  // 16

message.indexOf('A');   //-1
message.indexOf('apple');   //-1
message.indexOf('CAM');   //-1












/* indexOf()

TASK::checks if the string contains-includes another substring
RETURN: returns the first index of the first found match as a number
  NOTE: if it cannot find the substring within the original string, returns -1
ARGUMENT: takes a substring as an argument
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC : non-static


  lastIndexof()

TASK::checks if the string contains-includes another substring
 RETURN:a boolean, true or false  
    NOTE: it returns -1 if it cannot find the substring
 ARGUMENT: takes a substring as an argument
 CHANGE ORIGINAL VALUE: does not modify the original value
  STATIC or NON-STATIC ; non-static

*/




