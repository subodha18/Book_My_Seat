import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDiscord, faXTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import app_store from "./app_store.avif"
import play_store from "./play_store.avif"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'white', padding: '60px 20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
        
        <div style={{ display: 'flex', gap: '24px', fontSize: '24px' }}>
            <a href="https://www.linkedin.com/in/bookmy-seat-1734233aa" style={{ color: 'white', transition: 'var(--transition-fast)' }}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/BookMySeatss" style={{ color: 'white', transition: 'var(--transition-fast)' }}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/book_my_seats" style={{ color: 'white', transition: 'var(--transition-fast)' }}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" style={{ color: 'white', transition: 'var(--transition-fast)' }}><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#" style={{ color: 'white', transition: 'var(--transition-fast)' }}><FontAwesomeIcon icon={faFacebook} /></a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>For better experience, download the app now</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img src={app_store} alt="App Store" height={45} style={{ cursor: 'pointer', borderRadius: '8px' }}/>
            <img src={play_store} alt="Play Store" height={45} style={{ cursor: 'pointer', borderRadius: '8px' }}/>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)', width: '100%', opacity: 0.2, margin: '20px 0' }}></div>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>&copy; {new Date().getFullYear()} Subodha Pvt. Ltd. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer
