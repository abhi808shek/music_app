import React from "react";
import "./homepagecard.css"
import { NavLink } from "react-router-dom";
const HomePageCard = ({items}) => {
  return (
    <div className="home-card-container1">
        <NavLink to={items.url}>
        <img src={items.image2} alt="" />
        <h1 className="home-title">{items.title}</h1>
        <p className="home-txt">
          {items.description}
        </p>
      </NavLink>
      </div>
  );
};

export default HomePageCard;
