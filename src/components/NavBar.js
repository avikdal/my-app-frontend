import React, { useState } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import CreateTask from '../modals/CreateTask'

const NavBar = ({ save, categories }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
            {/* <button className= "btn btn-primary mt-2" onClick={() => setModal(true)}> Create Task </button>
            <CreateTask modal={modal} reset={setModal} toggle={toggle} save={save} /> */}
        </NavItem>
        <NavItem>
            {/* <button className= "btn btn-primary mt-2" onClick={() => setModal(true)}> Create Task </button> */}
            <NavLink onClick={() => setModal(true)}> Create a Task</NavLink>
            <CreateTask modal={modal} resetModal={setModal} toggle={toggle} save={save} categories={categories} />
        </NavItem>
    </Nav>
  )
}

export default NavBar
