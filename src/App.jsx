import { useState } from 'react'
import TaskForm from './components/UI/organisms/TaskForm'
import TaskList from './components/UI/organisms/TaskList'
import { v4 as uuidv4 } from "uuid";
import './App.css'


function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), name: task},
    ])
  }

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  

  return (
    <>
      <p className='text-[50px]'>TO DO LIST</p>
      <div className='w-full h-[600px] flex flex-col items-around border-[#04364A] border-[2px] rounded-[10px] bg-[#176B87]'>  
        <TaskForm
          addTask={addTask}
        />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
