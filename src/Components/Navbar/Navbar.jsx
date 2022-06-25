import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='container-fluid navbars d-flex justify-content-end align-items-center'>
      <div className='w-25 d-flex justify-content-evenly '>
      <button className='btn-style login'>Login</button>
        <button className='btn-style signup'>Signup</button>
      </div>
    </div>
  )
}

export default Navbar