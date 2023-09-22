import React, { useState } from 'react'
import { Collapse, CardBody, Card, CardHeader, Button, Badge, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import Task from './Task'

const Category = ({ category, name, tasks, deleteTask, deleteCategory }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // console.log("this is tasks in Category component", tasks)

  function handleClick(e){
    deleteCategory(category)

  }

   

  return (
    <div>
      <ListGroupItemHeading>
      {/* <h3 onClick={toggle}> {name} </h3>  */}
        {name}{' '}
        <Badge color="primary" onClick={toggle} >
          {isOpen ? "Hide Tasks" : "Show Tasks" }
        </Badge>
      </ListGroupItemHeading>
      {/* <h3 onClick={toggle} >{name}</h3> */}
      <Collapse isOpen={isOpen}>
        {/* <Card>
          <CardBody>
            {tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} />)}
          </CardBody>
          <Button color="secondary" onClick={handleClick}> Delete Entire Category </Button>
        </Card> */}
        <ListGroup>
          <ListGroupItem>
          {tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} />)}
          </ListGroupItem>
          <Button color="secondary" onClick={handleClick}> Delete Entire Category </Button>
        </ListGroup>
      </Collapse>
    </div>
  )
}

export default Category
