
let str = 'I like apples and pineapple';

//replace apples with orange

  let strR1 = str.replace('apples', 'orange');
 
  console.log(strR1);  //I LIKE ORANGE AND PINNEAPLE


// REPLACE ALL APPLE OCCURENCES WITH ORANGE 

let strR2 = str.replaceAll('apple', 'orange');
 console.log(strR2); //i like orange and pineorange
/* 
replace()
TASK: used to replace the first occurrence of a substring within the original string
RETURN: it returns a new string with the replaced value
ARGUMENTS: takes two argument; target(substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static

replaceAll()
TASK: used to replace all occurrences of a substring within the original string
RETURN: it returns a new string with the replaced value
ARGUMENTS: takes two argument; target(substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static

*/

console.log('Hello everyone!'.replaceAll('e', 'a').replaceAll('o', 'U')); // 'HallU avaryUna!'














