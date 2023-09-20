import React, { useEffect, useState } from 'react'
import Task from './Task'

const Tasks = ({ deleteTask }) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/tasks')
        .then( r => r.json())
        .then( task => {
            setTasks(task) 
        })
    }, [])

    // const task = tasks.map((task) => <Task key={task.id} taskInfo={task} />)

  return (
    <div>
      <h1> This is Tasks header </h1>
      <div>{tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} />)}</div>
    </div>
  )
}

export default Tasks
