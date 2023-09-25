import React from 'react'
import NavBar from './NavBar';

const Header = ({ save, categories, saveNewCategory }) => {


  return (
    <div>
      <h1>Task App  ✅</h1>
      <NavBar save={save} categories={categories} saveNewCategory={saveNewCategory} />
    </div>
  )
}

export default Header
