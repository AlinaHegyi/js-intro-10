console.log("\n---------------TASK1---------------\n");
/**
 * Requirement:
Write a function named countVC() which takes a string argument and returns an object with
 the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}

 */
const countVC = (str) => {
  const vowels = "aeiouAEIOU";

  let vowelCount = 0;
  let consonantCount = 0;

  str = str.toLowerCase();

  for (let char of str) {
    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return {
    vowels: vowelCount,
    consonants: consonantCount,
  };
};

console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));

console.log("\n---------------TASK2---------------\n");
/**
 * Requirement:
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters,
 numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object.
 Also spaces do not count towards any category
Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}

 */
const countChars = (str) => {
  let lettersCount = 0;
  let numbersCount = 0;
  let specialsCount = 0;
  str = str.toLowerCase();

  for (let char of str) {
    if (char <= "z" && char >= "a") {
      lettersCount++;
    } else if (char <= 9 && char >= 1) {
      numbersCount++;
    } else if (char !== " ") {
      specialsCount++;
    }
  }
  let result = {};
  if (lettersCount > 0) {
    result.letters = lettersCount;
  }
  if (numbersCount > 0) {
    result.numbers = numbersCount;
  }
  if (specialsCount > 0) {
    result.specials = specialsCount;
  }

  return result;
};

console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("   "));
console.log(countChars(""));

console.log("\n---------------TASK3---------------\n");

/**
 * Requirement:
Write a function named maxOccurrences() which takes a string argument and returns 
the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string.
 This task is case sensitive. Ignore spaces. 
 If the string is empty or consist of spaces only, then return an empty string.
Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	-> "c"
maxOccurrences("    ab    ")​    	-> "al"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("  ")   ​ 	-> ""
maxOccurrences("")   		-> ""

 */
function maxOccurrences(s) {
  let newString = "";
  for (const char of s) {
    if (char !== " ") {
      newString += char;
    }
  }

  if (newString === "") {
    return "";
  }

  newString = newString.split("").sort().join("");

  let maxChar = "";
  let maxCount = 0;
  let currentCount = 1;

  for (let i = 1; i < newString.length; i++) {
    if (newString[i] === newString[i - 1]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChar = newString[i - 1];
      }
    }
    currentCount = 1;
  }

  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxChar = newString[newString.length - 1];
  }

  return maxChar;
}
console.log(maxOccurrences("Hello"));
console.log(maxOccurrences("Occurrences"));
console.log(maxOccurrences("    ab    "));
console.log(maxOccurrences("12   3   21"));
console.log(maxOccurrences("     "));
console.log(maxOccurrences(""));

console.log("\n---------------TASK4---------------\n");

/**
 * Requirement:
Write a function named starOut() which takes a string 
argument and returns it back with every star removed as well 
as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	-> "abc"
starOut("***")   	-> ""
starOut("   ")   ​ 	-> "   "
starOut("")   	-> ""

 */
const starOut = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "*" && str[i - 1] !== "*" && str[i + 1] !== "*") {
      result += str[i];
    }
  }
  return result;
};

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("***"));
console.log(starOut("   "));

console.log("\n---------------TASK5---------------\n");

/**
 * Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments
 and return the roman numeral converted to the number. A roman numeral is a set of symbols that add up to a number.
  CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I") 		-> 1
romanToInt("IV") 		-> 4
romanToInt("CXII") 		-> 112
romanToInt("MMM") 		-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	​-> 1666

 */
const romanToInt = (s) => {
  const symbols = ["I", "V", "X", "L", "C", "D", "M"];
  const values = [1, 5, 10, 50, 100, 500, 1000];

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const index = symbols.indexOf(s[i]);
    const currentValue = values[index];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

console.log(romanToInt("I"));
console.log(romanToInt("IV"));
console.log(romanToInt("CXXII"));
console.log(romanToInt("MMM"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));
