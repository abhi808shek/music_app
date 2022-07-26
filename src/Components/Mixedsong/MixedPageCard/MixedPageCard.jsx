import React from 'react'
import "./MixedPageCard.css"


const MixedPageCard = ({ Rectangle62, Vector,items }) => {
  return (
    <>
      <div className="mixed-card-container">
        <div className="mixed-img-container1">
          <img src={items.image1} alt="" className="mixed-icon" />
        </div>
        <div className="mixed-txt">
          <p className="mixed-para1">I  Wanna Be Yours</p>
          <p className="mixed-para2">Arctic Monkeys</p>
        </div>
        <div className="mixed-mixe">
          <img src={Vector} alt="" className="mixed-mixe-icon" />
        </div>
      </div>

    </>
  )
}

export default MixedPageCard;