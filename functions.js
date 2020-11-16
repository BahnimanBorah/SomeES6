/**
 * 
 * he we'll check the javascript functions
 * 
 * we'll see different types of functions
 */

 // use putting default params to 
 function greet(firstname = 'Mr.NoName ?'){
     //console.log('function greet is being called ..');
    return `Hello ${firstname}, nice to meet you !`;
 }

let name;

name = "John";

console.log(greet(name));

/**
 * below is a function expression
 */

 const square = function(x = 5){ // x=5 is default parameter
    return x*x;
 };

console.log ('square function ..' + square(4));


/**
 * below is a IFFY expression
 * 
 */

 (function(){
    console.log('Running iffy ...');
 })();

//  (function(name){
//     console.log('Running iffy ...'+name);
//  })();

/**
 * 
 * proprty methods
 * 
 */

const todo = {

    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo number .. ${id}`);
    },
    delete: function(id){
        console.log(`Deleting todo number ..${id}`);
    }

};

todo.add();
todo.edit(7);
todo.delete(7);


/**
 * 
 * Arrow functions is missing ..
 * a
 */
console.log("hello goken !");