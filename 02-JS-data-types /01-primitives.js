
 // string
let name = 'john';
console.log('name');        // john
console.log(typeof name);  // 'string'

//number
 let num1 = 10;  // absolute number
 let num2 = 3.14;  // floating/decimal number

console.log(num1);
console.log (num2);

//boolean - are used with if else condition
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5;


// undefined vs null 

let className1;  //undefined
let className2 = undefined;
let courseName = null;  //


console.log('className1'); //undefined
console.log('className2'); //undefined
console.log('courseName'); // null

console.log(typeof className1); 
console.log(typeof className2); 
console.log(typeof courseName);










//changing types
 let address = 'chicago';
 console.log(typeof address); //string

 address = 12345; 
 console.log (typeof address); //number

 //bigInt

  let n1 = 434644565553344566655n;
  let n2 = BigInt ('434644565553344566655');
  
  console.log(n1);
  console.log(n2);
  
  console.log (typeof n1); //bigint
  console.log (typeof n2); //bigint

 console.log(Number.MAX_SAFE_INTEGER); //
 console.log(Number.MIN_SAFE_INTEGER); //


  //symbol
 let s1 = Symbol('UA'); //symbol(UA)
console.log(s1);   // symbol

