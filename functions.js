console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multi = (a,b) => a*b;
let div = (a,b) => a/b;

let Person = function(name, age) {
    this.name = name;
    this.age = age;
}

let callBack = function(fun){
    fun();
}

module.exports = {
    add: add,
    sub: subtract,
    mult: multi,
    div: div,
    Person: Person,
    callBk: callBack,
}