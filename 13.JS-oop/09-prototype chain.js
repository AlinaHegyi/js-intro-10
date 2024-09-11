

const engineer = {
    solveProblem: function () {
     console.log('SOLVE PROBLEM');
    }
    };

    const tester = {
        test: function () {
            console.log('TEST');
        }
    };

    const sdet = {
        code: function () {
            console.log('CODE');
        },
        __proto__: tester
    }

sdet.test(); //test
sdet.code(); //code
sdet.solveProblem(); //not a function

console.log(sdet.__proto__); 
console.log(tester.__proto__);
console.log(sdet.__proto__.__proto__);
console.log(sdet.__proto__.__proto__.__proto__);













