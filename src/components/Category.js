import React, { useState } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Task from './Task'

const Category = ({ name, tasks, deleteTask }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // console.log("this is tasks in Category component", tasks)

   

  return (
    <div>
      <h3 onClick={toggle} >{name}</h3>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {tasks.map((task) => <Task key={task.id} taskInfo={task} deleteTask={deleteTask} />)}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}

export default Category
