import React from 'react'
import image18 from './image18.png'
import Rectangle62 from './Rectangle62.png'
import Vector from './Vector.png'
import './Liked.css'

const Likedpage = () => {
  return (
    <>
    <div className="liked-container">
        <div className="liked-container1">
          <h1 className="liked-heading">Liked Songs</h1>
          <img src={image18} alt="" className="liked-play-img" />
        </div>
        <div className="liked-container2">
          <div className="liked-img-container1">
            <img src={Rectangle62} alt="" className="liked-icon" />
          </div>
          <div className="liked-txt">
            <p className="liked-para1">I  Wanna Be Yours</p>
            <p className="liked-para2">Arctic Monkeys</p>
          </div>
          <div className="liked-like">
            <img src={Vector} alt="" className="liked-like-icon" />
          </div>
        </div>
    </div>
    </>
  )
}

export default Likedpage