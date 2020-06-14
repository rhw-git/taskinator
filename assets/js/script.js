// var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");

var taskFormHandler = function(){
    event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput){
        alert("please fill out the task form!");
        return false;
    }

    formEl.reset();

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj){
    event.preventDefault();
        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
    
        //create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskDataObj.name + "</h3> <span class = 'task-type'>" + taskDataObj.type + "</span>";
        
        listItemEl.appendChild(taskInfoEl);
        
        //add entire list item to list
        taskToDoEl.appendChild(listItemEl);
}

formEl.addEventListener ("submit",function(){
    taskFormHandler();
    
}); 
