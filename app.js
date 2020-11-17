/*
adding some style to pages
*/

// log to console
console.log('Welcome to the demo');
/*
This app will cover the basic features that are available in ES6
*/

/*
Some useful tricks

use
console.time('timer_name')
- you can perform operation between these two timer logs - and when your operation ends it will give you the time it took from timer start to timer end
console.timeEnd('timer_name')
*/

/**
 * var, let and const are variables that we can define
 * 
 * let and const are block level
 */
// console.log("Printing a value of name");
//  var name = 'Bahniman Borah';
//  console.log(name);
//  console.log("Now we have changed the value of name");
//  console.log(name);

 /**
  * now we will go into rules
  * 
  * rules of variables -
  * it can include letters, numbers , underscore and money sign
  * they cannot start with a number
  * eg- var 1name is wrong 
  * 
  * 
  */

  /**
   * let is very similar to var
   * we can reassign this value
   * 
   * const on the other hand cannot be reassigned
   * use const when you want others to know that this variable
   * value should not be altered
   */

// const person = {
//     name: 'Bahniman Borah',
//     occupation: 'Software Engineer',
//     dateOfJoining: '03-06-2019'
// }; // this is an object literal

// console.log(person);

// const numbers = [
//     1,2,3,4,5,6,7,8,9,10
// ];

// console.log(numbers);

/**
 * There are 6 primitive data types in javascript
 * String, number, Boolean, Null, Undefined, Symbols (ES6)
 */

//  const guy = 'Arjun';
//  console.log(typeof guy);

//  const today = new Date();
//  console.log(today);

/* 
value.length - length only works on strings
value.toFixed() - it will convert to a number
parseInt('100') - all convert string to number
similarly parseFloat('100.00')
value.toFixed(x) will give us x decimal points
*/
 /**
  * toString() to convert things to string
  * 
  */

  /**
   * 
   * Math object
   * 
   */

// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = Math.PI.toFixed(4);

// val = Math.round(2.4);
// Math.ceil(2.4);
// Math.florr(2.8);
// Math.sqrt(64);
// Math.abs(-3); gives positive number always
// Math.pow(8,2);
// Math.min(x,y,z,..) returns the minimum number - similar max function
// Math.random() - gives us a random decimal
// Math.random() * 20 + 1 will give us 1 to 20 
// Math.floor(Math.random()*20+1); to remove decimal
//output
// console.log(val);

/**
 * 
 * Now moving on to Strings
 * 
 * 
 */

//  const firstName = "Bahniman";
//  const lastName = "Borah";

//  let fullName;

 //using concatenation
// fullName = firstName + ' ' + lastName;

// use += to append

/**
 * if we use ' in a sentence
 * to mostly we should use double quotes ""
 * else we can escape with a backslash \ 
 * add backslash just before the '
 * 
 * toUpperCase() and toLowerCase() methods also useful
 * IndexOf()
 * lastIndexOf()
 * charAt()
 * substring(x,y)
 * slice()
 * split(delimiter)
 * replace()
 * includes() - string has the word returns true
 */

 //output
// console.log(fullName);

/**
 * 
 * Let's go on to template literals (ES6)
 * 
 */

 const title ="The Welcome Page";
 const message = "this is a ES6 and regular JavaScript tutorial";
 const author = "Bahniman Borah";
 const today1 = new Date();

 let html = `
 <ul>
 <li>Title: ${title}</li>
 <li>Message: ${message}</li>
 <li>Author: ${author}</li>
 <li>Date: ${today1}</li>
 <li>${ author.length > 10 ? 'author has a long name' : 'good name author !'}</li>
 </ul>
 `;

 document.body.innerHTML += html;

 /**
  * Now moving on to Arrays and Array methods
  * 
  * two ways to create Arrays
  * const numbers = [1,3,5,7]
  * or
  * const numbers = new Array(1,3,5,7)
  * 
  * arrays can be of strings too or mixed different data types
  * 
  * Array.isArray(variable) - to check if some variable is an array
  * 
  * change any index in array with arrayname[2]=33
  * 
  * indexOf() method works for arrays
  * 
  * adding new numbers
  * 
  * arrayname.push(2500) add to end
  * arrayname.unshift(2500) add to front
  * arrayname.pop() - removes the end item
  * arrauname.shift() - remmoves front item
  * arrayname.splice(x,y) - removes indexes x to y 
  * arrayname.reverse() - you know what it does
  * arrayname.concat(array2) - concates 2 arrays
  * arrayname.sort() - this will only sort base on 1st number
  * 
  * use this instead
  * 
  * val = numbers.sort((x.y) => {
  * return x-y;
  * }); 
  * 
  * find method eg-
  * 
  * function under50(num){
  *     return num>50;
  * }
  * 
  * val = numbers.find(under50); - numbers is array here
  */

  /**
   * document object
   * 
   * document - all, all.length, head, body, doctype, domain, URL, characterSet,
   * 
   * we can access all forms in document using document.forms[] array 0,1,2 etc
   * 
   * we can get same with document.images, document.scripts, 
   */


/**
 * DOM Selectors 
 * 
 * 1)getElementById() - remember we can use document object to change anything real time
 * 
 * always better to create a variable and then get the document.element to manipulate
 * 
 * 2) querySelector() - use as document.querySelector(#id)
 *  document.querySelector(.classname)
 * document.querySelector(h5) - will get 1st h5 tag
 * if more than 1 h5 and you still want to select then we can use css3 code
 * 
 * document.querySelector('li:nth-child(2)') - will get us the 3rd li tag
 * 
 * document.querySelector('li:nth-child(odd or even)') then you need to use document.querySelectorAll()
 * 
 * 
 * 3) document.getElementsByClassName(className) - it will give all elements of that particular class name
 *  
 * we can also mix this with querySelector() - eg 
 * 
 * let val = document.querySelector('ul').getElementsByClassName('className') - will give us the UL elements with the class name of classNAME
 * 
 * 4) document.getElementsByTagName('ul') - also usable but I personally don't see any usefulness
 * 
 * 5) document.querySelectorAll('ul') - 
 * 
 * if we do querySelectorAll() - it already changes into a node list - same like array
 * 
 * 
 */

 /**
  * Travaersing the DOM
  * 
  * get some element using document.querySelector('ul.collection') - this one will get ul - list with classname=collection
  * 
  * line-breaks introduces text-nodes which are nothing but line-break between 2 tags
  * 
  * list.childNodes will give us everything , not just the elements
  * list.children will give us only the elements - better use this 
  * 
  * 
  * this childNode and children will be useful when we have nested elements
  * 
  * to get siblings inside parentelement use = listItem.nextElementSibling
  * 
  * 
  * 
  */

/*
Creating an element in the DOM

const li = document.createElement('li');

li.className = 'collection';
li.id = 'list-item';

li.appendChild(document.createTextNode('message'));

document.querySelector('ul.collection').appendChild(li);

*/

/*
Replacing elements 
eg - replace h5 with h2

const newHeading = document.createElement('h2');
newHeading.id = 'task=title';

newHeading.appendChild(document.createTextNode('Task list'));

const oldHeading = document.getElementById('task-title');

//parent element
const cardAction = document.querySelector('.tast-title');

cardAction.replaceChild(oldHeading, newHeading);
*/

/*
Remove element

getting all list items

const lis = document.querySekectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);

*/

/*
Classes and Attributes

const firstLi = document.querySelector('li:first-child');

const link = firstLi.children[0];

val = link.className'
val = link.classList; or link.classList[0];
link.classList.add('test') - this way we can add a new class in element

console.log(val);
*/

/*
EVENT LISTENING

const button = document.querySelector('.clearTaskButton');
button.addEventListener('click',function(){
    console.log('Event fired !');
});

we can also pass an event object into the callback function 

button.addEventListener('click', function(event){
    event.preventDefault(); - suppose the button is a link - thus on clicking the button it would try to re-direct to some URl that is available in its href attribute, but using this method will prevent the link to behave that way
    or we can have a # in the href attribute
});

we can also pass pre-defined functions instead of creating the callback method right there
eg - button.addEventListener('click', deleteTask);
function deleteTast(event){
    console.log('Delete the task');

    we can also print the event object - it will give us details about the element
}


*/