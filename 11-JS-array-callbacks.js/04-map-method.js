const numbers = [ 5, 3, 2, 20 ];
// // [ 'odd', 'odd', 'even', 'even' ]

 // using ternary
 const oddOrEven = numbers.map((number) => number % 2 === 0 ? 'even' : 'odd');
   //for loop
   /*  const result = [];

     for ( let i = 0; i < numbers.length; i++){
       if ( numbers[i] % 2 === 0) result.push('even');
       else result.push('odd');
     }
  console.log(result);
*/

//map
//
// const afunction = (number) => {
//     if ( number % 2 === 0) return 'even';
//     return 'odd';
// }
//  // or 
// numbers.map((number) => {
//     if ( number % 2 === 0) return 'even';
//     else return 'odd';
//})





  //exercise

const sentences = ['Good morning', 'I like arrays', 'It is Saturday'];
// each sentence's first word -> ['Good', 'I', 'It'];

const firstWords = sentences.map(sentence => sentence.split(' ')[0]);

console.log(firstWords); // [ 'Good', 'I', 'It' ]


// another example
//const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

const newSalaries = salaries.map(salary => {
   return salary.toFixed(2);
})

console.log(newSalaries);



// new array with odd and even instead the odd and even names.
      //for loop
   /*  const result = [];

     for ( let i = 0; i < numbers.length; i++){
       if ( numbers[i] % 2 === 0) result.push('even');
       else result.push('odd');
     }
  console.log(result);
*/









