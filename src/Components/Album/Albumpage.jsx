import React from 'react'
import AlbumCard from './AlbumCards/AlbumCard'
import './Albumstyle.css'
import Rectangle74 from './Rectangle74.png'

const Album = () => {
<<<<<<< HEAD
  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
=======
  const items = [1,2,3,4,5,6,7,8]
>>>>>>> 8b2dc6652887f50c61a35f802aca89ef3986c67a
  return (
    <>
      <div className="album-container">
        <div className="album-container1">
          <h1 className="album-heading">Your Albums</h1>
        </div>
        <div className="album-container2">
      {items.map((albumCards)=><AlbumCard Rectangle74={Rectangle74}/>)}
        </div>
      </div>
    </>
  )
}

export default Album