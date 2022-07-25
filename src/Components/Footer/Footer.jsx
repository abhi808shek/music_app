import React,{useState} from "react";
import image7 from "./image7.png";
import pause from "./pause.png";
import unliked from "./unliked.png";
import liked from "./liked.png";
import play from "./play.png";


import Foot from "./Foot.css";

const Footer = ({ auth }) => {
  const [favorite, setFavorite] = useState(false)
  const [control, setControl] = useState(false)

  const controlBtn = ()=>{
    setControl(!control)
  }
  const favIcon = ()=>{
    setFavorite(!favorite)
  }
  return (
    <>
      <div className="footer">
        {auth && (
          <div className="footer">
            <div className="footer-container1">
              <img src={image7} alt="" className="footer-icon" />
              <h1 className="footer-txt">Blinding Lights</h1>
            </div>
            <div className="footer-container2">
             {control ? <img src={play} alt="" className="footer-pause-icon" onClick={controlBtn}/> : <img src={pause} alt="" className="footer-pause-icon" onClick={controlBtn}/>}
             {favorite ? <img src={liked} alt="" className="footer-like-icon" onClick={favIcon}/> : <img src={unliked} alt="" className="footer-like-icon" onClick={favIcon}/>}
           
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
