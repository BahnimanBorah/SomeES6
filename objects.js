const person = {
    firstName: 'Bahniman',
    lastName: 'Borah',
    age: 24,
    email: 'bahnimanborah@yahoo.in',
    hobbies: ['Music','Sports','Travelling','Coding'],
    address: {
        city: 'Mehsana',
        state: 'Gujarat',
        pincode: 384002
    },
    getDOB: function(){
        return 1996;
        //or currentYear - this.age';
    }

};

let val;

val = person.firstName;
// val = person['firstName'] also works
val = person;
val = person.getDOB();

console.log(val);