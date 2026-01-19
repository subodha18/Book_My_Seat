import React from 'react'
import Jagannathpravhu from "./Jagannathpravhu.jpg"
import Birajamaa from "./Birajamaa.jpg"
import Akhandalmani from "./Akhandalmani.jpg"
import Tarinimaa from "./Tarinimaa.jpg"
import './Placec.css'
const Place = () => {
  return (
    <div id='con-all'>
      <div id='con-pa'>
        <h2>Book your First ticket to our most famous place</h2>
      </div>
      <div id='img-cont'>
        <img src={Jagannathpravhu} alt="pho" height={150} width={300}/>
        <img src={Birajamaa} alt="pho" height={150} width={300}/>
        <img src={Tarinimaa} alt="pho" height={150} width={300}/>
        <img src={Akhandalmani} alt="pho" height={150} width={300}/>
      </div>
    </div>
  )
}

export default Place
