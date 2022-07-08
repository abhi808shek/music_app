import React from 'react'
import image18 from './image18.png'
import Rectangle62 from './Rectangle62.png'
import Vector from './Vector.png'
import './Liked.css'
import LikedPageCard from './LikedPageCard/LikedPageCard'

const Likedpage = () => {
  const items = [1,2,3,4,5,6,7,8.9,10]
  return (
    <>
    <div className="liked-container">
    <div className="liked-container1">
          <h1 className="liked-heading">Liked Songs</h1>
          <img src={image18} alt="" className="liked-play-img" />
        </div>
        <div className="liked-container2">
      {items.map((Cards)=><LikedPageCard Rectangle62={Rectangle62} Vector={Vector}/>)}
    </div>
    </div>
    </>
  )
}

export default Likedpage