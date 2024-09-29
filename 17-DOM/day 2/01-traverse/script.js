
/**
 * Traversing the DOM
 */


const parentEl = document.getElementById('parent');

const child1El = document.getElementById('child1');
const child2El = document.getElementById('child2');
const child3El = document.getElementById('child3');

/**
 * 1. Node only */

//parentNode
console.log(child1El.parentNode); //give you the parent div
console.log(parentEl.parentNode); //give you the parent div of parent, which is <body>

// child nodes
const childNodes = parentEl.childNodes;
console.log(childNodes);

// firstChild, lastChild
console.log('first child', parentEl.firstChild); //text
console.log('last child' ,parentEl.firstChild); //text

//previousSibling, nextSibling

console.log('Previous to child1', child1El.previousSibling); //text
console.log('Next sibling of child 1', child1El.nextSibling); // text

 /* 2. Elements */
 // parent element
 console.log('Parent element of child 1', child1.parentElement); //parent div
 console.log('Parent element of parent div', parentEl.parentElement); // body

 //children
 console.log('Children of parent div', parentEl.children);


//firlsElementchild lastElementchild
 console.log('first element child', parentEl.firstElementChild); // child1
 console.log('last element child' ,parentEl.lastElementChild); //child3


// 2 different ways to access the middle child
 console.log('child 2', child1El.nextElementSibling); //child2
 console.log('child 2', child3El.previousElementSibling); //child2




