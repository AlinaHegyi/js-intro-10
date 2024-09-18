 const { Actions } = require('../utils/actions.js');


 console.log('\n--------------------TASK-PART-1-------------------\n');
 /*
 1. Create a class called Actions (in utils package and in a file called as actions.js)
 2. Create 3 static asynchronous functions with the details given below in this class
 */
 console.log('\n--------------------TASK-PART-2-------------------\n');
 /*
 Create a function called as visitUrl()
 - it takes an argument url
 - it returns a Promise which will be resolved if url starts with 'www' or 'https://'
 - resolve message will be 'URL visited successfully'
 - the Promise will be rejected if url does not start with 'www' or 'https://' with a message 'Wrong URL'
 - delay this method for 1 second for demo purposes
 */
 console.log('\n--------------------TASK-PART-3-------------------\n');
 /*
 Create a function called as login()
 - it takes 2 arguments username and password
 - it returns a Promise which will be resolved if username = 'TechGlobal' and password = 'Test1234'
 - resolve message will be 'Logged in successfully'
 - the Promise will be rejected whether username or password is wrong with a message 'Wrong 
 credentials'
 - delay this method for 3 seconds for demo purposes
 */
 console.log('\n--------------------TASK-PART-4-------------------\n');
 /*
 Create a function called as validateTitle()
 - it takes an argument title
 - it returns a Promise which will be resolved if the title is not empty, undefined or null
 - resolve message will be 'Title validated successfully'
 - the Promise will be rejected if title is empty, null or undefined with a message 'Wrong title'
 - delay this method for half a second for demo purposes
 */
 console.log('\n--------------------TASK-PART-5-------------------\n');
 /*
 Export the Actions class with CommonJS Modules (using module.exports)
 */
 console.log('\n--------------------TASK-PART-6-------------------\n');
 /*
 Create a new file called as practice09.js (under practices package)
 Import the Actions class with CommonJS Modules (using require)
 */
 console.log('\n--------------------TASK-PART-7-------------------\n');
 /*
 Create a test method called as test1()
 - Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() 
 methods)
 - Validate the output is as below
     OUTPUT:
     URL visited successfully
     Logged in successfully
     Title validated successfully
 */
 console.log('\n--------------------TASK-PART-8-------------------\n');
 /*
 Create a test method called as test2()
 - Invoke visitUrl(), login() and validateTitle() synchronously in this method (use async-await keywords)
 - Validate the output is as below
     OUTPUT:
     URL visited successfully
     Logged in successfully
     Title validated successfully
 */
 // NOTE: To practice errors, provide wrong URL, credentials, or title 
 // respectively to make sure your error-handling works properly.





        //task 7

//   function test1(url, username, password, title) {
//     Actions.visitUrl(url)
//     .then(() => Actions.login(username, password))
//     .then(() => Actions.validateTitle(title))
//     .catch((err) => console.log(err));
//     }


// test1('htps://w', 'TechGlobal', 'Test1234', 'youtube' );



      //    task 8

  async function test2(url, username, password, title) {
     try {
        await Actions.visitUrl(url);
        await Actions.login(username, password);
        await Actions.validateTitle(title);
     }
     catch (err) {
        console.log(err);
     }  
    }


test2('', 'TechGlobal', 'Test1234', 'youtube');









