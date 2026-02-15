import React from 'react'
import './Bus.css'
import { useNavigate } from "react-router-dom";
const Buses = () => {
  const navigate = useNavigate();

  const buses = [
    { id: 1, name: "Express Bus", image: "https://picsum.photos/400/300?random=1" },
    { id: 2, name: "Luxury Sleeper", image: "https://picsum.photos/400/300?random=2" },
    { id: 3, name: "City Bus", image: "https://picsum.photos/400/300?random=3" },
    { id: 4, name: "Volvo AC", image: "https://picsum.photos/400/300?random=4" },
    { id: 5, name: "Mini Bus", image: "https://picsum.photos/400/300?random=5" },
    { id: 6, name: "Tourist Coach", image: "https://picsum.photos/400/300?random=6" },
    { id: 7, name: "Double Decker", image: "https://picsum.photos/400/300?random=7" },
    { id: 8, name: "AC Seater", image: "https://picsum.photos/400/300?random=8" },
    { id: 9, name: "Non-AC Seater", image: "https://picsum.photos/400/300?random=9" },
    { id: 10, name: "School Bus", image: "https://picsum.photos/400/300?random=10" },
    { id: 11, name: "Metro Shuttle", image: "https://picsum.photos/400/300?random=11" },
    { id: 12, name: "Night Coach", image: "https://picsum.photos/400/300?random=12" },
    { id: 13, name: "Sleeper Deluxe", image: "https://picsum.photos/400/300?random=13" },
    { id: 14, name: "Highway Express", image: "https://picsum.photos/400/300?random=14" },
    { id: 15, name: "Tour Bus", image: "https://picsum.photos/400/300?random=15" },
    { id: 16, name: "Intercity Coach", image: "https://picsum.photos/400/300?random=16" },
    { id: 17, name: "Luxury AC", image: "https://picsum.photos/400/300?random=17" },
    { id: 18, name: "Ultra Sleeper", image: "https://picsum.photos/400/300?random=18" },
    { id: 19, name: "Premium Coach", image: "https://picsum.photos/400/300?random=19" },
    { id: 20, name: "Smart Bus", image: "https://picsum.photos/400/300?random=20" }
  ];

  const handleClick = (bus) => {
    navigate("/seat", { state: bus });
  };


  return (
     <div className="gallery-container">
      <h2 className="gallery-title">Available Buses</h2>

      <div className="bus-grid">
        {buses.map((bus) => (
          <div 
            key={bus.id} 
            className="bus-card"
            onClick={() => handleClick(bus)}
          >
            <img src={bus.image} alt={bus.name} />
            <h3>{bus.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Buses
