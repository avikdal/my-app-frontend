import React, { useEffect, useState } from 'react'
import Task from './Task'

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/tasks')
        .then( r => r.json())
        .then( task => {
            // console.log("this is a task", task)
            setTasks(task) 
        })
    }, [])

    const task = tasks.map((task) => <Task key={task.id} taskInfo={task} />)

  return (
    <div>
      <h1> This is Tasks header </h1>
      <div>{task}</div>
    </div>
  )
}

export default Tasks
