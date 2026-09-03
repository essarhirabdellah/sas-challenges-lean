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

//level two

//tampreture 
function celsiusToFahrenheit(c){
    let n = (c * 9/5) + 32 ;
    if (c > 26 && c < 30) {
        return ` the weather is good ${n} `;
    }
    return n;
}
console.log(celsiusToFahrenheit(27))
//make sure the string embty
const isEmpty = (str) => {
  for (const char in str){

    if(str = ""){return "true"};
    if (str = " ") {return "false"};

}}
let str = "lisa";
console.log(isEmpty(str))

//fact

function factorial(n){
    let risult = 0;
    let max1 = n--
    let max = n
    while(max >= 1 && max >= 2 ) {
        
        risult = risult + max*max1
        max--
        max1--
        
    }
    return `the fact is ${risult}`;

}
console.log(factorial(20))
//arguments 
function into(){
    console.log(arguments[0])
}
into(3);

//calculate
function calculate(a, b, operation){
    switch(operation){
        case "*":
            return a*b;
            break;
        case "+":
            return a+b;
            break;

        case "-":
            return a-b;
            break;
        default:

           return `this operation ${operation} did not exact`;

    }
}
console.log(calculate(1,8,"+"))


//createMultiplier
function createMultiplier(multiplier){
    return  mul = (multiplier) =>  multiplier / 4 ;

}
console.log(createMultiplier(5))

//check arry of elment
let arr = [1,2,3,4]
function filterOddNumbers(arr){
  for (let i = 0; i <= arr.length; i++) {
    if (i%2 == 0) {
        console.log(`true, this number ${i} is odd`)
    }
    
  }
}
filterOddNumbers(arr);