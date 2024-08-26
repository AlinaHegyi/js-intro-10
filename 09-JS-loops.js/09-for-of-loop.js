
const cities = ['Rome', 'Chicago', 'Miami', 'Berlin', 'Tokyo'];

//console.log(cities[0]);
//console.log(cities[1]);
//console.log(cities[2]);
//console.log(cities[3]);
//console.log(cities[4]);
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

//for...of loop to iterate an array

for (const city of cities){
    console.log(city);
}

const numbers = [10, 20, 30,40, 23 ];

//log elements using for....of loop  --this is prefered for use with arrays
for( const number of numbers){
    console.log(number);
}

// use for loop
for( let i = 0; i < numbers.length; i++ ){
    console.log(numbers[i]);
}


// use while loop
let j = 0;
while(j <= numbers.length - 1){
    console.log(numbers[j]);
    j++;
}

    














