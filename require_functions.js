console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

let functions = require('./functions');

console.log(functions.add(2,3));

let per1 = new functions.Person("ahmed", 25);

console.log(`Name is ${per1.name}, and his age is ${per1.age}`);

// ### call BackFunction ###

// Normal Function
function sayHi_Normal(){
    console.log("Hi World! From Normal Function");
}

// Expression Function
let sayHi_Expression = function(){
    console.log("Hi World! From Expression Function");
}

// Arrow Function
let sayHi_Arrow = () => {
    console.log("Hi World! From Arrow Function");
}

functions.callBk(sayHi_Normal);
functions.callBk(sayHi_Expression);
functions.callBk(sayHi_Arrow);