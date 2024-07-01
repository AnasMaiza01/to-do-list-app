import { useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faXmark } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [tasks,setTask] = useState([]);
  const myTask = useRef();

  function addTask() {
    if (myTask.current.value != "") {
      const task = {
        content : myTask.current.value,
        completed : false
      }
      setTask([...tasks, task]);
      myTask.current.value = "";
    }
  }

  function toggleCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed : !(updatedTasks[index].completed)
    }
    setTask(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
    console.log(tasks);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        {
          tasks.map((task, index) => (
            <li key={index}>
              <div id="listedItem">
                <FontAwesomeIcon icon={faHandPointRight} id="taskIcon" />
                <div id="listedTask" style={{textDecoration: task.completed ? "line-through" : "none"}} onClick={() => toggleCompletion(index)}>{task.content}</div>
              </div>
              <button className="btn closeBtn" ><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} onClick={() => deleteTask(index)} /></button>
            </li>
          ))
        }
      </ul>
      <div id="add_task">
        <input type='text' id='task_input' ref={myTask}/>
        <button className="btn" onClick={() => {addTask()}}>+ Add</button>
      </div>
    </div>
  );
}

export default App;
