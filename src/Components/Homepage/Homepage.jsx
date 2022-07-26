import React,{useEffect} from 'react'
import './Home.css'
import HomePageCard from './HomePageCard/HomePageCard'
import {useNavigate} from "react-router-dom"
// import homeList from "./homeList"

const Homepage = ({auth}) => {
    const navigate = useNavigate();
    const items = [1, 2, 3, 4,5, 6, 7, 8]
    useEffect(() => {
      if (!auth) {
        navigate("/loginpage")
      }
    }, [auth])
    
    return (
        <>
            <div className="home-container">
                <div className="home-container1">
                    <div className="home-container2">
                        <h1 className="home-heading">Made  For You</h1>
                    </div>
                    <div className="home-card-container">
                    {items.map((items,index) => <HomePageCard key={index}/>)}
                    </div>
                </div>
                {/* <div className="home-container1">
                    <div className="home-container2">
                        <h1 className="home-heading">Today’s Hit</h1>
                    </div>
                    <div className="home-card-container">
                        {items.map((items,index) => <HomePageCard key={index}/>)}
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Homepage