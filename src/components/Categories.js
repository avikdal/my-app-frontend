import React from 'react'
import Category from './Category'

const Categories = ({categories}) => {

    const category = categories.map((category) => <Category key={category.id} name={category.name} tasks={category.tasks} />)

  return (
    <div className="Categories">
      <h2> This is  categories</h2>
      <div>{category}</div>
    </div>
  )
}

export default Categories
