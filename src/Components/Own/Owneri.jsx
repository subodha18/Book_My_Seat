// import React from 'react'
// import './Ownec.css'
// import {Link} from 'react-router-dom'
// const Owneri = () => {
//   return (
//     <div>
//       <div className='owner-container'>
//       <p>This is Owner page.</p>

//       <div className='input-container2'>

//         <label for="name">owner name:</label>
//         <input type='text'placeholder='Enter your name' id='name'/>
//         <br />
//         <label for="num">Mobile number:</label>
//         <input type='number'placeholder='Enter mobile number' id='num'/>
//         <br />
//         <label for="mail">Email:</label>
//         <input type='email'placeholder='Enter email' id='mail'/>
//         <br />
//         <label for="pass">Password:</label>
//         <input type='password'placeholder='Enter password' id='pass'/>
//         <br />
        
//       </div>
//       <div>
//         <Link to='/businfo'><button className='btn'>Login</button></Link>
//       </div>
//     </div>
//   </div>
    
//   )
// }

// export default Owneri

import { useState } from "react";
import "./Ownec.css";
import { useNavigate } from "react-router-dom";

const Owneri = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Validation rules
  const isFormValid =
    name.trim() !== "" &&
    mobile.trim().length === 10 &&
    email.includes("@") &&
    password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    navigate("/businfo");
  };

  return (
    <div className="owner-container">

      <form onSubmit={handleSubmit}>
        <div className="input-container2">

          <label htmlFor="name">Owner Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="num">Mobile Number:</label>
          <input
            type="text"
            id="num"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="mail"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <div>
          <button className="btn" type="submit" disabled={!isFormValid} style={{
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.6,
            }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Owneri
