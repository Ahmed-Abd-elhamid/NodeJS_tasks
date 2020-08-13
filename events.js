console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

const events = require('events');
const util = require('util');

// constructor function
let Person = function(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// extend events.EventEmitter to Person function (Inheritance)..
util.inherits(Person, events.EventEmitter);

// new objects (people) from constructor function
let ahmed = new Person("ahmed", 25, "male");
let ali = new Person("ali", 20, "male");
let nour = new Person("nour", 22, "female");

let people = new Array(ahmed, ali, nour);

// Add Event Listener to the people ..
people.forEach((person)=>{
    person.on('speak', function(msg){
        console.log(`${person.name} said: ${msg}`);
    });
});

// Emit (Trigger) The Event ..
ahmed.emit('speak', 'he said the truth');
nour.emit('speak', 'no, he is not!');

