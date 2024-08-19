const names = [ 'Alex', 'John' ];


//Adding elements to the end of array
names.push('Mariia');
console.log(names); // ['Alex', 'John', 'Mariia'];

names.push('Jane', 'Data', 'James');
console.log(names); //[ 'Alex', 'John', 'Mariia', 'Jane', 'Data', 'James' ]

//remove elements from the end of the array

names.pop(); //'James'
names.pop(); // 'Data'
names.pop();  // 'Jane'

console.log(names); //[ 'Alex', 'John', 'Mariia' ]

const numbers = [10, 20, 30];
console.log(numbers); // [10, 20, 30]

//adding elements at the beginning of the Array
 numbers.unshift(99);//
 console.log(numbers);//[ 99, 10, 20, 30 ]

 numbers.unshift(15, 23);//
 console.log(numbers);//[ 15, 23, 99, 10, 20, 30 ]

 //removing elements from beginning of array
 
 numbers.shift(); // 15
 numbers.shift(); // 23
 numbers.shift(); // 99

 
