import {React, useState} from 'react'

const Task = ({name, deleteTask, id}) => {

    const [taskState, setTaskState] = useState(false)

    const onChangeTaskState = () => {
        setTaskState(prevState => !prevState)
    }
    
  return (
    <div className={`w-full h-[100px] my-[5px] ${taskState ? 'bg-green-500' : 'bg-red-500'} rounded-[9px] flex items-center justify-between text-[50px] px-[25px]`}>
        <div className='flex w-[400px] justify-between items-center'>
            <input className='h-8' type="checkbox" onChange={onChangeTaskState}/>
            <p>{name}</p>
        </div>
    
        <div className='w-[400px] flex justify-between'>
            {taskState ? <p>Done!</p> : <p>Not done</p>}
            <button onClick={() => deleteTask(id)}>delete</button>
        </div>
        
    </div>
  )
}

export default Task