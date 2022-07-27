import React from "react";
import "./homepagecard.css"
import { NavLink } from "react-router-dom";
const HomePageCard = ({items}) => {
  return (
        <NavLink to={items.url}>
    <div className="home-card-container1">
        <img src={items.image1} alt="" />
        <h1 className="home-title">{items.title}</h1>
        <p className="home-txt">
          {items.description}
        </p>
      </div>
      </NavLink>
  );
};

export default HomePageCard;
