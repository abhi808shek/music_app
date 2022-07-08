import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Albumpage from "../Album/Albumpage";
import Footer from "../Footer/Footer";
import "./Contentbox.css";
import Likedpage from "../Likedpage/Likedpage";
import {Routes, Route} from "react-router-dom"



const Content = () => {
  return (
    <>
      <div className="content-box">
        <div className="sidebar">
          <Sidebar />
        </div>
        
          <Routes>
          
          </Routes>
          {/* <Albumpage /> */}
          {/* <Likedpage /> */}
        
      </div>
    </>
  );
};

export default Content;
