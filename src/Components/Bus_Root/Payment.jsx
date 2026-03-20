import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!data) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>No Booking Details Found to Pay For</h2>;
  }

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const activeUser = JSON.parse(localStorage.getItem("user"));
    const userId = activeUser ? activeUser._id : "guest_user"; // Optional fallback

    try {
      // 1. Finalize the Booking in DB
      const bookingRes = await fetch("http://localhost:5000/api/booking/bookSeat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          busId: data.bus.id ? data.bus.id.toString() : data.bus.name || "Unknown Bus", 
          seats: data.seats,
          totalPrice: data.total
        })
      });

      const bookingData = await bookingRes.json();
      
      // 2. Finalize the Payment Log in DB
      const paymentRes = await fetch("http://localhost:5000/api/payment/addPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          bookingId: bookingData._id,
          amount: data.total,
          paymentMethod: "Credit Card",
          transactionId: "TXN" + Math.floor(Math.random() * 1000000000)
        })
      });

      if (paymentRes.ok) {
        setTimeout(() => {
          navigate("/conform", { state: data });
        }, 1500);
      } else {
        alert("Payment initialization failed");
        setIsProcessing(false);
      }

    } catch(err) {
      console.error(err);
      alert("Error processing transaction");
      setIsProcessing(false);
    }
  };

  return (
    <div className="page-container app-background flex-col-center">
      <div className="glass-panel animate-slide-up" style={{ padding: '40px', width: '90%', maxWidth: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ color: 'var(--primary-navy)', marginBottom: '8px' }}>Secure Checkout</h2>
          <p style={{ color: 'var(--text-muted)' }}>Total Amount to Pay: <strong style={{ color: 'var(--brand-emerald)', fontSize: '20px' }}>₹ {data.total}</strong></p>
        </div>

        <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="premium-input-group" style={{ marginBottom: 0 }}>
            <label>Card Number</label>
            <input 
              className="premium-input"
              type="text" 
              placeholder="XXXX XXXX XXXX XXXX" 
              maxLength="16"
              required 
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={{ letterSpacing: '2px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="premium-input-group" style={{ marginBottom: 0, flex: 1 }}>
              <label>Expiry Date</label>
              <input 
                className="premium-input"
                type="text" 
                placeholder="MM/YY" 
                maxLength="5"
                required 
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div className="premium-input-group" style={{ marginBottom: 0, flex: 1 }}>
              <label>CVV</label>
              <input 
                className="premium-input"
                type="password" 
                placeholder="XXX" 
                maxLength="3"
                required 
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                style={{ letterSpacing: '4px' }}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-success" 
            disabled={isProcessing}
            style={{ marginTop: '16px', padding: '16px', fontSize: '18px' }}
          >
            {isProcessing ? "Processing Securely..." : `Pay ₹ ${data.total}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
