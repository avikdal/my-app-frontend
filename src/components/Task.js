import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Task = ({ taskInfo, deleteTask }) => {

    // console.log("task info", taskInfo)

    function handleDelete(e){
      deleteTask(taskInfo)
    }

    function handleEdit(e){
      console.log("taskInfo", taskInfo)
    }
    
  return (
    <div>
      {/* <span>{taskInfo.task}</span> */}
      <FormGroup
        check
        inline
      >
        {/* <Input type="checkbox" /> */}
        <Label check>
          {taskInfo.task}
        </Label>
        {' '}
        <Button outline size="sm" onClick={handleEdit}> 
          ✏️ 
        </Button>
        {' '}
        <Button outline size="sm" onClick={handleDelete}>🗑️</Button>
      </FormGroup>
     
    </div>
  )
}

export default Task
