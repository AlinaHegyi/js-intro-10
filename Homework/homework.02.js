
console.log('\n---------------TASK01---------------\n');

 let str1 = '5', str2 = '2';
let num1 = (Number(str1));
let num2 = (Number(str2));

console.log(`The sum of 5 and 2 is = ${num1 + num2}
The product of 5 and 2 is = ${num1 * num2}
The division of 5 and 2 is = ${num1 / num2}
The substraction of 5 and 2 is = ${num1 - num2}
The remainder of 5 and 2 is = ${num1 % num2}
The exponentiation of 5 and 2 is = ${num1 ** num2}`);



console.log('\n---------------TASK02---------------\n');

let s1 = '200', s2 = '-50';
let nums1 = Number(s1);
let nums2 = Number(s2);

console.log (`The greatest value is = ${Math.max(nums1, nums2)}
The smallest value is = ${Math.min(nums1, nums2)}
The average is = ${(nums1 + nums2) / 2}
The absolute difference is = ${Math.abs(nums1 - nums2)}`);



console.log('\n---------------TASK03---------------\n');

 let rand1 = Math.floor(Math.random() * 50 + 1);
 let rand2 = Math.floor(Math.random() * 50 + 1);

console.log(`The absolute difference between numbers is = ${Math.abs(rand1 - rand2)}`);




console.log('\n---------------TASK04---------------\n');

let random1 = Math.floor(Math.random() * 50 + 1);
let random2 = Math.floor(Math.random() * 50 + 1);
let random3 = Math.floor(Math.random() * 50 + 1);
let random4 = Math.floor(Math.random() * 50 + 1);
let random5 = Math.floor(Math.random() * 50 + 1);

console.log(`The max value is = ${Math.max(random1, random2, random3, random4, random5)}
The min value is = ${Math.min(random1, random2, random3, random4, random5)}`);




console.log('\n---------------TASK05---------------\n');

let number1 = Math.floor(Math.random() * (100 - 50 + 1) + 50 );
let number2 = Math.floor(Math.random() * (100 - 50 + 1) + 50 );
let number3 = Math.floor(Math.random() * (100 - 50 + 1) + 50 );
 
console.log(`The number 1 = ${number1}
The number 2 = ${number2}
The number 3 = ${number3}
The sum of the numbers is = ${number1 + number2 + number3}`);




console.log('\n---------------TASK06---------------\n');


let ranNum1 = Math.floor(Math.random() * 100 + 1);
let ranNum2 = Math.floor(Math.random() * 100 + 1);
let ranNum3 = Math.floor(Math.random() * 100 + 1);

console.log(ranNum1 > 25 && ranNum2 > 25 && ranNum3 > 25);



console.log('\n---------------TASK07---------------\n');


let name = 'David';
 console.log(name.length); 
console.log(name[0]);
console.log(name[4]);
console.log(name.slice(0, 3));
console.log(name.slice(2, 5));

console.log(`The length of the name is = ${name.length};
The first character in the name is = ${name[0]};
The last character in the name is = ${name[name.length - 1]};
The first three characters in the name are = ${name.slice(0, 3)};
the last three characters in the name are = ${name.slice(name.length - 3)}`);