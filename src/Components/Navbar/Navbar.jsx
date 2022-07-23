import React from "react";
import Nav from "./Nav.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ auth, name }) => {
  const navigate = useNavigate();

  const deleteLocalStorage = () => {
    //   console.log("CLicked");
    // localStorage.clear();
    // navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-btn">{name}</div>

        {auth ? (
          <button className="navbar-btn login-Btn" onClick={deleteLocalStorage}>
            Logout
          </button>
        ) : (
          <div className="navbar-btn login-Btn">Login</div>
        )}
      </div>
    </>
  );
};

export default Navbar;
