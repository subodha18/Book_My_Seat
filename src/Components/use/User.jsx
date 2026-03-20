
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Owneri = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slide, setSlide] = useState(false);

  const navigate = useNavigate();

  const isFormValid =
    name.trim() !== "" &&
    email.includes("@") &&
    password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSlide(true);

        setTimeout(() => {
          navigate("/menu");
        }, 600);
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className={`page-container app-background flex-col-center ${slide ? "slide-right" : ""}`}>
      <div className="glass-panel animate-slide-up" style={{ padding: '40px', width: '90%', maxWidth: '400px' }}>
        <h2 style={{ color: 'var(--primary-navy)', marginBottom: '24px', textAlign: 'center' }}>User Registration</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          
          <div className="premium-input-group">
            <label htmlFor="name">Full Name</label>
            <input
              className="premium-input"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="premium-input-group">
            <label htmlFor="mail">Email Address</label>
            <input
              className="premium-input"
              type="email"
              id="mail"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="premium-input-group">
            <label htmlFor="pass">Password</label>
            <input
              className="premium-input"
              type="password"
              id="pass"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn-primary"
            type="submit"
            disabled={!isFormValid}
            style={{ marginTop: '24px', width: '100%' }}
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
};

export default Owneri;