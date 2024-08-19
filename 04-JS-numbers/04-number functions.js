
let num = 10;

console.log(num);  //10
console.log(num.toString());  //'10'  

console.log(typeof num);    //number 
console.log( typeof num.toString());    //string 

console.log(num + 5);  //15
console.log(num.toString() + 5);   //'105'

// toFixed() vs toPrecision()

console.log((1.2345).toFixed(2)); //1.23



console.log(123.23.toFixed(1));  //123.2   /
console.log(123.23.toPrecision(3));   //123   /
  
console.log(10.957.toFixed(1)); //11

  //converting other values (data types) to number 


 let n1 ='5', n2 = '3';

  console.log(n1 + n2);     //'53'
  console.log(Number(n1) + Number(n2)); //8
  console.log(parseInt(n1) + parseInt(n2));  //8
 console.log(parseFloat(n1) + parseFloat(n2)); //8





let num1 = '5.1' , num2 = '5.2';

console.log (Number(num1) + Number(num2)); // 10.3
console.log(parseInt(num1) + parseInt(num2)); //10
console.log(parseFloat(num1) + parseFloat(num2)); // 10.3

//isInteger()  , isSafeInteger()



console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

console.log(Number.isInteger(5.1)); //false
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(487573839548675743568)); //true

//false
console.log(Number.isSafeInteger(5000000000)); //true
console.log(Number.isSafeInteger(384857669494848475757585433455)); //false





  //isFinite()

console.log(isFinite(5));  // true
