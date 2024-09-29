console.log('This is JavaScript');

//test/qa, dev, prod(no error)

//client(front end development), server

/**WINDOW */

console.log('window', window); //window in client environment is an object
console.log(typeof window); // object
//in server side window is undefined

// /** alert */

// alert('HI');
// const alertAns = alert('How are you?');
// alert('SALUT');

// const alertAns = alert('Ce mai faci?');
// console.log(alertAns);

/**PROMPT */
// const ans = prompt('Cum te simti?');
// console.log(ans); // string, null, emptynstring depending on what user decides to do

// const confirmAns = confirm('Esti gata de atac?');
// console.log(confirmAns); //returns a boolean true or false

// const ans = prompt('How are you today?');
// console.log(ans); //string, null, empty string

// /**CONFIRM */

// const confirmAns = confirm('Are you ready to enter?');
// console.log(confirmAns); // true or false

/**innerHeight and innerWidth */

console.log(innerHeight); //number
console.log(innerWidth);  // number


/**
 * LocalStorage
 * - setItem()
 * - getItem()
 * - removeItem()
 * - clear()
 */

localStorage.setItem('username', 'tg20');

const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020');
localStorage.setItem('username3', 'tg202020');
localStorage.setItem('username3', 'tg111');

localStorage.clear()












