//interview question :How do u make sure if a variable is an array?

const arr = [];
console.log(typeof arr); // 'object'
console.log(typeof null); //'object'
console.log(typeof {}); // 'object'

//you ca use Array.isArray() method to check if the variable is an array or not
 console.log(Array.isArray(arr)); //true
 console.log(Array.isArray({})); //false
 console.log(Array.isArray('Hello')); //false



