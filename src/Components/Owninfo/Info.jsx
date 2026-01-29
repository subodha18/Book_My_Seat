import React from 'react'
import './Infoc.css'
import {Link} from 'react-router-dom'
const Info = () => {
  return (
    <div className='owner-conta'>
      <p>This is Bus Information.</p>
      <div className='input-conta'>

        <label for="nam">ownername:</label>
        <input type='text'placeholder='Enter name' id='nam'/>
        <br />
        <label for="bnum">Bus no:</label>
        <input type='number'placeholder='Enter register no' id='bnum'/>
        <br />
        <label for="bnam">Bus name:</label>
        <input type='text'placeholder='Enter bus name' id='bnam'/>
        <br />
        <label for="btyp">Bus Type:</label>
        <input type='text'placeholder='Enter bus type' id='btyp'/>
        <br />
        <label for="name">Total Seats:</label>
        <input type='number'placeholder='Enter tital seats' id='name'/>
        <br />
        <label for="stat">State:</label>
        <input type='text'placeholder='Enter state' id='stat'/>
        <br />
        
        </div>
        <div >
          <Link to='/menu'><button type='submit' className='btn3'>submit</button></Link>
        </div>
    </div>
  )
}

export default Info
