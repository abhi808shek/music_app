import React,{useEffect} from 'react'
import image18 from './image18.png'
import Rectangle62 from './Rectangle62.png'
import Vector from './Vector.png'
import './Mixed.css'
import MixedPageCard from './MixedPageCard/MixedPageCard'
import {useNavigate} from "react-router-dom"

const mixedpage = ({auth}) => {
  const navigate = useNavigate()
  const items = [1,2,3,4,5,6,7,8.9,10]
  useEffect(() => {
    if (!auth) {
      navigate("/loginpage")
    }
  }, [auth])
  return (
    <>
    <div className="mixed-container">
    <div className="mixed-container1">
          <h1 className="mixed-heading">mixed Songs</h1>
          <img src={image18} alt="" className="mixed-play-img" />
        </div>
        <div className="mixed-container2">
      {items.map((Cards,index)=><MixedPageCard Rectangle62={Rectangle62} Vector={Vector} key={index}/>)}
    </div>
    </div>
    </>
  )
}

export default mixedpage;