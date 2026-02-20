import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nabbarc.css'
import logo2 from "./logo2.png"

const Navba = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id='nav-contain'>
      <div id='navbar'>

        <div id='logoi'>
          <img id='pho' src={logo2} alt="logo" width="150" />
        </div>

        {/* Hamburger Icon */}
        <div id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id='mulbtn' className={menuOpen ? "active" : ""}>
          <div id='in'>
            <label id='lvl'>Select State:</label>
            <br />
            <select id='stn'>
              <option value="">- Select State -</option>
              <option value="Jajpur">Jajpur</option>
              <option value="Dhenkanal">Dhenkanal</option>
              <option value="Angul">Angul</option>
              <option value="Bhadrak">Bhadrak</option>
              <option value="Cuttack">Cuttack</option>
            </select>
          </div>

          <button className='nan-btn'>Home</button>
          <button className='nan-btn'>Payment</button>
          <button className='nan-btn'>Ticket Booking</button>
          <Link to='/'><button className='nan-btn'>Login</button></Link>
        </div>

      </div>
    </div>
  )
}

export default Navba