
import { useState } from "react";
import "./Userc.css";
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
          navigate("/businfo");
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
    <div className={`pagee ${slide ? "slide-right" : ""}`}>
      <div className="owner-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container2">

            <label htmlFor="name">User Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <button
              className="btn"
              type="submit"
              disabled={!isFormValid}
              style={{
                cursor: isFormValid ? "pointer" : "not-allowed",
                opacity: isFormValid ? 1 : 0.6,
              }}
            >
              Register
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Owneri;