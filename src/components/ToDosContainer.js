import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Tasks from './Tasks';

const ToDosContainer = ({ categories, deleteTask }) => {
    // const [categories, setCategories] = useState([])
    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/categories')
    //     .then(r => r.json())
    //     .then(category => {
    //       setCategories(category)
    //     })
    // }, [])

    // useEffect(() => {
    //     fetch('http://localhost:9292/tasks')
    //     .then( r => r.json())
    //     .then( task => {
    //         setTasks(task) 
    //     })
    // }, [])

    // function saveTask (taskObj){
    //     let tempList = tasks
    //     tempList.push(taskObj)
    //     setTasks(tempList)
    // }

  return (
    <div>
        <Categories categories={categories} deleteTask={deleteTask} />
    </div>
  )
}

export default ToDosContainer
