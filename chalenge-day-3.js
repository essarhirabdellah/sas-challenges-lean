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

// level three

//str2
function uppper_first(phrase){
    let str = "";
    for(let i = 0; i < phrase.length; i++){
        if (i == 0) {
            str += phrase[i].toUpperCase();
        }
        else if (phrase[i] == " ") {
            let b = i + 1;
            let y = phrase[b].toUpperCase();
            str += " " + y;
            i++;
        }
        else{
            str+=phrase[i];
        } 
    }
    return str;
}
console.log(uppper_first("hi welcome"))

// count litters
function count_every(phrase) {
    let count_str = "";
    let x = 0;
    let count = 1;
    let index = phrase.length -1;
    for(let i = 1 ; i <= index ; i++){

        if (phrase[i] == phrase[x]) {
            count++;
        }
        else if (phrase[i] != phrase[x]) {
            count_str+=`${count}${phrase[x]}`;
            count = 1;
        } 
        if (i == index) {
          count_str+=`${count}${phrase[x]}`;
          return count_str;
     }
        x++;
    }
}
console.log(count_every("wooooww"));


// argament chack

function check_arg(word1,word2){
  if (word1.length == word2.length) {
    for (let i = 0; i < word1.length; i++) {
        
        if (word1[i] == word2[i]) {
            console.log(`${word1[i]} == ${word2[i]}`);
        }
        else if(word1[i] != word2[i]) {
            console.log(`${word1[i]} != ${word2[i]}`);
        }
        
    }
  }
  else if (word1.length != word2.length) {
    console.log("use the same words lenght");
  }
}
check_arg("abdellah","abdullah")