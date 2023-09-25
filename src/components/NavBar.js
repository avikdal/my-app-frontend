import React, { useState } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import CreateTask from '../modals/CreateTask'
import CreateCategory from '../modals/CreateCategory'

const NavBar = ({ save, categories, saveNewCategory }) => {
    const [taskModal, setTaskModal] = useState(false);
    const [categoryModal, setCategoryModal] = useState(false);

    const toggleTask = () => setTaskModal(!taskModal);
    const toggleCategory = () => setCategoryModal(!categoryModal);

  return (

    <Nav>
        <NavItem>
            <NavLink
                active
                href="/"
            >
                Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/categories">
                Categories
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
                href="/tasks"
            >
                All Tasks
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => setTaskModal(true)}> Create a Task</NavLink>
                <CreateTask modal={taskModal} resetModal={setTaskModal} toggle={toggleTask} save={save} categories={categories} />
        </NavItem>
        <NavItem>
            <NavLink onClick={() => setCategoryModal(true)}> Create a Category</NavLink>
                <CreateCategory modal={categoryModal} resetModal={setCategoryModal} toggle={toggleCategory} saveNewCategory={saveNewCategory} />
        </NavItem>
    </Nav>
  )
}

export default NavBar
