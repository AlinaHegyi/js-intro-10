/*
this keyword
*/


const person = {
    fname: 'John',
    lname: 'Doe',
    fullname: function () {
      console.log(`The fullname is ${this.fname} ${this.lname}.`);
    }
  }
// function bnorrowing from one object to another

  person.fullname(); // The fullname is John Doe.
  
  const student = {
    fname: 'Alex',
    lname: 'Smith'
  }

  person.fullname.call(student); // the fullname is Alex Smith



 //borrowing a function for an object

  function hi(str) {
    console.log(`Hi, ${str}!`)
  }

  const instructor = {
 name: 'John Doe'
  }

  hi('Data'); // Hi, Data!
  hi.call(instructor, instructor.name); // Hi John Doe!