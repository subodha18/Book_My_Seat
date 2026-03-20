import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Ticket = () => {
  const [trip, setTrip] = useState("");

  const offerCards = [
    { title: "Regular", desc: "Regular fares", highlighted: true },
    { title: "Student", desc: "Extra discounts & baggage", highlighted: false },
    { title: "Work Travel", desc: "Up to 10% Extra Saving!", highlighted: false },
    { title: "Armed Forces", desc: "Up to ₹600 off", highlighted: false },
    { title: "Medical Staff", desc: "Up to ₹600 off", highlighted: false }
  ];

  return (
    <div className="flex-col-center" style={{ padding: '60px 20px', width: '100%' }}>
      <div className="glass-panel animate-slide-up" style={{ padding: '40px', width: '100%', maxWidth: '1000px' }}>
        
        <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                <input
                    type="radio"
                    checked={trip === "oneWay"}
                    onChange={() => setTrip("oneWay")}
                    style={{ accentColor: 'var(--brand-emerald)', transform: 'scale(1.2)' }}
                />
                One Way
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                <input
                    type="radio"
                    checked={trip === "roundTrip"}
                    onChange={() => setTrip("roundTrip")}
                    style={{ accentColor: 'var(--brand-emerald)', transform: 'scale(1.2)' }}
                />
                Round Trip
            </label>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', alignItems: 'end' }}>
          
          <div className="premium-input-group" style={{ marginBottom: 0 }}>
            <label>From</label>
            <h2 style={{ color: 'var(--brand-emerald)', fontSize: '24px', marginBottom: '4px' }}>Jajpur</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Maa Biraja Bus Stand</p>
            <select className="premium-input">
              <option value="">- Select Origin -</option>
              <option value="Jajpur">Jajpur</option>
              <option value="Cuttack">Cuttack</option>
            </select>
          </div>

          <div className="premium-input-group" style={{ marginBottom: 0 }}>
            <label>To</label>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '24px', marginBottom: '4px' }}>Keonjhar</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Maa Tarini Bus Stand</p>
            <select className="premium-input">
              <option value="">- Select Destination -</option>
              <option value="Keonjhar">Keonjhar</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
            </select>
          </div>

          <div className="premium-input-group" style={{ marginBottom: 0 }}>
            <label>Departure Date</label>
            <input type="date" className="premium-input" />
          </div>

          <div className="premium-input-group" style={{ marginBottom: 0 }}>
            <label>Return Date</label>
            <input type="date" className="premium-input" disabled={trip !== "roundTrip"} />
          </div>

        </div>

        <div style={{ marginTop: '40px' }}>
          <h3 style={{ marginBottom: '16px', color: 'var(--primary-navy)' }}>Special Offers & Passenger Types</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {offerCards.map((offer, idx) => (
              <div key={idx} style={{
                background: offer.highlighted ? '#fff7ed' : '#f8fafc',
                border: `1px solid ${offer.highlighted ? 'var(--brand-orange)' : 'var(--border-light)'}`,
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }} className="hover:shadow-md">
                <h4 style={{ color: offer.highlighted ? 'var(--brand-orange)' : 'var(--text-main)', marginBottom: '4px' }}>{offer.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <Link to='/bus' style={{ width: '100%', maxWidth: '300px' }}>
            <button className="btn-success" style={{ width: '100%', padding: '16px', fontSize: '20px' }}>
              Search Buses
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Ticket
