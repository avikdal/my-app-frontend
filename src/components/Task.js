import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Task = ({ taskInfo }) => {

    console.log("task info", taskInfo)
    
  return (
    <div>
      {/* <span>{taskInfo.task}</span> */}
      <FormGroup
        check
        inline
      >
        <Input type="checkbox" />
        <Label check>{taskInfo.task}</Label>
        <Button outline size="sm"> 🗑️ </Button>
      </FormGroup>
    </div>
  )
}

export default Task
