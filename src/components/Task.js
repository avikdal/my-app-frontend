import React from 'react'

const Task = ({ taskInfo }) => {

    // console.log("task info", taskInfo)
  return (
    <div>
      <span>{taskInfo.task}</span>
    </div>
  )
}

export default Task
