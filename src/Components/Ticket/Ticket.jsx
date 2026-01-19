import React from 'react'
import { useState } from "react";
import './Ticketc.css'

  
const Ticket = () => {
    const [trip, setTrip] = useState("");
  return (
    <div>
      Hii this is ticket folder.
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
        <div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Ticket
