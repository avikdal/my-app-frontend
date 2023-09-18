import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDosContainer from './components/ToDosContainer';
import CreateTask from './modals/CreateTask';

function App() {


  return (
    <>
      <div className='header text-center'>
        <Header />
      </div>
      <div className= "task-container">
        <ToDosContainer />
      </div>
    </>
  );
}

export default App;
