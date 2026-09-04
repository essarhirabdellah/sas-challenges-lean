// level one string 



let str1 = "lisa";
let length = str1.length;
// log the length

console.log(length);
// lo g the string  n upercase
console.log(str1.toUpperCase());
//func give u the start and the end of the str
function take_up(str){
    index = str.length - 1
    console.log(`this string start ${str.charAt(0)}`);
    console.log(`this string end ${str.charAt(index)}`);

}
let str2 = "this is a pretty"
take_up(str2);

// replace
let love = "I love apples";
console.log(love);
console.log(love.replace("apples","bananas"));

// level two

let none = "moommpom";
function check_char(name){
    let end = name.length;
    console.log(end)
//    if(end%2 == 0){
    let end1 = name.length - 1;
    console.log(end1)
    let start = 0;
    while(start <= end / 2){
        if (name[start] != name[end1]) {
            console.log(`false the char ${name[start]} != ${name[end1]} `);
        }
        if (name[start] == name[end1]) {
            console.log(`true the char ${name[start]} == ${name[end1]}`);
        }
        start++;
        end1--;
        
    }

//   }
//   else if (end%2 != 0) {
//     console.log("this number of charctors are odd,please fix your word");
//    } 
}
check_char(none);

//revers

let revers1 = "bella";

function revers(word){
  let new_word = "";
  for (let i = word.length - 1; i >= 0 ; i--) {
    new_word += word[i];  
    
  }
  return new_word;
}
console.log(revers(revers1))

// count char
function countChar(str, char){
    let num = 0;
    for(let i = 0; i <= str.length - 1 ;i++){
        if(str[i] == char){
            num++;
        }
    }
    return num;
}
console.log(countChar(revers1, "a"));