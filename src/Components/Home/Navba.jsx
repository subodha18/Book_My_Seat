import React from 'react'
import {Link} from 'react-router-dom'

import './Nabbarc.css' 
import logo2 from "./logo2.png"
const Navba = () => {
  return (
    <div id='nav-contain'>
    <div id='navbar'>
        {/* <p>This is Navbar page.</p> */}
        <div id='logoi'>
            <img id='pho'src={logo2} alt="logo" width="150"  />
        </div>

        <div id='mulbtn'>
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
            {/* <button className='nan-btn'>Login</button> */}
            <Link to='/'><button type='submit' className='nan-btn'>Login</button></Link>
        </div>
    </div>
    </div>
  )
}

export default Navba
