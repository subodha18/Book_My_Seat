import React from "react";
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
    <div className="app-background flex-col-center">
      <div className="glass-panel flex-col-center animate-slide-up" style={{ padding: '40px', width: '90%', maxWidth: '400px', gap: '20px' }}>
        <h2 style={{ color: 'var(--primary-navy)', marginBottom: '10px' }}>Select Login Type</h2>
        
        <button className="btn-primary" style={{ width: '100%' }} onClick={handleUser}>
          Continue as User
        </button>
        
        <button className="btn-secondary" style={{ width: '100%' }} onClick={handleOwner}>
          Continue as Bus Owner
        </button>
      </div>
    </div>
  );
};

export default Login;