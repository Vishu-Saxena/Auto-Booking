import React, { useState } from "react";

export default function StudentLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as Student: ${form.email}`);
  };

  return (
    <div className="card p-4 shadow mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Student Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
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
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
