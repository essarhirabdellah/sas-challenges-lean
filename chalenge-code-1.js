// counts etrings
// chalange three
let str1 = "i am learn js"
function count_char(text,char){
    let count = 0;
    for(let i = 0;i < text.length; i++){
        if(text[i] === char){
            count++;
        }
    }
    return`this char ${char} repeated ${count}`;
}
console.log(count_char(str1,"a"))
//chalange 5

function count_vaw(text){
    let a = 0;
    let e = 0;
    let u = 0;
    let i = 0;
    let consant = 0;
    for(let i = 0; i < text.length;i++){
        switch(text[i]){
            case "a":a++;
            break;
            case "e":e++;
            break;
            case "u":u++;
            break;
            case "i":i++;
            break;
            default:
                consant++;
             
        }

    }
    return `there are ${a} a ,${e} e,${u} u,${i} i and ${consant} a consanant,`
}
console.log(count_vaw("abdellah")); 

// chalange 19 password checker

function check_pass(password,indm){


     let chars = "azertyuiopqsdfghjklmwxcvbn"
     let char_list = chars.split("");
     let char_upper_list = chars.toUpperCase().split("");
     let num_keys = "1234567890&~#{[|^@]/_^".split("");
     let checks = [chars,char_list,char_upper_list,num_keys];
     let force = 0;


    //  console.log(char_upper_list);
     if (password.length >= indm) {
        for(const check of checks ){
            for(const ilm of check){
                if(force  == 3 )
                   return "your password is strong"   
         
                else if(password.includes(ilm) == true ){
                    force++;
                    break;
                }
            }
            if (force < 3) {
                return "your password is weak"
            }
        } 
     }
     else{
        return `the password should be greter then ${indm}`;
     }
}

console.log(check_pass("a&aaaaaaaa",8));