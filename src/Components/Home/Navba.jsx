import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo2 from "./logo2.png"
import Ticket from '../Ticket/Ticket'

const Navba = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '16px 24px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>

        <div style={{ cursor: 'pointer' }}>
          <img src={logo2} alt="logo" height="40" style={{ objectFit: 'contain' }} />
        </div>

        {/* Hamburger Icon for Mobile - Simplified for functionality */}
        <div 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', cursor: 'pointer', flexDirection: 'column', gap: '4px' }}
          className="mobile-menu-btn"
        >
          <div style={{ width: '24px', height: '3px', backgroundColor: 'var(--primary-navy)' }}></div>
          <div style={{ width: '24px', height: '3px', backgroundColor: 'var(--primary-navy)' }}></div>
          <div style={{ width: '24px', height: '3px', backgroundColor: 'var(--primary-navy)' }}></div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase' }}>State:</label>
            <select className="premium-input" style={{ padding: '6px 12px', width: 'auto' }}>
              <option value="">- Select -</option>
              <option value="Jajpur">Jajpur</option>
              <option value="Dhenkanal">Dhenkanal</option>
              <option value="Angul">Angul</option>
              <option value="Bhadrak">Bhadrak</option>
              <option value="Cuttack">Cuttack</option>
            </select>
          </div>
          <Link to='/menu' style={{ textDecoration: 'none' }}><button className='btn-secondary'>Home</button></Link>
          <Link to='/history' style={{ textDecoration: 'none' }}><button className='btn-secondary'>My History</button></Link>
          <button className='btn-secondary'>Ticket Booking</button>
          <Link to='/' style={{ textDecoration: 'none' }}><button className='btn-primary'>Login</button></Link>
        </div>

      </div>
    </nav>
  )
}

export default Navba