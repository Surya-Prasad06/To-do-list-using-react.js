import React, {useState} from "react";
function ToDoList(){
    const [tasks, settasks] = useState(["eat break fast", "take bath"]);
    const [newtask, setnewtask] = useState("");
function handleinputchange(event){
        setnewtask(event.target.value);
    }
function addtask(){
    if(newtask.trim() !== ""){
        settasks(t=> [...tasks, newtask]);
        setnewtask("")
    }

    }
function deletetask(index){
    const updatedtasks= tasks.filter((_, i) => i !== index);
    settasks(updatedtasks);
    }
function movetaskup(index){
    if(index>0) {
        const updatedtasks = [...tasks];
        [updatedtasks[index], updatedtasks[index-1]] = 
        [updatedtasks[index-1], updatedtasks[index]];
        settasks(updatedtasks);
    }
    }
function movetaskdown(index){
    if(index<tasks.length-1) {
        const updatedtasks = [...tasks];
        [updatedtasks[index], updatedtasks[index+1]] = 
        [updatedtasks[index+1], updatedtasks[index]];
        settasks(updatedtasks);
    }
    }

return(
    <>
    <div className="todolist">
        <h1>To - Do - List</h1>
        <div>
            <input type="text" 
            placeholder="Enter a task..."
            value={newtask}
            onChange={handleinputchange}/>
            <button className="addbtn" onClick={addtask}>add task</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span> 
                <button className="deletebtn" 
                onClick={()=>deletetask(index)}>Delete</button>
                <button className="movebtn" 
                onClick={()=>movetaskup(index)}>up☝️</button>
                <button className="downbtn" 
                onClick={()=>movetaskdown(index)}>down👇</button>
            </li>)}
        </ol>

    </div>
    </>)
}
export default ToDoList;