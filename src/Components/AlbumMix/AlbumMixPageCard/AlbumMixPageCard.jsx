import React from 'react'
import "./AlbumMixPageCard.css"


const AlbumMixPageCard = ({ Rectangle62, Vector }) => {
  return (
    <>
      <div className="albummix-card-container">
        <div className="albummix-img-container1">
          <img src={Rectangle62} alt="" className="albummix-icon" />
        </div>
        <div className="albummix-txt">
          <p className="albummix-para1">I  Wanna Be Yours</p>
          <p className="albummix-para2">Arctic Monkeys</p>
        </div>
        <div className="albummix-mixe">
          <img src={Vector} alt="" className="albummix-mixe-icon" />
        </div>
      </div>

    </>
  )
}

export default AlbumMixPageCard;