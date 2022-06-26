import React from 'react'
import image014 from "./image/image014.png"
import image013 from "./image/image013.png"
import Logins from './Logins.css'

function Loginpage() {
  return (
    <>
        <div className="container">
        <div className="container1">
            <h1 className="head">Welcome</h1>
            <div className="container2">
                <h1>Login</h1>
                <button className="btn1"><img src={image014} alt=""/>Continue with facebook</button>
                <button className="btn1 btn2"><img src={image013} alt=""/>Continue with Google Account</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Loginpage