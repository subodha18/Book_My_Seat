import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../use/Userc.css";

const User = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slide, setSlide] = useState(false);

  const navigate = useNavigate();

  // validation condition
  const isFormValid =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setSlide(true); // start animation

    setTimeout(() => {
      navigate("/menu"); // navigate after animation
    }, 600);
  };

  return (
    <div className={`page ${slide ? "slide-top" : ""}`}>
      <div className="user-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Username:</label>
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
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="num">Phone no:</label>
            <input
              type="tel"
              id="num"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn2">
            <button
              type="submit"
              id="in-btn"
              disabled={!isFormValid}
              style={{
                cursor: isFormValid ? "pointer" : "not-allowed",
                opacity: isFormValid ? 1 : 0.6,
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
