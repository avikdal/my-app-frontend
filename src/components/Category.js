import React, { useState } from 'react'
import { Collapse, Button, Badge, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import Task from './Task'

const Category = ({ category, name, tasks, deleteTask, deleteCategory, update }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  function handleClick(e){
    deleteCategory(category)

  }

   

  return (
    <div>
      <ListGroupItemHeading style={{ padding: '10px', fontSize: '25px'}}>
        {name.toUpperCase()}{' '}
        <Badge style={{fontSize: '12px',  padding: '10px'}} color="primary" onClick={toggle} >
          {isOpen ? "Hide Tasks" : "Show Tasks" }
        </Badge>
      </ListGroupItemHeading>
      <Collapse isOpen={isOpen}>
        <ListGroup>
          <ListGroupItem>
          {tasks.map((task) => <Task key={task.id} taskInfo={task} update={update} deleteTask={deleteTask} />)}
          </ListGroupItem>
          <Button color="secondary" onClick={handleClick}> Delete Entire Category </Button>
        </ListGroup>
      </Collapse>
    </div>
  )
}

export default Category
