import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function UserBooking() {
  // ✅ Step 4 — get data passed from BookRideSection
  const location = useLocation();
  const { pickup, drop } = location.state || {};

  const [bookingType, setBookingType] = useState("single");
  const [sharePref, setSharePref] = useState("both");
  const [from, setFrom] = useState(pickup || "NIT Agartala");
  const [to, setTo] = useState(drop || "");
  const [price, setPrice] = useState(0);

  const priceList = {
    "Airport": 300,
    "Railway Station": 200,
    "Ujjayanta Palace": 150,
    "Agartala City Center": 120,
  };

  const handleToChange = (e) => {
    const dest = e.target.value;
    setTo(dest);
    setPrice(priceList[dest] || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\nType: ${bookingType}\nFrom: ${from}\nTo: ${to}\nPrice: ₹${price}`
    );
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="text-center mb-3">Book an Auto</h3>

      {/* Show the pickup/drop if passed from homepage */}
      {pickup && drop && (
        <div className="alert alert-info text-center">
          Booking from <strong>{pickup}</strong> to <strong>{drop}</strong>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Booking Type:</label>
          <select
            className="form-select"
            value={bookingType}
            onChange={(e) => setBookingType(e.target.value)}
          >
            <option value="single">Single Booking</option>
            <option value="sharing">Sharing Booking</option>
          </select>
        </div>

        {bookingType === "sharing" && (
          <div className="mb-3">
            <label className="form-label fw-bold">Sharing Preference:</label>
            <select
              className="form-select"
              value={sharePref}
              onChange={(e) => setSharePref(e.target.value)}
            >
              <option value="female">Only Female</option>
              <option value="male">Only Male</option>
              <option value="both">Both</option>
            </select>
          </div>
        )}

        <div className="mb-3">
          <label className="form-label fw-bold">From:</label>
          <input
            type="text"
            className="form-control"
            value={from}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">To:</label>
          <select className="form-select" value={to} onChange={handleToChange}>
            <option value="">Select Destination</option>
            {Object.keys(priceList).map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {to && (
          <div className="alert alert-success text-center">
            <strong>Fare:</strong> ₹{price}
          </div>
        )}

        <button className="btn btn-success w-100">Confirm Booking</button>
      </form>
    </div>
  );
}
