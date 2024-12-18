/**
 * Requirement:
 * Write a function named countOccurrence() which takes two string arguments and returns
 * how many times that the first string can form the second string.
 * Examples:
 * countOccurrence("Javascript", "Java") 	-> 1
 * countOccurrence("Hello", "World") 		-> 0
 * countOccurrence("Can I can a can", "anc")​ 	-> 3
 * countOccurrence("Hello", "l")​ 		-> 2
 * countOccurrence("IT conversations", "IT")​ 	-> 2
 * */

const countOccurrence = (str1, str2) => {
    let count = 0;
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    for(let i = 0; i < str1.length; i++){
        let sub = str1.slice(i, i + str2.length).toLowerCase().split('').sort().join('');

        if(sub === sortedStr2){
            count++;
            i += str2.length - 1;
        }
    }
    return count;
}
 console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("IT conversations", "IT"));





/**
 * Write a function named canFormString() which takes two string arguments and returns true if
 * the second string can be formed by rearranging the characters of first string. Return false
 * otherwise.
 * NOTE: This method is case-insensitive and ignore the white spaces.
 * Examples:
 * canFormString("Hello", "Hi") -> false
 * canFormString("programming", "gaming") -> true
 * canFormString("halogen", "hello") -> false
 * canFormString("CONVERSATION", "voices rant on") -> true
 * canFormString("12", "123") -> false
 *
 *
 */
 const canFormString = (str1, str2) => {
     let arr1 = str1.toLowerCase().split('').filter(x => x !== ' ');
    let arr2 = str2.toLowerCase().split('').filter(x => x !== ' ');
    for (const char of arr2) {
        const index = arr1.indexOf(char);
        if (index === -1) {
            return false;
        }
        arr1.splice(index, 1);
    }
    return true;
}
 console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("halogen", "hello"));


/**
 * Count Palindrome
 * Write a function named countPalindrome() which takes a string and returns the number
 * of palindrome words.
 * Note: A palindrome word is a word that reads the same forwards and backwards. Example:
 * level, radar, deed, refer.
 * Examples:
 * countPalindrome("Mom and Dad") -> 2
 * countPalindrome("See you at noon") -> 1
 * countPalindrome("Kayak races attracts racecar drivers") -> 2
 * countPalindrome("") -> 0
 * countPalindrome("No palindrome here") -> 0
 *
 *
 */


const countPalindrome = str => {
    let count = 0;
    const words = str.toLowerCase().split(' ');

    for (let word of words) {
        if (word  &&  word === word.split('').reverse().join('')) {
            count++;
        }
    }

    return count;
};
console.log(countPalindrome(''))
console.log(countPalindrome("Kayak races attracts racecar drivers"))

/**
 * Is Anagram
 * Write a function named isAnagram() which takes two string arguments and returns true if the
 * given strings are anagram. Return false otherwise.
 * NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or
 * phrase. In the context of strings, checking if two strings are anagrams of each other means
 * verifying if they contain the same characters in the same quantities, regardless of the order of
 * those characters.
 * NOTE: This method is case-insensitive and ignore the white spaces.
 * Examples:
 * isAnagram("Apple", "Peach") -> false
 * isAnagram("listen", "silent") -> true
 * isAnagram("astronomer", "moon starer") -> true
 * isAnagram("CINEMA", "iceman") -> true
 * isAnagram("123", "1234") - > false
 *
 *
 */
const isAnagram = (str1, str2) => {
  let newStr1 = str1.toLowerCase().replace(' ', '').split('').sort().join('');
    let newStr2 = str2.toLowerCase().replace(' ', '').split('').sort().join('');

    return newStr1 === newStr2;
}
console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("astronomer", "moon starer"));



/**
 * Is Armstrong
 * Write a function named isArmstrong() which takes a number argument and returns true if
 * given number is armstrong, return false otherwise.
 * NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the
 * power of the number of digits. In other words, an n-digit number is an Armstrong number if the
 * sum of its digits, each raised to the nth power, is equal to the number itself.
 * • Let's take an example to understand it better. Consider the number 153.
 * • To determine if 153 is an armstrong number, we need to check if the sum of its
 * digits, each raised to the power of the number of digits, equals the original
 * number.
 * • 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * • In this case, the sum of the individual digits raised to the power of 3 (the number
 * of digits in 153) is equal to the original number, which means 153 is an armstrong
 * number.
 * Examples:
 * isArmstrong(153) -> true
 * isArmstrong(123) -> false
 * isArmstrong(1634) -> true
 * isArmstrong(153) -> true
 * isArmstrong(1111) -> false
 *
 *
 */

const isArmstrong = num => {
const digits = num.toString().split('');
const power = digits.length;
let total = 0;

for( const digit of digits ) {
    total += Math.pow(Number(digit), power);
}
return total === num;

}
console.log(isArmstrong(153));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));






/**
 * Reverse Number
 * Write a function named reverseNumber() which takes a number argument and returns it back
 * reversed without converting it to a String.
 * Note: Do not convert number to string to complete the task.
 * Examples:
 * reverseNumber(371) -> 173
 * reverseNumber(123) -> 321
 * reverseNumber(12) -> 21
 * reverseNumber(0) -> 0
 * reverseNumber(111) -> 111
 *
 *
 */

const reverseNumber = num => {
    let reversed = 0;
    for(let i = num; i > 0;  i = Math.floor(i / 10)){
        reversed = (reversed * 10) + (i % 10);
    }
    return reversed;
}







/**
 * Find Uniques
 * Write a function named findUniques() which takes two array of number arguments and returns
 * the array which has only the unique values from both given arrays.
 * NOTE: If both arrays are empty, then return an empty array.
 * NOTE: If one of the array is empty, then return unique values from the other array.
 * Examples:
 * findUniques([], []) -> []
 * findUniques([], [1, 2, 3, 2]) -> [1, 2, 3]
 * findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [1, 2, 5]
 * findUniques([8, 9], [9, 8, 9]) -> []
 * findUniques([-1, -2], [1, 2]) -> [-1, -2, 1, 2]
 *
 *
 */

const findUniques = (arr1, arr2) => {
  
    const combined = [...arr1, ...arr2];

  
    const unique = combined.filter(item =>
        (arr1.includes(item) && !arr2.includes(item)) ||
        (!arr1.includes(item) && arr2.includes(item))
    );

    return unique;
};



/**
 *
 */





/**
 *
 */








/**
 *
 */










/**
 *
 */











/**
 *
 */












/**
 *
 */





/**
 *
 */
