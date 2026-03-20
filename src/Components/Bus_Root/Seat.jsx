
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
      navigate("/payment", {
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
    <div className="page-container app-background flex-col-center">
      <div className="page-content glass-panel animate-slide-up" style={{ padding: '40px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <img src={bus.image} alt={bus.name} style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '12px' }} />
            <div>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '4px' }}>{bus.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '8px' }}>🕒 Departure: {bus.time}</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="badge-premium">{bus.type}</span>
                <span className="badge-orange-premium">{bus.layout}</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Ticket Price</p>
            <h3 style={{ color: 'var(--brand-emerald)', fontSize: '24px' }}>₹{seatPrice}</h3>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="seat-layout-container" style={{ background: 'var(--surface-color)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
            <div className="front">FRONT</div>
            <div className="driver">🧑‍✈️ Driver</div>

            <div className="seat-layout">{renderSeats()}</div>
          </div>

          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Selected Seats</p>
              <h3 style={{ color: 'var(--primary-navy)' }}>{selectedSeats.join(", ") || "None"}</h3>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Total Amount</p>
              <h2 style={{ color: 'var(--brand-orange)', fontSize: '28px' }}>₹ {selectedSeats.length * seatPrice}</h2>
            </div>
          </div>

          <button
            className="btn-success"
            style={{ width: '100%', padding: '16px', fontSize: '18px' }}
            disabled={selectedSeats.length === 0 || isBooking}
            onClick={handleBooking}
          >
            {isBooking ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </div>

        {isBooking && (
          <div className="booking-overlay">
            <div className="loader"></div>
            <h3>Securing your seats...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Seat;
