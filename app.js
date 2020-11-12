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
   * 
   */

const person = {
    name: 'Bahniman Borah',
    occupation: 'Software Engineer',
    dateOfJoining: '03-06-2019'
};

console.log(person);