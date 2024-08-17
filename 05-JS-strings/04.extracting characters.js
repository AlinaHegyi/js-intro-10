
 // [] vs charAt() vs codeCharAt() vs at()
//get the first charcater


let street = 'TechGlobal';

//get first charcater
console.log([0]); // 'T'
console.log(street(0)); // 'T'
console.log(street.charCodeAt(0)); // 84 returns the ASCII decimal representation of number, we dont use it
console.log(street.charAt(0)); // 'T'

// get the last character
 console.log(str[str.length -1]);
 console.log(str.charAt(str.length -1));
 console.log(str.at(str.length -1));



let city = 'Rome'; // 0 1 2 3    indexes of letters

 console.log(city[-1]); // undefined
 console.log(city.charAt(-1)); // ' '
 console.log(city.at[-1]);  //


 console.log(city[4]); // undefined
 console.log(city.charAt(4)); // ' '   empty string
 console.log(city.at[4]);  //undefined

/*  
[] property access is the most used when getting characters starting from left index, from 0.
    [o] returns the first character, [1] returns the second characters

 at() is useful when getting character from the right index using negative indices (from the end . 
    at(-1)- returns the last character , 
    at(-2) returns the second to last chacarter


[]PROPERTY ACCESS --> 
 TASK::gets a single charcacter from the string using index
 RETURN:a single character as a string
 NOTE: it returns undefined if the given index is not valid for the string
 ARGUMENT:index
 CHANGE ORIGINAL VALUE: does not modify the original value
*/




/*  charAt() method
TASK::gets a single charcacter from the string using index]
RETURN:a single character as a string
NOTE: it returns empty string ('') if the given index is not valid for the string
ARGUMENT:index
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NOT-STATIC: not static
*/


/*  charAt() method
TASK::gets a single charcacter from the string using index]
RETURN:a single character as a string
NOTE: it returns empty string ('') if the given index is not valid for the string
ARGUMENT:index
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NOT-STATIC: not static
*/










