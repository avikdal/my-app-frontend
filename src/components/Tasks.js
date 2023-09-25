import React from 'react'
import Task from './Task'

const Tasks = ({ deleteTask, categories, update }) => {

    const arrOfTasksArrs = categories.map((category) => category.tasks)

    const tasks = [].concat(...arrOfTasksArrs)

  return (
    <div>
      <h1> This is Tasks header </h1>
      <div>{tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} update={update} />)}</div>
    </div>
  )
}

export default Tasks
