import React from 'react'
import image7 from './image7.png'
import pause1 from './pause1.png'
import heart3 from './heart3.png'
import footer from './footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="footer-container1">
            <img src={image7} alt="" className="footer-icon"/>
            <h1 className="footer-txt">Blinding Lights</h1>
        </div>
        <div className="footer-container2">
            <img src={pause1} alt="" className="footer-pause-icon"/>
            <img src={heart3} alt="" className="footer-like-icon"/>
        </div>
    </div>
    </>
  )
}

export default Footer