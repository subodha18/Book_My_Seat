import React from 'react'
import { useState } from "react"
import {Link} from 'react-router-dom'
import './Ticketc.css'

  
const Ticket = () => {
    const [trip, setTrip] = useState("");
  return (
    <div id='main-co'>
      <div id='tik-con'>

        <div id='check'>
            <label>
                <input
                    type="checkbox"
                    checked={trip === "oneWay"}
                    onChange={() => setTrip("oneWay")}
                    />
                One Way
            </label>
            <label>
                <input
                type="checkbox"
                checked={trip === "roundTrip"}
                onChange={() => setTrip("roundTrip")}
                />
                Round Trip
            </label>
        </div>

        <div id='abcx' >
          <label className='lab bor'>From
            <h2>Jajpur</h2>
            <p>Maa Biraja Bus Stand</p>
            <select>
            
              <option value="">- Select start Place -</option>
              <option value="Jajpur">Jajpur</option>
              <option value="Dhenkanal">Dhenkanal</option>
              <option value="Angul">Angul</option>
              <option value="Bhadrak">Bhadrak</option>
              <option value="Cuttack">Cuttack</option>
            </select>
          </label>
          <br />


          <label className='lab'>To
              <h2>Keonjhar</h2>
              <p>Maa Tarini Bus Stand</p>
                
            <select>
              <option value="">- Select start Place -</option>
              <option value="Jajpur">Jajpur</option>
              <option value="Dhenkanal">Dhenkanal</option>
              <option value="Angul">Angul</option>
              <option value="Bhadrak">Bhadrak</option>
              <option value="Cuttack">Cuttack</option>
            </select>
          </label>

          <label className='start'>Departure:
            <input type="date" id='dat'/>
          </label>

          <label className='start'>Return:
            <input type="date" id='dt'/>
          </label>

          <label className='seat'>
              <p>Seat Type</p>
                
            <select >
              <option value="">- Select-</option>
              <option value="Jajpur">Normal</option>
              <option value="Dhenkanal">Sleeper</option>
              
            </select>
          </label>
        </div>

        <div id='offer-con'>

          <div className='off2'>
            <h3>SPACIAL</h3>
            <h3>Offers</h3>
          </div>
          <div className='off off3'>
            <a href="#"><h3>Regular</h3></a>
            
            <p>Regular fares</p>
          </div>
          <div className='off'>
            <h3>STUDENT</h3>
            <p>Extra discounts/baggage</p>
          </div>

          <div className='off'>
            <h3>Travelling for work?</h3>
            <p>Up to 10% Extra Saving !</p>
          </div>

          <div className='off'>
            <h3>Armed Forces</h3>
            <p>Up to 600 off</p>
          </div>

          <div className='off'>
            <h3>Doctor and Nurses</h3>
            <p>Up to 600 off</p>
          </div>
          <div id='none'></div>
          <div id='track'>
            <Link to='/bus'><button id="Book">Book</button></Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
