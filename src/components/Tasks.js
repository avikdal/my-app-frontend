import React, { useEffect, useState } from 'react'
import Task from './Task'

const Tasks = ({ deleteTask, categories, tasks, update }) => {
    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/tasks')
    //     .then( r => r.json())
    //     .then( task => {
    //         setTasks(task) 
    //     })
    // }, [])

    // const task = tasks.map((task) => <Task key={task.id} taskInfo={task} />)
    // console.log("categories", categories)

    // const arrOfTasksArr = categories.map((category) => category.tasks)
    // // console.log("tasksArr", arrOfTasksArr)
    // const arrOfTasks = arrOfTasksArr.map((arr) => {
    //   console.log("arr", arr)
    //   arr.forEach((hash) => {
        
    //     console.log("hashy", hash)
    //   })
    // })
    // console.log("arrOfTasks", arrOfTasks)

  return (
    <div>
      <h1> This is Tasks header </h1>
      <div>{tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} update={update} />)}</div>
    </div>
  )
}

export default Tasks
