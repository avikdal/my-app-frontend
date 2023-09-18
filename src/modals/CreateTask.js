import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, reset, toggle, save }) => {
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    function handleChange(e){
        const { name, value } = e.target

        if(name === "task"){
            setTaskDescription(value)
        } else {
            setCategory(value)
        }
    }

    function handleSave(){
        let taskObj = {}
        taskObj["category"] = category
        taskObj["description"] = taskDescription
        fetch('http://localhost:9292/tasks', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(taskObj)
          }
        )
        .then(r => r.json())
        .then(data => {
          console.log("this is the returned object", data)
          save(data)
        })
        reset(false)
     
    }



  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Create Task</ModalHeader>
    <ModalBody>
        <form>
            <div className='form-group'>
                <label>Category</label>
                <input type="text" className='form-control' name="category" value={category} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label>Task Description</label>
                <textarea rows = '3' className='form-control' name="task" value={taskDescription} onChange={handleChange} ></textarea>
            </div>
        </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleSave}>
        Create
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default CreateTask
