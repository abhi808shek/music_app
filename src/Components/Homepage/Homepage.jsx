import React from 'react'
import './Home.css'

const Homepage = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-container1">
                    <div className="home-container2">
                        <h1 className="home-heading">Made  For You</h1>
                    </div>
                    <div className="home-card-container1">
                        <h1 className="home-title">Daily Mix 1</h1>
                        <p className="home-txt">Shreya Ghoshal, Lata Mangeshkar,
                            Asha Bhoshle, Udit Narayan...</p>
                    </div>
                </div>
                <div className="home-container1">
                    <div className="home-container2">
                        <h1 className="home-heading">Today’s Hit</h1>
                    </div>
                    <div className="home-card-container1">
                        <h1 className="home-title">Zayn Malik</h1>
                        <p className="home-txt">Like You Have Never Felt Before</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage