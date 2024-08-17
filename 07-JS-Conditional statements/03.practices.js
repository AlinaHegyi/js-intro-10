
/* 
English exam
Passing score is 60 or above
We will write a program to check if we pass the exam or failed.
60 or above -> PASS
else -> FAIL


*/
//Testin program with EDGE SCENARIOS
// 1.  60
// 2.  59
// 3.   61
// 5.    0


let exam_score = 60;

if(exam_score >= 60) {
    console.log('PASS');
}

else {
    console.log('FAIL');
}

//or

if(exam_score < 60){
    console.log('Fail');
}
else {
    console.log('PASS');
}


let exam_score2 = 150;

if(typeof exam_score2 === 'number') {
    if(exam_score2 < 0 || exam_score2 > 100) {
        throw Error('This is not a valid exam score!!!');
    }
    else {
        if(exam_score2 >= 60) {
            console.log('PASS');
        }
        else {
            console.log('FAIL');
        }
    }
}
else {
    throw Error('The input provided is not a number!!!');
}





//if you execute a single line of code within if-else blocks, then you may omit curly braces BUT ONLYIF ONE LINE!

 if(exam_score >= 60) console.log('PASS');
 else console.log('FAIL');



if(true) {
console.log('Hello');
console.log('Hi');
}
else {
 console.log('A');
  console.log('B');
}



/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 25;




if (age >= 65 ) {
    console.log('YOU CAN GET RETIRED')
}
else {
 console.log ('YOU CANNOT GET RETITED!')
}



//ternary operatormis used for short if-else statement
age >= 65 ? console.log('YOU CAN GET RETIRED') :  console.log ('YOU CANNOT GET RETITED!');

// condition ? expression_true : expression_false;


let fname = 'Alex';
let first = true;

if (first) {
    console.log(fname[0]);
}
else  {
    console.log(fname[fname.length - 1]);
}

// using ternary
 first ? console.log(fname[0]) : console.log(fname.charAt(-1));











