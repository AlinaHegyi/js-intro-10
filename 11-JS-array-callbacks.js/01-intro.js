
function greet(func) {
    console.log('Hello');
    func();
 }

function getInfo() {
    console.log('Today is Saturday');
}


greet(getInfo); 
// greet is higher order funct, getInfo is a callback function





