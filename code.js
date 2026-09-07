const students = [
  {
    name: "Emma Johnson",
    notes: [88, 92, 85, 90, 95]
  },
  {
    name: "Liam Smith",
    notes: [75, 80, 78, 82, 79]
  },
  {
    name: "Sophia Garcia",
    notes: [95, 98, 92, 96, 99]
  },
  {
    name: "Noah Williams",
    notes: [60, 65, 70, 68, 62]
  },
  {
    name: "Olivia Brown",
    notes: [89, 85, 91, 88, 90]
  }
];
function mon_of_class(list){
    let sum = 0;
    // let i = 0;
    let total = list[1].notes.length * list.length;
    //  while(i < list.length){
     for(const obj of list){
        for(const note of obj.notes){
           sum += note
        }
    }
// }
    console.log(sum / total)
}
mon_of_class(students);