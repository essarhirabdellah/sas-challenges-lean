//pop and unshirt
let arr1 = ["blue","orange","pink"];
arr1.unshift("green");
arr1.pop();
console.log(arr1)

// sum of array

let arr_nbr = [1,2,3,4,5];
let sum=0;
for(const nbr of arr_nbr){
    sum += nbr
}
console.log(sum)

// incoldes

function ncld(arr,elm) {
    for(const el of arr){
        if (el == elm) {
            return "true";
        }
    }
    return "false";
}
console.log(ncld(arr1,"orange"))

// level three

function nbr_max(arr) {
    let max = 0;
    for (const nbr of arr) {
        if (nbr > max) {
            max = nbr
        }
        
    }
    return `the gretest number is ${max}`
}
console.log(nbr_max(arr_nbr))
function remove_nbr(arr) {
    list = []
    for(const nbr of arr){
        if (list.includes(nbr) === true) {
            continue ;
        }
        else if (list.includes(nbr) === false) {
            list += nbr ;
        }
    }
    return list;
}
let arr_obj = new Array(1,2,2,4,3,4,8,9)
console.log(remove_nbr(arr_obj))

//reverce
function reverce_arr(arr){
    let new_one = [];
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        new_one += arr[i];
    }
    return new_one;
}
console.log(reverce_arr(arr_obj))

//level three 2d array

let array_2d = [["audi","BMW","vorswagne"],["alfa romie","frarie"],["RAM"],["toyotaS"]]
function make_it_one(arr) {
    let one_list = [] 
    for(const list of arr){
        for (const elm of list) {
            one_list.push(elm);
            
        }

    }
    return one_list;
}
console.log(make_it_one(array_2d));

