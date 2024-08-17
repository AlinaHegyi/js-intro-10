
let str = 'TechGlobal';

//1. get a substring at the beginning or in the middle  --> Tech or Glo

str.substring(0, 4); //Tech
console.log(str.substring(0, 4));   

//str.substring(4, );
//console.log(str.substring());

str.slice(4, 7); //
console.log(str.slice()); //TechGlobal

// 2. get a substring starting from any index and going all the way to the end --> Global or bal

console.log(str.substring(4, 10)); //Global
console.log(str.slice(4)); // Global

console.log(str.substring(4)); // Global
console.log(str.slice(7)); //bal

   //difference
   let lan = 'JavScript';

 // get the last three characters
  console.log(lan.substring(lan.length - 3));  //ipt
console.log(lan.slice(-3));   //ipt

 //get Sc
  console.log(lan.slice(3, 5));  //Sc
  console.log(lan.slice(-6, -4));  // Sc


//get sc
console.log('Typescript'.slice(-6, -4));  //sc
console.log('Typescript'.slice(-6, -4));  //sc

console.log('Typescript'.substring(0, 3));  //typ
console.log('Typescript'.slice(3, 0)); // returns empty

/* slice()
TASK::retrieve substring from another string based on given indexes
 RETURN:returns a new substring
 ARGUMENT: takes 1 or 2 arguments. First is the starting index(included), second is ending index(excluded)
    note: slice() will work with negative indexes
    note: if the left index is greater than the right index, then it returns empty string
 CHANGE ORIGINAL VALUE: does not modify the original value
  STATIC or NON-STATIC ; non-static (if calling it with variable, is non static)
*/

 /*
  substring()
 TASK::retrieve substring from another string based on given indexes
 RETURN:returns a new substring
 ARGUMENT: takes 1 or 2 arguments. First is the starting index(included), second is ending index(excluded)
    note: it will not work with negative indexes and converts them to 0
    note: if the left index is greater than the right index, then it modifies the correct way and gives you a meaningful substring
 CHANGE ORIGINAL VALUE: does not modify the original value
  STATIC or NON-STATIC ; non-static (if calling it with variable, is non static)

 */


console.log('Batch-10'.substring(-10, 100)); //'Batch-10'
console.log('Batch-10'.substring(3, 100)); // 'ch-10'



//get ing then get rni
let greeting = 'Morning!';

console.log(greeting.slice(4, 7));
console.log(greeting.slice(2, 5));

//substring() vs slice()

'Hello'.substring(-2, -4); //
'Hello'.slice(3, 1);  //








