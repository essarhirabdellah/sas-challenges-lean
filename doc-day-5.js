//creat a object
let my_obj = {
    name: "sara",
    age: 18,
}
//  add a elment

my_obj.hight = 1.70;
console.log(my_obj)

//remove elment
delete my_obj.age;
console.log(my_obj)

//make sure about key
console.log(Object.hasOwn(my_obj,"name"))
//add a obi to another obj
const my_obj2 = {
    skill:"devloper"
}
Object.assign(my_obj,my_obj2);
console.log(my_obj)
