 ///before es6
 let make = 'Tesla';
 let model = 'S';
 let year = 2023;

 const car = {
    make: make,
    model: model,
    year: year
 };

 ////after es6 - enhanced object literals

 const car2 = {
    make,
    model,
    year
 };
 console.log(car);
 console.log(car2);