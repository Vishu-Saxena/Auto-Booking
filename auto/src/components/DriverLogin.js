import React, { useState } from "react";

export default function DriverLogin() {
  const [form, setForm] = useState({ phone: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as Driver: ${form.phone}`);
  };

  return (
    <div className="card p-4 shadow mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Driver Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          name="phone"
          className="form-control mb-3"
          placeholder="Phone Number"
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
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}
