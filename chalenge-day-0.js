
//level one

let age = 19;
//print the age of user
console.log(`your age is ${age}`);



//see the weather outside
let temperature = 30 ;
if (temperature >= 30) {
    console.log("the weather is hot");//if the weather not good
}
else {
    conosle.log("the weather is good you can take a walk");//if the weather is not good
}

//randome number 
let randomNumber = 5 ;
randomNumber %= 2;//remainder the value of the number
if (randomNumber == 0) {
    console.log("the number is even");//if the number is even
}
else {
    console.log("the number is odd");
}

//level two

//value of score
let score = 80 ;
//a analyzing the score and giving a grade
if(score <= 100 && score >= 90){
    console.log("you are A");//if the score is between 90 and 100
}
else if (score <= 80 && score >= 89){
 console.log("you are B")
}
else if(score <= 79 && score >= 70){
    console.log("you are C");
}
else {
    console.log("you are c");
}


//git know the largest number between three numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);//if the num 1 is the largest 
}
if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`);//if the num 2 is the largest 
}
if (num3 > num1 && num3 > num2) {
    console.log(`${num3} is the largest number`);//if the num 3 is the largest 
}

//divsaple on a number
let year = 2026;
if (year % 4 == 0 && year % 100 != 0 ){
    console.log("true");// if the year is divisible by 4 and divisible by 100
}else {
    console.log("false");// if it is somthing else
}


//level three

//bisic culculation
let _num1 =  3;
let _num2 =  5;
let operator =  "/";
switch (operator){
    case "+":
        console.log(num1 + num2);
        break;
case "-":
        console.log(num1 - num2);
        break;
case "*":
        console.log(num1 * num2);
        break;
case "/":
        console.log(num1 / num2);
        break;
default:
    console.log("invalid operator");
    
}
//cheak tha form is a tringle
let angle1 = 40;
let angle2 = 40;
let angle3 = 100;
if (angle1 + angle2 + angle3 == 180) {
    console.log("this form is a tringle");
}
else {
    console.log("this form is not a tringle");
}

//make sure of hight and weight of person
let height = 1.85;
let weight = 90;
let bmi =  weight / (height * height);
if (bmi < 18.5) {
    consol.log("underweight");
}
else if (bmi <= 24.9 && bmi >= 18) {
    console.log("normal weight");
}
else if (bmi >= 25 ){
    console.log("overweight");
}
