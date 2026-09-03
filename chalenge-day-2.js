//day 2

//level one

//welcoming function
let name = "nora";
function great(name){
    return `hi ${name}; !`
}
//put a func insid a value
let welcome = great(name);
console.log(`the programe says ${welcome}`)

//sum of numbers
const sum = (a, b = 0) => {return a + b} ;
console.log(sum(5));

//square func
const square = function (x , y = 2) {return x ** y};
console.log(4)
