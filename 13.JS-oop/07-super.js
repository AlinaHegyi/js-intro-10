/*
create a class called Customer and a constructor with bellow fields
fname, lname, id
*/



class Customer {
    constructor(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
}
/*
Create a class called PrimeCustomer
Extend from Customer
constructor with below fields
fname, lname, id, primeCode
*/
/*
Create a Customer object: John Doe 123
Create a PrimeCustomer object: Alex Smith 789 ABC
Print these objects
*/

class PrimeCustomer extends Customer {
    constructor(fname, lname, id, primeCode){
        console.log('this is prime Customer constructor');
        super(fname, lname, id);
        this.primeCode = primeCode;
    }
}


const customer = new Customer('John', 'Doe', 123);
const primeCustomer = new PrimeCustomer('Alex', 'Smith', 789, 'ABC')

console.log(customer);
console.log(primeCustomer);


