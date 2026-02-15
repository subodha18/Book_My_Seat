
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Seatc.css";

const Seat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bus = location.state;

  const seatPrice = 100;
  const totalSeats = 60;
  const totalRows = totalSeats / 4;

  const bookedSeats = [3, 7, 12, 18, 25, 31, 40, 44, 52];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBooking, setIsBooking] = useState(false);

  if (!bus) {
    return <h2 style={{ textAlign: "center" }}>No Bus Selected</h2>;
  }

  const handleSeatClick = (seatNumber) => {
    if (isBooking) return;
    if (bookedSeats.includes(seatNumber)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) return;

    setIsBooking(true);

    setTimeout(() => {
      navigate("/conform", {
        state: {
          bus,
          seats: selectedSeats,
          total: selectedSeats.length * seatPrice,
        },
      });
    }, 2000);
  };

  const renderSeats = () => {
    const rows = [];

    for (let row = 0; row < totalRows; row++) {
      const leftStart = row * 4 + 1;
      const rightStart = row * 4 + 3;

      rows.push(
        <div key={row} className="seat-row fade-in">
          <div className="seat-group">
            {[leftStart, leftStart + 1].map((seat) => (
              <div
                key={seat}
                className={`seat 
                  ${bookedSeats.includes(seat) ? "booked" : ""}
                  ${selectedSeats.includes(seat) ? "selected" : ""}
                  ${bus?.layout === "Sleeper" ? "sleeper" : ""}
                `}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>

          <div className="aisle"></div>

          <div className="seat-group">
            {[rightStart, rightStart + 1].map((seat) => (
              <div
                key={seat}
                className={`seat 
                  ${bookedSeats.includes(seat) ? "booked" : ""}
                  ${selectedSeats.includes(seat) ? "selected" : ""}
                  ${bus?.layout === "Sleeper" ? "sleeper" : ""}
                `}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="seat-container">
      <div className="bus-card">
        <img src={bus.image} alt={bus.name} className="bus-front-image" />
        <div className="bus-details">
          <h2>{bus.name}</h2>
          <p>🕒 Departure: {bus.time}</p>
          <p className="badge">{bus.type}</p>
          <p className="badge secondary">{bus.layout}</p>
        </div>
      </div>

      <div className="front">FRONT</div>
      <div className="driver">🧑‍✈️ Driver</div>

      <div className="seat-layout">{renderSeats()}</div>

      <div className="price-section slide-up">
        <h3>Seats: {selectedSeats.join(", ") || "None"}</h3>
        <h2>Total: ₹ {selectedSeats.length * seatPrice}</h2>
      </div>

      <button
        className="book-btn"
        disabled={selectedSeats.length === 0 || isBooking}
        onClick={handleBooking}
      >
        Confirm Booking
      </button>

      {isBooking && (
        <div className="booking-overlay">
          <div className="loader"></div>
          <h3>Confirming Your Seats...</h3>
        </div>
      )}
    </div>
  );
};

export default Seat;
