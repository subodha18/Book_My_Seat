import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDiscord, faXTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Foote.css'
import app_store from "./app_store.avif"
import play_store from "./play_store.avif"
const Footer = () => {
  return (
    <div id='icn-con'>

        <div id='icn'>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='icns'/></a>
        </div>
        <div id='play-icn'>
          <div id='parat'>
            <p>For better experience,download the app now</p>
          </div>
          <div id='icn2'>
            <img src={app_store} alt="app" height={50} width={140}/>
            <img src={play_store} alt="app" height={50} width={140}/>
          </div>
          
        </div>
    </div>
  )
}

export default Footer
