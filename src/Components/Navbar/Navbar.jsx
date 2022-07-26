import React, { useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Navbar = ({ auth, name,setAuthToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/loginpage");
    }
  }, [auth]);
  const deleteLocalStorage = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("accessToken");
    setAuthToken(null)
    navigate("/")
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
