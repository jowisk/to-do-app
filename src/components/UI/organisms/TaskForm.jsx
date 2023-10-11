import {React, useState} from 'react'


const TaskForm = ({addTask}) => {

    const [name, setName] = useState('')

    const onChangeNameHandler = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(name)
    }

  return (
    <div className='w-full h-[200px] bg-[#80B3FF] rounded-[9px]'>
        <div className='flex items-center justify-center h-full'>
            <form className='flex items-between justify-around h-full text-[50px] w-full' onSubmit={handleSubmit}>
                <div>
                    <p>Task name</p>
                    <label htmlFor="taskName"></label>
                    <input type="text" onChange={(e) => onChangeNameHandler(e)} />
                </div>

                <button type="submit">Add</button>
            </form>
        </div>
    </div>
  )
}

export default TaskForm