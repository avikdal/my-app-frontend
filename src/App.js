import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ToDosContainer from './components/ToDosContainer';
import CreateTask from './modals/CreateTask';

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
  }



  return (
    <>
      <div className='header text-center'>
        <Header save={saveTask} />
      </div>
      <div className= "task-container">
        <ToDosContainer  categories={categories}/>
      </div>
    </>
  );
}

export default App;
