
console.log(false || 'hello');   //hello

console.log(false ?? 'Hello');  //false
console.log(NaN ?? 'Hello');  //NaN
console.log(false ?? 'Hello');  //false

console.log(false || 'Hello');  //hello
console.log(NaN || 'Hello');  // hello
console.log(false || 'Hello');  //hello

  
console.log(null ?? 'hello');   //hello
console.log(undefined ?? 'Hello'); //hello


//_____??______   --> first expression is null or undefined, then it gets the second






