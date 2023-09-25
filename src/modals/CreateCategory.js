import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateCategory = ({ modal, resetModal, toggle, saveNewCategory }) => {
    const [newCategory, setNewCategory] = useState('');

    function handleChange(e){
        setNewCategory(e.target.value)
    }


    function handleSave(){
        let category = {}
        category["category"] = newCategory
        fetch('http://localhost:9292/categories', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(category)
          })
        .then(r => r.json())
        .then(data => saveNewCategory(data))
        setNewCategory('');
        resetModal(false)
    }

  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Create Category</ModalHeader>
    <ModalBody>
      <form>
          <div className='form-group'>
              <label>Category</label>
              <input type="text" className='form-control' name="category" value={newCategory} onChange={handleChange} />
          </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleSave} >
          Create
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
          Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default CreateCategory
