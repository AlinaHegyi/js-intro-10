const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];

//we can check if the array contains specific elements

 numbers.includes(20); //false
 numbers.includes(77); //true

 console.log()

//indexOf()  vs latIndexOf()
console.log(number.indexOf(5)); // 0
console.log(number.lastIndexOf(5));// 8

console.log(number.indexOf(10)); // 1
console.log(number.lastIndexOf(10));// 3

console.log(number.indexOf(25)); // 4
console.log(number.lastIndexOf(25));// 4

console.log(number.indexOf(3)); // -1  .returns -1 if the index doesnt exist
console.log(number.lastIndexOf(3));//  -1

// how to check if array contains an element without includes() method

const cities = ['Chicago', 'Berlin', 'Rome', 'Brugge'];

console.log(cities.includes('Berlin'));//true

console.log(cities.indexOf('Berlin'));//true
console.log(cities.indexOf('Berlin') !== -1); //true

cities.includes('Berlin', 3) //false. checks if Berlin is present after index of 3

//check if array contains an element in the second half
const arr = [10, 20, 30, 40, 25, 100, 5, 10, 20, 90];
arr.includes[30]; //true
arr.includes[30, arr.length / 2]; //false



