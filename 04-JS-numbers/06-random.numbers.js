 
 //random() - returns a random number between 0 and 1. 0 included but 1 excluded
let ranNum = Math.random();

//get a random number between 0 and 10. 0 included, 10 not included
let ranNum0_9 = Math.random() * 10;


console.log(Math.floor(ranNum)); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
console.log(Math.ceil(ranNum)); //
console.log(Math.round(ranNum)); //
console.log(Math.trunc(ranNum)); //

//get a random number between 1 and 10. both inclusive

let ranNum1_10 = Math.random() * 10;


console.log(Math.ceil(ranNum1_10));  //1 and 10 both included


   //get a random number between 0 and 25 --> both included

  /*  YOU CAN USE BELLOW STEPS IF NUMBER STARTS WITN 0
1. generate a random number between 0 and 1
2. multiply this number with the count of desired number(how many numbers you can get in your range)
largeNumber - smallerNumber + 1  =>   25 - 1 +  1
3. Floor the results
*/

//let ranNum0_25 = Math.random() * 26; //

let ranNum0_25 = Math.floor(Math.random() * 26);

console.log((ranNum0_25)); 


//GET A RANDOM NUMBER BETWEEN 13 AND 27, BOTH INCLUSIVE. 

/*YOU CAN USE BELLOW STEPS IF YOUR RANGE DOESN'T START WITH 0

1.generate a random number between 0 and 1
2. Multiply this number with the count of desired numbers(how many numbers you have in your range)
3. floor the result
5. add smaller number to the floored result

*/ // Math.random() * (max - min ) + min


let ranNum13_27 = Math.floor(Math.random() * 15) + 13; // 

console.log((ranNum13_27));

//FORMULA //Math.floor(Math.random() * (max - min + 1)) + min

//get a random number between 943  and 1005 - both included

let r1 = Math.floor(Math.random() * (1005 - 943 + 1)) + 943;

console.log(r1);



//get a random number between 14 and 19 ---- 14 inclusive, 19 exclusive
 //Math.floor(Math.random() * range + min num);

let r2 = Math.floor(Math.random() * (18 - 14 + 1)) + 14;

console.log(r2);   
  












