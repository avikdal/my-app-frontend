import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ToDosContainer from './components/ToDosContainer';
import CreateTask from './modals/CreateTask';
import Home from './components/Home';
import NavBar from './components/NavBar';

// Implement proper front end state management. You should be updating state using a setState function after receiving your response from a POST, PATCH, or DELETE request. You should NOT be relying on a GET request to update state.

function App() {
  const [categories, setCategories] = useState([])
  // const [tasks, setTasks] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/categories')
      .then(r => r.json())
      .then(category => {
        setCategories(category)
      })
  }, [])

  // useEffect(() => {
  //     fetch('http://localhost:9292/tasks')
  //     .then( r => r.json())
  //     .then( task => {
  //         setTasks(task) 
  //     })
  // }, [])

  function saveTask(taskObj){
      // let tempList = tasks
      // tempList.push(taskObj)
      // setTasks(tempList)
      console.log("here is the obj in app", taskObj)
      console.log("categories in saveTask", categories)
      let updateCategories = categories.map((category) => {
        if (category.id === taskObj.category_id) {
          // make copy of category that has updated array tasks
            // add taskObj to category.tasks array
            let updatedTasks = [...category.tasks, taskObj]
            let updatedCategory = {...category, tasks: updatedTasks}
          return updatedCategory
        } else {
          return category
        }
      })
      setCategories(updateCategories)
  }

  function deleteTask(taskObj){
  
    fetch(`http://localhost:9292/tasks/${taskObj.id}`, {
      method: "DELETE",
    })
      // .then((r) => r.json())
      // .then((deletedTask) => {
      //   console.log("this is the deleted task", deletedTask)
      //   deleteDeletedTaskFromState(deletedTask)
      // });
      // let tempCategories = categories
      
    
  }

  // function deleteDeletedTaskFromState(task){
  //   console.log("here is the task in deleteDeletedTaskFromState", task)
    
  // }



  return (
    <>
      <div className='header text-center'>
        <Header save={saveTask} />
      </div>
      {/* <div className= "task-container">
        <ToDosContainer  categories={categories} deleteTask={deleteTask} />
      </div> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<ToDosContainer  categories={categories} deleteTask={deleteTask} />} />
      </Routes>
    </>
  );
}

export default App;
