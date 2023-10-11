import React from 'react'
import Task from '../molecules/Task'

const TaskList = ({tasks, deleteTask}) => {
  return (
    <div>
        <div className='w-full h-[400px] py-[5px] overflow-y-scroll'>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    </div>
  )
}

export default TaskList