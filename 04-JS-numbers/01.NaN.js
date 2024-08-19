
console.log(NaN);

console.log(3 * '5'); //15  
console.log(3 + '5'); //'35'
console.log(3 - '2'); //1


console.log(5 * 'abc');  //NaN


//  isNaN()  -function-method used to check if an expression evaluates to number or not -returns boolean

console.log(isNaN(5));  //FALSE
console.log(isNaN(10 * true));  //FALSE 
console.log(isNaN(10 * 'Hello'));  //TRUE
console.log(isNaN('John'));  ///TRUE
console.log(isNaN(true));   //FALSE


console.log(0 / 0);  //NaN

