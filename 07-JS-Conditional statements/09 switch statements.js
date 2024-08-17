//const { getRandomNumber } = require('../utils/MathHelper.js');
/*
Generate a random number bt 1 and 10 both included
if the number is 1, print '3 POINTS'
if the number is 2, print '2 POINTS'
if the number is 3, print '1 POINT'

if the number is anything else , print '0 POINT'

//const { getRandomNumber } = require('../utils/MathHelper.js');

//let r1 = getRandomNumber(1, 10);



let r1 = Math.floor(Math.random() * 10 + 1);

 console.log('Random number is =', r1)

//if (r1 === 1) console.log('3 PONTS');
//else if (r1 === 2) console.log('2 POINTS');
//else if (r1 === 3) console.log('1 POINTS');
// else console.log('0 POINTS');


switch (r1) {
 case 1:
    console.log('3 PONTS');
    break;
 case 2: 
  console.log('2 POINTS');
    break;
case 3:
    console.log('1 POINTS');
   break;
default:
     console.log('0 POINTS');
}

//METHOD

console.log(date.getDate()); // 6. gets the day of month
console.log(date.getMonth()); // 7. month is august, starts counting from 0
console.log(date.getFullYear()); // 2024
console.log(date.getDay());// 2.  day of the week
console.log(date.getHours());// 12. gets time
console.log(date.getMinutes());// 29 minutes.at time of running code
console.log(date.getTime());// 1722904219235 how many seconds have passed since midnight
console.log(date.toLocaleDateString());// 


/*
0 Sunday
1 Monday
.
.
.
.
6 Saturday

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY' 
*/
const date = new Date();
let day = date.getDay(); // returns 0 to 6 inclusive


if (day === 0 || day === 6)  {
    console.log('Weekend');
} else {
     console.log('Weekday');
    }
//another way with if-else

// with switch 

switch(day) {
    case 0:
    case 6:
        console.log('WEEKEND')
   break;
   default:
}   console.log('WEEKEND');

//
switch(day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('WEEKDAY');
        break;
    default:
        console.log('WEEKEND');
}


//another way, using boolean

switch(day === 0 || day === 6) {
 case true:
    console.log('Weekend');
    break;
default:
        console.log('Weekday');
}

/*
Find and print the quarter that our r2 is in
1 and 25 inclusive  -> print 'FIRST'
26 and 50 inclusive  -> print 'SECOND'
51 and 75 inclusive  -> print 'THIRD'
76 and 100 inclusive  -> print 'FOURTH'
*/


let r2 = Math.floor(Math.random() * 100 + 1);

 console.log('The random number is', r2);

 if (r2 <= 25) console.log('FIRST');
  else if (r2 <= 50) console.log('SECOND');
  else if ( r2 <= 75) console.log('THIRD');
 else if (r2 <= 100) console.log ('FOURTH');

// wih switch

switch(true) {
 case r2 <= 25:
     console.log('FIRST');
     break;
 case r2 <= 50:
    console.log('SECOND');
   break;
case r2 <= 75:
    console.log('THIRD');
    break;
case r2 <= 100:
    console.log('FOURTH');
    break;
}






















