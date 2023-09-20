import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, CloseButton } from 'reactstrap';

const Task = ({ taskInfo, deleteTask }) => {

    // console.log("task info", taskInfo)

    function handleClick(e){
      console.log("close buttonclicked event", e)
      console.log("taskInfo in task component", taskInfo)
      deleteTask(taskInfo)
    }
    
  return (
    <div>
      {/* <span>{taskInfo.task}</span> */}
      <FormGroup
        check
        inline
      >
        <Input type="checkbox" />
        <Label check>{taskInfo.task}</Label>
        {/* <Button outline size="sm"> 🗑️ </Button> */}
        <CloseButton onClick={handleClick} />
      </FormGroup>
     
    </div>
  )
}

export default Task
