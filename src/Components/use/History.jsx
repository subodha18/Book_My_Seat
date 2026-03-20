import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeUser = JSON.parse(localStorage.getItem("user"));
  const userId = activeUser ? activeUser._id : null;

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const [bookRes, payRes] = await Promise.all([
          fetch(`http://localhost:5000/api/booking/userBookings/${userId}`),
          fetch(`http://localhost:5000/api/payment/userPayments/${userId}`)
        ]);

        if (bookRes.ok) setBookings(await bookRes.json());
        if (payRes.ok) setPayments(await payRes.json());
      } catch (err) {
        console.error("Error fetching history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div className="history-loader">Loading your history...</div>;
  }

  if (!userId) {
    return (
      <div className="history-error">
        <h2>Please Login First</h2>
        <button onClick={() => navigate("/user/Login")} className="primary-btn">Go to Login</button>
      </div>
    );
  }

  return (
    <div className="page-container app-background">
      <div className="page-content animate-fade-in">
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: 'var(--primary-navy)', fontSize: '32px', marginBottom: '8px' }}>My Transaction History</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '24px' }}>Welcome back, {activeUser.name}</p>
          <button onClick={() => navigate("/menu")} className="btn-secondary">Back to Home</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>🎟️ Recent Bookings</h3>
            {bookings.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontStyle: 'italic', padding: '20px 0' }}>No bookings found.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {bookings.map((b) => (
                  <div key={b._id} style={{ border: '1px solid var(--border-light)', background: 'var(--surface-color)', padding: '16px', borderRadius: '12px', transition: 'var(--transition-fast)' }} className="hover:shadow-md hover:-translate-y-1">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge-premium">Bus: {typeof b.busId === 'string' ? b.busId : "Bus"}</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{new Date(b.bookingDate).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', marginBottom: '4px' }}><strong>Seats:</strong> {b.seats.join(", ")}</p>
                      <p style={{ fontSize: '14px' }}><strong>Total Price:</strong> <span style={{ color: 'var(--brand-emerald)', fontWeight: 'bold' }}>₹{b.totalPrice}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>💳 Payment History</h3>
            {payments.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontStyle: 'italic', padding: '20px 0' }}>No payments found.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {payments.map((p) => (
                  <div key={p._id} style={{ border: '1px solid var(--border-light)', borderLeft: '4px solid var(--brand-emerald)', background: 'var(--surface-color)', padding: '16px', borderRadius: '12px', transition: 'var(--transition-fast)' }} className="hover:shadow-md hover:-translate-y-1">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge-success-premium">Paid</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{new Date(p.paymentDate).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', marginBottom: '4px' }}><strong>Amount:</strong> <span style={{ color: 'var(--brand-emerald)', fontWeight: 'bold' }}>₹{p.amount}</span></p>
                      <p style={{ fontSize: '14px', marginBottom: '8px' }}><strong>Method:</strong> {p.paymentMethod}</p>
                      <p style={{ fontFamily: 'monospace', fontSize: '10px', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', color: 'var(--text-muted)', display: 'inline-block' }}>TXN: {p.transactionId}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default History;
