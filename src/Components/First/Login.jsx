import React from 'react'
import './Log.css'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='log-container'>
      <p>Hii This is Login.</p>
      <div className='btn-container'>

        <Link to='/owner'><button className='btn'>Owner</button></Link>
        <Link to='/user'><button className='btn'>User</button></Link>

      </div>
    </div>
  )
}

export default Login
