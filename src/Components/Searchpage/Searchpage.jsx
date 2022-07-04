import React from 'react'
import Ellipse39 from "./Ellipse39.png"
import Vector from "./Vector.png"
import searchwhite1 from "./searchwhite1.png"
import musicalbum1 from "./musicalbum1.png"
import Vector2 from "./Vector2.png"
import image17 from "./image17.png"
import search from "./search.css"

function searchpage() {
  return (
    <>
            <div className="search_container">
        <div className="search_container1">
            <h1 className="head1">Username</h1>
            <h1 className="head1">Logout</h1>
        </div>
        <div className="search_container2">
            <div className="search_container3">
                <img src={Ellipse39} alt="logo" className="logo"/>
                <div className="navbar">
                    <div className="nav">
                        <div className="icon">
                            <img src={Vector} alt="" className="icon1"/>
                        </div>
                        <div className="text">
                            <h1 className="head2">Home</h1>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="icon">
                            <img src={searchwhite1} alt="" className="icon1"/>
                        </div>
                        <div className="text">
                            <h1 className="head2">Search</h1>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="icon">
                            <img src={musicalbum1} alt="" className="icon1"/>
                        </div>
                        <div className="text">
                            <h1 className="head2">Album</h1>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="icon">
                            <img src={Vector2} alt="" className="icon1"/>
                        </div>
                        <div className="text">
                            <h1 className="head2">Liked songs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search_container4">
                <div className="search_container5">
                    <h1 className="head3">Search</h1>
                    <div className="search_container6">
                        <input type="text" placeholder="Artists, Songs" className="input"/>
                        <img src={image17} alt="" className="icon2"/>
                    </div>
                </div>
                <hr/>
                <div className="search_container7">
                    <div className="search_container8">
                        <h1 className="head4">Genre</h1>
                        <h1 className="head5">See more</h1>
                    </div>
                    <div className="search_container9">
                        <div className="box box1">
                            <h1 className="head6">Dicso</h1>
                        </div>
                        <div className="box box2">
                            <h1 className="head6">House Music</h1>
                        </div>
                        <div className="box box3">
                            <h1 className="head6">Rapping</h1>
                        </div>
                        <div className="box box4">
                            <h1 className="head6">Trance</h1>
                        </div>
                        <div className="box box5">
                            <h1 className="head6">Pop Rock</h1>
                        </div>
                    </div>
                    <div className="search_container8">
                        <h1 className="head4">Artists</h1>
                        <h1 className="head5">See more</h1>
                    </div>
                    <div className="search_container9">
                        <div className="box box6">
                            <h1 className="head6">Ed Sheeran</h1>
                        </div>
                        <div className="box box7">
                            <h1 className="head6">Taylor Swift</h1>
                        </div>
                        <div className="box box8">
                            <h1 className="head6">Adele</h1>
                        </div>
                        <div className="box box9">
                            <h1 className="head6">Eminem</h1>
                        </div>
                        <div className="box box10">
                            <h1 className="head6">Bruno Mars</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default searchpage