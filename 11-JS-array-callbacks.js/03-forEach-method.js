
const names = [ 'James', 'John', 'Alex', 'Mariia' ];

console.log('\n--------iteration of arrays with for...of loop--------\n');


for(const name of names) {
  console.log(name);
}


console.log('\n--------iteration of arrays with for loop--------\n');


for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}



console.log('\n--------iteration of arrays with forEach method--------\n');


names.forEach((x) => console.log(x));

// Print each name uppercased


names.forEach((name) => console.log(name.toUpperCase()));



//print each names first letter and last letter together


names.forEach((name) => {
 let firstLetter = name[0];
 let lastletter = name.length[-1];
 let result = name[0] + name.at(-1);
 console.log(result);
});
 

console.log('\n--------iteration of arrays with forEach method - names with 4 letters--------\n');

// print the names that has length = 4 letters

names.forEach((name) => {
    if(name.length === 4) console.log(name);
});

//for (consrt name of names){
//     if(name.length === 4) console.log(name); //  }


//store the length of each name in a different array
//// [ 'James', 'John', 'Alex', 'Mariia' ] -> [ 5, 4, 4, 6 ]

onsole.log('\n--------iteration of arrays with forEach method - length of names--------\n');

let result = [];

names.forEach((name) => {
    XPathResult.push(name.length);
});

console.log([result]);

console.log('\n--------iteration of arrays with .map() method-length of names--------\n');


const result2 = names.map((x) => {
  return x.length
});

console.log(result2);



