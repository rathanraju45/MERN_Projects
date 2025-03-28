import React, { useEffect, useState } from "react";
import { Task } from "./components/Task";

export function Todo() {

    const [tasks, setTasks] = useState([]);
    const [input , setInput] = useState("");
    function addTask(tasktext) {
        setTasks([...tasks, tasktext]);
    }
    function deleteTask(index) {
        let newtasks = tasks.filter((task, i) => index !== i);
        setTasks(newtasks);
    }

    return (
        <div className="Todo">
            <div id="input-container">
                <input type="text" id="input" value={input} placeholder="enter task" onChange={(e) => setInput(e.target.value)} />
                <button id="add" onClick={() => addTask(input)}>Add</button>
            </div>
            <div id="task-container">
                {
                    tasks.map((task, index) => {
                        return <Task key={index} index={index} task={task} deleteTask={deleteTask} />
                    })
                }
            </div>
        </div>
    )
}