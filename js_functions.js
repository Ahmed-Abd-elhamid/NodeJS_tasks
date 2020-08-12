console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

let arr = [2,3,5,34,203,132,23,23,24,56,21,4,20,50,230]
let sum = (a,b) => a+b;

let find = (arr) =>{
    let val = arr.find( (value,index) => {return value > 200});
    return val;
}

let filter = (arr) =>{
    let ar = arr.filter( (value,index) => value > 200);
    return ar;
}
console.log("Hello Node.js");

console.log(sum(2,3));
console.log(find(arr));
console.log(filter(arr));
setTimeout(start2, 3000);

