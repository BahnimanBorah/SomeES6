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
 const today = new Date();

 let html = `
 <ul>
 <li>Title: ${title}</li>
 <li>Message: ${message}</li>
 <li>Author: ${author}</li>
 <li>Date: ${today}</li>
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