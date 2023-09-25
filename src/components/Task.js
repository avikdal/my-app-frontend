import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Task = ({ taskInfo, deleteTask, update }) => {
  const [editTask, setEditTask] = useState(false);
  const [updatedTask, setUpdatedTask] = useState('');
  
  const toggle = () => setEditTask(!editTask)

    // console.log("task info", taskInfo)
    // console.log("editTask" , editTask)

    function handleChange(e){
      setUpdatedTask(e.target.value)
    }

    function handleDelete(e){
      deleteTask(taskInfo)
    }

    function handleEdit(e){
      setEditTask(true)
    }

    function handleSubmit(e){
      e.preventDefault()
      fetch(`http://localhost:9292/tasks/${taskInfo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: updatedTask,
        }),
      })
      .then((r) => r.json())
      .then((task) => {
        // console.log("this is the return json", task)
        update(task)
      })
      setEditTask(false)
    }
    
  return (
    <div>

      <FormGroup
        check
        inline
      >
        {editTask ? 
          <Form>
            <Input type="text" name="task" placeholder={taskInfo.task} value={updatedTask} onChange={handleChange}/>
            <Button onClick={handleSubmit}> Submit </Button>
            <Button onClick={toggle} > Cancel </Button>
          </Form>
        :
        <FormGroup
        check
        inline
        >
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
        }
      </FormGroup>
     
    </div>
  )
}

export default Task
