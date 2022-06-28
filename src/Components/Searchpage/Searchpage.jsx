import React from 'react'
import Ellipse39 from "./Ellipse39.png"
import Vector from "./Vector.png"
import searchwhite1 from "./searchwhite1.png"
import musicalbum1 from "./musicalbum1.png"
import Vector2 from "./Vector2.png"
import image17 from "./image17.png"

function Searchpage() {
  return (
    <>
     <div className="search_container">
        <div className="search_container1">
            <img src={Ellipse39} alt="" className="search_logo"/>
            <div className="search_navbar">
                <div className="search_nav">
                    <img src={Vector} alt="" className="search_icon"/>
                    <p className="search_text">Home</p>
                </div>
                <div className="search_nav">
                    <img src={searchwhite1} alt="" className="search_icon"/>
                    <p className="search_text">Search</p>
                </div>
                <div className="search_nav">
                    <img src={musicalbum1} alt="" className="search_icon"/>
                    <p className="search_text">Album</p>
                </div>
                <div className="search_nav">
                    <img src={Vector2} alt="" className="search_icon"/>
                    <p className="search_text">Liked songs</p>
                </div>
            </div>
        </div>
        <div className="search_container2">
            <div className="search_container3">
                <button className="search_btn1">Username</button>
                <button className="search_btn1">Logout</button>
            </div>
            <div className="search_container4">
                <div className="search_container5">
                    <h1 className="search_heading">Search</h1>
                    <div className="search_container6">
                        <input type="text" className="search_inputbox" placeholder="Artists, Songs"/>
                        <img src={image17} alt="" className="search_audio"/>
                    </div>
                    <hr/>
                </div>
                <div className="search_container7">
                    <h1 className="search_heading2">Genre</h1>
                    <p className="search_text2">See More</p>
                </div>
                <div className="search_cards">
                    <div className="search_card search_card1">
                        <h1 className="search_title2">Disco</h1>
                    </div>
                    <div className="search_card search_card2">
                        <h1 className="search_title2">House Music</h1>
                    </div>
                    <div className="search_card search_card3">
                        <h1 className="search_title2">Rapping</h1>
                    </div>
                    <div className="search_card search_card4">
                        <h1 className="search_title2">Trance</h1>
                    </div>
                    <div className="search_card search_card5">
                        <h1 className="search_title2">Pop Rock</h1>
                    </div>
                </div>
                <div className="search_container7">
                    <h1 className="search_heading2">Artists</h1>
                    <p className="search_text2">See More</p>
                </div>
                <div className="search_cards">
                    <div className="search_card search_card6">
                        <h1 className="search_title2">Disco</h1>
                    </div>
                    <div className="search_card search_card7">
                        <h1 className="search_title2">House Music</h1>
                    </div>
                    <div className="search_card search_card8">
                        <h1 className="search_title2">Rapping</h1>
                    </div>
                    <div className="search_card search_card9">
                        <h1 className="search_title2">Trance</h1>
                    </div>
                    <div className="search_card search_card10">
                        <h1 className="search_title2">Pop Rock</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Searchpage