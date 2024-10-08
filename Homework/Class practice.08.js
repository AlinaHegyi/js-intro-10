/*
. Create a class called Author
2. Create a constructor which takes firstName, lastName, country, array of books
3. Create a function called as getFullName() for Author object that will return {firstName lastName}
4. Create a function called as getBooks() for Author object that will return all the books
*/
//TASK-PART-2
/*
1. Create a class called Book
2. Create a constructor which takes title, genre, page
*/
//TASK-PART-3
/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.
Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973


*
Now, solve this using prototypes instead of ES6 classes
*/


 class Author {
    constructor (firstName, lastName, country, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;
    }
 getFullName() {
    return `${this.firstName} ${this.lastName}`
}

 getBooks() {
    return this.books;

}
}
 
class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of swords', 'Epic Fantasy', 973);


const author = new Author('George R. R.', 'Martin', 'USA', [book1, book2, book3]);

console.log(author.getFullName());
author.getBooks().forEach(book => console.log(book));








// function Author(firstName, lastName, country, books) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.country = country;
//     this.books = books;
// }

// Author.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

//  Author.prototype.getBooks = function() {
//     return this.books;

// }

// function Book (title, genre, page) {
//     this.title = title;
//     this.genre = genre;
//     this.page = page;
// }

// const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
// const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
// const book3 = new Book('A Storm of swords', 'Epic Fantasy', 973);


// const author = new Author('George R. R.', 'Martin', 'USA', [book1, book2, book3]);

// console.log(author.getFullName());
// author.getBooks().forEach(book => console.log(book));


