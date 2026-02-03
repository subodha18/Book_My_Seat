// import React from 'react'
// import './Infoc.css'
// import {Link} from 'react-router-dom'
// const Info = () => {
//   return (
//     <div className='owner-conta'>
//       <p>This is Bus Information.</p>
//       <div className='input-conta'>

//         <label for="nam">ownername:</label>
//         <input type='text'placeholder='Enter name' id='nam'/>
//         <br />
//         <label for="bnum">Bus no:</label>
//         <input type='number'placeholder='Enter register no' id='bnum'/>
//         <br />
//         <label for="bnam">Bus name:</label>
//         <input type='text'placeholder='Enter bus name' id='bnam'/>
//         <br />
//         <label for="btyp">Bus Type:</label>
//         <input type='text'placeholder='Enter bus type' id='btyp'/>
//         <br />
//         <label for="name">Total Seats:</label>
//         <input type='number'placeholder='Enter tital seats' id='name'/>
//         <br />
//         <label for="stat">State:</label>
//         <input type='text'placeholder='Enter state' id='stat'/>
//         <br />
        
//         </div>
//         <div >
//           <Link to='/menu'><button type='submit' className='btn3'>submit</button></Link>
//         </div>
//     </div>
//   )
// }

// export default Info

import { useState } from "react";
import "./Infoc.css";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const [ownerName, setOwnerName] = useState("");
  const [busNo, setBusNo] = useState("");
  const [busName, setBusName] = useState("");
  const [busType, setBusType] = useState("");
  const [seats, setSeats] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  // Validation
  const isFormValid =
    ownerName.trim() !== "" &&
    busNo.trim() !== "" &&
    busName.trim() !== "" &&
    busType.trim() !== "" &&
    seats > 0 &&
    state.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    navigate("/menu");
  };

  return (
    <div className="owner-conta">

      <form onSubmit={handleSubmit}>
        <div className="input-conta">

          <label htmlFor="nam">Owner Name:</label>
          <input
            type="text"
            id="nam"
            placeholder="Enter name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />

          <label htmlFor="bnum">Bus No:</label>
          <input
            type="text"
            id="bnum"
            placeholder="Enter register no"
            value={busNo}
            onChange={(e) => setBusNo(e.target.value)}
          />

          <label htmlFor="bnam">Bus Name:</label>
          <input
            type="text"
            id="bnam"
            placeholder="Enter bus name"
            value={busName}
            onChange={(e) => setBusName(e.target.value)}
          />

          <label htmlFor="btyp">Bus Type:</label>
          <input
            type="text"
            id="btyp"
            placeholder="Enter bus type"
            value={busType}
            onChange={(e) => setBusType(e.target.value)}
          />

          <label htmlFor="seat">Total Seats:</label>
          <input
            type="number"
            id="seat"
            placeholder="Enter total seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />

          <label htmlFor="stat">State:</label>
          <input
            type="text"
            id="stat"
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

        </div>

        <div>
          <button className="btn3" type="submit" disabled={!isFormValid} style={{
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.6,
            }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Info;

