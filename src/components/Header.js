import React from 'react'
// import CreateTask from '../modals/CreateTask'
import NavBar from './NavBar';

const Header = ({ save }) => {
  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  return (
    <div>
      <h1>Task App  ✅</h1>
      <NavBar save={save} />
      {/* <button className= "btn btn-primary mt-2" onClick={() => setModal(true)}> Create Task </button>
      <CreateTask modal={modal} reset={setModal} toggle={toggle} save={save} /> */}
    </div>
  )
}

export default Header
