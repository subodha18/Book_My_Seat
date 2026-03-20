import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Owneri = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slide, setSlide] = useState(false);

  const navigate = useNavigate();

  const isFormValid =
    email.includes("@") &&
    password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      const res = await fetch("http://localhost:5000/api/user/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await res.json();

      if (res.ok) {
        // login success
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", "user");
        setSlide(true);

        setTimeout(() => {
          navigate("/menu");
        }, 600);

      } else {
        // login failed
        alert(data.message || "User not registered");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className={`page-container app-background flex-col-center ${slide ? "slide-right" : ""}`}>
      <div className="glass-panel animate-slide-up" style={{ padding: '40px', width: '90%', maxWidth: '400px' }}>
        <h2 style={{ color: 'var(--primary-navy)', marginBottom: '24px', textAlign: 'center' }}>User Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          
          <div className="premium-input-group">
            <label htmlFor="mail">Email Address</label>
            <input
              className="premium-input"
              type="email"
              id="mail"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p style={{ marginTop: "15px", fontSize: "14px", textAlign: "center", color: "var(--text-muted)" }}>
            Don't have an account? <Link to="/user/register" style={{ color: "var(--brand-orange)", fontWeight: "600", textDecoration: "none" }}>Register</Link>
          </p>

          <button
            className="btn-primary"
            type="submit"
            disabled={!isFormValid}
            style={{ marginTop: '24px', width: '100%' }}
          >
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
};

export default Owneri;