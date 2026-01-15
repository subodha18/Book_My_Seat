import React from 'react'
import './Ownec.css'
import {Link} from 'react-router-dom'
const Owneri = () => {
  return (
    <div>
      <div className='owner-container'>
      <p>This is Owner page.</p>

      <div className='input-container2'>

        <label for="name">owner name:</label>
        <input type='text'placeholder='Enter your name' id='name'/>
        <br />
        <label for="num">Mobile number:</label>
        <input type='number'placeholder='Enter mobile number' id='num'/>
        <br />
        <label for="mail">Email:</label>
        <input type='email'placeholder='Enter email' id='mail'/>
        <br />
        <label for="pass">Password:</label>
        <input type='password'placeholder='Enter password' id='pass'/>
        <br />
        
      </div>
      <div>
        <Link to='/businfo'><button className='btn'>Login</button></Link>
      </div>
    </div>
  </div>
    
  )
}

export default Owneri
