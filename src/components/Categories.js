import React from 'react'
import Category from './Category'


const Categories = ({ categories, deleteTask }) => {

    const category = categories.map((category) => <Category key={category.id} name={category.name} tasks={category.tasks} deleteTask={deleteTask} />)

  return (
    <div className="Categories">
      <h2> Task Categories</h2>
      <div>{category}</div>
    </div>
  )
}

export default Categories
