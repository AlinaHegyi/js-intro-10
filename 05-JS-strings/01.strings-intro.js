
let fname = "John";
let lname = "Doe";

let fullname1 = fname + ' ' + lname; //traditional concatenation with + operator
let fullname2 = `${fname} ${lname}`; //concatenation using bacticks-template literals, introduced after 2015
let fullname3 = fname.concat(' ').concat(lname); //not used with concat.function

console.log(fullname1); //John Doe
console.log(fullname2); //John Doe
console.log(fullname3); // John Doe

/*  concat() function
   TASK: combines 2 strings together
  RETURN: returns a new string
 ARGUMENTS: takes a string or multiple strings as an argument -parameter
 CHANGE ORIGINAL VALUE: does not modify the original value
 STATIC or NON-STATIC:
*/

console.log ('Hello'.concat(', ', 'Batch-10')); // ''Hello batch-10''.



