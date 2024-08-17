

const { getRandomNumber } = require ('../utils/MathHelper.js')

//generate a random number between 1 and 10 both inclusive
//If it is 7, print true. otherwise print false

/*   PSEUDO CODE -logical path

 1 GENERATE A RANDOM NUMBER
 2 CHECK IF IT IS 7 OR NOT
 3 DEPENDING ON THE CONDITION PRINT THE RESULT

*/
let r1 = getRandomNumber(1, 10);
 console.log('Random number =', r1)


 if (r1 === 7) {
    console.log('TRUE');
 }
else {
    console.log('FALSE');
}
// ternary operator
r1 === 7 ? console.log(true) : console.log(false);

//another way to use ternary operator for assignment
let result = r1 === 7 ? true : false;
console.log(result);


/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

*/

let r2 = getRandomNumber(1, 10);
console.log('Random number is = ', r2)

if (r2 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}
 // or

r2 % 2 === 0 ? console.log('EVEN') : console.log('ODD');


