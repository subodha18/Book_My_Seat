import React from 'react'
import './Log.css'
import {Link} from 'react-router-dom'
const Login = () => {

  return (
    <div className='log-container'>
      
      <div className='btn1-container'>

        <Link to='/owner'><button className='btn1'>Owner</button></Link>
        <Link to='/user'><button className='btn1'>User</button></Link>

      </div>
    </div>
  )
}

export default Login
