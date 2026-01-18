import React from 'react'
import Subu from "./Subu.png"
import Pratik from "./Pratik.png"
import Sibul from "./Sibul.png"
import Dipun from "./Dipun.png"
import './Addfec.css'
const Addfe = () => {
  return (
    <div id='container'>
      
      <div id='con-para'>
        <h2>Enjoy Your trip with our Experience Partners</h2>
      </div>
      <div id='img-con'>
        <img src={Subu} alt="pho" height={150} width={300}/>
        <img src={Pratik} alt="pho" height={150} width={300}/>
        <img src={Dipun} alt="pho" height={150} width={300}/>
        <img src={Sibul} alt="pho" height={150} width={300}/>
      </div>
    </div>
  )
}

export default Addfe
