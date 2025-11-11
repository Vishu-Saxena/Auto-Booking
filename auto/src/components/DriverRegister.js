import React, { useState } from "react";

export default function DriverRegister() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Driver Registered Successfully!");
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="text-center mb-3">Driver Registration</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          className="form-control mb-2"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vehicle"
          className="form-control mb-2"
          placeholder="Vehicle Number"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
