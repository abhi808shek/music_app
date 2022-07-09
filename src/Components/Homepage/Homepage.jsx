import React from 'react'
import './Home.css'
import HomePageCard from './HomePageCard/HomePageCard'

const Homepage = () => {
    const items = [1,2,3,4,5]
    return (
        <>
            <div className="home-container">
                <div className="home-container1">
                    <div className="home-container2">
                        <h1 className="home-heading">Made  For You</h1>
                    </div>
                   {items.map((items)=><HomePageCard />)} 
                </div>
                <div className="home-container1">
                    <div className="home-container2">
                        <h1 className="home-heading">Today’s Hit</h1>
                    </div>
                    {items.map((items)=><HomePageCard />)} 
                </div>
            </div>
        </>
    )
}

export default Homepage