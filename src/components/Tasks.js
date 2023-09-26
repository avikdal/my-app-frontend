import React from 'react'
import Task from './Task'

const Tasks = ({ deleteTask, categories, update }) => {

    const arrOfTasksArrs = categories.map((category) => category.tasks)

    const tasks = [].concat(...arrOfTasksArrs)

  return (
    <div>
      <h1 style={{ padding: '10px', marginLeft: '50px', fontSize: '34px' }}> Tasks  </h1>
      <div style={{marginLeft: '20px'}}>{tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} update={update} />)}</div>
    </div>
  )
}

export default Tasks
