import React, { useState } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import CreateTask from '../modals/CreateTask'

const NavBar = ({ save }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (

    <Nav>
        <NavItem>
            <NavLink
                active
                href="/home"
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
                disabled
                href="#"
            >
                Disabled Link
            </NavLink>
            <button className= "btn btn-primary mt-2" onClick={() => setModal(true)}> Create Task </button>
            <CreateTask modal={modal} reset={setModal} toggle={toggle} save={save} />
        </NavItem>
    </Nav>
  )
}

export default NavBar
