
const { getRadomNumber } = require('../utils/MathHelper.js');

//  if - else if- else if-else
// these are also known as LADDER STATEMENTS

let number = getRadomNumber(1, 4);

console.log('Random number is =', number)

if (number === 1) {
 console.log('one');
} 
else if( number === 2) {
 console.log('two');
}
else if ( number === 3) {
    console.log('three');
}
else if (number === 4){
    console.log('four');
}
else {
    throw Error('The method created a number that is outside the range');
}

console.log('END OF THE PROGRAM!')







// with ternary operator

let result = number === 1 ? 'ONE' : number === 2 ? 'TWO' : number === 3 ? 'THREE' : 'FOUR' ;

console.log('Result is', result);

