import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Likedpage from '../Likedpage/Likedpage'
// import Albumpage from './Album/Albumpage'
import Footer from '../Footer/Footer'
import "./Contentbox2.css"

const Content2 = () => {
  return (
    <>
        <div className="content2-box">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="Likedpage">
            <Likedpage />
        </div>
    </div>
    </>
  )
}

export default Content2