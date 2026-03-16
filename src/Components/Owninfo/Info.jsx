import { useState } from "react";
import "./Infoc.css";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const [ownerName, setOwnerName] = useState("");
  const [busNo, setBusNo] = useState("");
  const [busName, setBusName] = useState("");
  const [busType, setBusType] = useState("");
  const [seats, setSeats] = useState("");
  const [state, setState] = useState("");
  const [slide, setSlide] = useState(false);

  const navigate = useNavigate();

  const isFormValid =
    ownerName.trim() !== "" &&
    busNo.trim() !== "" &&
    busName.trim() !== "" &&
    busType.trim() !== "" &&
    seats > 0 &&
    state.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await fetch("http://localhost:5000/api/Bus/addBus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerName,
          busNo,
          busName,
          busType,
          seats,
          state,
        }),
      });

      const data = await response.json();
      console.log("Saved data:", data);

      setSlide(true);

      setTimeout(() => {
        navigate("/menu");
      }, 600);

    } catch (error) {
      console.error("Error saving bus info:", error);
    }
  };

  return (
    <div className={`page ${slide ? "slide-left" : ""}`}>
      <div className="owner-conta">
        <form onSubmit={handleSubmit}>
          <div className="input-conta">
            <label htmlFor="nam">Owner Name:</label>
            <input
              type="text"
              id="nam"
              placeholder="Enter name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />

            <label htmlFor="bnum">Bus No:</label>
            <input
              type="text"
              id="bnum"
              placeholder="Enter register no"
              value={busNo}
              onChange={(e) => setBusNo(e.target.value)}
            />

            <label htmlFor="bnam">Bus Name:</label>
            <input
              type="text"
              id="bnam"
              placeholder="Enter bus name"
              value={busName}
              onChange={(e) => setBusName(e.target.value)}
            />

            <label htmlFor="btyp">Bus Type:</label>
            <input
              type="text"
              id="btyp"
              placeholder="Enter bus type"
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
            />

            <label htmlFor="seat">Total Seats:</label>
            <input
              type="number"
              id="seat"
              placeholder="Enter total seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />

            <label htmlFor="stat">State:</label>
            <input
              type="text"
              id="stat"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div>
            <button
              className="btn3"
              type="submit"
              disabled={!isFormValid}
              style={{
                cursor: isFormValid ? "pointer" : "not-allowed",
                opacity: isFormValid ? 1 : 0.6,
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;