import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import Category from './Category'


const Categories = ({ categories, deleteTask, deleteCategory, update }) => {

    const category = categories.map((category) => <Category key={category.id} update={update} deleteCategory={deleteCategory} category={category}name={category.name} tasks={category.tasks} deleteTask={deleteTask} />)

  return (
    <div className="Categories" style={{padding: '40px'}}>
      <ListGroup>
        <ListGroupItemHeading style={{ padding: '10px',  fontSize: '34px' }}> 
          Task Categories 
        </ListGroupItemHeading>
        <ListGroupItem>{category}</ListGroupItem>
      </ListGroup>
    </div>

  )
}

export default Categories
