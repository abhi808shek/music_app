import React from 'react'
import "./albumCard.css"


const AlbumCard = ({Rectangle74}) => {
  return (
      <div className="album-card-container">
            <img src={Rectangle74} alt="" className="album-img" />
            <div className="album-card-container1">
              <h1 className="album-head">Album 1</h1>
              <p className="album-txt">By.Creator</p>
            </div>
          </div> 
  )
}

export default AlbumCard