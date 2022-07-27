import React,{useEffect} from 'react'
import './Login.css'
import {useNavigate} from "react-router-dom"
import {signInWithGoogle} from "../GoogleLogin/GoogleLogin"
import {signInWithFacebook} from "../FacebookLogin/FacebookLogin"

const Loginpage = ({auth,setAuthToken}) => {
  const navigate = useNavigate()
  const items = [1, 2, 3, 4, 5, 6]
  useEffect(() => {
    if (auth) {
      navigate("/")
    }
  }, [auth])

  return (
    <>
    <div className="login-container">
        <h1 className="login-heading">Welcome</h1>
        <div className="login-card-container">
            <h1 className="login-card-heading">Login</h1>
            <button className="login-btn1" onClick={signInWithFacebook}>Continue with Facebook</button>
            <button className="login-btn2" onClick={()=>{
              signInWithGoogle(setAuthToken)
              navigate("/")
            }}>Continue with Google Account</button>
        </div>
    </div>
    </>
  )
}

export default Loginpage