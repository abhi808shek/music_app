import React from "react";
import "./style/sidebar.css";
import Items from "./Items";

const Sidebar = () => {
  const items = [1, 2, 3, 4];
  return (
    <div className="sidebar d-flex justify-content-evenly align-items-center">
        <div className="profileIcon bg-warning ">
          <img src="" alt="" />
        </div>
      <div className="w-75 sidebarInnerBox d-flex justify-content-evenly align-items-center">
        {Items.map((item) => {
          return (
            <div className="d-flex profileItems justify-content-between">
              <div className="w-50">
               
                <img src={item.icons} alt="" />
              </div>
              <div className="w-75 d-flex ">
               
                <h5 className="profileItemText">{item.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
