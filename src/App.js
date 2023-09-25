import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ToDosContainer from './components/ToDosContainer';
import Home from './components/Home';
import Tasks from './components/Tasks';


function App() {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch('http://localhost:9292/categories')
      .then((r) => r.json())
      .then((categoryData) => setCategories(categoryData))
      .catch((error) => console.error('Error fetching categories:', error));
  };


  function updateCategoriesTasks(taskObj){
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
    let correctedTaskObj = {id: taskObj.id, task: taskObj.task, category_id: taskObj.category_id}
    let newCategory = {...taskObj.category}
    newCategory.tasks = [correctedTaskObj]
    let updatedCategories = [...categories, newCategory]
    setCategories(updatedCategories)
  }

  function saveTask(taskObj){
    let correctedTaskObj = {id: taskObj.id, task: taskObj.task, category_id: taskObj.category_id}
    let checkCategories = categories.find((category) => category.id == taskObj.category_id)
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
    let updatedCategories = categories.filter((category) => category.id != deletedCategoryObj.id)
    setCategories(updatedCategories)
  }

  function deleteCategory(categoryObj){
    fetch(`http://localhost:9292/categories/${categoryObj.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedCategory) => updateCategoriesAfterCategoryDelete(deletedCategory))
  }

  function updateTasks(updatedTaskObj){
    let category = categories.find((category) => category.id == updatedTaskObj.category_id)
     // iterate through tasks, if task.id == updatedTaskObj.id replace task with correctedTaskObj
    let updatedCategoryTaskArr = category.tasks.map((task) => {
      if(task.id === updatedTaskObj.id){
        return updatedTaskObj
      } else {
        return task
      }
    })
    let updatedCategory = {...category, tasks: updatedCategoryTaskArr}
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

  function saveNewCategory(categoryObj){
    let updatedCategoryObj = {...categoryObj, tasks: []}
    let updatedCategories = [...categories, updatedCategoryObj]
    setCategories(updatedCategories)
  }


  return (
    <>
      <div className='header text-center'>
        <Header save={saveTask} categories={categories} saveNewCategory={saveNewCategory} />
      </div>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/categories" 
          element={<ToDosContainer update={updateTasks} categories={categories} deleteTask={deleteTask} deleteCategory={deleteCategory} />} 
        />
        <Route path="/tasks" element={<Tasks deleteTask={deleteTask} update={updateTasks} categories={categories} />} />
      </Routes>
    </>
  );
}

export default App;
