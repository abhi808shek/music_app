import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Albumpage from '../Album/Albumpage'
import Footer from '../Footer/Footer'
import "./Contentbox.css"

const Content = () => {
  return (
    <>
    <div className="content-box">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="album">
            <Albumpage />
        </div>
    </div>
    </>
  )
}

export default Content