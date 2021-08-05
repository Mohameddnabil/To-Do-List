function CreateTask(){
    // create task 
    const task = document.createElement("div");
    task.id = "TaskDiv";
    const editbtn  = document.createElement("button");
    editbtn.innerHTML = "Edit";

    const Text = document.createElement("textarea");
    Text.value = document.getElementById("Tasktext").value;
    
    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.onclick = function(){
        document.body.removeChild(task);
    };

    task.appendChild(editbtn);
    task.appendChild(Text);
    task.appendChild(deletebtn);

    // View Task
    document.body.appendChild(task);

    // clear TaskText
    document.getElementById("Tasktext").value = "";
    
}