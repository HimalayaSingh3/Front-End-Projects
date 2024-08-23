
document.getElementById("add").addEventListener("click",addTask);


function addTask(){
    const input=document.getElementById("name");
    const taskInput=input.value.trim();
    if(input==="") return;


    //task list
    const ul=document.getElementById("task-list");
    const li=document.createElement("li");
    const taskElement=document.createElement("span");
    taskElement.textContent=taskInput;

    //edit task
    const editBtn=document.createElement("button");
    editBtn.textContent="EDIT";
    editBtn.addEventListener("click",()=> editTask(taskElement));
  

    //remove btn
    const removeBtn=document.createElement("button");
    removeBtn.textContent="X";

    removeBtn.addEventListener("click",()=>{
        ul.removeChild(li);
    });
    //completed
    taskElement.addEventListener("click",()=>{
        taskElement.classList.toggle("completed");
    });

    li.appendChild(taskElement);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    ul.appendChild(li);

    input.value=" ";
}
function editTask(li){
    const currentText=li.firstChild.textContent;
    const newText=prompt("Edit your task",currentText);

    if(newText===null || newText.trim()==="") return;

    li.firstChild.textContent=newText.trim();
   
}