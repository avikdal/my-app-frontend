import React, { useEffect, useState } from 'react'
import Category from './Category'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories')
        .then(r => r.json())
        .then(category => {
          // console.log("this is category", category)
          setCategories(category)
        })
    }, [])

    const category = categories.map((category) => <Category key={category.id} name={category.name} tasks={category.tasks} />)

  return (
    <div className="Categories">
      <h2> This is  categories</h2>
      <div>{category}</div>
    </div>
  )
}

export default Categories
