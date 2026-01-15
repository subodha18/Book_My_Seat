import React from 'react'
import '../use/Userc.css'
import {Link} from 'react-router-dom'
const User = () => {
  return (
    <div className='user-container'>
      <p>This is user page.</p>

      <div className='input-container'>
        <label for="name">Username:</label>
        <input type='text'placeholder='Enter your name' id='name'/>
        <br />
        <label for="mail">Email:</label>
        <input type='email'placeholder='Enter your Email' id='mail'/>
        <br />
        <label for="num">Phone no:</label>
        <input type='number'placeholder='Enter your number' id='num'/>
        <br />
        <label for="pass">Password:</label>
        <input type='password'placeholder='Enter your password' id='pass'/>
        <br />
      </div>

      <div className='btn2'>
        
        <Link to='/menu'><button type='submit' id='in-btn'>Login</button></Link>
      </div>
    </div>
  )
}

export default User
