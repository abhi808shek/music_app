import React from "react";
import AlbumCard from "./AlbumCards/AlbumCard";
import "./Albumstyle.css";
import Rectangle74 from "./Rectangle74.png";
import axios from "axios" ;
import react,{ useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"


const Album = ({auth}) => {
  const [album, setAlbum] = useState([]) 
  const navigate = useNavigate()
  useEffect(() => {
    if (!auth) {
      navigate("/loginpage")
    }
  }, [auth]);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  return (
    <>
      <div className="album-container">
        <div className="album-container1">
          <h1 className="album-heading">Your Albums</h1>
        </div>
        <div className="album-container2">
          {album.map((albumCards,index) => <AlbumCard Rectangle74={Rectangle74} key={index}/>)}
        </div>
      </div>
    </>
  );
};

export default Album;
