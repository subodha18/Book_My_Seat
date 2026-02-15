import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Seat-con.css";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return <h2>No Booking Found</h2>;
  }

  return (
    <div className="confirmation-container">
      <div className="success-animation">✔</div>

      <h2>Booking Confirmed!</h2>

      <img src={data.bus.image} alt={data.bus.name} />

      <h3>{data.bus.name}</h3>
      <p>Seats: {data.seats.join(", ")}</p>
      <h3>Total Paid: ₹ {data.total}</h3>

      <button onClick={() => navigate("/menu")}>
        Back to Home
      </button>
    </div>
  );
};

export default Confirmation;
