import React from 'react'
import {Link} from 'react-router-dom'
import './Nabbarc.css' 
import logo from "./logo.png"
const Navba = () => {
  return (
    <div id='nav-contain'>
    <div id='navbar'>
        {/* <p>This is Navbar page.</p> */}
        <div id='logoi'>
            <img id='pho'src={logo} alt="logo" width="200"  />
        </div>
        <div>
            <button id='btns'>Login</button>
        </div>

        <div id='in'>
            <label id='lvl'>Select Country:</label>
            <br />
            <select id='stn'>
                <option value="">- Select Country -</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
            </select>
        </div>
    </div></div>
  )
}

export default Navba
