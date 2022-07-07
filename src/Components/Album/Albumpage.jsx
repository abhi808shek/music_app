import React from 'react'
import './Albumstyle.css'
import Rectangle74 from './Rectangle74.png'

const Album = () => {
  return (
    <>
      <div className="album-container">
        <div className="album-container1">
          <h1 className="album-heading">Your Albums</h1>
        </div>
        <div className="album-container2">
          <div className="album-card-container">
            <img src={Rectangle74} alt="" className="album-img" />
            <div className="album-card-container1">
              <h1 className="album-head">Album 1</h1>
              <p className="album-txt">By.Creator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Album