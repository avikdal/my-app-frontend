import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Tasks from './Tasks';

const ToDosContainer = () => {
    const [categories, setCategories] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories')
        .then(r => r.json())
        .then(category => {
          // console.log("this is category", category)
          setCategories(category)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/tasks')
        .then( r => r.json())
        .then( task => {
            setTasks(task) 
        })
    }, [])

  return (
    <div>
        <Categories categories={categories} />
        <Tasks tasks={tasks} />
    </div>
  )
}

export default ToDosContainer
