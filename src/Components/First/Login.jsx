import React, { useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleUser = () => {
    navigate("/user/Login");
  };

  const handleOwner = () => {
    navigate("/owner/Login");
  };

  return (

    <div className="login-container">

      <h2>Select Login Type</h2>

      <button onClick={handleUser}>User Login</button>

      <button onClick={handleOwner}>Owner Login</button>

    </div>

  );

};

export default Login;