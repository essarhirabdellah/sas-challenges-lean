// level one
// cor obj with methode
let car = {
    name:" alfa romie",
    model:2020
}
car.all_info = function(){
    return `this care is ${this.name} from ${this.model} year`;
}

console.log(car.all_info);
 let user = {
    name:"safa",
    isActive:true,
    age:18
 }
 console.log(user)
 user.age = 16;
 console.log(user)
 for(const key in user){console.log(`${key} : ${user[key]} `)}


//  level two
let list = [["abdellah",19],["yousaf",21],["aziz",30],["malak",10]]
function find_old(list){
    let max = 0;
    let name;
    for(const index_person in list){
       if (list[index_person][1] > max) {
        max = list[index_person][1];
        name = list[index_person][0];
       }
}
return `${name} is the oldest person by age ${max}`;
}
console.log(find_old(list));

let prodacts = [["shoes",30,true],["t-shirt",20,false],["socks",5,true]];

function filter_prodact(list_of_prodacts){
    let stock_prodacts = "";
    for (const thing in list_of_prodacts) {
        if(list_of_prodacts[thing][2] == true){
            stock_prodacts += list_of_prodacts[thing][0] + ",";
        }
        
    }
    return `this all prodacts we have in stock ${stock_prodacts}`;
}
console.log(filter_prodact(prodacts));

// borde chalnge
let obj_arr = [{ame:"abdellah",age:19},{name:"omar",age:17},{name:"yousaf",age:21}];

function list_of_age(list) {
    let total =  list.length;
    let sum = 0;
    for(const idx in list){
        sum += list[idx]["age"]
    }
    return sum/total;
}
console.log(list_of_age(obj_arr))

// level three

let total = [{prace:10,quantity:111},{prace:13,quantity:50},{prace:17,quantity:60}]

function card(list) {
    total = 0;
    for(const idx in list){
        total += list[idx]["prace"] * list[idx]["quantity"];
    }
    return total;
}
console.log(card(total))


// level three


let list_employee = [{name:"abdellah",department:"dev"},{name:"ahmad",department:"ai"},{name:"samir",department:"cs"},{name:"aya",department:"cs"}]


function employee(list) {
    let employees = [];
    for(const idx in list){
        if (employees.includes(list[idx]["department"]) === false) {
         employees.push(list[idx]["department"])
    }
        
    }
    let result = {};
    let i = 0;
    while(i < list.length){
        for(const oneof of employees)
         if(Object.hasOwn(list[i],oneof) === true){
             result.oneof = list[i];
         }

        i++;
    }
    console.log(result)
}
    
employee(list_employee);