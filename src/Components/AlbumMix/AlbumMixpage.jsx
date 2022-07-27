import React,{useEffect} from 'react'
import image18 from './image18.png'
import Rectangle62 from './Rectangle62.png'
import Vector from './Vector.png'
import './AlbumMix.css'
import AlbumMixPageCard from './AlbumMixPageCard/AlbumMixPageCard'

const albummix = ({auth}) => {
  const items = [1,2,3,4,5,6,7,8.9,10]
  // useEffect(() => {
  //   if (!auth) {
  //     navigate("/loginpage")
  //   }
  // }, [auth])
  return (
    <>
    <div className="albummix-container">
    <div className="albummix-container1">
          <h1 className="albummix-heading">Album mix Songs</h1>
          <img src={image18} alt="" className="albummix-play-img" />
        </div>
        <div className="albummix-container2">
      {items.map((Cards,index)=><AlbumMixPageCard Rectangle62={Rectangle62} Vector={Vector} key={index}/>)}
    </div>
    </div>
    </>
  )
}

export default albummix;