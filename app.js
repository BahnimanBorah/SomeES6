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
console.log("Printing a value of name");
 var name = 'Bahniman Borah';
 console.log(name);
 console.log("Now we have changed the value of name");
 console.log(name);

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

const person = {
    name: 'Bahniman Borah',
    occupation: 'Software Engineer',
    dateOfJoining: '03-06-2019'
}; // this is an object literal

console.log(person);

const numbers = [
    1,2,3,4,5,6,7,8,9,10
];

console.log(numbers);

/**
 * There are 6 primitive data types in javascript
 * String, number, Boolean, Null, Undefined, Symbols (ES6)
 */

 const guy = 'Arjun';
 console.log(typeof guy);

 const today = new Date();
 console.log(today);

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

const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = Math.PI.toFixed(4);

val = Math.round(2.4);
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
console.log(val);