//day one
//level one
//using while loop print from 1 to 20
let a = 1;
while (a <= 20 ){
  console.log(a);
  a++;
  }
//sum of number
for(let z = 1 ; z <=100 ; z++){
  //updat the value
  
  //print the value
  console.log(z + z);
  }
//table of multiplication of number 5
let num1 = 5;
let result = 0;
for (let e = 1 ; e <= 10 ; e++){
  //update the number
  result = num1 * e
  //print the ruselt
  console.log(result);
  }
//level two 
//fiizzbuzz
for(let r = 0 ;r <= 50 ;r++){
  if(r%3 == 0){
    //log the frizz number
    console.log(`this number is frizz ${r}`);
    
    }
  //make sure the number buzz  
  else if (r%5 == 0){
    //log the buzz number
    console.log(`this number is buzz ${r}`);
  }
  //if the number frizzbuzz
  else if (r%5 == 0 && r%3 == 0 ) {
    
  console.log(`this number is frizzbuzz ${r}`);
  
  }
}
//count vauls
//sting valuet
let myname = "abdellah";
let checkout = "";
for(let t = 0;;t++){
 if (myname == checkout){
    console.log(`there are ${t} in this string ( ${myname} ) `);
    break;
 }
checkout += myname[t] ;
}
//squre of stars

let y = 0;
let star = "*"
while (y <= 5) {
    
    let linstar = ""

    u = 0;
    while(u <= 5){
      linstar += star;
      u++;
    }
    console.log(linstar)
    y++;
    
}
//level three 

//prime number 
let o = 0;
while (o <= 50){
 if (o % 2 > 0 ){
  console.log(`${o} is prime number`);
 }
 else{
  console.log(`${o} is not a prime number`);
 }
 o++;
}
//build a tirngle

let s = 0;
let d = 1;
for(let p = 0 ; p < 5 ; p++){
  let space = " ";
  let t_star = "*";
  let line = "";
  //building one line
  while(s <= 4){
    line += space;
    s++;
  }
  console.log(s + d == 5)
  while(s + d == 5){
    line += t_star;
    d++; 
  }
  console.log(line)
  s--;
}
//fibonacci 
// o = 0;
for (let f = 0, g = 1; f < 10 && g <= 10 ; g++ , f++){
  console.log(f + g);
}