 //ARRAY DESTRUCTURING
const arr = [ 'abc', 'xyz', 'hello', 'hi' ];

// let first = arr[0];
// let second = arr[1];
// let third = arr[2];
// let fourth = arr[3];


const [first, second, third, fourth] = arr;


////object destructuring

const account = {
    username: 'TechGlobalSchool',
    email: 'tgschool@gmail.com',
    password: 'Test1234'
};

const { username, email, password } = account;

console.log(username); //TechGlobalSchool
console.log(email); //tgschool@gmail.com
console.log(password);//Test1234






