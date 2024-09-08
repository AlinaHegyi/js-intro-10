 /*
 let initialScore = 0;

function score(){
   return initialScore += 1;
}
 score();
 score();
 score();

 console.log(initialScore); // 3
*/

function score() {
    let initialScore = 0;

    function increase() {
        return initialScore +=1 ;
    }
    return increase;
}

 const increaseFunc = score();

 increaseFunc();
 increaseFunc();
 increaseFunc();
 increaseFunc();
 let result = increaseFunc();
 
 console.log(result); // 5
 
 
 
 function sum(n1, n2) {
   let result = n1 + n2;
   return result;
 }
 
 console.log(result)