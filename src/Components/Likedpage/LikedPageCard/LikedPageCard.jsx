import React from 'react'
import "./likedPageCard.css"


const LikedPageCard = ({ Rectangle62, Vector }) => {
  return (
    <>
      <div className="liked-card-container">
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

    </>
  )
}

export default LikedPageCard;