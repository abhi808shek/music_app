import React from 'react'
import Ellipse39 from "./Ellipse39.png"
import Vector from "./Vector.png"
import searchwhite1 from "./searchwhite1.png"
import musicalbum1 from "./musicalbum1.png"
import Home from "./Home.css"

function Homepage() {
  return (
    <>
       <div className="container">
        <div className="container1">
            <img src={Ellipse39} alt="logo" className="logo"/>
            <div className="navbar">
                <div className="nav">
                    <img src={Vector} alt="" className="icon"/>
                    <h2 className="head">Home</h2>
                </div>
                <div className="nav">
                    <img src={searchwhite1} alt="" className="icon"/>
                    <h2 className="head">Search</h2>
                </div>
                <div className="nav">
                    <img src={musicalbum1} alt="" className="icon"/>
                    <h2 className="head">Album</h2>
                </div>
                <div className="nav">
                    <img src="Vector2.png" alt="" className="icon"/>
                    <h2 className="head">Liked songs</h2>
                </div>
            </div>
        </div>
        <div className="container2">
            <div className="options">
                <button className="btn1">User name</button>
                <button className="btn1">Logout</button>
            </div>
            <div className="container3">
                <div className="heading1">
                    <h1 className="h1">Made For You</h1>
                    <p className="para1">See More</p>
                </div>
                <div className="container4">
                    <div className="album">
                        <h1 className="head2">Daily Mix 1</h1>
                        <p className="para2">Shreya Ghoshal, Lata Mangeshkar, Asha Bhoshle, Udit Narayan...</p>
                    </div>
                    <div className="album album2">
                        <h1 className="head2">Daily Mix 2</h1>
                        <p className="para2">Arijit Singh, AR Rehman, Mohit Chauhan, Javed Ali...</p>
                    </div>
                    <div className="album album3">
                        <h1 className="head2">Daily Mix 3</h1>
                        <p className="para2">Bruno Mars, The Weeknd, Drake, Ariana Grande and More</p>
                    </div>
                    <div className="album album4">
                        <h1 className="head2">Daily Mix 4</h1>
                        <p className="para2">Beyonce, Post Malone, Katy Perry, Lil Baby, Xxxtanctacion...</p>
                    </div>
                </div>
                <div className="heading1">
                    <h1 className="h1">Today's Hit</h1>
                    <p className="para1">See More</p>
                </div>
                <div className="container4">
                    <div className="album album5">
                        <h1 className="head2">Zayn Malik</h1>
                        <p className="para2">Like You Have Never Felt Before</p>
                    </div>
                    <div className="album album6">
                        <h1 className="head2">Ariana Grande</h1>
                        <p className="para2">Positions has Been The Most Loved Song</p>
                    </div>
                    <div className="album album7">
                        <h1 className="head2">Harry Styles</h1>
                        <p className="para2">Style is in His Name Already</p>
                    </div>
                    <div className="album album8">
                        <h1 className="head2">Shreya Ghoshal</h1>
                        <p className="para2">The Melody in Her Voice Is Sweeter Than the Honey</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Homepage