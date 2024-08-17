
 let favnumber = 7;

 let cars = ['Toyota', 'tesla', 'Honda', 'BMW'];
 let numbers = [7, 6, 5, 25, 100 ];


 console.log(cars); // ['Toyota', 'tesla', 'Honda', 'BMW']
 console.log(numbers); // [7, 6, 5, 25 ]

//getting a particular element from an array using index
// index of the elements of the array always starts with zero

console.log(cars[2]);//honda
console.log (numbers[0]);//7

//updating the existing elements with new value
 cars[0] = 'GMC';

 console.log('cars'); //


 //getting the size of an array
 console.log(cars.length); // 4
 console.log(numbers.length); // 5


const students = ('Alex', 'john', 'Jane', 'Mariia');

 console.log(students[-1]);  //undefined
 console.log(students[4]);  //undefined

students [2] = 'Jessie';  //allowed 


//creating an array with the constructor
 const array = new Array('Maria', 25, null, undefined, symbol('Hello'), 25n);
const array2 = ('Maria', 25, null, undefined, symbol('Hello'), 25n);



//accesing the first and last element in the array dynamically

const nums = [ 10, 20, 30, 40, 50 ];

let first = nums[0];
let last = nums [nums.length -1];

console.log(first);
console.log(last);


OBJECTS

