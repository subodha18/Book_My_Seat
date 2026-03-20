import React from 'react'
import './Bus.css'
import { useNavigate } from "react-router-dom";
const Buses = () => {
  const navigate = useNavigate();

  const buses = [
    { id: 1, name: "Express Bus", image: "/bus.png" },
    { id: 2, name: "Luxury Sleeper", image: "/bus.png" },
    { id: 3, name: "City Bus", image: "/bus.png" },
    { id: 4, name: "Volvo AC", image: "/bus.png" },
    { id: 5, name: "Mini Bus", image: "/bus.png" },
    { id: 6, name: "Tourist Coach", image: "/bus.png" },
    { id: 7, name: "Double Decker", image: "/bus.png" },
    { id: 8, name: "AC Seater", image: "/bus.png" },
    { id: 9, name: "Non-AC Seater", image: "/bus.png" },
    { id: 10, name: "School Bus", image: "/bus.png" },
    { id: 11, name: "Metro Shuttle", image: "/bus.png" },
    { id: 12, name: "Night Coach", image: "/bus.png" },
    { id: 13, name: "Sleeper Deluxe", image: "/bus.png" },
    { id: 14, name: "Highway Express", image: "/bus.png" },
    { id: 15, name: "Tour Bus", image: "/bus.png" },
    { id: 16, name: "Intercity Coach", image: "/bus.png" },
    { id: 17, name: "Luxury AC", image: "/bus.png" },
    { id: 18, name: "Ultra Sleeper", image: "/bus.png" },
    { id: 19, name: "Premium Coach", image: "/bus.png" },
    { id: 20, name: "Smart Bus", image: "/bus.png" }
  ];

  const handleClick = (bus) => {
    navigate("/seat", { state: bus });
  };


  return (
    <div className="page-container app-background">
      <div className="page-content animate-slide-up">
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--primary-navy)', fontSize: '32px' }}>Available Buses</h2>

        <div className="bus-grid">
          {buses.map((bus) => (
            <div 
              key={bus.id} 
              className="bus-card"
              onClick={() => handleClick(bus)}
            >
              <img src={bus.image} alt={bus.name} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '20px', marginBottom: '8px' }}>{bus.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge-premium">AC Seater</span>
                  <span style={{ color: 'var(--brand-emerald)', fontWeight: 'bold' }}>From ₹500</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Buses
