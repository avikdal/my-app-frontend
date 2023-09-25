import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ToDosContainer from './components/ToDosContainer';
import Home from './components/Home';
import Tasks from './components/Tasks';

// Implement proper front end state management. You should be updating state using a setState function after receiving your response from a POST, PATCH, or DELETE request. You should NOT be relying on a GET request to update state.

function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/categories')
      .then(r => r.json())
      .then(category => {
        setCategories(category)
      })
  }, [])

  const arrOfTasksArrs = categories.map((category) => category.tasks)

  const tasks = [].concat(...arrOfTasksArrs)

  function updateCategoriesTasks(taskObj){
    // console.log("taskObj in updateCategories", taskObj)
    let updateCategories = categories.map((category) => {
      if (category.id === taskObj.category_id) {
          // make copy of category that has updated array tasks
          let updatedTasks = [...category.tasks, taskObj]
          // add taskObj to category.tasks array
          let updatedCategory = {...category, tasks: updatedTasks}
        return updatedCategory
      } else {
        return category
      }
    })
    setCategories(updateCategories)
  }

  function addCategory(taskObj){
    // console.log("how to add object to array? do I need to make another fetch request?")
    // grab category
    // add category to categories array
    let correctedTaskObj = {id: taskObj.id, task: taskObj.task, category_id: taskObj.category_id}
    let newCategory = {...taskObj.category}
    newCategory.tasks = [correctedTaskObj]
    let updatedCategories = [...categories, newCategory]
    setCategories(updatedCategories)
  }

  function saveTask(taskObj){
    // console.log(" hit it taskObj in saveTask", taskObj)
    let correctedTaskObj = {id: taskObj.id, task: taskObj.task, category_id: taskObj.category_id}
    console.log("correctedTaskObj", correctedTaskObj)
    // console.log("tasks in save task func", tasks)
    // is the category associated with the task object, is it a new category?
    // tasks.map((task) => task.category_id).includes(taskObj.category_id)
    let checkCategories = categories.find((category) => category.id == taskObj.category_id)
    console.log("checkCategories", checkCategories)
    // if checkCategories is in existing categories array updateCategories, if not add new category to categories array then updateCategories
    checkCategories ? updateCategoriesTasks(correctedTaskObj) : addCategory(taskObj)
  }

  function updateCategoriesTasksAfterDelete(deletedTaskObj){
      let updatedCategories = categories.map((category) => {
          if (category.id === deletedTaskObj.category_id){
            // remove task from category.tasks
            let tasksArr = category.tasks
            let newTasksArr = tasksArr.filter((task) => task.id != deletedTaskObj.id)
            //make copy of category w updated tasks
            let updatedCategory = {...category, tasks: newTasksArr}
            return updatedCategory
          } else {
            return category
          }
        })
        setCategories(updatedCategories)
  }

  function deleteTask(taskObj){
    fetch(`http://localhost:9292/tasks/${taskObj.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedTask) => updateCategoriesTasksAfterDelete(deletedTask))
  }

  function updateCategoriesAfterCategoryDelete(deletedCategoryObj){
    // console.log("deletedCategory", deletedCategoryObj)
    // filter through categories, add if category.id != deletedCategoryObj
    let updatedCategories = categories.filter((category) => category.id != deletedCategoryObj.id)
    setCategories(updatedCategories)
  }

  function deleteCategory(categoryObj){
    // console.log("categoryObj", categoryObj)
    fetch(`http://localhost:9292/categories/${categoryObj.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedCategory) => updateCategoriesAfterCategoryDelete(deletedCategory))
  }

  function updateTasks(updatedTaskObj){
    // console.log("updatedTaskObj", updatedTaskObj)
    let correctedTaskObj = {id: updatedTaskObj.id, task: updatedTaskObj.task, category_id: updatedTaskObj.category_id}
    // console.log("correctedTaskObj", correctedTaskObj)
    let category = categories.find((category) => category.id == correctedTaskObj.category_id)
    // console.log("category grabbed from updated task", category)
     // iterate through tasks, if task.id == updatedTaskObj.id replace task with correctedTaskObj
    let updatedCategoryTaskArr = category.tasks.map((task) => {
      // console.log("this is a task", task)
      if(task.id === correctedTaskObj.id){
        return correctedTaskObj
      } else {
        return task
      }
    })
    // console.log("updatedCategoryTaskArr in update task func", updatedCategoryTaskArr)
    let updatedCategory = {...category, tasks: updatedCategoryTaskArr}
    // console.log("updatedCategory", updatedCategory)
     //update categories array with updated category
    let updateCategories = categories.map((category) => {
      if (category.id === updatedCategory.id){
        return updatedCategory
      } else {
        return category
      }
    })
    setCategories(updateCategories)
  }


  return (
    <>
      <div className='header text-center'>
        <Header save={saveTask} categories={categories} />
      </div>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/categories" 
          element={<ToDosContainer update={updateTasks} categories={categories} deleteTask={deleteTask} deleteCategory={deleteCategory} />} 
        />
        <Route path="/tasks" element={<Tasks deleteTask={deleteTask} update={updateTasks} categories={categories} tasks={tasks} />} />
      </Routes>
    </>
  );
}

export default App;
