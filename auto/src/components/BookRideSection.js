import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function BookRideSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();

  const locations = [
    "NIT Agartala Campus",
    "Airport",
    "Railway Station",
    "Ujjayanta Palace",
    "Agartala City Center",
  ];

  const handleBookRide = (e) => {
    e.preventDefault();

    if (!pickup || !drop) {
      alert("Please select both pickup and drop locations.");
      return;
    }

    const isLoggedIn = true;

    if (!isLoggedIn) {
      // Not logged in → store current intent & redirect
    //  localStorage.setItem("redirectAfterLogin", "/user-booking");
      alert("Please login to continue booking.");
      navigate("/login");
    } else {
      // Logged in → go to booking page
      navigate("/user-booking", {
        state: { pickup, drop },
      });
    }
  };

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-center py-5"
      style={{
        backgroundImage: "url('/images/map-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
    >
      <h1 className="fw-bold mb-4 text-dark">
        Book Your Ride with <span className="text-primary">NITA Auto!</span>
      </h1>

      <form
        onSubmit={handleBookRide}
        className="bg-white p-4 rounded shadow-sm"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {/* Pickup Dropdown */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-white">
            <FaMapMarkerAlt className="text-danger" />
          </span>
          <select
            className="form-select"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          >
            <option value="">Select Pickup Location</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Drop Dropdown */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-white">
            <FaMapMarkerAlt className="text-success" />
          </span>
          <select
            className="form-select"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          >
            <option value="">Select Drop Location</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn w-100 fw-bold"
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            fontSize: "1.1rem",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Book Ride
        </button>
      </form>
    </section>
  );
}
