// define an array 
tasks = [
  { name: "Wake up", isCompleted: true},
  { name: "Drink coffee", isCompleted: false },
  { name: "Code", isCompleted: true },
];

  
  /// the Main function 
const rinder =()=>{
   $("ul").html ("");
   let counter = 0;

    for (let i = 0; i < tasks.length; i++) {
      $("#mylist").append(`<li> ${ tasks[i].name}`)
      // counter = (tasks[i].isCompleted === false).length;  /// i tried to do a counter 
      // $("span").append(counter); 
        
    }
}
rinder();



//// Add tasks function 
$("#btn1").click(() => {
  inputVal= $("#input").val();
  if (inputVal.trim().length && inputVal.length) {
    let newObj = { name: inputVal, isCompleted: false };
    tasks.push(newObj);
    $("#input").val(''); // to clear input 
    rinder();
    taskButtons();
  }
});
   
///// Clear Function 
$("#btn2").click(() => {
  tasks.length = 0;
  rinder();
});


///// Update function
$("#btn3").click(() => {
let notCompletedArr= [];
    for (let i = 0; i < tasks.length; i++) {
   if (tasks[i].isCompleted === false) {
      tasks = notCompletedArr.push(tasks[i]);    
  }
  else {
    tasks[i].css("text-decoration", "line-through");
  }
} 
})


/// edit button - remove button 
// const taskButtons = ()=> {
//   for (let i = 0; i < tasks.length; i++) {
//     let li = tasks[i];
//     $("li").append(`<button id="editBtn"> Edit </button> `);
//     $("li").append(`<button id="rmvBtn"> remove </button> `);
    
//   }
//   }
    