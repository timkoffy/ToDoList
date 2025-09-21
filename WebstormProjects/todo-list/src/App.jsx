import './App.css'
import {useState} from "react";
function App() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    function addTask() {
        if (task.trim() === "") return
        setTasks([task, ...tasks])
        setTask("")
    }

    return (
        <>
            <h1 className="head">To-Do List</h1>
            <div className="headTask">
                <input className="inputTask"
                       type="text"
                       placeholder="Enter task..."
                       value={task}
                       onChange={(e) => setTask(e.target.value)}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") {
                               e.preventDefault();
                               addTask()
                           }
                       }}

                />
                <button className="buttonTask" onClick={addTask}>Add</button>
            </div>
            <div className="listTask">
                <ul className="taskList">
                    {tasks.map((t,i) => <li key={i}>{t}</li>)}
                </ul>
            </div>
        </>
    )
}

export default App
