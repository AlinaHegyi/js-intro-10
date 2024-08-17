

/*


*/

function startE(name) {
    if(name[0] === 'E' || (name[0]) === 'e') {
        return true;
    }

    return false;
}
    
console.log(startE('Emily')) // true
console.log(startE('Alex'))  // false


/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false

*/

function divisible5(number) {
 if(number % 5 === 0) return true;
else return false;
}

 console.log(divisible5(7));  //false
 console.log(divisible5(15));  //true
 console.log(divisible5(125));  //true


/*  
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/
 


console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(35));
console.log(fooBar(10));
console.log(fooBar(70));



function fooBar(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        return 'foobar';
    } else if (number % 5 === 0) {
        return 'foo';
    } else if (number % 7 === 0) {
        return 'bar';
    } else {
        return number;
    }
}
 // or with nested if-else

 function fooBar(number) {
    if(number % 5 === 0) {
        if(number % 7 === 0) return 'foobar';
        return 'foo';
    }
    else if(number % 7 === 0) return 'bar';
    return number;
}
console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(35));
console.log(fooBar(10));
console.log(fooBar(70));

/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

function getGrade(number) {
if (number >= 90) return 'A';
  else if (number >= 80) return 'B';
  else if (number >= 70)return 'C';
  else if (number >= 60) return 'D';
else return 'F';
}


console.log(getGrade(90));
console.log(getGrade(89));
console.log(getGrade(80));
console.log(getGrade(79));
console.log(getGrade(70));
console.log(getGrade(69));
console.log(getGrade(60));
console.log(getGrade(59));

console.log(getGrade(95));
console.log(getGrade(83));
console.log(getGrade(23));
console.log(getGrade(67));










