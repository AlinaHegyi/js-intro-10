
const car = {
    color: 'Black',
    year: 2024,
    make: 'BMW',
    model: 'X7'
  };

//console.log(car['color']);
//console.log(car['year']);
//console.log(car['make']);
//onsole.log(car['model']);

for (const key in car){
    console.log(`The key is "${key}" and the value is "${car[key]}"`);
}

//for in loop with arrays -> keys are indexes and the values are the element

const names = ['Maria', 'John', 'Alex', 'Alex'];

for (const key in names){
    console.log(`The key is "${key}" and the value is "${names[key]}"`);
}


//exercise
const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco'],
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
  }
// Log each property value as 'Property key = {key} and the value is {value}'
// Log all the favCities one by one
// Chicago
// Miami
// Berlin

for (const key in person) {
    console.log(`Poperty key = ${key} and the value is ${person[key]}.`);
}
//for of loop --preffered
for (const city of person.favCities) {
    console.log(city);
}

//for loop
const cities = person.favCities;

for ( let i = 0; i < cities.length; i++){
    console.log(cities[i]); break ;
}

