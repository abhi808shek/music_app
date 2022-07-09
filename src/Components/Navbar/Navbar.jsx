import React from 'react'
import Nav from './Nav.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <button className="navbar-btn">User name</button>
                <NavLink to="/loginpage">
                <button className="navbar-btn login-Btn">Login</button>
                </NavLink>
            </div>
        </>
    )
}

export default Navbar