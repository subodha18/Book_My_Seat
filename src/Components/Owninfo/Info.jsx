import React from 'react'
import './Infoc.css'
const Info = () => {
  return (
    <div className='owner-container'>
      <p>This is Bus Information.</p>
      <div className='input-container2'>

        <label for="name">ownername:</label>
        <input type='text'placeholder='Enter name' id='name'/>
        <br />
        <label for="name">Bus no:</label>
        <input type='number'placeholder='Enter register no' id='bnum'/>
        <br />
        <label for="bname">Bus name:</label>
        <input type='text'placeholder='Enter bus name' id='bname'/>
        <br />
        <label for="btype">Bus Type:</label>
        <input type='text'placeholder='Enter bus type' id='btype'/>
        <br />
        <label for="name">Total Seats:</label>
        <input type='text'placeholder='Enter tital seats' id='name'/>
        <br />
        <label for="state">State:</label>
        <input type='text'placeholder='Enter state' id='state'/>
        <br />
        
        </div>
        <div >
          <button className='btn'>submit</button>
        </div>
    </div>
  )
}

export default Info
