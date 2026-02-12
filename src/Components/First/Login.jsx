import React, { useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [slide, setSlide] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setSlide(true); // start animation

    setTimeout(() => {
      navigate(path); // go to next page after animation
    }, 600); // must match CSS transition time
  };

  return (
    <div className={`page ${slide ? "slide-left" : ""}`}>
      <div className="log-container">
        <div className="btn1-container">
          <button className="btn1" onClick={() => handleNavigate("/owner")}>
            Owner
          </button>
          <button className="btn1" onClick={() => handleNavigate("/user")}>
            User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
