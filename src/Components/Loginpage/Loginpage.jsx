import React from 'react'
import './Login.css'

const Loginpage = () => {
  return (
    <>
    <div className="login-container">
        <h1 className="login-heading">Welcome</h1>
        <div className="login-card-container">
            <h1 className="login-card-heading">Login</h1>
            <button className="login-btn1">Continue with Facebook</button>
            <button className="login-btn2">Continue with Google Account</button>
        </div>
    </div>
    </>
  )
}

export default Loginpage