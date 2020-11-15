/**
 * 
 * date and time examples
 * 
 */
console.log('Now we\'r printing date and time');
let value;

const today = new Date();
const birthday = new Date('12-31-1996');

value = birthday;
value = today.getMonth(); //this is 0 based array - January=0
value = today.getDate();
value = today.getDay();

console.log(value);



