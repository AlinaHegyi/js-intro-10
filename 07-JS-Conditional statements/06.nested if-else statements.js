
/*Write a function named as startsVowel() which takes a string word as an argument and returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples: startsVowel("Tech") startsVowel("Apple") startsVowel("abc")
 
*/
 function  startsVowel(str) {
       let string = str.toLowerCase();
  //if (any1.startsWith('a') || any1.startsWith('e') || any1.startsWith('o') || any1.startsWith('u') || any1.startsWith('i'))
  if ('aeiouAEIOU' = vowels) return str.startsWith('vowels'); 
 }

 let weekend = false;
 let weather = 75;
 let moviePerfect = true;
 
 if(weekend) {
     if(weather > 70) {
         console.log('Outdoor concert');
     }
     else {
         console.log('Hackathon');
     }
 }
 else {
     if(moviePerfect) {
         console.log('Movie');
     }
     else if(weather > 70) {
         console.log('Golf');
     }
     else {
         console.log('GYM');
     }
 }
 
 
 
 let price = 100;
 let brand = 'iPhone';
 let ssd = 512;
 let color = 'White';
 
 if(brand === 'iPhone') {
     price += 750; // 850
 
     if(ssd === 32) price += 10;
     else if(ssd === 64) price += 18;
     else if(ssd === 128) price += 25;
     else if(ssd === 256) price += 35;
     else price += 50; // 900
 
     if(color !== 'White') price += 100;
 }
 else {
     price += 500; 
 
     if(ssd === 32) price += 8;
     else if(ssd === 64) price += 15;
     else if(ssd === 128) price += 20;
     else if(ssd === 256) price += 30; 
     else price += 40;
     
     if(color !== 'White') price += 50; 
 }
 
 console.log('The total price = $' + price); //








