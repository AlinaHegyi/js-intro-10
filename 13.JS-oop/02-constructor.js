
// TASK: Create a Teacher prototype with fname, lname, age, field properties
// Create 2 Teacher Prototype methods as teach and giveHomework 

// Replicate this work with ES6 Classes as well

// Store all the ages in an array -> 
// Store all the first names in an array -> 
// Find and print the information of the oldest teacher ->


//BEFORE ES6 WE HAVE PROTOTYPE

  // constructor: it is a special method/function used to create objects of the prototype /class
  
// function  Teacher (fname, lname, age, field) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.field = field;
// };

//    Teacher.prototype.teach = function() {
//     console.log(`${this.fname} teaches ${this.field}!`)
//    }; 

//    Teacher.prototype.giveHomework = function() {
//      console.log(`${this.fname} gives homework!`);
//   };

//  const teacher1 = new Teacher('Akin', 'Kaya', 25, 'JavaScript');
//  const teacher2 = new Teacher('Alex','Morgan', 47, 'Math');
//  const teacher3 = new Teacher('John', 'Doe', 45, 'Cypress');
//  const teacher4 = new Teacher('Mariia', 'Doe', 20, 'Science');

// console.log(teacher1);
// console.log(teacher2);
// console.log(teacher3);
// console.log(teacher4);



// USING ES6 CLASSES


class Teacher {
    constructor(fname, lname, age, field) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.field = field;
    }
    teach() {
        console.log(`${this.fname} teaches ${this.field}!`)
    };
    giveHomework() {
        console.log(`${this.fname} gives homework!`)
    };
}



const teacher1 = new Teacher('Akin', 'Kaya', 25, 'JavaScript');
const teacher2 = new Teacher('Alex','Morgan', 47, 'Math');
const teacher3 = new Teacher('John', 'Doe', 45, 'Cypress');
const teacher4 = new Teacher('Mariia', 'Doe', 20, 'Science');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);

teacher1.teach(); //Akin teaches JavaScript!
teacher4.giveHomework(); //Mariia gives homework!


// Store all the ages in an array -> 
// Store all the first names in an array -> 
// Find and print the information of the oldest teacher ->



const teachers = [ teacher1, teacher2, teacher3, teacher4 ];
const ages = [];
//forEach and map solution
teachers.forEach((teacher) => ages.push(teacher.age));// [ 25, 47, 45, 20 ]

console.log(teachers.map((teacher) => teacher.age));

// print all first names
console.log(teachers.map((teacher) => teacher.fname)); //[ 'Akin', 'Alex', 'John', 'Mariia' ]


//find oldest teacher

let oldest = teachers[0];
for (const teacher of teachers) {
 if(teacher.age > oldest.age) oldest = teacher;
}
console.log(oldest); // Teacher { fname: 'Alex', lname: 'Morgan', age: 47, field: 'Math' }

//with reduce method
console.log(teachers.reduce((acc, curr) => acc.age > curr.age ? acc : curr, teachers[0]));
 //Teacher { fname: 'Alex', lname: 'Morgan', age: 47, field: 'Math' }








