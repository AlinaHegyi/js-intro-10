/* 
Create a function which prints 'Hi' when invoked
*/
// this a void 0 argument function
function sayHi() {
    console.log('Hi');
}

sayHi(); // Hi
/*
Create a function which takes a string name as an argument
and it return 'Hello {name}!
 sayHello('Alex')  -->
*/
function sayHello(name) {       
   return `Hello, ${name}!`;

}
 let result = sayHello('Bermet');

console.log(result); // hello,Bermet!
console.log(sayHello('John'));// Hello, John1
console.log(sayHello('5')); //Hello, 5!
/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'
greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'
*/

function greet(greeting, name) {
 console.log(`${greeting}, ${name}!`);
};

greet('Hello', 'Malik')
greet('Hello', 'Ali' )
greet('Good morning', 'John');

/*  
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1

*/
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(3, 5));//8 
console.log(sum(4, 7)); //11
console.log(sum(-2, 3)); //1

/* 
Write a function as product which takes 3 number arguments and return their product.

*/

function product(nums1, nums2, nums3) {
return nums1 * nums2 * nums3;
}

console.log(product(2, 2, 3)); //12
console.log(product(2, 4, 5)); //40
console.log(product(3, 7, 6)); //126
console.log(product(5, 0, 9)); //0

console.log(product(3, 7, 6) + 20); // 145
console.log(product(5, 0, 9) - 3); // -3

//if a function takes no arguments it still returns something

function doSmth() {
return Math.random();

}

/*  
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 

Math.floor(Math.random() * (max - min + 1) + min)
*/

function getRandomNumber (num1, num2) {
 return Math.floor(Math.random() * (Math.max(num1, num2) - Math.min(num1, num2) + 1) + Math.min(num1, num2));

}

console.log(getRandomNumber(4, 10));
console.log(getRandomNumber(3, 29));

console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(5, 3));
console.log(getRandomNumber(-5, 15));

// or
function getRandomNumber(num1, num2) {
    let range = Math.max(num1, num2) - Math.min(num1, num2) + 1;
     return Math.floor(Math.random() * range) + Math.min(num1, num2);
}




