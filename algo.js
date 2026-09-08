//linear searsh 
let my_list = [1,1,2,3,5];
function ln_(list,target){
    for (let i = 0; i < list.length; i++) {
        if (list[i] == target) {
            return i;
            
        }
        
    }
    return -1;
}
console.log(ln_(my_list,5))
//buble sort
let my_own = [1,5,4,3,2];
function buble(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length-1-i; j++) {
            if (list[j] > list[j + 1]) {
                let o = list[j];
                list[j] = list[j + 1];
                list[j + 1]=o;
            }
            
        }
        
    }
   return list; 
}
console.log(buble(my_own))

//banry searsh
function br(par,tr) {
    let left = 0;
    let right = par.length - 1;
    while (right <= left) {
        let middle = Math.floor((right+left)/2)
        if (par[middle]===tr) {
            return middle;
        }
        if (par[middle] < tr) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    // return `this valuse ${tr} not found`;
}
console.log(br([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],9))