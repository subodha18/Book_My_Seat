import { useState } from "react";
import "./OwnerLogin.css";
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
      const res = await fetch("http://localhost:5000/api/owner/Login", {
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
        setSlide(true);

        setTimeout(() => {
          navigate("/businfo");
        }, 600);

      } else {
        alert(data.message || "Owner not registered");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className={`pagee ${slide ? "slide-right" : ""}`}>
      <div className="owner-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container2">

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

            <p style={{ marginTop: "15px" }} id="Login">
              If Don't have account <Link to="/owner/register">Register</Link>
            </p>

          </div>

          <button
            className="btn"
            type="submit"
            disabled={!isFormValid}
            style={{
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.6,
            }}
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Owneri;