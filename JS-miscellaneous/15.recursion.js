


/**
 * write a function that takes a number and returns the sum of the numbers 
 * starting from 1 to given number
 */

function sum1(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(sum1(4));
console.log(sum1(3));


//recursion

function sumRecursive(num) {
    if(num === 0) return 0;
    return num + sumRecursive(num - 1);
}

console.log(sumRecursive(4)); // 10
console.log(sumRecursive(3)); // 6




