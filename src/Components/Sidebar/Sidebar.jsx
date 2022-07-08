import React from 'react'
import Ellipse39 from './Ellipse39.png'
import Vector from './Vector.png'
import musicalbum1 from './musicalbum1.png'
import Vector1 from './Vector1.png'
import "./side.css"
import {NavLink} from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-img">
                    <img src={Ellipse39} alt="" className="sidebar-img1" />
                </div>
                <div className="sidebar-container1">
                    <div className="sidebar-content">
                        <img src={Vector} alt="" className="sidebar-img2" />
                        <p className="sidebar-txt"><NavLink to="/home">Home</NavLink></p>
                    </div>
                    <div className="sidebar-content">
                        <img src={musicalbum1} alt="" className="sidebar-img2" />
                        <p className="sidebar-txt"><NavLink to="/album">Album</NavLink></p>
                    </div>
                    <div className="sidebar-content">
                        <img src={Vector1} alt="" className="sidebar-img2" />
                        <p className="sidebar-txt"><NavLink to="/content/likedpage">Liked songs</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar