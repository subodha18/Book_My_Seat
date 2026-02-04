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
            <a href="https://www.linkedin.com/in/bookmy-seat-1734233aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} className='icns'/></a>
            <a href="https://github.com/BookMySeatss"><FontAwesomeIcon icon={faGithub} className='icns'/></a>
            <a href="https://www.instagram.com/book_my_seats?igsh=bm42dnkzbmp3YTMw"><FontAwesomeIcon icon={faInstagram} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='icns'/></a>
        </div>
        <div id='play-icn'>
          <div className='parat'>
            <p>For better experience,download the app now</p>
          </div>
          <div id='icn2'>
            <img src={app_store} alt="app" height={50} width={140}/>
            <img src={play_store} alt="app" height={50} width={140}/>
          </div>
          <div className='par'>
            <p>made by subodha Pvt.Ltd. </p>
          </div>
        </div>
    </div>
  )
}

export default Footer
